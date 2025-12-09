import { createContext, useContext, useState, ReactNode } from "react";
import { Idea, mockIdeas } from "@/data/mockIdeas";

interface IdeasContextType {
  ideas: Idea[];
  addIdea: (idea: Omit<Idea, "id" | "likes" | "comments" | "createdAt">) => void;
  deleteIdea: (id: string) => void;
  likeIdea: (id: string) => void;
}

const IdeasContext = createContext<IdeasContextType | undefined>(undefined);

export const IdeasProvider = ({ children }: { children: ReactNode }) => {
  const [ideas, setIdeas] = useState<Idea[]>(mockIdeas);

  const addIdea = (newIdea: Omit<Idea, "id" | "likes" | "comments" | "createdAt">) => {
    const idea: Idea = {
      ...newIdea,
      id: Date.now().toString(),
      likes: 0,
      comments: 0,
      createdAt: new Date().toISOString().split("T")[0],
    };
    setIdeas((prev) => [idea, ...prev]);
  };

  const deleteIdea = (id: string) => {
    setIdeas((prev) => prev.filter((idea) => idea.id !== id));
  };

  const likeIdea = (id: string) => {
    setIdeas((prev) =>
      prev.map((idea) =>
        idea.id === id ? { ...idea, likes: idea.likes + 1 } : idea
      )
    );
  };

  return (
    <IdeasContext.Provider value={{ ideas, addIdea, deleteIdea, likeIdea }}>
      {children}
    </IdeasContext.Provider>
  );
};

export const useIdeas = () => {
  const context = useContext(IdeasContext);
  if (!context) {
    throw new Error("useIdeas must be used within an IdeasProvider");
  }
  return context;
};