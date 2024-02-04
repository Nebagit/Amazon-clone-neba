import React, { useState } from "react";
import "../Components/Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {

  const [{ basket }, dispatch] = useStateValue();
  console.log('this is the basket data',basket)

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    });
  };



  return (
    <div className="product">
      <div className="product_info">
        <p className="my_text">
          {title}
        </p>
        <p className="product_price">
          <small>$</small>
          <strong>
            {price}
          </strong>
        </p>
        <div className="product_rating">
          {Array(rating).fill().map((_, index) => <p key={index}>⭐</p>)}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket} className="product_button">Add to basket</button>
    </div>
  );
}

export default Product;
