import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Chart.js에 필요한 요소를 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
  PointElement,
  LineElement
);

const Ex3Chart = () => {
  // 하드코딩된 임의의 데이터
  const chartData = {
    labels: ["9시", "10시", "11시", "12시", "1시", "2시"],
    datasets: [
      {
        yAxisID: "y1",
        type: "bar",
        label: "Bar차트 1",
        data: [3000, 5000, 4000, 7000, 2000, 5000], // 임의의 고정된 데이터
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        yAxisID: "y1",
        type: "bar",
        label: "Bar차트 2",
        data: [1000, 3000, 2000, 4000, 1000, 3000], // 임의의 고정된 데이터
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        yAxisID: "y2",
        type: "line",
        label: "Line차트",
        data: [4000, 6000, 3000, 5000, 4000, 6000], // 임의의 고정된 데이터
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const options = {
    indexAxis: "y", // x축 대신 y축을 카테고리 축으로 사용
    scales: {
      y1: {
        beginAtZero: true,
        stacked: true, // 막대차트를 팩형으로 설정
        title: {
          display: true,
          text: "Bar차트",
        },
        max: 15000,
      },
      y2: {
        display: true,
        beginAtZero: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
        title: {
          display: true,
          text: "Line차트",
        },
        max: 10000,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        formatter: (value, context) => {
          return value + "건"; // 레이블로 고정된 값 표시
        },
        color: "black",
        anchor: "end",
        align: "right", // 가로 막대에서 레이블 위치 조정
      },
    },
  };

  return <Bar data={chartData} options={options} plugins={[ChartDataLabels]} />;
};

export default Ex3Chart;
