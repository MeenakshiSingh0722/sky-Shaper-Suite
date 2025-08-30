import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Order from "./pages/Order";
import OrderResult from "./pages/OrderResult";
import Subscriptions from "./pages/Subscriptions";
import FarmerPlan from "./pages/FarmerPlan";
import VacationHolo from "./pages/VacationHolo";
import VacationExperience from "./pages/VacationExperience";
import Marketplace from "./pages/Marketplace";
import Emergency from "./pages/Emergency";
import LiveMap from "./pages/LiveMap";
import AIGuide from "./pages/AIGuide";
import OrderDetail from "./pages/OrderDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order-result" element={<OrderResult />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/farmer-plan" element={<FarmerPlan />} />
          <Route path="/vacation-holo" element={<VacationHolo />} />
          <Route path="/vacation-experience" element={<VacationExperience />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/live-map" element={<LiveMap />} />
          <Route path="/ai-guide" element={<AIGuide />} />
          <Route path="/order-detail/:id" element={<OrderDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;