import React from 'react';
import logo from './logo.svg';
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";



class App extends React.Component {
  constructor(){
    super()
    this.state = {
      
    }

  }
  render(){

    console.log("state: ", this.state)

  return (
      <div className="container">
        <h2>Late Night React Client API</h2>
      </div>
  
  )};
};

export default App;
