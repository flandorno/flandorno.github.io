#!/usr/bin/env node
/**
 * release.mjs — the mechanical half of shipping this site.
 *
 *   node scripts/release.mjs check    everything that must pass before a commit
 *   node scripts/release.mjs verify   confirm the live site is serving this build
 *
 * The judgement half — what the commit message says — is not automatable and is
 * not attempted here.
 *
 * Why a script and not a list of shell commands: every check below has been
 * forgotten or quietly defeated at least once in this repo.
 *   · `npx eslint … | tail -3 && echo ok` reads tail's exit code, so it printed
 *     "ok" over a failing lint. Nothing here pipes a check into anything.
 *   · A spacing violation reached the working tree because the audit was run
 *     before the last edit rather than after.
 *   · The never-commit list lives in .gitignore, but .gitignore is only as good
 *     as the last person who read it, so the staged set is audited against it
 *     rather than trusted.
 */

import { execFileSync, execSync } from "node:child_process";
import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const LIVE = "https://flandorno.github.io/";

/* Paths that must never reach the remote, whatever .gitignore currently says.
   Each is here because it is session exhaust, a machine-local path, a personal
   permission list, or a candid working record — none of it is source. */
const NEVER_COMMIT = [
  ".claude/",
  ".taste-skill/",
  ".impeccable/critique/",
  ".impeccable/questions/",
  ".impeccable/live/",
  ".impeccable/review/",
  ".impeccable/mocks/",
  ".impeccable/build/",
  ".impeccable/hook.cache.json",
];

const bold = (s) => `\x1b[1m${s}\x1b[0m`;
const red = (s) => `\x1b[31m${s}\x1b[0m`;
const green = (s) => `\x1b[32m${s}\x1b[0m`;
const dim = (s) => `\x1b[2m${s}\x1b[0m`;

let failures = 0;
const fail = (what, detail) => {
  failures++;
  console.log(`${red("✗")} ${what}`);
  if (detail) console.log(detail.split("\n").map((l) => "    " + l).join("\n"));
};
const pass = (what, detail) => {
  console.log(`${green("✓")} ${what}${detail ? dim("  " + detail) : ""}`);
};

/** Run a command for its exit code. Nothing is piped: a pipeline reports the
 *  exit code of its LAST stage, which is how a failing lint once passed. */
