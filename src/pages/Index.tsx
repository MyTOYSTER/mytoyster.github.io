import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import { products } from "@/data/products";
import { Blocks, Heart, Car, GraduationCap, Sparkles, Shield, Truck, Award } from "lucide-react";

const Index = () => {
  const featuredProducts = products.slice(0, 8);
  
  const topCategories = [
    {
      name: "Building Blocks",
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
      name: "RC Vehicles",
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
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMTAgMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full mb-6 animate-bounce-soft">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-bold">Limited Time Sale - Up to 70% OFF!</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-primary-foreground mb-6 leading-tight">
              Welcome to
              <br />
              <span className="text-accent">Toyster!</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Discover amazing toys that inspire creativity, learning, and endless fun for kids of all ages.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-strong">
                  Shop Now
                </Button>
              </Link>
              <Link to="/categories">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                  Browse Categories
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-gradient-primary text-primary-foreground mb-3">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-sm">Safe & Tested</h3>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-gradient-secondary text-secondary-foreground mb-3">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-sm">Free Shipping</h3>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-gradient-accent text-accent-foreground mb-3">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-sm">Quality Guarantee</h3>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-gradient-primary text-primary-foreground mb-3">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-sm">Great Prices</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Top Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Shop by Category</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find the perfect toy for every child
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {topCategories.map((category) => (
              <CategoryCard key={category.name} {...category} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/categories">
              <Button variant="outline" size="lg" className="border-2">
                View All Categories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Featured Toys</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Check out our handpicked selection of amazing toys
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/shop">
              <Button size="lg" className="bg-gradient-primary text-lg px-8 py-6 shadow-medium">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-secondary-foreground mb-6">
            Join Our Toy Club!
          </h2>
          <p className="text-lg text-secondary-foreground/90 max-w-2xl mx-auto mb-8">
            Subscribe to get exclusive deals, new arrival alerts, and special birthday discounts for your kids!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex h-12 w-full rounded-lg border bg-white px-4 text-sm"
            />
            <Button size="lg" className="bg-white text-secondary hover:bg-white/90 whitespace-nowrap px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
