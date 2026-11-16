import CaseLayout from "../../components/CaseLayout";
import Figure from "../../components/Figure";
import AppIcon from "../../components/AppIcon";
import { COMPETITORS, SCREENS, Wellbeing } from "../eluxAssets";

/* BOZZA — traduzione italiana di ../Electrolux.tsx, scritta dall'AI per la
   revisione di Federico. Stessi vincoli dell'originale: non c'è mai stato un
   questionario (il "sì" è stato detto a voce), e i numeri d'uso della prova
   sul campo sono suoi e non vanno arrotondati in qualcosa di più forte. */
export default function ElectroluxIt() {
  return (
    <CaseLayout
      title="Hanno detto sì ai widget, poi non li hanno usati"
      meta="Electrolux · Ricerca sui widget per la smart home"
      docTitle="Caso studio: Electrolux | Federico Landorno"
      facts={[
        { label: "Ruolo", value: "Junior designer. Ho condotto la ricerca e costruito i prototipi, con la guida di una figura senior di UX research." },
        { label: "Periodo", value: "2019" },
        { label: "Risultato", value: "I widget sono scesi nella roadmap e il controllo vocale è diventato la priorità" },
      ]}
    >
      <Figure src={Wellbeing} alt="Un elettrodomestico connesso Electrolux in un ambiente domestico" />

      <section>
        <h2>L’ipotesi</h2>
        <p>
          Nel 2019 sono entrato in Electrolux come junior designer sull’app per i suoi
          elettrodomestici connessi. Il team di prodotto era convinto che i widget sulla schermata
          home avrebbero aumentato l’engagement, dando alle persone un accesso più rapido a robot
          aspirapolvere e purificatori d’aria, e i widget erano una priorità alta in una roadmap di
          sei mesi.
        </p>
        <p>
          Il mio compito era verificare quella convinzione prima che l’azienda investisse molto
          nello sviluppo. Sono stato il primo designer a lavorare sulla questione, con una figura
          senior di UX research che mi ha aiutato a strutturare lo studio, e il progetto è diventato la
          mia tesi magistrale.
        </p>
      </section>

      <section>
        <h2>La ricerca</h2>
        <p>Ho pianificato tre fasi, ognuna delle quali guardava l’ipotesi da un lato diverso.</p>

        <h3>Fase 1: 12 app concorrenti</h3>
        <p>
          Ho guardato come altre 12 app per la smart home permettono di controllare i dispositivi,
          e come i widget erano stati adottati nelle diverse categorie.
        </p>
        <ul className="fl-icon-grid" aria-label="Le dodici app concorrenti analizzate">
          {COMPETITORS.map((src, i) => (
            <li key={i}><AppIcon imgUrl={src} /></li>
          ))}
        </ul>
        <p>
          La maggior parte offriva dei widget. Le recensioni pubbliche non li nominavano quasi mai,
          né per lodarli né per lamentarsene.
        </p>

        <h3>Fase 2: 15 interviste</h3>
        <p>
          Ho intervistato 15 persone che già usavano l’app Electrolux sulle loro abitudini: quanto
          spesso la aprivano e cosa le spingeva a farlo. Si dividevano in due gruppi.
        </p>
        <ul className="fl-ul">
          <li><b>Imposta e dimentica:</b> programmavano cicli automatici e toccavano l’app di rado.</li>
          <li><b>Chi regola ogni tanto:</b> aprivano l’app circa una volta a settimana per avviare un ciclo di pulizia o controllare la qualità dell’aria.</li>
        </ul>
        <p>
          Quando ne parlavamo, l’idea dei widget piaceva. Ma nessuno dei due gruppi descriveva come
          un problema il fatto di arrivare ai comandi. Quello che faticavano a fare era ricordarsi
          di usarli.
        </p>

        <h3>Fase 3: widget funzionanti, 20 persone, due settimane</h3>
        <p>
          Le opinioni su una funzione che nessuno aveva provato non bastavano, quindi ho progettato
          e programmato dei widget funzionanti. Venti partecipanti li hanno installati sui propri
          telefoni e ci hanno convissuto per due settimane, mentre io ne tracciavo l’uso e facevo
          interviste di follow-up.
        </p>
        <ul className="fl-screens" aria-label="I prototipi di widget provati sul campo">
          {SCREENS.map((src, i) => (
            <li key={i}>
              <img src={src} alt={`Prototipo di widget ${i + 1}`} loading="lazy" decoding="async" />
            </li>
          ))}
        </ul>
        <p>
          Mi aspettavo che l’uso aumentasse. Dei 20 partecipanti, tra tre e cinque hanno usato un
          widget al massimo una o due volte a settimana. Gli altri al massimo una volta, o mai.
          Alcuni avevano provato i widget e poi si erano dimenticati che c’erano. Chi ha continuato
          a usarli non li ha trovati migliori dell’aprire l’app.
        </p>
        <p>
          Nelle interviste di follow-up le risposte erano gentili e piatte: &ldquo;È carino averlo,
          credo.&rdquo; &ldquo;L’ho usato un paio di volte.&rdquo; &ldquo;Non ci penso
          granché.&rdquo;
        </p>
      </section>

      <section>
        <h2>Cosa sostenevano i dati</h2>
        <p>
          Niente nei risultati diceva che i widget fossero un errore. Le persone che avevano accolto
          bene l’idea hanno usato pochissimo la cosa vera, e l’aumento di interazione con i
          dispositivi su cui il team contava non si è mai visto. Non potevo chiamarlo un fallimento,
          e non potevo nemmeno chiamarlo un argomento a favore di mesi di sviluppo.
        </p>
        <p>
          Gli stessi dati mostravano però come usavano gli elettrodomestici le persone che ne
          traevano di più:
        </p>
        <ul className="fl-ul">
          <li><strong>Routine automatiche</strong> (aspirare ogni martedì alle 10)</li>
          <li><strong>Comandi vocali</strong> (a mani libere mentre si cucina o si pulisce)</li>
          <li><strong>Attivazioni ambientali</strong> (il purificatore si regola sulla qualità dell’aria)</li>
        </ul>
        <p>
          Per loro ogni passaggio manuale era attrito, che passasse da un widget o dall’app intera.
          Un widget rende quel passaggio più corto, e questi utenti lo stavano eliminando.
        </p>
      </section>

      <section>
        <h2>La raccomandazione</h2>
        <p>
          Ho presentato tutto questo ai product manager e agli stakeholder, che speravano in un via
          libera. La mia raccomandazione è stata di tenere i widget come aggiunta a basso sforzo e
          di mettere l’investimento strategico nell’integrazione con gli assistenti vocali (Google
          Home, Alexa, Apple HomeKit), dove il comportamento esisteva già.
        </p>
        <p>
          Il team di prodotto ha ascoltato. I widget sono rimasti nel backlog come funzione minore,
          e il controllo vocale è diventato un’iniziativa prioritaria.
        </p>
        <div className="fl-table-wrap" role="region" tabIndex={0} aria-label="Confronto del piano di investimento prima e dopo la ricerca">
          <table>
            <caption className="sr-only">Confronto del piano di investimento prima e dopo la ricerca</caption>
            <thead>
              <tr>
                <th scope="col" aria-label="Categoria"></th>
                <th scope="col">Piano iniziale</th>
                <th scope="col">Dopo la ricerca</th>
              </tr>
            </thead>
            <tbody>
              <tr><th scope="row">Investimento principale</th><td>Widget sulla schermata home</td><td>Integrazione con gli assistenti vocali</td></tr>
              <tr><th scope="row">Priorità dei widget</th><td>Alta (roadmap di 6 mesi)</td><td>Bassa (utile ma non necessaria)</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Lo studio ha evitato al team di spendere mesi di sviluppo su una funzione dall’adozione
          incerta.
        </p>
      </section>

      <section>
        <h2>Cosa mi sono portato via</h2>
        <p>
          Due cose mi sono rimaste. Le persone mi hanno detto di volere un accesso più rapido e poi
          si sono comportate come se volessero smettere del tutto di pensare all’elettrodomestico,
          quindi oggi mi fido di quello che le persone fanno più di quello che dicono che faranno.
        </p>
        <p>
          L’altra è presentare un risultato che delude la stanza. Avevo passato mesi a sperare che
          i widget funzionassero, e sarebbe stato facile raccontarla in quel modo.
        </p>
      </section>
    </CaseLayout>
  );
}
