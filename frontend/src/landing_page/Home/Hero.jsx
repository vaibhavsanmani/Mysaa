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
          margin-bottom:25px;
          font-size:14px;
        }

        .hero-title{
          font-size:60px;
          font-weight:800;
          line-height:1.1;
        }

        .hero-title span{
          color:#FFD700;
        }

        .hero-text{
          color:#cfcfcf;
          font-size:18px;
          margin-top:20px;
          max-width:500px;
        }

        .hero-btns{
          margin-top:35px;
          display:flex;
          gap:15px;
          flex-wrap:wrap;
        }

        .btn-shop{
          background:#FFD700;
          color:#000;
          padding:14px 30px;
          border:none;
          border-radius:14px;
          font-weight:600;
          transition:0.3s;
        }

        .btn-shop:hover{
          transform:translateY(-3px);
        }

        .btn-explore{
          background:transparent;
          border:1px solid rgba(255,255,255,0.2);
          color:white;
          padding:14px 30px;
          border-radius:14px;
          font-weight:500;
        }

        .hero-stats{
          margin-top:50px;
        }

        .stat-box h2{
          color:#FFD700;
          font-weight:700;
        }

        .stat-box p{
          color:#aaa;
          font-size:14px;
        }

        .hero-image-wrapper{
          position:relative;
          display:flex;
          justify-content:center;
          align-items:center;
        }

        .hero-glow{
          position:absolute;
          width:350px;
          height:350px;
          background:rgba(255,215,0,0.2);
          border-radius:50%;
          filter:blur(80px);
        }

        .hero-image{
          position:relative;
          z-index:2;
          width:100%;
          max-width:450px;
          border-radius:30px;
          object-fit:cover;
          border:1px solid rgba(255,255,255,0.1);
          box-shadow:0 10px 40px rgba(0,0,0,0.5);
        }

        @media(max-width:992px){
          .hero-section{
            text-align:center;
          }

          .hero-title{
            font-size:48px;
          }

          .hero-text{
            margin:auto;
            margin-top:20px;
          }

          .hero-btns{
            justify-content:center;
          }

          .hero-image{
            margin-top:50px;
          }
        }

        @media(max-width:576px){
          .hero-title{
            font-size:38px;
          }

          .hero-text{
            font-size:15px;
          }

          .btn-shop,
          .btn-explore{
            width:100%;
          }

          .hero-glow{
            width:250px;
            height:250px;
          }
        }
      `}</style>

      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* LEFT CONTENT */}
            <div className="col-lg-6">

              <div className="hero-badge">
                Premium Fashion Collection
              </div>

              <h1 className="hero-title">
                Elevate Your <br />
                <span>Style With Mysaa</span>
              </h1>

              <p className="hero-text">
                Discover trendy outfits, premium fashion essentials,
                and modern streetwear crafted for every vibe.
              </p>

              <div className="hero-btns">
                <button className="btn-shop">
                  Shop Now
                </button>

                <button className="btn-explore">
                  Explore Collection
                </button>
              </div>

              {/* STATS */}
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

            {/* RIGHT IMAGE */}
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
