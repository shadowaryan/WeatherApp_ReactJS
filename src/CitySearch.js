import React, { useState } from "react";
import axios from "axios";
import Temperature from "./Temperature";
import { Cascader } from 'antd';
import { Row, Col} from 'antd';
import ForecastData from "./ForcastData";


const CitySearchBar = () => {
  const [cityName, setcityName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState([]);

  const handleQueryChange = (e) => {
    setcityName(e[0]);
  };

  const handleSearch = async (e) => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        `https://api.teleport.org/api/cities/?search=${e}`
      );

      setResults(()=>{
        return response.data._embedded["city:search-results"].map((e)=>{
          return {"value":e.matching_full_name, "label":e.matching_full_name}
        })
      });
    } catch (error) {
    }

  };
  return (
    <div>
      <Row align="center" style={{ marginTop: 50 }}>
      <Col >
      <Cascader placeholder="Please select" 
        options={results}
        onChange={handleQueryChange}
        showSearch={true}
        onSearch={(e)=> handleSearch(e)}
        // onSearch={() =>setcityName(results.matching_full_name)}
        />
      
      </Col>
    </Row>
    <Temperature city_name={cityName}/>
    <ForecastData city_name={cityName}/>
    
    
     
    </div>
  );
};

export default CitySearchBar;
