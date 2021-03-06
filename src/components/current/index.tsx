import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { CurrentWeatherDataTypes } from '../../services/types';

interface CurrentWeatherProps {
  weatherData: CurrentWeatherDataTypes;
}

export default function Current({ weatherData }: CurrentWeatherProps) {
  return (
    <Box my={1}>
      {weatherData && <>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} />
            <Typography variant="h5">{Math.floor(weatherData.temp)}</Typography>
            <Typography variant="h6">°F</Typography>
          </Box>
          <Box ml={3} textAlign="right" display="flex" alignItems="center">
            <Box>
              <Typography variant="body1" color="textSecondary">{weatherData.weather[0].description}</Typography>
              <Typography variant="body1" color="textSecondary">Humidity: {weatherData.humidity}%</Typography>
              <Typography variant="body1" color="textSecondary">Wind: {Math.floor(weatherData.wind_speed)} mph</Typography>
            </Box>
          </Box>
        </Box>
      </>}
    </Box>
  );
}
