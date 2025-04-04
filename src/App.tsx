
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BusinessIdeasPage from "./pages/BusinessIdeasPage";
import BusinessDetailPage from "./pages/BusinessDetailPage";
import TrainingResourcesPage from "./pages/TrainingResourcesPage";
import NotFound from "./pages/NotFound";
import RegisterPage from "./pages/RegisterPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/biashara" element={<BusinessIdeasPage />} />
          <Route path="/biashara/:businessId" element={<BusinessDetailPage />} />
          <Route path="/mafunzo" element={<TrainingResourcesPage />} />
          <Route path="/sajili" element={<RegisterPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
