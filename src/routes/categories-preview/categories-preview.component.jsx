import { Fragment, useContext } from "react";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import { CategoriesContext } from "../../contexts/categories.context";

const CategoriesPreview = () => {
  // imports products,
  //  maps over them,
  // passes it onto Category Preview
  // Category Preview Filters and Maps to Product Card
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    // mapping over an object
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
