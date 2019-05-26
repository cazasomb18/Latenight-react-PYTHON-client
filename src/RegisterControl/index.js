import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Login from '../Login';


class RegisterControl extends Component {
constructor(props) {
	console.log(props);
	super();
	this.state = {
		userName: '',
		isRegistered: false
		}
	}

	handleChange = (e) => {
		e.preventDefault();
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		console.log(this.state);
		try{			
			const registerResponse = await fetch(process.env.REACT_BACK_END_URL + '/auth', {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(this.state),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			console.log(registerResponse);
			const parsedResponse = await registerResponse.json();
			console.log("parsedResponse: ", parsedResponse);
			if (parsedResponse.success === true) {
				this.setState({
					isRegistered: true,
				});
			}
			const userInfo = {
				userName: parsedResponse.data.userName,
				isRegistered: true
			}
			this.props.setUserInfo(userInfo);
			// this.props.history.push("/login"); ??? redirect to login?
		}catch(err){
			console.log(err);
			console.error(err)
		}
		///continue this logic to get the backend do to the work///
	}

	render(){	
		return (
		<div className="form">
			<h1 className='/register-title'>Register for LateNight</h1><br/>
				<form className="mb-2 mr-sm-2 mb-sm-0" onSubmit={this.handleSubmit}>
					<h4 className="mb-2 mr-sm-2 mb-sm-0">Username:</h4><br/>
					<input className="mr-sm-2" type="text" name="userName" placeholder="username" onChange={this.handleChange}/><br/>
					<h4 className="mb-2 mr-sm-2 mb-sm-0">Password:</h4><br/>
					<input className="mr-sm-2" type="password" name="password" placeholder="********" onChange={this.handleChange}/><br/>
					<h4 className="mb-2 mr-sm-2 mb-sm-0">Email:</h4><br/>
					<input className="mr-sm-2" type="email" name="email" placeholder="email" onChange={this.handleChange}/><br/>
					<input className="mr-sm-2" type="submit" value="Register!"/><br/>
				</form>
		</div>
		)
	}
}

export default RegisterControl;