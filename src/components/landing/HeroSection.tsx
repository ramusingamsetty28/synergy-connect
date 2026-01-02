import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-info/5 rounded-full blur-3xl animate-pulse-glow animation-delay-200" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), 
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge 
            variant="stage" 
            className="mb-6 animate-slide-up px-4 py-1.5 text-sm"
          >
            <Sparkles className="w-3.5 h-3.5 mr-2" />
            Trusted by 2,500+ Startups & Investors
          </Badge>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up animation-delay-100">
            Where Visionary Startups
            <br />
            <span className="text-gradient">Meet Smart Capital</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up animation-delay-200">
            FundFlow connects ambitious founders with investors who share their vision. 
            AI-powered matching, verified profiles, and seamless deal flow management.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up animation-delay-300">
            <Button variant="hero" size="xl" asChild>
              <Link to="/signup">
                Start Raising
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <Link to="/discover">
                Explore Startups
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 animate-slide-up animation-delay-400">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-success" />
              <span className="text-sm">Verified Profiles</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="w-5 h-5 text-warning" />
              <span className="text-sm">AI-Powered Matching</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Sparkles className="w-5 h-5 text-info" />
              <span className="text-sm">$2.4B+ Raised</span>
            </div>
          </div>
        </div>

        {/* Floating Stats Cards */}
        <div className="absolute hidden lg:block left-10 top-1/3 animate-float">
          <div className="glass rounded-xl p-4 shadow-elevated">
            <div className="text-2xl font-display font-bold text-primary">2,500+</div>
            <div className="text-sm text-muted-foreground">Active Startups</div>
          </div>
        </div>

        <div className="absolute hidden lg:block right-10 top-1/2 animate-float animation-delay-300">
          <div className="glass rounded-xl p-4 shadow-elevated">
            <div className="text-2xl font-display font-bold text-success">$890M</div>
            <div className="text-sm text-muted-foreground">This Quarter</div>
          </div>
        </div>
      </div>
    </section>
  );
}
