import { Pie } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { chartOptions } from "../../utils/chartOptions";

ChartJS.register(ArcElement, Tooltip, Legend);

function CropDetailChart() {
  let options = chartOptions;
  options.plugins.legend.position = "top";
  const data = {
    labels: [
      "Milk",
      "Loaf of White Bread",
      "Rice (white)",
      "Eggs (regular)",
      "Local Cheese",
      "Apples",
      "Banana",
      "Oranges",
      "Tomato",
      "Potato",
      "Onion",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 8, 3, 5, 8, 4, 15, 12],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-[60%]">
      <Pie data={data} options={options} />
    </div>
  );
}

export default CropDetailChart;
