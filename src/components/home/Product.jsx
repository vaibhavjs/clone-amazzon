import React from 'react'
import './Product.scss'
import StarIcon from '@material-ui/icons/Star'
import {useStateValue} from '../../StateProvider.js'


const Product = ({id,title,image,price,rating}) => {

	const [{Basket},dispatch]=useStateValue()

	const addToBasket=()=>{
		//dispatch the item into the data layer
		dispatch({
			type:'ADD_TO_BASKET',
			item:{
				id:id,
				title:title,
				image:image,
				price:price,
				rating:rating
			}
		})

	}

	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating).fill().map((i)=>
							<StarIcon className="starIcon" />
							)}
					
				</div>
			</div>
			<img src={image} alt=""/>
			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	)
}

export default Product