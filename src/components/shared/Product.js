import React, { useContext } from "react";
import { Link } from "react-router-dom";

import styles from '../../styles/product.module.scss'
//Function
import { shorten, isInCard, quantityCount } from "../../helper/functions";

//Context
import { CardContext } from "../../context/CardContextProvider";
//Icon
import trash from "../../assets/icons/trash.svg";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CardContext);
  return (
    <div className={styles.product}>
      <img src={productData.image} alt="product"  />
      <div>
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price} $</p>

      <div>
        <Link to={`/products/${productData.id}`}>Detail</Link>
        <div>
          {quantityCount(state, productData.id) > 1 && (
            <button
            className={styles.increase_decrease_button}
            data-testid={`product-button-decrease-${productData.id}`}
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }
            >
              -
            </button>
          )}
          {quantityCount(state, productData.id) === 1 && (
            <button
            className={styles.increase_decrease_button}
            data-testid={`product-button-decrease-${productData.id}`}
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
            data-testid={`product-button-${productData.id}`}
            className={styles.increase_decrease_button}
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }
            >
              +
            </button>
          ) : (
            <button className={styles.add_to_card_button}
            data-testid={`product-button-${productData.id}`}
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
    </div>
  );
};

export default Product;
