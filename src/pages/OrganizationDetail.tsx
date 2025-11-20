import { ArrowLeft, MapPin, Users, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useParams } from "react-router-dom";

const OrganizationDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate("/organizations")}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-lg font-bold text-primary md:text-xl">Downtown Organization</h1>
              <p className="text-xs text-muted-foreground">Downtown District</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-8 max-w-4xl">
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl mb-2">Downtown Organization</CardTitle>
                <CardDescription className="flex items-center gap-2 mb-4">
                  <MapPin className="h-4 w-4" />
                  Downtown District
                </CardDescription>
              </div>
              <Badge variant="secondary" className="text-sm">Active</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">About</h3>
              <p className="text-muted-foreground">
                Active community focused on urban development and local businesses. We organize monthly meetups,
                networking events, and community service projects to make our downtown area thrive.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Members</p>
                  <p className="text-xl font-bold">145</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <Calendar className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Events</p>
                  <p className="text-xl font-bold">12</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Active</p>
                  <p className="text-xl font-bold">98%</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button className="flex-1">Join Organization</Button>
              <Button variant="outline">Contact Lead</Button>
            </div>
          </CardContent>
        </Card>

        <h3 className="font-semibold mb-4">Upcoming Events</h3>
        <div className="space-y-3">
          <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => navigate("/events/1")}>
            <CardHeader>
              <CardTitle className="text-base">Community Cleanup</CardTitle>
              <CardDescription className="flex items-center gap-2 mt-2">
                <Calendar className="h-4 w-4" />
                March 15, 2024 at 9:00 AM
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => navigate("/events/2")}>
            <CardHeader>
              <CardTitle className="text-base">Business Networking Mixer</CardTitle>
              <CardDescription className="flex items-center gap-2 mt-2">
                <Calendar className="h-4 w-4" />
                March 22, 2024 at 6:00 PM
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default OrganizationDetail;
