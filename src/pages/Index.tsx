import { Bell, Search, Users, Calendar, Heart, HandHeart, Award, MessageSquare, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const features = [
    {
      title: "Chapters",
      description: "Connect with local chapters in your area",
      icon: Users,
      color: "primary",
    },
    {
      title: "Events",
      description: "Discover and join upcoming city events",
      icon: Calendar,
      color: "secondary",
    },
    {
      title: "Donations",
      description: "Support causes that matter to your community",
      icon: Heart,
      color: "accent",
    },
    {
      title: "Volunteering",
      description: "Make a difference through volunteer opportunities",
      icon: HandHeart,
      color: "navy",
    },
    {
      title: "Sponsorship",
      description: "Partner with us to create lasting impact",
      icon: Award,
      color: "deep",
    },
  ];

  const announcements = [
    {
      title: "Welcome to City Collab!",
      message: "Join our growing community of city members making a difference.",
      date: "2 hours ago",
      pinned: true,
    },
    {
      title: "New Event: Community Cleanup",
      message: "Join us this Saturday for our monthly community cleanup event.",
      date: "1 day ago",
      pinned: false,
    },
  ];

  const posts = [
    {
      author: "Sarah Johnson",
      role: "Chapter Lead",
      content: "Amazing turnout at yesterday's volunteer event! Thank you to all 45 volunteers who helped.",
      likes: 124,
      comments: 18,
      time: "3 hours ago",
    },
    {
      author: "Michael Chen",
      role: "Community Member",
      content: "Excited to announce our new partnership with local schools for the literacy program!",
      likes: 89,
      comments: 12,
      time: "5 hours ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-lg font-bold text-primary md:text-xl">City Collab</h1>
                <p className="text-xs text-muted-foreground">Your City</p>
              </div>
            </div>
            
            <div className="hidden flex-1 max-w-md md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Search..." 
                  className="pl-10 bg-muted/50"
                />
              </div>
            </div>

            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground">
                3
              </span>
            </Button>
          </div>
          
          {/* Mobile Search */}
          <div className="mt-3 md:hidden">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search..." 
                className="pl-10 bg-muted/50"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-8">
        {/* Feature Cards */}
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl">Quick Access</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {features.map((feature) => (
              <Card 
                key={feature.title} 
                className="group cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-base md:text-lg">{feature.title}</CardTitle>
                  <CardDescription className="text-xs md:text-sm">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Feed */}
          <div className="lg:col-span-2">
            {/* Announcements */}
            <section className="mb-6">
              <h2 className="mb-4 text-xl font-bold text-foreground">Announcements</h2>
              <div className="space-y-3">
                {announcements.map((announcement, index) => (
                  <Card key={index} className={announcement.pinned ? "border-primary/50 bg-primary/5" : ""}>
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <CardTitle className="text-base">{announcement.title}</CardTitle>
                            {announcement.pinned && (
                              <Badge variant="secondary" className="text-xs">Pinned</Badge>
                            )}
                          </div>
                          <CardDescription className="mt-1 text-sm">{announcement.message}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <div className="px-6 pb-4">
                      <p className="text-xs text-muted-foreground">{announcement.date}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Posts Feed */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-foreground">City Feed</h2>
              <div className="space-y-4">
                {posts.map((post, index) => (
                  <Card key={index} className="transition-shadow hover:shadow-md">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-medium">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-base">{post.author}</CardTitle>
                          <CardDescription className="text-xs">{post.role} • {post.time}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-foreground">{post.content}</p>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <button className="flex items-center gap-1 hover:text-primary transition-colors">
                          <Heart className="h-4 w-4" />
                          <span>{post.likes}</span>
                        </button>
                        <button className="flex items-center gap-1 hover:text-primary transition-colors">
                          <MessageSquare className="h-4 w-4" />
                          <span>{post.comments}</span>
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar - Hidden on Mobile */}
          <aside className="hidden lg:block">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-base">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex h-12 w-12 flex-col items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <span className="text-xs font-bold">MAR</span>
                    <span className="text-lg font-bold">15</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Community Cleanup</p>
                    <p className="text-xs text-muted-foreground">Central Park • 9:00 AM</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-12 w-12 flex-col items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                    <span className="text-xs font-bold">MAR</span>
                    <span className="text-lg font-bold">20</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Fundraising Gala</p>
                    <p className="text-xs text-muted-foreground">City Hall • 6:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card md:hidden">
        <div className="grid grid-cols-5 gap-1 p-2">
          <Button variant="ghost" size="sm" className="flex flex-col gap-1 h-auto py-2">
            <Users className="h-5 w-5" />
            <span className="text-[10px]">Home</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col gap-1 h-auto py-2">
            <Calendar className="h-5 w-5" />
            <span className="text-[10px]">Events</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col gap-1 h-auto py-2">
            <MessageSquare className="h-5 w-5" />
            <span className="text-[10px]">Messages</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col gap-1 h-auto py-2">
            <Users className="h-5 w-5" />
            <span className="text-[10px]">Directory</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col gap-1 h-auto py-2">
            <Users className="h-5 w-5" />
            <span className="text-[10px]">Profile</span>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Index;
