import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Our Companies", to: "/companies" },
  { label: "Investment Philosophy", to: "/philosophy" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
  { label: "FAQ", to: "/faq" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-secondary">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm">
          <a href="mailto:inquiries@credencegroup.com" className="flex items-center gap-1.5 text-gold-light hover:text-primary transition-colors">
            <Mail className="h-3.5 w-3.5" /> inquiries@credencegroup.com
          </a>
          <span className="hidden sm:block text-gold-light/50 text-xs tracking-widest uppercase">Calgary, AB</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-secondary border-b border-gold/20 shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded bg-primary flex items-center justify-center text-secondary font-bold text-lg font-serif">C</div>
            <span className="text-lg font-bold font-serif text-white leading-tight">The Credence Group</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-gold-light/80 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <Button variant="ghost" size="icon" className="lg:hidden text-white hover:text-primary" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gold/10 bg-secondary px-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-gold-light/80 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
