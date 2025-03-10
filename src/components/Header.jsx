import React from "react";
import logo from '../Images/B.webp'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const cart = useSelector((state)=>state.cart.cart)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand me-2" to={'/'}>
            <img
              src={logo}
              height="50"
              alt="Brands Hut"
              loading="lazy"
              style={{marginTop: -1}}
            />
          </Link>

          <button
            data-mdb-collapse-init
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={'/dashboard'}>
                  Dashboard
                </Link>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              <button
                data-mdb-ripple-init
                type="button"
                className="btn btn-link px-3 me-2"
              >
               <Link to={"/login"}>Login</Link> 
              </button>
              <Link
                
                to={"/register"}
                className="btn btn-primary me-3"
              >
                Sign up for free
              </Link>
              <Link to={"/cart"}
                
              >
                Cart{cart.length}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
