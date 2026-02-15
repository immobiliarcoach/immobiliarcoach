import { Shield, Ruler, Zap, Check } from "lucide-react";
import type { TabName } from "@/components/BottomBar";
import logoMCoach from "@/assets/logo-m-coach.png";

interface HomeTabProps {
  onNavigate: (tab: TabName) => void;
}

const HomeTab = ({ onNavigate }: HomeTabProps) => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="animate-fade-in">
      {/* HERO */}
      <section
        className="text-white text-center px-5 py-16 md:py-20 md:px-10"
        style={{
          background: "linear-gradient(135deg, #1d4e89, #15365f)",
          paddingTop: undefined,
          paddingBottom: undefined,
        }}
      >
        {/* Mobile-specific compact spacing via style overrides */}
        <div className="md:hidden" style={{ paddingTop: 16, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
          <img
            src={logoMCoach}
            alt="Immobiliar Coach"
            className="mx-auto h-auto"
            style={{
              height: "80px",
              marginTop: 16,
              marginBottom: 8,
              filter: "drop-shadow(0 0 20px rgba(255,255,255,0.3)) drop-shadow(0 0 40px rgba(186,141,28,0.2))",
            }}
          />
          <p className="uppercase tracking-widest" style={{ color: "hsl(43 74% 42%)", fontSize: 11, marginBottom: 6 }}>
            CONSULENZA INDIPENDENTE PER CHI COMPRA CASA
          </p>
          <h1 className="font-heading font-bold" style={{ fontSize: 28, lineHeight: 1.15, marginBottom: 10 }}>
            Stai comprando casa?<br />
            Hai bisogno di qualcuno che lavori solo per te.
          </h1>
          <p className="text-white/80" style={{ fontSize: 14, lineHeight: 1.35, marginBottom: 14 }}>
            Non vendiamo immobili. Non intermediamo. Non prendiamo provvigioni. Ti guidiamo prima delle decisioni che contano, con un metodo strutturato e indipendente.
          </p>
          <div className="flex flex-col items-center gap-3" style={{ marginBottom: 16 }}>
            <button onClick={() => scrollToSection("problema")} className="btn-primary">
              Scopri come funziona ↓
            </button>
            <button onClick={() => onNavigate("bonus")} className="btn-secondary-white">
              Ricevi 3 strumenti gratuiti →
            </button>
          </div>
          <p className="text-white/60" style={{ fontSize: 12 }}>
            Zero impegno. Compila il questionario e ricevi 3 bonus gratis.
          </p>
        </div>

        {/* Desktop hero (unchanged) */}
        <div className="hidden md:block">
          <img
            src={logoMCoach}
            alt="Immobiliar Coach"
            className="mx-auto mb-8 h-auto"
            style={{
              height: "120px",
              filter: "drop-shadow(0 0 20px rgba(255,255,255,0.3)) drop-shadow(0 0 40px rgba(186,141,28,0.2))",
            }}
          />
          <p className="text-sm uppercase tracking-widest mb-4" style={{ color: "hsl(43 74% 42%)" }}>
            CONSULENZA INDIPENDENTE PER CHI COMPRA CASA
          </p>
          <h1 className="font-heading text-5xl font-bold mb-4 leading-tight">
            Stai comprando casa?<br />
            Hai bisogno di qualcuno che lavori solo per te.
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Non vendiamo immobili. Non intermediamo. Non prendiamo provvigioni. Ti guidiamo prima delle decisioni che contano, con un metodo strutturato e indipendente.
          </p>
          <div className="flex flex-row items-center justify-center gap-3 mb-4">
            <button onClick={() => scrollToSection("problema")} className="btn-primary">
              Scopri come funziona ↓
            </button>
            <button onClick={() => onNavigate("bonus")} className="btn-secondary-white">
              Ricevi 3 strumenti gratuiti →
            </button>
          </div>
          <p className="text-sm text-white/60">
            Zero impegno. Compila il questionario e ricevi 3 bonus gratis.
          </p>
        </div>
      </section>

      {/* IL PROBLEMA */}
      <section id="problema" className="section-padding bg-white max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy mb-6">
          Il problema non è trovare casa. È decidere sotto pressione.
        </h2>
        <p className="text-foreground/80 mb-4">
          L'agente vuole chiudere. La banca vuole vendere il mutuo. Il notaio arriva alla fine. E tu? Tu firmi. Spesso senza sapere cosa stai firmando, perché nessuno lavora davvero per te.
        </p>
        <p className="text-foreground/80 mb-6">
          La maggior parte degli errori non succede al rogito. Succede prima. Quando si visita senza criteri. Quando si firma per paura di perdere l'occasione. Quando i documenti vengono rimandati a dopo. Quando ci si fida di rassicurazioni a voce.
        </p>
        <div className="quote-box">
          <p className="text-lg font-medium italic text-brand-navy">
            "Tutti gli attori del mercato hanno un incentivo diverso dal tuo. Noi no."
          </p>
        </div>
      </section>

      {/* COS'È IMMOBILIAR COACH */}
      <section className="section-padding" style={{ background: "#f5f5f0" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-widest mb-2" style={{ color: "hsl(43 74% 42%)" }}>CHI SIAMO</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Non siamo un'agenzia. Non vendiamo case.
          </h2>
          <p className="text-foreground/80 mb-8 max-w-3xl">
            Immobiliar Coach è il primo servizio italiano di consulenza indipendente per chi acquista casa. Il nostro guadagno è la tua consapevolezza, non la tua firma. Possiamo anche dirti: fermati, questa casa non fa per te.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Indipendenza", text: "Nessun legame con agenzie, banche o costruttori. Zero provvigioni, zero conflitti di interesse. Lavoriamo solo per te." },
              { icon: Ruler, title: "Metodo", text: "6 fasi strutturate con checklist, Excel e strumenti decisionali. Costruito a partire dagli errori più frequenti visti sul campo in oltre 20 operazioni reali." },
              { icon: Zap, title: "Prevenzione", text: "Interveniamo prima delle firme, non dopo i danni. Il valore è proteggere, non riparare. Quando serve, diciamo stop." },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-xl p-6" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
                <card.icon className="w-8 h-8 mb-4" style={{ color: "hsl(43 74% 42%)" }} />
                <h3 className="font-heading text-xl font-bold text-brand-navy mb-2">{card.title}</h3>
                <p className="text-foreground/70 text-sm">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IL METODO: 6 FASI */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-widest mb-2" style={{ color: "hsl(43 74% 42%)" }}>IL METODO</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy mb-2">
            6 fasi. Dalla ricerca al rogito.
          </h2>
          <p className="text-foreground/70 mb-8 max-w-2xl">
            Ogni fase ha i suoi rischi. Ogni fase ha i suoi strumenti. In ognuna, hai qualcuno dalla tua parte.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { n: "01", title: "Ricerca", text: "Cercare senza criteri produce stanchezza, non scelte. Chi cerca senza metodo si stanca. Chi cerca con metodo seleziona." },
              { n: "02", title: "Visita", text: "Visitare senza metodo genera entusiasmo cieco o dubbi infiniti. Servono checklist, domande preparate, e una decisione presa a freddo." },
              { n: "03", title: "Proposta", text: "Una proposta mal scritta ti vincola senza proteggerti. Il prezzo non è un numero dato: è una costruzione basata su dati, non su emozioni." },
              { n: "04", title: "Documenti", text: "Quello che non verifichi prima, lo scopri troppo tardi. Planimetria, visure, provenienza, conformità urbanistica: tutto va chiuso prima di firmare." },
              { n: "05", title: "Preliminare", text: "Firmare il preliminare è un impegno economico reale. È un contratto vincolante. Devi sapere cosa rischi, cosa puoi negoziare e cosa non accettare." },
              { n: "06", title: "Mutuo e Pre-Rogito", text: "La banca lavora per sé. Tu devi sapere cosa chiedere, cosa confrontare, e cosa verificare prima della firma definitiva." },
            ].map((step) => (
              <div key={step.n} className="bg-white rounded-xl p-6 border border-border">
                <span className="font-heading text-5xl font-bold" style={{ color: "hsl(43 74% 42%)" }}>{step.n}</span>
                <h3 className="font-heading text-lg font-bold text-foreground mt-2 mb-2">{step.title}</h3>
                <p className="text-foreground/60 text-sm">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PER CHI È */}
      <section className="section-padding" style={{ background: "#f5f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy mb-6">
            È per te se...
          </h2>
          <ul className="space-y-3 mb-8">
            {[
              "Stai acquistando la tua prima o seconda casa",
              "Senti che le informazioni che trovi online non bastano",
              "Hai paura di pagare troppo o di firmare qualcosa che non capisci",
              "Non sai a chi credere tra agenti, banche e notai",
              "Vuoi qualcuno che ti dica anche quando fermarti",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "hsl(43 74% 42%)" }} />
                <span className="text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
          <div className="quote-box-navy">
            <p className="text-sm text-foreground/80 italic">
              "Non è per chi cerca qualcuno che trovi casa al posto suo. Non facciamo l'agente. Facciamo quello che nessun agente fa: proteggerti."
            </p>
          </div>
        </div>
      </section>

      {/* CHI C'È DIETRO */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-widest mb-2" style={{ color: "hsl(43 74% 42%)" }}>IL CONSULENTE</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy mb-6">
            Chi c'è dietro Immobiliar Coach
          </h2>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-28 h-28 rounded-full flex items-center justify-center shrink-0"
                 style={{ background: "#1d4e89" }}>
              <span className="font-heading text-4xl font-bold text-white">FT</span>
            </div>
            <div className="space-y-4">
              <p className="text-foreground/80 text-sm">
                Oltre 20 operazioni immobiliari tra Roma e Bergamo. Ristrutturazioni, aste, sfratti, saldi a stralcio. Decine di migliaia di euro investiti in formazione immobiliare e finanziaria tra il 2017 e il 2021.
              </p>
              <p className="text-foreground/80 text-sm">
                Figlio di madre giapponese e padre italiano — cresciuto tra culture dove il metodo conta più delle intenzioni. Dall'azienda di famiglia nella ristorazione all'immobiliare: turni lunghi, clienti diversi, trattative continue, responsabilità reali. È lì che nasce l'allenamento ai rapporti umani.
              </p>
              <p className="text-foreground/80 text-sm">
                Oggi lavora esclusivamente per chi compra casa. Non media, non vende, non prende provvigioni dalla vendita.
              </p>
              <p className="font-heading text-xl italic" style={{ color: "#1d4e89" }}>
                "Non ti spingo a comprare. Ti aiuto a decidere."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COME INIZIARE */}
      <section className="section-padding" style={{ background: "#f5f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy mb-8">
            Come iniziare
          </h2>
          <div className="space-y-8">
            {[
              { n: 1, title: "Compila il Questionario", text: "Rispondi a 24 domande per aiutarci a capire la tua situazione. Serve a lavorare in modo mirato e a prepararti al meglio." },
              { n: 2, title: "Lascia i tuoi dati", text: "Nome, email, telefono. Entro 24 ore ricevi per email 3 strumenti gratuiti: Ebook, Checklist Visita, Template Comunicazioni." },
              { n: 3, title: "Ti chiamiamo noi", text: "Una breve conversazione gratuita per capire insieme se il percorso Immobiliar Coach fa per te. Nessuna pressione." },
            ].map((step, i) => (
              <div key={step.n} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white font-bold"
                     style={{ background: "hsl(43 74% 42%)" }}>
                  {step.n}
                </div>
                <div className={i < 2 ? "border-l-2 border-dashed border-brand-gold/30 pl-4 pb-4" : "pl-4"}>
                  <h3 className="font-heading text-lg font-bold text-brand-navy mb-1">{step.title}</h3>
                  <p className="text-foreground/70 text-sm">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="section-padding text-white text-center" style={{ background: "#1d4e89" }}>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
          Stai per comprare casa? Fai il primo passo.
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
          <button onClick={() => onNavigate("bonus")} className="btn-primary">
            Compila il Questionario e ricevi 3 bonus →
          </button>
          <button onClick={() => onNavigate("consulenze")} className="btn-secondary-white">
            Scopri le consulenze →
          </button>
        </div>
        <p className="text-sm text-white/60">
          Compila il questionario. Ricevi 3 strumenti gratuiti nella tua email.
        </p>
      </section>
    </div>
  );
};

export default HomeTab;
