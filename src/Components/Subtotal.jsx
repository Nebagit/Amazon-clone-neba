import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  // const history = useHistory();
  const navigate = useNavigate();

  const goToPayment = () => {
    navigate("/payment"); // Replace '/payment' with the actual route/path to your payment component
  };

  const getBasketTotal = basket => {
    if (basket) {
      return basket.reduce((amount, item) => item.price + amount, 0);
    }
    return 0;
  };

  return <div className="subtotal">
      <CurrencyFormat renderText={value => <div>
            <p>
              Subtotal ({basket.length} item): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>} decimalScale={2} value={getBasketTotal(basket)} displayType={"text"} thousandSeparator={true} prefix={"$"} />
      <button onClick={goToPayment}>Proceed to checkout</button>
    </div>;
}
export default Subtotal;

