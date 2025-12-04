const contentSections = [
  {
    title: "Service Delivery",
    content: "Flonest is a digital service. Access to our platform is provided immediately upon successful registration and payment (if applicable).",
  },
  {
    title: "Account Activation",
    content: "Your account will be activated within 24 hours of successful registration. You will receive a confirmation email with login credentials.",
  },
  {
    title: "Service Availability",
    content: "We strive to maintain 99.9% uptime. Scheduled maintenance will be communicated in advance via email.",
  },
];

const ShippingPolicy = () => {
  return (
    <div className="min-h-[calc(100vh-64px)]">
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary font-medium mb-4 text-sm tracking-wide uppercase animate-fade-in">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in [animation-delay:100ms]">
            Service Delivery Policy
          </h1>
          <p className="text-lg text-secondary-foreground/80 animate-fade-in [animation-delay:200ms]">
            Last updated: November 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-card p-8 rounded-2xl border border-border/50 animate-fade-in [animation-delay:300ms]">
            {contentSections.map((section, index) => (
              <div
                key={section.title}
                className="mb-8 last:mb-0"
              >
                <h2 className="text-lg font-semibold mb-3 text-foreground">{section.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{section.content}</p>
              </div>
            ))}
            
            <div className="pt-6 border-t border-border/50">
              <h2 className="text-lg font-semibold mb-3 text-foreground">Support</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                For service-related queries, contact us at{" "}
                <a 
                  href="mailto:support@flonest.app" 
                  className="text-primary hover:underline transition-colors duration-200"
                >
                  support@flonest.app
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShippingPolicy;