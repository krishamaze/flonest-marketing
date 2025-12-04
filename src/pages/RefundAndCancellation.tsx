const contentSections = [
  {
    title: "Cancellation Policy",
    content: "You may cancel your subscription at any time. Cancellation will take effect at the end of your current billing period.",
  },
  {
    title: "Refund Policy",
    content: "Refunds are available within 7 days of initial purchase if you are not satisfied with our service. After the 7-day period, refunds will be considered on a case-by-case basis.",
  },
  {
    title: "Processing Time",
    content: "Approved refunds will be processed within 5-7 business days and credited to your original payment method.",
  },
];

const RefundAndCancellation = () => {
  return (
    <div className="min-h-[calc(100vh-64px)]">
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary font-medium mb-4 text-sm tracking-wide uppercase animate-fade-in">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in [animation-delay:100ms]">
            Refund & Cancellation
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
              <h2 className="text-lg font-semibold mb-3 text-foreground">How to Request a Refund</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To request a refund, please contact our support team at{" "}
                <a 
                  href="mailto:support@flonest.app" 
                  className="text-primary hover:underline transition-colors duration-200"
                >
                  support@flonest.app
                </a>{" "}
                with your account details and reason for the refund request.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundAndCancellation;