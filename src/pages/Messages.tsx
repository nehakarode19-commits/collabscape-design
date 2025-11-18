import { ArrowLeft, Search, MessageSquare, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

const Messages = () => {
  const navigate = useNavigate();

  const directMessages = [
    {
      id: 1,
      name: "Sarah Johnson",
      message: "Thanks for organizing the cleanup event!",
      time: "2 min ago",
      unread: 2,
    },
    {
      id: 2,
      name: "Michael Chen",
      message: "Looking forward to the meeting tomorrow",
      time: "1 hour ago",
      unread: 0,
    },
    {
      id: 3,
      name: "Emma Davis",
      message: "The donation campaign is going great!",
      time: "3 hours ago",
      unread: 1,
    },
  ];

  const channels = [
    {
      id: 1,
      name: "general",
      lastMessage: "Welcome everyone!",
      time: "5 min ago",
      unread: 5,
    },
    {
      id: 2,
      name: "events",
      lastMessage: "New event posted: Community Cleanup",
      time: "1 hour ago",
      unread: 0,
    },
    {
      id: 3,
      name: "volunteers",
      lastMessage: "Looking for volunteers this weekend",
      time: "2 hours ago",
      unread: 3,
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
              <h1 className="text-lg font-bold text-primary md:text-xl">Messages</h1>
              <p className="text-xs text-muted-foreground">Stay connected</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-8 max-w-4xl">
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Search messages..." 
              className="pl-10"
            />
          </div>
        </div>

        <Tabs defaultValue="direct" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="direct">Direct Messages</TabsTrigger>
            <TabsTrigger value="channels">Channels</TabsTrigger>
          </TabsList>

          <TabsContent value="direct" className="space-y-2">
            {directMessages.map((chat) => (
              <Card 
                key={chat.id}
                className="p-4 cursor-pointer hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-medium shrink-0">
                    {chat.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium truncate">{chat.name}</h3>
                      <span className="text-xs text-muted-foreground shrink-0 ml-2">{chat.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{chat.message}</p>
                  </div>
                  {chat.unread > 0 && (
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0">
                      {chat.unread}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="channels" className="space-y-2">
            {channels.map((channel) => (
              <Card 
                key={channel.id}
                className="p-4 cursor-pointer hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground shrink-0">
                    <Hash className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium">#{channel.name}</h3>
                      <span className="text-xs text-muted-foreground shrink-0 ml-2">{channel.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{channel.lastMessage}</p>
                  </div>
                  {channel.unread > 0 && (
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0">
                      {channel.unread}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Messages;
