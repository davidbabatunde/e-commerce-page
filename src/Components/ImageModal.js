import React from "react";
import "./ImageModal.scss";
import { useState } from "react";
import prod1 from "../images/image-product-1.jpg";
import prod2 from "../images/image-product-2.jpg";
import prod3 from "../images/image-product-3.jpg";
import prod4 from "../images/image-product-4.jpg";
import inext from "../images/icon-next.svg";
import iprevious from "../images/icon-previous.svg";
import iclose from "../images/icon-close.svg";

function ImageModal({ setimageModal }) {
  var [image, setImage] = useState(prod1);
  const bbox1 = () => {
    image = prod1;
    document.getElementById("iprod1").classList.add("active");
    document.getElementById("iprod2").classList.remove("active");
    document.getElementById("iprod3").classList.remove("active");
    document.getElementById("iprod4").classList.remove("active");
  };
  const bbox2 = () => {
    image = prod2;
    document.getElementById("iprod1").classList.remove("active");
    document.getElementById("iprod2").classList.add("active");
    document.getElementById("iprod3").classList.remove("active");
    document.getElementById("iprod4").classList.remove("active");
  };
  const bbox3 = () => {
    image = prod3;
    document.getElementById("iprod1").classList.remove("active");
    document.getElementById("iprod2").classList.remove("active");
    document.getElementById("iprod3").classList.add("active");
    document.getElementById("iprod4").classList.remove("active");
  };
  const bbox4 = () => {
    image = prod4;
    document.getElementById("iprod1").classList.remove("active");
    document.getElementById("iprod2").classList.remove("active");
    document.getElementById("iprod3").classList.remove("active");
    document.getElementById("iprod4").classList.add("active");
  };

  return (
    <div id="background">
      <div id="imageModal">
        <img
          className="kulosa"
          src={iclose}
          onClick={() => setimageModal(false)}
          alt="close"
        />
        <img className="main" src={image} alt="product" />
        <img
          className="back"
          onClick={() => {
            image === prod1
              ? bbox4()
              : image === prod4
              ? bbox3()
              : image === prod3
              ? bbox2()
              : bbox1();

            return setImage(image);
          }}
          src={iprevious}
          alt="previous"
        />
        <img
          className="front"
          onClick={() => {
            image === prod1
              ? bbox2()
              : image === prod2
              ? bbox3()
              : image === prod3
              ? bbox4()
              : bbox1();
            return setImage(image);
          }}
          src={inext}
          alt="next"
        />
      </div>
      <div id="images">
        <img
          className="wtf active"
          id="iprod1"
          src={prod1}
          onClick={() => {
            document.getElementById("iprod1").classList.add("active");
            document.getElementById("iprod2").classList.remove("active");
            document.getElementById("iprod3").classList.remove("active");
            document.getElementById("iprod4").classList.remove("active");
            setImage(prod1);
          }}
          alt="product"
        />
        <img
          className="wtf"
          id="iprod2"
          src={prod2}
          onClick={() => {
            document.getElementById("iprod1").classList.remove("active");
            document.getElementById("iprod2").classList.add("active");
            document.getElementById("iprod3").classList.remove("active");
            document.getElementById("iprod4").classList.remove("active");
            setImage(prod2);
          }}
          alt="product"
        />
        <img
          className="wtf"
          id="iprod3"
          src={prod3}
          onClick={() => {
            document.getElementById("iprod1").classList.remove("active");
            document.getElementById("iprod2").classList.remove("active");
            document.getElementById("iprod3").classList.add("active");
            document.getElementById("iprod4").classList.remove("active");
            setImage(prod3);
          }}
          alt="product"
        />
        <img
          className="wtf"
          id="iprod4"
          src={prod4}
          onClick={() => {
            document.getElementById("iprod1").classList.remove("active");
            document.getElementById("iprod2").classList.remove("active");
            document.getElementById("iprod3").classList.remove("active");
            document.getElementById("iprod4").classList.add("active");
            setImage(prod4);
          }}
          alt="product"
        />
      </div>
    </div>
  );
}

export default ImageModal;
