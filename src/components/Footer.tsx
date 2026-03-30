import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const subsidiaries = [
  "Credence Real Estate",
  "Credence Realty",
  "Credence Design Build",
  "Credence Mortgages",
  "Credence Capital",
  "Credence Consulting",
  "Credence Media",
];

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg font-serif">C</div>
              <span className="text-lg font-bold font-serif leading-tight">The Credence Group</span>
            </div>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed mb-3">
              Integrity in Ownership. Excellence in Execution.
            </p>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed">
              A diversified holding company with subsidiaries spanning real estate, finance, consulting, and media.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", to: "/" },
                { label: "Our Companies", to: "/companies" },
                { label: "Investment Philosophy", to: "/philosophy" },
                { label: "Careers", to: "/careers" },
                { label: "Contact", to: "/contact" },
                { label: "FAQ", to: "/faq" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-secondary-foreground/70 hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Companies */}
          <div>
            <h4 className="font-serif font-bold mb-4">Our Companies</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              {subsidiaries.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary" /> inquiries@credencegroup.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" /> Calgary, AB
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-10 pt-6 text-center text-sm text-secondary-foreground/50">
          © {new Date().getFullYear()} The Credence Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
