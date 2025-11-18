import { ArrowLeft, Search, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Directory = () => {
  const navigate = useNavigate();

  const members = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Chapter Lead",
      location: "Downtown",
      interests: ["Events", "Volunteering"],
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Community Member",
      location: "Northside",
      interests: ["Donations", "Education"],
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Volunteer Coordinator",
      location: "Eastside",
      interests: ["Volunteering", "Environment"],
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Event Organizer",
      location: "Downtown",
      interests: ["Events", "Networking"],
    },
    {
      id: 5,
      name: "Lisa Anderson",
      role: "Community Member",
      location: "Westside",
      interests: ["Charity", "Youth Programs"],
    },
    {
      id: 6,
      name: "David Martinez",
      role: "Sponsorship Manager",
      location: "Central",
      interests: ["Sponsorship", "Business"],
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
              <h1 className="text-lg font-bold text-primary md:text-xl">Directory</h1>
              <p className="text-xs text-muted-foreground">Connect with members</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-8">
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Search members..." 
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <Card 
              key={member.id}
              className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-medium text-lg shrink-0">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{member.location}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {member.interests.map((interest, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {interest}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <Mail className="h-4 w-4 mr-2" />
                  Message
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Directory;
