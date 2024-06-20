import EarningReportCard from "./EarningReportCard";
import { TbChartBar } from "react-icons/tb";
import Statistics from "./Statistics";
import { CiClock2 } from "react-icons/ci";
import ReactApexChart from "react-apexcharts";
const ReportPage = () => {
  const state = {
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <div className="flex w-full gap-4">
      <div className="flex flex-col w-1/2 gap-2 p-8 rounded shadow-lg ">
        <EarningReportCard />
      </div>
      <div className="flex flex-col w-1/2 gap-5 p-8 rounded shadow-lg h-fit">
        <div>Thống kê</div>
        {/* <Statistics statistics={statistics} /> */}
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="pie"
          width={380}
        />
      </div>
    </div>
  );
};
export default ReportPage;
