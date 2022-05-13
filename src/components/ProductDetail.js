import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

//Context
import { ProductsContext } from "../context/ProductContextProvider";

const ProductDetail = (props) => {
  const params = useParams();
  const id = params.id;
  const data = useContext(ProductsContext);
  const product = data[id-1];
  const {title, price, description, category, image} = product;

  return (
    <div>
      <img src={image} alt="product" />
      <div>
          <p>{title}</p>
          <p>{description}</p>
          <p><span>category: </span>{category}</p>
          <div>
              <span>{price} $</span>
              <Link to='/'>back to shop</Link>
          </div>
      </div>
    </div>
  );
};

export default ProductDetail;
