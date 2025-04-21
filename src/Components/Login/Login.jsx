import React from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login-main'>
      <div className='login-container'>
        LOGIN
      </div>
      <NavLink to="/dashboard" className="login-button">
      <div className="login-text">
        Go To DashBoard
      </div>
      </NavLink>
    </div>
  )
}

export default Login