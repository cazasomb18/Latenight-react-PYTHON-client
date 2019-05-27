import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import RegisterControl from './RegisterControl';
import Login from './Login';
import LateRestaurantsList from './LateRestaurantsList';
import UnderConstruction from './UnderConstruction';
import Header from './navbar';
import AppTitle from './TitleHeader';

class App extends Component {
  constructor(){
    console.log('constructor',);
    super();
    this.state = ({
      loggedIn: false,
      isRegistered: false,
      userName: '',
      restaurants: [],
      comments: [],

    })
  }
  setUserInfo = (userInfo) => {
    if (this.state.loggedIn === true){
      this.setState({
        loggedIn: true,
        isRegistered: true,
        userName: userInfo.userName
      })
    }
    console.log("State of app before cdm: ", this.state);

  }
  componentDidMount () {
    //// INITIAL DOM RENDERING ///
    console.log('cdm: ', this.state);
    console.log('STATE: ', this.state);
    console.log('PROPS: ', this.props);

  }

  ////////// CONDITIONAL RENDERING LOGIC FOR RESTAURANTS LIST RELATED TO LOGIN STATE////////
  // {this.state.loggedIn ? <LateRestaurantsList /> : null}

  ////////// CONDITIONAL RENDERING LOGIC FOR RESTAURANTS LIST RELATED TO LOGIN STATE////////
  

    //submit login


    // use fetch to send request to backend, hit auth route, and get response 

    // based on response from backend, either log them in or don't 

    // (if not, nice UI to display message "username or password incorrect")

    // if yes, then setState to set login to true and also add user's info in state


  // }
  // setUserInfo = (user nction setUserInfo calling");
  //   console.log("user data: ", userData);

  //   // once we are sure this is working, we want to setState in this 
  //   // component based on userData passed in as the argument 
  // }
        // <LateRestaurantsList/>
      // <div><UnderConstruction/></div>
  render(){

    return (
      <main>
        <Header/>
        <Switch>
          <Route path="/register" render={ (props) => <RegisterControl {...props} setUserInfo={this.setUserInfo}/> } />
          <Route path="/login" render={ (props) => <Login {...props} setUserInfo={this.setUserInfo}/> } />
        </Switch>
      </main>
    );
  }
}

export default App;

