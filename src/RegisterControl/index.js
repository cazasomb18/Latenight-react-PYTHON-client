import React, { Component } from 'react';

function RegisteredGreeting(props){
	return <h2>Thank you for Registering with LateNight!</h2>
}

function UnregisteredGreeting(props){
	return <h2>Please Register for LateNight</h2>
}

function RegisterGreeting(props){
	const isRegistered = props.isRegistered;
	if (isRegistered){
		return <RegisteredGreeting/>;
	}
	return <UnregisteredGreeting/>;
}

function RegisterButton(props){
	return (
		<button onClick={props.onClick}>
		Register
		</button>
		);
}

class RegisterControl extends React.Component{
	constructor(props){
		super(props)
			this.handleRegisterClick = this.handleRegisterClick.bind(this);

			this.state = {
				username: '',
				password: '',
				email: ''
			};
	}
	handleRegisterClick(){
		fetch('http://localhost:9000/auth/register')
		///continue this logic to get the backend do to the work///
		.then()

	}
	render(){
		const isRegistered = this.state.IsRegistered;
		let button;

		if(isRegistered)
	}




}