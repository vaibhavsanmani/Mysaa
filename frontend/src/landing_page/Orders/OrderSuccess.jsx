import React from "react";
import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="container py-5">

      {/* SUCCESS MESSAGE */}
      <div
        className="text-center mb-4 p-4"
        style={{
          border: "1px solid #ddd",
          borderRadius: "20px",
          background: "#fff"
        }}
      >
        <h2 className="mb-2">✅ Order Placed Successfully</h2>
        <p className="text-muted">Thank you for your purchase!</p>
      </div>

      <div className="row">

        {/* BILL DETAILS */}
        <div className="col-md-8">
          <div
            className="p-4"
            style={{
              border: "1px solid #ddd",
              borderRadius: "20px",
              background: "#fff"
            }}
          >
            <h5 className="mb-3">Order Invoice</h5>

            <div className="d-flex justify-content-between">
              <span>Order ID</span>
              <span>#MYSA12345</span>
            </div>

            <div className="d-flex justify-content-between">
              <span>Date</span>
              <span>Today</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between">
              <span>Product 1</span>
              <span>$200</span>
            </div>

            <div className="d-flex justify-content-between">
              <span>Product 2</span>
              <span>$250</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between">
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
              <span>Total Paid</span>
              <span>$455</span>
            </div>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="col-md-4">
          <div
            className="p-4 text-center"
            style={{
              border: "1px solid #ddd",
              borderRadius: "20px",
              background: "#fff"
            }}
          >
            <h5 className="mb-3">What next?</h5>

            <Link to="/cart" className="btn btn-outline-dark w-100 mb-2 rounded-pill">
              Back to Cart
            </Link>

            <Link to="/" className="btn btn-dark w-100 rounded-pill">
              Continue Shopping
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default OrderSuccess;