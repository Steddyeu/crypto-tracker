import React, {useRef} from 'react'

export default function Chart() {
  const chartRef = useRef()


  return (
    <div>
      <canvas ref={chartRef} className='chart' width={200} height={200}>

      </canvas>
    </div>
  )
}
