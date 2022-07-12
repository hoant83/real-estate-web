import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3456/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
axiosInstance.interceptors.request.use((config: any) => {
  const user = localStorage.getItem("infoSignin");
  console.log(user);
  if (!!user) {
    try {
      const parse = JSON.parse(user);
      console.log(parse.access_token);
      if (parse.access_token !== undefined) {
        config.headers.common["Authorization"] = "Bearer " + parse.access_token;
      }
    } catch (error) {
      config.headers.common["Access-Control-Allow-Origin"] = "*";
      console.log(config);
      return config;
    }
  }
  config.headers.common["Access-Control-Allow-Origin"] = "*";
  console.log(config);
  return config;
});
export default axiosInstance;
