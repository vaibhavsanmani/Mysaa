import React from "react";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div className="container py-3 py-md-4">

      <h2 className="mb-3 mb-md-4">Checkout</h2>

      <div className="row g-3 g-md-4">

        {/* LEFT SIDE */}
        <div className="col-12 col-lg-8">

          {/* BILLING */}
          <div
            className="p-3 p-md-4 mb-3"
            style={{
              border: "1px solid #ddd",
              borderRadius: "16px",
              background: "#fff"
            }}
          >
            <h5 className="mb-3">Billing Details</h5>

            <div className="row">

              <div className="col-6 col-md-6 mb-2 mb-md-3">
                <input className="form-control" placeholder="First Name" />
              </div>

              <div className="col-6 col-md-6 mb-2 mb-md-3">
                <input className="form-control" placeholder="Last Name" />
              </div>

              <div className="col-12 mb-2 mb-md-3">
                <input type="email" className="form-control" placeholder="Email Address" />
              </div>

              <div className="col-12 mb-2 mb-md-3">
                <input className="form-control" placeholder="Address" />
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
          <div
            className="p-3 p-md-4"
            style={{
              border: "1px solid #ddd",
              borderRadius: "16px",
              background: "#fff"
            }}
          >
            <h5 className="mb-3">Payment Method</h5>

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
          <div
            className="p-3 p-md-4 position-lg-sticky"
            style={{
              top: "20px",
              border: "1px solid #ddd",
              borderRadius: "16px",
              background: "#fff"
            }}
          >
            <h5>Order Summary</h5>

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
              className="btn btn-dark w-100 mt-3 rounded-pill"
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