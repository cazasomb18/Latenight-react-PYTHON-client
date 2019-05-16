import React, { Component } from 'react';


class LoginControl extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			userName: '',
			password: '',
			loggedIn: false
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);

	}

	handleChange = (e) => {

		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		});

	}

	// Greeting = (props) => {
	// 	const loggedIn = this.props.loggedIn;
	// 	if (this.loggedIn){
	// 		return <this.props.GuestGreeting/>;
	// 	} 
	// 	return <this.props.UserGreeting/>;
	// }

	// UserGreeting = (props) => {
	// 	return <h2>Welcome to lateNight!</h2>;
	// }

	// GuestGreeting = (props) => {
	// 	return <h2>Please Register for lateNight! </h2>;
	// }

	handleSubmit = async (e) => {
		e.preventDefault();
		try{

			const loginResponse = await fetch('http://localhost:9000/auth/login', {

				method: 'POST',
				credentials: 'include', 
				body: JSON.stringify(this.state),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			const parsedResponse = await loginResponse.json();

			console.log("parsed response: ", parsedResponse);

			 if (parsedResponse.success === true) {

				this.props.loggedIn = this.props.setState.loggedIn;

				// console.log(parsedResponse.data);

				this.props.setUserInfo(parsedResponse.data);

				this.props.loggedIn(this.setState.userName, this.setState.password);


			}

			// if parsedResponse.success is true, then you know that 
			// parsedResponse.data contains the user information 

			// and bc the login is successful, then you should  
			// invoke this.props.setUserInfo(), passing in the parsedResponse.data 

		}catch(err){
			console.log(err);

		}
		//submit login


		// use fetch to send request to backend, hit auth route, and get response 

		// based on response from backend, either log them in or don't 

		// (if not, nice UI to display message "username or password incorrect")

		// if yes, then setState to set login to true and also add user's info in state
	}


	render(){
		this.setState(this.props.loggedIn);
		console.log("logincontrol state: ", this.state);
		console.log("logincontrol props: ", this.props);




		// let greeting;

		// { this.loggedIn ? true : false }

		// if (loggedIn){
		// 	greeting = <UserGreeting onSubmit={this.handleSubmit}/>;
		// } else {
		// 	greeting = <GuestGreeting onSubmit={this.handleSubmit}/>;
		// }

		return (

			<div>

				<form onSubmit={this.handleSubmit}>
				Username: <input type="text" name="userName" placeholder="username" onChange={this.handleChange}/>
				Password: <input type="password" name="password" placeholder="********" onChange={this.handleChange}/>
				<input type="submit" value="Log In!"/>
				</form>

			</div>

			);

	};
};

export default LoginControl;