import { useForecast } from "@/providers/Forecast";
import {
  ChangeEventHandler,
  FormEventHandler,
  useContext,
  useState,
} from "react";
import { SeachButton } from "./button";
import { SearchInput } from "./input";

interface Props {}

const SearchBar: React.FC<Props> = () => {
  const { searchForecastForCity } = useForecast();
  const [city, setCity] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setCity(e.target.value);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    searchForecastForCity(city);
  };

  return (
    <div className="bg-gray-200 p-2">
      <form
        onSubmit={handleSubmit}
        className="m-auto flex items-center justify-center w-[90%] max-w-2xl"
      >
        <SearchInput
          value={city}
          onChange={handleChange}
          placeholder="Search for city"
        />
        <SeachButton disabled={!city} />
      </form>
    </div>
  );
};

export { SearchBar };
