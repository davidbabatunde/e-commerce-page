import React from "react";
import "./Cart.css";
import thumb1 from "../images/image-product-1-thumbnail.jpg";
import idelete from "../images/icon-delete.svg";

function Cart({ number, cartEmpty, setcartEmpty }) {
  return (
    <div className="cart">
      <h3 className="title">Cart</h3>
      <div className="items">
        {cartEmpty ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="single">
              <img className="thumb1" src={thumb1} alt="thumb1" />
              <span className="c-gap-1">
                <p className="name">Autumn Limited Edition Sneakers</p>
                <div className="cost">
                  <p className="calc">$125.00 x {number}</p>
                  <p className="total">${125 * number}</p>
                </div>
              </span>

              <img
                className="delete"
                src={idelete}
                onClick={() => setcartEmpty(true)}
                alt="delete"
              />
            </div>
            <button id="checkout">Checkout</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
