import React from 'react'

export default function CryptoCoins({image, name, symbol, price, volume}) {
  return (
    <div className="crypto-container">
      <div className="crypto-row">
        <div className="crypto">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="symbol">{symbol}</p>
        </div>
        <div className="crypto-data">
          <p className="crypto-price">${price} USD</p>
          <p className="crypto-volume">${volume.toLocaleString()}</p>
          
        </div>
      </div>
    </div>
  );
}
