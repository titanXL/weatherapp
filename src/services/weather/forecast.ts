import api from "@/utils/api";
import { ForecastApiResponse, ForecastData, ForecastDetails } from "./types";

export const getForecastForCity = async (
  city: string
): Promise<ForecastData> => {
  try {
    const response = await api.get<ForecastApiResponse>(`/forecast`, {
      params: {
        q: city,
      },
    });
    return mapForecastResponseToDomain(response.data);
  } catch (error) {
    // Handle Error
    console.error(error.message);
    throw new Error(error);
  }
};

export const getDefaultLocation = () => "Sofia";

export const getForecastForDefaultLocation = async (): Promise<ForecastData> =>
  await getForecastForCity(getDefaultLocation());

// Domain Converter
const mapForecastResponseToDomain = (
  weatherData: ForecastApiResponse
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
