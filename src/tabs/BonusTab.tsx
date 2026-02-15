import { useState } from "react";
import { BookOpen, CheckSquare, MessageSquare, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";

type BonusState = "intro" | "questionnaire" | "contact" | "confirmation";

const TOTAL_SECTIONS = 7;

const BonusTab = () => {
  const [state, setState] = useState<BonusState>("intro");
  const [section, setSection] = useState(1);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [contactData, setContactData] = useState({ nome: "", email: "", telefono: "" });

  const updateField = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  if (state === "confirmation") {
    return (
      <div className="section-padding animate-fade-in text-center" style={{ background: "#f5f5f0" }}>
        <CheckCircle className="w-16 h-16 mx-auto mb-6" style={{ color: "hsl(43 74% 42%)" }} />
        <h2 className="font-heading text-3xl font-bold text-brand-navy mb-4">
          Fatto! I tuoi 3 bonus sono in arrivo.
        </h2>
        <p className="text-foreground/80 mb-6">Entro 24 ore ricevi nella tua casella email:</p>
        <div className="max-w-md mx-auto text-left space-y-3 mb-8">
          <p className="flex items-center gap-3"><BookOpen className="w-5 h-5 shrink-0" style={{ color: "hsl(43 74% 42%)" }} /> Ebook — Il Consulente Indipendente</p>
          <p className="flex items-center gap-3"><CheckSquare className="w-5 h-5 shrink-0" style={{ color: "hsl(43 74% 42%)" }} /> Checklist — Visita Immobile</p>
          <p className="flex items-center gap-3"><MessageSquare className="w-5 h-5 shrink-0" style={{ color: "hsl(43 74% 42%)" }} /> Template — Comunicazioni per agenti, banche, notaio</p>
        </div>
        <p className="text-foreground/70 text-sm mb-4">
          Ti chiamiamo anche per una breve conversazione gratuita: serve a capire la tua situazione e vedere insieme se il percorso Immobiliar Coach fa per te. Nessuna pressione, nessun impegno.
        </p>
        <p className="text-xs text-foreground/50">
          Controlla anche la cartella spam. Se non ricevi nulla entro 24h, scrivici a info@immobiliarcoach.com
        </p>
      </div>
    );
  }

  if (state === "contact") {
    return (
      <div className="section-padding animate-fade-in bg-white max-w-lg mx-auto">
        <h2 className="font-heading text-3xl font-bold text-brand-navy mb-4">
          Ultimo passo: dove ti mandiamo i 3 bonus?
        </h2>
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Nome *</label>
            <input type="text" value={contactData.nome} onChange={(e) => setContactData({ ...contactData, nome: e.target.value })}
              className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email *</label>
            <input type="email" value={contactData.email} onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
              className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Telefono *</label>
            <input type="tel" value={contactData.telefono} onChange={(e) => setContactData({ ...contactData, telefono: e.target.value })}
              className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy" />
          </div>
        </div>
        <p className="text-sm text-foreground/60 mb-6">
          Entro 24 ore ricevi per email: Ebook + Checklist + Template. E ti chiamiamo per capire insieme se possiamo aiutarti. Zero spam, zero pressione.
        </p>
        <button
          onClick={() => setState("confirmation")}
          disabled={!contactData.nome || !contactData.email || !contactData.telefono}
          className="btn-primary w-full disabled:opacity-50"
        >
          Invia e ricevi i bonus →
        </button>
      </div>
    );
  }

  if (state === "questionnaire") {
    return (
      <div className="section-padding animate-fade-in bg-white max-w-lg mx-auto">
        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-foreground/50 mb-2">
            <span>Sezione {section} di {TOTAL_SECTIONS}</span>
            <span>{Math.round((section / TOTAL_SECTIONS) * 100)}%</span>
          </div>
          <div className="h-2 bg-border rounded-full">
            <div className="h-2 rounded-full transition-all duration-300" style={{ width: `${(section / TOTAL_SECTIONS) * 100}%`, background: "hsl(43 74% 42%)" }} />
          </div>
        </div>

        {section === 1 && (
          <div className="space-y-5">
            <h3 className="font-heading text-xl font-bold text-brand-navy">Contesto e Motivazione</h3>
            <p className="text-sm text-foreground/60 mb-4">Questo questionario serve a capire la tua situazione e a prepararti al meglio. Le risposte vengono usate esclusivamente per lavorare in modo mirato.</p>
            <Field label="Perché stai pensando di acquistare casa proprio in questo momento?" type="textarea" id="q1" value={formData.q1} onChange={updateField} />
            <RadioField label="Da quanto tempo stai valutando l'idea?" id="q2" options={["Meno di 3 mesi", "3-6 mesi", "Oltre 6 mesi"]} value={formData.q2} onChange={updateField} />
            <RadioField label="Stai acquistando:" id="q3" options={["Da solo/a", "In coppia", "Con supporto familiare"]} value={formData.q3} onChange={updateField} />
            <Field label="Qual è la tua principale preoccupazione legata all'acquisto?" type="textarea" id="q4" value={formData.q4} onChange={updateField} />
            <Field label="Qual è l'errore che non vuoi assolutamente commettere?" type="textarea" id="q5" value={formData.q5} onChange={updateField} />
          </div>
        )}

        {section === 2 && (
          <div className="space-y-5">
            <h3 className="font-heading text-xl font-bold text-brand-navy">Stato della Ricerca</h3>
            <RadioField label="In che fase ti trovi oggi?" id="q6" options={["Non ho ancora iniziato", "Sto guardando annunci", "Sto facendo visite", "Ho già un immobile che mi interessa"]} value={formData.q6} onChange={updateField} />
            <Field label="Quante case hai già visitato (circa)?" type="number" id="q7" value={formData.q7} onChange={updateField} />
            <Field label="Cosa ti sta bloccando di più in questo momento?" type="textarea" id="q8" value={formData.q8} onChange={updateField} />
            <RadioField label="Hai già avuto a che fare con agenzie immobiliari?" id="q9" options={["Sì", "No"]} value={formData.q9} onChange={updateField} />
            <Field label="Se sì: com'è stata l'esperienza finora?" type="textarea" id="q10" value={formData.q10} onChange={updateField} />
          </div>
        )}

        {section === 3 && (
          <div className="space-y-5">
            <h3 className="font-heading text-xl font-bold text-brand-navy">L'Immobile</h3>
            <Field label="Che tipo di casa stai cercando? (tipologia, zona, metratura indicativa)" type="textarea" id="q11" value={formData.q11} onChange={updateField} />
            <Field label="Ci sono caratteristiche non negoziabili?" type="textarea" id="q12" value={formData.q12} onChange={updateField} />
            <Field label="Su cosa saresti disposto a scendere a compromessi?" type="textarea" id="q13" value={formData.q13} onChange={updateField} />
          </div>
        )}

        {section === 4 && (
          <div className="space-y-5">
            <h3 className="font-heading text-xl font-bold text-brand-navy">Situazione Economica</h3>
            <p className="text-sm italic text-foreground/50">Non è una valutazione bancaria. Serve solo a impostare una strategia realistica.</p>
            <RadioField label="Reddito netto mensile complessivo:" id="q14" options={["Meno di €1.500", "€1.500-2.500", "€2.500-3.500", "Oltre €3.500"]} value={formData.q14} onChange={updateField} />
            <RadioField label="Hai finanziamenti o rate in corso?" id="q15" options={["Sì", "No"]} value={formData.q15} onChange={updateField} />
            <RadioField label="Risparmi disponibili:" id="q16" options={["Meno di €10.000", "€10.000-30.000", "€30.000-60.000", "Oltre €60.000"]} value={formData.q16} onChange={updateField} />
            <RadioField label="Supporto economico familiare previsto?" id="q17" options={["Sì", "No"]} value={formData.q17} onChange={updateField} />
          </div>
        )}

        {section === 5 && (
          <div className="space-y-5">
            <h3 className="font-heading text-xl font-bold text-brand-navy">Mutuo</h3>
            <RadioField label="Hai già parlato con una banca o consulente mutui?" id="q18" options={["Sì", "No"]} value={formData.q18} onChange={updateField} />
            <Field label="Rata mensile che vorresti sostenere?" type="text" id="q19" value={formData.q19} onChange={updateField} />
            <Field label="Cosa ti preoccupa di più del mutuo?" type="textarea" id="q20" value={formData.q20} onChange={updateField} />
          </div>
        )}

        {section === 6 && (
          <div className="space-y-5">
            <h3 className="font-heading text-xl font-bold text-brand-navy">Decisione e Serietà</h3>
            <div>
              <label className="block text-sm font-medium mb-2">Da 1 a 10, quanto è importante comprare casa bene e non "tanto per"?</label>
              <input type="range" min="1" max="10" value={formData.q21 || "5"} onChange={(e) => updateField("q21", e.target.value)}
                className="w-full accent-brand-gold" />
              <div className="flex justify-between text-xs text-foreground/50"><span>1</span><span>{formData.q21 || "5"}</span><span>10</span></div>
            </div>
            <Field label="Se non risolvi questa situazione nei prossimi mesi, cosa succede?" type="textarea" id="q22" value={formData.q22} onChange={updateField} />
            <Field label="Cosa ti aspetti concretamente da questo percorso?" type="textarea" id="q23" value={formData.q23} onChange={updateField} />
          </div>
        )}

        {section === 7 && (
          <div className="space-y-5">
            <h3 className="font-heading text-xl font-bold text-brand-navy">Allineamento</h3>
            <RadioField label="Sei disposto a fermarti o cambiare strategia se capiamo che non è il momento giusto?" id="q24" options={["Sì", "No"]} value={formData.q24} onChange={updateField} />
          </div>
        )}

        <div className="flex gap-3 mt-8">
          {section > 1 && (
            <button onClick={() => setSection((s) => s - 1)} className="btn-secondary flex-1">
              <ArrowLeft className="w-4 h-4" /> Indietro
            </button>
          )}
          {section < TOTAL_SECTIONS ? (
            <button onClick={() => setSection((s) => s + 1)} className="btn-primary flex-1">
              Avanti <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button onClick={() => setState("contact")} className="btn-primary flex-1">
              Avanti → Lascia i tuoi dati
            </button>
          )}
        </div>
      </div>
    );
  }

  // INTRO state
  return (
    <div className="section-padding animate-fade-in bg-white max-w-2xl mx-auto">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy mb-4">
        3 strumenti gratuiti per chi compra casa. Subito nella tua email.
      </h2>
      <p className="text-foreground/70 mb-8">
        Compila il Questionario Pre-Consulenza e lasciaci i tuoi dati. Entro 24 ore ricevi per email 3 strumenti concreti che puoi usare subito — e una telefonata per capire insieme se possiamo aiutarti.
      </p>

      <div className="space-y-4 mb-8">
        {[
          { icon: BookOpen, title: "Ebook — Il Consulente Indipendente", text: "Il metodo completo dalla A alla Z. Ricerca, visita, proposta, documenti, preliminare, mutuo, rogito. Più prompt AI per analizzare annunci, proposte e preliminari in autonomia." },
          { icon: CheckSquare, title: "Checklist — Visita Immobile", text: "Lo strumento che ti dice esattamente cosa guardare prima, durante e dopo ogni visita. 6 sezioni: analisi da scrivania, struttura e impianti, contesto e condominio, conformità e documenti, domande al venditore, tracciamento post-visita." },
          { icon: MessageSquare, title: "Template — Comunicazioni", text: "Email e messaggi pronti per agenti, banche, notaio. Per non improvvisare nei momenti che contano." },
        ].map((card) => (
          <div key={card.title} className="flex gap-4 p-4 rounded-xl border border-border">
            <card.icon className="w-6 h-6 shrink-0 mt-1" style={{ color: "hsl(43 74% 42%)" }} />
            <div>
              <h3 className="font-bold text-brand-navy mb-1">{card.title}</h3>
              <p className="text-sm text-foreground/70">{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      <button onClick={() => setState("questionnaire")} className="btn-primary w-full">
        Compila il Questionario e ricevi i 3 bonus →
      </button>
    </div>
  );
};

// Reusable form components
const Field = ({ label, type, id, value, onChange }: { label: string; type: string; id: string; value?: string; onChange: (id: string, val: string) => void }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    {type === "textarea" ? (
      <textarea value={value || ""} onChange={(e) => onChange(id, e.target.value)} rows={3}
        className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy resize-none" />
    ) : (
      <input type={type} value={value || ""} onChange={(e) => onChange(id, e.target.value)}
        className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy" />
    )}
  </div>
);

const RadioField = ({ label, id, options, value, onChange }: { label: string; id: string; options: string[]; value?: string; onChange: (id: string, val: string) => void }) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <div className="space-y-2">
      {options.map((opt) => (
        <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer">
          <input type="radio" name={id} value={opt} checked={value === opt} onChange={() => onChange(id, opt)}
            className="accent-brand-gold" />
          {opt}
        </label>
      ))}
    </div>
  </div>
);

export default BonusTab;
