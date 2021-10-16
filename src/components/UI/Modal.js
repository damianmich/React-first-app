import React, { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import CartContext from "../../store/cart-context";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseCart}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  const ctx = useContext(CartContext);

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseCart={ctx.onCloseCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
