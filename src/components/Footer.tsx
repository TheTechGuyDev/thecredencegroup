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
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded bg-primary flex items-center justify-center text-secondary font-bold text-lg font-serif">C</div>
              <span className="text-lg font-bold font-serif text-white leading-tight">The Credence Group</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed italic mb-3">
              Integrity in Ownership. Excellence in Execution.
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              A diversified holding company with subsidiaries spanning real estate, finance, consulting, and media.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold mb-4 text-primary">Quick Links</h4>
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
                  <Link to={l.to} className="text-white/70 hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Companies */}
          <div>
            <h4 className="font-serif font-bold mb-4 text-primary">Our Companies</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {subsidiaries.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold mb-4 text-primary">Contact Us</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary" /> inquiries@credencegroup.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" /> Calgary, AB
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/40">
          © {new Date().getFullYear()} The Credence Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
