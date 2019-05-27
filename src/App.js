import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import RegisterControl from './RegisterControl';
import Login from './Login';
import Header from './Header';
import AppTitle from './TitleHeader';
import LateList from './LateList';
import LateRestaurantsList from './LateRestaurantsList';
import HomeContainer from './Home';

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
  logOut = async (e) => {
    e.preventDefault();
    try{
      const logoutResponse = await fetch(process.env.REACT_APP_BACK_END_URL + 'logout', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }})
      console.log(logoutResponse);
      const parsedResponse = await logoutResponse.json();
      console.log('parsedResponse: ', parsedResponse);
      if (parsedResponse){
        this.setState({
          loggedIn: false
        })
        console.log("App state: ", this.state);
      }
    }catch(err){
      console.log(err);
      console.error(err);

    }
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({

      [e.currentTarget.name]: e.currentTarget.value 
    })
  }
  showList(){

  }
  ////////// CONDITIONAL RENDERING LOGIC FOR RESTAURANTS LIST RELATED TO LOGIN STATE////////
  // {this.state.loggedIn ? <LateRestaurantsList /> : null}
  ////////// CONDITIONAL RENDERING LOGIC FOR RESTAURANTS LIST RELATED TO LOGIN STATE////////
  

    // const mapRestaurantData = this.state.restaurants.map((restaurant, i) => {
    //   return (
    //     <div>
    //       <li key={restaurant.id}>
    //         <p className="faux" data={i} onClick={this.handleClick}> Name: {restaurant.name}</p>
    //         Address: {restaurant.vicinity}
    //         ID: {restaurant.place_id}
    //       </li>
    //     </div>
    //   ) 
    // })





  render(){

    return (
      <main>
        <AppTitle/>
        <Header/>
        <Switch>
          <Route path="/home" onClick={this.showList} />
          <Route path="/register" render={ (props) => <RegisterControl {...props} setUserInfo={this.setUserInfo}/> } />
          <Route path="/login" render={ (props) => <Login {...props} setUserInfo={this.setUserInfo}/> } />
          <Route path="/restaurantList" component={LateRestaurantsList}/>
          <Route path="/logout" onClick={this.logOut}/>
        </Switch>
      </main>
    );
  }
}

export default App;

