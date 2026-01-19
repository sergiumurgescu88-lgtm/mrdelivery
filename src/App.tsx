import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import FranchisePage from "./pages/FranchisePage";
import FranchiseManualPage from "./pages/FranchiseManualPage";
import AdminDashboard from "./pages/AdminDashboard";
import TermsAndConditions from "./pages/TermsAndConditions";
import CookiePolicy from "./pages/CookiePolicy";
import GalleryPage from "./pages/GalleryPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import { CookieConsentBanner } from "./components/CookieConsentBanner";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/franchise" element={<FranchisePage />} />
              <Route path="/franchise_manual" element={<FranchiseManualPage />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/termeni-si-conditii" element={<TermsAndConditions />} />
              <Route path="/politica-cookies" element={<CookiePolicy />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <CookieConsentBanner />
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
