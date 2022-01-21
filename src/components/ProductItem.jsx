import React,{ useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext';
import addtocartImage from '@icons/bt_add_to_cart.svg'

const ProductItem = ({product}) => {
	const { addtocart } = useContext(AppContext);
	const handleClick = item => {
		addtocart([item]);
	}
	return (
		<div className="ProductItem">
			<img src= {product.images[0]} alt= {product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick = {() =>handleClick(product)}>
					<img src={addtocartImage} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;

// "https://images.pexels.com/photos/2393816/pexels-photo-2393816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 