import React, { useEffect, useState } from "react";
import { useParams } from "@reach/router";
import * as api from "../apiReq";
import { Link } from "@reach/router";
import Chart from "./Chart";

export default function IndividualCoin() {
  const [chartData, setChartData] = useState([]);
  const coin = useParams();

  const formatChartData = (data) => {
    return data.map((d) => {
      return {
        t: d[0].toFixed(2),
        y: d[1].toFixed(2),
      };
    });
  };

  useEffect(() => {
    const id = coin.id;
    api
      .getCoinChartYear(id)
      .then((year) => {
        // console.log("==>", coin.id);
        //console.log(formatChartData(year));
        setChartData(year);
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="individial-coin-container">
      <Link to={`/`}>
        <button className="home-button">back to coin list</button>
      </Link>
      <h1 className='individual-coin-header'>{coin.id} performance chart</h1>
      <Chart data={chartData} />
    </div>
  );
}
