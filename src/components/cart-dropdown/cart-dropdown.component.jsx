import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const navigate = useNavigate();

  const goToCheckoutHandler = () => navigate("/checkout");

  return (
    <div
      style={{
        height: "300px",
        width: "300px",
        border: "1px solid black",
        position: "absolute",
        right: "10px",
        top: "130px",
        background: "blue",
        color: "black",
        cursor: "pointer",
      }}
    >
      <p>Cart Dropdown Window will retain the cart items</p>
      <button onClick={goToCheckoutHandler}>Checkout</button>
    </div>
  );
};

export default CartDropdown;
