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


// export const getCoinChartData = () => {
//   return axios
//     .get(`https://api.coingecko.com/api/v3/coins`)
//     .then((res) => {
//     // console.log("chart info--->", res.data.prices);
//       return res;
//     });
// };