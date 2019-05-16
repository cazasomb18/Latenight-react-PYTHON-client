import React, { Component } from 'react';

// RegisteredGreeting = (props) => {
// 	return <h2>Thank you for Registering with LateNight!</h2>
// }

// UnregisteredGreeting = (props) => {
// 	return <h2>Please Register for LateNight</h2>
// }

// RegisterGreeting = (props) => {
// 	const isRegistered.props.isRegistered;
// 	if (isRegistered){
// 		return <RegisteredGreeting/>;
// 	}
// 	return <UnregisteredGreeting/>;
// }

class RegisterControl extends React.Component{
	constructor(props){
		super(props);
			this.handleSubmit = this.handleSubmit.bind(this);

			this.state = {
				username: '',
				password: '',
				email: '',
				isRegistered: false,
			};

	this.handleSubmit = this.handleSubmit.bind(this);
	this.handleChange = this.handleChange.bind(this);


	}
	handleChange = (e) => {
		e.preventDefault();

		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
	})


	}
	handleSubmit = async (e) => {
		e.preventDefault();
		try{

			const registerResponse = await fetch('http://localhost:9000/auth', {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(this.state),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			const parsedResponse = await registerResponse.json();

			console.log("parsedResponse: ", parsedResponse);

			if (parsedResponse.success === true) {

				this.setState.isRegistered = true;
			}

		}catch(err){
			console.error(err)
			console.log(err);

		}
		///continue this logic to get the backend do to the work///

	}
			// this.setState.props.isRegistered = this.props.isRegistered;
	render(){

		console.log('register control state: ', this.state);
		console.log('register control props: ', this.props);

		return 
		(

			<div>
				<form onSubmit={this.handleSubmit}>
					Username: <input type="text" name="userName" placeholder="username" onChange={this.handleChange}/>
					Password: <input type="password" name="password" placeholder="********" onChange={this.handleChange}/>
					<br/>
					Email: <input type="email" name="email" placeholder="email" onChange={this.handleChange}/>
					<input type="submit" value="Register!"/>
				</form>
			</div>

			)
	}


}

export default RegisterControl;