import React from "react";
import PropTypes from "prop-types";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating,hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    });
  };

  return (
    <div>
      <img className="checkoutProduct_image" src={image} alt="" />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">
          {title}
        </p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>
            {price}
          </strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating).fill().map((_, index) => <p key={index}>⭐</p>)}
        </div>
        {!hideButton && (
        <button onClick={removeFromBasket}>Remove from Basket</button>
        )}{' '}
        
      </div>
    </div>
  );
}

CheckoutProduct.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired
};

export default CheckoutProduct;
