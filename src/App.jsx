import React from 'react'
import Login from './Components/Login/Login'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'

const App = () => {
  return (
    <div>
      {/* <Login /> */}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App