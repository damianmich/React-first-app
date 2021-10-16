import React, { useContext } from "react";
import AddToCart from "../../store/addToCart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(AddToCart);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{price}</p>
      </div>
      <div>
        <MealItemForm
          onAddToCart={addToCartHandler}
          mealName={props.name}
          mealPrice={price}
          mealId={props.id}
        />
      </div>
    </li>
  );
};

export default MealItem;
