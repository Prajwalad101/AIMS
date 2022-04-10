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
import useProducts from "../../hooks/products/useProducts";

// register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function PriceChart({ width }) {
  const options = chartOptions;

  const { isLoading, isError, data: productData, error } = useProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const products = productData?.data;

  const productLabels = products.map((product) => product.name);
  const productPrice = products.map((product) => product.marketPrice);

  const data = {
    labels: productLabels,
    datasets: [
      {
        label: "Price",
        backgroundColor: "hsl(252, 82.9%, 67.8%)",
        borderColor: "hsl(252, 82.9%, 67.8%)",
        data: productPrice,
      },
    ],
  };
  return <Bar data={data} options={options} width={width}></Bar>;
}

export default PriceChart;
