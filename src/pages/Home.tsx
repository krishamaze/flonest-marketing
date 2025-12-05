import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Package, BarChart3, Shield, Smartphone, Users, Zap, ShoppingCart } from "lucide-react";
import { SectionScroller } from "@/components/SectionScroller";
import { Section } from "@/components/Section";
import { useSectionScrollerContext } from "@/components/SectionScroller";
import { useHeaderVisibility } from "@/contexts/HeaderVisibilityContext";
import Footer from "@/components/Footer";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "value", label: "Value Proposition" },
  { id: "features", label: "Features" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "cta", label: "Get Started" },
  { id: "footer", label: "Footer" },
];

// Component to sync active section with header visibility
function HeaderVisibilitySync() {
  const { activeSection, isAnimating } = useSectionScrollerContext();
  const { setHeaderHidden } = useHeaderVisibility();

  useEffect(() => {
    if (!isAnimating) {
      setHeaderHidden(activeSection === 5);
    }
  }, [activeSection, isAnimating, setHeaderHidden]);

  return null;
}

const Home = () => {
  const features = [
    { icon: Package, title: "Real-Time Tracking", description: "Monitor inventory levels instantly across all devices" },
    { icon: BarChart3, title: "Analytics Dashboard", description: "Powerful insights and reporting tools" },
    { icon: Shield, title: "Secure & Reliable", description: "Enterprise-grade security with 99.9% uptime" },
    { icon: Smartphone, title: "Mobile First", description: "Manage your business on the go" },
    { icon: Users, title: "Multi-User Support", description: "Role-based access control for teams" },
    { icon: Zap, title: "Lightning Fast", description: "Built for blazing-fast performance" },
  ];

  return (
    <SectionScroller sections={sections} duration={700}>
      <HeaderVisibilitySync />

      {/* Hero Section */}
      <Section index={0} id="hero">
        <div className="w-full h-full bg-secondary text-secondary-foreground flex items-center justify-center px-6 pt-16">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-4 text-sm tracking-wide uppercase animate-fade-in">
              Retail Management Platform
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in [animation-delay:100ms]">
              Run Your Retail Operations from One Dashboard
            </h1>
            <p className="text-lg md:text-xl mb-4 text-secondary-foreground/80 leading-relaxed animate-fade-in [animation-delay:200ms]">
              Billing, inventory, rentals & compliance — unified under Flonest.
            </p>
            <p className="text-sm text-muted-foreground mb-8 animate-fade-in [animation-delay:300ms]">
              Built for retail businesses — from single stores to multi-branch chains.
            </p>
            <a
              href="https://bill.flonest.app/login?view=sign_up"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 rounded-full text-base font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 animate-fade-in [animation-delay:400ms]"
              aria-label="Get started with Flonest"
            >
              Get Started
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Section>

      {/* Value Proposition */}
      <Section index={1} id="value">
        <div className="w-full h-full flex items-center justify-center px-6 pt-16 bg-background">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-4 text-sm tracking-wide uppercase animate-fade-in">
              Why Flonest
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground animate-fade-in [animation-delay:100ms]">
              One Platform. Complete Control.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in [animation-delay:200ms]">
              Flonest combines ERP, asset rentals, and digital tools into a single ecosystem —
              so you can focus on growing your business, not managing software.
            </p>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section index={2} id="features" lazyLoad>
        <div className="w-full h-full flex flex-col justify-center py-6 md:py-10 pt-24 md:pt-28 bg-background px-4 md:px-6">
          <div className="max-w-5xl mx-auto w-full">
            <div className="mb-8 text-center">
              <p className="text-primary font-medium mb-3 text-sm tracking-wide uppercase animate-fade-in">
                Features
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground animate-fade-in [animation-delay:100ms]">
                Built for Modern Retail
              </h2>
            </div>

            <div className="container-inline grid grid-cols-2 cq:grid-cols-3 gap-4 cq:gap-6">
              {features.map((feature, index) => (
                <article
                  key={index}
                  className="group p-5 md:p-6 rounded-2xl border border-border/50 bg-card transition-all duration-300 hover:border-border hover:shadow-md hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${150 + index * 80}ms` }}
                >
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* E-Commerce CTA */}
      <Section index={3} id="ecommerce">
        <div className="w-full h-full flex items-center justify-center bg-muted/30 px-6 pt-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-fade-in">
              <ShoppingCart className="w-8 h-8 text-primary" aria-hidden="true" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground animate-fade-in [animation-delay:100ms]">
              E-Commerce Ready
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
              Enable online sales with stock sync & digital payments.
              Your physical and online stores, perfectly in sync.
            </p>
            <Link
              to="/pricing"
              className="group inline-flex items-center gap-2 text-primary font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded animate-fade-in [animation-delay:300ms]"
              aria-label="View pricing plans"
            >
              View Pricing
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section index={4} id="cta">
        <div className="w-full h-full flex items-center justify-center px-6 pt-16 bg-secondary">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-4 text-sm tracking-wide uppercase animate-fade-in">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-foreground animate-fade-in [animation-delay:100ms]">
              Ready to streamline your operations?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in [animation-delay:200ms]">
              Join businesses that trust Flonest for their retail management.
            </p>
            <a
              href="https://bill.flonest.app/login?view=sign_up"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 animate-fade-in [animation-delay:300ms]"
              aria-label="Start using Flonest for free"
            >
              Start Free
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Section>

      {/* Footer as final scroll section */}
      <Section index={5} id="footer">
        <Footer />
      </Section>
    </SectionScroller>
  );
};

export default Home;