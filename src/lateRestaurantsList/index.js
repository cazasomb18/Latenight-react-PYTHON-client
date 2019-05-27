import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

class LateRestaurantsList extends React.Component {
	constructor(props){
		super();
		this.state = {
			restaurants: []
		}
	}
	componentDidMount(){
		console.log("cdm - GetRestaurantIds Component: ", this.state, this.props);
	}
	handleClick = async (e) => {
		e.preventDefault();
		try{
			await this.getRestaurants();

		} catch(err){
			console.error(err);
		}
	}
	getRestaurants = async (e) => {
		e.preventDefault();
		try{
			const getRestaurantsResponse = await fetch(process.env.REACT_APP_BACK_END_URL + 'restaurants', {

				method: 'GET',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json'
				}
			})
			const parsedResponse = await getRestaurantsResponse.json();
			console.log(parsedResponse) // object
			this.setState({
				restaurants: parsedResponse.allRestaurants.results // 
			})

		}catch(err) {
			console.error(err);
		}
	}
	render(){
		// this.props.history.push("/home")
		console.log("this.state in render() in LateRestaurantList: ", this.state);		
		return(
			<div>
				<h2>LATE RESTAURANTS LIST</h2>
				<button onClick={this.getRestaurants}>GET LIST</button>
				<form className="mb-2 mr-sm-2 mb-sm-0" onSubmit={this.getRestaurants}>
					<h4 className="mb-2 mr-sm-2 mb-sm-0">ARE YOU HUNGRY?!</h4>
					<input className="mr-sm-2" type="text" name="superfulous" placeholder="AWWW YEAAAAHHHH" onChange={this.handleChange}/><br/>
					<input className="mr-sm-2" type="submit" value="What's Open?!"/>
				</form>
			</div>
		)
	}

}

export default LateRestaurantsList;