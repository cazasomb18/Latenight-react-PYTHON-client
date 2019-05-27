import React from 'react';

////this.state.restaurants.

const RenderListComponent = (props) => {

	const restaurants = props.restaurants;
	const renderList = restaurants.map((restaurant, i) => {
		return(
			<li key={i}>
				Name: <a>{restaurant.name}</a><br/>
				Address: {restaurant.vicinity}<br/>
				ID: {restaurant.place_id}<br/>
			</li>
		)

	})

		return (
			<ul>
			{renderList}
			</ul>
		)
}
















export default RenderListComponent;