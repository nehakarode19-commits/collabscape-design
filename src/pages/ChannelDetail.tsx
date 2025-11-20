import { ArrowLeft, Send, Smile, Paperclip, Hash, MessageSquare, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import sarahJohnson from "@/assets/members/sarah-johnson.jpg";
import michaelChen from "@/assets/members/michael-chen.jpg";
import emilyRodriguez from "@/assets/members/emily-rodriguez.jpg";

const ChannelDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const channel = {
    id: id || "1",
    name: "general",
    description: "General discussion for all members",
    memberCount: 42,
  };

  const topics = [
    {
      id: "1",
      title: "Welcome to the Organization",
      messageCount: 15,
      lastActivity: "2 hours ago",
      unread: 3,
    },
    {
      id: "2",
      title: "Upcoming Events Discussion",
      messageCount: 8,
      lastActivity: "5 hours ago",
      unread: 0,
    },
    {
      id: "3",
      title: "Volunteer Opportunities",
      messageCount: 12,
      lastActivity: "1 day ago",
      unread: 1,
    },
  ];

  const messages = [
    {
      id: "1",
      sender: "Sarah Johnson",
      avatar: sarahJohnson,
      content: "Welcome everyone to our organization channel! Feel free to introduce yourself and share what brings you here.",
      timestamp: "10:30 AM",
      reactions: [{ emoji: "👋", count: 5 }, { emoji: "❤️", count: 3 }],
    },
    {
      id: "2",
      sender: "Michael Chen",
      avatar: michaelChen,
      content: "Thanks Sarah! I'm excited to be part of this organization and looking forward to contributing to local events.",
      timestamp: "10:35 AM",
      reactions: [{ emoji: "👍", count: 2 }],
    },
    {
      id: "3",
      sender: "Emily Rodriguez",
      avatar: emilyRodriguez,
      content: "Great to see everyone here! Let's make this organization amazing together.",
      timestamp: "10:42 AM",
      reactions: [],
    },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate("/messages")}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2 flex-1">
              <Hash className="h-5 w-5 text-primary" />
              <div>
                <h1 className="text-lg font-bold text-primary">{channel.name}</h1>
                <p className="text-xs text-muted-foreground">{channel.description}</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Users className="h-4 w-4 mr-2" />
              {channel.memberCount}
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Topics Sidebar */}
        <aside className="w-80 border-r border-border bg-card hidden md:block">
          <div className="p-4 border-b border-border">
            <h2 className="font-semibold text-sm flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Topics
            </h2>
          </div>
          <ScrollArea className="h-[calc(100vh-12rem)]">
            <div className="p-2 space-y-1">
              {topics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic.id)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedTopic === topic.id
                      ? "bg-primary/10 border border-primary/20"
                      : "hover:bg-muted"
                  }`}
                >
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-medium text-sm line-clamp-1">{topic.title}</h3>
                    {topic.unread > 0 && (
                      <Badge variant="default" className="h-5 min-w-5 px-1.5 text-xs">
                        {topic.unread}
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {topic.messageCount} messages · {topic.lastActivity}
                  </p>
                </button>
              ))}
            </div>
          </ScrollArea>
        </aside>

        {/* Messages Area */}
        <main className="flex-1 flex flex-col">
          <div className="p-4 border-b border-border bg-muted/30">
            <h3 className="font-semibold text-sm">
              {selectedTopic
                ? topics.find((t) => t.id === selectedTopic)?.title
                : "Select a topic to view messages"}
            </h3>
          </div>

          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4 max-w-4xl mx-auto">
              {messages.map((msg) => (
                <Card key={msg.id} className="bg-card">
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={msg.avatar} />
                        <AvatarFallback>
                          {msg.sender
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-sm">{msg.sender}</span>
                          <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
                        </div>
                        <p className="text-sm text-foreground mb-2">{msg.content}</p>
                        {msg.reactions.length > 0 && (
                          <div className="flex gap-1">
                            {msg.reactions.map((reaction, idx) => (
                              <Button
                                key={idx}
                                variant="outline"
                                size="sm"
                                className="h-7 px-2 text-xs"
                              >
                                {reaction.emoji} {reaction.count}
                              </Button>
                            ))}
                            <Button variant="ghost" size="sm" className="h-7 px-2">
                              <Smile className="h-3 w-3" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>

          {/* Message Input */}
          <div className="p-4 border-t border-border bg-card">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Paperclip className="h-5 w-5" />
                </Button>
                <Input
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button variant="ghost" size="icon">
                  <Smile className="h-5 w-5" />
                </Button>
                <Button onClick={handleSendMessage} disabled={!message.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ChannelDetail;
