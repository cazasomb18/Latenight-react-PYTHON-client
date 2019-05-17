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
constructor(props) {
	super();
	this.handleSubmit = this.handleSubmit.bind(this);
	this.handleChange = this.handleChange.bind(this);

			// this.state = ({
			// 	userName: '',
			// 	password: '',
			// 	email: '',
			//  	isRegistered: null
			// });
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

			const registerResponse = await fetch('http://localhost:9000/auth/', {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(this.state),
				headers: {
					'Content-Type': 'application/json'
				}
			})


			const parsedResponse = await registerResponse.json();

			console.log("parsedResponse: ", parsedResponse);

			if (parsedResponse.success === true) {
				this.setState({
					isRegistered: true,
				});
			}

		}catch(err){
			console.log(err);
			console.error(err)

		}
		///continue this logic to get the backend do to the work///

	}
	render(){
		
		return (
		<div>
			<form className="mb-2 mr-sm-2 mb-sm-0" onSubmit={this.handleSubmit}>
				Username: <input className="mr-sm-2" type="text" name="userName" placeholder="username" onChange={this.handleChange}/>
				Password: <input className="mr-sm-2" type="password" name="password" placeholder="********" onChange={this.handleChange}/>
				Email: <input className="mr-sm-2" type="email" name="email" placeholder="email" onChange={this.handleChange}/>
				<input className="mr-sm-2" type="submit" value="Register!"/>
			</form>
		</div>
		)
	}
}

export default RegisterControl;