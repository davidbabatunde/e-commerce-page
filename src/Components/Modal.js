import React from "react";
import close from "../images/icon-close.svg";
import "../App.css";

function Modal({ closeModal }) {
  return (
    <div className="modalBack">
      <div className="modal">
        <img
          className="closeBtn"
          src={close}
          onClick={() => {
            closeModal(false);
          }}
          alt="close"
        />
        <ul className="menu-list">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Modal;
