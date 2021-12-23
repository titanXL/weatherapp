import axios from "axios";

const baseURL = "http://api.openweathermap.org/data/2.5";

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use((cfg) => {
  cfg.params = { ...cfg.params, appid: process.env.NEXT_PUBLIC_WEATHER_KEY };

  return cfg;
});

export default instance;
