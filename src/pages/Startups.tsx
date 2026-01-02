import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Rocket,
  Users,
  TrendingUp,
  Shield,
  BarChart3,
  MessageSquare,
  FileText,
  Globe,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Global Investor Network",
    description: "Access 10,000+ verified investors including angels, VCs, and institutional funds actively seeking opportunities.",
  },
  {
    icon: Shield,
    title: "Verified & Trusted",
    description: "Build credibility with our verification badge system that signals trust to potential investors.",
  },
  {
    icon: BarChart3,
    title: "Track Your Metrics",
    description: "Showcase your traction with real-time metrics, revenue data, and growth charts that impress investors.",
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    description: "Connect directly with interested investors through secure in-app messaging and meeting scheduling.",
  },
  {
    icon: FileText,
    title: "Pitch Deck Hosting",
    description: "Upload and share your pitch deck securely with built-in analytics to track views and engagement.",
  },
  {
    icon: Users,
    title: "Team Showcase",
    description: "Highlight your team's expertise and background to build investor confidence in your leadership.",
  },
];

const steps = [
  {
    step: "01",
    title: "Create Your Profile",
    description: "Sign up and build your startup profile with key details, metrics, and your pitch deck.",
  },
  {
    step: "02",
    title: "Get Verified",
    description: "Complete our verification process to earn a trust badge and increase visibility.",
  },
  {
    step: "03",
    title: "Connect with Investors",
    description: "Get matched with relevant investors and start meaningful conversations.",
  },
  {
    step: "04",
    title: "Close Your Round",
    description: "Manage your deal flow, share documents securely, and close your funding round.",
  },
];

const testimonials = [
  {
    quote: "FundFlow connected us with the perfect Series A investor within 2 weeks. The platform's matching algorithm is incredible.",
    author: "Sarah Chen",
    role: "CEO, NeuraTech AI",
    raised: "$12M Series A",
  },
  {
    quote: "The pitch deck analytics helped us understand what resonated with investors and refine our story. Game-changer!",
    author: "Marcus Johnson",
    role: "Founder, GreenFlow",
    raised: "$5M Seed",
  },
  {
    quote: "As a first-time founder, FundFlow's investor matching saved me months of cold outreach. Highly recommend.",
    author: "Priya Patel",
    role: "CEO, EduVerse",
    raised: "$2M Pre-Seed",
  },
];

const Startups = () => {
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
                <Rocket className="w-3 h-3 mr-1" />
                For Startups
              </Badge>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                Raise Your Next Round with{" "}
                <span className="text-gradient">Confidence</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of startups who've raised over $500M through FundFlow. 
                Connect with verified investors, showcase your vision, and close deals faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/signup">
                    Start Raising
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/discover">Explore Platform</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="font-display text-3xl md:text-4xl font-bold text-gradient">$500M+</div>
                  <p className="text-sm text-muted-foreground mt-1">Total Raised</p>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl md:text-4xl font-bold text-gradient">2,500+</div>
                  <p className="text-sm text-muted-foreground mt-1">Startups Funded</p>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl md:text-4xl font-bold text-gradient">21 Days</div>
                  <p className="text-sm text-muted-foreground mt-1">Avg. Time to Close</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 bg-secondary/30">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Everything You Need to <span className="text-gradient">Succeed</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Powerful tools designed specifically for founders raising capital
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

        {/* How It Works */}
        <section className="py-20">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                How It <span className="text-gradient">Works</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From profile creation to closing your round, we've got you covered
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div 
                  key={step.step}
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-6xl font-display font-bold text-primary/10 mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-8 -right-4 w-6 h-6 text-primary/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-secondary/30">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Founders <span className="text-gradient">Love Us</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={testimonial.author}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                      <Badge variant="success">{testimonial.raised}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container px-4">
            <Card className="max-w-4xl mx-auto border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-12 text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Ready to Raise Your Next Round?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                  Join thousands of successful founders who trust FundFlow to connect them with the right investors.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/signup">
                      Get Started Free
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/login">Sign In</Link>
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Free to join
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    No hidden fees
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Cancel anytime
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

export default Startups;
