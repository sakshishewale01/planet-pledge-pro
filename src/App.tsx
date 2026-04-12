import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Index from "./pages/Index";
import CalculatorPage from "./pages/CalculatorPage";
import AwarenessPage from "./pages/AwarenessPage";
import EcoTipsPage from "./pages/EcoTipsPage";
import QuizPage from "./pages/QuizPage";
import PledgePage from "./pages/PledgePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/awareness" element={<AwarenessPage />} />
          <Route path="/eco-tips" element={<EcoTipsPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/pledge" element={<PledgePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
