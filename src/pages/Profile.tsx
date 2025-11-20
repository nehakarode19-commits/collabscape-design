import { ArrowLeft, Mail, MapPin, Calendar, Edit2, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-lg font-bold text-primary md:text-xl">Profile</h1>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-8 max-w-4xl">
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-3xl shrink-0">
                JD
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-1">John Doe</h2>
                <p className="text-muted-foreground mb-3">Community Member</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Volunteering</Badge>
                  <Badge variant="secondary">Events</Badge>
                  <Badge variant="secondary">Donations</Badge>
                </div>
                <Button>
                  <Edit2 className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>john.doe@email.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Downtown District</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>Member since Jan 2024</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-3 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground font-normal">Events Attended</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">12</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground font-normal">Volunteer Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">45</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground font-normal">Donations Made</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">$250</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 pb-3 border-b">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 shrink-0">
                <Calendar className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-medium">Attended Community Cleanup</p>
                <p className="text-sm text-muted-foreground">2 days ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3 pb-3 border-b">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10 shrink-0">
                <Mail className="h-4 w-4 text-secondary" />
              </div>
              <div>
                <p className="font-medium">Donated to Youth Education Fund</p>
                <p className="text-sm text-muted-foreground">1 week ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 shrink-0">
                <Calendar className="h-4 w-4 text-accent" />
              </div>
              <div>
                <p className="font-medium">Joined Downtown Organization</p>
                <p className="text-sm text-muted-foreground">2 weeks ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Profile;
