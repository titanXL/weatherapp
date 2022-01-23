import { WeatherIcon as WeatherIconType } from "@/services/weather/types";
import { WeatherIcon } from "../WeatherIcon";

interface Props {
  temp_max: number;
  temp_min: number;
  icon: WeatherIconType;
  day: string;
}

const ForecastDetail: React.FC<Props> = ({ temp_max, temp_min, icon, day }) => {
  return (
    <li className="flex items-center" data-cy="forecast">
      <span className="text-lg font-light">{day}</span>
      <span className="ml-auto mr-1">
        <WeatherIcon type={icon} height={48} width={48} />
      </span>
      <span className="text-lg font-light">
        {temp_min} / {temp_max} °C
      </span>
    </li>
  );
};

export { ForecastDetail };
