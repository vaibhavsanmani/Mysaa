import React from "react";
import { Link } from "react-router-dom";

function Cart() {
  const imgStyle = {
    width: "70px",
    height: "70px",
    objectFit: "cover",
    borderRadius: "10px"
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row">
  
  {/* LEFT SIDE (CART) */}
  <div className="col-md-8">
    <div
      className="p-4"
      style={{
        border: "1px solid black",
        borderRadius: "20px"
      }}
    >
      {/* Header */}
      <div className="row fw-bold mb-3">
        <div className="col-6">Products</div>
        <div className="col-2">Quantity</div>
        <div className="col-2">Total</div>
        <div className="col-2">Actions</div>
      </div>
      <hr />

      {/* Product Rows */}
      {[1, 2, 3].map((item, index) => (
        <div key={index} className="row align-items-center mb-3">
          <div className="col-6 d-flex align-items-center gap-3">
            <img src={`./images/art${item}.jpeg`} style={imgStyle} />
            <p className="mb-0">Painting {item}</p>
          </div>
          <div className="col-2">
  <div
    className="d-flex align-items-center justify-content-between px-2"
    style={{
      border: "1px solid #ccc",
      borderRadius: "50px",
      width: "100px",
      height: "35px"
    }}
  >
    <button
            className="btn btn-sm p-0"
            style={{ border: "none", background: "none" }}
            >
            -
            </button>

            <span>1</span>

            <button
            className="btn btn-sm p-0"
            style={{ border: "none", background: "none" }}
            >
            +
    </button>
        </div>
</div>
          <div className="col-2">${item * 100}</div>
          <div className="col-2">
            <i className="fa-solid fa-trash-can"></i>
          </div>
        </div>
      ))}

      <button className="btn btn-dark rounded-pill mt-3 px-4">
        Update Cart
      </button>
    </div>
  </div>

  {/* RIGHT SIDE (SUMMARY) */}
  <div className="col-md-4">
    <div
      className="p-4"
      style={{
        border: "1px solid #ddd",
        borderRadius: "20px",
        background: "#fff"
      }}
    >
      <h5>Order Summary</h5>

      {/* Voucher */}
      <div className="input-group my-3">
        <input
          type="text"
          className="form-control"
          placeholder="Discount voucher"
        />
        <button className="btn btn-outline-secondary">Apply</button>
      </div>

      {/* Pricing */}
      <div className="d-flex justify-content-between">
        <span>Sub Total</span>
        <span>$450</span>
      </div>

      <div className="d-flex justify-content-between">
        <span>Discount (10%)</span>
        <span>- $45</span>
      </div>

      <div className="d-flex justify-content-between">
        <span>Delivery Fee</span>
        <span>$50</span>
      </div>

      <hr />

      <div className="d-flex justify-content-between fw-bold">
        <span>Total</span>
        <span>$455</span>
      </div>

      <Link to='/checkout'>
        <button className="btn btn-dark w-100 mt-3 rounded-pill">
        Checkout Now
      </button></Link>
    </div>
  </div>
</div>
      </div>
    </>
  );
}

export default Cart;