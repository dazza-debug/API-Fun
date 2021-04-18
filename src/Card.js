import React from 'react';

const Card = ({name, gender, birthYear, url}) =>{
	return(
		<div>
			<h2>Name: {name}</h2>
			<div>
				<h3>Gender: {gender}</h3>
				<h3>Birth Year: {birthYear}</h3>
			</div>
			<p>details: <a href={url}>{url}</a></p>
		</div>
	)
}

export default Card;