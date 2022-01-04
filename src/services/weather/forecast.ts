import { makeEntity, MappedEntity } from "./../utils";
import api from "@/utils/api";
import {
  ForecastApiResponse,
  ForecastApiResponseSuccess,
  ForecastData,
  ForecastDetails,
} from "./types";

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
  const forecastDetails: Array<ForecastDetails> = weatherData.list.map((d) => {
    return {
      temp: d.main.temp,
      icon: d.weather[0].icon,
      description: d.weather[0].description,
      date: new Date(d.dt_txt).toISOString(),
    };
  });
  return {
    forecast: {
      city: weatherData.city.name,
      details: forecastDetails,
    },
  };
};
