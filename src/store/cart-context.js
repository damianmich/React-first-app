import React from "react";

const CartContext = React.createContext({
  onShowCart: true,
  onCloseCart: true,
});

export default CartContext;
