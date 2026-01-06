import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import BecomeCreator from "./pages/BecomeCreator";
import Auth from "./pages/Auth";
import Dashboard from "./pages/creator-studio/Dashboard";
import AIBanner from "./pages/creator-studio/AIBanner";
import AILogo from "./pages/creator-studio/AILogo";
import BusinessCards from "./pages/creator-studio/BusinessCards";
import SocialPosts from "./pages/creator-studio/SocialPosts";
import Credits from "./pages/creator-studio/Credits";
import Profile from "./pages/creator-studio/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/become-creator" element={<BecomeCreator />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/creator-studio" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/creator-studio/banner" element={<ProtectedRoute><AIBanner /></ProtectedRoute>} />
              <Route path="/creator-studio/logo" element={<ProtectedRoute><AILogo /></ProtectedRoute>} />
              <Route path="/creator-studio/business-cards" element={<ProtectedRoute><BusinessCards /></ProtectedRoute>} />
              <Route path="/creator-studio/social-posts" element={<ProtectedRoute><SocialPosts /></ProtectedRoute>} />
              <Route path="/creator-studio/credits" element={<ProtectedRoute><Credits /></ProtectedRoute>} />
              <Route path="/creator-studio/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
