import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Lightbulb, Mail, Lock, User, ArrowRight } from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return;
    }

    if (formData.password.length < 6) {
      toast({
        title: "Weak Password",
        description: "Password must be at least 6 characters.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate signup
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Account Created! 🎉",
      description: "Welcome to IdeaHub. Let's get started!",
    });

    setIsLoading(false);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex flex-1 bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center w-full p-12">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-accent rounded-2xl">
              <Lightbulb className="h-8 w-8 text-accent-foreground" />
            </div>
            <span className="text-3xl font-heading font-bold text-primary-foreground">
              IdeaHub
            </span>
          </div>
          
          <blockquote className="max-w-md text-center">
            <p className="text-2xl font-heading font-medium text-primary-foreground mb-4">
              "Every big idea starts with a small step"
            </p>
            <p className="text-primary-foreground/70">
              Join thousands of students sharing and building ideas together.
            </p>
          </blockquote>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="flex items-center justify-center gap-2 mb-8 lg:hidden">
            <div className="p-2 bg-accent rounded-lg">
              <Lightbulb className="h-5 w-5 text-accent-foreground" />
            </div>
            <span className="text-xl font-heading font-bold text-foreground">
              IdeaHub
            </span>
          </div>

          <div className="bg-card rounded-3xl p-8 shadow-card border border-border/50 animate-scale-in">
            <div className="text-center mb-8">
              <h1 className="font-heading font-bold text-2xl text-foreground mb-2">
                Create Account
              </h1>
              <p className="text-muted-foreground">
                Join the community of innovators
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="pl-12 h-12 rounded-xl border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="pl-12 h-12 rounded-xl border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="pl-12 h-12 rounded-xl border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-foreground font-medium">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({ ...formData, confirmPassword: e.target.value })
                    }
                    className="pl-12 h-12 rounded-xl border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="accent"
                size="xl"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                    Creating account...
                  </>
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </Button>
            </form>

            <p className="text-center mt-6 text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-foreground font-medium hover:underline hover:text-primary">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
