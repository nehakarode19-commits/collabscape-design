import { ArrowLeft, Heart, Share2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const DonationDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [amount, setAmount] = useState("50");

  const campaign = {
    title: "Community Garden Project",
    description: "Help us build a sustainable community garden for local families",
    raised: 12500,
    goal: 20000,
    donors: 87,
  };

  const progress = (campaign.raised / campaign.goal) * 100;

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={() => navigate("/donations")}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-lg font-bold text-primary md:text-xl">Campaign Details</h1>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-8 max-w-4xl">
        <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-6" />
        
        <h1 className="text-3xl font-bold mb-4">{campaign.title}</h1>
        
        <Card className="mb-6">
          <CardContent className="pt-6 space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-2xl font-bold text-primary">${campaign.raised.toLocaleString()}</span>
                <span className="text-muted-foreground">raised of ${campaign.goal.toLocaleString()} goal</span>
              </div>
              <Progress value={progress} className="h-3" />
            </div>
            <div className="flex items-center justify-between text-sm border-t pt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Heart className="h-4 w-4" />
                <span>{campaign.donors} donors</span>
              </div>
              <div className="flex items-center gap-1 text-primary font-medium">
                <TrendingUp className="h-4 w-4" />
                <span>{Math.round(progress)}% funded</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>About This Campaign</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We're excited to announce our Community Garden Project! This initiative will create a beautiful, 
              sustainable garden space where local families can grow fresh produce, learn about organic farming, 
              and connect with their neighbors.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Your donation will help us purchase seeds, tools, soil, and build raised garden beds. Together, 
              we can create a green oasis that brings our community closer while promoting healthy, sustainable 
              living.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Make a Donation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-4 gap-2">
              {["25", "50", "100", "250"].map((preset) => (
                <Button
                  key={preset}
                  variant={amount === preset ? "default" : "outline"}
                  onClick={() => setAmount(preset)}
                  className="w-full"
                >
                  ${preset}
                </Button>
              ))}
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Custom Amount</label>
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="text-lg"
              />
            </div>
            <Button className="w-full" size="lg">
              Donate ${amount}
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DonationDetail;
