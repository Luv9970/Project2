import React from 'react'
import './Analytics.css'
import Chart from '../Chart/Chart'
import Revenue_data from '../../assets/Revenue_data.json'
import New_Revenue from '../../assets/New_Revenue.json'
import Card from '../Card/Card'
import Table from '../Table/Table'


const Analytics = () => {
  return (
    <div className='analytics-main'>
        <div className='analytics-top'>
            <div className='analytics-top-left'>

                <div className='analytics-graph1'>
                    <div className='analytics-graph1-text'>Revenue</div>
                    <div className='analytics-graph1-image'>
                        <Chart chartdata={Revenue_data}/>
                    </div>
                </div>
                
                <div className='analytics-graph2'>
                    <div className='analytics-graph2-text'>New Revenue</div>
                    <div className='analytics-graph2-image'>
                        <Chart chartdata={New_Revenue}/>
                    </div>
                </div>
                
            </div>
            <div className='analytics-top-right'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>

        <div className='analytics-bottom'>
        <Table/>
        </div>
    </div>
  )
}

export default Analytics