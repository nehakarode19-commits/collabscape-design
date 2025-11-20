import { ArrowLeft, Bell, Check, MessageSquare, Calendar, Heart, Users, HandHeart, Award, CheckCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import sarahJohnson from "@/assets/members/sarah-johnson.jpg";
import michaelChen from "@/assets/members/michael-chen.jpg";
import emilyRodriguez from "@/assets/members/emily-rodriguez.jpg";

const Notifications = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([
    {
      id: "1",
      type: "message",
      icon: MessageSquare,
      title: "New message from Sarah Johnson",
      description: "Hey! I saw your profile and wanted to reach out about...",
      time: "5 min ago",
      read: false,
      avatar: sarahJohnson,
      action: () => navigate("/conversations/1"),
    },
    {
      id: "2",
      type: "event",
      icon: Calendar,
      title: "Organization Cleanup Event Tomorrow",
      description: "Don't forget! The event starts at 9 AM at the organization center.",
      time: "2 hours ago",
      read: false,
      action: () => navigate("/events/1"),
    },
    {
      id: "3",
      type: "volunteer",
      icon: HandHeart,
      title: "New Volunteer Opportunity",
      description: "Help needed for the upcoming food drive this weekend.",
      time: "5 hours ago",
      read: true,
      action: () => navigate("/volunteering"),
    },
    {
      id: "4",
      type: "message",
      icon: MessageSquare,
      title: "Michael Chen mentioned you",
      description: "Thanks for your help with organizing the event!",
      time: "1 day ago",
      read: true,
      avatar: michaelChen,
      action: () => navigate("/channels/1"),
    },
    {
      id: "5",
      type: "donation",
      icon: Heart,
      title: "Donation Goal Reached!",
      description: "The organization fundraiser has reached its goal of $5,000.",
      time: "1 day ago",
      read: true,
      action: () => navigate("/donations/1"),
    },
    {
      id: "6",
      type: "member",
      icon: Users,
      title: "Emily Rodriguez joined your organization",
      description: "Welcome the new member to Downtown District organization.",
      time: "2 days ago",
      read: true,
      avatar: emilyRodriguez,
      action: () => navigate("/directory"),
    },
    {
      id: "7",
      type: "achievement",
      icon: Award,
      title: "Achievement Unlocked!",
      description: "You've volunteered for 10 events this year. Great work!",
      time: "3 days ago",
      read: true,
      action: () => navigate("/profile"),
    },
    {
      id: "8",
      type: "event",
      icon: Calendar,
      title: "Event Reminder",
      description: "Youth Program Meetup is happening this Friday at 6 PM.",
      time: "3 days ago",
      read: true,
      action: () => navigate("/events/2"),
    },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "message":
        return "text-blue-500";
      case "event":
        return "text-purple-500";
      case "volunteer":
        return "text-green-500";
      case "donation":
        return "text-red-500";
      case "member":
        return "text-orange-500";
      case "achievement":
        return "text-yellow-500";
      default:
        return "text-primary";
    }
  };

  const unreadNotifications = notifications.filter(n => !n.read);
  const readNotifications = notifications.filter(n => n.read);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                <div>
                  <h1 className="text-lg font-bold text-primary md:text-xl">Notifications</h1>
                  <p className="text-xs text-muted-foreground">
                    {unreadCount > 0 ? `${unreadCount} unread` : "All caught up!"}
                  </p>
                </div>
              </div>
            </div>
            {unreadCount > 0 && (
              <Button 
                variant="outline" 
                size="sm"
                onClick={markAllAsRead}
              >
                <CheckCheck className="h-4 w-4 mr-2" />
                Mark all read
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-8">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="all">
              All
              {unreadCount > 0 && (
                <Badge variant="default" className="ml-2 h-5 min-w-5 px-1.5">
                  {unreadCount}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="unread">Unread</TabsTrigger>
            <TabsTrigger value="read">Read</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-2">
            {notifications.length === 0 ? (
              <div className="text-center py-12">
                <Bell className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No notifications yet</p>
              </div>
            ) : (
              notifications.map((notification) => (
                <Card
                  key={notification.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    !notification.read ? "border-primary/50 bg-primary/5" : ""
                  }`}
                  onClick={() => {
                    markAsRead(notification.id);
                    notification.action();
                  }}
                >
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      {notification.avatar ? (
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={notification.avatar} />
                          <AvatarFallback>
                            {notification.title.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                      ) : (
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-muted ${getNotificationColor(notification.type)}`}>
                          <notification.icon className="h-5 w-5" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className={`text-sm font-semibold ${!notification.read ? "text-foreground" : "text-muted-foreground"}`}>
                            {notification.title}
                          </h3>
                          {!notification.read && (
                            <div className="h-2 w-2 rounded-full bg-primary shrink-0 mt-1" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                          {notification.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{notification.time}</span>
                          {!notification.read && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 px-2 text-xs"
                              onClick={(e) => {
                                e.stopPropagation();
                                markAsRead(notification.id);
                              }}
                            >
                              <Check className="h-3 w-3 mr-1" />
                              Mark read
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          <TabsContent value="unread" className="space-y-2">
            {unreadNotifications.length === 0 ? (
              <div className="text-center py-12">
                <CheckCheck className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No unread notifications</p>
              </div>
            ) : (
              unreadNotifications.map((notification) => (
                <Card
                  key={notification.id}
                  className="cursor-pointer transition-all hover:shadow-md border-primary/50 bg-primary/5"
                  onClick={() => {
                    markAsRead(notification.id);
                    notification.action();
                  }}
                >
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      {notification.avatar ? (
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={notification.avatar} />
                          <AvatarFallback>
                            {notification.title.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                      ) : (
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-muted ${getNotificationColor(notification.type)}`}>
                          <notification.icon className="h-5 w-5" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="text-sm font-semibold text-foreground">
                            {notification.title}
                          </h3>
                          <div className="h-2 w-2 rounded-full bg-primary shrink-0 mt-1" />
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                          {notification.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{notification.time}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 px-2 text-xs"
                            onClick={(e) => {
                              e.stopPropagation();
                              markAsRead(notification.id);
                            }}
                          >
                            <Check className="h-3 w-3 mr-1" />
                            Mark read
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          <TabsContent value="read" className="space-y-2">
            {readNotifications.length === 0 ? (
              <div className="text-center py-12">
                <Bell className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No read notifications</p>
              </div>
            ) : (
              readNotifications.map((notification) => (
                <Card
                  key={notification.id}
                  className="cursor-pointer transition-all hover:shadow-md"
                  onClick={notification.action}
                >
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      {notification.avatar ? (
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={notification.avatar} />
                          <AvatarFallback>
                            {notification.title.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                      ) : (
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-muted ${getNotificationColor(notification.type)}`}>
                          <notification.icon className="h-5 w-5" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-muted-foreground mb-1">
                          {notification.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                          {notification.description}
                        </p>
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Notifications;
