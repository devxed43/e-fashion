import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const navigate = useNavigate();

  const goToCheckoutHandler = () => navigate("/checkout");

  return (
    <div
      style={{
        height: "400px",
        width: "300px",
        border: "1px solid black",
        position: "absolute",
        right: "10px",
        top: "100px",
        background: "whitesmoke",
        padding: "2rem",
        color: "black",
        cursor: "pointer",
        display: "flex",
        flexFlow: "column",
        textAlign: "center",
      }}
    >
      <p>Cart Dropdown Window will retain the cart items</p>
      <button onClick={goToCheckoutHandler}>Checkout</button>
    </div>
  );
};

export default CartDropdown;
