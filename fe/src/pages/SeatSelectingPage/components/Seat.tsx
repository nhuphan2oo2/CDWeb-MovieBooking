import clsx from "clsx";
import { useState } from "react";

export interface SeatProps {
  index?: string;
  status?: "available" | "booked" | "selected" | "unavailable";
  onClick?: () => void;
}
const Seat: React.FC<SeatProps> = (props) => {
  const { index, status, onClick } = props;

  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    if (status === "booked" || status === "unavailable") return;
    setSelected(!selected);
  };

  const classes = clsx(
    "h-7 select-none border border-black rounded-sm aspect-[1.05] text-[13px] flex items-center font-bold justify-center cursor-pointer",
    status === "booked" ? "bg-red-400" : "",
    status === "unavailable" ? "bg-gray-400" : "",
    selected ? "bg-green-400" : ""
  );

  return (
    <div
      onClick={() => {
        handleSelect();
        onClick && onClick();
      }}
      className={classes}
    >
      {index}
    </div>
  );
};
export default Seat;
