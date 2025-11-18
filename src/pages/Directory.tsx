import { ArrowLeft, Search, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Directory = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const members = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Chapter Lead",
      location: "Downtown District",
      email: "sarah.j@email.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      skills: ["Leadership", "Community"],
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Community Member",
      location: "North Valley",
      email: "michael.c@email.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      skills: ["Education", "Volunteering"],
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Volunteer Coordinator",
      location: "East District",
      email: "emily.r@email.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      skills: ["Coordination", "Events"],
    },
    {
      id: 4,
      name: "David Kim",
      role: "Event Organizer",
      location: "Downtown District",
      email: "david.k@email.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      skills: ["Planning", "Logistics"],
    },
    {
      id: 5,
      name: "Lisa Anderson",
      role: "Community Member",
      location: "West Side",
      email: "lisa.a@email.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      skills: ["Fundraising", "Marketing"],
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Donation Manager",
      location: "South District",
      email: "james.w@email.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      skills: ["Finance", "Outreach"],
    },
    {
      id: 7,
      name: "Maria Garcia",
      role: "Communications Lead",
      location: "Central Area",
      email: "maria.g@email.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      skills: ["Social Media", "PR"],
    },
    {
      id: 8,
      name: "Robert Taylor",
      role: "Technology Lead",
      location: "Tech District",
      email: "robert.t@email.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
      skills: ["IT", "Development"],
    },
    {
      id: 9,
      name: "Jennifer Lee",
      role: "Youth Program Director",
      location: "Education Zone",
      email: "jennifer.l@email.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer",
      skills: ["Youth Services", "Education"],
    },
    {
      id: 10,
      name: "Christopher Brown",
      role: "Senior Advisor",
      location: "Historic District",
      email: "chris.b@email.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Christopher",
      skills: ["Strategy", "Mentoring"],
    },
    {
      id: 11,
      name: "Amanda White",
      role: "Sponsorship Lead",
      location: "Business District",
      email: "amanda.w@email.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amanda",
      skills: ["Partnerships", "Business"],
    },
    {
      id: 12,
      name: "Daniel Martinez",
      role: "Community Member",
      location: "Riverside",
      email: "daniel.m@email.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel",
      skills: ["Art", "Culture"],
    },
  ];

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3 mb-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-lg font-bold text-primary md:text-xl">Member Directory</h1>
              <p className="text-xs text-muted-foreground">{filteredMembers.length} members</p>
            </div>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search members..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-8">
        <Card>
          <CardContent className="p-0">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">Member</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Skills</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMembers.map((member) => (
                    <TableRow key={member.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={member.avatar} alt={member.name} />
                            <AvatarFallback className="bg-primary/10 text-primary">
                              {getInitials(member.name)}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{member.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{member.role}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{member.location}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Mail className="h-4 w-4" />
                          <span className="text-sm">{member.email}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {member.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button 
                          size="sm" 
                          onClick={() => navigate(`/messages`)}
                        >
                          <Mail className="h-4 w-4 mr-2" />
                          Message
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {filteredMembers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No members found matching your search.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Directory;
