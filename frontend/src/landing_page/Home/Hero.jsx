import React from "react";
function Hero() {
  return (
    <>
      <style>{`
        .hero-section{
          min-height:100vh;
          background: linear-gradient(135deg,#000,#111,#1b1b1b);
          color:white;
          display:flex;
          align-items:center;
          overflow:hidden;
          padding:60px 0;
        }

        .hero-badge{
          display:inline-block;
          padding:10px 20px;
          border-radius:50px;
          background:rgba(255,255,255,0.08);
          border:1px solid rgba(255,255,255,0.1);
          margin-bottom:20px;
          font-size:14px;
        }

        .hero-title{
          font-size:65px;
          font-weight:800;
          line-height:1.1;
        }

        .hero-title span {
          color: #ff6b00;
        }

        .hero-text {
          color: #666;
          font-size: 1.05rem;
          line-height: 1.9;
          max-width: 560px;
          margin-bottom: 32px;
        }

        .hero-btns {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .hero-btns .btn-primary {
          background: #ff6b00;
          color: #ffffff;
          border: none;
          padding: 14px 32px;
          border-radius: 999px;
          font-weight: 700;
        }

        .hero-btns .btn-primary:hover {
          background: #e05b00;
        }

        .hero-btns .btn-outline-secondary {
          border-color: rgba(31, 31, 31, 0.12);
          color: #111;
          padding: 14px 32px;
          border-radius: 999px;
        }

        .hero-stats {
          margin-top: 40px;
        }

        .stat-box h2 {
          color: #ff6b00;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .stat-box p {
          color: #666;
          font-size: 0.95rem;
        }

        .hero-image-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-glow {
          position: absolute;
          width: 320px;
          height: 320px;
          background: rgba(255, 107, 0, 0.12);
          border-radius: 50%;
          filter: blur(60px);
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
        }

        .hero-image {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 500px;
          border-radius: 30px;
          object-fit: cover;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.12);
        }

        @media (max-width: 992px) {
          .hero-section {
            padding: 60px 0;
          }

          .hero-title {
            font-size: 3rem;
          }

          .hero-image {
            margin-top: 40px;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 2.4rem;
          }

          .hero-text {
            font-size: 0.98rem;
          }

          .hero-btns {
            flex-direction: column;
          }

          .hero-glow {
            width: 220px;
            height: 220px;
          }
        }
      `}</style>

      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <div className="hero-badge">Premium Fashion Collection</div>
              <h1 className="hero-title">
                Elevate Your <br />
                <span>Style with Mysaa</span>
              </h1>
              <p className="hero-text">
                Discover premium fashion essentials, modern streetwear, and design-led pieces that make every outfit feel polished and original.
              </p>
              <div className="hero-btns">
                <button className="btn btn-primary">Shop Now</button>
                <button className="btn btn-outline-secondary">Explore Collection</button>
              </div>

              <div className="row hero-stats">
                <div className="col-4 stat-box">
                  <h2>10K+</h2>
                  <p>Happy Customers</p>
                </div>
                <div className="col-4 stat-box">
                  <h2>500+</h2>
                  <p>New Arrivals</p>
                </div>
                <div className="col-4 stat-box">
                  <h2>4.9★</h2>
                  <p>Customer Rating</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-image-wrapper">
                <div className="hero-glow"></div>
                <img
                  src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop"
                  alt="Fashion"
                  className="hero-image img-fluid"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
