import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-white py-3 "
        style={{
          borderBottom: "1px solid #eee",
        }}
      >
        <div className="container">

          {/* LOGO */}
          <Link
            className="navbar-brand fw-bold"
            to="/products"
            style={{ fontSize: "22px" }}
          >
            <i class="fa-brands fa-magento"></i> Mysa
          </Link>

          {/* TOGGLE (Mobile) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* NAV ITEMS */}
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto align-items-center gap-3">

              <li className="nav-item">
                <Link className="nav-link text-dark" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-dark" to="/shop">
                  Shop
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-dark" to="/about">
                  About
                </Link>
              </li>

              {/* CART BUTTON */}
              <li className="nav-item">
                <Link to="/cart" className="btn btn-outline-dark rounded-pill px-3">
                  <i class="fa-solid fa-cart-shopping"></i>
                </Link>
              </li>

              {/* CHECKOUT BUTTON */}
              <li className="nav-item">
                <Link to="/checkout" className="btn btn-dark rounded-pill px-3">
                  Checkout
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;