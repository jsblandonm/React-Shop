import React from 'react';
import '@styles/ShoppingCartItem.scss';

const ShoppingCartItem = () => {
	return (
		<div className="ShoppingCartItem">
			<figure>
				<img src="https://images.pexels.com/photos/2393816/pexels-photo-2393816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="motorbike" />
			</figure>
			<p>MotorBike</p>
			<p>$30,000</p>
		</div>
	);
}

export default ShoppingCartItem;