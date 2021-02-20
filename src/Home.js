import React, { Component } from "react";
import MyIcon  from './we.jpg';
 
class Home extends Component {
  render() {
    return (
      <img
      src={MyIcon}
      style={{width:'45%', height:'30%'
       }}
  />    

    );
  }
}
 
export default Home;