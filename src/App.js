import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import RegisterControl from './RegisterControl';
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
    this.setState({
      loggedIn: true,
      isRegistered: true,
      userName: userInfo.userName,
    })
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


//// we've got to rebuild the login component on THIS PAGE!!!//////
  // }
  // setUserInfo = (userData) => {

  //   this.setState({
  //     userName: this.props.userName,
  //     loggedIn: true
  //   })

  //   console.log("function setUserInfo calling");
  //   console.log("user data: ", userData);

  //   // once we are sure this is working, we want to setState in this 
  //   // component based on userData passed in as the argument 
  // }
        // <LateRestaurantsList/>
      // <div><UnderConstruction/></div>
  render(){

    console.log("App state: ", this.state)
    console.log("Props: ", this.props)
    return (
      <main>
        <UnderConstruction/>
        <Header/>
        <UnderConstruction/>
        <Switch>
          <Route path="register" render={ (props) => <RegisterControl {...props} setUserInfo={this.setUserInfo}/> } />
        </Switch>
      </main>
    );
  }
}

export default App;
