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
import { chartOptions } from "../../../utils/chartOptions";
import { getItemsByMonth } from "../../../utils/chartFunc";

// register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function CropsChart({ items }) {
  const cropData = getItemsByMonth(items);

  const options = chartOptions;

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Crops Added",
        backgroundColor: "hsl(252, 82.9%, 67.8%)",
        borderColor: "hsl(252, 82.9%, 67.8%)",
        // data: [10, 30, 5, 10, 5, 35, 70, 10, 13, 28, 40],
        data: cropData,
      },
    ],
  };
  return <Bar data={data} options={options}></Bar>;
}

export default CropsChart;
