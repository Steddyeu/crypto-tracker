import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const [coins, setCoins] = useState([])

useEffect(() => {
  axios.get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  ).then(res => {
   // console.log('response --->', res)
    setCoins(res.data)
  }).catch(err => console.log(err))
}, [])



  return (
    <div className="crypto-tracker">
      <div className="crypto-search">
        <h1 className="crypto-title">Eds Crypto Tracker</h1>
        <form>
        <input type='text' placeholder='search here...' className='search-input'/>
        </form>
      </div>
    </div>
  );
}

export default App;


//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
