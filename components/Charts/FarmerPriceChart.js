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

function FarmerPriceChart({ width, items }) {
  const options = chartOptions;

  const itemLabels = items.map((el) => el.item.name);
  const priceData = items.map((el) => el.item.marketPrice);

  const data = {
    labels: itemLabels,
    datasets: [
      {
        label: "Price",
        backgroundColor: "hsl(252, 82.9%, 67.8%)",
        borderColor: "hsl(252, 82.9%, 67.8%)",
        data: priceData,
      },
    ],
  };
  return <Bar data={data} options={options} width={width}></Bar>;
}

export default FarmerPriceChart;
