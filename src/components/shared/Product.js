import React from "react";
import { Link } from "react-router-dom";
import { shorten } from "../../helper/functions";
const Product = ({productData}) => {
  return (
    <div>
      <img src={productData.image} alt="product" style={{width:'200px'}}/>
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price}</p>

      <div>
        <Link to={`/products/${productData.id}`} >Detail</Link>
        <div>
          <button>add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
