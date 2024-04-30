import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  return (
    <div>
      <ShoppingSvg
        style={{
          border: "1px solid white",
          width: "30px",
          height: "30px",
        }}
      />
    </div>
  );
};

export default CartIcon;
