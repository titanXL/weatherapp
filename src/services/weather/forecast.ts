import { makeEntity, MappedEntity } from "./../utils";
import api from "@/utils/api";
import {
  ForecastApiResponse,
  ForecastApiResponseSuccess,
  ForecastData,
  ForecastDetails,
} from "./types";
import { getDate, getHours, getMonth, parseJSON } from "date-fns";

export const getForecastForCity = async (
  city: string
): Promise<MappedEntity<ForecastData>> => {
  try {
    const response = await api.get<ForecastApiResponseSuccess>(`/forecast`, {
      params: {
        q: city,
      },
    });
    return makeEntity(mapForecastResponseToDomain(response.data));
  } catch (error) {
    // Handle Error.
    return makeEntity(null, new Error(error.response.data.message));
  }
};

export const getDefaultLocation = () => "Sofia";

export const getForecastForDefaultLocation = async (): Promise<
  MappedEntity<ForecastData>
> => await getForecastForCity(getDefaultLocation());

// Domain Converter
const mapForecastResponseToDomain = (
  weatherData: ForecastApiResponseSuccess
): ForecastData => {
  const forecastDetails: any = weatherData.list.reduce<any>(
    (groupedData, currentData) => {
      const parsedDate = parseJSON(currentData.dt_txt);
      const month = getMonth(parsedDate) + 1;
      const day = getDate(parsedDate);
      const hour = getHours(parsedDate);
      const icon = currentData.weather[0].icon;
      const key = `${day} / ${month}`;
      const { temp_max, temp_min } = currentData.main;
      if (groupedData[key]) {
        groupedData[key].temp_max = Math.round(
          Math.max(temp_max, groupedData[key].temp_max)
        );
        groupedData[key].temp_min = Math.round(
          Math.min(temp_min, groupedData[key].temp_min)
        );
        groupedData[key].icon =
          groupedData[key].hour < hour ? groupedData[key].icon : icon;
      } else {
        groupedData[key] = {
          temp_max: Math.round(temp_max),
          temp_min: Math.round(temp_min),
          icon,
        };
      }
      return groupedData;
    },
    {}
  );

  const closesForecast = {
    date: weatherData.list[0].dt,
    temp: weatherData.list[0].main.temp,
    icon: weatherData.list[0].weather[0].icon,
    description: weatherData.list[0].weather[0].description,
  };
  return {
    forecast: {
      city: weatherData.city.name,
      country: weatherData.city.country,
      ...closesForecast,
      details: forecastDetails,
    },
  };
};
