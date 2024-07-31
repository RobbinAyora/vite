import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { Auth, googleProvider } from '../config/Firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';


const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('Login');
  const [email, setEmail] = useState('');
  
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(Auth, email, password);
      alert('Sign in was successful...');
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try{
      await signInWithPopup(Auth,googleProvider);
      alert('Sign in was successful...');
    }
    catch(err){
      console.error(err);
    }
  
  }



  return (
    <div className='login-popup'>

     

      <form className='login-popup-container'>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState === 'Sign up' && (
            <input type="text" placeholder="Your name.." required />
          )}

          <input type="email" placeholder='Your email' required onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='Password' required onChange={(e) => setPassword(e.target.value)} />
          <button className="google-sign-in-button" onClick={signInWithGoogle}>
            <img src={assets.google_icon} alt="" className="google-logo" />
            <span>Sign in with Google</span>
          </button>
        </div>
        <button onClick={signIn}>{currState === 'Sign up' ? 'Create Account' : 'Login'}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === 'Login' ?
          <p>Create a new account?<span onClick={() => setCurrState("Sign up")}> Click here</span></p>
          :
          <p>Already have an account?<span onClick={() => setCurrState("Login")}> Login</span></p>
        }
      </form>
    </div>
  );
}

export default LoginPopup;

