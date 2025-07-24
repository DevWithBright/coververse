import { Card } from "@/components/ui/card";
import { 
  MessageSquare, 
  AlertTriangle, 
  BarChart3, 
  Settings, 
  Users, 
  Zap,
  MapPin,
  Shield,
  Clock
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Real-time Issue Reporting",
      description: "Citizens can instantly report problems like broken streetlights, potholes, or service disruptions through our intuitive platform.",
      color: "text-primary"
    },
    {
      icon: AlertTriangle,
      title: "Verified Alert System",
      description: "Share and receive verified emergency alerts, public safety notifications, and important community updates in real-time.",
      color: "text-secondary"
    },
    {
      icon: BarChart3,
      title: "Trend Monitoring",
      description: "Advanced analytics to track civic issues, identify patterns, and predict potential problems before they escalate.",
      color: "text-accent"
    },
    {
      icon: Settings,
      title: "Service Management",
      description: "Streamlined tools for government agencies to manage, prioritize, and resolve public service requests efficiently.",
      color: "text-primary-light"
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Foster stronger connections between citizens and local government through transparent communication channels.",
      color: "text-secondary"
    },
    {
      icon: Zap,
      title: "Instant Response",
      description: "Automated workflows ensure rapid response times and keep all stakeholders informed throughout the resolution process.",
      color: "text-accent-light"
    }
  ];

  const useCases = [
    {
      icon: MapPin,
      title: "Infrastructure Issues",
      example: "Fixing broken streetlights",
      description: "Report and track infrastructure problems with precise location data and photo evidence."
    },
    {
      icon: Shield,
      title: "Emergency Response",
      example: "Responding to floods",
      description: "Coordinate emergency responses with real-time updates and resource allocation."
    },
    {
      icon: Clock,
      title: "Service Requests",
      example: "Waste collection delays",
      description: "Manage service requests with automated routing and progress tracking."
    }
  ];

  return (
    <section className="py-24 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Powerful Features for Smart Cities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to transform citizen engagement and public services with intelligent automation and real-time collaboration.
          </p>
        </div>

        {/* Main features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover:shadow-civic transition-spring group border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-civic flex items-center justify-center group-hover:scale-110 transition-spring`}>
                  <feature.icon className="w-6 h-6 text-background" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Use cases section */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Real-world Solutions
            </h3>
            <p className="text-lg text-muted-foreground">
              See how CoreVerse transforms everyday civic challenges into opportunities for improvement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group">
                <Card className="p-6 h-full hover:shadow-warm transition-spring bg-gradient-to-br from-card to-muted/30 border-border/50">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-sunset flex items-center justify-center">
                        <useCase.icon className="w-5 h-5 text-background" />
                      </div>
                      <h4 className="text-lg font-semibold text-card-foreground">
                        {useCase.title}
                      </h4>
                    </div>
                    <div className="bg-accent/10 rounded-lg px-4 py-2 border border-accent/20">
                      <span className="text-accent-foreground font-medium">
                        Example: {useCase.example}
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      {useCase.description}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;