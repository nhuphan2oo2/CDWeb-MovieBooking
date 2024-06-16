import EarningReportCard from "./EarningReportCard";
import { TbChartBar } from "react-icons/tb";
import Statistics from "./Statistics";
import { CiClock2 } from "react-icons/ci";
const ReportPage = () => {
  const statistics = [
    {
      icon: <CiClock2 />,
      title: "Doanh số",
      data: 320,
      unit: "m",
    },
    {
      icon: <CiClock2 />,
      title: "Doanh số",
      data: 320,
      unit: "m",
    },
    {
      icon: <CiClock2 />,
      title: "Doanh số",
      data: 320,
      unit: "m",
    },
  ];

  return (
    <div className="flex w-full gap-4">
      <div className="flex flex-col w-1/2 gap-2 p-8 rounded shadow-lg ">
        <EarningReportCard
          financials={[
            { title: "Doanh số", icon: <TbChartBar /> },
            { title: "Lợi nhuận", icon: <TbChartBar /> },
          ]}
          xAxis={[
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "July",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ]}
          yAxis={[
            {
              name: "Orders",
              data: [28, 10, 45, 38, 15, 30, 35, 28, 8, 45, 10, 60],
            },
          ]}
        />
      </div>
      <div className="flex flex-col w-1/2 gap-5 p-8 rounded shadow-lg h-fit">
        <div>Thống kê</div>
        <Statistics statistics={statistics} />
      </div>
    </div>
  );
};
export default ReportPage;
