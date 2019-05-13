import React from 'react';
import logo from './logo.svg';
import "./App.css";

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

    }

  }
  render(){

    console.log("state: ", this.state)

  return (
      <div className="container">
        <nav className="navbar nvarbar-expand-lg navbar-light bg-light" >
          <a>
            <img src={logo} width="30" height="30"/>
          </a>

          
        </nav>
        <h2>Late Night React Client API</h2>
      </div>
  
  )};
};

export default App;
