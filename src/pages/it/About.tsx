import { Link } from "react-router-dom";
import CaseLayout from "../../components/CaseLayout";

/* BOZZA — traduzione italiana di ../About.tsx, scritta dall'AI per la
   revisione di Federico. Nessuna frase in più rispetto all'originale. */
export default function AboutIt() {
  return (
    <CaseLayout title="Chi sono" meta="Product Designer" docTitle="Chi sono — Federico Landorno">
      <section>
        <p>
          Progetto sistemi che si possono misurare. Il mio lavoro sta tra strategia di prodotto,
          design system e ricerca.
        </p>
        <p>
          Quattro casi studio coprono la maggior parte di quello che faccio: un{" "}
          <Link to="/n4m" className="fl-inline">design system</Link> costruito su un’architettura
          di token a tre livelli, un{" "}
          <Link to="/n4m-process" className="fl-inline">processo di design</Link> che ha dato a più
          di 600 file scollegati un’unica fonte di verità, una{" "}
          <Link to="/d4next" className="fl-inline">piattaforma assicurativa</Link> dove emettere una
          polizza è passato da 45 minuti a 3, e una{" "}
          <Link to="/electrolux" className="fl-inline">ricerca</Link> che ha argomentato contro la
          funzione che tutti volevano.
        </p>
      </section>
    </CaseLayout>
  );
}
