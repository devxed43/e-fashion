import { createContext, useState, useEffect } from "react";

// this function is async in the utils, so we need to handle the useEffect properly
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  // products
  // map is object
  // object because we are accessing the objects keys
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // useEffect proper handling
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

// import { createContext, useState, useEffect } from "react";

// // import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";

// only need to get documents into database
// // import SHOP_DATA from "../shop-data";

// export const ProductsContext = createContext({
//   products: [],
// });

// export const ProductsProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);
// //   useEffect(() =>
// // addCollectionAndDocuments('categories', SHOP_DATA))
//   const value = { products };

//   return (
//     <ProductsContext.Provider value={value}>
//       {children}
//     </ProductsContext.Provider>
//   );
// };
