import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Chapters from "./pages/Chapters";
import ChapterDetail from "./pages/ChapterDetail";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Donations from "./pages/Donations";
import DonationDetail from "./pages/DonationDetail";
import Volunteering from "./pages/Volunteering";
import VolunteeringDetail from "./pages/VolunteeringDetail";
import Sponsorship from "./pages/Sponsorship";
import SponsorshipDetail from "./pages/SponsorshipDetail";
import Messages from "./pages/Messages";
import Directory from "./pages/Directory";
import Profile from "./pages/Profile";
import Posts from "./pages/Posts";
import NotFound from "./pages/NotFound";
import ChannelDetail from "./pages/ChannelDetail";
import ConversationDetail from "./pages/ConversationDetail";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/chapters" element={<Chapters />} />
          <Route path="/chapters/:id" element={<ChapterDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/donations/:id" element={<DonationDetail />} />
          <Route path="/volunteering" element={<Volunteering />} />
          <Route path="/volunteering/:id" element={<VolunteeringDetail />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/sponsorship/:id" element={<SponsorshipDetail />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/channels/:id" element={<ChannelDetail />} />
          <Route path="/conversations/:id" element={<ConversationDetail />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
