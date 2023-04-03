// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Calendar } from 'antd';


// const API_KEY = "430990587adc4adab11222906230104";
// function Cal(props) {
//   const [forecastData, setForecastData] = useState(null);

//   useEffect(() => {
//     axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${props.city_name}&days=7&aqi=no&alerts=no`)
//       .then(response => {
//         const data = response.data;
//         setForecastData(data.forecast.forecastday);
//       })
//       .catch(error => console.log(error));
//   }, []);

//   function getListData(value) {
//     const date = value.format('YYYY-MM-DD');
//     const day = forecastData.find(day => day.date === date);
//     if (day) {
//       return [
//         { type: 'success', content: `Avg: ${day.day.avgtemp_c}°C` },
//         { type: 'warning', content: `Max: ${day.day.maxtemp_c}°C` },
//         { type: 'error', content: `Min: ${day.day.mintemp_c}°C` }
//       ];
//     } else {
//       return [];
//     }
//   }

//   function dateCellRender(value) {
//     const listData = getListData(value);
//     return (
//       <ul>
//         {listData.map(item => (
//           <li key={item.content}>
//             <span className={`event-${item.type}`}>{item.content}</span>
//           </li>
//         ))}
//       </ul>
//     );
//   }

//   return (
//     <div>
//       {forecastData && (
//         <Calendar
//           dateCellRender={dateCellRender}
//           fullscreen={false}
//         />
//       )}
//     </div>
//   );
// }

// export default Cal;
