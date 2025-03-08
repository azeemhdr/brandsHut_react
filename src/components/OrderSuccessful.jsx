import React from "react";
import productImage from "../Images/product (1).webp";
import { Link } from "react-router-dom";

export default function OrderSuccessful() {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-8">
            <div className="form">
              <div className="border p-3 mb-4">
                <div className="row">
                  <div className="col-md-2">
                    <img src={productImage} alt="" className="img-fluid" />
                  </div>

                  <div className="col-md-8">
                    <h5>
                      Green Giza Satin Cotton Full Sleeve Formal Shirt For Men
                    </h5>
                    <h4>&#8377; 1499/-</h4>
                  </div>
                </div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#99c15e"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-check-circle"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3>Order Successful</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
                quam exercitationem? Earum similique ullam eveniet quas
                asperiores a molestias tenetur corporis sunt reprehenderit, et
                velit quis neque quisquam voluptatum aliquid.
              </p>
              <p className="fw-bold">
                Order will be delivered tomorrow between 12-1 PM{" "}
              </p>
              <Link to={'/final'} className="btn btn-warning">
                Continue Shopping
              </Link>
            </div>
          </div>

          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
}
