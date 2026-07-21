import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateQuantity, removeItem } from '../features/cart/CartSlice';

function CartItem() {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart);

  // Hàm tính tổng tiền cho mỗi item
  const getItemTotal = (item) => {
    return (item.price * item.quantity).toFixed(2);
  };

  // Hàm tính tổng tiền toàn bộ giỏ hàng
  const getCartTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleIncrease = (id) => {
    const item = items.find((item) => item.id === id);
    if (item) {
      dispatch(updateQuantity({ id, quantity: item.quantity + 1 }));
    }
  };

  const handleDecrease = (id) => {
    const item = items.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      dispatch(updateQuantity({ id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(id));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert('🛒 Coming Soon! Checkout feature will be available soon.');
  };

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <h1 className="page-title">🛒 Your Cart</h1>
        <div style={{ textAlign: 'center', padding: '4rem' }}>
          <p style={{ fontSize: '1.5rem', color: '#666' }}>Your cart is empty</p>
          <Link to="/plants">
            <button className="btn-continue" style={{ marginTop: '1rem' }}>
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1 className="page-title">🛒 Your Cart</h1>

      {items.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} className="cart-item-image" />
          <div className="cart-item-info">
            <div className="cart-item-name">{item.name}</div>
            <div className="cart-item-price">Unit: ${item.price.toFixed(2)}</div>
            <div style={{ fontSize: '0.9rem', color: '#2e7d32', fontWeight: 'bold' }}>
              Subtotal: ${getItemTotal(item)}
            </div>
          </div>
          <div className="cart-item-actions">
            <button onClick={() => handleDecrease(item.id)}>−</button>
            <span className="quantity">{item.quantity}</span>
            <button onClick={() => handleIncrease(item.id)}>+</button>
            <button className="btn-delete" onClick={() => handleRemove(item.id)}>
              🗑️
            </button>
          </div>
        </div>
      ))}

      <div className="cart-summary">
        <div style={{ marginBottom: '0.5rem' }}>
          Total Items: <strong>{totalQuantity}</strong>
        </div>
        <div className="cart-total">
          Total Amount: ${getCartTotal()}
        </div>

        <div className="cart-actions">
          <Link to="/plants">
            <button className="btn-continue">Continue Shopping</button>
          </Link>
          <button className="btn-checkout" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
