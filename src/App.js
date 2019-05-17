import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.svg';
import "./App.css";
import LoginControl from './LoginControl';
import RegisterControl from './RegisterControl';
import LateRestaurantsList from './LateRestaurantsList';

class App extends React.Component {
  constructor(props){
    console.log('constructor');
    super(props);
    this.state = {
      restaurants: [],
      userName: '',
      userId: '',
      loggedIn: false
    }

  }
  componentDidMount () {
    //// INITIAL DOM RENDERING ///
    console.log('cdm: ', );
    
    // this.getRestaurants = this.getRestaurants.bind(this);
    // this.setUserInfo = this.setUserInfo.bind(this);

  }
  setUserInfo = (userData) => {

    console.log("function setUserInfo calling");
    console.log("user data: ", userData);

    // once we are sure this is working, we want to setState in this 
    // component based on userData passed in as the argument 
  }
  onClick = (e) => {

  }

  //// UNDER CONSTRUCTION - CHECKED OUT TO DIFFERENT BRANCH IN ORDER TO TRY
  //// CALLING API ON LATERESTAURANTSLIST /////

  render(){

    console.log("App state: ", this.state)

    return (

      <div className="AppContainer">

        <h1 className="">
        Late Night React Client API
        </h1>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a width="30" height="30" href="http://localhost:3000/">HOME</a>
            <a width="30" height="30" href="http://localhost:3000/auth/logout">LOGOUT</a>
            <a width="30" height="30" href="http://localhost:3000/auth/">LOGIN</a>
        </nav>
          <br/>
          <div>
            {!this.props.loggedIn ? <RegisterControl setRegisterInfo={this.setRegisterInfo}/> : null }
          </div>
          <br/>
          <div>
            {!this.props.loggedIn ? <LoginControl setUserInfo={this.setUserInfo}/> : null }
          </div> 
          <br/>
          <br/>
          <div>
            <LateRestaurantsList />
          </div>

    </div>


    )
  };
}

export default App;
