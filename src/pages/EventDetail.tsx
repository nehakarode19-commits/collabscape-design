import { ArrowLeft, Calendar, MapPin, Users, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useParams } from "react-router-dom";

const EventDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={() => navigate("/events")}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-lg font-bold text-primary md:text-xl">Event Details</h1>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-8 max-w-4xl">
        <div className="mb-6">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4" />
          <Badge variant="secondary" className="mb-3">Volunteering</Badge>
          <h1 className="text-3xl font-bold mb-4">Community Cleanup</h1>
          
          <div className="grid gap-4 md:grid-cols-2 mb-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-muted-foreground font-normal">Date & Time</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="font-medium">March 15, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="font-medium">9:00 AM - 12:00 PM</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-muted-foreground font-normal">Location</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-medium">Central Park</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="font-medium">45 attending</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>About This Event</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Join us for our monthly community cleanup event! We'll be working together to keep our beautiful 
                Central Park clean and green. All supplies will be provided, just bring your enthusiasm and 
                community spirit. This is a great opportunity to meet fellow community members and make a real 
                difference in our neighborhood.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>What to Bring</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Comfortable clothing and closed-toe shoes</li>
                <li>Water bottle</li>
                <li>Sun protection (hat, sunscreen)</li>
                <li>Positive attitude!</li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex gap-3">
            <Button className="flex-1">Register for Event</Button>
            <Button variant="outline">Add to Calendar</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventDetail;
