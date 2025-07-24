import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "../supabaseClient"; // Adjust path if needed
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CallToAction = () => {
  // Contact form state
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactStatus, setContactStatus] = useState<null | "success" | "error">(null);

  // Signup form state
  const [signupEmail, setSignupEmail] = useState("");
  const [signupStatus, setSignupStatus] = useState<null | "success" | "error">(null);

  // Contact form submit handler
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus(null);
    const { error } = await supabase.from("messages").insert([
      { name: contactName, email: contactEmail, message: contactMessage }
    ]);
    if (error) {
      console.error("Supabase insert error:", error);
      setContactStatus("error");
    } else {
      setContactStatus("success");
      setContactName("");
      setContactEmail("");
      setContactMessage("");
    }
  };

  // Signup form submit handler
  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignupStatus(null);
    const { error } = await supabase.from("subscribers").insert([{ email: signupEmail }]);
    if (error) setSignupStatus("error");
    else {
      setSignupStatus("success");
      setSignupEmail("");
    }
  };

  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-background/10 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-background/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-background/5 rounded-full blur-lg" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Main CTA */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-background">
              Ready to Transform Your City?
            </h2>
            <p className="text-xl sm:text-2xl text-background/90 max-w-3xl mx-auto">
              Join the civic revolution. Start turning citizen voices into meaningful action with CoreVerse's intelligent platform.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="outline" size="lg" className="bg-background text-primary hover:bg-background/90 border-background text-lg px-8 py-4 shadow-glow">
              Request Early Access
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="lg" className="text-background hover:bg-background/10 border border-background/30 text-lg px-8 py-4">
              Schedule a Demo
            </Button>
          </div>

          {/* Email Signup Form */}
          <form
            className="mt-12 max-w-md mx-auto flex flex-col gap-4"
            aria-label="Email signup form"
            role="form"
            aria-live="polite"
            onSubmit={handleSignupSubmit}
          >
            <Label htmlFor="email-signup" className="text-background/90 text-lg">Sign up for updates</Label>
            <div className="flex gap-2">
              <Input
                id="email-signup"
                name="email"
                type="email"
                placeholder="Your email address"
                required
                aria-required="true"
                aria-label="Email address"
                className="flex-1"
                value={signupEmail}
                onChange={e => setSignupEmail(e.target.value)}
              />
              <Button type="submit" variant="hero" aria-label="Sign up for updates">Sign Up</Button>
            </div>
            <div id="signup-feedback" aria-live="polite" className="text-sm text-background/80">
              {signupStatus === "success" && "Thank you for signing up!"}
              {signupStatus === "error" && "Failed to sign up. Try again."}
            </div>
          </form>

          {/* Contact Form */}
          <form
            className="mt-8 max-w-lg mx-auto flex flex-col gap-4 bg-background/10 p-6 rounded-xl"
            aria-label="Contact form"
            role="form"
            aria-live="polite"
            onSubmit={handleContactSubmit}
          >
            <Label htmlFor="contact-name" className="text-background/90">Name</Label>
            <Input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Your name"
              required
              aria-required="true"
              aria-label="Name"
              value={contactName}
              onChange={e => setContactName(e.target.value)}
            />
            <Label htmlFor="contact-email" className="text-background/90">Email</Label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              placeholder="Your email address"
              required
              aria-required="true"
              aria-label="Email address"
              value={contactEmail}
              onChange={e => setContactEmail(e.target.value)}
            />
            <Label htmlFor="contact-message" className="text-background/90">Message</Label>
            <Textarea
              id="contact-message"
              name="message"
              placeholder="How can we help you?"
              rows={4}
              required
              aria-required="true"
              aria-label="Message"
              value={contactMessage}
              onChange={e => setContactMessage(e.target.value)}
            />
            <Button type="submit" variant="outline" className="mt-2" aria-label="Send message">
              Send Message
            </Button>
            <div id="contact-feedback" aria-live="polite" className="text-sm text-background/80">
              {contactStatus === "success" && "Message sent!"}
              {contactStatus === "error" && "Failed to send message."}
            </div>
          </form>

          {/* Contact info */}
          <div className="pt-12 space-y-6">
            <div className="text-background/80 text-lg font-medium">
              Get in touch with our team
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-background/70">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>hello@coververse.africa</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+234 (0) 800 CIVIC</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 border-t border-background/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-background">99.9%</div>
                <div className="text-background/70 text-sm">Uptime</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-background">24/7</div>
                <div className="text-background/70 text-sm">Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-background">SOC2</div>
                <div className="text-background/70 text-sm">Compliant</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-background">GDPR</div>
                <div className="text-background/70 text-sm">Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;