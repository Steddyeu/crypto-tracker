import axios from "axios";

export const getAllCoins = () => {
  return axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
    .then((res) => {
      //console.log(res.data)
      return res.data;
    });
};

export const getCoinChart = (coin) => {
  console.log(coin)
  return axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=7`
    )
    .then((res) => {
      console.log('chart info--->', res.data)
      return res.data;
    });
};
