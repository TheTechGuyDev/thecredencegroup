import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Our Companies", to: "/companies" },
  { label: "Investment Philosophy", to: "/philosophy" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto flex items-center justify-between px-4 md:px-8 py-5">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="text-lg font-bold font-serif italic text-foreground">The Credence Group</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button size="sm" className="ml-4 rounded-sm px-5" asChild>
            <Link to="/contact">Partner With Us</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <Button variant="ghost" size="icon" className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border px-4 pb-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-4 pt-2">
            <Button size="sm" className="w-full rounded-sm" asChild>
              <Link to="/contact" onClick={() => setMobileOpen(false)}>Partner With Us</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
