import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Lightbulb, Mail, Lock, ArrowRight } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast({
        title: "Missing Fields",
        description: "Please enter your email and password.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate login
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Welcome back! 👋",
      description: "You have successfully logged in.",
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
                Welcome Back
              </h1>
              <p className="text-muted-foreground">
                Sign in to continue to IdeaHub
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
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

              <div className="flex items-center justify-end">
                <Link
                  to="/forgot-password"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                variant="default"
                size="xl"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </Button>
            </form>

            <p className="text-center mt-6 text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="text-accent font-medium hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
