import { Calendar, MapPin, Users, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate, useParams } from "react-router-dom";
import event3 from "@/assets/event-3.jpg";

const EventDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Back Button */}
      <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate("/events")}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-lg font-bold text-primary">Event Details</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img 
          src={event3} 
          alt="Community Cleanup Day"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
      </div>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Badge className="mb-3 bg-primary text-primary-foreground">Volunteering</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Community Cleanup Day</h1>
              <p className="text-muted-foreground leading-relaxed">
                Join us for a day of community service as we work together to clean and beautify Central Park. We'll 
                provide all necessary supplies including gloves, bags, and refreshments. This is a great opportunity to 
                meet your neighbors and make a positive impact on our community.
              </p>
            </div>

            {/* Event Details Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Event Details</h2>
              <p className="text-muted-foreground leading-relaxed">
                We're organizing a comprehensive cleanup of Central Park to maintain the beauty of our shared spaces. This event 
                is perfect for families, individuals, and groups looking to give back to the community.
              </p>
              
              <div className="space-y-3">
                <p className="font-semibold text-foreground">What to bring:</p>
                <ul className="space-y-1 text-muted-foreground ml-4">
                  <li>• Comfortable clothing and closed-toe shoes</li>
                  <li>• Water bottle</li>
                  <li>• Sunscreen and hat</li>
                  <li>• Your enthusiasm!</li>
                </ul>
              </div>

              <div className="space-y-3">
                <p className="font-semibold text-foreground">We'll provide:</p>
                <ul className="space-y-1 text-muted-foreground ml-4">
                  <li>• Gloves and cleanup tools</li>
                  <li>• Trash bags</li>
                  <li>• Light refreshments</li>
                  <li>• Volunteer t-shirt (while supplies last)</li>
                </ul>
              </div>

              <p className="text-sm text-muted-foreground italic">
                All ages are welcome! Children under 12 must be accompanied by an adult.
              </p>
            </div>

            {/* Organizer Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Organizer</h2>
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 bg-primary text-primary-foreground">
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Community Organizer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Date</p>
                      <p className="text-sm text-muted-foreground">March 15, 2024</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Time</p>
                      <p className="text-sm text-muted-foreground">9:00 AM - 12:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Location</p>
                      <p className="text-sm text-muted-foreground">Central Park - Main Entrance</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Attendees</p>
                      <p className="text-sm text-muted-foreground">45 / 100 registered</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t">
                  <Button className="w-full" size="lg">Register for Event</Button>
                  <Button variant="outline" className="w-full">Add to Calendar</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventDetail;
