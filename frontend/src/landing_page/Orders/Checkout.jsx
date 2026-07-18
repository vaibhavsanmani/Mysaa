import React from "react";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div className="container py-4 py-md-5 theme-page-container">

      <h2 className="mb-3 mb-md-4 theme-heading">Checkout</h2>

      <div className="row g-3 g-md-4">

        {/* LEFT SIDE */}
        <div className="col-12 col-lg-8">

          {/* BILLING */}
          <div className="p-3 p-md-4 mb-3 theme-panel-soft rounded-4">
            <h5 className="mb-3 theme-heading">Billing Details</h5>

            <div className="row">

              <div className="col-6 col-md-6 mb-2 mb-md-3">
                <input className="form-control" placeholder="First Name" />
              </div>

              <div className="col-6 col-md-6 mb-2 mb-md-3">
                <input className="form-control" placeholder="Last Name" />
              </div>

              <div className="col-12 mb-2 mb-md-3">
                <input type="email" className="form-control theme-input" placeholder="Email Address" />
              </div>

              <div className="col-12 mb-2 mb-md-3">
                <input className="form-control theme-input" placeholder="Address" />
              </div>

              <div className="col-6 col-md-6 mb-2 mb-md-3">
                <input className="form-control" placeholder="City" />
              </div>

              <div className="col-6 col-md-6 mb-2 mb-md-3">
                <input className="form-control" placeholder="Zip Code" />
              </div>

            </div>
          </div>

          {/* PAYMENT */}
          <div className="p-3 p-md-4 theme-panel-soft rounded-4">
            <h5 className="mb-3 theme-heading">Payment Method</h5>

            <div className="form-check mb-2">
              <input className="form-check-input" type="radio" name="payment" />
              <label className="form-check-label">Credit Card</label>
            </div>

            <div className="form-check mb-2">
              <input className="form-check-input" type="radio" name="payment" />
              <label className="form-check-label">UPI</label>
            </div>

            <div className="form-check">
              <input className="form-check-input" type="radio" name="payment" />
              <label className="form-check-label">Cash on Delivery</label>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-12 col-lg-4">
          <div className="p-3 p-md-4 position-lg-sticky theme-panel-soft rounded-4" style={{ top: "20px" }}>
            <h5 className="theme-heading">Order Summary</h5>

            <div className="d-flex justify-content-between mt-3">
              <span>Sub Total</span>
              <span>$450</span>
            </div>

            <div className="d-flex justify-content-between">
              <span>Discount</span>
              <span>-$45</span>
            </div>

            <div className="d-flex justify-content-between">
              <span>Delivery</span>
              <span>$50</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>$455</span>
            </div>

            <Link
              to="/orderplaced"
              className="btn theme-accent-btn w-100 mt-3 rounded-pill"
            >
              Place Order
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Checkout;