import React from 'react'
import CartItem from './CartItem'

export default function Cart() {
  return (
	<div>
		<div className='container py-5'>
			<div className='row'>
				<h4>Your Cart</h4>
				<div className="col-md-8">
					<div className='cart_items'>
					<CartItem/>
					<CartItem/>
					<CartItem/>
					<CartItem/>
				
					</div>
				</div>
				<div className="col-md-4">
					<div className='border p-4 rounded sticky-top'>
						<h4>Total : 4000/-</h4>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus fugiat ratione impedit modi totam nisi! In ab iste culpa minima deserunt blanditiis nobis ex dignissimos. Ipsam ullam iure suscipit excepturi.</p>
						<button type='button' className='btn btn-block btn-warning w-100'>Checkout</button>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}
