import axios from "axios";

const AxiosClient = axios.create({
  baseURL:
    "https://cinestar.com.vn/_next/data/tIoj0NkX4uTafiFTekDQY/index.json",
  headers: {
    "Content-Type": "application/json",
  },
});
export default AxiosClient;
