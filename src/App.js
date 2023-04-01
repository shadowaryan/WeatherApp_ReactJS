import { useState, useEffect } from 'react';
import { Input, Space } from 'antd';
import './App.css';
import react from 'react'
import { Row, Col} from 'antd';


const { Search } = Input;
const onSearch = (value) => console.log(value);

function App() {
  // const [cityName,setcityName] = useState(0);
  return (
    <>
    <Row align="center" style={{ marginTop: 50 }}>
      <Col span={8}>
      <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}/>
      </Col>
    </Row>
    <Row align="center" style={{ marginTop: 40, marginLeft: 40 }}>
      <Col span={3}>
      <font size="40">56</font> °C
      </Col>
      <Col>
      picture
      </Col>
    </Row>
    <Row align="center" style={{ marginTop: 30 }}>
      <Col span={3}>
      <Row style={{ marginRight: 40 }}>wind speed - 100 Km/h</Row>
      </Col >
      <Col>
      blank
      </Col>
    </Row>
    <Row align="center" style={{ marginTop: 60 }}>
      <Col span={2}>1</Col>
      <Col span={2}>2</Col>
      <Col span={2}>3</Col>
      <Col span={2}>4</Col>
      <Col span={2}>5</Col>
      <Col span={2}>6</Col>
      <Col span={2}>7</Col>
    </Row>
    
    
   </>
  );
}

export default App;
