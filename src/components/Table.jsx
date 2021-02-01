import React from 'react'

export default function Table(props) {
//console.log(props.details)
/*
max_supply 
market_cap
circulating_supply
total_volume
high_24h
low_24h
*/

  return (
    <div className="individual-coin-info">
        <p>Total Volume</p>
      <p>Circulating Supply</p>
      <p>Max Supply</p>
      <p>Market Cap</p>
      <p>24hr High</p>
      <p>24hr Low</p>
    </div>
  )
}
