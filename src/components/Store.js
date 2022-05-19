import React, { useContext } from "react";
import styles from "../styles/product.module.scss";
import Product from "./shared/Product";

//Contex
import { ProductsContext } from "../context/ProductContextProvider";

const Store = () => {
  const products = useContext(ProductsContext);
  return (
   
    <div className={styles.products}>
      {products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
   
  );
};

export default Store;
