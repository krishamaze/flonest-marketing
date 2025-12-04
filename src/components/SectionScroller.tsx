import { createContext, useContext, ReactNode, useEffect } from "react";
import { useSectionScroller, SectionConfig } from "@/hooks/useSectionScroller";

interface SectionScrollerContextValue {
  activeSection: number;
  scrollToSection: (index: number, updateHistory?: boolean) => void;
  isAnimating: boolean;
  sections: SectionConfig[];
  totalSections: number;
}

const SectionScrollerContext = createContext<SectionScrollerContextValue | null>(null);

export function useSectionScrollerContext() {
  const context = useContext(SectionScrollerContext);
  if (!context) {
    throw new Error("useSectionScrollerContext must be used within SectionScroller");
  }
  return context;
}

interface SectionScrollerProps {
  children: ReactNode;
  sections: SectionConfig[];
  duration?: number;
  easing?: string;
  showIndicators?: boolean;
  className?: string;
}

export function SectionScroller({
  children,
  sections,
  duration = 1000,
  easing = "cubic-bezier(0.23, 1, 0.32, 1)",
  showIndicators = true,
  className = "",
}: SectionScrollerProps) {
  const {
    activeSection,
    isAnimating,
    scrollToSection,
    setContainerRef,
    transformStyle,
    totalSections,
  } = useSectionScroller({
    sections,
    duration,
    easing,
  });

  // Add fp-active class to body when mounted, remove on unmount
  useEffect(() => {
    document.body.classList.add('fp-active');
    return () => {
      document.body.classList.remove('fp-active');
    };
  }, []);

  return (
    <SectionScrollerContext.Provider 
      value={{ 
        activeSection, 
        scrollToSection, 
        isAnimating, 
        sections,
        totalSections,
      }}
    >
      {/* Fullpage container - fixed viewport */}
      <div
        ref={setContainerRef}
        className={`fp-container ${isAnimating ? 'is-scrolling' : ''} ${className}`}
      >
        {/* Transform wrapper - moves sections */}
        <div
          className="fp-wrapper"
          style={transformStyle}
        >
          {children}
        </div>
      </div>
      
      {/* Section indicators - only on lg+ (1024px) */}
      {showIndicators && (
        <nav
          className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3"
          aria-label="Page sections"
        >
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(index)}
              className="group relative w-10 h-10 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"
              aria-label={section.label || section.id}
              aria-current={activeSection === index ? "true" : undefined}
            >
              {/* Visual dot */}
              <span 
                className={`
                  w-2.5 h-2.5 rounded-full transition-all duration-300
                  ${activeSection === index
                    ? "bg-primary scale-150 shadow-[0_0_10px_hsl(var(--primary)/0.5)]"
                    : "bg-foreground/20 group-hover:bg-foreground/40 group-hover:scale-125"
                  }
                `} 
              />
              {/* Tooltip */}
              {section.label && (
                <span className="absolute right-full mr-3 px-2.5 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg">
                  {section.label}
                </span>
              )}
            </button>
          ))}
        </nav>
      )}
    </SectionScrollerContext.Provider>
  );
}