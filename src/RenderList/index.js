import React from 'react';
import showModal from '../ShowModal'



const RenderListComponent = (props) => {

	const restaurants = props.restaurants;
	const renderList = restaurants.map((restaurant, i) => {
		return(
			<li key={i}>
				Name: <a href={process.env.REACT_APP_BACK_END_URL + restaurant.place_id} onClick={showModal}> {restaurant.name}</a><br/>
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