import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CryptoCoins from "./components/CryptoCoins";

function App() {
  const [coins, setCoins] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        //console.log(" list-of-crypto-response --->", res);
        setCoins(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const formattedCoins = coins.map((coin) => {
    // console.log(coin.price_change_percentage_24h)
    if (coin.price_change_percentage_24h === null) {
      coin.price_change_percentage_24h = 0
    }
    return coin
  })

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCoins = formattedCoins.filter((formattedCoin) =>
    formattedCoin.name.toLowerCase().includes(search.toLocaleLowerCase()) 
  );

  return (
    <div className="crypto-tracker">
      <div className="crypto-search">
        <h1 className="crypto-search">Eds Cryptorium</h1>
        <form>
          <input
            type="text"Ÿ
            placeholder="search here..."
            className="search-input"
            onChange={handleChange}
          />
        </form>
      </div>
      <div id='cowellereum'>
        <p>
          Check out the code for my cryptocurrency - 'Cowellereum':{" "}
          <a href="https://github.com/Steddyeu/cowellereum-coin">₿</a>
        </p>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <CryptoCoins
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketCap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            totalVolume={coin.total_volume}
          />
        );
      })}
    </div>
  );
}

export default App;

