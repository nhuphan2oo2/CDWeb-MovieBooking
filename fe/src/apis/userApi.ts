import AxiosClient from "./AxiosClient";

const userApi = {
  //   getAll: (params?: string) => {
  //     const url = "/movies";
  //     return axiosClient.get(url, { params });
  //   },
  //   get(id: string) {
  //     const url = `/movies/${id}`;
  //     return axiosClient.get(url);
  //   },
  login(email: string, password: string) {
    const url = `/users/login`;
    return AxiosClient.post(url, { email, password });
  },
};
export default userApi;
