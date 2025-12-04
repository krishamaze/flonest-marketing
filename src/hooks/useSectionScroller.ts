import { useCallback, useEffect, useRef, useState } from "react";

export interface SectionConfig {
  id: string;
  label?: string;
}

export interface UseSectionScrollerOptions {
  sections: SectionConfig[];
  duration?: number;
  easing?: string;
}

export function useSectionScroller({
  sections,
  duration = 1000,
  easing = "cubic-bezier(0.23, 1, 0.32, 1)", // Smooth ease-out-quint like fullpage.js
}: UseSectionScrollerOptions) {
  const [activeSection, setActiveSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  // Refs for scroll control
  const canScrollRef = useRef(true);
  const touchStartY = useRef(0);
  const touchStartTime = useRef(0);
  const lastScrollTime = useRef(0);

  const setContainerRef = useCallback((el: HTMLDivElement | null) => {
    containerRef.current = el;
  }, []);

  // Navigate to a specific section
  const scrollToSection = useCallback((index: number, updateHistory = true) => {
    if (index < 0 || index >= sections.length) return;
    if (!canScrollRef.current && index !== activeSection) return;

    // Lock scrolling
    canScrollRef.current = false;
    setIsAnimating(true);
    setActiveSection(index);

    // Update URL hash
    const sectionId = sections[index]?.id;
    if (sectionId) {
      const hash = `#${sectionId}`;
      if (updateHistory) {
        history.pushState(null, "", hash);
      } else {
        history.replaceState(null, "", hash);
      }
    }

    // Release lock after animation completes
    setTimeout(() => {
      canScrollRef.current = true;
      setIsAnimating(false);
    }, duration);
  }, [sections, duration, activeSection]);

  // Navigate relative (next/prev)
  const navigate = useCallback((direction: 'up' | 'down') => {
    if (!canScrollRef.current) return;
    
    const now = Date.now();
    // Debounce rapid triggers
    if (now - lastScrollTime.current < 100) return;
    lastScrollTime.current = now;
    
    if (direction === 'down' && activeSection < sections.length - 1) {
      scrollToSection(activeSection + 1);
    } else if (direction === 'up' && activeSection > 0) {
      scrollToSection(activeSection - 1);
    }
  }, [activeSection, sections.length, scrollToSection]);

  // Wheel event handler - inspired by fullpage.js
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let wheelLocked = false;
    let wheelTimeout: ReturnType<typeof setTimeout> | null = null;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (!canScrollRef.current || wheelLocked) return;

      // Detect meaningful scroll (ignore tiny trackpad movements)
      const delta = Math.abs(e.deltaY);
      if (delta < 5) return;

      // Lock to prevent multiple triggers from single gesture
      wheelLocked = true;

      // Determine direction and navigate
      if (e.deltaY > 0) {
        navigate('down');
      } else {
        navigate('up');
      }

      // Unlock after a short delay (handles trackpad momentum)
      if (wheelTimeout) clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
        wheelLocked = false;
      }, 200);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
      if (wheelTimeout) clearTimeout(wheelTimeout);
    };
  }, [navigate]);

  // Touch handlers for mobile swipe
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let touchActive = false;
    let touchMoved = false;

    const handleTouchStart = (e: TouchEvent) => {
      if (!canScrollRef.current) return;
      touchStartY.current = e.touches[0].clientY;
      touchStartTime.current = Date.now();
      touchActive = true;
      touchMoved = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchActive) return;
      
      // Prevent native scroll
      e.preventDefault();
      touchMoved = true;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchActive || !touchMoved) {
        touchActive = false;
        return;
      }
      
      if (!canScrollRef.current) {
        touchActive = false;
        return;
      }

      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;
      const deltaTime = Date.now() - touchStartTime.current;

      // Calculate velocity for natural feel
      const velocity = Math.abs(deltaY) / deltaTime;
      
      // Swipe threshold: either distance or velocity based
      const distanceThreshold = window.innerHeight * 0.1; // 10% of screen
      const velocityThreshold = 0.3;

      if (Math.abs(deltaY) > distanceThreshold || velocity > velocityThreshold) {
        if (deltaY > 0) {
          navigate('down');
        } else {
          navigate('up');
        }
      }

      touchActive = false;
    };

    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [navigate]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!canScrollRef.current) return;
      
      // Skip if user is typing
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

      switch (e.key) {
        case "ArrowDown":
        case "PageDown":
          e.preventDefault();
          navigate('down');
          break;
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          navigate('up');
          break;
        case " ": // Space - down unless shift
          e.preventDefault();
          navigate(e.shiftKey ? 'up' : 'down');
          break;
        case "Home":
          e.preventDefault();
          scrollToSection(0);
          break;
        case "End":
          e.preventDefault();
          scrollToSection(sections.length - 1);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate, scrollToSection, sections.length]);

  // Handle initial hash on mount
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const index = sections.findIndex((s) => s.id === hash);
    if (index !== -1) {
      // Immediate jump without animation on mount
      setActiveSection(index);
    }
  }, [sections]);

  // Handle browser back/forward
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (!hash) {
        scrollToSection(0, false);
        return;
      }

      const index = sections.findIndex((s) => s.id === hash);
      if (index !== -1 && index !== activeSection) {
        scrollToSection(index, false);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [sections, activeSection, scrollToSection]);

  // CSS transform value
  const transformStyle = {
    transform: `translate3d(0, -${activeSection * 100}%, 0)`,
    transition: `transform ${duration}ms ${easing}`,
  };

  return {
    activeSection,
    isAnimating,
    scrollToSection,
    navigate,
    setContainerRef,
    transformStyle,
    sections,
    totalSections: sections.length,
  };
}