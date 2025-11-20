import { ArrowLeft, Send, Smile, Paperclip, Phone, Video, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import sarahJohnson from "@/assets/members/sarah-johnson.jpg";
import michaelChen from "@/assets/members/michael-chen.jpg";

const ConversationDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [isTyping] = useState(false);

  const conversation = {
    id: id || "1",
    name: "Sarah Johnson",
    avatar: sarahJohnson,
    status: "online",
  };

  const messages = [
    {
      id: "1",
      sender: "Sarah Johnson",
      avatar: sarahJohnson,
      content: "Hey! I saw your profile and wanted to reach out about the upcoming organization event.",
      timestamp: "10:30 AM",
      isSent: false,
      reactions: [{ emoji: "👍", count: 1 }],
    },
    {
      id: "2",
      sender: "You",
      avatar: michaelChen,
      content: "Hi Sarah! Thanks for reaching out. I'd love to hear more about it.",
      timestamp: "10:32 AM",
      isSent: true,
      reactions: [],
    },
    {
      id: "3",
      sender: "Sarah Johnson",
      avatar: sarahJohnson,
      content: "Great! We're planning an organization cleanup event next Saturday. Would you be interested in volunteering?",
      timestamp: "10:35 AM",
      isSent: false,
      reactions: [],
    },
    {
      id: "4",
      sender: "You",
      avatar: michaelChen,
      content: "That sounds perfect! Count me in. What time should I be there?",
      timestamp: "10:37 AM",
      isSent: true,
      reactions: [{ emoji: "🎉", count: 1 }],
    },
    {
      id: "5",
      sender: "Sarah Johnson",
      avatar: sarahJohnson,
      content: "Awesome! We start at 9 AM at the organization center. I'll send you the full details.",
      timestamp: "10:40 AM",
      isSent: false,
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
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={() => navigate("/messages")}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <Avatar className="h-10 w-10">
                <AvatarImage src={conversation.avatar} />
                <AvatarFallback>
                  {conversation.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-lg font-bold">{conversation.name}</h1>
                <p className="text-xs text-muted-foreground">
                  {isTyping ? "typing..." : conversation.status}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Phone className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Video className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4 max-w-4xl mx-auto">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.isSent ? "flex-row-reverse" : "flex-row"}`}
            >
              {!msg.isSent && (
                <Avatar className="h-10 w-10">
                  <AvatarImage src={msg.avatar} />
                  <AvatarFallback>
                    {msg.sender
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              )}
              <div className={`flex-1 max-w-md ${msg.isSent ? "items-end" : "items-start"} flex flex-col`}>
                {!msg.isSent && (
                  <span className="text-xs font-semibold mb-1 px-1">{msg.sender}</span>
                )}
                <Card className={msg.isSent ? "bg-primary text-primary-foreground" : "bg-card"}>
                  <CardContent className="p-3">
                    <p className="text-sm">{msg.content}</p>
                    <div className="flex items-center justify-between mt-2 gap-2">
                      <span className={`text-xs ${msg.isSent ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                        {msg.timestamp}
                      </span>
                      {msg.reactions.length > 0 && (
                        <div className="flex gap-1">
                          {msg.reactions.map((reaction, idx) => (
                            <span key={idx} className="text-xs">
                              {reaction.emoji} {reaction.count}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
              {msg.isSent && (
                <Avatar className="h-10 w-10">
                  <AvatarImage src={msg.avatar} />
                  <AvatarFallback>
                    {msg.sender
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={conversation.avatar} />
                <AvatarFallback>
                  {conversation.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <Card className="bg-muted">
                <CardContent className="p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0.1s" }} />
                    <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0.2s" }} />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </ScrollArea>

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
    </div>
  );
};

export default ConversationDetail;
