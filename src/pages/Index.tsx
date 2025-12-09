import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Lightbulb, Users, Rocket, Sparkles } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Share Ideas",
      description: "Post your creative ideas and get feedback from fellow students.",
    },
    {
      icon: Users,
      title: "Collaborate",
      description: "Find teammates and work together on exciting projects.",
    },
    {
      icon: Rocket,
      title: "Build Together",
      description: "Turn ideas into reality with the support of your community.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-medium text-sm mb-6 animate-fade-up">
                <Sparkles className="h-4 w-4" />
                <span>Hackathon Ready Platform</span>
              </div>
              
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Turn Your{" "}
                <span className="text-primary">Ideas</span>
                <br />
                Into <span className="text-accent">Reality</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                Share, learn, and build together. A platform for students to collaborate and bring innovative ideas to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/dashboard" className="gap-2">
                    Get Started
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/dashboard">Explore Ideas</Link>
                </Button>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="flex-1 relative animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="relative w-full max-w-lg mx-auto">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
                
                {/* Main Card */}
                <div className="relative bg-card rounded-3xl p-8 shadow-hover border border-border/50">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center">
                      <Lightbulb className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">New Idea</h3>
                      <p className="text-sm text-muted-foreground">Just shared</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-4 bg-muted rounded-full w-full"></div>
                    <div className="h-4 bg-muted rounded-full w-3/4"></div>
                    <div className="h-4 bg-muted rounded-full w-1/2"></div>
                  </div>
                  
                  <div className="flex gap-2 mt-6">
                    <span className="px-3 py-1 bg-info/10 text-info text-sm rounded-full font-medium">AI</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium">Innovation</span>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 bg-card p-4 rounded-2xl shadow-card animate-bounce-subtle">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-2xl shadow-card animate-bounce-subtle" style={{ animationDelay: "0.5s" }}>
                  <Rocket className="h-8 w-8 text-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Why Choose IdeaHub?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to share ideas, connect with peers, and build amazing projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card rounded-2xl p-8 shadow-card hover-lift border border-border/50 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
                Ready to Share Your Ideas?
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
                Join our community of creative students and start building something amazing today.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/signup" className="gap-2">
                  Join Now
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
