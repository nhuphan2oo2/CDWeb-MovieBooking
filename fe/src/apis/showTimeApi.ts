import AxiosClient from "./AxiosClient";

const showTimeApi = {
  //   getAll: (params?: string) => {
  //     const url = "/movies";
  //     return AxiosClient.get(url, { params });
  //   },
  get(id: string) {
    const url = `/showtimes/${id}`;
    return AxiosClient.get(url);
  },
  getDatesByMovieId(id: number) {
    const url = `/showtimes/dateByMovieId/${id}`;
    return AxiosClient.get(url);
  },
  getByMovie(id: number) {
    const url = `/showtimes/movie/${id}`;
    return AxiosClient.get(url);
  },
};
export default showTimeApi;
