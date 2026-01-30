import NewsletterForm from "./NewsletterForm";
import logoImg from "@/assets/logo-immobiliar-coach.png";

const Footer = () => {
  const helpLinks = [{ label: "CONTATTACI", href: "mailto:info@immobiliarcoach.it" }];

  const socialLinks = [
    { label: "INSTAGRAM", href: "https://instagram.com" },
    { label: "LINKEDIN", href: "https://linkedin.com" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="px-5 md:px-20 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-x-12 lg:gap-x-16 items-start">
          {/* Logo Section */}
          <div className="md:col-span-1">
          <div className="bg-white p-3 rounded-lg inline-block">
            <img 
              src={logoImg} 
              alt="Immobiliar Coach" 
              className="h-12 md:h-16 w-auto"
            />
          </div>
          </div>

          {/* Connect */}
          <div className="md:col-span-1">
            <h3 className="uppercase font-bold text-xs md:text-sm tracking-[1.8px] text-secondary-foreground/70 mb-3 md:mb-4">CONNECT</h3>
            <nav className="flex flex-col gap-2">
              {helpLinks.map((link) => (
                <a key={link.label} href={link.href} className="underline decoration-2 text-sm md:text-base text-secondary-foreground hover:opacity-70 transition-opacity duration-200">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="md:col-span-1">
            <h3 className="uppercase font-bold text-xs md:text-sm tracking-[1.8px] text-secondary-foreground/70 mb-3 md:mb-4">FOLLOW</h3>
            <nav className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-2 text-sm md:text-base text-secondary-foreground hover:opacity-70 transition-opacity duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div id="newsletter" className="md:col-span-1">
            <NewsletterForm buttonClassName="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary" />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-secondary-foreground/20">
          <p className="text-sm text-center md:text-left uppercase">
            © 2026 IMMOBILIAR COACH. TUTTI I DIRITTI RISERVATI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
