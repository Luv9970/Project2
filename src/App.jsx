import React from 'react'
import Login from './Components/Login/Login'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import NewDashboard from './Components/NewDashboard/NewDashboard'

const App = () => {
  return (
    <div>
      {/* <Login /> */}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="/NewDashboard" element={<NewDashboard />}/>
      </Routes>
    </div>
  )
}

export default App