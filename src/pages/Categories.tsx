import CategoryCard from "@/components/CategoryCard";
import { Blocks, Heart, Car, GraduationCap, Baby, PuzzleIcon, Swords, Music } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      name: "Building & Blocks",
      icon: Blocks,
      count: 45,
      color: "bg-gradient-primary text-primary-foreground",
      link: "/shop?category=building"
    },
    {
      name: "Plush Toys",
      icon: Heart,
      count: 38,
      color: "bg-gradient-secondary text-secondary-foreground",
      link: "/shop?category=plush"
    },
    {
      name: "Vehicles & RC",
      icon: Car,
      count: 32,
      color: "bg-gradient-accent text-accent-foreground",
      link: "/shop?category=vehicles"
    },
    {
      name: "Educational",
      icon: GraduationCap,
      count: 28,
      color: "bg-gradient-primary text-primary-foreground",
      link: "/shop?category=educational"
    },
    {
      name: "Dolls & Figures",
      icon: Baby,
      count: 42,
      color: "bg-gradient-secondary text-secondary-foreground",
      link: "/shop?category=dolls"
    },
    {
      name: "Puzzles & Games",
      icon: PuzzleIcon,
      count: 36,
      color: "bg-gradient-accent text-accent-foreground",
      link: "/shop?category=puzzles"
    },
    {
      name: "Action Figures",
      icon: Swords,
      count: 30,
      color: "bg-gradient-primary text-primary-foreground",
      link: "/shop?category=action"
    },
    {
      name: "Musical Toys",
      icon: Music,
      count: 24,
      color: "bg-gradient-secondary text-secondary-foreground",
      link: "/shop?category=musical"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-primary-foreground mb-4">
            Browse by Category
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Find the perfect toy by exploring our carefully curated categories
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>
      </div>

      {/* Featured Categories Banner */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black mb-2">Why Shop by Category?</h2>
            <p className="text-muted-foreground">Find exactly what you're looking for, faster!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-card rounded-2xl border-2 shadow-soft">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold mb-2">Quick Discovery</h3>
              <p className="text-sm text-muted-foreground">
                Navigate directly to what interests your child most
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-2xl border-2 shadow-soft">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="font-bold mb-2">Age Appropriate</h3>
              <p className="text-sm text-muted-foreground">
                Each category shows suitable age ranges
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-2xl border-2 shadow-soft">
              <div className="text-4xl mb-3">🎁</div>
              <h3 className="font-bold mb-2">Gift Ideas</h3>
              <p className="text-sm text-muted-foreground">
                Perfect for finding the ideal present
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
