import React, { useState } from "react";
import product_image from "../Images/product (1).webp";
import product_1 from "../Images/product (5).webp";
import product_2 from "../Images/product (6).webp";
import product_3 from "../Images/product (7).webp";
import product_4 from "../Images/product (8).webp";

export default function Product() {
  const [currentImage, SetCurrentImage] = useState(product_image);
  const makeActive = (event) => {
    const a = document.querySelectorAll(".prodActive");
    a.forEach(function (item) {
      item.classList.remove("border-dark");
    });

    event.target.classList.remove("border-lite");
    event.target.classList.add("border-dark");
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="sticky-top">
              <img
                src={currentImage}
                alt=""
                className="img-fluid object-fit-contain"
              />
              <hr />
              <div className="row">
                <div className="col">
                  <img
                    src={product_image}
                    alt=""
                    className="prodActive img-fluid border p-2 border-dark"
                    onClick={(e) => {
                      SetCurrentImage(e.target.src);
                      makeActive(e);
                    }}
                  />
                </div>
                <div className="col">
                  <img
                    src={product_2}
                    alt=""
                    className="prodActive img-fluid border p-2 border-lite"
                    onClick={(e) => {
                      SetCurrentImage(e.target.src);
                      makeActive(e);
                    }}
                  />
                </div>
                <div className="col">
                  <img
                    src={product_3}
                    alt=""
                    className="prodActive img-fluid border p-2 border-lite"
                    onClick={(e) => {
                      SetCurrentImage(e.target.src);
                      makeActive(e);
                    }}
                  />
                </div>
                <div className="col">
                  <img
                    src={product_4}
                    alt=""
                    className="prodActive img-fluid border p-2 border-lite"
                    onClick={(e) => {
                      SetCurrentImage(e.target.src);
                      makeActive(e);
                    }}
                  />
                </div>
                <div className="col">
                  <img
                    src={product_1}
                    alt=""
                    className="prodActive img-fluid border p-2 border-lite"
                    onClick={(e) => {
                      SetCurrentImage(e.target.src);
                      makeActive(e);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className=" text-black ">
              <h1 className="display-6 text-black fw-bold">
                Green Giza Satin Cotton Full Sleeve Formal Shirt For Men
              </h1>
              <h2 className="h1 text-black mt-4">
                <span className="text-decoration-line-through text-danger">
                  &#8377; 2999
                </span>
                &nbsp;<span>&#8377; 1499</span>
              </h2>
              <p className="">50% Off on your First Purchase</p>
              <hr />
              <h4>Product Details</h4>
              <table className="table " style={{ maxWidth: 400 }}>
                <tr>
                  <th>Wash Instruction</th>
                  <td>Machine Wash</td>
                </tr>
                <tr>
                  <th>Material</th>
                  <td>Cotton</td>
                </tr>
                <tr>
                  <th>Marketed By</th>
                  <td>BrandsHut</td>
                </tr>
                <tr>
                  <th>Country of Origin</th>
                  <td>India</td>
                </tr>
              </table>
              <hr />
              <h4>About this Item</h4>
              <ul>
                <li>
                  Experience unparalleled comfort and sophistication with our
                  Sea Green Premium Giza Satin Cotton Full Sleeve Shirt. Crafted
                  from the finest Giza cotton and meticulously tailored for a
                  sleek silhouette, this shirt exudes timeless elegance and
                  luxury.
                </li>
                <li>
                  The satin finish adds a touch of refinement to any ensemble,
                  while the full sleeves offer versatility for both formal and
                  casual occasions. Whether you're attending a business meeting
                  or a social event, this shirt is sure to make a statement.
                </li>
                <li>
                  Indulge in the ultimate comfort and style with our premium
                  Giza satin cotton shirt, designed to elevate your wardrobe to
                  new heights. Shop now and embrace effortless sophistication
                  with every wear.
                </li>
                <li>
                  The satin finish adds a touch of refinement to any ensemble,
                  while the full sleeves offer versatility for both formal and
                  casual occasions. Whether you're attending a business meeting
                  or a social event, this shirt is sure to make a statement.
                </li>
                <li>
                  Indulge in the ultimate comfort and style with our premium
                  Giza satin cotton shirt, designed to elevate your wardrobe to
                  new heights. Shop now and embrace effortless sophistication
                  with every wear.
                </li>
                <li>
                  The satin finish adds a touch of refinement to any ensemble,
                  while the full sleeves offer versatility for both formal and
                  casual occasions. Whether you're attending a business meeting
                  or a social event, this shirt is sure to make a statement.
                </li>
                <li>
                  Indulge in the ultimate comfort and style with our premium
                  Giza satin cotton shirt, designed to elevate your wardrobe to
                  new heights. Shop now and embrace effortless sophistication
                  with every wear.
                </li>
              </ul>
            </div>
          </div>
          <hr className="mt-3" />
          <h4 class=" mb-3">Premium Cotton Shirt - Product Details</h4>
          <div class="table-responsive">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th class="bg-light">Product Name</th>
                  <td>Men's Classic Cotton Shirt</td>
                </tr>
                <tr>
                  <th class="bg-light">Material</th>
                  <td>100% Pure Cotton</td>
                </tr>
                <tr>
                  <th class="bg-light">Fit Type</th>
                  <td>Regular Fit / Slim Fit</td>
                </tr>
                <tr>
                  <th class="bg-light">Color Options</th>
                  <td>White, Blue, Black, Grey, Navy, Maroon</td>
                </tr>
                <tr>
                  <th class="bg-light">Sizes Available</th>
                  <td>S, M, L, XL, XXL</td>
                </tr>
                <tr>
                  <th class="bg-light">Sleeve Type</th>
                  <td>Full Sleeve / Half Sleeve</td>
                </tr>
                <tr>
                  <th class="bg-light">Collar Type</th>
                  <td>Spread Collar</td>
                </tr>
                <tr>
                  <th class="bg-light">Closure</th>
                  <td>Button-Down</td>
                </tr>
                <tr>
                  <th class="bg-light">Occasion</th>
                  <td>Casual, Office, Formal, Party Wear</td>
                </tr>
                <tr>
                  <th class="bg-light">Features</th>
                  <td>
                    Breathable Fabric, Soft Touch, Fade-Resistant, Easy to Iron
                  </td>
                </tr>
                <tr>
                  <th class="bg-light">Care Instructions</th>
                  <td>
                    Machine Wash / Hand Wash, Do Not Bleach, Tumble Dry Low
                  </td>
                </tr>
                <tr>
                  <th class="bg-light">Package Includes</th>
                  <td>1 x Cotton Shirt</td>
                </tr>
                <tr>
                  <th class="bg-light">Price</th>
                  <td>$XX.XX (Varies by Size & Color)</td>
                </tr>
                <tr>
                  <th class="bg-light">Delivery Options</th>
                  <td>Standard, Express, Same-Day Delivery Available</td>
                </tr>
                <tr>
                  <th class="bg-light">Return Policy</th>
                  <td>Easy 7-Day Return & Exchange</td>
                </tr>
              </tbody>
            </table>
          </div>
		  <hr />
		  <h4>Related Products</h4>
        </div>
      </div>
    </div>
  );
}
