import React, { useState } from "react";
import product_image from "../Images/product (1).webp";

export default function CartItem() {
  let price = 14000;
  let discount = 14;

  let [qty, setQty] = useState(1);

  return (
    <div>
      <div className="cart_items mb-3 border">
        <div className="row">
          <div className="col-md-2 ">
            <div className="p-2">
              <img src={product_image} alt="" className="img-fluid " />
            </div>
          </div>
          <div className="col-md-8 ">
            <div className="list_item_details p-3">
              <div>
                <h6 className="fw-bold">
                  Green Giza Satin Cotton Full Sleeve Formal Shirt For Men
                </h6>
                <div className="qty_btns">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-trash-2"
                    >
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                  </button>
                  <button
                    onClick={() => {
                      setQty(qty === 1 ? qty : qty - 1);
                    }}
                  >
                    -
                  </button>
                  <span>{qty}</span>
                  <button
                    onClick={() => {
                      setQty(qty + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="list-item-pricing">
                <p className="fw-bold">
                  Rs. {Math.round(price - (price / 100) * discount)}/-
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
}
