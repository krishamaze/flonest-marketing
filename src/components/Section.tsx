import { ReactNode, useState, useEffect, useRef } from "react";
import { useSectionScrollerContext } from "./SectionScroller";

interface SectionProps {
  index: number;
  id: string;
  children: ReactNode;
  className?: string;
  lazyLoad?: boolean;
}

export function Section({
  index,
  id,
  children,
  className = "",
  lazyLoad = false,
}: SectionProps) {
  const { activeSection } = useSectionScrollerContext();
  const [isLoaded, setIsLoaded] = useState(!lazyLoad);
  const sectionRef = useRef<HTMLElement>(null);

  const isActive = activeSection === index;
  const isNearby = Math.abs(activeSection - index) <= 1;

  // Lazy load when section is nearby
  useEffect(() => {
    if (!lazyLoad || isLoaded) return;
    
    if (isNearby) {
      setIsLoaded(true);
    }
  }, [lazyLoad, isLoaded, isNearby]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`fp-section ${className}`}
      data-index={index}
      data-active={isActive}
      aria-hidden={!isActive}
    >
      {isLoaded ? (
        <div className={`w-full h-full transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-90'}`}>
          {children}
        </div>
      ) : (
        <div 
          className="flex items-center justify-center h-full"
          aria-label="Loading section..."
        >
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </section>
  );
}