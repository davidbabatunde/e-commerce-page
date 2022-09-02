import React from "react";
import "./Order.css";

function Order({ number }) {
  return <p className="alert">{number} items added to cart</p>;
}

export default Order;
