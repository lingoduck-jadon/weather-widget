import React from 'react';
import { Box, Typography } from '@material-ui/core';

interface CurrentWeatherProps {
  weatherData: {
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
  };
}

export default function Current({ weatherData }: CurrentWeatherProps) {
  return (
    <Box mt={1} display="flex">
      {weatherData && <>
        <Box display="flex" alignItems="center">
          <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} />
          <Typography variant="h5">{weatherData.temp}</Typography>
          <Typography variant="h6">°F</Typography>
        </Box>
        <Box ml={3} textAlign="right" display="flex" alignItems="center">
          <Box>
            <Typography variant="h6">Humidity: {weatherData.humidity}%</Typography>
            <Typography variant="h6">Wind: {Math.floor(weatherData.wind_speed)} mph</Typography>
          </Box>
        </Box>
      </>}
    </Box>
  );
}
