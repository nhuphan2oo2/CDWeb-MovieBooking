import { useLocation } from "react-router-dom";
import { add } from "../../apis/bookingHistoryApi";
import { useContext, useEffect } from "react";
import { ToastContext } from "../../hooks/ToastMessage/ToastContext";
import { SeatType } from "../../type/type";

const PaymentPage = () => {
  const pathname = useLocation().search;
  const searchParams = new URLSearchParams(pathname);
  const code = searchParams.get("vnp_ResponseCode");
  const user = JSON.parse(sessionStorage.getItem("user") || "{}");
  const movieId = JSON.parse(localStorage.getItem("movieId") || "{}");
  const showTimeId = JSON.parse(localStorage.getItem("showTimeId") || "{}");
  const seats = JSON.parse(localStorage.getItem("seats") || "{}");
  const discount = JSON.parse(localStorage.getItem("discount") || "{}");
  const toast = useContext(ToastContext);
  const seatsId = seats.map((seat: SeatType) => seat.id);

  const addBooking = async () => {
    if (code === "00") {
      await add(user.id, showTimeId, seatsId, discount);
      toast.showToast("Đặt vé thành công");
      window.location.href = "/success-booking";
      localStorage.removeItem("movieId");
      localStorage.removeItem("showTimeId");
      localStorage.removeItem("total");
      localStorage.removeItem("discount");
    } else {
      window.location.href =
        "/seat-selecting?movieId=" + movieId + "&showTimeId=" + showTimeId;
      toast.showToast("Đặt vé thất bại, vui lòng thử lại!");
      setTimeout(() => {
        localStorage.removeItem("movieId");
        localStorage.removeItem("showTimeId");
        localStorage.removeItem("total");
        localStorage.removeItem("discount");
      }, 1000);
    }
  };
  useEffect(() => {
    addBooking();
  }, []);

  // bookingHistoryApi.add(
  //   user.id,
  //   showTimeId,
  //   seats,
  //   discount,
  //   total,
  //   BookingStatus.cancel
  // ); // nen add vao 1 booking history fail

  return <></>;
};
export default PaymentPage;
