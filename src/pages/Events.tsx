import { ArrowLeft, Calendar, MapPin, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";

const Events = () => {
  const navigate = useNavigate();

  const upcomingEvents = [
    {
      id: 1,
      title: "Organization Cleanup",
      date: "March 15, 2024",
      time: "9:00 AM",
      location: "Central Park",
      attendees: 45,
      category: "Volunteering",
      image: event3,
    },
    {
      id: 2,
      title: "Fundraising Gala",
      date: "March 20, 2024",
      time: "6:00 PM",
      location: "City Hall",
      attendees: 120,
      category: "Fundraising",
      image: event1,
    },
    {
      id: 3,
      title: "Tech Workshop",
      date: "March 25, 2024",
      time: "2:00 PM",
      location: "Innovation Center",
      attendees: 30,
      category: "Education",
      image: event2,
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Winter Food Drive",
      date: "February 10, 2024",
      time: "10:00 AM",
      location: "Organization Center",
      attendees: 67,
      category: "Charity",
      image: event2,
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
              <h1 className="text-lg font-bold text-primary md:text-xl">Events</h1>
              <p className="text-xs text-muted-foreground">Discover organization events</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-8">
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full mx-auto grid-cols-2 mb-6">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <Card 
                  key={event.id}
                  className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 overflow-hidden"
                  onClick={() => navigate(`/events/${event.id}`)}
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="mb-2">
                      <Badge variant="secondary">{event.category}</Badge>
                    </div>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <CardDescription className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        <span>{event.time}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event) => (
                <Card 
                  key={event.id}
                  className="opacity-75 cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 overflow-hidden"
                  onClick={() => navigate(`/events/${event.id}`)}
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="mb-2">
                      <Badge variant="outline">{event.category}</Badge>
                    </div>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <CardDescription className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        <span>{event.date}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} attended</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Events;
