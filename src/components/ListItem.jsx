import React from "react";
import imgProduct from "../Images/product (1).webp";
import AddToCart from "./AddToCart";

export default function ListItem({price,discount}) {
  return (
    <div className="list-item border rounded mb-3">
      <div className="row ">
        <div className="col-md-4">
          <img src={imgProduct} alt="" className="img-fluid" />
        </div>
        <div className="col-md-8">
          <div className="list_item_details p-3">
            <div>
              <h4>Urban Blaze: Latte</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores veritatis, hic unde vel explicabo consectetur
                voluptatem ipsa dolore tenetur nam eos et perferendis totam
                dignissimos cumque ea. Eaque, possimus excepturi.
              </p>
			  <div>
				<p className="fw-bold">Delivered by tomorrow 1PM</p>
			  </div>
			 <AddToCart/>
            </div>
			<div className="list_item_pricing">
				<h3 className="fw-semibold">&#8377; {Math.round (price - ((price*discount)/100))}/-</h3>
				<span><span className="text-decoration-line-through text-danger fw-semibold">{price}/-</span><span className="bg-danger badge">{discount} Off</span></span>
				<div className="fst-italic">
					Inclusive of all Taxes
				</div>
			</div>
          </div>
        </div>
      </div>
    </div>
  );
}
