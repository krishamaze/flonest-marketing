import { createContext, useContext, useState, ReactNode } from "react";

interface HeaderVisibilityContextValue {
  isHeaderHidden: boolean;
  setHeaderHidden: (hidden: boolean) => void;
}

const HeaderVisibilityContext = createContext<HeaderVisibilityContextValue | null>(null);

export function useHeaderVisibility() {
  const context = useContext(HeaderVisibilityContext);
  if (!context) {
    throw new Error("useHeaderVisibility must be used within HeaderVisibilityProvider");
  }
  return context;
}

export function HeaderVisibilityProvider({ children }: { children: ReactNode }) {
  const [isHeaderHidden, setHeaderHidden] = useState(false);

  return (
    <HeaderVisibilityContext.Provider value={{ isHeaderHidden, setHeaderHidden }}>
      {children}
    </HeaderVisibilityContext.Provider>
  );
}
