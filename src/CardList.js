import React from 'react';
import Card from './Card';

const CardList = ({array}) => {
	return(
		<>
			{
				console.log(array)
			}
			{
				array.map((user, i) =>{
					return(
						<Card 
							key={i}
							name={array[i].name}
							gender={array[i].gender}
							birthYear={array[i].birth_year}
							url={array[i].url}
						/>
					);
				})
			}
		</>
	)
}

export default CardList;