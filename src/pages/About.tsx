import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Target,
  Heart,
  Shield,
  Zap,
  Globe,
  Users,
  TrendingUp,
  Award,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Trust First",
    description: "We build credibility through verification, transparency, and secure transactions. Trust is our foundation.",
  },
  {
    icon: Zap,
    title: "Move Fast",
    description: "Time is money in fundraising. We streamline every step to help deals close faster.",
  },
  {
    icon: Heart,
    title: "Founder Friendly",
    description: "We're built by founders, for founders. Every feature is designed with your success in mind.",
  },
  {
    icon: Target,
    title: "Quality Over Quantity",
    description: "We focus on meaningful connections, not noise. Better matches lead to better outcomes.",
  },
];

const team = [
  {
    name: "Alexandra Chen",
    role: "CEO & Co-Founder",
    bio: "Former VC at Sequoia. Stanford MBA. Built 3 startups.",
    image: "👩‍💼",
  },
  {
    name: "Marcus Williams",
    role: "CTO & Co-Founder",
    bio: "Ex-Google, Ex-Stripe. 15+ years in fintech engineering.",
    image: "👨‍💻",
  },
  {
    name: "Priya Sharma",
    role: "Head of Product",
    bio: "Former Product Lead at Airbnb. Passionate about founder UX.",
    image: "👩‍🔬",
  },
  {
    name: "David Kim",
    role: "Head of Investor Relations",
    bio: "10+ years connecting LPs and GPs. Network of 5,000+ investors.",
    image: "👨‍💼",
  },
];

const milestones = [
  { year: "2021", event: "FundFlow founded in San Francisco" },
  { year: "2022", event: "Launched beta with 100 startups" },
  { year: "2022", event: "Raised $5M seed round" },
  { year: "2023", event: "Crossed $100M in facilitated deals" },
  { year: "2023", event: "Expanded to 50+ countries" },
  { year: "2024", event: "10,000+ startups on platform" },
  { year: "2024", event: "Raised $25M Series A" },
];

const stats = [
  { value: "$500M+", label: "Capital Raised" },
  { value: "10,000+", label: "Startups" },
  { value: "5,000+", label: "Investors" },
  { value: "50+", label: "Countries" },
];

const About = () => {
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
                <Globe className="w-3 h-3 mr-1" />
                About Us
              </Badge>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                Building the Future of{" "}
                <span className="text-gradient">Startup Funding</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're on a mission to democratize access to capital and make fundraising 
                more efficient, transparent, and founder-friendly.
              </p>
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
        </section>

        {/* Mission */}
        <section className="py-20 bg-secondary/30">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                    Our <span className="text-gradient">Mission</span>
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Every great company started as an idea in someone's mind. But too often, 
                    brilliant founders struggle to find the right investors, while investors 
                    miss out on game-changing opportunities.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    FundFlow bridges this gap. We use technology to create meaningful connections 
                    between startups and investors, reducing the noise and accelerating the path 
                    to funding.
                  </p>
                  <p className="text-muted-foreground">
                    Our vision is a world where every worthy startup gets funded, and every 
                    investor finds their next unicorn.
                  </p>
                </div>
                <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                  <CardContent className="p-8">
                    <blockquote className="text-lg italic mb-4">
                      "We believe the best companies aren't always the ones with the best networks. 
                      We're here to level the playing field."
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-xl">
                        👩‍💼
                      </div>
                      <div>
                        <p className="font-semibold">Alexandra Chen</p>
                        <p className="text-sm text-muted-foreground">CEO & Co-Founder</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-gradient">Values</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <Card 
                  key={value.title}
                  className="text-center group hover:border-primary/30 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-secondary/30">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Meet the <span className="text-gradient">Team</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experienced operators and investors building for founders
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <Card 
                  key={member.name}
                  className="text-center group hover:border-primary/30 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center text-4xl mx-auto mb-4">
                      {member.image}
                    </div>
                    <h3 className="font-display font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                        <Linkedin className="w-4 h-4 text-muted-foreground" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                        <Twitter className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-gradient">Journey</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-6 mb-6 last:mb-0 animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0 z-10">
                      <TrendingUp className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 pt-2">
                      <p className="text-sm text-primary font-medium">{milestone.year}</p>
                      <p className="text-foreground">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-secondary/30">
          <div className="container px-4">
            <Card className="max-w-4xl mx-auto border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-12 text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Join the FundFlow Community
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                  Whether you're building the next unicorn or looking for your next investment, 
                  we're here to help you succeed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/signup">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/discover">Explore Startups</Link>
                  </Button>
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

export default About;
