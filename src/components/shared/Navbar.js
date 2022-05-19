import React, { useContext } from "react";
import { Link } from "react-router-dom";
//Style
import styles from '../../styles/navbar.module.scss'
//Context
import { CardContext } from "../../context/CardContextProvider";
//Icon
import shop from "../../assets/icons/shop.svg";


const Navbar = () => {
  const { state } = useContext(CardContext);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
      
        <Link to="/products">Product</Link>
        <div>
          <Link to="/cart">
            <img src={shop} alt="shop" />
          </Link>
          <span>{state.itemsCounter}</span>
        </div>
        
      </div>
      </div>
  );
};

export default Navbar;
