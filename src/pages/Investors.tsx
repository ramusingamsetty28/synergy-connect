import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Search,
  Filter,
  Bell,
  Lock,
  BarChart3,
  FileText,
  Handshake,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Target,
} from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "AI-Powered Matching",
    description: "Our algorithm surfaces startups that match your investment thesis, sector focus, and ticket size.",
  },
  {
    icon: Search,
    title: "Advanced Discovery",
    description: "Filter deals by industry, stage, traction metrics, geography, and more to find your ideal investments.",
  },
  {
    icon: Lock,
    title: "Verified Startups",
    description: "Every startup is vetted for legitimacy. Access verified metrics and authentic founder profiles.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Get notified when new startups match your criteria or when your watchlist companies update.",
  },
  {
    icon: FileText,
    title: "Deal Flow Management",
    description: "Track opportunities through your pipeline from discovery to due diligence to investment.",
  },
  {
    icon: BarChart3,
    title: "Portfolio Analytics",
    description: "Monitor your portfolio performance and get insights on sector trends and emerging opportunities.",
  },
];

const investorTypes = [
  {
    title: "Angel Investors",
    description: "Access early-stage deals with smaller check sizes and get first-mover advantage.",
    features: ["Pre-seed & Seed deals", "$10K - $100K tickets", "Direct founder access"],
  },
  {
    title: "Venture Capital",
    description: "Find growth-stage companies with proven traction and scalable business models.",
    features: ["Seed to Series C", "$100K - $10M tickets", "Co-investment opportunities"],
  },
  {
    title: "Family Offices",
    description: "Diversify with curated alternative investments across sectors and geographies.",
    features: ["All stages", "Flexible structures", "Long-term partnerships"],
  },
];

const stats = [
  { value: "10K+", label: "Verified Startups" },
  { value: "85%", label: "Deal Match Rate" },
  { value: "$2.5B", label: "Deal Flow Value" },
  { value: "48hrs", label: "Avg. Response Time" },
];

const Investors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="container px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6">
                <Briefcase className="w-3 h-3 mr-1" />
                For Investors
              </Badge>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                Discover Your Next{" "}
                <span className="text-gradient">Unicorn</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Access curated deal flow from verified startups. Our AI matches you with 
                opportunities that fit your investment thesis perfectly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/signup">
                    Start Investing
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/discover">Browse Deals</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-display text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Investor Types */}
        <section className="py-20 bg-secondary/30">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Built for <span className="text-gradient">All Investors</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you're an angel or managing a fund, FundFlow adapts to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {investorTypes.map((type, index) => (
                <Card 
                  key={type.title}
                  className="group hover:border-primary/30 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <h3 className="font-display text-xl font-semibold mb-3">{type.title}</h3>
                    <p className="text-muted-foreground text-sm mb-6">{type.description}</p>
                    <ul className="space-y-3">
                      {type.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Powerful <span className="text-gradient">Tools</span> for Smart Investing
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to source, evaluate, and close deals efficiently
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card 
                  key={benefit.title}
                  className="group hover:border-primary/30 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Opportunity */}
        <section className="py-20 bg-secondary/30">
          <div className="container px-4">
            <Card className="max-w-5xl mx-auto overflow-hidden">
              <div className="grid md:grid-cols-2">
                <CardContent className="p-8 md:p-12">
                  <Badge variant="outline" className="mb-4">Featured Deal</Badge>
                  <h3 className="font-display text-2xl font-bold mb-4">NeuraTech AI</h3>
                  <p className="text-muted-foreground mb-6">
                    Enterprise AI automation platform revolutionizing workflow efficiency. 
                    Currently raising Series A to expand into new verticals.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Raising</p>
                      <p className="font-semibold text-lg text-primary">$12M</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Stage</p>
                      <p className="font-semibold text-lg">Series A</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Revenue</p>
                      <p className="font-semibold text-lg">$2.4M ARR</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Growth</p>
                      <p className="font-semibold text-lg text-success">+180% YoY</p>
                    </div>
                  </div>
                  <Button variant="hero" asChild>
                    <Link to="/discover">
                      View Deal
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 md:p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-2xl bg-secondary flex items-center justify-center text-5xl mx-auto mb-4">
                      🤖
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Badge variant="success">Verified</Badge>
                      <Badge variant="stage">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container px-4">
            <Card className="max-w-4xl mx-auto border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-12 text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Start Discovering Deals Today
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                  Join thousands of investors who trust FundFlow to source their best opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/signup">
                      Create Investor Account
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/discover">Browse Startups</Link>
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Free to browse
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Premium insights
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    No commitment
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Investors;
