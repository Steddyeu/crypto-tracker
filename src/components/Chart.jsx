import React, {useRef, useEffect} from 'react'
import Chartjs from 'chart.js'
import chartOptions from '../config/chartConfig'



export default function Chart({data}) {
  const chartRef = useRef()
const {day, week, year, detail} = data


  useEffect(() => {
if(chartRef && chartRef.current) {
  const chartInstance = new Chartjs(chartRef.current, {
    type: 'line',
    data: {
      datasets: [{
        label: "crypto",
        data: year,
        backgroundColor: 'gold',
        borderColor: 'orange',
        pointRadius: '1',
        borderWidth: 1
      }]
    },

    options: {
      ...chartOptions,
    }
  });
}
  })

  return (
    <div className='chart-container'>

    <div>
      <canvas ref={chartRef} className='chart' width={200} height={200}>
      </canvas>
    </div>
    </div>
  )
}
