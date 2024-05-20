import { Button } from "@/components/ui/button";
import { IMAGES } from "@/constants/images";
import { useCart } from "@/context/cart-context";
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi2";
import { Link } from "react-router-dom";

function Header() {
  const [state] = useCart();

  return (
    <header className="flex justify-between items-center pt-2 pb-3 border-b">
      <Link
        to="/products"
        className="flex items-center gap-3 text-lg font-semibold"
      >
        <img src={IMAGES.template.header.logo} alt="logo" className="w-7 h-7" />
        <span>Shop</span>
      </Link>
      <div className="flex items-center md:gap-4">
        <Button asChild variant="outline" className="flex items-center gap-1.5">
          <Link to="/checkout">
            <HiOutlineShoppingBag className="text-xl" />
            <span className="text-xs">{state.counter}</span>
          </Link>
        </Button>
        <Button asChild variant="link" className="flex items-center gap-1.5">
          <Link to="/products">
            <HiOutlineUser className="text-xl" />
            Sign in
          </Link>
        </Button>
      </div>
    </header>
  );
}

export default Header;
