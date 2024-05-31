import { useLocation } from "react-router-dom";
import bookingHistoryApi from "../../apis/bookingHistoryApi";

const PaymentPage = () => {
  const pathname = useLocation().search;
  const searchParams = new URLSearchParams(pathname);
  const code = searchParams.get("vnp_ResponseCode");
  const booking = JSON.parse(localStorage.getItem("booking") || "{}");
  const movieId = JSON.parse(localStorage.getItem("movieId") || "{}");
  const showTimeId = JSON.parse(localStorage.getItem("showTimeId") || "{}");
  const seats = JSON.parse(localStorage.getItem("seats") || "{}");
  const total = JSON.parse(localStorage.getItem("total") || "{}");
  const discount = JSON.parse(localStorage.getItem("discount") || "{}");
  if (code === "00") {
    window.location.href = "/success-booking";
    bookingHistoryApi.add(1, showTimeId, seats, discount, total);
    localStorage.removeItem("movieId");
    localStorage.removeItem("showTimeId");
    localStorage.removeItem("total");
    localStorage.removeItem("discount");
    return;
  }
  window.location.href =
    "/seat-selecting?movieId=" + movieId + "&showTimeId=" + showTimeId;
  // bookingHistoryApi.add(1, showTimeId, seats, discount, total); // nen add vao 1 booking history fail

  localStorage.removeItem("movieId");
  localStorage.removeItem("showTimeId");
  localStorage.removeItem("total");
  localStorage.removeItem("discount");
  return;
};
export default PaymentPage;