function run(label, cmd, args) {
  try {
    const out = execFileSync(cmd, args, { cwd: ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
    pass(label);
    return out;
  } catch (e) {
    const out = `${e.stdout || ""}${e.stderr || ""}`.trim();
    fail(label, out.split("\n").slice(-12).join("\n"));
    return null;
  }
}

const git = (args) => execFileSync("git", args, { cwd: ROOT, encoding: "utf8" }).trim();

/* ── check ────────────────────────────────────────────────────────────────── */

function check() {
  console.log(bold("\nPre-flight\n"));

  run("spacing grid", "node", ["scripts/audit-spacing.mjs"]);
  /* `tsc -b`, NOT `tsc --noEmit`. The root tsconfig.json is a solution file —
     "files": [] plus two project references — so `tsc --noEmit` resolves to
     zero files and exits 0 no matter what is broken. It was used as the
     typecheck in this repo for a whole session and never checked anything;
     only `npm run build` was catching type errors, as a build failure. */
  run("typecheck", "npx", ["tsc", "-b", "--noEmit"]);
  run("lint", "npx", ["eslint", "src", "--max-warnings", "0"]);
  run("build", "npm", ["run", "build"]);

  console.log(bold("\nWhat would be committed\n"));

  const staged = git(["add", "-A", "--dry-run"])
    .split("\n")
    .filter(Boolean)
    .map((l) => l.replace(/^(add|remove)\s+'(.*)'$/, "$2"));

  if (staged.length === 0) {
    console.log(dim("  nothing to commit — the tree is clean"));
  } else {
    for (const p of staged) console.log("  " + p);
  }

  /* Anything .gitignore covers must not be in that list. If it is, something
     added it with `git add -f` or it was tracked before the rule existed. */
  const leaked = staged.filter((p) => {
    try {
      execFileSync("git", ["check-ignore", "-q", p], { cwd: ROOT, stdio: "ignore" });
      return true;
    } catch {
      return false;
    }
  });
  if (leaked.length) fail("an ignored path is staged", leaked.join("\n"));
  else pass("no ignored path is staged");

  /* And the list above is checked directly, against both the staged set and
     everything already tracked — .gitignore does not untrack what it missed. */
  const tracked = git(["ls-files"]).split("\n");
  const forbidden = [...new Set([...staged, ...tracked])].filter((p) =>
    NEVER_COMMIT.some((n) => p === n.replace(/\/$/, "") || p.startsWith(n)),
  );
  if (forbidden.length) fail("a never-commit path is in the repo", forbidden.join("\n"));
  else pass(`none of the ${NEVER_COMMIT.length} never-commit paths are tracked or staged`);

  console.log(bold("\nBranch\n"));
  const branch = git(["branch", "--show-current"]);
  console.log(`  on ${branch}`);
  try {
    execFileSync("git", ["fetch", "--quiet", "origin"], { cwd: ROOT, stdio: "ignore" });
    const behind = git(["rev-list", "--count", `${branch}..origin/${branch}`]);
    if (behind !== "0") fail(`${behind} commit(s) on origin/${branch} are not here — pull first`);
    else pass("up to date with origin");
  } catch {
    console.log(dim("  could not reach origin; skipping the up-to-date check"));
  }

  console.log();
  if (failures) {
    console.log(red(bold(`${failures} problem(s). Do not commit.\n`)));
    process.exit(1);
  }
  console.log(green(bold("Clear to commit.\n")));
}

/* ── verify ───────────────────────────────────────────────────────────────── */

/** GitHub Pages serves the previous build for a minute or two after a push, so
 *  "I deployed" is not "it is live". The built asset name carries a content
 *  hash; poll until the live HTML references the one just built. */
async function verify() {
  const assets = readdirSync(resolve(ROOT, "dist/assets"));
  const css = assets.find((f) => f.startsWith("index-") && f.endsWith(".css"));
  const js = assets.find((f) => f.startsWith("index-") && f.endsWith(".js"));
  if (!css) {
    console.log(red("no built CSS in dist/assets — run a build first"));
    process.exit(1);
  }
  console.log(bold("\nWaiting for the live site\n"));
  console.log(dim(`  looking for ${css}`));

  for (let i = 1; i <= 12; i++) {
    let html = "";
    try {
      html = await fetch(`${LIVE}?cb=${Date.now()}`, { cache: "no-store" }).then((r) => r.text());
    } catch (e) {
      console.log(dim(`  attempt ${i}: ${e.message}`));
    }
    if (html.includes(css)) {
      pass(`live after ${i} attempt(s)`, `${css}${js ? " + " + js : ""}`);
      const sheet = await fetch(LIVE + "assets/" + css).then((r) => r.text());
      console.log(dim(`  stylesheet served: ${sheet.length} bytes`));
      console.log(green(bold("\nThe live site is serving this build.\n")));
      console.log(dim("  Still worth a human look: the three widths, and the hero on a real phone.\n"));
      return;
    }
    console.log(dim(`  attempt ${i}: still the previous build`));
    await new Promise((r) => setTimeout(r, 15000));
  }
  console.log(red(bold("\nStill not live after 3 minutes. Check the Pages build in the repo's Actions tab.\n")));
  process.exit(1);
}

/* ── ─────────────────────────────────────────────────────────────────────── */

const mode = process.argv[2];
if (mode === "check") check();
else if (mode === "verify") await verify();
else {
  console.log(`usage:
  node scripts/release.mjs check    everything that must pass before a commit
  node scripts/release.mjs verify   confirm the live site is serving this build`);
  process.exit(2);
}
