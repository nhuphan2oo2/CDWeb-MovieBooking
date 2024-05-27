import { SeatType } from "../type/type";
import AxiosClient from "./AxiosClient";

const bookingHistoryApi = {
  //   getAll: (params?: string) => {
  //     const url = "/movies";
  //     return AxiosClient.get(url, { params });
  //   },
  //   get(id: string) {
  //     const url = `/movies/${id}`;
  //     return AxiosClient.get(url);
  //   },
  add(
    userId: number,
    showTimeId: number,
    seats: SeatType[],
    discount: number,
    total: number
  ) {
    const url = `/bookingHistories`;
    const body = {
      user: {
        id: userId,
      },
      tickets: seats.map((seat) => {
        return {
          showTime: {
            id: showTimeId,
          },
          seat: {
            id: seat.id,
          },
        };
      }),

      discount: discount,
      total: total,
      status: 0,
    };
    console.log("body ", body);

    return AxiosClient.post(url, body);
  },
};
export default bookingHistoryApi;
