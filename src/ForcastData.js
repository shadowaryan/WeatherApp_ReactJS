import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar } from 'antd';
import { Row, Col} from 'antd';

const API_KEY = "430990587adc4adab11222906230104";

function ForecastData(props) {
    const [forecastData, setForecastData] = useState(0);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const today = new Date();
    const dates = [];

    useEffect(() => {
        axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${props.city_name}&aqi=no&alerts=no&days=30`)
        .then(response => {
            const data = response.data;
            console.log("DATA:", data.forecast.forecastday);
            setForecastData(data.forecast.forecastday);
        })
        .catch(error => console.log(error));
    }, [props.city_name])
  
    const dateCellRender = ((e)=>{    
        let d = e.get('date')
        let m = e.get('month')
        let y = e.get('year')
        m=m+1
        let new_date
        if(d<10){
            d = "0"+d
        }
        if(m+1<9){
            m = "0"+m
        }

        new_date = y+"-"+m+"-"+d
        
        if(forecastData==0){
            return null
        }
        
        for (let i = 0; i < 14; i++){
            if(new_date == forecastData[i].date){
                return (
                    <>
                        <Row>
                        <Col >
                            Max Temp : {forecastData[i].day.maxtemp_c}°C <br/>
                            Min Temp : {forecastData[i].day.mintemp_c}°C <br/>
                            Avg Temp : {forecastData[i].day.avgtemp_c}°C
                        </Col>
                        <Col style={{ marginLeft: 10 }}>
                            <img src={forecastData[i].day.condition.icon} alt={forecastData[i].day.condition.text} />
                        </Col>
                        </Row>
                    </>                
                ) 
            }
        }
    })

    console.log(forecastData.length>0);

    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };

  
   

    return (
        <div>
            <Calendar 
            dateCellRender={dateCellRender}
            onPanelChange={onPanelChange} 
            />
        </div>
    );

}

export default ForecastData;
