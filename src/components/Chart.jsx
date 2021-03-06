import React, { useRef, useEffect, useState } from "react";
import Chartjs from "chart.js";
import chartOptions from "../config/chartConfig";
import Table from '../components/Table'


export default function Chart({ data }) {
  const [timeFrame, setTimeFrame] = useState("24h");
  const chartRef = useRef();
  const {year, detail } = data;

  // const frame = () => {
  //   if (timeFrame === "24h") {
  //     console.log(day)
  //     return day;
  //   } else if (timeFrame === "7d") {
  //     return week;
  //   } else {
  //     return year;
  //   }
  // };

  useEffect(() => {
    if (chartRef && chartRef.current && detail) {
      const chartInstance = new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: "Annual performance",
              data: year,
              backgroundColor: "gold",
              borderColor: "orange",
              pointRadius: "1",
              borderWidth: 1,
            },
          ],
        },

        options: {
          ...chartOptions,
        },
      });
    }
  });

  return (
    <div className="chart-container">
      
      <div>
        <canvas
          ref={chartRef}
          className="chart"
          width={200}
          height={200}
           >
        </canvas>
      
      </div>

    </div>
  );
}

/*

<button onClick={() => frame('24h')}>Day</button>
<button onClick={() => frame('7d')}>Week</button>
<button onClick={() => frame('1y')}>Year</button>
*/
