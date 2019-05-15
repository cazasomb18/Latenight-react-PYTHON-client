import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import Login from './login';

import "bootstrap/dist/css/bootstrap.min.css";

const My404 = () => {
  return (
    <div>
      You are lost
    </div>
    )
}

class App extends React.Component {
  constructor(){
    console.log('constructor');
    super()
    this.state = {
      restaurants: []
    }
  }
  componentDidMount (){
    console.log('cdm');

    // this.getRestaurants()

  }

  // getRestaurants = async () => {
  //   try{
  //     const response = await fetch('')
  //   }

  // }
  render(){

    console.log("state: ", this.state)

  return (
      <div className="AppContainer">
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
          <a>
            <img src={logo} width="30" height="30" href="/"/>
          </a>

          
        </nav>
        <h2>Late Night React Client API</h2>
        <login/>
      </div>
  
  )};
};

export default App;
