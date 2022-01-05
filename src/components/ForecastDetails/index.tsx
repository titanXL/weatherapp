import { ForecastDetails as ForecastDetailsType } from "@/services/weather/types";
import { ForecastDetail } from "./forecast-detail";

interface Props {
  details: ForecastDetailsType;
}

const ForecastDetails: React.FC<Props> = ({ details }) => {
  return (
    <ul className="p-4">
      {Object.keys(details).map((key, index) => (
        <ForecastDetail {...details[key]} day={key} key={index} />
      ))}
    </ul>
  );
};

export { ForecastDetails };
