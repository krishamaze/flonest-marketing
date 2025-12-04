const contentSections = [
  {
    title: "Information We Collect",
    content: "We collect information you provide directly to us, including name, email address, phone number, and business information when you register for our services.",
  },
  {
    title: "How We Use Your Information",
    content: "We use the information we collect to provide, maintain, and improve our services, process transactions, and send you related information.",
  },
  {
    title: "Data Security",
    content: "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.",
  },
  {
    title: "Your Rights",
    content: "You have the right to access, correct, or delete your personal data. Contact us to exercise these rights.",
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-[calc(100vh-64px)]">
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary font-medium mb-4 text-sm tracking-wide uppercase animate-fade-in">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in [animation-delay:100ms]">
            Privacy Policy
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
              <h2 className="text-lg font-semibold mb-3 text-foreground">Contact Us</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                For privacy-related inquiries, email us at{" "}
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

export default PrivacyPolicy;