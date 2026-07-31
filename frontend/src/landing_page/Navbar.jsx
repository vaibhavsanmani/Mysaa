import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mysa-navbar sticky-top">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand logo" to="/products">
          <i className="fa-brands fa-magento me-2"></i>
          <span>Mysa</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav */}
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto align-items-center gap-lg-4 gap-2">

            <li className="nav-item">
              <Link className="nav-link custom-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link custom-link" to="/products">
                Shop
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link custom-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link custom-link" to="/products">
                New Arrivals
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/qna"
                className="btn btn-light rounded-pill px-4 border"
              >
                QnA
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/cart"
                className="cart-btn"
              >
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/checkout"
                className="btn checkout-btn rounded-pill px-4"
              >
                Checkout
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;