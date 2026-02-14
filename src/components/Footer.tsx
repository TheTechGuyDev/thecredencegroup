import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg font-serif">C</div>
              <div>
                <span className="text-lg font-bold font-serif leading-tight block">Credence</span>
                <span className="text-xs text-secondary-foreground/70 leading-tight block">Consulting Corporation</span>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed">
              Project Management & Project Delivery Professionals serving clients across multiple industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "FAQ", to: "/faq" },
                { label: "Contact Us", to: "/contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-secondary-foreground/70 hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>Program Management</li>
              <li>Project Development</li>
              <li>Project Delivery</li>
              <li>Safety & Environmental</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary" /> (832) 555-1234
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary" /> info@credenceconsultingcorp.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" /> Houston, Texas
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-10 pt-6 text-center text-sm text-secondary-foreground/50">
          © {new Date().getFullYear()} Credence Consulting Corporation. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
