import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { WeekForecastDataTypes } from '../../services/types';

interface WeekForecastProps {
  weatherData: WeekForecastDataTypes[];
  convertToDay: (day: number) => string;
}

export default function WeekForecast({ weatherData, convertToDay }: WeekForecastProps) {

  return (
    <Box mt={1}>
      <Grid container spacing={1}>
        {weatherData.map((day: WeekForecastDataTypes, index) => {
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