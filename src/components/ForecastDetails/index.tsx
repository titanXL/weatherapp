import { useForecast } from "@/providers/Forecast";

const ForecastDetails: React.FC = () => {
  const { forecast } = useForecast();
  return <div>{forecast?.city}</div>;
};

export { ForecastDetails };
