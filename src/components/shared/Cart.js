import React, { useContext } from "react";
//Context
import { CardContext } from "../../context/CardContextProvider";
//Function
import { shorten } from "../../helper/functions";
// Icons
import trash from "../../assets/icons/trash.svg";
import styles from '../../styles/card.module.scss'

const Cart = (props) => {
  const { title, price, quantity, image } = props.data;
  const { dispatch } = useContext(CardContext);

  return (
    <div className={styles.container}>
      <img src={image} alt="product" />
      <div>
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
      </div>
      <div>
        <span>{quantity}</span>
      </div>
      <div>
        {quantity > 1 ? (
          <button
          className={styles.increase_decrease_button}
            onClick={() => dispatch({ type: "DECREASE", payload: props.data })}
          >
            -
          </button>
        ) : (
          <button
          className={styles.increase_decrease_button}
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: props.data })
            }
          >
            <img src={trash} alt="trash" style={{ width: "20px" }} />
          </button>
        )}

        <button
        className={styles.increase_decrease_button}
          onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Cart;
