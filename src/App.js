import imenu from "./images/icon-menu.svg";
import logo from "./images/logo.svg";
import icart from "./images/icon-cart.svg";
import iavatar from "./images/image-avatar.png";
import prod1 from "./images/image-product-1.jpg";
import inext from "./images/icon-next.svg";
import iprevious from "./images/icon-previous.svg";
import iminus from "./images/icon-minus.svg";
import iplus from "./images/icon-plus.svg";

import "./App.css";
import Modal from "./Components/Modal";
import { useState } from "react";

function App() {
  const [modalOpen, setmodalOpen] = useState(false);

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
          <img src={icart} alt="cart" />
          <img src={iavatar} alt="profile" />
        </span>
      </div>
      <div id="hero">
        <img className="hero" src={prod1} alt="prod1" />
        <img className="prev" src={iprevious} alt="previous" />
        <img className="next" src={inext} alt="next" />
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
          <img src={iminus} alt="minus" />
          <p>0</p>
          <img src={iplus} alt="plus" />
        </div>
        <div id="mainButton">
          <img className="cartImg" src={icart} alt="cart" />
          <p>Add to cart</p>
        </div>
        {modalOpen && <Modal closeModal={setmodalOpen} />}
      </div>
    </div>
  );
}

export default App;
