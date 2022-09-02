import imenu from "./images/icon-menu.svg";
import logo from "./images/logo.svg";
import icart from "./images/icon-cart.svg";
import iavatar from "./images/image-avatar.png";
import prod1 from "./images/image-product-1.jpg";
import prod2 from "./images/image-product-2.jpg";
import prod3 from "./images/image-product-3.jpg";
import prod4 from "./images/image-product-4.jpg";

import inext from "./images/icon-next.svg";
import iprevious from "./images/icon-previous.svg";
import iminus from "./images/icon-minus.svg";
import iplus from "./images/icon-plus.svg";

import "./App.css";
import Modal from "./Components/Modal";
import Cart from "./Components/Cart";

import { useRef, useState } from "react";
import Order from "./Components/Order";

function App() {
  const [modalOpen, setmodalOpen] = useState(false);
  const [cartOpen, setcartOpen] = useState(false);
  var [count, setCount] = useState(0);
  var [image, setImage] = useState(prod1);
  const number = useRef(null);

  const [cartEmpty, setcartEmpty] = useState(true);
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  return (
    <div id="App">
      <div id="navbar">
        <span className="gap-1">
          <img
            className="menuBtn"
            src={imenu}
            alt="menu"
            onClick={() => setmodalOpen(true)}
          />
          <img src={logo} alt="logo" />
        </span>
        <span className="gap-1">
          <img
            className="cartBtn"
            src={icart}
            onClick={() => {
              cartOpen ? setcartOpen(false) : setcartOpen(true);
            }}
            alt="cart"
          />
          <img className="profile" src={iavatar} alt="profile" />
        </span>
      </div>
      <div id="hero">
        <img className="hero" src={image} alt="product" />
        <img
          className="prev"
          onClick={() => {
            image === prod1
              ? (image = prod4)
              : image === prod4
              ? (image = prod3)
              : image === prod3
              ? (image = prod2)
              : (image = prod1);
            return setImage(image);
          }}
          src={iprevious}
          alt="previous"
        />
        <img
          className="next"
          onClick={() => {
            image === prod1
              ? (image = prod2)
              : image === prod2
              ? (image = prod3)
              : image === prod3
              ? (image = prod4)
              : (image = prod1);
            return setImage(image);
          }}
          src={inext}
          alt="next"
        />
      </div>
      <div id="content">
        <p className="company">SNEAKER COMPANY</p>
        <h1 className="sneaker">Fall Limited Edition Sneakers</h1>
        <p className="description">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div id="cost">
          <span className="gap-1">
            <h1>$125.00</h1>
            <p className="discount">50%</p>
          </span>
          <p className="strike">$250.00</p>
        </div>
        <div id="count">
          <img
            src={iminus}
            onClick={() => (count === 0 ? setCount(0) : setCount(--count))}
            alt="minus"
          />
          <p>{count}</p>
          <img src={iplus} onClick={() => setCount(++count)} alt="plus" />
        </div>
        <div
          id="mainButton"
          onClick={() => {
            count === 0 ? setcartEmpty(true) : setcartEmpty(false);
            number.current = count;
            setIsAlertVisible(true);
            setTimeout(() => {
              setIsAlertVisible(false);
            }, 2000);
            setCount(0);
          }}
        >
          <img className="cartImg" src={icart} alt="cart" />
          <p>Add to cart</p>
        </div>
      </div>
      {modalOpen && <Modal closeModal={setmodalOpen} />}
      {cartOpen && (
        <Cart
          number={number.current}
          cartEmpty={cartEmpty}
          setcartEmpty={setcartEmpty}
        />
      )}
      {isAlertVisible && <Order number={number.current} />}
    </div>
  );
}

export default App;
