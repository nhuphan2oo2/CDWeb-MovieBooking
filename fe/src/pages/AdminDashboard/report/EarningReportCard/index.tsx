import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { FaEllipsisV } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";

interface EarningReportCardProps {
  financials: {
    title: string;
    icon?: React.ReactNode;
  }[];
  xAxis: string[];
  yAxis: SeriesItem[];
}
type SeriesItem = {
  name: string;
  data: number[];
};

const EarningReportCard: React.FC<EarningReportCardProps> = (props) => {
  const { financials, xAxis, yAxis } = props;
  const [activeTab, setActiveTab] = useState(0);
  const handleActiveTab = (index: number) => {
    setActiveTab(index);
  };
  const years = [2024, 2023, 2022];
  const [activeYear, setActiveYear] = useState(0);
  const handleActiveYear = (index: number) => {
    setActiveYear(index);
  };

  const [toggleYear, setToggleYear] = useState(false);
  const handleToggleYear = () => {
    setToggleYear(!toggleYear);
  };

  const thisMonth = new Date().getMonth();
  const colors = Array(12).fill("#E8E7FD");
  colors[thisMonth] = "#7367F0";

  const chartConfigs = {
    options: {
      stacked: true,
      xaxis: {
        categories: xAxis,
        showForNullSeries: false,

        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      chart: {
        toolbar: {
          show: false,
        },
      },
      colors: colors,
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          columnWidth: "50%",
          distributed: true,
        },
      },
      dataLabels: { enabled: false },
      legend: { show: false },
    },
    series: yAxis,
  };
  return (
    <div className="flex flex-col gap-6 bg-white rounded-md text-blacks shadow-chart-report">
      <div className="flex justify-between">
        <div className="flex flex-col gap-[2px]">
          <div className="text-[18px] font-medium leading-6 opacity-90">
            Báo cáo thu nhập
          </div>
          <div className="left-5 text-[13px] opacity-50">Tổng quan 2024</div>
        </div>
        <div>
          <FaEllipsisV
            onClick={() => handleToggleYear()}
            className="opacity-50 cursor-pointer"
          />
          <div className="relative select-none">
            <div
              className={`absolute top-0 right-0  flex-col mr-2 border border-gray-200 divide-y divide-gray-200 rounded shadow-sm cursor-pointer opacity-80
            ${toggleYear ? "flex" : "hidden"}`}
            >
              {years.map((year, index) => {
                return (
                  <div
                    onClick={() => handleActiveYear(index)}
                    className={`px-8 py-2 hover:bg-gray-200 ${
                      activeYear === index ? "bg-gray-200" : ""
                    }`}
                  >
                    {year}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        {financials.map((financial, index) => {
          return (
            <div
              onClick={() => handleActiveTab(index)}
              className={` select-none cursor-pointer flex flex-col items-center duration-100 gap-2 rounded-[10px] border border-dashed border-stroke px-[30px] py-[15px]
              ${activeTab === index ? "bg-gray-100" : ""} `}
            >
              <div className="w-fit rounded-md bg-blacks bg-opacity-[8%] p-1.5 text-[22px] opacity-50">
                {financial.icon}
              </div>
              <div className="text-[15px] font-medium opacity-80">
                {financial.title}
              </div>
            </div>
          );
        })}
        <div className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-[10px] border border-dashed border-stroke px-[30px] py-[15px] ">
          <div className="w-fit rounded-md bg-blacks bg-opacity-[8%] p-1.5 text-[22px] opacity-50">
            <HiPlus />
          </div>
        </div>
      </div>
      <ReactApexChart
        options={chartConfigs.options}
        series={chartConfigs.series}
        type="bar"
      />
    </div>
  );
};
export default EarningReportCard;
