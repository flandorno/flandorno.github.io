import CaseLayout from "../../components/CaseLayout";
import Figure from "../../components/Figure";
import yoga1 from "../../assets/yoga/yoga-1.png";
import yoga2 from "../../assets/yoga/yoga-2.png";

/* BOZZA — traduzione italiana di ../D4next.tsx, scritta dall'AI per la
   revisione di Federico. Le fonti dei numeri sono quelle dell'originale: i
   tempi per polizza sono riferiti da agenti e compagnie, non cronometrati;
   "nessuna correzione" vuol dire che in quattro anni nessuna compagnia ha
   rimandato indietro una polizza. */
export default function D4NextIt() {
  return (
    <CaseLayout
      title="Da 45 a 3 minuti per emettere una polizza"
      meta="Yoga · Piattaforma assicurativa B2B2C SaaS"
      docTitle="Caso studio: Yoga | Federico Landorno"
      facts={[
        { label: "Ruolo", value: "Primo designer in D4NEXT. In seguito ho guidato i designer arrivati dopo." },
        { label: "Periodo", value: "Dal 2020 al 2024" },
        { label: "Risultato", value: "Emettere una polizza è passato da un massimo di 45 minuti a circa 3" },
      ]}
    >
      <Figure seed={29} />

      <section>
        <h2>Contesto</h2>
        <p>
          Sono entrato in D4NEXT nel 2020 come primo designer, e in seguito ho guidato i designer
          arrivati dopo di me. All’inizio eravamo otto persone che cercavano di entrare nel mercato
          italiano del software assicurativo, dove la maggior parte delle compagnie lavorava ancora
          su sistemi degli anni ’90 ed era restia a sostituirli.
        </p>
        <p>
          Il nostro prodotto, Yoga, è un’interfaccia moderna che si appoggia sopra quei sistemi,
          così una compagnia può adottarla senza sostituire la propria infrastruttura. La prima
          compagnia che volevamo conquistare era DAS. Il mio lavoro era progettare quell’interfaccia,
          e questo caso studio riguarda il flusso con cui gli agenti fanno un preventivo ed emettono
          una polizza.
        </p>
      </section>

      <section>
        <h2>Cosa ho visto nelle agenzie</h2>
        <p>
          Ho passato due settimane in due agenzie, seduto accanto agli agenti mentre lavoravano. Mi
          aspettavo lamentele su schermate confuse o funzioni mancanti. Quello che li rallentava
          era più elementare, e veniva da due cose.
        </p>
        <ol className="fl-ol">
          <li>
            <strong>Ripetizione.</strong> Un agente che assicurava le tre auto e la casa di una
            famiglia ripeteva lo stesso flusso quattro volte, digitando o incollando gli stessi dati
            del cliente e dei beni in schermate che non si parlavano.
          </li>
          <li>
            <strong>Navigazione senza ordine.</strong> Il vecchio sistema era fatto di card
            personalizzabili, e gli agenti potevano saltare liberamente da una sezione all’altra.
            In pratica continuavano a cercare la card giusta, perdevano il punto in cui erano e
            dimenticavano cosa avevano già inserito.
          </li>
        </ol>
        <p>
          Gli agenti mi hanno detto che una polizza richiedeva tra i 15 e i 45 minuti. Dai miei
          appunti sulle sessioni, circa il 70% di quel tempo andava in navigazione e reinserimento
          dei dati, e il 30% sul cliente che avevano davanti.
        </p>
        <Figure seed={31} />
      </section>

      <section>
        <h2>Cosa ho progettato</h2>

        <h3>Il sistema ricorda, l’agente controlla</h3>
        <p>
          Ho ricostruito il flusso di preventivo in modo che sia il sistema a tenere i dati e
          l’agente debba solo confermarli.
        </p>
        <p>
          Per iniziare un preventivo l’agente cerca il cliente per nome, o lo aggiunge se è nuovo.
          Per un cliente esistente Yoga mostra tutto quello che sa per una verifica rapida, perché
          gli indirizzi cambiano e le famiglie anche, e i dati non aggiornati non devono finire in
          una polizza.
        </p>
        <p>
          Ogni prodotto assicurativo chiede poi i propri dati, da 5 a più di 100 campi definiti
          dalla compagnia. Yoga li recupera da dove esistono già (il CRM legacy, le polizze
          precedenti, gli altri sistemi della compagnia) e li compila.
        </p>
        <p>
          Lo stesso vale per i beni da assicurare. Una targa basta a Yoga per recuperare i dati del
          veicolo da banche dati esterne, e un indirizzo porta con sé i dati catastali e un’analisi
          del rischio. L’agente convalida quello che vede, e Yoga riscrive tutto sui sistemi legacy
          in tempo reale.
        </p>
        <Figure src={yoga1} alt="Il flusso di preventivo di Yoga che precompila i dati del cliente e dei beni" />
        <p>
          Per un cliente esistente, l’inserimento manuale è passato da un numero di campi compreso
          tra 11 e 111 a uno.
        </p>

        <h3>Errori mostrati quando c’è ancora tempo per correggerli</h3>
        <p>
          Durante l’affiancamento ho visto un agente passare 20 minuti su un preventivo, premere
          Invia e ricevere cinque errori di validazione sparsi nella pagina. Correggerli era la
          parte piccola. Trovarli richiedeva più tempo, e la lamentela dell’agente era giusta:
          perché non me l’ha detto prima?
        </p>
        <p>
          Ho progettato una validazione che lavora mentre lavora l’agente. Un errore compare appena
          viene commesso, la pagina scorre fino a lì e il messaggio dice come correggerlo.
        </p>
        <Figure src={yoga2} alt="La validazione progressiva che mostra gli errori mentre l’agente lavora" />
        <p>In quattro anni di produzione, nessuna compagnia ha rimandato indietro una polizza per correzione.</p>

        <h3>Un wizard che si adatta al prodotto</h3>
        <p>
          I prodotti assicurativi cambiano molto da una compagnia all’altra: auto, casa, impresa,
          coperture standard o su misura. Un flusso fisso non poteva servirli tutti, e le vecchie
          card avevano mostrato quanto costa la libertà totale.
        </p>
        <p>
          Ho sostituito le card con un wizard lineare che si adatta a ogni prodotto. I passaggi
          principali restano gli stessi, e quelli specifici di un prodotto, come i dettagli di
          investimento per il ramo vita, compaiono solo quando servono. Gli agenti vedono dove sono
          e cosa viene dopo, e possono tornare indietro a cambiare qualcosa senza perdere il lavoro.
        </p>
        <Figure seed={37} />
        <p>
          I nuovi agenti erano operativi nel giro di poche ore. Con il vecchio sistema servivano
          giorni di formazione.
        </p>
      </section>

      <section>
        <h2>L’impatto</h2>
        <p>I tempi qui sotto sono quelli che ci hanno riferito agenti e compagnie.</p>
        <div className="fl-table-wrap" role="region" tabIndex={0} aria-label="Metriche di impatto prima e dopo il redesign">
          <table>
            <caption className="sr-only">Metriche di impatto prima e dopo il redesign</caption>
            <thead>
              <tr>
                <th scope="col" aria-label="Metrica"></th>
                <th scope="col">Prima</th>
                <th scope="col">Dopo</th>
              </tr>
            </thead>
            <tbody>
              <tr><th scope="row">Tempo per polizza</th><td>15-45 minuti</td><td>1-10 minuti (media 3)</td></tr>
              <tr><th scope="row">Inserimento manuale</th><td>11-111 campi</td><td>1 campo (clienti esistenti)</td></tr>
              <tr><th scope="row">Formazione</th><td>Giorni</td><td>Poche ore</td></tr>
              <tr><th scope="row">Polizze rimandate indietro per correzione</th><td>Frequenti</td><td>Nessuna in 4 anni</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Yoga ci ha fatto conquistare DAS come primo cliente, e questo ha aperto la strada a
          Unipol, Generali e Zurich. Nel 2024 più di 8 compagnie assicurative usavano Yoga per
          gestire migliaia di polizze.
        </p>
        <p>
          Gli agenti ci hanno detto che <b>si sentivano finalmente di nuovo produttivi.</b>
        </p>
      </section>
    </CaseLayout>
  );
}
