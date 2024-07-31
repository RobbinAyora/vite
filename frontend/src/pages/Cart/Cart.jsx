import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import { db } from '../../components/config/Firebase';
import { deleteDoc, doc } from 'firebase/firestore';

const Cart = () => {
  const { cartItems, shoe_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const deleteItem = async (_id) => {
    const itemDoc = doc(db, "item", _id);
    await deleteDoc(itemDoc);
  }; 




  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {shoe_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt='' />
                  <p>{item.name}</p>
                  <p>Ksh.{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>Ksh.{item.price * cartItems[item._id]}</p>
                  <button onClick={() => { removeFromCart(item._id); deleteItem(item._id); }} className='cross'>
                    x
                  </button>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>Ksh.{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery fee</p>
              <p>Ksh.{getTotalCartAmount() === 0 ? 0 : 159}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>Ksh.{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 159}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cart-promocode'>
          <div>
            <p>If you have a promo code, enter here</p>
            <div className='cart-promocode-input'>
              <input type='text' placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;



