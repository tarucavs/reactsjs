import React from 'react';
import './Cart2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartWidget({ cartCount }) {
  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
      <span className="badge badge-black">{cartCount}</span>
    </div>
  );
}

export default CartWidget;