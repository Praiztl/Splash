import React from 'react'
import './Signup.css'
import hexagon from '../assets/hexagon.gif';
import hexagonPhone  from '../assets/hexagonPhone.gif'
const Signup = () => {
  return (
    <div className="container">
        <div className='hexagon'>
        <img className='desktop' src={hexagon} alt=''/>
        <img  className="phone" src={hexagonPhone} alt=''/>
        </div>

        <div className='sign'>
        <h1 className="step-title">Welcome to Shyn Tech</h1>
        <p className="text">With Shine Coin Technology, you can securely deposit, earn and trade NFTs or Cryptocurrency</p>
        <button className="button" >Sign Up</button>
        <p className="text">Already have an account? <a href="#" className="link">Sign in</a></p>
        </div>
    </div>
  )
}

export default Signup