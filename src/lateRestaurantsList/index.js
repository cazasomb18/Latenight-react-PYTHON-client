import React from 'react';

class lateRestaurantsList extends React.Component {
	constructor(props){
	super();
	// this.state({
	// 	restaurants: []

	// });

	this.handleClick.bind(this);
	this.getRestaurants.bind(this);
	}
	handleClick  = (e) => {
		e.preventDefault();
		this.getRestaurants();

	}
	getRestaurants = async () => {

		const url1 = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=41.8781,-87.6298&radius=5000&type=restaurant&keyword=open&keyword=late&key=' + process.env.REACT_APP_API_KEY;

		try{
			const getRestaurantsResponse = await fetch(url1)

			const parsedResponse = await getRestaurantsResponse.json()

			// console.log(parsedResponse)

			// const restaurantDetails = await fetch.response.json(url1 + process.env.REACT_APP_API_KEY, {

			// 			method: 'GET',
			// 			credentials: 'include'

			// 		});

		}catch(err) {
			console.log(err);
			console.error(err);
		}
	}
	render(){

		return (
			
			<form>
				<button onClick={this.handleClick}>Generate lateRestaurants</button>
			</form>
			
		)

	}
};

export default lateRestaurantsList;