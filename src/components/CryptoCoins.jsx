import React from "react";
import { Link } from "@reach/router";
import commaNumber from "comma-number";

export default function CryptoCoins({
  image,
  name,
  symbol,
  price,
  priceChange,
}) {

  return (
    <div className="crypto-container">
      <Link className="links" to="">
        <div className="crypto-row">
          <div className="crypto">
            <img src={image} alt="crypto" />
            <h1>{name}</h1>
            <p className="symbol">{symbol}</p>
          </div>
          <div className="crypto-data">
            <p className="crypto-price">${commaNumber(price)} USD</p>

            {priceChange < 0 ? (
              <p className="crypto-percent red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="crypto-percent green">
                + {priceChange.toFixed(2)}%
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}

 