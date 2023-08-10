import React from 'react'
import loginimg from '../src/image/loginimg.png'
import loginlogo from '../src/image/login page logo.png'

import './style.css'

export default function LoginForm(props) {
  return (
    <div className='login'>
        
        <div className="login-form">
          <div className='vishv-logo'>
              <img className='login-logo' src={loginlogo} alt="" />
              <h1>VISHV</h1>
          </div>
            <h2>Welcome Back</h2>
            <p>Please enter your details</p>
            
            <form>
            <h4>Email*</h4>
               <input className='form1' type="text" />
            <h4>Password*</h4>
               <input className='form1' type="text" />
            </form>
              <button  onClick={()=>props.handleName()}>Login</button> 
              <h3>@Vishv Architects</h3>  
        </div>
        <div className='second-loginimg'>
            <img src={loginimg} alt="" />
        </div>
        
    </div>
  )
}
