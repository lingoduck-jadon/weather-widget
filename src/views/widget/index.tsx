import React, { useState, useEffect } from 'react';
import Axios from "axios";
import {
  Container,
  Card,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import CurrentWeather from '../../components/current';

//index.tsx:41 37.3248952 -122.04851549999998

const useStyles = makeStyles((theme: { spacing: (arg0: number) => any; }) => ({
  root: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: theme.spacing(2),
  },
}));

export default function Widget() {
  const classes = useStyles();
  const [weatherData, setWeatherData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const now = new Date();

  useEffect(() => {
    const getWeatherFromApi = async () => {
      setLoading(true);
      await Axios.get("https://api.openweathermap.org/data/2.5/onecall", {
        params: {
          lat: 37.3248952,
          lon: -122.04851549999998,
          units: "imperial",
          appid: "0bd8d98fcadc9dedbd6fa72f749b0388",
        },
      })
        .then((response: any) => {
          setWeatherData(response);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    if (!weatherData) {
      getWeatherFromApi();
    }
  }, [weatherData]);

  const data = weatherData;
  console.log(data);

  if (!weatherData) {
    return null;
  }

  return (
    <Container className={classes.root}>
      <Card elevation={1}>
        <CardContent>
          {loading ? (
            <Typography variant="h5">Loading Weather Data...</Typography>
          ) : (
            <>
              <Typography variant="h4">Cupertino, CA</Typography>
              <Typography variant="h6">{now.toUTCString()}</Typography>
              <Typography variant="h6">Basic</Typography>
            </>
          )}
          <CurrentWeather weatherData={weatherData.data.current}/>
        </CardContent>
      </Card>
    </Container>
  );
}
