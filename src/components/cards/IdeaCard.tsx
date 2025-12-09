import { Heart, MessageCircle, Edit, Trash2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface IdeaCardProps {
  id: string;
  title: string;
  description: string;
  author: string;
  tags: string[];
  likes: number;
  comments: number;
  isOwner?: boolean;
  onLike?: () => void;
  onComment?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  className?: string;
}

const IdeaCard = ({
  id,
  title,
  description,
  author,
  tags,
  likes,
  comments,
  isOwner = false,
  onLike,
  onComment,
  onEdit,
  onDelete,
  className,
}: IdeaCardProps) => {
  return (
    <div
      className={cn(
        "bg-card rounded-2xl p-6 shadow-card hover-lift border border-border/50",
        className
      )}
    >
      {/* Author */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <User className="h-5 w-5 text-primary" />
        </div>
        <span className="font-heading font-semibold text-foreground">{author}</span>
      </div>

      {/* Content */}
      <h3 className="font-heading font-bold text-xl text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="bg-info/10 text-info hover:bg-info/20 font-medium"
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-border/50">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onLike}
            className="text-info hover:text-info hover:bg-info/10 gap-1.5"
          >
            <Heart className="h-4 w-4" />
            <span>{likes}</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onComment}
            className="text-muted-foreground hover:text-foreground gap-1.5"
          >
            <MessageCircle className="h-4 w-4" />
            <span>{comments}</span>
          </Button>
        </div>

        {isOwner && (
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={onEdit}
              className="text-warning hover:text-warning hover:bg-warning/10 h-8 w-8"
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onDelete}
              className="text-destructive hover:text-destructive hover:bg-destructive/10 h-8 w-8"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default IdeaCard;
