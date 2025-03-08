import React from 'react'

export default function Dashboard() {
  return (
	<div className=''>
		<div className='container'>
			<h4 className='mt-3'>Hi Azeem Haider</h4>
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam veniam delectus expedita maiores velit ipsum odit? Ducimus voluptatem tenetur aperiam officiis sit voluptatum ex consectetur id, expedita temporibus debitis dolorem.</p>
			<div className='mt-3'>
				<div className='row gy-3'>
					<div className='col-md-4'>
						<div className='p-4 shadow rounded'>
							<h5>Recent Order</h5>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, omnis accusantium? Corporis voluptatum qui illo officiis dolorem perferendis, optio iste atque harum pariatur hic facere at perspiciatis doloribus quasi. Animi.</p>
							<a href="#" className='text-decoration-underline'>View Orders</a>
						</div>
					</div>
					<div className='col-md-4'>
						<div className='p-4 shadow rounded'>
							<h5>Transactions</h5>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, omnis accusantium? Corporis voluptatum qui illo officiis dolorem perferendis, optio iste atque harum pariatur hic facere at perspiciatis doloribus quasi. Animi.</p>
							<a href="#" className='text-decoration-underline'>View Transactions</a>
						</div>
					</div>
					<div className='col-md-4'>
						<div className='p-4 shadow rounded'>
							<h5>Addresses</h5>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, omnis accusantium? Corporis voluptatum qui illo officiis dolorem perferendis, optio iste atque harum pariatur hic facere at perspiciatis doloribus quasi. Animi.</p>
							<a href="#" className='text-decoration-underline'>View Address</a>
						</div>
					</div>
					<div className='col-md-4'>
						<div className='p-4 shadow rounded'>
							<h5>My Account</h5>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, omnis accusantium? Corporis voluptatum qui illo officiis dolorem perferendis, optio iste atque harum pariatur hic facere at perspiciatis doloribus quasi. Animi.</p>
							<a href="#" className='text-decoration-underline'>View Account</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}
