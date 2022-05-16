import React, { useContext } from "react";
import { Link } from "react-router-dom";
//Function
import { shorten, isInCard, quantityCount } from "../../helper/functions";

//Context
import { CardContext } from "../../context/CardContextProvider";
//Icon
import trash from "../../assets/icons/trash.svg";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CardContext);
  return (
    <div>
      <img src={productData.image} alt="product" style={{ width: "200px" }} />
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price}</p>

      <div>
        <Link to={`/products/${productData.id}`}>Detail</Link>
        <div>
          {quantityCount(state, productData.id) > 1 && (
            <button
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }
            >
              -
            </button>
          )}
          {quantityCount(state, productData.id) === 1 && (
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }
            >
              <img src={trash} alt="trash" style={{ width: "20px" }} />
            </button>
          )}
          {quantityCount(state, productData.id) > 0 && (
            <span>{quantityCount(state, productData.id)}</span>
          )}

          {isInCard(state, productData.id) ? (
            <button
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }
            >
              +
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }
            >
              add to card
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
