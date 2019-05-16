import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.svg';
import "./App.css";
import LoginControl from './LoginControl';
import RegisterControl from './RegisterControl';
const apiKey = 'AIzaSyCbQ8Y7CHZUWrnEGUCqC8fNR4Kw1dfk5AE';


// const My404 = () => {
//   return (
//     <div>
//       You are lost
//     </div>
//     )
// }

class App extends React.Component {
  constructor(props){
    console.log('constructor');
    super(props);
    this.state = {
      restaurants: [],
      username: '',
      userId: '',
      loggedIn: false
    }
  }
  componentDidMount () {
    //// INITIAL DOM RENDERING ///

    console.log('cdm: ', );

    // this.getRestaurants()

    this.getRestaurants();

  }
  getRestaurants = async () => {
    try {



      const restaurantListResponse = await fetch('http://localhost:3000/restaurants', {

        method: 'GET',
        credentials: 'include', 
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const restaurants = await restaurantListResponse.json()

      this.setState({
        restaurants: restaurants
      })


    }catch(err){

      console.log('THERE WAS AN ERROR: ');
      console.log(err);
    }
  }

  setUserInfo = (userData) => {
    console.log("function setUserInfo calling");
    console.log("user data: ", userData);
    this.setState(userData);


    // once we are sure this is working, we want to setState in this 
    // component based on userData passed in as the argument
  }

  render(){

    console.log("App state: ", this.state)

  return (
      <div className="AppContainer">
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
          <a>
            <img src={logo} width="30" height="30" href="/"/>
          </a>
        </nav>

        <h1>Late Night React Client API</h1>
        <br/>
        <br/>
        { !this.props.loggedIn ? <LoginControl setUserInfo={this.setUserInfo} /> : null}
        <br/>
        <br/>
        { !this.props.loggedIn ? <RegisterControl/> : null }

      </div>
  
  )};
};

        // { this.state.loggedIn ? <SomeOtherComponent /> : null }

export default App;
