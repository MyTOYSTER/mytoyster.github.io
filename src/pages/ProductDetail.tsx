import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { getProductById, products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Share2, Star, Truck, Shield, ArrowLeft } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/contexts/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id || "");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link to="/shop">
          <Button>Back to Shop</Button>
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Link to="/shop" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Shop
        </Link>

        {/* Product Details */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-muted border-2 shadow-strong">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
            {product.discount && (
              <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-4 py-2 rounded-full text-sm font-bold shadow-medium">
                -{product.discount}% OFF
              </div>
            )}
            {product.badge && (
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold shadow-medium">
                {product.badge}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <h1 className="text-4xl font-black mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(128 reviews)</span>
            </div>

            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-4xl font-black text-primary">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-2xl text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {product.description}
            </p>

            <div className="bg-muted/30 rounded-2xl p-6 mb-6">
              <h3 className="font-bold mb-3">Product Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <span className="text-sm font-medium">Age Range: </span>
              <span className="text-sm text-primary font-bold">{product.ageRange}</span>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex gap-4 mb-6">
              <div className="flex items-center border-2 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-muted transition-colors"
                >
                  −
                </button>
                <span className="px-6 py-3 font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-muted transition-colors"
                >
                  +
                </button>
              </div>

              <Button
                onClick={handleAddToCart}
                className="flex-1 bg-gradient-primary text-lg py-6"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </div>

            <div className="flex gap-3 mb-8">
              <Button variant="outline" className="flex-1">
                <Heart className="mr-2 h-5 w-5" />
                Wishlist
              </Button>
              <Button variant="outline" className="flex-1">
                <Share2 className="mr-2 h-5 w-5" />
                Share
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                <Truck className="h-8 w-8 text-primary" />
                <div>
                  <div className="font-bold text-sm">Free Shipping</div>
                  <div className="text-xs text-muted-foreground">On orders over $50</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <div className="font-bold text-sm">Safe & Tested</div>
                  <div className="text-xs text-muted-foreground">Quality guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-3xl font-black mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} {...relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
