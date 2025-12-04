import { Building2, MapPin, Mail } from "lucide-react";

interface BusinessInfoProps {
  className?: string;
}

const BusinessInfo = ({ className = "" }: BusinessInfoProps) => {
  const infoItems = [
    { 
      icon: Building2,
      label: "Business Name", 
      value: "FINETUNE" 
    },
    { 
      icon: MapPin,
      label: "Location", 
      value: "Coimbatore, Tamil Nadu, India" 
    },
    { 
      icon: Mail,
      label: "Email", 
      value: "support@flonest.com",
      href: "mailto:support@flonest.com"
    },
  ];

  return (
    <div className={`bg-card p-8 rounded-xl border border-border/50 max-w-xl mx-auto ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-primary/10 rounded-lg">
          <Building2 className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl font-bold text-foreground">
          Business Information
        </h2>
      </div>
      
      <div className="grid gap-4">
        {infoItems.map((item, index) => (
          <div 
            key={index} 
            className="group flex items-center gap-4 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-200"
          >
            <div className="p-2 bg-primary/5 rounded-md group-hover:bg-primary/10 transition-colors duration-200">
              <item.icon className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors duration-200" />
            </div>
            <div className="flex flex-col gap-0.5 min-w-0">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                {item.label}
              </span>
              {item.href ? (
                <a 
                  href={item.href} 
                  className="text-foreground font-medium hover:text-primary transition-colors duration-200"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-foreground font-medium">
                  {item.value}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessInfo;
