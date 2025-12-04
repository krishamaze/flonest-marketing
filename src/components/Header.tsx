import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useHeaderVisibility } from "@/contexts/HeaderVisibilityContext";

export const HEADER_HEIGHT = 64;
export const HEADER_HEIGHT_SCROLLED = 52;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isHeaderHidden } = useHeaderVisibility();
  const isHomePage = location.pathname === "/";

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-border/20 px-6 py-3 transition-all duration-500 ease-out ${isHeaderHidden
            ? "-translate-y-full opacity-0 pointer-events-none"
            : "translate-y-0 opacity-100 pointer-events-auto"
          }`}
        style={{ height: HEADER_HEIGHT }}
        aria-hidden={isHeaderHidden}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto h-full">
          {/* Brand */}
          <Link
            to="/"
            className="font-semibold tracking-tight text-xl text-primary transition-all duration-300 ease-out hover:opacity-80"
          >
            Flonest
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-secondary-foreground/80 transition-colors duration-200 hover:text-secondary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Desktop navigation */}
          <nav
            role="navigation"
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-1"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium px-4 py-2 min-h-[44px] flex items-center transition-all duration-200 ${isActive(link.href)
                    ? "text-secondary-foreground"
                    : "text-secondary-foreground/70 hover:text-secondary-foreground"
                  }`}
              >
                {link.label}
              </Link>
            ))}

            <a
              href="https://bill.flonest.app/login"
              className="text-sm font-medium px-4 py-2 min-h-[44px] flex items-center text-muted-foreground transition-all duration-200 hover:text-secondary-foreground"
            >
              Login
            </a>

            <a
              href="https://bill.flonest.app/login?view=sign_up"
              className="ml-2 bg-primary text-primary-foreground px-5 py-2 min-h-[44px] flex items-center rounded-full text-sm font-semibold transition-all duration-200 hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
            >
              Start Free Trial
            </a>
          </nav>
        </div>
      </header>

      {/* Full-viewport mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 z-[60] bg-secondary flex flex-col transition-all duration-300 ease-out ${isMenuOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
          }`}
      >
        {/* Internal header */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-border/20">
          <span className="font-semibold text-xl text-primary">Flonest</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-secondary-foreground/80 transition-colors duration-200 hover:text-secondary-foreground"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Centered navigation */}
        <nav
          role="navigation"
          aria-label="Mobile navigation"
          className="flex flex-col justify-center flex-1 px-6"
        >
          <Link
            to="/"
            className={`py-4 text-xl font-medium transition-colors duration-200 ${isActive("/")
                ? "text-primary"
                : "text-secondary-foreground/80 hover:text-secondary-foreground"
              }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`py-4 text-xl font-medium transition-colors duration-200 ${isActive(link.href)
                  ? "text-primary"
                  : "text-secondary-foreground/80 hover:text-secondary-foreground"
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <a
            href="https://bill.flonest.app/login"
            className="py-4 text-xl font-medium text-muted-foreground transition-colors duration-200 hover:text-secondary-foreground"
          >
            Login
          </a>
        </nav>

        {/* Pinned CTA at bottom */}
        <div className="p-6 pb-8 mt-auto">
          <a
            href="https://bill.flonest.app/login?view=sign_up"
            className="flex items-center justify-center w-full bg-primary text-primary-foreground px-6 py-4 min-h-[56px] rounded-full text-base font-semibold transition-all duration-200 hover:bg-primary/90 active:scale-[0.98] hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
          >
            Start Free Trial
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;