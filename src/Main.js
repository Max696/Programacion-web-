import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Mediciones from "./Mediciones";
import Notas from "./Notas";
import Login from "./Login";
import ToDo from "./ToDo";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Aquarium</h1>
          <ul className="header">
            <li><NavLink exact to ="/"  >Home</NavLink></li> 
            <li><NavLink to ="/Mediciones">Mediciones</NavLink></li>
            <li><NavLink to ="/Notas">Notas</NavLink></li>
            <li><NavLink to ="/ToDo">ToDo</NavLink></li>
            <li><NavLink to ="/Login">Login</NavLink></li>
            
          </ul>
          <div className="content">
             <Route exact path="/" component={Home} />
             <Route path ="/Mediciones" component ={Mediciones}/>
             <Route path ="/Notas" component ={Notas}/>
              <Route path ="/ToDo" component ={ToDo}/>
             <Route path ="/Login" component ={Login}/>
            
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;