import React from "react";

function Team() {
  return (
    <section className="py-5">
      <div className="text-center mb-5">
        <p className="theme-muted mb-2" style={{ letterSpacing: '1.5px', fontSize: '0.8rem', textTransform: 'uppercase' }}>
          Our team
        </p>
        <h2 className="fw-bold" style={{ fontSize: 'clamp(1.9rem, 3vw, 2.8rem)' }}>
          Meet the creative mind behind the work.
        </h2>
      </div>

      <div className="row g-4 align-items-center">
        <div className="col-12 col-lg-5 text-center">
          <div
            style={{
              width: '260px',
              height: '260px',
              margin: 'auto',
              borderRadius: '50%',
              padding: '2px',
              border: '1px solid rgba(31,31,31,0.08)',
              background: 'rgba(255,255,255,0.85)',
            }}
          >
            <img
              src="/images/Owner.png"
              alt="Founder"
              className="img-fluid"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
            />
          </div>

          <h3 className="mt-4 mb-1 fw-bold">Asmita Bagade</h3>
          <p className="theme-muted" style={{ letterSpacing: '0.8px' }}>
            Founder & CEO
          </p>
        </div>

        <div className="col-12 col-lg-7">
          <div className="p-4 rounded-4" style={{ backgroundColor: 'rgba(31,31,31,0.03)', border: '1px solid rgba(31,31,31,0.06)' }}>
            <p className="theme-muted mb-3" style={{ lineHeight: '1.9' }}>
              We focus on clean concepts, subtle details, and visual harmony. Every project is designed to feel intentional, calm, and memorable.
            </p>
            <p className="theme-muted mb-4" style={{ lineHeight: '1.9' }}>
              Our work blends contemporary design with quiet luxury, making every interaction feel polished and thoughtfully composed.
            </p>
            <div className="d-flex flex-wrap gap-3" style={{ fontSize: '0.95rem' }}>
              <a href="/" className="text-decoration-none theme-accent" style={{ fontWeight: '600' }}>
                Instagram
              </a>
              <a href="/" className="text-decoration-none theme-accent" style={{ fontWeight: '600' }}>
                Twitter
              </a>
              <a href="/" className="text-decoration-none theme-accent" style={{ fontWeight: '600' }}>
                Trading QnA
              </a>
            </div>
          </div>

          <div className="mt-4 p-4 rounded-4" style={{ backgroundColor: '#ffffff', border: '1px solid rgba(31,31,31,0.06)' }}>
            <p className="mb-2 fw-bold" style={{ marginBottom: '0.75rem' }}>
              “Creating art is our zen.”
            </p>
            <p className="theme-muted mb-0" style={{ lineHeight: '1.9' }}>
              A minimalist process that makes space for clarity, beauty, and purposeful storytelling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;