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
    <div className="container py-3">

      <div className="row g-3">

        {/* CART ITEMS */}
        <div className="col-12 col-lg-8">

          <div className="p-3 p-md-4 border rounded-4">

            <h5 className="mb-3">Your Cart</h5>

            {[1, 2, 3].map((item, index) => (
              <div key={index} className="border-bottom pb-3 mb-3">

                {/* TOP: IMAGE + NAME */}
                <div className="d-flex align-items-center gap-3 mb-2">
                  <img src={`./images/art${item}.jpeg`} style={imgStyle} />
                  <p className="mb-0 fw-semibold">Painting {item}</p>
                </div>

                {/* BOTTOM: QTY + PRICE + DELETE */}
                <div className="d-flex justify-content-between align-items-center">

                  {/* QTY */}
                  <div
                    className="d-flex align-items-center justify-content-between px-2"
                    style={{
                      border: "1px solid #ccc",
                      borderRadius: "50px",
                      width: "90px",
                      height: "32px"
                    }}
                  >
                    <button className="btn btn-sm p-0 border-0">-</button>
                    <span>1</span>
                    <button className="btn btn-sm p-0 border-0">+</button>
                  </div>

                  {/* PRICE */}
                  <span className="fw-bold">${item * 100}</span>

                  {/* DELETE */}
                  <i className="fa-solid fa-trash-can"></i>

                </div>
              </div>
            ))}

            <button className="btn btn-dark w-100 mt-2 rounded-pill">
              Update Cart
            </button>

          </div>
        </div>

        {/* SUMMARY */}
        <div className="col-12 col-lg-4">

          <div className="p-3 p-md-4 border rounded-4">

            <h5>Order Summary</h5>

            <div className="input-group my-3">
              <input
                className="form-control"
                placeholder="Discount voucher"
              />
              <button className="btn btn-outline-secondary">Apply</button>
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

            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>$455</span>
            </div>

            <Link to="/checkout">
              <button className="btn btn-dark w-100 mt-3 rounded-pill">
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