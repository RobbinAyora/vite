import React from 'react'
import './ExploreMenu.css'
import { product_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Indulge in a world of timeless elegance and contemporary flair at our fashion boutique. </p>
       <div className="explore-menu-list">
        {product_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.product_name?'all':item.product_name)} key={index} className="explore-menu-list-item">
                    <img className={category===item.product_name?'active':''} src={item.product_image} alt="" />
                    <p>{item.product_name}</p>
                </div>
            )
        })}
       </div>
       <hr />
    </div>

  )
}

export default ExploreMenu
