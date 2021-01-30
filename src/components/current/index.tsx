import React from 'react';
import { Box, Typography } from '@material-ui/core';

interface CurrentWeatherProps {
  weatherData: any;
}

export default function Current({ weatherData }: CurrentWeatherProps) {
  return (
    <Box mt={1}>
      {weatherData && <>
        <Box display="flex" alignItems="center">
          <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} />
          <Typography variant="h5">{weatherData.temp}</Typography>
          <Typography variant="h6">°F</Typography>
        </Box>
        <Box textAlign="left">
          <Typography variant="h6">Conditions: {weatherData.weather[0].description}</Typography>
          <Typography variant="h6">Humidity: {weatherData.humidity}%</Typography>
          <Typography variant="h6">Wind: {Math.floor(weatherData.wind_speed)} mph</Typography>
        </Box>
      </>}
    </Box>
  );
}
