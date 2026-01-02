import { Card, CardContent } from "@/components/ui/card";
import { 
  Rocket, 
  Users, 
  LineChart, 
  MessageSquare, 
  Shield, 
  Zap,
  Search,
  FileCheck
} from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Startup Profiles",
    description: "Showcase your pitch deck, metrics, and team to attract the right investors.",
    color: "text-primary",
  },
  {
    icon: Search,
    title: "Smart Discovery",
    description: "AI-powered matching connects you with investors aligned to your industry and stage.",
    color: "text-info",
  },
  {
    icon: Users,
    title: "Investor Network",
    description: "Access verified angels, VCs, and institutions actively looking for deals.",
    color: "text-success",
  },
  {
    icon: MessageSquare,
    title: "Secure Messaging",
    description: "Private conversations with read receipts and document sharing.",
    color: "text-warning",
  },
  {
    icon: LineChart,
    title: "Deal Pipeline",
    description: "Track investments from first contact through due diligence to close.",
    color: "text-primary",
  },
  {
    icon: Shield,
    title: "Verified Profiles",
    description: "KYC verification and credibility badges build trust on both sides.",
    color: "text-success",
  },
  {
    icon: FileCheck,
    title: "Document Vault",
    description: "Secure NDA signing and document sharing with access controls.",
    color: "text-info",
  },
  {
    icon: Zap,
    title: "Real-time Analytics",
    description: "Track profile views, investor interest, and engagement metrics.",
    color: "text-warning",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to
            <span className="text-gradient"> Close Deals</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A complete ecosystem for startup fundraising and investor deal flow management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group hover:border-primary/30 hover:shadow-glow cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
