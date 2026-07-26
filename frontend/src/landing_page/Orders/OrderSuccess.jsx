import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./OrderSuccess.css";

function OrderSuccess() {
  return (
    <section className="order-success-section pt-5 pb-5">
      <div className="container">
        
        {/* SUCCESS MESSAGE */}
        <div className="text-center mb-4 mb-md-5">
          <h2 className="fw-bold mb-3 success-heading">✅ Order Placed Successfully</h2>
          <p className="success-desc mb-0">Thank you for your purchase! Your order has been confirmed.</p>
        </div>

        <div className="row g-4">

          {/* LEFT - INVOICE */}
          <div className="col-12 col-lg-8">
            <div className="invoice-card p-4 rounded-3">
              <h5 className="fw-semibold mb-4">Order Invoice</h5>

              <div className="d-flex justify-content-between small mb-2">
                <span className="text-muted">Order ID</span>
                <span className="fw-semibold">#MYSA12345</span>
              </div>

              <div className="d-flex justify-content-between small mb-3">
                <span className="text-muted">Date</span>
                <span className="fw-semibold">Today</span>
              </div>

              <hr className="my-3" />

              <div className="d-flex justify-content-between mb-2">
                <span>Product 1</span>
                <span className="fw-semibold">$200</span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Product 2</span>
                <span className="fw-semibold">$250</span>
              </div>

              <hr className="my-3" />

              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Sub Total</span>
                <span>$450</span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Discount</span>
                <span className="text-success">- $45</span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Delivery</span>
                <span>$50</span>
              </div>

              <hr className="my-3" />

              <div className="d-flex justify-content-between">
                <span className="fw-bold">Total Paid</span>
                <span className="fw-bold success-amount">$455</span>
              </div>
            </div>
          </div>

          {/* RIGHT - ACTIONS */}
          <div className="col-12 col-lg-4">
            <div className="action-card p-4 rounded-3 text-center">
              <h5 className="fw-semibold mb-4">What next?</h5>

              <Link
                to="/cart"
                className="btn btn-outline-secondary w-100 mb-2 rounded-pill fw-semibold"
              >
                Back to Cart
              </Link>

              <Link
                to="/products"
                className="btn btn-primary w-100 rounded-pill fw-semibold"
              >
                Continue Shopping
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default OrderSuccess;