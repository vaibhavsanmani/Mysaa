import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white py-3"
        style={{
          borderBottom: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <div className="container">

          {/* LOGO */}
          <Link
            className="navbar-brand fw-bold"
            to="/products"
            style={{ fontSize: "22px" }}
          >
            <i className="fa-brands fa-magento"></i> Mysa
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
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Shop
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/qna" className="btn theme-outline-btn rounded-pill px-3">
                  QnA
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  New Arrivals
                </Link>
              </li>

              {/* CART BUTTON */}
              <li className="nav-item">
                <Link to="/cart" className="btn theme-outline-btn rounded-pill px-3">
                  <i className="fa-solid fa-cart-shopping"></i>
                </Link>
              </li>

              {/* CHECKOUT BUTTON */}
              <li className="nav-item">
                <Link to="/checkout" className="btn theme-accent-btn rounded-pill px-3">
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
