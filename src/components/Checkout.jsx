import React, { useState } from "react";
import styles from "./Modal.module.css";
import product_image from "../Images/product (1).webp";

export default function Checkout() {
  const [isModal, setIsModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("COD");

  return (
    <div>
      <div className="container">
        <div className="row my-3">
          <div className="col-md-8">
            <div className="row border rounded">
              <div className="col-md-2 p-0 ">
                <div className="p-1">
                  <img src={product_image} alt="" className="img-fluid " />
                </div>
              </div>
              <div className="col-md-10 ">
                <div className="list_item_details p-3">
                  <div>
                    <h6 className="fw-bold">
                      Green Giza Satin Cotton Full Sleeve Formal Shirt For Men
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <form className="form">
              <div className="mb-4">
                <h4 className="my-3">Delivery</h4>
                <button
                  type="button"
                  className="btn btn-primary mb-3"
                  onClick={() => {
                    setIsModal(true);
                  }}
                >
                  + ADD ADDRESS
                </button>
                <div className="row">
                  <div className="col-md-4">
                    <label htmlFor="" className="border p-4 rounded d-block">
                      <input type="radio" value={1} name="address" />
                      <h5 className="fw-bold">Delivery To</h5>
                      <h6>Pavitar Sharma</h6>
                      <span>+00 112 2345 678</span>
                      <hr />
                      <p>H-85,South Extension,Part-1,South Delhi - 110049</p>
                    </label>
                  </div>
                  <div className="col-md-4 ">
                    <label htmlFor="" className="border p-4 rounded d-block">
                      <input type="radio" value={1} name="address" />
                      <h5 className="fw-bold">Delivery To</h5>
                      <h6>Pavitar Sharma</h6>
                      <span>+00 112 2345 678</span>
                      <hr />
                      <p>H-85,South Extension,Part-1,South Delhi - 110049</p>
                    </label>
                  </div>
                  <div className="col-md-4 ">
                    <label htmlFor="" className="border p-4 rounded d-block">
                      <input type="radio" value={1} name="address" />
                      <h5 className="fw-bold">Delivery To</h5>
                      <h6>Pavitar Sharma</h6>
                      <span>+00 112 2345 678</span>
                      <hr />
                      <p>H-85,South Extension,Part-1,South Delhi - 110049</p>
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="mb-3">Payment Method</h4>
                <div>
                  <label htmlFor="" className="d-block mb-2">
                    <input
                      type="radio"
                      name="payment_method"
                      value={"Credit/Debit Card"}
                      onChange={() => {
                        setPaymentMethod("CARD");
                      }}
                    />
                    Credit/Debit Card
                  </label>
                  <div>
                    <label htmlFor="" className="d-block mb-2">
                      <input
                        type="radio"
                        name="payment_method"
                        value={"Net Banking"}
                        onChange={() => {
                          setPaymentMethod("NET-BANKING");
                        }}
                      />
                      Net Banking
                    </label>
                    <select
                      className={
                        paymentMethod === "NET-BANKING"
                          ? "form-control form-select w-50 mb-2 show"
                          : "hide"
                      }
                      id=""
                    >
                      <option value={" "}>Select Bank</option>
                      <option value={"State Bank of India"}>
                        State Bank of India
                      </option>
                      <option value={"Bank of Baroda"}>Bank of Baroda</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="" className="d-block mb-2">
                      <input
                        type="radio"
                        name="payment_method"
                        value={"UPI"}
                        onChange={() => {
                          setPaymentMethod("UPI");
                        }}
                      />
                      UPI
                      <input
                        type="text"
                        className={
                          paymentMethod === "UPI"
                            ? "form-control w-50 mb-2 show"
                            : "hide"
                        }
                        placeholder="Enter Your UPI ID"
                      />
                    </label>
                  </div>
                  <label htmlFor="" className="d-block mb-2">
                    <input
                      type="radio"
                      name="payment_method"
                      value={"  Wallet"}
                      onChange={() => {
                        setPaymentMethod("WALLET");
                      }}
                    />
                    Wallet
                  </label>
                  <label htmlFor="" className="d-block mb-2">
                    <input
                      type="radio"
                      name="payment_method"
                      value={"COD"}
                      onChange={() => {
                        setPaymentMethod("COD");
                      }}
                    />
                    COD (Cash on Delivery)
                  </label>
                </div>
              </div>
              <button className="btn btn-lg btn-warning">Place Order</button>
            </form>
          </div>
          <div className="col-md-4">
            <div className="border p-4 rounded">
              <table className="table table-info  table-hover">
                <thead>
                  <th className="fs-4">Products</th>
                </thead>
                <tbody>
                  <tr>
                    <th>Shirt</th>
                    <td>3000-/</td>
                  </tr>
                  <tr>
                    <th>Belt</th>
                    <td>1000-/</td>
                  </tr>
                </tbody>
              </table>
              <h4>Total : 4000/-</h4>
              <button type="button" className="btn btn-block btn-warning w-100">
                Checkout
              </button>
            </div>
          </div>
        </div>

        <div
          className={` ${styles.address_modal} ${
            isModal === true ? styles.showModal : styles.hideModal
          } `}
        >
          <div className={` ${styles.address_modal_wrapper} `}>
            <div className="address_form_wrapper p-3 bg-light rounded shadow w-50">
              <div className="d-flex justify-content-between p-2">
                <h4 className="fw-bold fs-3">Add New Address</h4>
                <button
                  className="btn btn-close"
                  onClick={() => {
                    setIsModal(false);
                  }}
                ></button>
              </div>
              <hr className="mt-0" />
              <form action="" className="px-3">
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Enter your name"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    name="phone"
                    maxLength={10}
                    id=""
                    placeholder="Phone Number"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="address"
                    id=""
                    placeholder="Address Line 1"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="address"
                    id=""
                    placeholder="Address Line 2"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="address"
                    id=""
                    placeholder="Address Line 3"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <div className="row">
                    <div className="col-6">
                      <select
                        name=""
                        id=""
                        className="form-control form-select"
                      >
                        <option value={""}>Select City</option>
                        <option value={"New Delhi"}>New Delhi</option>
                        <option value={"Jaipur"}>Jaipur</option>
                        <option value={"Kota"}>Kota</option>
                      </select>
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Pincode"
                      />
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary">Add Address</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// why modal is not work?
// use conditional rendering { (isModal &&(...) } if u have heavy content.
