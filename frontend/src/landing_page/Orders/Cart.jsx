import React from "react";
import { Link } from "react-router-dom";

function Cart() {

  const imgStyle = {
    width: "60px",
    height: "60px",
    objectFit: "cover",
    borderRadius: "10px"
  };

  return (
    <div className="container py-4 py-md-5 theme-page-container">

      <div className="row g-3">

        {/* CART ITEMS */}
        <div className="col-12 col-lg-8">
          <div className="p-3 p-md-4 theme-panel-soft rounded-4">

            <h5 className="mb-3 theme-heading">Your Cart</h5>

            {[1, 2, 3].map((item, index) => (
              <div key={index} className="border-bottom pb-3 mb-3">

                {/* TOP: IMAGE + NAME */}
                <div className="d-flex align-items-center gap-3 mb-2">
                  <img src={`./images/art${item}.jpeg`} style={imgStyle} />
                  <p className="mb-0 fw-semibold small small-md-normal">
                    Painting {item}
                  </p>
                </div>

                {/* BOTTOM */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2">

                  {/* QTY */}
                  <div
                    className="d-flex align-items-center justify-content-between px-2"
                    style={{
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "50px",
                      width: "100px",
                      height: "36px",
                      background: "rgba(255,255,255,0.04)"
                    }}
                  >
                    <button className="btn btn-sm p-0 border-0 fs-5">-</button>
                    <span>1</span>
                    <button className="btn btn-sm p-0 border-0 fs-5">+</button>
                  </div>

                  {/* PRICE + DELETE */}
                  <div className="d-flex justify-content-between align-items-center w-100 w-md-auto">

                    <span className="fw-bold">${item * 100}</span>

                    <i className="fa-solid fa-trash-can ms-3 fs-5 text-danger"></i>

                  </div>

                </div>

              </div>
            ))}

            <button className="btn theme-accent-btn w-100 mt-2 rounded-pill py-2">
              Update Cart
            </button>

          </div>
        </div>

        {/* SUMMARY */}
        <div className="col-12 col-lg-4">
          <div className="p-3 p-md-4 theme-panel-soft rounded-4">

            <h5 className="theme-heading">Order Summary</h5>

            <div className="input-group my-3">
              <input
                className="form-control theme-input"
                placeholder="Discount voucher"
              />
              <button className="btn theme-outline-btn">
                Apply
              </button>
            </div>

            <div className="d-flex justify-content-between">
              <span>Sub Total</span>
              <span>$450</span>
            </div>

            <div className="d-flex justify-content-between">
              <span>Discount</span>
              <span>- $45</span>
            </div>

            <div className="d-flex justify-content-between">
              <span>Delivery</span>
              <span>$50</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between fw-bold fs-5">
              <span>Total</span>
              <span>$455</span>
            </div>

            <Link to="/checkout">
              <button className="btn theme-accent-btn w-100 mt-3 rounded-pill py-2">
                Checkout Now
              </button>
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Cart;