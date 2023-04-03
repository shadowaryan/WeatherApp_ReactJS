// import React, { useState } from "react";

// const LatLongConverter = () => {
//   const [lat, setLat] = useState("");
//   const [long, setLong] = useState("");
//   const [result, setResult] = useState("");

//   const handleLatChange = (e) => {
//     setLat(e.target.value);
//   };

//   const handleLongChange = (e) => {
//     setLong(e.target.value);
//   };

//   const handleConvert = (e) => {
//     e.preventDefault();
//     const latNum = parseFloat(lat);
//     const longNum = parseFloat(long);
//     if (isNaN(latNum) || isNaN(longNum)) {
//       setResult("Invalid input");
//     } else {
//       setResult(`Latitude: ${latNum}, Longitude: ${longNum}`);
//     }
//   };

//   return (
//     <div>
//       <h1>Latitude/Longitude Converter</h1>
//       <form onSubmit={handleConvert}>
//         <label>
//           Latitude:
//           <input type="text" value={lat} onChange={handleLatChange} />
//         </label>
//         <br />
//         <label>
//           Longitude:
//           <input type="text" value={long} onChange={handleLongChange} />
//         </label>
//         <br />
//         <button type="submit">Convert</button>
//       </form>
//       <p>{result}</p>
//     </div>
//   );
// };

// export default LatLongConverter;