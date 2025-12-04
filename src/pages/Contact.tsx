import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-64px)]">
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary font-medium mb-4 text-sm tracking-wide uppercase animate-fade-in">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in [animation-delay:100ms]">
            Get in Touch
          </h1>
          <p className="text-lg text-secondary-foreground/80 animate-fade-in [animation-delay:200ms]">
            We'd love to hear from you. Reach out anytime.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="bg-card p-8 rounded-2xl border border-border/50 animate-fade-in [animation-delay:300ms]">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-7 h-7 text-primary" />
            </div>
            <a
              href="mailto:support@flonest.app"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Send email to support@flonest.app"
            >
              support@flonest.app
            </a>
            <p className="mt-6 text-sm text-muted-foreground">
              Typically respond within 24 hours
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;