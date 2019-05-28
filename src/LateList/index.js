import React, { Component } from 'react';
// import RestaurantShow from '../RestaurantShow';

class RestaurantDetailsList extends Component {
	constructor(){
		super();
		this.state = {
			restaurants: [],
			place_id: '',
		}
	}
	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}
	////onSubmit -> hit GETrestaurants/route - get place ID and show restaurant in some sort of clickable space

	handleSubmit = async (e) => {
		e.preventDefault();
		try {
			this.getLateList()

		}catch(err){
			console.error(err);
			console.log(err);
		}
	}

	handleClick = (e) => {

	}
	showRestaurant = async (e) => {
		e.preventDefault();
		console.log(this.state.LateList);
		this.setState({
			indexOfList: e.currentTarget.restaurant.place_Id
		})
		console.log(this.state.LateList);
		try{
			const placeId = this.restPlaceIds.restaurant.place_Id;
			const getRestDetailResp = await fetch(process.env.REACT_APP_BACK_END_URL + '/:place_id', {
				method: 'GET',
				credentials: 'include',
				body: JSON.stringify(this.state),
				headers: {
					'Content-type': 'application/json'
				}})
			console.log(getRestDetailResp);
			const parsedResponse = await getRestDetailResp.json();
			console.log(parsedResponse); 
		}catch(err){
			console.log(err);
			console.error(err);
		}
		console.log(e.currentTarget.data);
		await this.setState({
			indexOfList: e.currentTarget.place_id
		})
		console.log(this.currentTarget.place_id);
		console.log("Index of current restaurant: ", this.state.indexOfShow);
	}
	getRestaurants = async () => {
		try{
			console.log(this.state);
			const response = await fetch(process.env.REACT_APP_BACK_END_URL + 'restaurants', {
				method: 'GET',
				credentials: 'include',
				body: JSON.stringify(this.state),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			console.log('this is the response: ', response);
			const parsedPlaceIds = await response.json();
			console.log("this is the parsed response: ", parsedPlaceIds);

			this.setState({
				restaurants: parsedPlaceIds
			})
			console.log(this.state.LateList);
		}catch(err){
			console.log(err);
			console.error(err);
		}
	}
		// console.log(this.state.LateList[this.state.indexOfList]);
		// const restPlaceIds = this.state.getRestaurants.map((restaurant, i) =>{})
	render(){
		return (
			<div>
				<h1>THIS IS WHERE WE WILL RETURN ALL THE PLACE IDs</h1>
						<button onClick={this.getRestaurants}>GET LIST</button>
			</div>

		)
	}
}

export default RestaurantDetailsList;