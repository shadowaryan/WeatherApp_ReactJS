import './App.css';
import react from 'react'
import { Row, Col} from 'antd';
import CitySearch from './CitySearch';
import 'antd/dist/reset.css';


// const { Search } = Input;
// const onSearch = (setcityName) => console.log(setcityName);

function App() {

  return (
    <>
    <CitySearch/>
    
    {/* <Row align="center" style={{ marginTop: 60 }}>
      <Col span={2}>1</Col>
      <Col span={2}>2</Col>
      <Col span={2}>3</Col>
      <Col span={2}>4</Col>
      <Col span={2}>5</Col>
      <Col span={2}>6</Col>
      <Col span={2}>7</Col>
    </Row> */}
    
    
   </>
  );
}

export default App;
