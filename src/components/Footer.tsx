import { MapPin, Mail, Phone, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "API", href: "#api" },
      { name: "Documentation", href: "#docs" },
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Blog", href: "#blog" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" },
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Contact Us", href: "#contact" },
      { name: "Status", href: "#status" },
      { name: "Community", href: "#community" },
    ],
    legal: [
      { name: "Privacy", href: "#privacy" },
      { name: "Terms", href: "#terms" },
      { name: "Security", href: "#security" },
      { name: "Compliance", href: "#compliance" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/cover-verse-b5b035377?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BCSVofHkISIOlZ%2BdwUdtRFQ%3D%3D " },
    { name: "GitHub", icon: Github, href: "https://github.com/DevWithBright/coververse#" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company info */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-civic rounded-lg flex items-center justify-center">
                <img
                  src="/coververse-hero.png" // Change to "/favicon.png" or your favicon path if needed
                  alt="Logo"
                  className="w-6 h-6"
                />
              </div>
              <span className="text-xl font-bold">CoreVerse</span>
            </div>
            <div className="text-background/70 text-sm font-medium mt-1">
              The smart civic OS for Africa
            </div>
            <p className="text-background/80 leading-relaxed max-w-md">
              CoreVerse transforms how African cities engage with citizens, manage services, and build stronger communities.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="w-4 h-4" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <Mail className="w-4 h-4" />
                <span>officialcoververse@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <Phone className="w-4 h-4" />
                <span>+234 08068620343</span>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-background/10 hover:bg-gradient-civic rounded-lg flex items-center justify-center transition-smooth group"
                >
                  <social.icon className="w-5 h-5 text-background/70 group-hover:text-background" />
                </a>
              ))}
            </div>
          </div>

          {/* Links sections */}
          <div className="space-y-6">
            <h3 className="font-semibold text-background">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-background transition-smooth">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold text-background">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-background transition-smooth">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold text-background">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-background transition-smooth">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-background/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-background/70">
            © 2025 CoverVerse. All rights reserved.
          </div>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-background/70 hover:text-background transition-smooth text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;