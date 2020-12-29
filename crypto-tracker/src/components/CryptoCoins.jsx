import React from "react";

export default function CryptoCoins({
  image,
  name,
  symbol,
  price,
  marketCap,
  priceChange,
  totalVolume,
}) {
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
          <p className="crypto-volume">
            
            Mkt Cap: ${marketCap.toLocaleString()}
          </p>
          {priceChange < 0 ? (
            <p className="crypto-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="crypto-percent green">
              {priceChange /*.toFixed(2)*/}%
            </p>
          )}
          <p className="marketcap">
            Crypto volume: {totalVolume.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
