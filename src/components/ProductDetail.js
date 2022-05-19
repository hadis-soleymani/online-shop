import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import styles from '../styles/detail.module.scss'
//Context
import { ProductsContext } from "../context/ProductContextProvider";

const ProductDetail = (props) => {
  const params = useParams();
  const id = params.id;
  const data = useContext(ProductsContext);
  const product = data[id-1];
  const {title, price, description, category, image} = product;

  return (
    <div className={styles.container}>
      <img src={image} alt="product" />
      <div className={styles.detail}>
          <p>{title}</p>
          <p>{description}</p>
          <p><span>category: </span>{category}</p>
          <div>
              <span>{price} $</span>
              <br/>
              <button ><Link to="/">back to shop</Link></button>
          </div>
      </div>
    </div>
  );
};

export default ProductDetail;
