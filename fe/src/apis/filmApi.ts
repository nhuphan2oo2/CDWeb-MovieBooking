import axiosClient from "./AxiosClient";

const filmApi = {
  getAll: (params?: string) => {
    const url = "/movies";
    return axiosClient.get(url, { params });
  },
  get(id: string) {
    const url = `/movies/${id}`;
    return axiosClient.get(url);
  },
  getByType(type: string) {
    const url = `/movies?type=${type}`;
    return axiosClient.get(url);
  },
};
export default filmApi;
