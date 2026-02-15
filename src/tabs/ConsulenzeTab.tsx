import { Target, Search, Home, FileText, ClipboardCheck, Landmark, PenTool, FileStack, Table, BookOpen, FileSignature, Mail } from "lucide-react";
import type { TabName } from "@/components/BottomBar";

interface ConsulenzeTabProps {
  onNavigate: (tab: TabName) => void;
}

const consultations = [
  {
    icon: Target,
    title: "Consulenza Start — 60 minuti",
    borderColor: "hsl(43 74% 42%)",
    problem: "Stai cercando casa ma hai le idee confuse. Non sai se il tuo budget è realistico, se stai cercando nella zona giusta, se il mutuo è fattibile. Hai paura di sbagliare ma non sai da dove iniziare.",
    during: "La call è strutturata, non improvvisata. Lavoriamo sulle tue risposte al questionario, sezione per sezione. Analizziamo la tua motivazione reale, distinguiamo la casa ideale dalla casa adatta, definiamo il budget sostenibile (non quello massimo), impostiamo la strategia mutuo, e costruiamo il perimetro di ricerca.",
    output: "Un piano d'azione scritto. Sai cosa cercare, dove cercare, quanto puoi spendere davvero, e quali sono i tuoi prossimi passi. Non esci con più dubbi — esci con una direzione.",
    tools: "Tutti i materiali vengono sbloccati nel percorso completo: 6 checklist, 3 Excel, ebook, 2 contratti, template comunicazioni.",
  },
  {
    icon: Search,
    title: "Ricerca — Trovare senza stancarsi",
    borderColor: "#1d4e89",
    problem: "La ricerca è il punto in cui le persone si stancano e poi firmano male. Si scrollano centinaia di annunci, si visitano case a caso, si perde il senso di ciò che si cerca davvero.",
    during: "Definiamo la microzona con criteri reali: servizi, trasporti, rumorosità, contesto. Impostiamo filtri coerenti con il budget e i non-negoziabili. Creiamo il database Excel per tracciare ogni immobile.",
    output: "Un sistema di ricerca ordinato. Smetti di scrollare. Inizi a selezionare. Dimezzi le visite inutili.",
    tools: "Excel Mappatura Immobili, Checklist 1 — Visita",
  },
  {
    icon: Home,
    title: "Visita — Guardare con metodo, decidere a freddo",
    borderColor: "#1d4e89",
    problem: "La visita è il momento in cui l'adrenalina sale. L'agente racconta, tu ti emozioni. Non guardi gli impianti, non chiedi i documenti, non verifichi la planimetria.",
    during: "Ti preparo a cosa guardare prima della visita (analisi da scrivania), durante la visita (struttura, impianti, conformità, contesto, domande al venditore), e dopo la visita (tracciamento, foto, punti aperti, decisione a freddo).",
    output: "Un metodo ripetibile per ogni visita. Ogni immobile diventa confrontabile. Ogni decisione viene presa a freddo.",
    tools: "Checklist 1 — Visita, Excel Valutazione Visite",
  },
  {
    icon: FileText,
    title: "Proposta — Scrivere per proteggerti, non per vincolarti",
    borderColor: "#1d4e89",
    problem: "La proposta è il momento in cui la maggior parte delle persone si espone senza tutele. Firmano moduli prestampati dall'agenzia, senza clausole sospensive.",
    during: "Analizziamo la strategia di offerta: quanto offrire, come giustificare il prezzo, come costruire margine di trattativa. Verifichiamo che la proposta contenga condizioni sospensive.",
    output: "Una proposta consapevole. Sai cosa firmi, cosa rischi, e cosa succede in ogni scenario.",
    tools: "Checklist 2 — Proposta, Contratto Proposta Irrevocabile, Contratto Preliminare di Vendita",
  },
  {
    icon: ClipboardCheck,
    title: "Documenti e Preliminare — Chiudere prima di impegnarti",
    borderColor: "#1d4e89",
    problem: "Nel mercato standard, i documenti vengono rimandati. La planimetria non corrisponde allo stato reale. Le visure non vengono controllate.",
    during: "Verifichiamo il pacchetto documenti: planimetria catastale vs stato di fatto, visure catastali e ipotecarie, provenienza, conformità urbanistica. Controlliamo che il preliminare contenga tutto.",
    output: "Chiarezza documentale completa. Se ci sono difformità o punti aperti, li conosci prima di firmare.",
    tools: "Checklist 3 — Documenti, Checklist 4 — Preliminare",
  },
  {
    icon: Landmark,
    title: "Mutuo e Perizia — La banca lavora per sé, tu lavora per te",
    borderColor: "#1d4e89",
    problem: "Il mutuo non è solo un tasso. È tempo, rischio e documenti. La maggior parte delle persone accetta la prima offerta della banca senza confrontare.",
    during: "Confrontiamo 2-4 offerte di banche diverse. Calcoliamo il TAEG reale, il costo totale del mutuo su tutta la durata. Simuliamo cosa succede se la perizia è inferiore al prezzo.",
    output: "Una scelta consapevole sulla banca e sul prodotto mutuo. Sai quanto paghi davvero, cosa rischi, e come gestire gli imprevisti.",
    tools: "Checklist 5 — Mutuo e Perizia, Excel Conto Economico",
  },
  {
    icon: PenTool,
    title: "Pre-Rogito — L'ultima barriera prima della firma definitiva",
    borderColor: "#1d4e89",
    problem: "Il rogito è la firma definitiva. Dopo non si torna indietro. Ma la maggior parte delle persone arriva al rogito con sollievo, non con consapevolezza.",
    during: "Verifichiamo la bozza dell'atto notarile. Controlliamo che ogni punto aperto sia stato risolto. Prepariamo la lista di cosa controllare il giorno del rogito.",
    output: "Arrivi alla firma non con sollievo, ma con consapevolezza. Sai esattamente cosa stai firmando.",
    tools: "Checklist 6 — Pre-Rogito",
  },
];

