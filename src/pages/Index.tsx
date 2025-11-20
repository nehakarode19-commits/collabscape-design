import { Bell, Search, Users, Calendar, Heart, HandHeart, Award, MessageSquare, Home, BookOpen, User, Settings, Hash, Megaphone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { MenuNavLink } from "@/components/MenuNavLink";
import heroSkyline from "@/assets/hero-city-skyline.jpg";
import civiCircleLogo from "@/assets/civicircle-logo.jpg";

const Index = () => {
  const navigate = useNavigate();
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

        {/* Hero Section */}
        <section className="relative h-64 lg:h-80 overflow-hidden">
          <img
            src={heroSkyline}
            alt="U.S.A. city skyline at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-3xl lg:text-5xl font-bold mb-3">Welcome to CiviCircle</h1>
              <p className="text-base lg:text-lg text-white/90">Where Public Servants Shine!</p>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="px-6 py-8 max-w-7xl mx-auto">
          {/* Explore Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-6">Explore</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {exploreCards.map((card) => (
                <Card
                  key={card.title}
                  className="cursor-pointer hover:shadow-md transition-all group"
                  onClick={() => navigate(card.href)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-3 group-hover:bg-primary/20 transition-colors">
                      <card.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base">{card.title}</CardTitle>
                    <CardDescription className="text-sm mt-2 leading-relaxed">
                      {card.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          {/* Important Announcement */}
          <section className="mb-8">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                    <announcement.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-2 text-lg">{announcement.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{announcement.message}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Community Feed */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">Community Feed</h2>
              <Button variant="default" size="sm" className="hidden lg:flex">
                + New Post
              </Button>
            </div>

            <div className="space-y-4 max-w-4xl">
              {/* Post */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                      SJ
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{post.author}</h3>
                      <p className="text-xs text-muted-foreground">{post.role}</p>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-foreground leading-relaxed mb-4">{post.content}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{post.time}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
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
