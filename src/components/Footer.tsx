import NewsletterForm from "./NewsletterForm";

const Footer = () => {
  const helpLinks = [{ label: "CONTATTACI", href: "mailto:info@immobiliarcoach.it" }];

  const socialLinks = [
    { label: "INSTAGRAM", href: "https://instagram.com" },
    { label: "LINKEDIN", href: "https://linkedin.com" },
  ];

  return (
    <footer className="bg-accent-red text-foreground">
      <div className="px-5 md:px-20 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-x-12 lg:gap-x-16 items-start">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <div className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
              IMMOBILIAR COACH
            </div>
          </div>

          {/* Connect */}
          <div className="md:col-span-1">
            <h3 className="footer-header">CONNECT</h3>
            <nav className="flex flex-col gap-2">
              {helpLinks.map((link) => (
                <a key={link.label} href={link.href} className="footer-link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="md:col-span-1">
            <h3 className="footer-header">FOLLOW</h3>
            <nav className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div id="newsletter" className="md:col-span-1">
            <NewsletterForm inputClassName="min-w-72" />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-foreground/20">
          <p className="text-sm text-center md:text-left uppercase">
            © 2026 IMMOBILIAR COACH. TUTTI I DIRITTI RISERVATI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
