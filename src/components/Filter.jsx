import React from 'react'

export default function Filter() {
  return (
	<div className='filters mb-3'>
		<div className='p-3 rounded border'>
			 <div className="filter_item mb-3">
				<h5>Brands</h5>
				<ul className='list-unstyled'>
					<li><label htmlFor="addidas"><input type="checkbox" name="" id="addidas" value={''}  />Addidas</label></li>
					<li><label htmlFor="Puma"><input type="checkbox" name="" id="Puma" value={''}  />Puma</label></li>
					<li><label htmlFor="Zara"><input type="checkbox" name="" id="Zara" value={''}  />Zara</label></li>
					<li><label htmlFor="H&M"><input type="checkbox" name="" id="H&M" value={''}  />H&M</label></li>
					<li><label htmlFor="Zodiac"><input type="checkbox" name="" id="Zodiac" value={''}  />Zodiac</label></li>
				</ul>
			 </div>
			 <div className="filter_item mb-3">
				<h5>Size</h5>
				<ul className='list-unstyled'>
					<li><label htmlFor="s"><input type="checkbox" name="" id="s" value={''}  />Small</label></li>
					<li><label htmlFor="m"><input type="checkbox" name="" id="m" value={''}  />Medium</label></li>
					<li><label htmlFor="l"><input type="checkbox" name="" id="l" value={''}  />Large</label></li>
					<li><label htmlFor="xl"><input type="checkbox" name="" id="xl" value={''}  />Extra Large</label></li>
					<li><label htmlFor="xxl"><input type="checkbox" name="" id="xxl" value={''}  />XXLarge</label></li>
				</ul>
			 </div>
			 <div className="filter_item mb-3">
				<h5>Colors</h5>
				<ul className='list-unstyled'>
					<li><label htmlFor="Red"><input type="checkbox" name="" id="Red" value={''}  />Red</label></li>
					<li><label htmlFor="White"><input type="checkbox" name="" id="White" value={''}  />White</label></li>
					<li><label htmlFor="Blue"><input type="checkbox" name="" id="Blue" value={''}  />Blue</label></li>
					<li><label htmlFor="Black"><input type="checkbox" name="" id="Black" value={''}  />Black</label></li>
					<li><label htmlFor="Green"><input type="checkbox" name="" id="Green" value={''}  />Green</label></li>
				</ul>
			 </div>
		</div>
	</div>
  )
}
