import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/data/products";

interface ProductCardProps extends Product {}

const ProductCard = (product: ProductCardProps) => {
  const { addToCart } = useCart();
  const { id, name, price, originalPrice, image, discount, badge } = product;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };
  return (
    <Card className="group overflow-hidden border-2 hover:border-primary hover:shadow-glow transition-all duration-300">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Badges */}
          {discount && (
            <div className="absolute top-2 left-2 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-bold shadow-medium">
              -{discount}%
            </div>
          )}
          {badge && (
            <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold shadow-medium">
              {badge}
            </div>
          )}

          {/* Wishlist Button */}
          <Button
            size="icon"
            variant="secondary"
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Heart className="h-4 w-4" />
          </Button>

          {/* Quick Add to Cart */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform">
            <Button 
              className="w-full rounded-none bg-gradient-primary hover:opacity-90"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>

        <div className="p-4">
          <Link to={`/product/${id}`}>
            <h3 className="font-semibold text-sm mb-2 line-clamp-2 hover:text-primary transition-colors">
              {name}
            </h3>
          </Link>
          
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
