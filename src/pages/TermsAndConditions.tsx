const contentSections = [
  {
    title: "1. Acceptance of Terms",
    content: "By accessing and using the Flonest platform operated by FINETUNE, you accept and agree to be bound by the terms and provision of this agreement.",
  },
  {
    title: "2. Service Description",
    content: "Flonest provides retail operations management services including billing, inventory management, and compliance tools for businesses in India.",
  },
  {
    title: "3. User Responsibilities",
    content: "Users are responsible for maintaining the confidentiality of their account credentials and for all activities that occur under their account.",
  },
  {
    title: "4. Data Protection",
    content: "We are committed to protecting your data. All data is stored securely and processed in accordance with applicable Indian data protection laws.",
  },
];

const TermsAndConditions = () => {
  return (
    <div className="min-h-page">
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary font-medium mb-4 text-sm tracking-wide uppercase animate-fade-in">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in [animation-delay:100ms]">
            Terms & Conditions
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
              <h2 className="text-lg font-semibold mb-3 text-foreground">5. Contact Information</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                For questions regarding these terms, contact us at{" "}
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

export default TermsAndConditions;