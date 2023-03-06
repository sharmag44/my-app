import './App.css';
import React from 'react';
import Header from "./Components/Header/Header"
import Code from "./Components/Code/Code.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <Code />
    </div>
  );
}

// const style = {
//   padding: "20px",
//   marginLeft: "30px",
//   border: "2px solid black",
//   display: "inline-block"
// }
// const User = (props) => {
//   return <div style={style}>
//     <label for="userInfo" style={{
//       textAlign: "center",
//       margin: "0,auto",
//     }}>User Info</label>
//     <p>Name :{props.name}</p>
//     <p>Age :{props.age}</p>
//     <p>Place :{props.place}</p>

//   </div>
// }


export default App;
