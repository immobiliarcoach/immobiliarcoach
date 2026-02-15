import logoImg from "@/assets/logo-immobiliar-coach.png";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white py-10 px-5 md:px-10">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="bg-white p-2 rounded-lg">
            <img src={logoImg} alt="Immobiliar Coach" className="h-8 w-auto" />
          </div>
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
