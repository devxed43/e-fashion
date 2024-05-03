import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addProductToCart } = useContext(CartContext);

  const addProductItem = () => addProductToCart(product);

  return (
    <div className="product-card">
        <p>product card</p>
      <img src={imageUrl} alt={`${name}`} />
      <div>
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <button onClick={addProductItem}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
