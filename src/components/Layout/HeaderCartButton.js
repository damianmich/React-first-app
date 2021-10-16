import React, { useContext, useEffect, useState } from "react";
import AddToCart from "../../store/addToCart-context";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  const addToCartCtx = useContext(AddToCart);
  const { items } = addToCartCtx;
  const [btnIsHighLight, setBtnIsHighLight] = useState(false);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighLight(true);

    const timer = setTimeout(() => {
      setBtnIsHighLight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const btnClasses = `${classes.button} ${btnIsHighLight ? classes.bump : ""}`;

  const numberOfCartItem = addToCartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={btnClasses} onClick={ctx.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}> {numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
