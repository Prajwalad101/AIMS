// import chart components
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { chartOptions } from "../../utils/chartOptions";

// register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function PriceChart() {
  const options = chartOptions;

  const data = {
    labels: [
      "Milk (regular)",
      "Loaf of Fresh White Bread",
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
        label: "Price",
        backgroundColor: "hsl(252, 82.9%, 67.8%)",
        borderColor: "hsl(252, 82.9%, 67.8%)",
        data: [85, 100, 66, 18, 700, 120, 80, 220, 50, 32.5, 46.5],
      },
    ],
  };
  return <Bar data={data} options={options}></Bar>;
}

export default PriceChart;
