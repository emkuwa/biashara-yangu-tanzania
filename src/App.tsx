
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Index from "./pages/Index";
import BusinessIdeasPage from "./pages/BusinessIdeasPage";
import BusinessDetailPage from "./pages/BusinessDetailPage";
import TrainingResourcesPage from "./pages/TrainingResourcesPage";
import NotFound from "./pages/NotFound";
import RegisterPage from "./pages/RegisterPage";
import CommunityPage from "./pages/CommunityPage";
import ChatbotPage from "./pages/ChatbotPage";
import NameGeneratorPage from "./pages/NameGeneratorPage";
import AuthGuard from "./components/AuthGuard";
import LoginPage from "./pages/LoginPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/biashara" element={<BusinessIdeasPage />} />
            <Route path="/biashara/:businessId" element={
              <AuthGuard>
                <BusinessDetailPage />
              </AuthGuard>
            } />
            <Route path="/mafunzo" element={
              <AuthGuard>
                <TrainingResourcesPage />
              </AuthGuard>
            } />
            <Route path="/jamii" element={
              <AuthGuard>
                <CommunityPage />
              </AuthGuard>
            } />
            <Route path="/chatbot" element={
              <AuthGuard>
                <ChatbotPage />
              </AuthGuard>
            } />
            <Route path="/jina" element={
              <AuthGuard>
                <NameGeneratorPage />
              </AuthGuard>
            } />
            <Route path="/sajili" element={<RegisterPage />} />
            <Route path="/ingia" element={<LoginPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
