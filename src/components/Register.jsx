import React from "react";

export default function Register() {
  return (
    <div className="vh-100">
      <div className="container d-flex align-items-center justify-content-center h-100">
        <div className="w-33 bg-light p-3 py-5 shadow rounded ">
          <form action="" className="">
            <div data-mdb-input-init class="form-outline mb-4">
              <input
                type="text"
                id="registerName"
                class="form-control border"
              />
              <label class="form-label" for="registerName">
                Name
              </label>
            </div>

            <div data-mdb-input-init class="form-outline mb-4">
              <input
                type="text"
                id="registerUsername"
                class="form-control border"
              />
              <label class="form-label" for="registerUsername">
                Username
              </label>
            </div>

            <div data-mdb-input-init class="form-outline mb-4">
              <input
                type="email"
                id="registerEmail"
                class="form-control border"
              />
              <label class="form-label" for="registerEmail">
                Email
              </label>
            </div>

            <div data-mdb-input-init class="form-outline mb-4">
              <input
                type="password"
                id="registerPassword"
                class="form-control border"
              />
              <label class="form-label" for="registerPassword">
                Password
              </label>
            </div>

            <div data-mdb-input-init class="form-outline mb-4">
              <input
                type="password"
                id="registerRepeatPassword"
                class="form-control border"
              />
              <label class="form-label" for="registerRepeatPassword">
                Repeat password
              </label>
            </div>

            <div class="form-check d-flex justify-content-center mb-4">
              <input
                class="form-check-input me-2"
                type="checkbox"
                value=""
                id="registerCheck"
              />
              <label class="form-check-label" for="registerCheck">
                I have read and agree to the terms
              </label>
            </div>

			<button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-3">SIGN IN</button>
          </form>
        </div>
      </div>
    </div>
  );
}
