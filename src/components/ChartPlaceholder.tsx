import React from "react";
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
import { Line } from "react-chartjs-2";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Sample data
const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const data = {
  labels,
  datasets: [
    {
      label: "Patient Visits",
      data: [120, 190, 170, 210, 240, 230],
      fill: false,
      borderColor: "#7c3aed",
      backgroundColor: "#c4b5fd",
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Monthly Patient Visits",
    },
  },
};

const ChartPlaceholder = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartPlaceholder;
