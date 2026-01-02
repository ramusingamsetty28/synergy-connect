import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter, 
  MapPin, 
  Users, 
  TrendingUp, 
  Bookmark,
  ArrowUpRight,
  Building2,
  DollarSign,
  Briefcase
} from "lucide-react";
import { useState } from "react";

const startups = [
  {
    id: 1,
    name: "NeuraTech AI",
    tagline: "Enterprise AI automation platform revolutionizing workflow efficiency",
    industry: "AI / ML",
    stage: "Series A",
    raised: "$4.2M",
    asking: "$12M",
    location: "San Francisco, CA",
    team: 18,
    logo: "🤖",
    trending: true,
    verified: true,
  },
  {
    id: 2,
    name: "GreenFlow",
    tagline: "Sustainable supply chain solutions for modern enterprises",
    industry: "CleanTech",
    stage: "Seed",
    raised: "$1.5M",
    asking: "$5M",
    location: "Austin, TX",
    team: 12,
    logo: "🌱",
    trending: false,
    verified: true,
  },
  {
    id: 3,
    name: "FinLedger",
    tagline: "Next-gen blockchain payments infrastructure",
    industry: "FinTech",
    stage: "Series B",
    raised: "$28M",
    asking: "$40M",
    location: "New York, NY",
    team: 45,
    logo: "💳",
    trending: true,
    verified: true,
  },
  {
    id: 4,
    name: "MediSync",
    tagline: "AI-powered diagnostics for faster, accurate healthcare",
    industry: "HealthTech",
    stage: "Series A",
    raised: "$8M",
    asking: "$20M",
    location: "Boston, MA",
    team: 24,
    logo: "🏥",
    trending: false,
    verified: true,
  },
  {
    id: 5,
    name: "EduVerse",
    tagline: "Immersive VR learning experiences for K-12 education",
    industry: "EdTech",
    stage: "Pre-Seed",
    raised: "$500K",
    asking: "$2M",
    location: "Seattle, WA",
    team: 8,
    logo: "📚",
    trending: true,
    verified: false,
  },
  {
    id: 6,
    name: "SpaceLogix",
    tagline: "Satellite data analytics for agriculture and climate",
    industry: "SpaceTech",
    stage: "Seed",
    raised: "$3M",
    asking: "$8M",
    location: "Denver, CO",
    team: 15,
    logo: "🛰️",
    trending: false,
    verified: true,
  },
];

const industries = ["All", "AI / ML", "FinTech", "HealthTech", "CleanTech", "EdTech", "SpaceTech"];
const stages = ["All", "Pre-Seed", "Seed", "Series A", "Series B", "Series C+"];

const Discover = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedStage, setSelectedStage] = useState("All");

  const filteredStartups = startups.filter((startup) => {
    const matchesSearch = startup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         startup.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = selectedIndustry === "All" || startup.industry === selectedIndustry;
    const matchesStage = selectedStage === "All" || startup.stage === selectedStage;
    return matchesSearch && matchesIndustry && matchesStage;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container px-4">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Discover <span className="text-gradient">Startups</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore curated investment opportunities from verified startups across all stages and industries.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search startups by name, industry, or keywords..."
                className="pl-12 h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2 flex-wrap">
              <select
                className="h-12 px-4 rounded-lg border border-border bg-secondary/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
              >
                <option value="" disabled>Industry</option>
                {industries.map((industry) => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
              
              <select
                className="h-12 px-4 rounded-lg border border-border bg-secondary/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                value={selectedStage}
                onChange={(e) => setSelectedStage(e.target.value)}
              >
                <option value="" disabled>Stage</option>
                {stages.map((stage) => (
                  <option key={stage} value={stage}>{stage}</option>
                ))}
              </select>
              
              <Button variant="outline" className="h-12">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              Showing <span className="text-foreground font-medium">{filteredStartups.length}</span> startups
            </p>
            <select className="px-3 py-2 rounded-lg border border-border bg-secondary/50 text-sm">
              <option>Most Relevant</option>
              <option>Recently Added</option>
              <option>Highest Raised</option>
              <option>Trending</option>
            </select>
          </div>

          {/* Startup Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStartups.map((startup, index) => (
              <Card 
                key={startup.id}
                className="group hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center text-2xl">
                        {startup.logo}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-display font-semibold text-lg">{startup.name}</h3>
                          {startup.trending && (
                            <TrendingUp className="w-4 h-4 text-success" />
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="stage" className="text-xs">
                            {startup.stage}
                          </Badge>
                          {startup.verified && (
                            <Badge variant="success" className="text-xs">
                              Verified
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <button className="p-2 rounded-lg hover:bg-secondary transition-colors opacity-0 group-hover:opacity-100">
                      <Bookmark className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{startup.tagline}</p>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase className="w-4 h-4" />
                      <span>{startup.industry}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{startup.location.split(',')[0]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-success" />
                      <span className="text-success font-medium">{startup.raised} raised</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-primary font-medium">{startup.asking} ask</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{startup.team} team members</span>
                    </div>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100">
                      View
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          {filteredStartups.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Startups
              </Button>
            </div>
          )}

          {/* Empty State */}
          {filteredStartups.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">No startups found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your filters or search query</p>
              <Button variant="outline" onClick={() => {
                setSearchQuery("");
                setSelectedIndustry("All");
                setSelectedStage("All");
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Discover;
