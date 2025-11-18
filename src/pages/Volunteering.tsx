import { ArrowLeft, Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Volunteering = () => {
  const navigate = useNavigate();

  const opportunities = [
    {
      id: 1,
      title: "Food Bank Assistant",
      organization: "City Food Bank",
      location: "Downtown",
      commitment: "4 hours/week",
      spots: 5,
      category: "Charity",
    },
    {
      id: 2,
      title: "Youth Mentor",
      organization: "After School Program",
      location: "East District",
      commitment: "2 hours/week",
      spots: 3,
      category: "Education",
    },
    {
      id: 3,
      title: "Park Maintenance",
      organization: "Parks Department",
      location: "Central Park",
      commitment: "Weekly",
      spots: 10,
      category: "Environment",
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
              <h1 className="text-lg font-bold text-primary md:text-xl">Volunteering</h1>
              <p className="text-xs text-muted-foreground">Find opportunities to help</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((opportunity) => (
            <Card 
              key={opportunity.id}
              className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1"
              onClick={() => navigate(`/volunteering/${opportunity.id}`)}
            >
              <CardHeader>
                <div className="mb-2">
                  <Badge variant="secondary">{opportunity.category}</Badge>
                </div>
                <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                <CardDescription>{opportunity.organization}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{opportunity.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{opportunity.commitment}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <Users className="h-4 w-4" />
                  <span>{opportunity.spots} spots available</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Volunteering;
