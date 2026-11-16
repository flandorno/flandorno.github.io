import { Link } from "react-router-dom";
import CaseLayout from "../../components/CaseLayout";
import Figure from "../../components/Figure";
import FormComparison from "../../components/FormComparison";

/* BOZZA — traduzione italiana di ../N4m.tsx, scritta dall'AI per la revisione
   di Federico. Non va online finché ITALIAN_CONTENT_READY (src/i18n) non lo
   dice. Stessi fatti, stesse attribuzioni dell'originale: se cambia l'inglese,
   cambia anche questa. L'esempio dei due form resta in inglese: è il prodotto. */
export default function N4mIt() {
  return (
    <CaseLayout
      title="Da UI kit a linguaggio condiviso"
      meta="Net4Market · Design system per una suite B2B SaaS multi-app"
      docTitle="Caso studio: design system Net4Market | Federico Landorno"
      facts={[
        { label: "Ruolo", value: "Product designer. Ho proposto il rifacimento e l’ho guidato." },
        { label: "Team", value: "Tre designer, insieme agli sviluppatori frontend" },
        { label: "Periodo", value: "Da giugno 2025 a oggi" },
        { label: "Risultato", value: "Una pagina con una tabella richiedeva un mese di sviluppo. Ora si configura in un giorno." },
      ]}
    >
      <Figure seed={11} />

      <section>
        <h2>Il kit che ho trovato</h2>
        <p>
          Quando sono entrato in Net4Market, a giugno 2025, la suite c’era già: un insieme di app
          B2B, per lo più schermate desktop piene di tabelle, form e pagine di dettaglio, costruite
          nei due anni precedenti su un UI kit modellato su Material Design. Il team di design era
          di tre persone: un profilo junior, uno senior e io.
        </p>
        <p>
          Material nasce per le app mobile consumer, e nessuno si era chiesto se fosse adatto a un
          prodotto desktop denso di dati. Il kit non aveva token, né requisiti di accessibilità, né
          un comportamento responsive. Era un insieme di schermate che si somigliavano, e la sua
          coerenza finiva lì.
        </p>
        <p>
          Il costo si vedeva nello sviluppo. Gli sviluppatori ricevevano schermate statiche e
          dovevano decidere da soli spaziature, dimensioni e comportamento, così a ogni task quello
          che andava in produzione si allontanava un po’ di più dal design. Una nuova pagina con
          una tabella, costruita per essere uguale a quelle già sviluppate, richiedeva un mese, e
          usciva comunque senza comportamento responsive e senza supporto all’accessibilità.
        </p>
      </section>

      <section>
        <h2>Perché ho spinto per rifarlo</h2>
        <p>
          Dopo un po’ di tempo dentro quel processo, quello che vedevo era un team che prendeva
          ogni decisione da zero. Designer e sviluppatori non avevano un vocabolario comune per
          colore, spaziatura o tipografia, quindi ogni handoff era un’interpretazione. Sistemare i
          componenti uno alla volta non avrebbe cambiato questo.
        </p>
        <p>
          Ho proposto di sostituire il kit con un design system e ho guidato il lavoro. Le altre
          due persone del team di design hanno contribuito, e sul lato engineering ho lavorato
          soprattutto con Riccardo, che sviluppa il frontend.
        </p>
        <p>
          Ogni componente è partito da una conversazione con gli sviluppatori su cosa gli serviva e
          su cosa li rallentava. La mia formazione in informatica ha reso quelle conversazioni più
          facili.
        </p>
      </section>

      <section>
        <h2>Cosa abbiamo costruito</h2>

        <h3>Tre livelli di token</h3>
        <p>
          La base è un’architettura di token a tre livelli. I token primitivi contengono i valori
          grezzi: ogni colore, passo di spaziatura e dimensione tipografica usati dal sistema. I
          token semantici danno a quei valori uno scopo, così &ldquo;blue-500&rdquo; diventa
          &ldquo;color-action-primary&rdquo;. I token di componente prendono i token semantici e li
          applicano a un componente specifico. I riferimenti vanno solo in quella direzione, e un
          componente non punta mai a un valore grezzo.
        </p>

        <h3>Da Figma al CSS</h3>
        <p>
          Ho costruito i tre livelli in Figma con Tokens Studio. Riccardo ha scritto la
          configurazione di Style Dictionary che li trasforma in CSS custom property, ha provato
          ogni caso e mi ha detto dove la mia struttura non si traduceva in modo pulito. Siamo
          andati avanti e indietro finché l’output non corrispondeva. Da allora un valore cambiato
          in Figma arriva nel nostro ambiente di test come la stessa CSS custom property, e nessuno
          lo riscrive a mano lungo il percorso. Niente va direttamente in produzione.
        </p>

        <h3>Componenti configurati dal backend</h3>
        <p>
          I token ci hanno dato un vocabolario comune. La suite aveva un secondo problema: lo
          stesso componente deve comportarsi in modo diverso a seconda del contesto, della
          configurazione del cliente e delle regole di business.
        </p>
        <p>
          Abbiamo progettato i componenti più grandi in modo che sia la configurazione del backend
          a decidere come si comportano. La tabella è l’esempio più chiaro. Una sola
          implementazione può essere paginata o no, mostrare colonne diverse, permettere
          l’ordinamento su alcune, nascondere colonne in base ai permessi, supportare la selezione
          delle righe per le azioni di massa e offrire filtri rapidi o un query builder completo.
          Niente di questo è scritto nel codice.
        </p>
        <Figure seed={23} />
        <p>
          Layout di pagina, form e pagine di dettaglio funzionano allo stesso modo. Gli
          sviluppatori costruiscono una superficie una volta e la adattano con la configurazione. I
          designer specificano cosa può fare un componente e non disegnano più a mano ogni
          variante.
        </p>

        <h3>Responsive e accessibile dal primo componente</h3>
        <p>
          La vecchia suite era solo desktop perché nessuno aveva mai deciso diversamente, e due
          anni di schermate non sarebbero mai stati adattati a posteriori. Alcuni dei nostri utenti
          lavorano sul campo e aprono la suite da tablet e telefono nei cantieri, quindi ogni nuovo
          componente doveva funzionare a quelle dimensioni fin dall’inizio. I requisiti WCAG 2.1
          sono scritti nella specifica di ogni componente, così un componente è accessibile nel
          momento in cui viene costruito.
        </p>
      </section>

      <section>
        <h2>Lo stesso form, prima e dopo</h2>
        <p>
          Ecco un form costruito in entrambi i modi. A sinistra la versione legacy, dove ogni campo
          porta con sé i propri valori scritti a mano. A destra la versione del design system, dove
          ogni valore viene da un token semantico. A destra la dark mode funziona senza toccare il
          componente.
        </p>
        <div className="fl-bleed">
          <FormComparison />
        </div>
      </section>

      <section>
        <h2>Risultati</h2>
        <p>
          Il design system è in produzione. Il risultato più facile da misurare è una pagina con
          una tabella. Costruirne una uguale alle pagine esistenti richiedeva un mese. Oggi
          richiede circa un giorno, perché il componente tabella esiste già e il resto lo fa la
          configurazione del backend.
        </p>

        <div className="fl-table-wrap" role="region" tabIndex={0} aria-label="Prima e dopo il design system">
          <table>
            <caption className="sr-only">Prima e dopo il design system</caption>
            <thead>
              <tr>
                <th scope="col" aria-label="Metrica"></th>
                <th scope="col">Prima</th>
                <th scope="col">Dopo</th>
              </tr>
            </thead>
            <tbody>
              <tr><th scope="row">Pagina con una tabella</th><td>1 mese di sviluppo</td><td>1 giorno di configurazione</td></tr>
              <tr><th scope="row">Comportamento responsive</th><td>Assente</td><td>Incluso</td></tr>
              <tr><th scope="row">Accessibilità</th><td>Non considerata</td><td>WCAG 2.1 come base</td></tr>
              <tr><th scope="row">Token</th><td>Nessuno</td><td>Tre livelli, da Figma al CSS</td></tr>
            </tbody>
          </table>
        </div>

        <p>
          È cambiato anche il lavoro degli sviluppatori. Prima passavano settimane a costruire
          varianti di pagine simili. Ora una nuova pagina vuol dire aggiungere la route, disporre i
          componenti e collegare la chiamata API che restituisce la configurazione. Spaziature,
          dimensioni e valori tipografici vengono dai token, quindi nessuno deve ricavarli da uno
          screenshot. Il tempo risparmiato va nel migliorare i componenti a partire dal feedback
          degli utenti.
        </p>
        <p>
          Gli sviluppatori frontend hanno descritto il cambiamento come una boccata d’aria fresca,
          soprattutto perché ora partecipano alle decisioni e non si limitano più a riceverle.
        </p>
        <p>
          Sul backend, tenere la configurazione in un solo posto ha ridotto la duplicazione delle
          regole di business. Una validazione si definisce una volta e vale ovunque.
        </p>
        <p>
          Rifare il kit è stata metà del lavoro in Net4Market. L’altra metà è stata il modo in cui
          lavorava il team di design, che racconto in{" "}
          <Link to="/n4m-process" className="fl-inline">Più di 600 file, un’unica fonte di verità</Link>.
        </p>
      </section>
    </CaseLayout>
  );
}
