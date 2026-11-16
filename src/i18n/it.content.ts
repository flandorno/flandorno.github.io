import type { Dict } from "./en";

/* DRAFT, written by the AI pair for the owner to review: the Italian of what
   Federico says in his own voice on the home page. It is imported only where
   ITALIAN_CONTENT_READY (./index.ts) is true, so a production build does not
   contain it until he has approved it. Check after a build:
   `grep -l "polizza" dist/assets/*.js` must find nothing. */
export const itContent: { cases: Dict["home"]["cases"]; line: string } = {
  cases: {
    n4m: {
      label: "Net4Market, design system",
      tags: ["Design system", "Responsive", "Token a 3 livelli", "Accessibilit\u00e0", "Nuovi componenti"],
      title: "Da UI kit a linguaggio condiviso",
    },
    yoga: {
      label: "Yoga, piattaforma assicurativa",
      tags: ["B2B", "B2C"],
      title: "Da 45 a 3 min per emettere una polizza",
      accent: "3 min",
    },
    process: {
      label: "Net4Market, processo di design",
      tags: ["Processo di design", "Governance", "Design review", "Lavoro di team"],
      title: "600+ file, un\u2019unica fonte di verit\u00e0",
      accent: "un\u2019unica",
      sub: "Una versione corrente di ogni schermata",
    },
    elux: {
      label: "Electrolux, ricerca",
      tags: ["UX research", "Smart home", "Voce e ambiente"],
      title: "Hanno detto s\u00ec ai widget, poi non li hanno usati",
      sub: "Il comportamento batte le intenzioni",
    },
  },
  line: "Sei arrivato in fondo. Grazie.",
};
