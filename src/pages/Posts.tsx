import { ArrowLeft, Heart, MessageSquare, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import cityImage1 from "@/assets/city-1.jpg";
import cityImage2 from "@/assets/city-2.jpg";
import cityImage3 from "@/assets/city-3.jpg";

const Posts = () => {
  const navigate = useNavigate();

  const posts = [
    {
      id: 1,
      author: "Sarah Johnson",
      role: "Chapter Lead",
      content: "Amazing turnout at yesterday's volunteer event! Thank you to all 45 volunteers who helped make our community cleanup a success. Together we collected over 200 bags of trash!",
      likes: 124,
      comments: 18,
      time: "3 hours ago",
      image: cityImage2,
    },
    {
      id: 2,
      author: "Michael Chen",
      role: "Community Member",
      content: "Excited to announce our new partnership with local schools for the literacy program! We'll be launching tutoring sessions next month.",
      likes: 89,
      comments: 12,
      time: "5 hours ago",
      image: cityImage1,
    },
    {
      id: 3,
      author: "Emma Davis",
      role: "Volunteer Coordinator",
      content: "Our downtown revitalization project is making great progress! Check out these before and after photos of Main Street.",
      likes: 156,
      comments: 24,
      time: "8 hours ago",
      image: cityImage3,
    },
  ];

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
              <p className="text-xs text-muted-foreground">Community posts</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-8 max-w-2xl">
        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id} className="transition-shadow hover:shadow-md">
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
                {post.image && (
                  <img 
                    src={post.image} 
                    alt="Post content" 
                    className="w-full rounded-lg mb-4 object-cover"
                  />
                )}
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    <Heart className="h-4 w-4" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    <MessageSquare className="h-4 w-4" />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Posts;
