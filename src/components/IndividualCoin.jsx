import React, {useEffect, useState} from "react";
import * as api from "../apiReq";

export default function IndividualCoin() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    api
      .getCoinChart()
      .then((res) => {
        console.log(res)
        setChartData(res);
      })
      .catch((err) => console.log(err));
  }, []);
 

  return (
    <div className="individial-coin-container">
      <h1>Hello from individual coins</h1>
   </div>
  );
}
