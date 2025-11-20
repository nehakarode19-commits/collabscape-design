import { ArrowLeft, Award, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate, useParams } from "react-router-dom";

const SponsorshipDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const benefits = [
    "Logo on website",
    "Social media mentions",
    "Event recognition",
    "Quarterly newsletter feature",
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate("/sponsorship")}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-lg font-bold text-primary md:text-xl">Sponsorship Details</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">Bronze Sponsor</CardTitle>
                </div>
                <div>
                  <span className="text-4xl font-bold text-primary">$1,000</span>
                  <span className="text-muted-foreground ml-2">per year</span>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-3">Package Benefits</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>About Sponsorship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Your sponsorship helps us continue our mission of building stronger communities. 
                  As a Bronze Sponsor, you'll receive recognition across our platforms while supporting 
                  meaningful community initiatives.
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Apply for Sponsorship</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Organization Name</label>
                  <Input placeholder="Your organization name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Contact Name</label>
                  <Input placeholder="Your full name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="contact@organization.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone</label>
                  <Input type="tel" placeholder="(123) 456-7890" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us why you'd like to sponsor City Collab..."
                    rows={4}
                  />
                </div>
                <Button className="w-full" size="lg">Submit Application</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SponsorshipDetail;
