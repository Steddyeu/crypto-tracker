import React, { useState, useEffect } from "react";
import * as api from "../apiReq";
import commaNumber from "comma-number";
import Header from './Header'
import { Link } from "@reach/router";


export default function CryptoCoins() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api
      .getAllCoins()
      .then((res) => {
        setCoins(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const formattedCoins = coins.map((coin) => {
    if (coin.price_change_percentage_24h === null) {
      coin.price_change_percentage_24h = 0;
    }
    return coin;
  });

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCoins = formattedCoins.filter((formattedCoin) =>
    formattedCoin.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="crypto-tracker">
      <Header />
      <div className="crypto-search">
        <form>
          <input
            type="text"
            placeholder="search here..."
            className="search-input"
            onChange={handleChange}
          />
        </form>
      </div>
      <div id="cowellereum">
        <p>
          Check out the code for my cryptocurrency - 'Cowellereum':{" "}
          <a href="https://github.com/Steddyeu/cowellereum-coin">₿</a>
        </p>
      </div>

      {filteredCoins.map((crypto) => {
        return (
          <Link to={`/${crypto.id}`}>
          <div className='crypto-container'>
          <div className="crypto-row">
            <div className="crypto">
              <img src={crypto.image} alt="crypto" />
              <h1>{crypto.name}</h1>
              <p className="symbol">{crypto.symbol}</p>
            </div>
            <div className="crypto-data">
              <p className="crypto-price">
                ${commaNumber(crypto.current_price)} USD
              </p>

              {crypto.price_change_percentage_24h < 0 ? (
                <p className="crypto-percent red">
                  {crypto.price_change_percentage_24h.toFixed(2)}%
                </p>
              ) : (
                  <p className="crypto-percent green">
                    + {crypto.price_change_percentage_24h.toFixed(2)}%
                  </p>
                  
                )}
                
            </div>
            </div>
          </div>
          </Link>
        );
      })}
    </div>
  );
}
