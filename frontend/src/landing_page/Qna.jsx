import React from "react";

function Qna() {
  const faqs = [
    {
      question: "How can I contact support?",
      answer:
        "Reach our support team by visiting the Contact page or emailing support@mysa.com.",
    },
    {
      question: "How do I track my order?",
      answer:
        "After checkout, use the order tracking information sent to your email to follow your shipment.",
    },
    {
      question: "Can I return an item?",
      answer:
        "Yes. Our returns policy is available on the checkout page and applies to eligible products within 30 days.",
    },
  ];

  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <div className="container py-5">
        {/* Heading */}
        <div className="text-center mb-5">
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              letterSpacing: "1px",
            }}
          >
            Q&A
          </h1>

          <p
            className="mx-auto"
            style={{
              maxWidth: "680px",
              color: "#b3b3b3",
              fontSize: "1.05rem",
            }}
          >
            Common questions and answers about our products and services.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            {faqs.map((item, index) => (
              <div
                key={index}
                style={{
                  background: "#111",
                  border: "1px solid #2a2a2a",
                  borderRadius: "14px",
                  padding: "24px",
                  marginBottom: "20px",
                  transition: "0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#1a1a1a";
                  e.currentTarget.style.borderColor = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#111";
                  e.currentTarget.style.borderColor = "#2a2a2a";
                }}
              >
                <h3
                  style={{
                    color: "#fff",
                    fontSize: "1.35rem",
                    fontWeight: "600",
                    marginBottom: "12px",
                  }}
                >
                  {item.question}
                </h3>

                <p
                  style={{
                    color: "#b3b3b3",
                    marginBottom: 0,
                    lineHeight: "1.8",
                  }}
                >
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qna;