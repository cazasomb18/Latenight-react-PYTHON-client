import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import logo from './logo.svg';
import "./App.css";
import Login, { Component } from './LoginControl';
const apiKey = 'AIzaSyCbQ8Y7CHZUWrnEGUCqC8fNR4Kw1dfk5AE';


// const My404 = () => {
//   return (
//     <div>
//       You are lost
//     </div>
//     )
// }

class App extends React.Component {
  constructor(){
    console.log('constructor');
    super()
    this.state = {
      restaurants: [],
      username: '',
      userId: '',
      loggedIn: false
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

  setUserInfo = (userData) => {
    console.log("function setUserInfo hit")
    console.log("user data: ", userData)
    // once we are sure this is working, we want to setState in this 
    // component based on userData passed in as the argument
  }

  render(){

    console.log("state: ", this.state)

  return (
      <div className="AppContainer">
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
          <a>
            <img src={logo} width="30" height="30" href="/"/>
          </a>

          
        </nav>
        <h1>Late Night React Client API</h1>
        { !this.state.loggedIn ? <Login setUserInfo={this.setUserInfo} /> : null}

      </div>
  
  )};
};

        // { !this.state.loggedIn ? <Register /> : null }
        // { this.state.loggedIn ? <SomeOtherComponent /> : null }

export default App;
