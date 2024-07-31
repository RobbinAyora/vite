import React, { useContext } from 'react';
import './ShoeItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import { db, Auth } from '../../components/config/Firebase'; // Import auth from Firebase Authentication
import { collection, addDoc } from 'firebase/firestore';

const ShoeItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const itemsCollectionRef = collection(db, 'item');

  const addItemToDatabase = async () => {
    try {
      const currentUser = Auth.currentUser; // Access the auth from Firebase configuration
      if (currentUser) {
        await addDoc(itemsCollectionRef, {
          description: description,
          id: id,
          name: name,
          price: price,
          userId: currentUser.uid, // Access current user's UID
        });
        console.log('Item added to database successfully!');
      } else {
        alert('No user logged in.');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddToCart = () => {
    if (Auth.currentUser) {
      addToCart(id);
      addItemToDatabase();
    } else {
      alert('You are not logged in...');
    }
  };

  const handleRemoveFromCart = () => {
    if (Auth.currentUser) {
      removeFromCart(id);
    } else {
      alert('Login first');
    }
  };

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />
        {!cartItems[id] ? (
          <img className='add' onClick={handleAddToCart} src={assets.add_icon_white} alt="" />
        ) : (
          <div className='food-item-counter'>
            <img onClick={handleRemoveFromCart} src={assets.remove_icon} alt="" /> 
            <p>{cartItems[id]}</p>
            <img onClick={handleAddToCart} src={assets.add_icon_green} alt="" />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">Ksh.{price}</p>
      </div>
    </div>
  );
};

export default ShoeItem;


       












