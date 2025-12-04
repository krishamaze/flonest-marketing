import { Link } from "react-router-dom";
import { FileText, Shield, RefreshCw, Truck, ArrowRight } from "lucide-react";

const policies = [
  { 
    title: "Terms & Conditions", 
    href: "/terms-and-conditions", 
    description: "Our terms of service and usage agreement",
    icon: FileText,
  },
  { 
    title: "Privacy Policy", 
    href: "/privacy-policy", 
    description: "How we collect, use, and protect your data",
    icon: Shield,
  },
  { 
    title: "Refund & Cancellation", 
    href: "/refund-and-cancellation", 
    description: "Our refund and cancellation policies",
    icon: RefreshCw,
  },
  { 
    title: "Service Delivery", 
    href: "/shipping-policy", 
    description: "Information about service delivery and activation",
    icon: Truck,
  },
];

const Policies = () => {
  return (
    <div className="min-h-[calc(100vh-64px)]">
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary font-medium mb-4 text-sm tracking-wide uppercase animate-fade-in">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in [animation-delay:100ms]">
            Policies
          </h1>
          <p className="text-lg text-secondary-foreground/80 animate-fade-in [animation-delay:200ms]">
            All our legal and policy documents
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid gap-4">
            {policies.map((policy, index) => (
              <Link
                key={policy.href}
                to={policy.href}
                className="group bg-card p-5 rounded-2xl border border-border/50 animate-fade-in transition-all duration-300 hover:border-border hover:shadow-md hover:-translate-y-0.5 flex items-center gap-4"
                style={{ animationDelay: `${100 + index * 100}ms` }}
                aria-label={`${policy.title}: ${policy.description}`}
              >
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <policy.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-base font-semibold text-foreground">
                    {policy.title}
                  </h2>
                  <p className="text-muted-foreground text-sm">{policy.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Policies;