import React from "react";

function Qna() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">QnA</h1>
        <p className="text-muted mx-auto" style={{ maxWidth: "680px", lineHeight: 1.8 }}>
          Welcome to our Questions & Answers page. Browse common questions, get help with orders, and learn more about our products.
        </p>
      </div>

      <div className="row justify-content-center gap-4">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="card border-0 shadow-sm p-4 mb-4">
            <h3>How can I contact support?</h3>
            <p className="text-muted">Reach our support team by visiting the Contact page or emailing support@mysa.com.</p>
          </div>
          <div className="card border-0 shadow-sm p-4 mb-4">
            <h3>How do I track my order?</h3>
            <p className="text-muted">After checkout, use the order tracking information sent to your email to follow your shipment.</p>
          </div>
          <div className="card border-0 shadow-sm p-4 mb-4">
            <h3>Can I return an item?</h3>
            <p className="text-muted">Yes. Our returns policy is available on the checkout page and applies to eligible products within 30 days.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qna;
