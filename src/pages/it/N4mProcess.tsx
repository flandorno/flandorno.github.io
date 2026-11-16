import { Link } from "react-router-dom";
import CaseLayout from "../../components/CaseLayout";

/* BOZZA — traduzione italiana di ../N4mProcess.tsx, scritta dall'AI per la
   revisione di Federico. Valgono le stesse correzioni dell'originale: non c'è
   un file unico, si dice "task" e non "user story", e i tre effetti finali
   sono osservati, non misurati. */
export default function N4mProcessIt() {
  return (
    <CaseLayout
      title="Più di 600 file, un’unica fonte di verità"
      meta="Net4Market · Come lavora un team di design di tre persone"
      docTitle="Caso studio: processo di design Net4Market | Federico Landorno"
      facts={[
        { label: "Ruolo", value: "Product designer. Ho sollevato il problema e guidato il cambiamento." },
        { label: "Team", value: "Tre designer" },
        { label: "Periodo", value: "Da giugno 2025 a oggi" },
        { label: "Risultato", value: "Una versione corrente di ogni schermata, soluzioni presentate di persona, ogni build rivista prima del rilascio" },
      ]}
    >
      <section>
        <h2>Come lavorava il team</h2>
        <p>
          Quando sono entrato in Net4Market, a giugno 2025, il team di design era di tre persone:
          un profilo junior, uno senior e io. Il processo che ho trovato esisteva già, e sulla carta era
          completo.
        </p>
        <p>
          Un designer prendeva in carico un task, creava un nuovo file, disegnava le schermate e
          preparava una presentazione che spiegava la soluzione. La presentazione veniva lasciata
          al product owner e al team lead, che la leggevano per conto loro. Il feedback tornava per
          iscritto, il designer iterava, e le schermate andavano agli sviluppatori. Dopo, nessuno
          confrontava quello che veniva rilasciato con quello che era stato disegnato.
        </p>

        <p>
          Ogni task aveva il suo file, e ce n’erano più di 600. Iniziarne uno nuovo voleva dire
          ricordare quali task precedenti avevano toccato la stessa parte dell’interfaccia, e poi
          trovare quei file. Dai nuovi arrivati ci si aspettava che se la cavassero. L’unica mappa
          era nella testa di chi era lì da più tempo.
        </p>
        <p>
          Nessun passaggio, preso da solo, sembrava rotto, ed è probabilmente per questo che
          nessuno l’aveva sollevato. Sono stato il primo a dire che il problema era il modo in cui
          lavoravamo, e ho proposto come cambiarlo.
        </p>
      </section>

      <section>
        <h2>Cosa ho cambiato</h2>
        <p>Ho guidato tre cambiamenti, uno per ogni punto in cui il vecchio processo perdeva informazioni.</p>

        <h3>Una versione corrente di ogni schermata</h3>
        <p>
          Ogni app ora ha una cartella con un file per area funzionale, e quel file contiene la
          versione corrente delle sue schermate. Ogni task parte da lì. Creiamo ancora un file
          separato per ogni task e lo teniamo accanto agli altri, così quando più task procedono
          insieme resta traccia di cosa ha cambiato ciascuno.
        </p>

        <h3>Presentare la soluzione</h3>
        <p>
          La presentazione è rimasta, ma ora il designer la presenta a tutto il team coinvolto nel
          task. Le persone fanno le loro domande sul momento e sentono il ragionamento dietro ogni
          scelta. Prima dovevano ricostruirlo dalle slide. I dubbi escono in quella riunione, prima
          che inizi lo sviluppo. È un passaggio fisso per ogni task.
        </p>

        <h3>Rivedere la build prima del rilascio</h3>
        <p>
          Il designer che ha lavorato a un task guarda la build prima che esca e segnala cosa
          differisce dal design. Nel vecchio processo quelle differenze passavano inosservate e si
          accumulavano da un task all’altro.
        </p>
        <p>La revisione copre tre cose:</p>
        <ul className="fl-ul">
          <li>
            <strong>La funzionalità.</strong> Insieme al QA controlliamo che sia implementata come
            è stata disegnata.
          </li>
          <li>
            <strong>I token.</strong> Controlliamo se la build usa davvero i token nuovi.
          </li>
          <li>
            <strong>L’accessibilità.</strong> La controlliamo sulla build, non solo sul design.
          </li>
        </ul>
      </section>

      <section>
        <h2>Cosa è cambiato per il team</h2>

        <div className="fl-table-wrap" role="region" tabIndex={0} aria-label="Il processo di design prima e dopo">
          <table>
            <caption className="sr-only">Il processo di design prima e dopo</caption>
            <thead>
              <tr>
                <th scope="col" aria-label="Passaggio"></th>
                <th scope="col">Prima</th>
                <th scope="col">Dopo</th>
              </tr>
            </thead>
            <tbody>
              <tr><th scope="row">File di design</th><td>Più di 600, uno per task, nessuna mappa</td><td>Un file corrente per area funzionale, i file dei task tenuti come storico</td></tr>
              <tr><th scope="row">Revisione della soluzione</th><td>Letta da soli, feedback per iscritto</td><td>Presentata a tutto il team</td></tr>
              <tr><th scope="row">Interfaccia rilasciata</th><td>Mai controllata</td><td>Rivista dal designer</td></tr>
            </tbody>
          </table>
        </div>

        <p>Tre cose sono diverse nel lavoro di tutti i giorni.</p>
        <ul className="fl-ul">
          <li>
            <b>Meno rilavorazioni.</b> Le domande che prima emergevano dopo lo sviluppo, o in giri
            di commenti scritti, ora escono durante la presentazione.
          </li>
          <li>
            <b>Partenze più rapide.</b> Nessuno cerca nei vecchi file per capire com’è oggi una
            schermata. Il lavoro comincia dalla versione corrente.
          </li>
          <li>
            <b>Inserimento più facile.</b> Una persona arrivata dopo il cambiamento si è orientata
            senza dipendere dalla memoria di qualcun altro.
          </li>
        </ul>
        <p>
          Tutto questo è andato di pari passo con il rifacimento del nostro UI kit in un design
          system, che è un caso studio a parte:{" "}
          <Link to="/n4m" className="fl-inline">Da UI kit a linguaggio condiviso</Link>.
        </p>
      </section>
    </CaseLayout>
  );
}
