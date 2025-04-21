import React from 'react'
import './Chart.css'
import { Chart as ChartJS , defaults } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

defaults.maintainAspectRatio = false
defaults.responsive = true
const Chart = ({chartdata}) => {
  return (
    <div className='chart-main'>
      <Line data={{
        labels: chartdata.map((data) => data.month),
        datasets: [
          {
            label: 'Revenue',
            data: chartdata.map((data) => data.value),
            backgroundColor: 'rgb(52, 75, 253)',
            borderColor: 'rgb(52, 75, 253)',
            borderWidth: 1,
            tension: 0.3,
          },
        ],
      }}/>
    </div>
  )
}

export default Chart