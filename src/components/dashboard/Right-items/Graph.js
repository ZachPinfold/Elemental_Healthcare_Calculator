import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";

const Graph = ({ competitorProducts }) => {
  const [labels, setLabels] = useState();
  const [data, setData] = useState({
    labels: ["", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: competitorProducts.map(competitor => {
          return competitor.price;
        })
      }
    ]
  });

  return (
    <div>
      {" "}
      <Bar
        data={data}
        width={100}
        height={450}
        options={{
          maintainAspectRatio: false
        }}
      />
    </div>
  );
};

const mstp = state => ({
  competitorProducts: state.elementalProducts.competitorProducts
});

export default connect(mstp, {})(Graph);
