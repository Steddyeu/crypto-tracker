import React from "react";
import "./App.css";
//import axios from "axios";
import CryptoCoins from "./components/CryptoCoins";
import { Router } from "@reach/router";
import IndividualCoin from "./components/IndividualCoin";

function App() {
  
  return (
  <div>
  <Router>
        <CryptoCoins path='/' />
        <IndividualCoin path='/coins/:id' />
  </Router>
          
        
    </div>
  );
}

export default App;
