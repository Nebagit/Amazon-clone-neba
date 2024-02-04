import React, { useEffect, useState } from 'react'
import './Orders.css'
import { db } from './Components/firebase';
import Order from './Order';
import { useStateValue } from './Components/StateProvider';

function Orders() {
    const [orders,setOrders] = useState([]);
      const [{ user }, dispatch] = useStateValue();


    useEffect(() => {
        if(user) {
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created','desc')
            .onSnapshot((snapshot) =>
                setOrders(
                    snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                    }))
                )
                );
        } else {
            setOrders([]);
        }
    },[user]);
  return (
    <div>
        <h1>Your Orders</h1>
        <div className='orders_order'>
            {orders?.map((order, i)=> (
                <Order key={i} order={order} />
            ))}
        </div>
    </div>
  )
}

export default Orders