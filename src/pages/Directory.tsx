import { ArrowLeft, Search, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import sarahJohnson from "@/assets/members/sarah-johnson.jpg";
import michaelChen from "@/assets/members/michael-chen.jpg";
import emilyRodriguez from "@/assets/members/emily-rodriguez.jpg";
import davidKim from "@/assets/members/david-kim.jpg";
import lisaAnderson from "@/assets/members/lisa-anderson.jpg";
import jamesWilson from "@/assets/members/james-wilson.jpg";
import mariaGarcia from "@/assets/members/maria-garcia.jpg";
import robertTaylor from "@/assets/members/robert-taylor.jpg";
import jenniferLee from "@/assets/members/jennifer-lee.jpg";
import christopherBrown from "@/assets/members/christopher-brown.jpg";
import amandaWhite from "@/assets/members/amanda-white.jpg";
import danielMartinez from "@/assets/members/daniel-martinez.jpg";

const Directory = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>(["Administration"]);
  const [selectedSeniority, setSelectedSeniority] = useState<string>("");
  const [nearbyOnly, setNearbyOnly] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string>("any");

  const members = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "City Manager",
      location: "San Francisco, CA",
      email: "sarah.j@sf.gov",
      avatar: sarahJohnson,
      department: "Administration",
      seniority: "City Managers",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Fire Chief",
      location: "Oakland, CA",
      email: "michael.c@oakland.gov",
      avatar: michaelChen,
      department: "Public Safety",
      seniority: "Department Heads",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "IT Director",
      location: "Berkeley, CA",
      email: "emily.r@berkeley.gov",
      avatar: emilyRodriguez,
      department: "IT / Cyber",
      seniority: "Department Heads",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Public Works Manager",
      location: "San Jose, CA",
      email: "david.k@sanjose.gov",
      avatar: davidKim,
      department: "Public Works",
      seniority: "Department Heads",
    },
    {
      id: 5,
      name: "Lisa Anderson",
      role: "Finance Director",
      location: "Palo Alto, CA",
      email: "lisa.a@paloalto.gov",
      avatar: lisaAnderson,
      department: "Finance / Grant",
      seniority: "Department Heads",
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Administrative Coordinator",
      location: "Fremont, CA",
      email: "james.w@fremont.gov",
      avatar: jamesWilson,
      department: "Administration",
      seniority: "Staff",
    },
    {
      id: 7,
      name: "Maria Garcia",
      role: "Police Chief",
      location: "Sacramento, CA",
      email: "maria.g@sacramento.gov",
      avatar: mariaGarcia,
      department: "Public Safety",
      seniority: "Department Heads",
    },
    {
      id: 8,
      name: "Robert Taylor",
      role: "City Manager",
      location: "San Diego, CA",
      email: "robert.t@sandiego.gov",
      avatar: robertTaylor,
      department: "Administration",
      seniority: "City Managers",
    },
    {
      id: 9,
      name: "Jennifer Lee",
      role: "IT Security Specialist",
      location: "San Francisco, CA",
      email: "jennifer.l@sf.gov",
      avatar: jenniferLee,
      department: "IT / Cyber",
      seniority: "Staff",
    },
    {
      id: 10,
      name: "Christopher Brown",
      role: "Grant Manager",
      location: "Oakland, CA",
      email: "chris.b@oakland.gov",
      avatar: christopherBrown,
      department: "Finance / Grant",
      seniority: "Staff",
    },
    {
      id: 11,
      name: "Amanda White",
      role: "Public Works Engineer",
      location: "Berkeley, CA",
      email: "amanda.w@berkeley.gov",
      avatar: amandaWhite,
      department: "Public Works",
      seniority: "Staff",
    },
    {
      id: 12,
      name: "Daniel Martinez",
      role: "City Manager",
      location: "Los Angeles, CA",
      email: "daniel.m@lacity.org",
      avatar: danielMartinez,
      department: "Administration",
      seniority: "City Managers",
    },
  ];

  const toggleDepartment = (dept: string) => {
    setSelectedDepartments(prev =>
      prev.includes(dept) ? prev.filter(d => d !== dept) : [...prev, dept]
    );
  };

  const filteredMembers = members.filter(member => {
    const matchesSearch = 
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.department.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDepartment = 
      selectedDepartments.length === 0 || 
      selectedDepartments.includes(member.department);
    
    const matchesSeniority = 
      !selectedSeniority || 
      selectedSeniority === member.seniority;

    const matchesLocation = 
      selectedLocation === "any" ||
      (selectedLocation === "nearby" && (
        member.location.includes("San Francisco") || 
        member.location.includes("Oakland") ||
        member.location.includes("Berkeley")
      )) ||
      (selectedLocation !== "any" && selectedLocation !== "nearby" && member.location.includes(selectedLocation));

    const matchesNearby = 
      !nearbyOnly || 
      member.location.includes("San Francisco") || 
      member.location.includes("Oakland") ||
      member.location.includes("Berkeley");

    return matchesSearch && matchesDepartment && matchesSeniority && matchesLocation && matchesNearby;
  });

  const getFilterSummary = () => {
    if (selectedDepartments.length === 1) {
      return `"${selectedDepartments[0]}"`;
    }
    return "all departments";
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Member Directory</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Showing {filteredMembers.length} verified officials matching {getFilterSummary()}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search by name, job title, or skill..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-11"
              />
            </div>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-[180px] h-11">
                <SelectValue placeholder="Any Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Location</SelectItem>
                <SelectItem value="nearby">Nearby (&lt; 50mi)</SelectItem>
                <SelectItem value="San Francisco">San Francisco</SelectItem>
                <SelectItem value="Oakland">Oakland</SelectItem>
                <SelectItem value="Berkeley">Berkeley</SelectItem>
                <SelectItem value="San Jose">San Jose</SelectItem>
                <SelectItem value="Sacramento">Sacramento</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full md:w-64 space-y-4">
            {/* Quick Find */}
            <Card>
              <CardContent className="p-4 space-y-4">
                <h3 className="font-semibold text-sm text-foreground">Quick Find</h3>

                <div className="flex items-center justify-between py-2">
                  <Label htmlFor="nearby-toggle" className="text-sm flex items-center gap-2 cursor-pointer">
                    <MapPin className="h-4 w-4 text-primary" />
                    Nearby Only
                  </Label>
                  <Switch
                    id="nearby-toggle"
                    checked={nearbyOnly}
                    onCheckedChange={setNearbyOnly}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Departments */}
            <Card>
              <CardContent className="p-4 space-y-3">
                <h3 className="font-semibold text-sm text-foreground">Departments</h3>
                
                {["Administration", "Public Safety", "Public Works", "Finance / Grant", "IT / Cyber"].map((dept) => (
                  <div key={dept} className="flex items-center space-x-2">
                    <Checkbox
                      id={dept}
                      checked={selectedDepartments.includes(dept)}
                      onCheckedChange={() => toggleDepartment(dept)}
                    />
                    <Label
                      htmlFor={dept}
                      className="text-sm cursor-pointer font-normal"
                    >
                      {dept}
                    </Label>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Seniority */}
            <Card>
              <CardContent className="p-4 space-y-3">
                <h3 className="font-semibold text-sm text-foreground">Seniority</h3>
                
                <RadioGroup value={selectedSeniority} onValueChange={setSelectedSeniority}>
                  {["Department Heads", "City Managers", "Staff"].map((level) => (
                    <div key={level} className="flex items-center space-x-2">
                      <RadioGroupItem value={level} id={level} />
                      <Label
                        htmlFor={level}
                        className="text-sm cursor-pointer font-normal"
                      >
                        {level}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                
                {selectedSeniority && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setSelectedSeniority("")}
                    className="w-full text-xs mt-2"
                  >
                    Clear Selection
                  </Button>
                )}
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredMembers.map((member) => (
                <Card key={member.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div>
                        <h3 className="font-semibold text-foreground">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{member.location}</span>
                      </div>

                      <p className="text-xs text-muted-foreground">{member.email}</p>

                      <div className="flex flex-wrap gap-2 justify-center">
                        <Badge variant="secondary" className="text-xs">
                          {member.department}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {member.seniority}
                        </Badge>
                      </div>

                      <Button 
                        className="w-full" 
                        size="sm"
                        onClick={() => navigate(`/profile/${member.id}`)}
                      >
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredMembers.length === 0 && (
              <Card>
                <CardContent className="p-12 text-center">
                  <p className="text-muted-foreground">No members found matching your criteria.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Directory;
