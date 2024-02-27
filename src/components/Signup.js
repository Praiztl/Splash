import React from 'react'
import './Signup.css'
import hexagon from '../assets/hexagon.gif';

const Signup = () => {
  return (
    <div className="container">
        <div className='hexagon'>
        <img src={hexagon} alt=''/>
        </div>

        <div className='sign'>
        <h1 className="step-title">Welcome to Shyn Tech</h1>
        <p className="text">With Shine Coin Technology, you can securely deposit, earn and trad NFTs or Cryptocurrency</p>
        <button className="button" >Sign Up</button>
        <p className="text">Already have an account? <a href="#" className="link">Sign in</a></p>
        </div>
    </div>
  )
}

export default Signup