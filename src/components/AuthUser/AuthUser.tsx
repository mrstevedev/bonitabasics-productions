import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { CartContext, TCartContext } from "@/context/CartContext";
import { CouponContext, TCouponContext } from "@/context/CouponContext";

import NavDropdown from "react-bootstrap/NavDropdown";
import { logout } from "@/services/Api";

export default function AuthUser({ user, setUser }) {
  const router = useRouter();

  const [_, setCartCount] = useState(0);

  const { cart, setCart } = useContext<TCartContext>(CartContext);
  const { setCoupon } = useContext<TCouponContext>(CouponContext);

  useEffect(() => {
    const count =
      null != cart && Object.keys(cart).length ? cart.totalProductsCount : 0;
    setCartCount(count);
  }, [cart]);

  const handleNavigateProfile = () => {
    router.push("/account");
  };

  const handleLogout = async () => {
    const res = await logout();
    if (res.data) {
      setUser(null);
      setCart(null);
      setCartCount(0);
      setCoupon(null);
      localStorage.removeItem("bbp_user");
      localStorage.removeItem("bbp_product");
      router.push("/");
    }
  };
  return (
    <NavDropdown data-testid="auth-user" title={user.userNiceName}>
      <NavDropdown.Item onClick={handleNavigateProfile}>
        Account
      </NavDropdown.Item>
      <NavDropdown.Item href="#" onClick={handleLogout}>
        Log out
      </NavDropdown.Item>
    </NavDropdown>
  );
}
