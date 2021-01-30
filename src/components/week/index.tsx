import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

type WeatherData = {
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

interface WeekForecastProps {
  weatherData: WeatherData[];
  convertToDay: (day: number) => string;
}

export default function WeekForecast({ weatherData, convertToDay }: WeekForecastProps) {

  return (
    <Box mt={1}>
      <Grid container spacing={1}>
        {weatherData.map((day: WeatherData, index) => {
          if (index > 0 && index < weatherData.length - 1) {
            return (
              <Grid item sm={2} xs={4} key={day.dt}>
                <Box p={1} display="flex">
                  <Box>
                    <Typography variant="body1">{convertToDay(day.dt)}</Typography>
                    <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} height={60} width={60} />
                    <Box display="flex" justifyContent="space-between" ml={1}>
                      <Typography variant="body2">{Math.floor(day.temp.max)}°</Typography>
                      <Typography variant="body2" color="textSecondary">{Math.floor(day.temp.min)}°</Typography>
                    </Box>
                  </Box>
                  </Box>
              </Grid>
            )
          }
        })}
      </Grid>
    </Box>
  );
}