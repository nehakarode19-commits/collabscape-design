import { ArrowLeft, Award, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Sponsorship = () => {
  const navigate = useNavigate();

  const packages = [
    {
      id: 1,
      name: "Bronze Sponsor",
      price: "$1,000",
      period: "per year",
      benefits: [
        "Logo on website",
        "Social media mentions",
        "Event recognition",
        "Quarterly newsletter feature",
      ],
    },
    {
      id: 2,
      name: "Silver Sponsor",
      price: "$5,000",
      period: "per year",
      benefits: [
        "All Bronze benefits",
        "Logo on event materials",
        "Speaking opportunity at events",
        "Dedicated social media post",
        "VIP event access",
      ],
      featured: true,
    },
    {
      id: 3,
      name: "Gold Sponsor",
      price: "$10,000",
      period: "per year",
      benefits: [
        "All Silver benefits",
        "Premier logo placement",
        "Exclusive networking events",
        "Board meeting attendance",
        "Custom partnership opportunities",
      ],
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
              <h1 className="text-lg font-bold text-primary md:text-xl">Sponsorship</h1>
              <p className="text-xs text-muted-foreground">Partner with us</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-8">
        <div className="text-center mb-8 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Become a Sponsor</h2>
          <p className="text-muted-foreground">
            Partner with City Collab to create lasting impact in our community. Choose the sponsorship 
            package that aligns with your organization's goals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id}
              className={`cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 ${
                pkg.featured ? "border-primary shadow-md" : ""
              }`}
              onClick={() => navigate(`/sponsorship/${pkg.id}`)}
            >
              <CardHeader>
                {pkg.featured && (
                  <Badge className="w-fit mb-2">Most Popular</Badge>
                )}
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-5 w-5 text-primary" />
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                </div>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-muted-foreground ml-2">{pkg.period}</span>
                </div>
                <CardDescription>Everything you need to make an impact</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {pkg.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Sponsorship;
