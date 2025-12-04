import { Link } from "react-router-dom";
import { Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const linkClasses = "text-secondary-foreground/80 hover:text-secondary-foreground hover:underline underline-offset-2 transition-all duration-200 text-sm md:text-base";

  return (
    <footer className="bg-secondary text-secondary-foreground h-full relative overflow-hidden">
      {/* Large watermark - absolutely positioned at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-end justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div className="text-[18vw] md:text-[20vw] font-black tracking-tighter text-secondary-foreground/[0.04] select-none leading-[0.75] text-center whitespace-nowrap translate-y-[15%]">
          FLONEST
        </div>
      </div>

      {/* Main content area - positioned above watermark */}
      <div className="relative z-10 max-w-7xl mx-auto w-full h-full px-5 md:px-8 pt-8 md:pt-14 pb-6 flex flex-col">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 md:gap-10 lg:gap-16">

          {/* Brand section */}
          <div className="lg:max-w-sm shrink-0">
            <div className="text-xl md:text-2xl font-bold tracking-tight mb-2 md:mb-3 text-secondary-foreground">FLONEST</div>
            <p className="text-xl md:text-2xl font-light text-secondary-foreground/80 leading-snug italic">
              Simple billing,<br />
              everywhere you sell
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-12 gap-y-6 md:gap-y-6 border border-secondary-foreground/10 rounded-2xl p-5 md:p-6 bg-secondary-foreground/5 backdrop-blur-sm">

            <nav aria-label="Product links">
              <h4 className="text-sm md:text-base font-semibold mb-3 md:mb-4 text-secondary-foreground tracking-wide uppercase">Product</h4>
              <ul className="space-y-2.5 md:space-y-3">
                <li><Link to="/pricing" className={linkClasses}>Pricing</Link></li>
                <li>
                  <a
                    href="https://bill.flonest.app/login"
                    className={`${linkClasses} inline-flex items-center gap-1.5`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sign In
                    <ExternalLink className="w-3 h-3 opacity-60" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://bill.flonest.app/login?view=sign_up"
                    className={`${linkClasses} inline-flex items-center gap-1.5`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sign Up
                    <ExternalLink className="w-3 h-3 opacity-60" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </nav>

            <nav aria-label="Company links">
              <h4 className="text-sm md:text-base font-semibold mb-3 md:mb-4 text-secondary-foreground tracking-wide uppercase">Company</h4>
              <ul className="space-y-2.5 md:space-y-3">
                <li><Link to="/" className={linkClasses}>Home</Link></li>
                <li><Link to="/about" className={linkClasses}>About Us</Link></li>
                <li><Link to="/contact" className={linkClasses}>Contact</Link></li>
              </ul>
            </nav>

            <nav aria-label="Legal links">
              <h4 className="text-sm md:text-base font-semibold mb-3 md:mb-4 text-secondary-foreground tracking-wide uppercase">Legal</h4>
              <ul className="space-y-2.5 md:space-y-3">
                <li><Link to="/policies" className={linkClasses}>All Policies</Link></li>
                <li><Link to="/terms-and-conditions" className={linkClasses}>Terms & Conditions</Link></li>
                <li><Link to="/privacy-policy" className={linkClasses}>Privacy Policy</Link></li>
                <li><Link to="/refund-and-cancellation" className={linkClasses}>Refunds</Link></li>
                <li><Link to="/shipping-policy" className={linkClasses}>Shipping</Link></li>
              </ul>
            </nav>

            <nav aria-label="Connect links">
              <h4 className="text-sm md:text-base font-semibold mb-3 md:mb-4 text-secondary-foreground tracking-wide uppercase">Connect</h4>
              <ul className="space-y-2.5 md:space-y-3">
                <li>
                  <a
                    href="mailto:support@flonest.app"
                    className={`${linkClasses} inline-flex items-center gap-1.5`}
                  >
                    <Mail className="w-4 h-4 opacity-70" aria-hidden="true" />
                    Email Support
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Legal tagline */}
        <p className="text-xs md:text-sm text-secondary-foreground/60 mt-auto pt-4">
          Operated by FINETUNE (GSTIN: 33CPXPK3822A2ZZ)
        </p>
      </div>
    </footer>
  );
};

export default Footer;