import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, MapPin, TrendingUp, Users, Bookmark } from "lucide-react";

const featuredStartups = [
  {
    name: "NeuraTech AI",
    tagline: "Enterprise AI automation platform",
    industry: "AI / ML",
    stage: "Series A",
    raised: "$4.2M",
    asking: "$12M",
    location: "San Francisco, CA",
    team: 18,
    logo: "🤖",
    trending: true,
  },
  {
    name: "GreenFlow",
    tagline: "Sustainable supply chain solutions",
    industry: "CleanTech",
    stage: "Seed",
    raised: "$1.5M",
    asking: "$5M",
    location: "Austin, TX",
    team: 12,
    logo: "🌱",
    trending: false,
  },
  {
    name: "FinLedger",
    tagline: "Next-gen blockchain payments",
    industry: "FinTech",
    stage: "Series B",
    raised: "$28M",
    asking: "$40M",
    location: "New York, NY",
    team: 45,
    logo: "💳",
    trending: true,
  },
  {
    name: "MediSync",
    tagline: "AI-powered diagnostics platform",
    industry: "HealthTech",
    stage: "Series A",
    raised: "$8M",
    asking: "$20M",
    location: "Boston, MA",
    team: 24,
    logo: "🏥",
    trending: false,
  },
];

export function FeaturedStartups() {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
              Featured <span className="text-gradient">Startups</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Trending opportunities handpicked by our team
            </p>
          </div>
          <Button variant="outline" className="self-start md:self-auto">
            View All Startups
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredStartups.map((startup, index) => (
            <Card 
              key={startup.name}
              className="group hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-2xl">
                      {startup.logo}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display font-semibold">{startup.name}</h3>
                        {startup.trending && (
                          <TrendingUp className="w-4 h-4 text-success" />
                        )}
                      </div>
                      <Badge variant="stage" className="mt-1 text-xs">
                        {startup.stage}
                      </Badge>
                    </div>
                  </div>
                  <button className="p-2 rounded-lg hover:bg-secondary transition-colors opacity-0 group-hover:opacity-100">
                    <Bookmark className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{startup.tagline}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Industry</span>
                    <span className="font-medium">{startup.industry}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Raised</span>
                    <span className="font-medium text-success">{startup.raised}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Asking</span>
                    <span className="font-medium text-primary">{startup.asking}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {startup.location.split(',')[0]}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {startup.team} team
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
