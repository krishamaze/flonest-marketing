import { Link } from "react-router-dom";
import BusinessInfo from "@/components/BusinessInfo";

const cards = [
  {
    title: "Our Mission",
    content: "Flonest helps brick-and-mortar retailers modernize. We reduce spreadsheet chaos by delivering accurate stock positions, automated purchase flows, and compliance-ready billing.",
  },
  {
    title: "Who We Serve",
    items: [
      "Retail chains managing multiple warehouses",
      "Franchise networks onboarding new outlets",
      "Distributors tracking GST-ready invoices",
      "Field agents digitizing order capture",
    ],
  },
  {
    title: "Why Flonest",
    content: "We are a partner-first product. Every module—from barcode-ready inventory to multi-user approvals—is optimized for mobile devices and real-world bandwidth conditions.",
  },
];

const capabilities = [
  {
    title: "Inventory & Billing",
    items: [
      "Real-time stock ledger with branch splits",
      "GST-compliant invoices and e-way bill prep",
      "HSN automation with reviewer workflow",
    ],
  },
  {
    title: "Business Onboarding",
    items: [
      "Multi-tenant organization setup",
      "Role-based approvals for new partners",
      "Agent-focused mobile experience",
    ],
  },
  {
    title: "Governance & Insights",
    items: [
      "Advanced access controls",
      "Operational alerts and escalations",
      "Dashboards for margin and sell-through",
    ],
  },
];

const About = () => {
  return (
    <div className="min-h-[calc(100vh-64px)]">
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary font-medium mb-4 text-sm tracking-wide uppercase animate-fade-in">
            About Flonest
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in [animation-delay:100ms]">
            Digital Infrastructure for Modern Business
          </h1>
          <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 animate-fade-in [animation-delay:200ms]">
            We combine ERP, Asset Rentals, and Digital Tools into a unified operating system for Finance, Device Rentals, and Operations.
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-fade-in [animation-delay:300ms]">
            <a
              href="https://bill.flonest.app/login?view=sign_up"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
            >
              Get started free
            </a>
            <Link
              to="/pricing"
              className="border border-secondary-foreground/30 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-secondary-foreground/10"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* About Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div
                key={card.title}
                className="bg-card p-6 rounded-2xl border border-border/50 animate-fade-in transition-all duration-300 hover:border-border hover:shadow-md hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h2 className="text-lg font-semibold mb-4 text-foreground">{card.title}</h2>
                {card.content ? (
                  <p className="text-muted-foreground text-sm leading-relaxed">{card.content}</p>
                ) : (
                  <ul className="text-muted-foreground text-sm space-y-2">
                    {card.items?.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-card p-8 rounded-2xl border border-border/50 animate-fade-in [animation-delay:300ms]">
            <h2 className="text-xl font-semibold mb-8 text-foreground">Platform Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {capabilities.map((cap, index) => (
                <div
                  key={cap.title}
                  className="animate-fade-in"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <h3 className="text-base font-semibold mb-4 text-foreground">{cap.title}</h3>
                  <ul className="text-muted-foreground text-sm space-y-2">
                    {cap.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Info */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="animate-fade-in [animation-delay:500ms]">
            <BusinessInfo />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;