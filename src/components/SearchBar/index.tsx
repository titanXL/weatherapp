import { useForecast } from "@/providers/Forecast";
import { useContext } from "react";

interface Props {}

const SearchBar: React.FC<Props> = () => {
  const { searchForecastForCity } = useForecast();
  return <div onClick={() => searchForecastForCity("V")}>Search</div>;
};

export { SearchBar };
