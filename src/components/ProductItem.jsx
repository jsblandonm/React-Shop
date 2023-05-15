import React,{ useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext';
import addtocartImage from '@icons/bt_add_to_cart.svg'

const ProductItem = ({product}) => {
	const { state, addtocart } = useContext(AppContext);
	const handleClick = item => {
		console.log('in cart: ', state.cart.includes(item));
		addtocart(item);
	}
	return (
		<div className="ProductItem">
			<img src= {product.images[0]} alt= {product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure className= "more-clickable-area" onClick = {() =>handleClick(product)}>
				{  state.cart.includes(product) ? <img className="disabled add-to-cart-btn" src={addtocartImage} alt="added to cart" />  : <img className="add-to-cart-btn pointer" src={addtocartImage} alt="add to cart" /> }
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;

// "https://images.pexels.com/photos/2393816/pexels-photo-2393816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 