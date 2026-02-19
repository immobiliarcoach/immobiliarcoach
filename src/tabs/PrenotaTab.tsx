import { Clock, Phone, CheckCircle } from "lucide-react";

const PrenotaTab = () => {
  return (
    <div className="section-padding animate-fade-in bg-white">
      <div className="max-w-2xl mx-auto">
        <p className="text-sm uppercase tracking-widest mb-2" style={{ color: "hsl(43 74% 42%)" }}>
          IL PRIMO PASSO
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy mb-4">
          Prenota una Call di Orientamento gratuita
        </h2>
        <p className="text-foreground/80 mb-4">
          Prima di lavorare insieme, parliamoci. La Call di Orientamento è una telefonata o videocall di 15-20 minuti, gratuita, in cui capiamo se il percorso Immobiliar Coach è adatto alla tua situazione.
        </p>
        <p className="text-foreground/70 mb-8">
          Non è una consulenza tecnica. Non parleremo di immobili specifici. Serve a capire dove sei, cosa ti preoccupa, e se ha senso fare il passo successivo insieme.
        </p>

        <div className="space-y-6 mb-8">
          <div>
            <h3 className="font-bold text-brand-navy mb-2">Cosa succede nella call:</h3>
            <p className="text-foreground/70 text-sm">
              Ci racconti dove sei nel processo di acquisto. Facciamo emergere la tua preoccupazione principale. Ti spieghiamo come funziona il metodo e qual è il primo passo concreto. Nessuna pressione: se non è il momento giusto, te lo diciamo noi.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-brand-navy mb-2">Cosa NON è:</h3>
            <p className="text-foreground/70 text-sm">
              Non è una consulenza gratis. Non parleremo di prezzi al metro quadro, di documenti specifici o di immobili che stai guardando. Per quello c'è la Consulenza Start.
            </p>
          </div>
        </div>

        <div className="text-center mb-6">
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base md:text-lg py-4 px-8 inline-flex w-full sm:w-auto justify-center"
            style={{ minHeight: 48 }}
          >
            Prenota la tua call gratuita →
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 text-sm text-foreground/60">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" /> 15-20 minuti
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="w-4 h-4" /> Telefono o videocall
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4" /> Gratuita
          </span>
        </div>
      </div>
    </div>
  );
};

export default PrenotaTab;
