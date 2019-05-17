import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.svg';
import "./App.css";
import RegisterControl from './RegisterControl';
import LateRestaurantsList from './LateRestaurantsList';

class App extends React.Component {
  constructor(props){
    console.log('constructor');
    super();
    // this.setUserInfo = this.setUserInfo.bind(this);
    this.LoginControl = this.LoginControl;
    this.handleChange = this.handleChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.state = {
      restaurants: [],
      comments: [],
      userName: '',
      loggedIn: false,
      isRegistered: false,

    }
    // this.getRestaurants = this.getRestaurants.bind(this);
  }
  componentDidMount () {
    //// INITIAL DOM RENDERING ///
    console.log('cdm: ', );
    

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

        console.log(parsedResponse.data);

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

  //// UNDER CONSTRUCTION - CHECKED OUT TO DIFFERENT BRANCH IN ORDER TO TRY
  //// CALLING API ON LATERESTAURANTSLIST /////

  render(){

    console.log("App state: ", this.state)
    console.log("Props: ", this.props)

    return (

      <div className="AppContainer">
        <h1 className="AppTitle">
        Late Night API
        </h1>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a width="30" height="30" href="/">HOME</a>
            <a width="30" height="30" href="/">LOGIN</a>
            <a width="30" height="30" href="/">LOGOUT</a>
            <a width="30" height="30" href="/">REGISTER</a>
        </nav>
        <br/>
      <div>
{!this.state.loggedIn ? <RegisterControl /> : null}
      </div>
          <br/>
          <div>
      
{!this.state.loggedIn ?
      <div>
        <form onSubmit={this.state.handleLoginSubmit}>
Username: <input type="text" name="userName" placeholder="username" onChange={this.handleChange}/>
Password: <input type="password" name="password" placeholder="********" onChange={this.handleChange}/>
          <input type="submit" value="Log In!"/>
        </form>
      </div> : null}

          </div> 
          <br/>
          <br/>
          <div>
            <LateRestaurantsList />
          </div>
      <div>
        <br/>
        <h2>
        <br/>
          LATE NIGHT IS STILL UNDER CONSTRUCTION!!!
        </h2>
        <br/>
        <br/>
        <h2>
          FULL FUNCTIONALITY CRUD FORTHCOMING!!!
        </h2>

      </div>

    </div>
    )
  };
}

export default App;
