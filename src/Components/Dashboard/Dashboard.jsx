import React, { useState } from 'react'
import './Dashboard.css'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import Content from '../Content/Content'
import Filter from '../Filter/Filter'
import Logoutpopup from '../Logoutpopup/Logoutpopup'

const Dashboard = () => {

const [isVisible , setisVisible] = useState(false)

const togglevisibility = () => {
    setisVisible(prev => !prev)
}

  return (
    <div className='dashboard-main'>
        <div className='dashboard-left'>
            <Sidebar togglevisibility={togglevisibility}/>
        </div>

        <div className='dashboard-right'>
          <div className='dashboard-right-navbar'>
            <Navbar />
          </div>

          <div className='dashboard-right-content'>
            <Content />
    
            {/* <Filter/> */}

            {/* <Analytics/> */}
            <Logoutpopup isVisible={isVisible} togglevisibility={togglevisibility}/>
          </div>
        </div>
    </div>
  )
}

export default Dashboard