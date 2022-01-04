import { useGetForecast } from "@/hooks/useGetForecast";
import { ForecastData } from "@/services/weather/types";
import { createContext, useContext, useMemo } from "react";

interface Context {
  searchForecastForCity: (city: string) => void;
  forecast: ForecastData["forecast"];
}

const ForecastContext = createContext<Context>(null);

const ForecastProvider: React.FC = ({ children }) => {
  const { doFetch, data } = useGetForecast();
  const value = useMemo(
    () => ({
      searchForecastForCity: doFetch,
      forecast: data?.forecast,
    }),
    [data?.forecast, doFetch]
  );

  return (
    <ForecastContext.Provider value={value}>
      {children}
    </ForecastContext.Provider>
  );
};

const useForecast = () => useContext(ForecastContext);

export { ForecastProvider, useForecast };
