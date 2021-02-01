import React, { useEffect, useState } from "react";
import { useParams } from "@reach/router";
import * as api from "../apiReq";
import { Link } from "@reach/router";
import Chart from "./Chart";
import axios from "axios";



export default function IndividualCoin() {
  const [chartData, setChartData] = useState({});
  const coin  = useParams();
console.log(coin.id)

  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const [day, week, year, detail] = await Promise.all([
        axios.get(`https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }),
        axios.get(`https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "7",
          },
        }),
        axios.get(`https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "365",
          },
        }),
        axios.get("https://api.coingecko.com/api/v3/coins/markets", {
          params: {
            vs_currency: "usd",
            ids: coin.id,
          },
        }),
      ]);
      console.log('day--->',day);
      console.log('week--->', week);
      console.log('year--->', year);
      setChartData({
        day: formatData(day.data.prices),
        week: formatData(week.data.prices),
        year: formatData(year.data.prices),
        detail: detail.data[0],
      });
    };

    fetchData();
  }, []);

  // const coin = useParams();
  // const formatChartData = (data) => {
  //   return data.map((d) => {
  //     return {
  //       t: d[0].toFixed(2),
  //       y: d[1].toFixed(2),
  //     };
  //   });
  // };

  // useEffect(() => {
  //   const id = coin.id;
  //   api
  //     .getCoinChartYear(id)
  //     .then((year) => {
  //       // console.log("==>", coin.id);
  //       console.log(formatChartData(year));
  //       setChartData(year);
  //     })

  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="individial-coin-container">
      <h1 className="individual-coin-header">{coin.id} performance chart</h1>
      <Chart data={chartData} />
      <div className="individual-coin-info">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio illo
          odit impedit, quod temporibus eum a repellendus ad cupiditate
          dignissimos dolorem officiis ex ea, magnam sint neque adipisci itaque
          aperiam?
        </p>
      </div>
      <Link to={`/`}>
        <h2 className="home-button">Back</h2>
      </Link>
    </div>
  );
}
