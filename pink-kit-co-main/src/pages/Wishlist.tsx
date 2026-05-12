import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

const Wishlist = () => {
  const { wishlist } = useShop();
  const items = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="container-tight py-12 md:py-16">
      <div className="text-center mb-12">
        <span className="text-primary text-sm font-medium">Saved for later</span>
        <h1 className="font-display text-5xl md:text-6xl font-semibold mt-2">Your wishlist</h1>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-16">
          <div className="bg-blush w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="h-8 w-8 text-primary" />
          </div>
          <p className="text-muted-foreground mb-6">No saved jerseys yet. Start tapping that little heart 🩷</p>
          <Button asChild className="rounded-full bg-gradient-primary hover:shadow-glow">
            <Link to="/shop">Discover jerseys</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {items.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
