import { ArrowLeft, Heart, MessageSquare, Share2, FileText, Bell, Calendar, Users, TrendingUp, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import cityImage1 from "@/assets/city-1.jpg";
import cityImage2 from "@/assets/city-2.jpg";
import cityImage3 from "@/assets/city-3.jpg";

const Posts = () => {
  const navigate = useNavigate();

  const posts = [
    {
      id: 1,
      type: "Regional Chief Post",
      author: "Sarah Johnson",
      role: "Regional Fire Chief",
      city: "San Francisco",
      department: "Fire Department",
      content: "Implementing new rapid response protocols across the region. Our average response time has improved by 22% this quarter. Sharing our approach in the Regional Library.",
      likes: 245,
      comments: 34,
      time: "2 hours ago",
      attachments: ["Protocol_Doc.pdf"],
    },
    {
      id: 2,
      type: "SOP Update",
      author: "Michael Chen",
      role: "City Manager",
      city: "Oakland",
      department: "Administration",
      content: "Updated Emergency Response SOP now available in the library. Key changes include enhanced coordination protocols and resource allocation guidelines.",
      likes: 189,
      comments: 28,
      time: "4 hours ago",
      attachments: ["Emergency_SOP_v2.pdf"],
    },
    {
      id: 3,
      type: "Department Update",
      author: "Emma Davis",
      role: "Police Chief",
      city: "Berkeley",
      department: "Police Department",
      content: "Organization policing initiative showing excellent results. Crime rates down 15% and organization satisfaction scores up significantly. Open to sharing best practices.",
      likes: 312,
      comments: 45,
      time: "5 hours ago",
      image: cityImage1,
    },
    {
      id: 4,
      type: "Event Invitation",
      author: "Robert Taylor",
      role: "Event Coordinator",
      city: "San Jose",
      department: "Organization Services",
      content: "Join us for the Regional Leadership Summit next month! Network with chiefs and managers from across the state. Registration opens Monday.",
      likes: 156,
      comments: 22,
      time: "6 hours ago",
      image: cityImage2,
    },
    {
      id: 5,
      type: "City Announcement",
      author: "Jennifer Lee",
      role: "Mayor",
      city: "Palo Alto",
      department: "City Office",
      content: "Proud to announce our city has been selected for the Smart Cities initiative. This will bring $2M in funding for infrastructure improvements and technology upgrades.",
      likes: 428,
      comments: 67,
      time: "8 hours ago",
    },
    {
      id: 6,
      type: "Sponsor Program",
      author: "David Kim",
      role: "Program Director",
      city: "Fremont",
      department: "Organization Development",
      content: "Thanks to our partnership with TechCorp, we're launching free coding bootcamps for underserved youth. Applications open next week for 100 spots!",
      likes: 267,
      comments: 38,
      time: "10 hours ago",
      image: cityImage3,
    },
    {
      id: 7,
      type: "Mutual Aid Alert",
      author: "Lisa Anderson",
      role: "Emergency Manager",
      city: "Sacramento",
      department: "Emergency Services",
      content: "🚨 Mutual Aid Request: Wildfire response team needed in Northern region. Contact emergency operations center for deployment details. [Placeholder for future feature]",
      likes: 89,
      comments: 12,
      time: "1 hour ago",
    },
  ];

  const insights = {
    newSOPs: [
      { title: "Wildfire Evacuation Protocol", city: "San Diego", department: "Fire" },
      { title: "Crisis Communication Guidelines", city: "Los Angeles", department: "Communications" },
      { title: "Budget Allocation Framework", city: "Fresno", department: "Finance" },
    ],
    trending: [
      { topic: "Emergency Preparedness", posts: 45 },
      { topic: "Organization Engagement", posts: 38 },
      { topic: "Budget Optimization", posts: 29 },
    ],
    experts: [
      { name: "Dr. Maria Garcia", expertise: "Grant Writing", city: "Sacramento" },
      { name: "James Wilson", expertise: "Emergency Planning", city: "San Francisco" },
      { name: "Amanda White", expertise: "IT Infrastructure", city: "San Jose" },
    ],
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-lg font-bold text-primary md:text-xl">City Feed</h1>
              <p className="text-xs text-muted-foreground">Organization posts</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Activity Feed */}
          <div className="lg:col-span-2 space-y-4">
            {posts.map((post) => (
              <Card key={post.id} className="transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="flex items-start gap-3 mb-2">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-base">{post.author}</CardTitle>
                      <CardDescription className="text-xs flex items-center gap-2 flex-wrap">
                        <span>{post.role}</span>
                        <span>•</span>
                        <span>{post.time}</span>
                      </CardDescription>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <Badge variant="secondary" className="text-xs">
                          {post.city}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {post.department}
                        </Badge>
                        <Badge className="text-xs">
                          {post.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-foreground leading-relaxed">{post.content}</p>
                  
                  {post.attachments && post.attachments.length > 0 && (
                    <div className="mb-4 p-3 bg-muted rounded-lg">
                      <div className="flex items-center gap-2 text-sm">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Attachments:</span>
                        {post.attachments.map((attachment, idx) => (
                          <Button key={idx} variant="link" className="h-auto p-0 text-xs">
                            {attachment}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {post.image && (
                    <img 
                      src={post.image} 
                      alt="Post content" 
                      className="w-full rounded-lg mb-4 object-cover max-h-96"
                    />
                  )}
                  
                  <div className="flex items-center gap-6 text-sm text-muted-foreground pt-3 border-t">
                    <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
                      <Heart className="h-4 w-4" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
                      <MessageSquare className="h-4 w-4" />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Inter-City Insights Panel */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Inter-City Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* New SOPs */}
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    Newly Shared SOPs
                  </h3>
                  <div className="space-y-2">
                    {insights.newSOPs.map((sop, idx) => (
                      <div key={idx} className="p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                        <p className="text-sm font-medium text-foreground">{sop.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {sop.city} • {sop.department}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trending Topics */}
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    Trending Topics
                  </h3>
                  <div className="space-y-2">
                    {insights.trending.map((trend, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                        <span className="text-sm text-foreground">{trend.topic}</span>
                        <Badge variant="secondary" className="text-xs">
                          {trend.posts} posts
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experts Available */}
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <UserCheck className="h-4 w-4 text-primary" />
                    Experts Available Now
                  </h3>
                  <div className="space-y-2">
                    {insights.experts.map((expert, idx) => (
                      <div key={idx} className="p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                        <div className="flex items-center gap-2 mb-1">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                              {expert.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <p className="text-sm font-medium text-foreground">{expert.name}</p>
                        </div>
                        <p className="text-xs text-muted-foreground ml-8">
                          {expert.expertise} • {expert.city}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Posts;
