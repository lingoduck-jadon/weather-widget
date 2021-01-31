export type WeekForecastDataTypes = {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: { day: number, night: number, eve: number, morn: number }
  humidity: number;
  pop: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: { day: number, min: number, max: number, night: number, eve: number, morn: number }
  uvi: number;
  weather: { description: string, icon: string, id: number, main: string }[];
  wind_deg: number;
  wind_speed: number;
}

export type CurrentWeatherDataTypes = {
  dt: number;
  dew_point: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: {
    id: number,
    main: string,
    description: string,
    icon: string
  }[];
  wind_speed: number;
}