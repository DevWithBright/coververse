import { Button } from "@/components/ui/button";
import { ArrowRight, Play, MapPin, AlertTriangle, TrendingUp } from "lucide-react";
import heroImage from "@/assets/coververse-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="CoverVerse - Smart Civic Operating System" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-secondary rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent-light rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-secondary-light rounded-full animate-pulse delay-700" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-md rounded-full px-4 py-2 text-background">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">Built for African Cities</span>
          </div>

          {/* One-sentence explainer */}
          <div className="text-background/90 text-lg font-medium mt-4">
            CoreVerse is the smart civic operating system empowering African cities to be safer, smarter, and more responsive.
          </div>

          {/* Main headline */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-background leading-tight">
              CoreVerse
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-background/90">
              Smart Civic Operating System
            </h2>
          </div>

          {/* Value proposition */}
          <p className="text-xl sm:text-2xl text-background/80 max-w-4xl mx-auto leading-relaxed">
            Empowering governments, agencies, and citizens with real-time tools to report issues, 
            share verified alerts, monitor trends, and improve public services — all from one intelligent platform.
          </p>

          {/* Key benefit */}
          <div className="inline-flex items-center gap-3 bg-gradient-sunset rounded-full px-6 py-3 text-background shadow-warm">
            <TrendingUp className="w-5 h-5" />
            <span className="font-semibold">Turn citizen voices into data and action</span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Request Early Access
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="bg-background/10 border-background/30 text-background hover:bg-background/20 text-lg px-8 py-4">
              <Play className="w-5 h-5" />
              Watch Platform Demo
            </Button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-background">24/7</div>
              <div className="text-background/70">Real-time monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-background">100+</div>
              <div className="text-background/70">Issue categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-background">⚡</div>
              <div className="text-background/70">Instant alerts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;