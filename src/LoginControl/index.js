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

function LoginButton(props){
	return (
		<button onClick={props.onClick}>
		Login
		</button>
		);
}

function LogoutButton(props) {
	return (
		<button onClick={props.onClick}>
			Logout
		</button>
		);
}

class LoginControl extends React.Component {
	constructor(props){
		super(props);

		this.handleLoginClick = this.handleLoginClick.bind(this);

		this.handleLogoutClick = this.handleLogoutClick.bind(this);

		this.state = {
			isLoggedIn: false,
			username: '',
			password: ''
		};
	}

	handleLoginClick(){

		fetch('http://localhost:9000/auth/login')
		.then(response => response.json())
		
		// use fetch to send request to backend, hit auth route, and get response 

		// based on response from backend, either log them in or don't 

		// (if not, nice UI to display message "username or password incorrect")

		// if yes, then setState to set login to true and also add user's info in state

		this.setState({isLoggedIn: true});
	}

	handleLogoutClick(){
		this.setState({isLoggedIn: false});
	}

	render(){
		const isLoggedIn = this.state.isLoggedIn;
		let button;

		if(isLoggedIn){
			button = <LogoutButton onClick={this.handleLogoutClick}/>;
		} else {
			button = <LoginButton onClick={this.handleLoginClick}/>;
		}

		return (
			<div>
				<Greeting isLoggedIn={isLoggedIn}/>
				<form>
				Username: <input/>
				Password: <input/>
				</form>
				{button}
			</div>
			)

	}
}

export default LoginControl;