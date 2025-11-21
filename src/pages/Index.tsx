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
import city1 from "@/assets/city-1.jpg";
import city2 from "@/assets/city-2.jpg";
import city3 from "@/assets/city-3.jpg";

const Index = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<"local" | "regional">("local");
  const exploreCards = [
    {
      title: "Events",
      description: "Discover and attend organization events happening near you",
      icon: Calendar,
      href: "/events",
    },
    {
      title: "Donations",
      description: "Support local causes and make a difference in your organization",
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
      description: "Partner with us and help grow our organization initiatives",
      icon: Award,
      href: "/sponsorship",
    },
  ];

  const announcement = {
    title: "Important: City Hall Meeting",
    message: "Join us this Thursday at 7 PM for our monthly organization meeting. Topics include upcoming projects and budget discussions.",
    icon: Megaphone,
  };

  const post = {
    author: "Sarah Johnson",
    role: "Organization Organizer",
    time: "2 hours ago",
    content: "I just got back from an inspiring session about urban planning with some of the city's most innovative architects. It reminded me of why I love being part of this organization...",
  };

  const posts = [
    {
      id: 1,
      author: "Sarah Johnson",
      role: "Organization Organizer",
      city: "San Francisco",
      department: "Organization Development",
      time: "2 hours ago",
      content: "I just got back from an inspiring session about urban planning with some of the city's most innovative architects. It reminded me of why I love being part of this organization. The collaborative spirit and innovative ideas shared today will shape our city for years to come.",
      likes: 45,
      comments: 12,
      shares: 5,
      avatar: "SJ",
      image: city1,
    },
    {
      id: 2,
      author: "Michael Chen",
      role: "Public Works Director",
      city: "Oakland",
      department: "Infrastructure",
      time: "4 hours ago",
      content: "Excited to announce our new green infrastructure project! We're implementing sustainable drainage systems across three neighborhoods. This initiative will reduce flooding while creating beautiful green spaces for our residents. #SustainableCity #PublicWorks",
      likes: 89,
      comments: 23,
      shares: 15,
      avatar: "MC",
      image: city2,
    },
    {
      id: 3,
      author: "Jennifer Rodriguez",
      role: "IT Director",
      city: "Berkeley",
      department: "Technology",
      time: "6 hours ago",
      content: "Cybersecurity workshop was a huge success! Thanks to all the IT professionals who joined us. Key takeaway: Multi-factor authentication is non-negotiable in 2024. Let's keep our cities safe and secure. 🔒",
      likes: 67,
      comments: 18,
      shares: 9,
      avatar: "JR",
      image: city3,
    },
  ];

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
              <div className="flex items-center gap-4 flex-1">
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
          <div className="px-6 py-4">
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
        <main className="px-6 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Sidebar - Profile & Actions */}
            <div className="lg:col-span-3 space-y-6">
              {/* User Profile Card */}
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-xl mb-3">
                    SM
                  </div>
                  <h3 className="font-bold text-foreground text-base mb-1">Sarah Martinez</h3>
                  <p className="text-xs text-muted-foreground mb-4">Emergency Services Director</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-muted/50">
                      <p className="text-xs text-muted-foreground mb-1">Regional Connections</p>
                      <p className="text-lg font-bold text-foreground">124</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/50">
                      <p className="text-xs text-muted-foreground mb-1">Committees</p>
                      <p className="text-lg font-bold text-foreground">3</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-muted/50">
                      <p className="text-xs text-muted-foreground mb-1">SOPs Owned</p>
                      <p className="text-lg font-bold text-foreground">8</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/50">
                      <p className="text-xs text-muted-foreground mb-1">Compliance</p>
                      <p className="text-lg font-bold text-foreground">92%</p>
                    </div>
                  </div>
                  
                  <Button variant="default" className="w-full mt-4" onClick={() => navigate("/profile")}>
                    Edit Profile
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Quick Actions</CardTitle>
                  <CardDescription className="text-xs">Create posts, events, SOPs, or post updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start" size="sm" onClick={() => navigate("/events")}>
                      <Calendar className="h-4 w-4 mr-2" />
                      Create Event
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm" onClick={() => navigate("/sop-library")}>
                      <FileText className="h-4 w-4 mr-2" />
                      Upload SOP
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm" onClick={() => navigate("/posts")}>
                      <Megaphone className="h-4 w-4 mr-2" />
                      Post Update
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm" onClick={() => navigate("/channels")}>
                      <Hash className="h-4 w-4 mr-2" />
                      Create Channel
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recommended Experts */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Recommended Experts</CardTitle>
                  <CardDescription className="text-xs">Peer-to-peer skill discovery</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {experts.slice(0, 3).map((expert, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-start gap-3">
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
                        </div>
                        <Button size="sm" variant="ghost" className="w-full h-7 text-xs">
                          View Profile →
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Center Column - Activity Feed */}
            <div className="lg:col-span-6 space-y-6">
              {/* Activity Feed Header */}
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-foreground">Activity Feed</h2>
                <Button variant="ghost" size="sm" className="text-xs">
                  Filter +
                </Button>
              </div>

              {/* Posts */}
              <div className="space-y-4">
                {posts.map((post) => (
                  <Card key={post.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-start gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm shrink-0">
                          {post.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-foreground text-sm truncate">{post.author}</h3>
                              <p className="text-xs text-muted-foreground truncate">{post.role}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="secondary" className="text-[10px] py-0 px-1.5">
                                  {post.department}
                                </Badge>
                                <span className="text-xs text-muted-foreground">• {post.time}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 space-y-4">
                      <p className="text-sm text-foreground leading-relaxed">{post.content}</p>
                      
                      {post.image && (
                        <img 
                          src={post.image} 
                          alt="Post content" 
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      )}

                      {/* Engagement Stats */}
                      <div className="flex items-center gap-4 pt-2 border-t border-border text-xs text-muted-foreground">
                        <span>{post.likes} likes</span>
                        <span>•</span>
                        <span>{post.comments} comments</span>
                        <span>•</span>
                        <span>{post.shares} shares</span>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-2 pt-2 border-t border-border">
                        <Button variant="ghost" size="sm" className="flex-1 h-9">
                          <Star className="h-4 w-4 mr-2" />
                          Like
                        </Button>
                        <Button variant="ghost" size="sm" className="flex-1 h-9">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Comment
                        </Button>
                        <Button variant="ghost" size="sm" className="flex-1 h-9">
                          <ArrowRight className="h-4 w-4 mr-2" />
                          Share
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Network Insights */}
              {viewMode === "regional" && (
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      Network Insights
                    </CardTitle>
                    <CardDescription className="text-xs">Recently shared SOPs across connected cities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-2">New SOPs Shared</p>
                        <ul className="space-y-1 text-xs text-foreground">
                          <li>• Cybersecurity Protocol – Seattle</li>
                          <li>• Green Infrastructure Guide – Portland</li>
                          <li>• HR Onboarding – Denver</li>
                        </ul>
                      </div>
                      
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-2">Trending Topics</p>
                        <ul className="space-y-1 text-xs text-foreground">
                          <li>• Climate Resilience</li>
                          <li>• Mental Wellness</li>
                          <li>• Remote Work Policies</li>
                        </ul>
                      </div>
                    </div>
                    
                    <Button variant="default" size="sm" className="w-full mt-4">
                      View SOP Library
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Right Column - Sidebar Widgets */}
            <div className="lg:col-span-3 space-y-6">
              {/* Upcoming Events */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-base">Upcoming Events</CardTitle>
                      <CardDescription className="text-xs">Regional & local sessions</CardDescription>
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs h-7" onClick={() => navigate("/events")}>
                      View All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                      <h4 className="font-medium text-sm text-foreground mb-1">Regional Emergency Response</h4>
                      <p className="text-xs text-muted-foreground mb-2">Nov 25, 2025 • Springfield, IL • 45 attending</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-[10px]">training</Badge>
                        <Button size="sm" variant="ghost" className="h-7 text-xs p-0">
                          Reg ster →
                        </Button>
                      </div>
                    </div>
                    
                    <div className="p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                      <h4 className="font-medium text-sm text-foreground mb-1">City Managers Quarterly</h4>
                      <p className="text-xs text-muted-foreground mb-2">Dec 2, 2025 • Virtual • 120 attending conference</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-[10px]">conference</Badge>
                        <Button size="sm" variant="ghost" className="h-7 text-xs p-0">
                          Register →
                        </Button>
                      </div>
                    </div>
                    
                    <div className="p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                      <h4 className="font-medium text-sm text-foreground mb-1">Budget Planning Workshop 2025</h4>
                      <p className="text-xs text-muted-foreground mb-2">Dec 10, 2025 • Chicago, IL • 32 attending</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-[10px]">workshop</Badge>
                        <Button size="sm" variant="ghost" className="h-7 text-xs p-0">
                          Register →
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* My Departments & Channels */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">My Departments & Channels</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer" onClick={() => navigate("/channels")}>
                      <span className="text-sm text-foreground"># Fire Services</span>
                      <Badge variant="destructive" className="h-5 w-5 rounded-full p-0 flex items-center justify-center text-[10px]">
                        3
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer" onClick={() => navigate("/channels")}>
                      <span className="text-sm text-foreground"># Police Department</span>
                      <Badge variant="destructive" className="h-5 w-5 rounded-full p-0 flex items-center justify-center text-[10px]">
                        7
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer" onClick={() => navigate("/channels")}>
                      <span className="text-sm text-foreground"># Public Works</span>
                      <Badge variant="destructive" className="h-5 w-5 rounded-full p-0 flex items-center justify-center text-[10px]">
                        5
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer" onClick={() => navigate("/channels")}>
                      <span className="text-sm text-foreground"># Emergency Planning Committee</span>
                      <Badge variant="destructive" className="h-5 w-5 rounded-full p-0 flex items-center justify-center text-[10px]">
                        2
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer" onClick={() => navigate("/channels")}>
                      <span className="text-sm text-foreground"># Regional Chiefs Network</span>
                      <Badge variant="destructive" className="h-5 w-5 rounded-full p-0 flex items-center justify-center text-[10px]">
                        8
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer" onClick={() => navigate("/channels")}>
                      <span className="text-sm text-foreground"># Grant Writing Task Force</span>
                      <Badge variant="destructive" className="h-5 w-5 rounded-full p-0 flex items-center justify-center text-[10px]">
                        1
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* SOP Quick Access */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">SOP Quick Access</CardTitle>
                    <Button variant="ghost" size="sm" className="text-xs h-7" onClick={() => navigate("/sop-library")}>
                      Search All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer" onClick={() => navigate("/sop-library")}>
                      <h4 className="font-medium text-sm text-foreground mb-1">Emergency Weather Response</h4>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Emergency Services</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          Viewed yesterday
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer" onClick={() => navigate("/sop-library")}>
                      <h4 className="font-medium text-sm text-foreground mb-1">Vehicle Fleet Maintenance</h4>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Public Works</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          Viewed 3 days ago
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer" onClick={() => navigate("/sop-library")}>
                      <h4 className="font-medium text-sm text-foreground mb-1">Hazmat Incident Protocol</h4>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Fire Department</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          Viewed this week
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer" onClick={() => navigate("/sop-library")}>
                      <h4 className="font-medium text-sm text-foreground mb-1">Community Outreach Guidelines</h4>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Administration</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          Viewed last week
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sponsor Spotlight */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Sponsor Spotlight</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-sm text-foreground">Regional Safety Partnership</h4>
                        <Badge variant="secondary" className="text-[10px]">gold</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">Equipment and safety gear programs 12 areas this week</p>
                    </div>
                    
                    <div className="p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-sm text-foreground">TechCity Solutions</h4>
                        <Badge variant="secondary" className="text-[10px]">silver</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">Digital infrastructure and IT support. 10 areas this week</p>
                    </div>
                    
                    <div className="p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-sm text-foreground">Municipal Training Institute</h4>
                        <Badge variant="secondary" className="text-[10px]">gold</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">Leadership and skills development. 15 areas last week</p>
                    </div>
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
