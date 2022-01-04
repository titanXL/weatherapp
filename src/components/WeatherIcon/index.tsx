import { WeatherIcon as WeatherIconType } from "@/services/weather/types";
import { ICONS } from "@/utils/icons";
import Image from "next/image";

interface Props {
  type: WeatherIconType;
  height: number;
  width: number;
}

const WeatherIcon: React.FC<Props> = ({ type, height, width }) => {
  return (
    <Image src={ICONS[type]} alt="Weather Icon" height={height} width={width} />
  );
};

export { WeatherIcon };
