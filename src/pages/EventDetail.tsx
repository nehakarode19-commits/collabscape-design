import { Calendar, MapPin, Users, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
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
          alt="Organization Cleanup Day"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Central Park, 830 5th Ave, New York, NY 10065, USA</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">5th July - 7th July, 2024</p>
                    </div>
                  </div>

                  <div className="text-center py-4 border-t border-b">
                    <p className="text-4xl font-bold text-primary">160</p>
                    <p className="text-sm text-muted-foreground">Seats Available</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">ABOUT US</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    New York City is not just a bustling metropolis; it&apos;s also home to a vibrant community of innovators, civic leaders, and changemakers dedicated to building a better future for all.
                  </p>
                  <Button className="w-full" variant="secondary">Interested</Button>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-3">Location</h3>
                  <div className="w-full h-40 bg-muted rounded-lg overflow-hidden relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6174427692567!2d-73.96577868459395!3d40.76438997932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258ebe8836a89%3A0xd4f06a6b7a0b6e0e!2sCentral%20Park!5e0!3m2!1sen!2sus!4v1234567890123"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Event Location"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <p className="text-sm font-semibold text-muted-foreground uppercase mb-2">EVENT INFORMATION</p>
              
              <Tabs defaultValue="agenda" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="agenda">Agenda</TabsTrigger>
                  <TabsTrigger value="donation">Donation</TabsTrigger>
                  <TabsTrigger value="sponsorship">Sponsorship</TabsTrigger>
                  <TabsTrigger value="volunteering">Volunteering</TabsTrigger>
                </TabsList>

                <TabsContent value="agenda" className="space-y-4">
                  {/* Agenda Items */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-3">Opening Remarks</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>20th May, 2024</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>9:00AM - 11:00AM</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">• Main Hall  • Mayur Shah</p>
                      <p className="text-muted-foreground">
                        Qorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Vulputate Libero.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-3">Networking Lunch</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>20th May, 2024</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>9:00AM - 11:00AM</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">• Main Hall  • Mayur Shah</p>
                      <p className="text-muted-foreground">
                        Qorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Vulputate Libero.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-3">Collaborative Lunch Gathering</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>20th May, 2024</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>9:00AM - 11:00AM</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">• Main Hall  • Mayur Shah</p>
                      <p className="text-muted-foreground">
                        Qorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Vulputate Libero.
                      </p>
                    </CardContent>
                  </Card>

                  <div className="flex items-center gap-3 pt-4">
                    <Button className="flex-1" size="lg" onClick={() => navigate(`/events/${id}/tickets`)}>Buy Ticket</Button>
                    <Button size="icon" variant="outline">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="donation" className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-foreground">Pinjrapole</h3>
                          <p className="text-sm text-muted-foreground">Animal Welfare</p>
                        </div>
                        <Button>Donate Now</Button>
                      </div>
                      <p className="text-lg font-bold text-primary mb-2">Donation needed $20,000</p>
                      <p className="text-sm font-semibold mb-2" style={{ color: 'hsl(var(--primary))' }}>10,000/20,000 Sold</p>
                      <Progress value={50} className="mb-3" />
                      <p className="text-muted-foreground">
                        Qorem Ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-foreground">Water Bottles</h3>
                          <p className="text-sm text-muted-foreground">Item Donation</p>
                        </div>
                        <Button>Donate Now</Button>
                      </div>
                      <p className="text-lg font-bold text-primary mb-2">Donation needed $20,000</p>
                      <p className="text-sm font-semibold mb-2" style={{ color: 'hsl(var(--primary))' }}>10,000/20,000 Sold</p>
                      <Progress value={50} className="mb-3" />
                      <p className="text-muted-foreground">
                        Qorem Ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-foreground">Pinjrapole</h3>
                          <p className="text-sm text-muted-foreground">Animal Welfare</p>
                        </div>
                        <Button>Donate Now</Button>
                      </div>
                      <p className="text-lg font-bold text-primary mb-2">Donation needed $20,000</p>
                      <p className="text-sm font-semibold mb-2" style={{ color: 'hsl(var(--primary))' }}>10,000/20,000 Sold</p>
                      <Progress value={50} className="mb-3" />
                      <p className="text-muted-foreground">
                        Qorem Ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="sponsorship" className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-foreground">Meal Sponsorship</h3>
                          <p className="text-lg font-bold text-primary">$5,00,000</p>
                        </div>
                        <Button>Sponsor</Button>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>20th May, 2024</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>12:30PM - 1:30PM</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        Qorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Vulputate Libero.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-foreground">Media Sponsorship</h3>
                          <p className="text-lg font-bold text-primary">$8,00,000</p>
                        </div>
                        <Button>Sponsor</Button>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>20th May, 2024</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>12:30PM - 1:30PM</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        Qorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Vulputate Libero.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="volunteering" className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-bold text-foreground">Plating Food</h3>
                        <Button>Participate</Button>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>20th May,2025 To 22th May,2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>9:00AM - 11:00AM</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        Qorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Vulputate Libero.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-bold text-foreground">Opening Remarks</h3>
                        <Button>Participate</Button>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>20th May,2025 To 22th May,2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>9:00AM - 11:00AM</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        Qorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Vulputate Libero.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-bold text-foreground">Anchors</h3>
                        <Button>Participate</Button>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>20th May,2025 To 22th May,2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>9:00AM - 11:00AM</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        Qorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Vulputate Libero.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventDetail;
