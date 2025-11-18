import { ArrowLeft, Heart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import donation1 from "@/assets/donation-1.jpg";
import donation2 from "@/assets/donation-2.jpg";
import donation3 from "@/assets/donation-3.jpg";

const Donations = () => {
  const navigate = useNavigate();

  const campaigns = [
    {
      id: 1,
      title: "Community Garden Project",
      description: "Help us build a sustainable community garden for local families",
      raised: 12500,
      goal: 20000,
      donors: 87,
      image: donation1,
    },
    {
      id: 2,
      title: "Youth Education Fund",
      description: "Support after-school programs and tutoring for local students",
      raised: 8300,
      goal: 15000,
      donors: 52,
      image: donation2,
    },
    {
      id: 3,
      title: "Senior Care Initiative",
      description: "Provide meals and companionship for elderly community members",
      raised: 15700,
      goal: 18000,
      donors: 103,
      image: donation3,
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
              <h1 className="text-lg font-bold text-primary md:text-xl">Donations</h1>
              <p className="text-xs text-muted-foreground">Support community causes</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((campaign) => {
            const progress = (campaign.raised / campaign.goal) * 100;
            return (
              <Card 
                key={campaign.id}
                className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 overflow-hidden"
                onClick={() => navigate(`/donations/${campaign.id}`)}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={campaign.image} 
                    alt={campaign.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{campaign.title}</CardTitle>
                  <CardDescription>{campaign.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="font-bold text-primary">${campaign.raised.toLocaleString()}</span>
                      <span className="text-muted-foreground">of ${campaign.goal.toLocaleString()}</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Heart className="h-4 w-4" />
                      <span>{campaign.donors} donors</span>
                    </div>
                    <div className="flex items-center gap-1 text-primary font-medium">
                      <TrendingUp className="h-4 w-4" />
                      <span>{Math.round(progress)}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Donations;
