import { en, type Dict } from "./en";

/* The Italian interface labels. They ship as they are.
   The case titles and the closing line are Federico's claims: their Italian
   is a draft in ./it.content.ts, and this file keeps them in English so that
   nothing unapproved is in what a production build imports. */
export const it: Dict = {
  nav: {
    home: "Home",
    cases: "Casi studio",
    about: "Chi sono",
    toDark: "Passa al tema scuro",
    toLight: "Passa al tema chiaro",
    label: "Principale",
    skip: "Vai al contenuto",
  },
  landing: {
    role: "Product Designer",
    experienceIn: "Esperienza in",
    sectors: ["Insurtech", "IoT", "E-procurement"],
    sectorsSpoken: "Esperienza in insurtech, IoT ed e-procurement.",
    animation: "Animazioni",
    sound: "Suoni",
    language: "Lingua",
    languageSwitch: "Lingua: italiano. Passa all’inglese",
    resume: "Curriculum",
    resumeNewTab: "apre il PDF in una nuova scheda",
    batteryFlat: "Batteria scarica. Ricaricala",
    batteryCharging: "Batteria in carica",
    batteryFull: "Batteria carica",
  },
  read: {
    next: "Prossimo caso studio",
    contact: "Contattami su LinkedIn",
  },
  home: {
    readMore: "Leggi",
    demoCheckbox: "Checkbox di esempio",
    demoSwitch: "Interruttore di esempio",
    readCase: "Leggi il caso studio:",
    next: "Sezione successiva",
    caseStudy: "Caso studio",
    caseStudies: "Casi studio",
    cases: en.home.cases,
    footer: {
      ...en.home.footer,
      label: "Contatti",
      newTab: "si apre in una nuova scheda",
      top: "Torna all\u2019inizio",
    },
  },
};
