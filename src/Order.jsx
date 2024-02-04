import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Order.css';
import moment from 'moment';
import CheckoutProduct from './Components/CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

function Order({ order }) {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const formatted = moment.unix(order.data.created).format('MMM Do YYYY, h:mma');
    setFormattedDate(formatted);
  }, [order.data.created]);

  return (
    <div className='order'>
      <h2>Order</h2>
      <p>{formattedDate}</p>

      <p className='order_id'>
        {/* <small>{order.id}</small> */}
      </p>
      {order.data.basket?.map((item, i) => (
        <CheckoutProduct
          key={i}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => <h3 className='order_total'>Order Total: {value}</h3>}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </div>
  );
}

Order.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string.isRequired,
    data: PropTypes.shape({
      created: PropTypes.number.isRequired,
      basket: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
          rating: PropTypes.number.isRequired,
        })
      ),
      amount: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Order;