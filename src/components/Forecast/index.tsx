import { useForecast } from "@/providers/Forecast";
import { formatDate } from "@/utils/format/date";
import { WeatherIcon } from "@/components/WeatherIcon";
import { roundNumber } from "@/utils/format/number";
import { Divider } from "@/components/Divider";
import { ForecastDetails } from "@/components/ForecastDetails";
import { ForecastData } from "@/services/weather/types";

interface Props {
  forecast: ForecastData["forecast"];
}

const Forecast: React.FC<Props> = ({ forecast: defaultForecast }) => {
  const { forecast: currentForecast } = useForecast();
  const forecast = currentForecast || defaultForecast;

  return (
    <div className="p-4 flex flex-col">
      <span className="text-red-600 font-light text-sm">
        {formatDate(forecast.date)}
      </span>
      <span className="text-4xl font-bold mb-2" data-cy="city">
        {forecast.city}, {forecast.country}
      </span>
      <div className="flex mx-auto items-end mb-6">
        <WeatherIcon type={forecast.icon} height={70} width={70} />
        <span className="font-light text-5xl">
          {roundNumber(forecast.temp)} °C
        </span>
      </div>
      <Divider />
      <ForecastDetails details={forecast.details} />
    </div>
  );
};

export { Forecast };
