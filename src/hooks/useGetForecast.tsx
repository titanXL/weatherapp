import { useLoading } from "@/providers/Loading";
import { useToasts } from "@/providers/ToastProvider";
import { getForecastForCity } from "@/services/weather/forecast";
import { ForecastData } from "@/services/weather/types";
import { useCallback, useState } from "react";

const useGetForecast = () => {
  const loading = useLoading();
  const toastity = useToasts();

  const [data, setForecast] = useState<ForecastData>(null);
  const doFetch = useCallback(async (city: string) => {
    loading.on("search");
    toastity.clearAll();
    const response = await getForecastForCity(city);
    loading.off();

    if (response.value) {
      setForecast(response.value);
    } else {
      toastity.setToast(response.error.message);
    }
  }, []);

  return {
    data,
    doFetch,
  };
};

export { useGetForecast };
