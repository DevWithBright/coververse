import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Building, 
  Users, 
  Shield, 
  ArrowRight,
  CheckCircle,
  BarChart,
  MessageCircle,
  AlertCircle
} from "lucide-react";

const Stakeholders = () => {
  const stakeholders = [
    {
      type: "Governments",
      icon: Building,
      color: "bg-gradient-civic",
      benefits: [
        "Streamline citizen service delivery",
        "Data-driven policy decisions",
        "Improved public satisfaction",
        "Efficient resource allocation"
      ],
      features: [
        "Dashboard analytics",
        "Automated workflows",
        "Performance tracking",
        "Budget optimization"
      ]
    },
    {
      type: "Agencies",
      icon: Shield,
      color: "bg-gradient-sunset",
      benefits: [
        "Rapid emergency response",
        "Inter-agency coordination",
        "Real-time situation awareness",
        "Evidence-based reporting"
      ],
      features: [
        "Alert management",
        "Resource coordination",
        "Incident tracking",
        "Communication tools"
      ]
    },
    {
      type: "Citizens",
      icon: Users,
      color: "bg-gradient-hero",
      benefits: [
        "Voice heard by government",
        "Transparent service delivery",
        "Community safety alerts",
        "Civic participation made easy"
      ],
      features: [
        "One-tap reporting",
        "Status updates",
        "Community forums",
        "Verified information"
      ]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Built for Every Stakeholder
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            CoreVerse unites governments, agencies, and citizens on one platform, building stronger communities through collaboration.
          </p>
        </div>

        {/* Stakeholder cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {stakeholders.map((stakeholder, index) => (
            <Card key={index} className="p-8 hover:shadow-glow transition-spring group border-border/50 bg-card/80 backdrop-blur-sm">
              <div className="space-y-6">
                {/* Header */}
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-2xl ${stakeholder.color} flex items-center justify-center group-hover:scale-110 transition-spring shadow-civic`}>
                    <stakeholder.icon className="w-8 h-8 text-background" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground">
                    {stakeholder.type}
                  </h3>
                </div>

                {/* Benefits */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-card-foreground flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    {stakeholder.benefits.map((benefit, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-card-foreground flex items-center gap-2">
                    <BarChart className="w-4 h-4 text-primary" />
                    Platform Features
                  </h4>
                  <ul className="space-y-2">
                    {stakeholder.features.map((feature, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Collaboration highlight */}
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-border/50">
          <div className="text-center space-y-6">
            <div className="flex justify-center items-center gap-4">
              <div className="w-12 h-12 bg-gradient-civic rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-background" />
              </div>
              <ArrowRight className="w-6 h-6 text-muted-foreground" />
              <div className="w-12 h-12 bg-gradient-sunset rounded-xl flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-background" />
              </div>
              <ArrowRight className="w-6 h-6 text-muted-foreground" />
              <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-background" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground">
                Seamless Collaboration Workflow
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From citizen report to government action — CoreVerse creates a transparent, efficient workflow that keeps everyone informed and engaged.
              </p>
            </div>

            <Button variant="civic" size="lg" className="text-lg px-8">
              See How It Works
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stakeholders;