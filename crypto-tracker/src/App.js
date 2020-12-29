import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import CryptoCoins from './components/CryptoCoins';


function App() {
  const [coins, setCoins] = useState([])

  const [search, setSearch] = useState('')

useEffect(() => {
  axios.get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  ).then(res => {
    console.log('response --->', res)
    setCoins(res.data)
  }).catch(err => console.log(err))
}, [])

const handleChange = event => {
  setSearch(event.target.value)
}

const filteredCoins = coins.filter(coin => 
  coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  )

  return (
    <div className="crypto-tracker">
      <div className="crypto-search">
        <h1 className="crypto-search">Eds Crypto Tracker</h1>
        <form>
        <input type='text' placeholder='search here...' className='search-input' onChange={handleChange}/>
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <CryptoCoins key={coin.id} name={coin.name} image={coin.image} symbol={coin.symbol} volume={coin.market_cap} price={coin.current_price}/>
        )
      })}
    </div>
  );
}

export default App;


//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
