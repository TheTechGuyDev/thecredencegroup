import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Our Companies", to: "/companies" },
  { label: "Investment Philosophy", to: "/philosophy" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

const companies = [
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
    <footer className="bg-foreground text-white/80">
      <div className="container mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold font-serif italic text-white mb-2">The Credence Group</h3>
            <p className="text-sm italic text-white/60 mb-5">
              Integrity in Ownership. Excellence in Execution.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-white/70">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:inquiries@credencegroup.com" className="hover:text-white">
                  inquiries@credencegroup.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Calgary, AB</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Companies */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-4">Our Companies</h4>
            <ul className="space-y-2">
              {companies.map((c) => (
                <li key={c} className="text-sm text-white/60">{c}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} The Credence Group. All Rights Reserved.
          </p>
          <p className="text-xs text-white/40">Calgary, AB · Canada</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
