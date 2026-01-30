import { Link } from "react-router-dom";
import Button from "./Button";
import logo from "@/assets/logo-immobiliar-coach.jpeg";

const Header = () => {

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-foreground/5">
      <div className="px-5 md:px-20 py-5 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Immobiliar Coach" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3 md:gap-4">
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              <Button variant="filled" showArrow={false} className="text-xs py-2 px-5">
                PRENOTA UNA CALL
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
