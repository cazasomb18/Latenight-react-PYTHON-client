import React from 'react';

LateRestaurantsDetails = async (e) => {
	try {
		const urlRestaurantDetails = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=' + place_id '=opening_hours/periods&key=' + process.env.REACT_APP_API_KEY;
		/// need to set up logic to import and interpolate the place_id into the above url
		const restaurantDetails = await fetch(getRestaurantDetailsUrl, {

			method: 'GET',
			credentials: 'include',
			body: JSON.stringify(this.state),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const parsedResponse = await restaurantDetails.json()
		console.log(parsedResponse)
		// const restaurantDetails = await fetch.parsedResponse.json(url + process.env.REACT_APP_API_KEY, {

	}catch(err){
		console.log(err);
		console.error(err);

	}
};

///
