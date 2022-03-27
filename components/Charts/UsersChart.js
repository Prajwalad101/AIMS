import { Line } from "react-chartjs-2";
import { chartOptions } from "../../utils/chartOptions";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function UsersChart() {
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
        label: "Verified",
        backgroundColor: "#9046CF",
        borderColor: "#9046CF",
        data: [0, 10, 5, 2, 20, 30, 45, 60, 15, 40, 30, 5],
      },
      {
        label: "Not-Verified",
        backgroundColor: "#D9D9D9",
        borderColor: "#D9D9D9",
        data: [5, 20, 10, 30, 11, 25, 60, 5, 50, 35, 20, 23],
      },
    ],
  };
  return <Line data={data} options={options} />;
}

export default UsersChart;
