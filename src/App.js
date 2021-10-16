import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import AddToCartProvider from "./store/addToCardProvider";
import CartContext from "./store/cart-context";

function App(props) {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const closeCartHandler = () => {
    setShowCart(false);
  };

  return (
    <AddToCartProvider>
      <CartContext.Provider
        value={{
          onShowCart: showCartHandler,
          onCloseCart: closeCartHandler,
        }}
      >
        {showCart && <Cart onCloseCart={closeCartHandler} />}
        <Header />
        <Meals />
      </CartContext.Provider>
    </AddToCartProvider>
  );
}

export default App;
