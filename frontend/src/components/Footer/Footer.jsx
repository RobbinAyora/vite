import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img className='footer-content-left-img' src={assets.logo} alt="" />
          <p>Step into style with our latest collection of shoes. From sneakers to sandals, find your perfect fit and stride with confidence.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.tiktok_icon} alt="" />
            <div className="links">
              
                  Instagram @bulls_empire_
                  <br />
                  facebook @bulls empire
                  <br />
                  Tiktok@BULLS EMPIRE
                  <br />
                  X@Bulls Empire
               
            </div>

          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+254-729-906-487</li>
            <li>charleswambugu2010@gmail.com</li>
          </ul>
        </div>

      </div>
      <hr />
      <p className="footer-copyright">Copyright © 2024 Robbinson Ayora. All rights reserved</p>
    </div>
  )
}

export default Footer
