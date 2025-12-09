import Navbar from "@/components/layout/Navbar";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import IdeaCard from "@/components/cards/IdeaCard";
import { Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIdeas } from "@/context/IdeasContext";
import { useToast } from "@/hooks/use-toast";

const MyIdeas = () => {
  const { ideas, deleteIdea } = useIdeas();
  const { toast } = useToast();
  
  // Filter ideas by current user (You = newly added ideas)
  const myIdeas = ideas.filter((idea) => idea.author === "You" || idea.author === "Alex Johnson");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <DashboardSidebar />

      <main className="ml-64 pt-20 p-8">
        <div className="max-w-4xl">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-heading font-bold text-foreground">
              My Ideas
            </h1>
            <Button variant="accent" asChild>
              <Link to="/add-idea">Add New Idea</Link>
            </Button>
          </div>

          {myIdeas.length > 0 ? (
            <div className="space-y-6">
              {myIdeas.map((idea, index) => (
                <div
                  key={idea.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <IdeaCard
                    id={idea.id}
                    title={idea.title}
                    description={idea.description}
                    author={idea.author}
                    tags={idea.tags}
                    likes={idea.likes}
                    comments={idea.comments}
                    isOwner={true}
                    onDelete={() => {
                      deleteIdea(idea.id);
                      toast({
                        title: "Deleted",
                        description: "Your idea has been deleted.",
                        variant: "destructive",
                      });
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-card rounded-2xl shadow-card p-12 text-center animate-fade-up">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-10 h-10 text-accent" />
              </div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-2">
                No ideas yet
              </h2>
              <p className="text-muted-foreground mb-6">
                Be the first one to add your creative idea!
              </p>
              <Button variant="accent" asChild>
                <Link to="/add-idea">Add Your First Idea</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default MyIdeas;