import React, { useContext } from 'react';
import './ShoeDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import ShoeItem from '../ShoeItem/ShoeItem';

const ShoeDisplay = ({ category }) => {
    const { shoe_list } = useContext(StoreContext);

    return (
        <div className='food-display' id='food-display'>
          <h2>Top fashion trends near you</h2>
          <div className="food-display-list">
            {shoe_list.map((item) => (
              (category === 'All' || category === item.category) && (
                <ShoeItem
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              )
            ))}
          </div>
        </div>
      );
      
};

export default ShoeDisplay;

