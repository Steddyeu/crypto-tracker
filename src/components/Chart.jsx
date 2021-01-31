import React, {useRef, useEffect} from 'react'
import Chartjs from 'chart.js'
import chartOptions from '../config/chartConfig'



export default function Chart({data}) {
  const chartRef = useRef()
console.log('--->',data)
  useEffect(() => {
if(chartRef && chartRef.current) {
  const chartInstance = new Chartjs(chartRef.current, {
    type: 'line',
    data: {
      datasets: [{
        label: 'Crypto Chart',
        data: data,
        backgroundColor: 'grey',
        borderColor: 'green',
        pointRadius: '3',
        borderWidth: 1
      }]
    },

    options: chartOptions,
  });
}
  })

  return (
    <div style={{ alignItems: 'center', width: '500px', height: '500px'}}>
    <div style={{background: 'white', width:'100%', height: '100%'}}>

    <div>
      <canvas ref={chartRef} className='chart' width={200} height={200}>
      </canvas>
    </div>
    </div>
    </div>
  )
}
