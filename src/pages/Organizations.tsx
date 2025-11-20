import { ArrowLeft, MapPin, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Organizations = () => {
  const navigate = useNavigate();

  const organizations = [
    {
      id: 1,
      name: "Downtown Organization",
      location: "Downtown District",
      members: 145,
      nextEvent: "Mar 15, 2024",
      description: "Active community focused on urban development and local businesses",
    },
    {
      id: 2,
      name: "Northside Organization",
      location: "North Valley",
      members: 98,
      nextEvent: "Mar 18, 2024",
      description: "Dedicated to environmental initiatives and green spaces",
    },
    {
      id: 3,
      name: "Eastside Organization",
      location: "East District",
      members: 112,
      nextEvent: "Mar 20, 2024",
      description: "Focus on education and youth programs in the community",
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
              <h1 className="text-lg font-bold text-primary md:text-xl">Organizations</h1>
              <p className="text-xs text-muted-foreground">Connect with local organizations</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {organizations.map((organization) => (
            <Card 
              key={organization.id}
              className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1"
              onClick={() => navigate(`/organizations/${organization.id}`)}
            >
              <CardHeader>
                <div className="mb-2">
                  <Badge variant="secondary">{organization.location}</Badge>
                </div>
                <CardTitle className="text-xl">{organization.name}</CardTitle>
                <CardDescription>{organization.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{organization.members} members</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Next event: {organization.nextEvent}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Organizations;
