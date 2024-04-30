import { Fragment, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCartOpen = () => setCartOpen(!cartOpen);

  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "15vh",
          cursor: "pointer",
        }}
      >
        <Link to="/">
          <h1>LOGO</h1>
        </Link>
        <Link to="shop">
          <b>Shop</b>
        </Link>
        <Link to="auth">
          <b>Sign In</b>
        </Link>
        <div onClick={toggleCartOpen}>
          <CartIcon />
        </div>
      </div>
      {cartOpen && <CartDropdown />}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
