import React from "react";
import "./Cart.css";

function Cart() {
  return (
    <div className="cart">
      <h3 className="title">Cart</h3>
      <div className="items">
        <p>Your cart is empty.</p>
      </div>
    </div>
  );
}

export default Cart;
