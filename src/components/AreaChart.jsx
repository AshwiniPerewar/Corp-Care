import React from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import { faker } from "@faker-js/faker";

const labels= ["Nov 1", "Nov 4", "Nov 8", "Nov 12", "Nov 16"];
  
const data = {
  labels,
  datasets: [
    {
      label: "China Market",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: labels.map(() => faker.datatype.number({ min: 10, max: 40 })),
    }
  ]
};

export function AreaChart ()
{
   return (
      <div className="col-12 col-sm-6">
          <Line data={data} />
        
      </div>
    );
  
}
