import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.34.140.51:8088",
});

export default instance;
