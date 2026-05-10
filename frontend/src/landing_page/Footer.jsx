import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <footer className="footer-section text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row g-4">

          {/* BRAND */}
          <div className="col-12 col-md-6 col-lg-4">
            <h2 className="fw-bold mb-3 logo-text">MYSAA</h2>

            <p className="footer-desc">
              Discover premium fashion, electronics, and lifestyle products
              with fast delivery and secure shopping experience.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="col-6 col-md-3 col-lg-2">
            <h5 className="fw-semibold mb-3">Quick Links</h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="footer-link">
                  Home
                </a>
              </li>

              <li className="mb-2">
                <a href="/shop" className="footer-link">
                  Shop
                </a>
              </li>

              <li className="mb-2">
                <a href="/categories" className="footer-link">
                  Categories
                </a>
              </li>

              <li className="mb-2">
                <a href="/contact" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* CUSTOMER */}
          <div className="col-6 col-md-3 col-lg-3">
            <h5 className="fw-semibold mb-3">Customer</h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/account" className="footer-link">
                  My Account
                </a>
              </li>

              <li className="mb-2">
                <a href="/orders" className="footer-link">
                  Orders
                </a>
              </li>

              <li className="mb-2">
                <a href="/wishlist" className="footer-link">
                  Wishlist
                </a>
              </li>

              <li className="mb-2">
                <a href="/help" className="footer-link">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="col-12 col-lg-3">
            <h5 className="fw-semibold mb-3">Follow Us</h5>

            <div className="d-flex gap-3 social-wrapper">
              <a href="/" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>

              <a href="/" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>

              <a href="/" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>

              <a href="/" className="social-icon">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* LINE */}
        <hr className="border-secondary my-4" />

        {/* COPYRIGHT */}
        <div className="text-center footer-copy">
          © 2026 MYSAA. All Rights Reserved.
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .footer-section {
          background: #111827;
        }

        .logo-text {
          letter-spacing: 1px;
        }

        .footer-desc {
          color: #9ca3af;
          line-height: 1.8;
          max-width: 320px;
        }

        .footer-link {
          text-decoration: none;
          color: #9ca3af;
          transition: 0.3s ease;
        }

        .footer-link:hover {
          color: white;
          padding-left: 5px;
        }

        .social-wrapper {
          flex-wrap: wrap;
        }

        .social-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #1f2937;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: 0.3s ease;
          font-size: 18px;
        }

        .social-icon:hover {
          background: #2563eb;
          transform: translateY(-4px);
        }

        .footer-copy {
          color: #9ca3af;
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .footer-section {
            text-align: center;
          }

          .footer-desc {
            margin: auto;
          }

          .social-wrapper {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;