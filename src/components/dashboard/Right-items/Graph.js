import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

export default function Graph() {
  const [labels, setLabels] = useState();
  const [data, setData] = useState({
    labels: ["January", "February", "", "April", "May", "", "July", "August"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 56, 0, 80, 81, 0, 55, 40]
      }
    ]
  });

  return (
    <div>
      {" "}
      <Bar
        data={data}
        width={100}
        height={300}
        options={{
          maintainAspectRatio: false
        }}
      />
    </div>
  );
}
