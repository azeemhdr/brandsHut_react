import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from '../redux/CartSlice';

export default function AddToCart() {
	const cart = useSelector((state)=>state.cart.cart) //state.name.value {if i'm using name it shows error(myCart)}

	const dispatch = useDispatch()
	return (
	<div>
		 <button type="button" className='btn btn-warning' onClick={()=>dispatch(addToCart({id:1,title:'demo product'}))}>Add to Cart</button>
	</div>
  )
}


// 1. how we get to know that the payload is store in the cart/[array] where we store the value? in console it shows null.