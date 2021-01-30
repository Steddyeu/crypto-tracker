import React, { useEffect, useState } from "react";
import { useParams } from "@reach/router";
import * as api from "../apiReq";
import { Link } from "@reach/router";

export default function IndividualCoin() {
  const [chartData, setChartData] = useState([]);
  const coin = useParams();
  //console.log('=======>', coin)
  useEffect(() => {
    const id = coin.id;
    api
      .getCoinChart(id)
      .then((res) => {
        console.log("==>", coin.id);
        console.log(res);
        setChartData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="individial-coin-container">
      <Link to={`/`}>
        <button className="home-button">back to coin list</button>
      </Link>
      <h1>Hello from individual coins</h1>
      
    </div>
  );
}
