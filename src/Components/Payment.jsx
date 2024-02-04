import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from 'react-stripe-elements';
// import { CardElement } from 'react-stripe-elements';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { useNavigate } from 'react-router-dom';
import axios from '../axios';
import { db } from './firebase';


function Payment() {
  const [{ basket,user }, dispatch] = useStateValue();

const navigate = useNavigate();

   const getBasketTotal = (basket) => 
   basket?.reduce((amount,item) => item.price + amount, 0);


  const stripe = useStripe();
  const elements = useElements();

  const [error,setError] =useState(null);
  const [disabled,setDisabled] = useState(true);

  const [succeeded, setSucceeded] = useState(false);
  const [processing,setProcessing] = useState('');

const [clientSecret, setClientSecret] = useState(true);



// useEffect(() => {
//   const getClientSecret = async () => {
//     try {
//       const response = await axios.post("/payments/create", {
//         total: getBasketTotal(basket) * 100,
//       });
//       setClientSecret(response.data.clientSecret);
//     } 
    
//     catch (error) {
//       console.error("Error retrieving client secret:", error);
//     }
//   };

//   getClientSecret();
// }, [basket]);

useEffect(() => {
  const getClientSecret = async () => {
    const response = await axios({
      method: "post",
      url: `/payments/create?total=${getBasketTotal(basket) * 100}`
    });
    setClientSecret(response.data.clientSecret);
  };

  getClientSecret();
}, [basket]);


  console.log("THE SECRET IS >>>",clientSecret);

const handleSubmit = async (e) => {
  e.preventDefault();
  setProcessing(true);

  const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: elements.getElement(CardElement),},
    }).then(({paymentIntent}) => {

      db.collection('users')
      .doc(user?.uid)
      .collection('orders')
      .doc(paymentIntent.id)
      .set({
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created, });



      setSucceeded(true);
      setError(null);
      setProcessing(false);

        dispatch({
          type: 'EMPTY_BASKET',
        });

      navigate('/orders');
    })
    .catch((err) =>{
      console.log(err)
    })
};


  const handlechange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '')
  };

  // const handleSubmit =async (e) => {
  //   e.preventDefault();
  //   setProcessing(true);
    
  //   const payload = await stripe.confirmCardPayment(clientSecret, {
  //       payment_method: {
  //           card: elements.getElement(CardElement),},
  //   })
  //   .then(({ paymentIntent }) => {

  //     db.collection('users')
  //     .doc(user?.uid)
  //     .collection('orders')
  //     .doc(paymentIntent.id)
  //     .set({
  //       basket: basket,
  //       amount: paymentIntent.amount,
  //       created: paymentIntent.created,
  //     })
  //       setSucceeded(true);
  //       setError(null);
  //       setProcessing(false);
  //       dispatch({
  //         type: 'EMPTY_BASKET',
  //       });

  //       navigate.replace('/orders');

  //   })

  // }
  // const handleChange = (e) => {
  //   setDisabled(e.empty);
  //   setError(e.error ? e.error.message : '');

  // }


  return (
    <div className='payment'>
      <div className='payment_container'>
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment_section">
          <div className='payment_title'>
            <h1>Delivery Address</h1>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p> 
            <p>123 React Line</p>
            <p>chicago, IL</p>
          </div>
        </div>
        <div className="payment_section">
          <div className='payment_title'>
            <h1>Review items and delivery</h1>
          </div>
          <div className='payment_items'>
            {basket.map((item) =>
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            )}
          </div>
        </div>
        <div className="payment_section">
          <div className='payment_title'>
            <h1>Payment Method</h1>
          </div>
          <div className='payment_details'>
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handlechange}/>
              <div className='payment_priceContainer'>
                <CurrencyFormat 
                renderText={(value) => <h1>Order Total: {value}</h1>}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator= {true}
                prefix={'$'}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy NOw"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;




/*
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./Stateprovider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "./axios";
import { db } from "./firebase";

function Payment() {
	const [{ basket, user }, dispatch] = useStateValue();

	const navigate = useNavigate();

	const getBasketTotal = (basket) =>
		basket?.reduce((amount, item) => item.price + amount, 0);

	const stripe = useStripe();
	const element = useElements();

	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);

	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState("");

	const [clientSecret, setClientSecret] = useState(true);

	useEffect(() => {
		const getClientSecret = async () => {
			const response = await axios({
				method: "post",
				url: ./payments/create?total=${getBasketTotal(basket) * 100}
			});
			setClientSecret(response.data.clientSecret);
		};

		getClientSecret();
	}, [basket]);

	// console.log("THE SECRET IS >>>", clientSecret);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setProcessing(true);

		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: element.getElement(CardElement)
				}
			})
			.then(({ paymentIntent }) => {
				// PaymentIntent = payment; confirmation
				db.collection("users")
					.doc(user?.uid)
					.collection("orders")
					.doc(paymentIntent.id)
					.set({
						basket: basket,
						amount: paymentIntent.amount,
						created: paymentIntent.created
					});

				setSucceeded(true);
				setError(null);
				setProcessing(false);

				dispatch({
					type: "EMPTY_BASKET"
				});

				navigate("/orders");
			});
	};

	const handleChange = (event) => {
		setDisabled(event.empty);
		setError(event.error ? event.error.message : "");
	};

	return (
		<div className="payment">
			<div className="payment__container">
				<h1>
					Checkout(<Link to="/checkout">{basket?.length}items</Link>)
				</h1>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__ address">
						<p>{user?.email}</p>
						<p>123 React Lane</p>
						<p>Chicago,IL</p>
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Review items and delivery</h3>
					</div>

					<div className="payment__items">
						{basket.map((item,i) => (
							<CheckoutProduct key={i}
							
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment Method</h3>
						</div>
							<div className="payment__details">
								<form onSubmit={handleSubmit}>
									<CardElement onChange={handleChange} />
									<div className="payment__priceContainer">
										<CurrencyFormat
											renderText={(value) => <h3>Order Total: {value}</h3>}
											decimalScale={2}
											value={getBasketTotal(basket)}
											displayType={"text"}
											thousandSeparator={true}
											perfix={"$"}
										/>
										<button disabled={processing || disabled || succeeded}>
											<spam>{processing ? <p>Processing</p> : "Buy Now"}</spam>
										</button>
									</div>
									{error && <div>{error}</div>}
								</form>
							</div>
						</div>
					
				</div>
			</div>
		
	);
}

export default Payment;

*/