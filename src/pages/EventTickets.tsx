import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface TierBenefit {
  text: string;
}

interface Tier {
  id: string;
  name: string;
  type: "paid" | "free";
  price: number;
  currency: string;
  benefits: TierBenefit[];
  registered: number;
  capacity: number;
}

interface EventData {
  name: string;
  registrationStart: Date;
  registrationEnd: Date;
  tiers: Tier[];
}

const EventTickets = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock data - replace with actual API call
  const eventData: EventData = {
    name: "Tech Innovation Summit",
    registrationStart: new Date("2025-01-01"),
    registrationEnd: new Date("2025-12-31"),
    tiers: [
      {
        id: "vip",
        name: "VIP",
        type: "paid",
        price: 299,
        currency: "USD",
        registered: 150,
        capacity: 200,
        benefits: [
          { text: "Front row seating" },
          { text: "Exclusive networking session" },
          { text: "VIP lounge access" },
          { text: "Premium lunch & refreshments" },
          { text: "Event swag bag" },
          { text: "Certificate of attendance" },
        ],
      },
      {
        id: "general",
        name: "General",
        type: "paid",
        price: 149,
        currency: "USD",
        registered: 600,
        capacity: 600,
        benefits: [
          { text: "General admission seating" },
          { text: "Access to all sessions" },
          { text: "Lunch included" },
          { text: "Digital event materials" },
          { text: "Certificate of attendance" },
        ],
      },
      {
        id: "silver",
        name: "Silver Member",
        type: "free",
        price: 0,
        currency: "USD",
        registered: 180,
        capacity: 300,
        benefits: [
          { text: "General admission seating" },
          { text: "Access to main sessions" },
          { text: "Digital event materials" },
        ],
      },
    ],
  };

  const isRegistrationOpen = () => {
    const now = new Date();
    return now >= eventData.registrationStart && now <= eventData.registrationEnd;
  };

  const isTierAvailable = (tier: Tier) => {
    return tier.registered < tier.capacity && isRegistrationOpen();
  };

  const handlePayNow = (tier: Tier) => {
    if (!isTierAvailable(tier)) return;
    navigate(`/events/${id}/payment/${tier.id}`);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(`/events/${id}`)}
              className="shrink-0"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Select Your Ticket</h1>
              <p className="text-sm text-muted-foreground">Choose the tier that works best for you</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Event Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">{eventData.name}</CardTitle>
            <CardDescription>Event Registration</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Registration Opens</p>
                  <p className="text-sm text-muted-foreground">{formatDate(eventData.registrationStart)}</p>
                </div>
              </div>
              <Separator orientation="vertical" className="h-12" />
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Registration Closes</p>
                  <p className="text-sm text-muted-foreground">{formatDate(eventData.registrationEnd)}</p>
                </div>
              </div>
            </div>
            {!isRegistrationOpen() && (
              <div className="mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                <p className="text-sm text-destructive font-medium">
                  Registration is currently closed
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Tier Listing */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventData.tiers.map((tier) => {
            const available = isTierAvailable(tier);
            const soldOut = tier.registered >= tier.capacity;
            const slotsRemaining = tier.capacity - tier.registered;

            return (
              <Card
                key={tier.id}
                className={`relative transition-all ${
                  available ? "hover:shadow-md" : "opacity-60"
                }`}
              >
                {soldOut && (
                  <Badge className="absolute top-3 right-3 bg-destructive">Sold Out</Badge>
                )}
                {tier.type === "free" && (
                  <Badge className="absolute top-3 right-3 bg-green-600">Free</Badge>
                )}

                <CardHeader>
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <CardDescription>
                    {tier.type === "paid" ? (
                      <span className="text-2xl font-bold text-foreground">
                        ${tier.price}
                        <span className="text-sm font-normal text-muted-foreground"> {tier.currency}</span>
                      </span>
                    ) : (
                      <span className="text-2xl font-bold text-green-600">Free</span>
                    )}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Slot Availability */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Availability</span>
                      <span className={soldOut ? "text-destructive font-medium" : "text-foreground font-medium"}>
                        {tier.registered}/{tier.capacity}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all ${
                          soldOut ? "bg-destructive" : "bg-primary"
                        }`}
                        style={{ width: `${(tier.registered / tier.capacity) * 100}%` }}
                      />
                    </div>
                    {!soldOut && (
                      <p className="text-xs text-muted-foreground">
                        {slotsRemaining} {slotsRemaining === 1 ? "slot" : "slots"} remaining
                      </p>
                    )}
                  </div>

                  <Separator />

                  {/* Benefits */}
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Benefits</h4>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{benefit.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    className="w-full"
                    disabled={!available}
                    onClick={() => handlePayNow(tier)}
                  >
                    {soldOut ? "Sold Out" : available ? "Pay Now" : "Registration Closed"}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventTickets;
