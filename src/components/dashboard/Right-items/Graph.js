import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";

const Graph = ({ products }) => {
  const [data, setData] = useState({
    labels: [
      "Elemental",
      "Competitor",
      "",
      "Elemental",
      "Competitor",
      "",
      "Elemental",
      "Competitor",
      "",
      "Elemental",
      "Competitor"
    ],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: null
      }
    ]
  });

  useEffect(() => {
    const data1 = products.map(competitor => {
      return competitor.quantity;
    });
    setData({ ...data }, (data.datasets[0].data = data1));
  }, [products]);

  return (
    <div>
      {" "}
      <Bar
        data={data}
        width={100}
        height={450}
        options={{
          legend: {
            display: false
          },
          // tooltips: {
          //   enabled: false,
          //   callbacks: {
          //     label: function(tooltipItem) {
          //       return tooltipItem.yLabel;
          //     }
          //   }
          // },
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                },
                gridLines: {
                  color: "rgba(0, 0, 0, 0)"
                }
              }
            ],
            xAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  display: false
                },
                gridLines: {
                  color: "rgba(0, 0, 0, 0)"
                }
              }
            ]
          }
        }}
      />
    </div>
  );
};

const mstp = state => ({
  products: state.elementalProducts.products
});

export default connect(mstp, {})(Graph);
