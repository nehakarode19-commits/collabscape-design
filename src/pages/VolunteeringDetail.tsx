import { ArrowLeft, Clock, MapPin, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useParams } from "react-router-dom";

const VolunteeringDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate("/volunteering")}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-lg font-bold text-primary md:text-xl">Volunteer Opportunity</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-8">
        <div className="mb-6">
          <Badge variant="secondary" className="mb-3">Charity</Badge>
          <h1 className="text-3xl font-bold mb-2">Food Bank Assistant</h1>
          <p className="text-lg text-muted-foreground mb-6">City Food Bank</p>
          
          <div className="grid gap-4 md:grid-cols-2 mb-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-muted-foreground font-normal">Commitment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="font-medium">4 hours per week</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="font-medium">Flexible schedule</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-muted-foreground font-normal">Location & Spots</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-medium">Downtown</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="font-medium">5 spots available</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>About This Opportunity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Join our team at the City Food Bank and help fight hunger in our community. As a Food Bank 
                Assistant, you'll help sort donations, pack food boxes, and assist with distribution to 
                families in need.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This is a rewarding opportunity to directly impact the lives of your neighbors while working 
                alongside a dedicated team of volunteers and staff.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Sort and organize food donations</li>
                <li>Pack food boxes for distribution</li>
                <li>Assist clients during distribution hours</li>
                <li>Maintain clean and organized workspace</li>
                <li>Work collaboratively with other volunteers</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Able to lift up to 25 lbs</li>
                <li>Reliable and punctual</li>
                <li>Friendly and compassionate</li>
                <li>Background check required</li>
              </ul>
            </CardContent>
          </Card>

          <Button className="w-full" size="lg">Apply to Volunteer</Button>
        </div>
      </main>
    </div>
  );
};

export default VolunteeringDetail;
