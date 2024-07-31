import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import { Link } from 'react-router-dom';
import { db, Auth } from '../../components/config/Firebase'; // Import auth from Firebase Authentication
import { collection, addDoc } from 'firebase/firestore';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    country: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const collectionRef = collection(db, 'details');

  const addItemToDatabase = async () => {
    try {
      const currentUser = Auth.currentUser; // Access the auth from Firebase configuration
      if (currentUser) {
        await addDoc(collectionRef, {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          city: formData.city,
          country: formData.country,
          phone: formData.phone,
          userId: currentUser.uid,
         
           // Store the current user's UID
        });
        console.log('Item added to database successfully!');
        history.push('/payment'); // Redirect to payment page
      } else {
        alert('No user logged in.');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form action="" className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          name="email"
          placeholder="Email address"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="street"
          placeholder="Street"
          value={formData.street}
          onChange={handleChange}
        />
        <div className="multi-fields">
          <input
            type="text"
            name="city"
            placeholder="City"
            required
            value={formData.city}
            onChange={handleChange}
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          name="zipCode"
          placeholder="Zip code"
          value={formData.zipCode}
          onChange={handleChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          required
          value={formData.country}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          required
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Ksh.{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>Ksh.{getTotalCartAmount() === 0 ? 0 : 159}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Ksh.{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 159}</b>
            </div>
          </div>
          <Link to={'/payment'}><button type="button" onClick={addItemToDatabase}>
            PROCEED TO PAYMENT
          </button></Link>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;

