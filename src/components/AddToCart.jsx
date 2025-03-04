import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from '../redux/CartSlice';

export default function AddToCart() {
	const cartValue = useSelector((state)=>state.myCart.cart) //state.name.value

	const dispatch = useDispatch()
	return (
	<div>
		 <button type="button" className='btn btn-warning' onClick={()=>dispatch(addToCart({id:1,title:'demo product'}))}>Add to Cart</button>
	</div>
  )
}
