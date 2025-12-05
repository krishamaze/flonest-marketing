import { Link } from "react-router-dom";
import { Check, Shield, Smartphone, Zap, ArrowRight } from "lucide-react";
import { PRICING_CARDS } from "@/config/pricing-cards";

const includedFeatures = [
  {
    title: "Compliance Ready",
    description: "GST-compliant documents & audit logs",
    icon: Shield,
  },
  {
    title: "Secure by Design",
    description: "Enterprise-grade data encryption",
    icon: Zap,
  },
  {
    title: "Mobile First",
    description: "Works offline, syncs when online",
    icon: Smartphone,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-page">
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary font-medium mb-4 text-sm tracking-wide uppercase animate-fade-in">
            Pricing
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in [animation-delay:100ms]">
            Start free. Scale when ready.
          </h1>
          <p className="text-lg text-secondary-foreground/80 animate-fade-in [animation-delay:200ms]">
            90-day full-feature trial. No card needed. One simple plan when you're ready to upgrade.
          </p>
        </div>
      </section>

      {/* Pricing Card Section */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-lg mx-auto">
          {PRICING_CARDS.map((card, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl border border-border/50 animate-fade-in [animation-delay:300ms]"
            >
              {/* Header */}
              <div className="text-center mb-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                  Best Value
                </span>
                <h2 className="text-xl font-semibold text-foreground mb-1">{card.title}</h2>
                <p className="text-muted-foreground text-sm">{card.subtitle}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="inline-flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-bold text-foreground">₹1,999</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                {card.note && (
                  <p className="text-xs text-muted-foreground mt-2">{card.note}</p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {card.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to="/contact"
                className="group flex items-center justify-center gap-2 w-full py-3 rounded-full font-semibold bg-primary text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <p className="text-center text-xs text-muted-foreground mt-4">
                No credit card required • Cancel anytime
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-primary font-medium mb-3 text-sm tracking-wide uppercase animate-fade-in">
              Everything Included
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground animate-fade-in [animation-delay:100ms]">
              All features. No upsells.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {includedFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="group bg-card p-6 rounded-2xl border border-border/50 transition-all duration-300 hover:border-border hover:shadow-md hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground animate-fade-in">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground mb-8 animate-fade-in [animation-delay:100ms]">
            Join hundreds of businesses already using Flonest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:200ms]">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold border border-border bg-card transition-all duration-300 hover:bg-muted"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;