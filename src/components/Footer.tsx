import logoMCoach from "@/assets/logo-m-coach.png";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white py-10 px-5 md:px-10">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="flex items-center justify-center">
          <img src={logoMCoach} alt="Immobiliar Coach" className="h-16 w-auto" />
        </div>
        <p className="text-sm text-gray-400">
          Consulenza indipendente per chi compra casa
        </p>
        <p className="text-xs text-gray-500 max-w-md mx-auto">
          Immobiliar Coach non è un'agenzia immobiliare. Non media, non vende immobili, non percepisce provvigioni.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
