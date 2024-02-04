import React from 'react';
import './App.css'
import CheckOut from './Components/CheckOut'
import Home from './Components/Home'
import {Routes,Route} from 'react-router-dom'
import Login from './Components/Login'
import Payment from './Components/Payment'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import { useStateValue } from './Components/StateProvider'
import { useEffect } from 'react'
// import { auth } from "../../amazon/src/Components/firebase";
import { auth } from './Components/firebase';
import SharedLayout from './SharedLayout'
import Orders from './Orders'

const promise = loadStripe( 'pk_test_51OOw6vFHawdQw4M7cOxZy5ELa8zRCDXCoCvhMBO1GtzDHpzOaKh3YLGQMxux9Mf2kFrYOpTY3v17NVq2vxFyxacb005IKNQhkJ');

function App() {
const [{}, dispatch] = useStateValue();
  useEffect(()=> {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });

      }
      else{
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  } , []);
  return (
    <>
   <div className='App'>
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route />
        <Route path="/" element={<SharedLayout />}>
          <Route path="/orders" element={<Orders />} />
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route
            path="/payment"
            element={
              <>
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
        </Route>
      </Routes>
   </div>

    
    </>
  )
}

export default App
