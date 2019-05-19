import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RegisterControl from './RegisterControl';
import LateRestaurantsList from './LateRestaurantsList';
import UnderConstruction from './UnderConstruction';
import Navbar from './navbar';
import AppTitle from './TitleHeader';

class App extends React.Component {
  constructor(props){
    console.log('constructor',);
    super(props);
    // this.setUserInfo = this.setUserInfo.bind(this);
    this.LoginControl = this.LoginControl;
    this.handleChange = this.handleChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.state = {
      restaurants: [],
      comments: [],
      userName: '',
      loggedIn: null,
      isRegistered: null,

    }
    // this.getRestaurants = this.getRestaurants.bind(this);
  }
  componentDidMount () {
    //// INITIAL DOM RENDERING ///
    console.log('cdm: ', );
    console.log('STATE: ', this.state);
    console.log('PROPS: ', this.props);
    

  }

  ////////// CONDITIONAL RENDERING LOGIC FOR RESTAURANTS LIST RELATED TO LOGIN STATE////////
  // {this.state.loggedIn ? <LateRestaurantsList /> : null}

  ////////// CONDITIONAL RENDERING LOGIC FOR RESTAURANTS LIST RELATED TO LOGIN STATE////////
  
  handleLoginSubmit = async (e) => {
    e.preventDefault()
    try{
      const loginResponse = await fetch('http://localhost:9000/auth/login/', {
        method: 'POST',
        credentials: 'include', 
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const parsedResponse = await loginResponse.json();
       if (parsedResponse.success === true) {
        this.setState({
          loggedIn: true,
        })
        console.log("App state: ", this.state)
        console.log("Props: ", this.props)
        console.log(parsedResponse.success);
      }

      // if parsedResponse.success is true, then you know that 
      // parsedResponse.data contains the user information 

      // and bc the login is successful, then you should  
      // invoke this.props.setUserInfo(), passing in the parsedResponse.data 

    }catch(err){
      console.log(err);
      console.error(err);

    }
  }
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
  handleChange = (e) => {
    e.preventDefault();
    this.setState({

      [e.currentTarget.name]: e.currentTarget.value

    })
  }

  render(){

    console.log("App state: ", this.state)
    console.log("Props: ", this.props)

    return (

      <div className="AppContainer">
        <AppTitle/>
        <Navbar/>

      <div>
{!this.state.loggedIn ? 
      <RegisterControl /> : null}
      </div>
      <br/>
    
    <div>      
{!this.state.loggedIn ?
      <div>
        <form onSubmit={this.handleLoginSubmit}>
          Username: 
          <input type="text" name="userName" placeholder="username" onChange={this.handleChange}/>
          Password: 
          <input type="password" name="password" placeholder="********" onChange={this.handleChange}/>
          <input type="submit" value="Log In!"/>
        </form>
      </div> : null}
    </div> 
          <br/>
          <br/>
        <div>
          <LateRestaurantsList/>
          <UnderConstruction/>
        </div>
    </div>
    )
  };
}

export default App;
