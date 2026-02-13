import { Link } from "react-router-dom";
import Button from "./Button";
import logoImg from "@/assets/logo-immobiliar-coach.png";

const Header = () => {

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-brand-navy/10">
      <div className="px-5 md:px-20 py-5 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logoImg} alt="Immobiliar Coach" className="h-10 md:h-12 w-auto" />
            <span className="hidden sm:inline text-xl md:text-2xl font-bold uppercase tracking-tight text-brand-navy">
              Immobiliar Coach
            </span>
          </Link>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3 md:gap-4">
            <a href="https://quiz1-immobiliar.lovable.app" target="_blank" rel="noopener noreferrer">
              <Button variant="filled" showArrow={false} className="text-xs py-2 px-5">
                INIZIA IL QUIZ
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
