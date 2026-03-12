import { BookOpen, ExternalLink } from "lucide-react";

const BonusTab = () => {
  return (
    <div className="section-padding animate-fade-in bg-white max-w-2xl mx-auto text-center">
      <BookOpen className="w-14 h-14 mx-auto mb-6" style={{ color: "hsl(43 74% 42%)" }} />
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy mb-4">
        Scarica il libro gratis
      </h2>
      <p className="text-foreground/70 mb-8 max-w-lg mx-auto">
        Il metodo completo per acquistare casa in sicurezza — dalla ricerca al rogito. Strategie, checklist e strumenti pratici per non commettere errori. Gratis, subito nella tua email.
      </p>

      <a
        href="https://libro.immobiliarcoach.com"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary inline-flex items-center gap-2 w-full sm:w-auto justify-center"
        style={{ minHeight: 48 }}
      >
        Scarica il libro gratis <ExternalLink className="w-4 h-4" />
      </a>

      <p className="text-xs text-foreground/50 mt-4">
        Verrai reindirizzato alla pagina di download. Zero spam, zero impegno.
      </p>
    </div>
  );
};

export default BonusTab;
