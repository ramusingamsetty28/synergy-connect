import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center px-4">
        <div className="w-24 h-24 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-8 shadow-glow animate-float">
          <span className="text-5xl font-display font-bold text-primary-foreground">404</span>
        </div>
        
        <h1 className="font-display text-4xl font-bold mb-4">Page not found</h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" asChild>
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/discover">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Explore Startups
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