const toolCards = [
  { icon: FileStack, title: "6 Checklist", text: "Una per ogni fase. Barriere contro le omissioni. Ti ricordano cosa chiedere, quando chiederlo, cosa non accettare come risposta." },
  { icon: Table, title: "3 Excel", text: "Ricerca, valutazione, scenari mutuo. Trasformano case, prezzi e scenari in confronti coerenti." },
  { icon: BookOpen, title: "Ebook completo", text: "Il Consulente Indipendente: il metodo dalla A alla Z, con prompt AI per analizzare annunci, proposte e preliminari." },
  { icon: FileSignature, title: "2 Contratti", text: "Proposta Irrevocabile d'Acquisto e Preliminare di Vendita. Modelli completi con clausole a tutela dell'acquirente." },
  { icon: Mail, title: "Template Comunicazioni", text: "Email e messaggi pronti per agenti, banche, notaio. Per non improvvisare nei momenti che contano." },
];

const ConsulenzeTab = ({ onNavigate }: ConsulenzeTabProps) => {
  return (
    <div className="animate-fade-in">
      {/* Intro */}
      <section className="section-padding text-white" style={{ background: "#1d4e89" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-widest mb-2" style={{ color: "hsl(43 74% 42%)" }}>IL PERCORSO COMPLETO</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            6 momenti critici. 6 consulenze. Un metodo completo dalla ricerca al rogito.
          </h2>
          <p className="text-white/80">
            Il percorso Immobiliar Coach non è un pacchetto di call generiche. È un accompagnamento decisionale nei momenti in cui si rischia davvero. Ogni consulenza interviene in una fase specifica del processo di acquisto — prima delle firme, prima delle decisioni irreversibili.
          </p>
          <p className="text-white/80 mt-3">
            Non ti diciamo cosa fare. Ti diciamo cosa controllare, cosa chiedere, e quando fermarti.
          </p>
        </div>
      </section>

      {/* Consultation Cards */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          {consultations.map((c) => (
            <div key={c.title} className="rounded-xl p-6 bg-white" style={{ borderLeft: `4px solid ${c.borderColor}`, boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
              <div className="flex items-center gap-3 mb-4">
                <c.icon className="w-6 h-6" style={{ color: c.borderColor }} />
                <h3 className="font-heading text-xl font-bold text-brand-navy">{c.title}</h3>
              </div>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-bold text-foreground/60 uppercase text-xs tracking-wider mb-1">Il problema che risolve:</p>
                  <p className="text-foreground/80">{c.problem}</p>
                </div>
                <div>
                  <p className="font-bold text-foreground/60 uppercase text-xs tracking-wider mb-1">Cosa succede durante:</p>
                  <p className="text-foreground/80">{c.during}</p>
                </div>
                <div>
                  <p className="font-bold text-foreground/60 uppercase text-xs tracking-wider mb-1">Con cosa esci:</p>
                  <p className="text-foreground/80">{c.output}</p>
                </div>
                <div>
                  <p className="font-bold text-foreground/60 uppercase text-xs tracking-wider mb-1">Strumenti:</p>
                  <p className="text-foreground/60 italic">{c.tools}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="section-padding" style={{ background: "#f5f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Ogni fase ha i suoi strumenti.
          </h2>
          <p className="text-foreground/70 mb-8">
            Gli strumenti non sono il metodo. Sono ciò che rende il metodo applicabile quando sei stanco, emotivo, sotto pressione e con mille informazioni sparse. Come un chirurgo: la competenza è nel cervello e nelle mani, ma senza il bisturi giusto non opera.
          </p>
          <div className="space-y-4 mb-8">
            {toolCards.map((t) => (
              <div key={t.title} className="flex gap-4 p-4 rounded-xl bg-white" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
                <t.icon className="w-6 h-6 shrink-0 mt-0.5" style={{ color: "hsl(43 74% 42%)" }} />
                <div>
                  <h4 className="font-bold text-brand-navy mb-1">{t.title}</h4>
                  <p className="text-sm text-foreground/70">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button onClick={() => onNavigate("bonus")} className="btn-primary">
              Ricevi 3 strumenti gratuiti →
            </button>
            <button onClick={() => onNavigate("prenota")} className="btn-secondary">
              Prenota una call gratuita →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsulenzeTab;
