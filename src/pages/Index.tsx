import { Bell, Search, Users, Calendar, Heart, HandHeart, Award, MessageSquare, Home, BookOpen, User, Settings, Hash, Megaphone, FileText, TrendingUp, AlertTriangle, CheckSquare, Lightbulb, Network, Shield, Clock, MapPin, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { MenuNavLink } from "@/components/MenuNavLink";
import { useState } from "react";
import heroSkyline from "@/assets/hero-city-skyline.jpg";
import civiCircleLogo from "@/assets/civicircle-logo.jpg";

const Index = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<"local" | "regional">("local");
  const exploreCards = [
    {
      title: "Chapters",
      description: "Join local chapters and connect with members in your area",
      icon: BookOpen,
      href: "/chapters",
    },
    {
      title: "Events",
      description: "Discover and attend community events happening near you",
      icon: Calendar,
      href: "/events",
    },
    {
      title: "Donations",
      description: "Support local causes and make a difference in your community",
      icon: Heart,
      href: "/donations",
    },
    {
      title: "Volunteering",
      description: "Find volunteer opportunities and give back to your city",
      icon: HandHeart,
      href: "/volunteering",
    },
    {
      title: "Sponsorship",
      description: "Partner with us and help grow our community initiatives",
      icon: Award,
      href: "/sponsorship",
    },
  ];

  const announcement = {
    title: "Important: City Hall Meeting",
    message: "Join us this Thursday at 7 PM for our monthly community meeting. Topics include upcoming projects and budget discussions.",
    icon: Megaphone,
  };

  const post = {
    author: "Sarah Johnson",
    role: "Community Organizer",
    time: "2 hours ago",
    content: "I just got back from an inspiring session about urban planning with some of the city's most innovative architects. It reminded me of why I love being part of this community...",
  };

  const experts = [
    { name: "Michael Chen", city: "Oakland", department: "Public Works", tags: ["Infrastructure", "Capital Planning"], avatar: "MC" },
    { name: "Jennifer Rodriguez", city: "Berkeley", department: "IT/Cyber", tags: ["Cybersecurity", "Cloud Migration"], avatar: "JR" },
    { name: "David Kim", city: "San Jose", department: "Finance", tags: ["Grant Writing", "Budget Analysis"], avatar: "DK" },
    { name: "Amanda White", city: "Fremont", department: "HR", tags: ["Recruitment", "Training"], avatar: "AW" },
  ];

  const tasks = [
    { title: "Review Emergency Response SOP", type: "SOP Review", count: 3, urgent: true },
    { title: "Regional Safety Committee Meeting", type: "Committee", count: 1, urgent: false },
    { title: "Event Feedback Follow-up", type: "Event", count: 2, urgent: false },
    { title: "Budget Approval Pending", type: "Approval", count: 5, urgent: true },
  ];

  const regionalHighlights = [
    { title: "Oakland shares new Waste Management SOP", type: "SOP", time: "1h ago", city: "Oakland" },
    { title: "AI in Local Government - trending discussion", type: "Trending", time: "3h ago", city: "Multiple Cities" },
    { title: "Regional CIO Alliance meeting scheduled", type: "Working Group", time: "5h ago", city: "Bay Area" },
  ];

  const recommendedChannels = [
    { name: "IT Infrastructure Coalition", members: 234, relevance: "High" },
    { name: "Emergency Management Network", members: 189, relevance: "Medium" },
    { name: "Budget Officers Forum", members: 156, relevance: "High" },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      {/* Left Sidebar Navigation */}
      <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 bg-sidebar border-r border-sidebar-border">
        <div className="flex items-center gap-3 p-6 border-b border-sidebar-border">
          <img src={civiCircleLogo} alt="CiviCircle" className="h-10 w-10 rounded-lg object-contain" />
          <div>
            <h1 className="text-base font-bold text-primary">CiviCircle</h1>
            <p className="text-xs text-muted-foreground">San Francisco</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <MenuNavLink to="/" icon={Home} label="Home" />
          <MenuNavLink to="/posts" icon={BookOpen} label="Posts" />
          <MenuNavLink to="/events" icon={Calendar} label="Events" />
          <MenuNavLink to="/donations" icon={Heart} label="Donations" />
          <MenuNavLink to="/volunteering" icon={HandHeart} label="Volunteering" />
          <MenuNavLink to="/messages" icon={MessageSquare} label="Messages" />
          <MenuNavLink to="/channels" icon={Hash} label="Channels" />
          <MenuNavLink to="/sop-library" icon={FileText} label="SOP Library" />
          <MenuNavLink to="/directory" icon={Users} label="Directory" />
        </nav>

        <div className="p-4 space-y-1 border-t border-sidebar-border">
          <MenuNavLink to="/profile" icon={User} label="Profile" />
          <MenuNavLink to="/settings" icon={Settings} label="Settings" />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:pl-64">
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-card border-b border-border">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1 max-w-2xl">
                <div className="lg:hidden flex items-center gap-3">
                  <img src={civiCircleLogo} alt="CiviCircle" className="h-8 w-8 object-contain" />
                  <div>
                    <h1 className="text-sm font-bold text-primary">CiviCircle</h1>
                    <p className="text-[10px] text-muted-foreground">San Francisco</p>
                  </div>
                </div>
                <div className="hidden lg:block flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search posts, events, members..."
                      className="pl-10 bg-muted/50 border-border"
                    />
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => navigate("/notifications")}
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground">
                  3
                </span>
              </Button>
            </div>
          </div>
        </header>

        {/* View Mode Toggle */}
        <div className="border-b border-border bg-card">
          <div className="px-6 py-4 max-w-7xl mx-auto">
            <div className="flex items-center justify-center gap-4">
              <Button
                variant={viewMode === "local" ? "default" : "ghost"}
                size="lg"
                onClick={() => setViewMode("local")}
                className="min-w-[160px]"
              >
                <Home className="h-4 w-4 mr-2" />
                My City
              </Button>
              <div className="h-8 w-px bg-border" />
              <Button
                variant={viewMode === "regional" ? "default" : "ghost"}
                size="lg"
                onClick={() => setViewMode("regional")}
                className="min-w-[160px]"
              >
                <Network className="h-4 w-4 mr-2" />
                Regional Network
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-48 lg:h-64 overflow-hidden">
          <img
            src={heroSkyline}
            alt="U.S.A. city skyline at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-2xl lg:text-4xl font-bold mb-2">
                {viewMode === "local" ? "CiviCircle" : "Bay Area Regional Network"}
              </h1>
              <p className="text-sm lg:text-base text-white/90">Where Public Servants Shine!</p>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="px-6 py-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Main Feed */}
            <div className="lg:col-span-2 space-y-6">
              {/* My Tasks & Actions */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <CheckSquare className="h-5 w-5 text-primary" />
                      My Tasks & Actions
                    </CardTitle>
                    <Badge variant="secondary">{tasks.length}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {tasks.map((task, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-3 flex-1">
                          {task.urgent && <AlertTriangle className="h-4 w-4 text-destructive shrink-0" />}
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">{task.title}</p>
                            <p className="text-xs text-muted-foreground">{task.type}</p>
                          </div>
                        </div>
                        <Badge variant={task.urgent ? "destructive" : "secondary"} className="ml-2">
                          {task.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Explore Section */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">Quick Access</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {exploreCards.slice(0, 6).map((card) => (
                    <Card
                      key={card.title}
                      className="cursor-pointer hover:shadow-md transition-all group"
                      onClick={() => navigate(card.href)}
                    >
                      <CardHeader className="pb-2 pt-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-2 group-hover:bg-primary/20 transition-colors">
                          <card.icon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-sm">{card.title}</CardTitle>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Important Announcement */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                      <announcement.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-1 text-base">{announcement.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{announcement.message}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Regional Activity Highlights */}
              {viewMode === "regional" && (
                <section>
                  <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Regional Activity Highlights
                  </h2>
                  <div className="space-y-3">
                    {regionalHighlights.map((highlight, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <p className="font-medium text-foreground text-sm mb-1">{highlight.title}</p>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Badge variant="outline" className="text-xs">{highlight.type}</Badge>
                                <MapPin className="h-3 w-3" />
                                <span>{highlight.city}</span>
                                <Clock className="h-3 w-3 ml-1" />
                                <span>{highlight.time}</span>
                              </div>
                            </div>
                            <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              )}

              {/* Community Feed */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-foreground">
                    {viewMode === "local" ? "Community Feed" : "Regional Updates"}
                  </h2>
                  <Button variant="default" size="sm">
                    + New Post
                  </Button>
                </div>

                <div className="space-y-3">
                  {/* Post */}
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                          SJ
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground text-sm">{post.author}</h3>
                          <p className="text-xs text-muted-foreground">{post.role} • {post.time}</p>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-foreground leading-relaxed">{post.content}</p>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </div>

            {/* Right Column - Sidebar Widgets */}
            <div className="space-y-6">
              {/* Expertise Finder */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    Find Experts
                  </CardTitle>
                  <CardDescription className="text-xs">Connect with specialists across cities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {experts.map((expert, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-xs shrink-0">
                          {expert.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm text-foreground truncate">{expert.name}</p>
                          <p className="text-xs text-muted-foreground truncate">{expert.city} • {expert.department}</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {expert.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary" className="text-[10px] py-0 px-1.5">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="h-7 text-xs shrink-0">
                          Connect
                        </Button>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="w-full mt-3 text-xs">
                    View All Experts <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>

              {/* Mutual Aid / Resource Registry */}
              <Card className="border-primary/30 bg-primary/5">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      Regional Resource Readiness
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">Beta</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Available crews</span>
                      <span className="font-semibold text-foreground">12 teams</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Specialized equipment</span>
                      <span className="font-semibold text-foreground">8 units</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <AlertTriangle className="h-4 w-4 text-destructive" />
                      <span className="text-destructive font-medium">Weather alert active</span>
                    </div>
                  </div>
                  <Button variant="default" size="sm" className="w-full mt-4">
                    Request Mutual Aid
                  </Button>
                </CardContent>
              </Card>

              {/* Recommended Channels & Committees */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Hash className="h-4 w-4 text-primary" />
                    Recommended for You
                  </CardTitle>
                  <CardDescription className="text-xs">Based on your expertise</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recommendedChannels.map((channel, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm text-foreground truncate">{channel.name}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <p className="text-xs text-muted-foreground">{channel.members} members</p>
                            <Badge variant={channel.relevance === "High" ? "default" : "secondary"} className="text-[10px] py-0 px-1.5">
                              {channel.relevance}
                            </Badge>
                          </div>
                        </div>
                        <Button size="sm" variant="ghost" className="h-7 text-xs shrink-0">
                          Join
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card lg:hidden">
        <div className="grid grid-cols-5 gap-1 p-2">
          <Button
            variant="ghost"
            size="sm"
            className="flex flex-col gap-1 h-auto py-2"
            onClick={() => navigate("/")}
          >
            <Home className="h-5 w-5 text-primary" />
            <span className="text-[10px] text-primary font-medium">Home</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex flex-col gap-1 h-auto py-2"
            onClick={() => navigate("/posts")}
          >
            <BookOpen className="h-5 w-5" />
            <span className="text-[10px]">Posts</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex flex-col gap-1 h-auto py-2"
            onClick={() => navigate("/events")}
          >
            <Calendar className="h-5 w-5" />
            <span className="text-[10px]">Events</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex flex-col gap-1 h-auto py-2"
            onClick={() => navigate("/messages")}
          >
            <MessageSquare className="h-5 w-5" />
            <span className="text-[10px]">Messages</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex flex-col gap-1 h-auto py-2"
            onClick={() => navigate("/profile")}
          >
            <User className="h-5 w-5" />
            <span className="text-[10px]">Profile</span>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Index;
