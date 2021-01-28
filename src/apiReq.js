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
  return axios
    .get(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart`
    )
    .then((res) => {
      console.log('chart info--->', res.data)
      return res.data;
    });
};
