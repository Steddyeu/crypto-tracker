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
      <h1 className='individual-coin-header'>{coin.id} performance chart</h1>
      <Chart data={chartData} />
      <div className='individual-coin-info'>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio illo odit impedit, quod temporibus eum a repellendus ad cupiditate dignissimos dolorem officiis ex ea, magnam sint neque adipisci itaque aperiam?</p>
      </div>
      <Link to={`/`}>
        <h2 className='home-button'>Back</h2>
      </Link>

    </div>
  );
}
