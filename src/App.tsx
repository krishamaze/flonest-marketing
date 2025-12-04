import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { HeaderVisibilityProvider } from "@/contexts/HeaderVisibilityContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
import TermsAndConditions from "@/pages/TermsAndConditions";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import RefundAndCancellation from "@/pages/RefundAndCancellation";
import ShippingPolicy from "@/pages/ShippingPolicy";
import Policies from "@/pages/Policies";
import NotFound from "@/pages/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";

const queryClient = new QueryClient();

function AppLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Homepage uses fullpage scroll (handled by SectionScroller)
  // Other pages use normal scrolling
  if (isHomePage) {
    return (
      <>
        <Header />
        <Home />
      </>
    );
  }

  return (
    <div className="min-h-[100dvh] flex flex-col overflow-auto">
      <Header />
      <main className="flex-1 pt-16">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-and-cancellation" element={<RefundAndCancellation />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <SonnerToaster />
      <BrowserRouter>
        <ScrollToTop />
        <HeaderVisibilityProvider>
          <Routes>
            <Route path="/*" element={<AppLayout />} />
          </Routes>
        </HeaderVisibilityProvider>
        <WhatsAppWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;