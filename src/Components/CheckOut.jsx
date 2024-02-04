import React from "react";
import "../Components/CheckOut.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function CheckOut() {
  const [{ basket }, dispatch] = useStateValue();
  return <div className="checkout">
      <div className="checkout_left">
        <img className="checkout-ad" src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/G/01/Toys-and-Games/Deals_Mobile_HQP._QL95_SY80_.jpg" alt="" />
        <h3>Hello</h3>
        <h2 className="checkout_title">Your shopping Basket</h2>
        {basket.map(item =>
          <CheckoutProduct
            key={item.id} // Add a unique key prop for each item in the map
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        )}
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>;
}

export default CheckOut;
