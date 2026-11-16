/* Interface sounds, synthesised: no audio files. Off by default.
   The AudioContext is created on the first sound, which always follows a
   click, so the browser's autoplay rule is satisfied.

   Different actions sound different:
     tap    a plain control                       short high blip
     on     a switch or checkbox going on         two notes up
     off    … going off                           two notes down
     nav    a link that opens a page              low knock
     dull   a control that has nothing to do      soft thud
     slide  one scene pushing out another         a breath of noise, rising
                                                  going forward, falling back
     tone   the battery charging                  four notes, C E G C
   All of them are quiet and under half a second, except the slide, which
   lasts as long as the tiles take to cross. */
import { getPrefs } from "./prefs";

export type Sound = "tap" | "on" | "off" | "nav" | "dull";

let ctx: AudioContext | null = null;
let noise: AudioBuffer | null = null;

/** Fired on window after each sound, so the speaker grill can react. */
export const SOUND_EVENT = "fl-sound";

/* Safari is strict about audio and gave no sound at all with the plain
   approach (owner, 2026-11-15, Safari 27). Three things are done for it:
   · the context is created and resumed directly inside a click, a tap or a
     key press (`prime`), never a moment later and never on a wheel;
   · that same gesture plays one silent sample, the usual way to make WebKit
     open the audio output;
   · a sound is only scheduled once the context reports "running". Scheduled
     while it is still starting, a 60ms blip is over before the output is. */
let unlocked = false;

export function prime(): void {
  try {
    ctx ??= new AudioContext();
    if (ctx.state !== "running") void ctx.resume();
    if (!unlocked) {
      const source = ctx.createBufferSource();
      source.buffer = ctx.createBuffer(1, 1, ctx.sampleRate);
      source.connect(ctx.destination);
      source.start(0);
      unlocked = true;
    }
  } catch {
    /* no audio available */
  }
}

/** Runs `make` once the context is live, if sounds are on and audio is
    available. */
function withAudio(make: (ctx: AudioContext, now: number) => void): void {
  if (!getPrefs().sound) return;
  try {
    const audio = (ctx ??= new AudioContext());
    /* A little ahead of "now", so the attack is not cut. */
    const run = () => make(audio, audio.currentTime + 0.02);
    if (audio.state === "running") run();
    else
      void audio.resume().then(run, () => {
        /* not allowed yet: no gesture has woken the audio */
      });
    if (import.meta.env.DEV) console.debug("[sound]", audio.state, audio.sampleRate);
  } catch {
    /* no audio available: stay silent */
  }
  window.dispatchEvent(new Event(SOUND_EVENT));
}

type Note = {
  type: OscillatorType;
  /** Start and end frequency, Hz. */
  from: number;
  to?: number;
  /** Seconds after "now". */
  at?: number;
  length: number;
  volume: number;
};

function note(ctx: AudioContext, now: number, n: Note): void {
  const start = now + (n.at ?? 0);
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = n.type;
  osc.frequency.setValueAtTime(n.from, start);
  if (n.to) osc.frequency.exponentialRampToValueAtTime(n.to, start + n.length * 0.7);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(n.volume, start + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + n.length);
  osc.connect(gain).connect(ctx.destination);
  osc.start(start);
  osc.stop(start + n.length + 0.02);
}

const RECIPES: Record<Sound, Note[]> = {
  tap: [{ type: "square", from: 1400, to: 500, length: 0.06, volume: 0.05 }],
  on: [
    { type: "triangle", from: 660, length: 0.07, volume: 0.09 },
    { type: "triangle", from: 990, at: 0.06, length: 0.11, volume: 0.09 },
  ],
  off: [
    { type: "triangle", from: 740, length: 0.07, volume: 0.09 },
    { type: "triangle", from: 494, at: 0.06, length: 0.11, volume: 0.09 },
  ],
  nav: [
    { type: "sine", from: 320, to: 150, length: 0.12, volume: 0.16 },
    { type: "square", from: 900, to: 400, length: 0.03, volume: 0.03 },
  ],
  dull: [{ type: "sine", from: 170, to: 120, length: 0.09, volume: 0.12 }],
};

export function play(sound: Sound): void {
  withAudio((ctx, now) => RECIPES[sound].forEach((n) => note(ctx, now, n)));
}

/** One scene pushing out another: filtered noise that swells and fades over
    `length` seconds. It rises going forward and falls going back. */
export function playSlide(dir: 1 | -1, length: number): void {
  withAudio((ctx, now) => {
    if (!noise) {
      noise = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
      const data = noise.getChannelData(0);
      for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    }
    const source = ctx.createBufferSource();
    source.buffer = noise;
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.Q.value = 0.8;
    const [low, high] = [350, 1700];
    filter.frequency.setValueAtTime(dir > 0 ? low : high, now);
    filter.frequency.exponentialRampToValueAtTime(dir > 0 ? high : low, now + length);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, now);
    /* Filtered noise carries far less level than a note: at the gain of
       the other sounds it measured a quarter of them and could not be heard. */
    gain.gain.exponentialRampToValueAtTime(0.32, now + length * 0.45);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + length);
    source.connect(filter).connect(gain).connect(ctx.destination);
    source.start(now);
    source.stop(now + length + 0.05);
  });
}

/* The battery charging: four notes going up, C E G C. */
const TONES = [523.25, 659.25, 783.99, 1046.5];

export function playTone(step: 0 | 1 | 2 | 3): void {
  /* The last note rings a little longer. */
  withAudio((ctx, now) => note(ctx, now, { type: "triangle", from: TONES[step], length: step === 3 ? 0.4 : 0.2, volume: 0.09 }));
}
