import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Shop = () => {
  const [sortBy, setSortBy] = useState("featured");
  const [filter, setFilter] = useState("all");

  const categories = [
    { value: "all", label: "All Toys" },
    { value: "building", label: "Building & Blocks" },
    { value: "plush", label: "Plush Toys" },
    { value: "vehicles", label: "Vehicles" },
    { value: "educational", label: "Educational" },
    { value: "dolls", label: "Dolls" },
    { value: "puzzles", label: "Puzzles" },
    { value: "action", label: "Action Figures" },
    { value: "musical", label: "Musical Toys" },
  ];

  const filteredProducts = filter === "all" 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-primary-foreground mb-4">
            Shop All Toys
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Discover our amazing collection of toys for all ages. Quality, fun, and learning combined!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Category:</span>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat.value}
                  variant={filter === cat.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(cat.value)}
                  className={filter === cat.value ? "bg-gradient-primary" : ""}
                >
                  {cat.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Sort by:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="name">Name: A to Z</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
