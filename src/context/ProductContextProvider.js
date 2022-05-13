import React, { useEffect, useState, createContext } from "react";

//Api
import { getProducts } from "../services/api";
import { data } from "../helper/Data";
export const ProductsContext = createContext();
const ProductContextProvider = ({ children }) => {

  return (
    <ProductsContext.Provider value={data}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductContextProvider;



// import React, { useEffect, useState, createContext } from "react";

// //Api
// import { getProducts } from "../services/api";

// export const ProductsContext = createContext();
// const ProductContextProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchApi = async () => {
//       setProducts(await getProducts());
//     };
//     fetchApi();
//   }, []);

//   return (
//     <ProductsContext.Provider value={products}>
//       {children}
//     </ProductsContext.Provider>
//   );
// };

// export default ProductContextProvider;
