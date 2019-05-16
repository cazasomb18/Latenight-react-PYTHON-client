import React, { Component } from 'react';

function UserGreeting(props) {
	return <h2>Welcome Back!</h2>;
}

function GuestGreeting(props){
	return <h2>Please Register</h2>;
}

function Greeting(props){
	const isLoggedIn = props.isLoggedIn;
	if (isLoggedIn){
		return <UserGreeting/>;
	}
	return <GuestGreeting/>;
}

class LoginControl extends React.Component {
	constructor(props){
		super(props);


		this.state = {
			username: '',
			password: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange = (e) => {

		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		});
	}

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
			if (parsedResponse === "Login failed. Username or password were incorrect" || "There were no users under that username. Please register." ){
				this.props.isLoggedIn(this.state.username, this.state.password);

			}

			// if parsedResponse.success is true, then you know that 
			// parsedResponse.data contains the user information 

			// and bc the login is successful, then you should  
			// invoke this.props.setUserInfo(), passing in the parsedResponse.data 



			// const loginResponse = await fetch('http://localhost:9000/auth', {
			// 	method: 'POST',
			// 	credentials: 'include', //on every request we have to send the cookie (every fetch call)
			// 	body: JSON.stringify(this.state),
			// 	headers: {
			// 		'Content-Type': 'application/json'
			// 	}
			// })

			// const parsedResponse = await loginResponse.json();

			// console.log("parsed response: ", parsedResponse)

		}catch(err){
			console.log(err);
			console.error(err);

		}
		//submit login


		// use fetch to send request to backend, hit auth route, and get response 

		// based on response from backend, either log them in or don't 

		// (if not, nice UI to display message "username or password incorrect")

		// if yes, then setState to set login to true and also add user's info in state
	}

	// postData()

	// handleLoginClick(''){

	// 	fetch('http://localhost:9000/auth/login')
	// 	.then(response => {
	// 		return response.json()});
	// 	.then(data => {
	// 		return data.json()});
		

	// 	this.setState({isLoggedIn: true});
	// }

	// handleLogoutClick(){
	// 	this.setState({isLoggedIn: false});
	// }

	render(){
		console.log("logincontrol state: ", this.state);
		console.log("logincontrol props: ", this.props);
		const isLoggedIn = this.state.isLoggedIn;


		// if(isLoggedIn){
		// 	greeting = <UserGreeting onSubmit={this.handleLogoutClick}/>;
		// } else {
		// 	greeting = <GuestGreeting onSubmit={this.handleLoginClick}/>;
		// }

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
				Username: <input type="text" name="username" placeholder="username" onChange={this.handleChange}/>
				Password: <input type="password" name="password" placeholder="********" onChange={this.handleChange}/>
				<input type="submit" value="Log In!"/>
				</form>
			</div>
			)

	}
}

export default LoginControl;