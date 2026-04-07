import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Privacy Policy", to: "/faq" },
  { label: "Terms of Service", to: "/faq" },
  { label: "Annual Reports", to: "/philosophy" },
  { label: "Governance", to: "/philosophy" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground">
      <div className="container mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-sm font-bold font-serif text-white/90">The Credence Group</span>
          <p className="text-xs text-white/40 mt-0.5">
            © {new Date().getFullYear()} The Credence Group. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-xs font-medium text-white/50 hover:text-white/80 uppercase tracking-wider transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
