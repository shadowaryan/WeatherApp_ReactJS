import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar } from 'antd';

const API_KEY = "430990587adc4adab11222906230104";

function ForecastData(props) {
  const [forecastData, setForecastData] = useState(null);
//   const [dateCellRender, setdateCellRender] = useState();

  useEffect(() => {
    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${props.city_name}&days=7&aqi=no&alerts=no`)
      .then(response => {
        const data = response.data;
        setForecastData(data.forecast.forecastday);
      })
      .catch(error => console.log(error));
  }, [props.city_name]);

  const dateCellRender = (()=>{
    return "x"

    })

  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  
   

  return (
    <div>
        <Calendar 
        dateCellRender={dateCellRender}
        onPanelChange={onPanelChange} 
        />

      {forecastData && forecastData.map(day => (
        <div key={day.date}>
          <h3>{day.date}</h3>
          <p>Average Temperature: {day.day.avgtemp_c}°C</p>
          <p>Max Temperature: {day.day.maxtemp_c}°C</p>
          <p>Min Temperature: {day.day.mintemp_c}°C</p>
          <img src={day.day.condition.icon} alt={day.day.condition.text} />
          <p>{day.day.condition.text}</p>
        </div>
      ))}
    </div>
  );
}

export default ForecastData;
