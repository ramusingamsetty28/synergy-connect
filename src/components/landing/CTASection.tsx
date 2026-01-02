import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const startupBenefits = [
  "Create compelling pitch profiles",
  "Upload pitch decks and financials",
  "Get matched with relevant investors",
  "Track investor engagement",
];

const investorBenefits = [
  "Discover curated deal flow",
  "AI-powered opportunity matching",
  "Manage your investment pipeline",
  "Direct messaging with founders",
];

export function CTASection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="text-gradient">Get Started?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of founders and investors already using FundFlow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Startup Card */}
          <Card className="group hover:border-primary/30 transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-glow">
                <Rocket className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="font-display text-2xl font-bold mb-2">For Startups</h3>
              <p className="text-muted-foreground mb-6">
                Showcase your vision and connect with investors who believe in your mission.
              </p>

              <ul className="space-y-3 mb-8">
                {startupBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button variant="hero" className="w-full" asChild>
                <Link to="/signup?type=startup">
                  Start Raising
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Investor Card */}
          <Card className="group hover:border-primary/30 transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-border">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="font-display text-2xl font-bold mb-2">For Investors</h3>
              <p className="text-muted-foreground mb-6">
                Discover vetted opportunities and manage your deal flow efficiently.
              </p>

              <ul className="space-y-3 mb-8">
                {investorBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="w-full" asChild>
                <Link to="/signup?type=investor">
                  Join as Investor
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
