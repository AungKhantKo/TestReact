// App.js
import React from "react";
import './App.css';
// import TestTest from './componets/TestTest'; // ✅ Importing named export
import Menu from "./Menu";
import Navbar from "./Navbar";
import "./cus/css/cus.css"



class App extends React.Component{
  render(){

    const ch = {
      tx: {
        backgroundColor : 'blue',
        color : 'white',
      }
    }

    return(
      <div>
        <Menu>
          <div style={{backgroundColor : 'pink', color : 'white', height : 150,}}>
            <h1>Happy Test</h1>
            <p style={ch.tx}>Component Composition</p>
          </div>
        </Menu>
        <Navbar>
          <h5>Head Test</h5>
        </Navbar>
        <button className='btn'>Yes Click Me</button> 
        <button className='btn1'>No </button>
      </div>
    )
  }
}

export default App;
