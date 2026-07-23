import React from "react";

function Qna() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1>QnA</h1>
        <p className="text-muted mx-auto" style={{ maxWidth: "680px" }}>
          Common questions and answers about our products and services.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div style={{ borderBottom: "1px solid #eee", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem" }}>How can I contact support?</h3>
            <p className="text-muted" style={{ marginBottom: 0 }}>Reach our support team by visiting the Contact page or emailing support@mysa.com.</p>
          </div>
          <div style={{ borderBottom: "1px solid #eee", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem" }}>How do I track my order?</h3>
            <p className="text-muted" style={{ marginBottom: 0 }}>After checkout, use the order tracking information sent to your email to follow your shipment.</p>
          </div>
          <div>
            <h3 style={{ marginBottom: "0.5rem" }}>Can I return an item?</h3>
            <p className="text-muted" style={{ marginBottom: 0 }}>Yes. Our returns policy is available on the checkout page and applies to eligible products within 30 days.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qna;
