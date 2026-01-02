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
  DollarSign,
  Briefcase,
  Calendar,
  BookmarkCheck
} from "lucide-react";
import { useState, useMemo } from "react";
import { mockStartups, industries, stages, sortOptions, type Startup } from "@/data/mockStartups";
import { Link } from "react-router-dom";

const Discover = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedStage, setSelectedStage] = useState("All");
  const [sortBy, setSortBy] = useState("relevant");
  const [savedStartups, setSavedStartups] = useState<number[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);

  const toggleSave = (id: number) => {
    setSavedStartups(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const filteredAndSortedStartups = useMemo(() => {
    let filtered = mockStartups.filter((startup) => {
      const matchesSearch = startup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           startup.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           startup.industry.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesIndustry = selectedIndustry === "All" || startup.industry === selectedIndustry;
      const matchesStage = selectedStage === "All" || startup.stage === selectedStage;
      return matchesSearch && matchesIndustry && matchesStage;
    });

    // Sort
    switch (sortBy) {
      case "recent":
        filtered = [...filtered].sort((a, b) => parseInt(b.founded) - parseInt(a.founded));
        break;
      case "raised":
        filtered = [...filtered].sort((a, b) => {
          const parseAmount = (str: string) => parseFloat(str.replace(/[$M,K]/g, '')) * (str.includes('M') ? 1000000 : str.includes('K') ? 1000 : 1);
          return parseAmount(b.raised) - parseAmount(a.raised);
        });
        break;
      case "trending":
        filtered = [...filtered].sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0));
        break;
      default:
        // relevant - verified first, then trending
        filtered = [...filtered].sort((a, b) => {
          if (a.verified !== b.verified) return b.verified ? 1 : -1;
          if (a.trending !== b.trending) return b.trending ? 1 : -1;
          return 0;
        });
    }

    return filtered;
  }, [searchQuery, selectedIndustry, selectedStage, sortBy]);

  const visibleStartups = filteredAndSortedStartups.slice(0, visibleCount);
  const hasMore = visibleCount < filteredAndSortedStartups.length;

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedIndustry("All");
    setSelectedStage("All");
    setSortBy("relevant");
  };

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

          {/* Results Count & Sort */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              Showing <span className="text-foreground font-medium">{visibleStartups.length}</span> of{" "}
              <span className="text-foreground font-medium">{filteredAndSortedStartups.length}</span> startups
              {savedStartups.length > 0 && (
                <span className="ml-2 text-primary">
                  ({savedStartups.length} saved)
                </span>
              )}
            </p>
            <select 
              className="px-3 py-2 rounded-lg border border-border bg-secondary/50 text-sm"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          {/* Startup Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleStartups.map((startup, index) => (
              <StartupCard 
                key={startup.id}
                startup={startup}
                index={index}
                isSaved={savedStartups.includes(startup.id)}
                onToggleSave={() => toggleSave(startup.id)}
              />
            ))}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setVisibleCount(prev => prev + 6)}
              >
                Load More Startups
              </Button>
            </div>
          )}

          {/* Empty State */}
          {filteredAndSortedStartups.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">No startups found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your filters or search query</p>
              <Button variant="outline" onClick={resetFilters}>
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

interface StartupCardProps {
  startup: Startup;
  index: number;
  isSaved: boolean;
  onToggleSave: () => void;
}

const StartupCard = ({ startup, index, isSaved, onToggleSave }: StartupCardProps) => {
  return (
    <Card 
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
          <button 
            className={`p-2 rounded-lg transition-colors ${
              isSaved 
                ? 'bg-primary/10 text-primary' 
                : 'hover:bg-secondary opacity-0 group-hover:opacity-100'
            }`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave();
            }}
          >
            {isSaved ? (
              <BookmarkCheck className="w-4 h-4" />
            ) : (
              <Bookmark className="w-4 h-4 text-muted-foreground" />
            )}
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

        {(startup.revenue || startup.growth) && (
          <div className="flex items-center gap-4 py-3 px-3 rounded-lg bg-secondary/50 text-sm mb-4">
            {startup.revenue && (
              <div>
                <span className="text-muted-foreground">Revenue:</span>{" "}
                <span className="font-medium">{startup.revenue}</span>
              </div>
            )}
            {startup.growth && (
              <div>
                <span className="text-muted-foreground">Growth:</span>{" "}
                <span className="font-medium text-success">{startup.growth}</span>
              </div>
            )}
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{startup.team}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{startup.founded}</span>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100" asChild>
            <Link to={`/startup/${startup.id}`}>
              View
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Discover;
