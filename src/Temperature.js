import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Row, Col} from 'antd';

function Temperature(props) {
  const [weatherIcon, setweatherIcon] = useState();
  const [temperature, setTemperature] = useState("0");
  const [weather, setWeather] = useState();
  const [wind_kph, setWind_kph] = useState();
  const [wind_dir, setWind_dir] = useState();
  const [humidity, setHumidity] = useState();



  const API_KEY = "430990587adc4adab11222906230104";
  
  const handleGetTemperature = () => {
    const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${props.city_name}&aqi=no`;
//     const response = await fetch(url);
//     const data = await response.json();
//     setTemperature(data.current.temp_c);
    axios.get(url).then(response=>{
     setTemperature(response.data.current.temp_c)
     setweatherIcon(response.data.current.condition.icon)
     setWeather(response.data.current.condition.text)
     setWind_dir(response.data.current.wind_dir)
     setHumidity(response.data.current.humidity)
     setWind_kph(response.data.current.wind_kph)
})
    

};
  useEffect(handleGetTemperature, [props.city_name])

  return (
    <>
        <Row align="center" style={{ marginTop: 60}}>
            <Col align="center" >
                <font size="40">{temperature}</font>°C
            </Col>
            <Col align="middle" style={{ marginLeft: 60}}>
                <img src={weatherIcon} alt="None" />
                <br/>{weather}
            </Col>
        </Row>
        <Row align="center" style={{ marginTop: 30 }}>
      <Col >
        Humidity - {humidity} % |
        Wind Speed - {wind_kph} km/H |
        Wind Direction - {wind_dir}
      </Col >
    </Row>
        
    
    </>
  );
}

export default Temperature;