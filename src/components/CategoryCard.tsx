import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  name: string;
  icon: LucideIcon;
  count: number;
  color: string;
  link: string;
}

const CategoryCard = ({ name, icon: Icon, count, color, link }: CategoryCardProps) => {
  return (
    <Link to={link}>
      <Card className="group overflow-hidden border-2 hover:border-primary hover:shadow-glow transition-all duration-300 cursor-pointer">
        <CardContent className="p-6">
          <div
            className={`inline-flex p-4 rounded-2xl mb-4 transition-transform duration-300 group-hover:scale-110 ${color}`}
          >
            <Icon className="h-8 w-8" />
          </div>
          <h3 className="font-bold text-lg mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground">{count} Products</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
