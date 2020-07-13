import React from 'react';
import WeatherDetail from "../../Weather/WeatherDetail";
import CardLayout from "components/materialUI/CardLayout";

const WeatherCard = () => {
  return (
    <CardLayout styleName="col-lg-6">
      <WeatherDetail/>
    </CardLayout>
  );
};

export default WeatherCard;