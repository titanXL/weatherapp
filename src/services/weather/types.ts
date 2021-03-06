export type WeatherIcon =
  | "11d"
  | "09d"
  | "10d"
  | "13d"
  | "50d"
  | "01d"
  | "01n"
  | "02d"
  | "02n"
  | "03d"
  | "03n"
  | "04d"
  | "04n";
export interface ForecastApiResponseDetails {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: WeatherIcon;
    }
  ];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  rain: {
    "3h": number;
  };
  sys: {
    pod: string;
  };
  dt_txt: string;
}

type ApiStatusCodesFail = "404" | "500";
export interface ForecastApiResponseFail {
  message: string;
  cod: ApiStatusCodesFail;
}

export interface ForecastApiResponseSuccess {
  cod: "200";
  message: number;
  cnt: number;
  list: Array<ForecastApiResponseDetails>;
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

export type ForecastApiResponse =
  | ForecastApiResponseFail
  | ForecastApiResponseSuccess;

export interface ForecastDetails {
  [key: string]: {
    temp_max: number;
    temp_min: number;
    icon: WeatherIcon;
  };
}

export type ForecastData = Record<
  "forecast",
  {
    city: string;
    country: string;
    details: ForecastDetails;
    date: string;
    description: string;
    icon: WeatherIcon;
    temp: number;
  }
>;
