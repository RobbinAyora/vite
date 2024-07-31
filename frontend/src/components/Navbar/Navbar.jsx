import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { Auth } from '../config/Firebase';
import { signOut } from 'firebase/auth';

const Navbar = ({setShowLogin}) => {

const [menu,setMenu] = useState('home');

const {getTotalCartAmount} = useContext(StoreContext);

const logout = async () => {
  try {
    await signOut(Auth);
    alert('You have logged out...');
  } catch(err) {
    console.error(err);
  }
}


  return (
    <div className='navbar'>
      <Link to={'/'}><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className='navbar-menu'>
        <Link to={'/'} onClick={()=>setMenu('home')} className={menu==='home'?'active':''}>home</Link>
        <a href='#explore-menu' onClick={()=>setMenu('menu')} className={menu==='menu'?'active':''}>menu</a>
        <a href='#footer' onClick={()=>{setMenu("contact-us")}} className={menu==="contact-us"?"active":""}>contact us</a>
      </ul>
      <div className="navbar-right">
        
        <div className="navbar-search-icon">
            <Link to={'/cart'}>< img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
        <button onClick={logout}>Sign out</button>
      </div>
    </div>
  )
}

export default Navbar
