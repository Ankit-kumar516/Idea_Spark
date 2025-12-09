import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import IdeaCard from "@/components/cards/IdeaCard";
import { categories } from "@/data/mockIdeas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, TrendingUp, Users, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useIdeas } from "@/context/IdeasContext";

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { ideas, likeIdea, deleteIdea } = useIdeas();
  const { toast } = useToast();

  const filteredIdeas = ideas.filter((idea) => {
    const matchesCategory = selectedCategory === "All" || idea.category === selectedCategory;
    const matchesSearch =
      idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      idea.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      idea.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleLike = (id: string) => {
    likeIdea(id);
    toast({
      title: "Liked!",
      description: "You liked this idea.",
    });
  };

  const handleDelete = (id: string) => {
    deleteIdea(id);
    toast({
      title: "Deleted",
      description: "Your idea has been deleted.",
      variant: "destructive",
    });
  };

  const topContributors = [
    { name: "Sarah Chen", ideas: 12 },
    { name: "Alex Johnson", ideas: 9 },
    { name: "Mike Williams", ideas: 7 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="flex pt-16">
        {/* Sidebar - Hidden on mobile */}
        <div className="hidden lg:block">
          <DashboardSidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-heading font-bold text-3xl text-foreground mb-2">
              Explore Ideas
            </h1>
            <p className="text-muted-foreground">
              Discover innovative ideas from fellow students
            </p>
          </div>

          <div className="flex flex-col xl:flex-row gap-6">
            {/* Ideas Section */}
            <div className="flex-1">
              {/* Search & Filter */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Search ideas, tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-12 rounded-xl border-border/50 focus:border-primary"
                  />
                </div>
                <Button variant="outline" size="lg" className="gap-2">
                  <Filter className="h-5 w-5" />
                  Filters
                </Button>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200",
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-card text-muted-foreground hover:bg-secondary hover:text-foreground border border-border/50"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Ideas Grid */}
              {filteredIdeas.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredIdeas.map((idea, index) => (
                    <div
                      key={idea.id}
                      className="animate-fade-up"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <IdeaCard
                        {...idea}
                        isOwner={idea.author === "Alex Johnson"}
                        onLike={() => handleLike(idea.id)}
                        onComment={() => {
                          toast({
                            title: "Comments",
                            description: "Comment feature coming soon!",
                          });
                        }}
                        onEdit={() => {
                          toast({
                            title: "Edit",
                            description: "Redirecting to edit page...",
                          });
                        }}
                        onDelete={() => handleDelete(idea.id)}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-card rounded-2xl border border-border/50">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                    No ideas found
                  </h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filters
                  </p>
                </div>
              )}
            </div>

            {/* Right Sidebar */}
            <aside className="xl:w-80 space-y-6">
              {/* Trending Ideas */}
              <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-card">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  <h3 className="font-heading font-semibold text-foreground">Trending Ideas</h3>
                </div>
                <ul className="space-y-3">
                  {ideas.slice(0, 3).map((idea, index) => (
                    <li
                      key={idea.id}
                      className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
                    >
                      <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-sm font-semibold text-primary">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-medium text-foreground text-sm line-clamp-1">
                          {idea.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {idea.likes} likes
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Top Contributors */}
              <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-card">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="h-5 w-5 text-warning" />
                  <h3 className="font-heading font-semibold text-foreground">Top Contributors</h3>
                </div>
                <ul className="space-y-3">
                  {topContributors.map((contributor, index) => (
                    <li
                      key={contributor.name}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground text-sm">
                          {contributor.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {contributor.ideas} ideas shared
                        </p>
                      </div>
                      {index === 0 && (
                        <span className="text-lg">🏆</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
