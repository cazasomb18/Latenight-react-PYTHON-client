import React from 'react';

class LateRestaurantsList extends React.Component {
	constructor(props){
	super();
	this.handleClick.bind(this);
	this.getRestaurants.bind(this);
	this.state = {

		restaurants: []

		}
	}
	componentDidMount(){
		console.log("cdm - lateRestaurantsList Component: ", this.state, this.props);
	}
	handleClick = (e) => {
		e.preventDefault();
		// e.getRestaurants();
	}

/// FROM GOOGLE PLACES API: /////
/// Note: If you omit the fields parameter from a Find Place request, ///
/// only the place_id for the result will be returned ///


	getRestaurants = async (e) => {
		e.preventDefault();
		try{
			const getRestaurantsIdUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=41.8781,-87.6298&radius=5000&type=restaurant&keyword=open&keyword=late&key=' + process.env.REACT_APP_API_KEY;
			const getRestaurantsResponse = await fetch(getRestaurantsIdUrl, {

						method: 'GET',
						credentials: 'include',
						body: JSON.strinfigy(this.state),
						headers: {
							'Content-Type': 'Access-Control-Allow-origin'
						}})

			console.log(getRestaurantsResponse);
			const parsedResponse = await getRestaurantsResponse.json();
			console.log(parsedResponse)

/////////NEED LOGIC THAT WILL MAP THE RETURNED RESPONSE FROM INITIAL QUERY THEN GRAB THE PLACE_ID///////////////

			}
			catch(err) {
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

export default LateRestaurantsList;