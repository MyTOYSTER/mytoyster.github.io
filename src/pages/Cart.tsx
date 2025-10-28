import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-6">
            <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground/50" />
          </div>
          <h2 className="text-3xl font-black mb-4">Your Cart is Empty</h2>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added any toys to your cart yet. Start shopping to fill it up!
          </p>
          <Link to="/shop">
            <Button className="bg-gradient-primary text-lg px-8 py-6">
              Start Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-black text-primary-foreground">Shopping Cart</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 bg-card rounded-2xl border-2 shadow-soft">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold mb-2">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2 capitalize">{item.category}</p>
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-primary">${item.price.toFixed(2)}</span>
                      <div className="flex items-center border rounded-lg">
                        <button 
                          className="px-3 py-1 hover:bg-muted transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-4 py-1">{item.quantity}</span>
                        <button 
                          className="px-3 py-1 hover:bg-muted transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-5 w-5 text-destructive" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-card rounded-2xl border-2 shadow-medium p-6 sticky top-24">
              <h2 className="text-2xl font-black mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-bold">${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-bold text-primary">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="font-bold">${(getCartTotal() * 0.08).toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-black text-primary">
                    ${(getCartTotal() * 1.08).toFixed(2)}
                  </span>
                </div>
              </div>

              <Button className="w-full bg-gradient-primary text-lg py-6 mb-4">
                Proceed to Checkout
              </Button>

              <Link to="/shop">
                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
