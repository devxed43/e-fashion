import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span>{title.toUpperCase()}</span>
        <div className="preview">
          {
            // filter/keep everything up to 4
            products
              .filter((_, idx) => idx < 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
          }
        </div>
      </h2>
    </div>
  );
};

export default CategoryPreview;
