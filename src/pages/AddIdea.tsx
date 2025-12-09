import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Lightbulb, ArrowLeft, Sparkles } from "lucide-react";
import { categories } from "@/data/mockIdeas";
import { useIdeas } from "@/context/IdeasContext";

const AddIdea = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addIdea } = useIdeas();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: "",
    category: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.description.trim() || !formData.category) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Add the idea to context
    addIdea({
      title: formData.title.trim(),
      description: formData.description.trim(),
      author: "You",
      tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0),
      category: formData.category,
    });

    toast({
      title: "Idea Submitted! 🎉",
      description: "Your idea has been shared with the community.",
    });

    setIsSubmitting(false);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </button>

          {/* Form Card */}
          <div className="bg-card rounded-3xl p-8 shadow-card border border-border/50 animate-scale-in">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center">
                <Lightbulb className="h-7 w-7 text-accent-foreground" />
              </div>
              <div>
                <h1 className="font-heading font-bold text-2xl text-foreground">
                  Share Your Idea
                </h1>
                <p className="text-muted-foreground">
                  Let the community discover your innovation
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title" className="text-foreground font-medium">
                  Idea Title *
                </Label>
                <Input
                  id="title"
                  placeholder="Enter a catchy title for your idea"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="h-12 rounded-xl border-border/50 focus:border-primary"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-foreground font-medium">
                  Description *
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe your idea in detail. What problem does it solve? How does it work?"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="min-h-[150px] rounded-xl border-border/50 focus:border-primary resize-none"
                />
              </div>

              {/* Category */}
              <div className="space-y-2">
                <Label htmlFor="category" className="text-foreground font-medium">
                  Category *
                </Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    setFormData({ ...formData, category: value })
                  }
                >
                  <SelectTrigger className="h-12 rounded-xl border-border/50">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.filter((c) => c !== "All").map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Tags */}
              <div className="space-y-2">
                <Label htmlFor="tags" className="text-foreground font-medium">
                  Tags
                </Label>
                <Input
                  id="tags"
                  placeholder="e.g., AI, Mobile App, Sustainability (comma separated)"
                  value={formData.tags}
                  onChange={(e) =>
                    setFormData({ ...formData, tags: e.target.value })
                  }
                  className="h-12 rounded-xl border-border/50 focus:border-primary"
                />
                <p className="text-xs text-muted-foreground">
                  Separate tags with commas
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="accent"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5" />
                    Submit Idea
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddIdea;
