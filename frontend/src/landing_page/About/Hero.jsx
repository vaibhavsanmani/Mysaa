import React from 'react'

function Hero() {
  return (
    <section className="py-5">
      <div className="text-center mb-5">
        <p className="theme-muted mb-3" style={{ letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
          About Mysa Arts
        </p>
        <h1 className="fw-bold" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1rem' }}>
          Calm, clear, modern design.
        </h1>
        <p className="mx-auto theme-muted" style={{ maxWidth: '680px', lineHeight: '1.85', fontSize: '1rem' }}>
          We create thoughtful visuals with quiet confidence, focusing on clarity, space, and a refined creative process that feels effortless.
        </p>
      </div>

      <div className="row gx-5">
        <div className="col-lg-4 mb-4">
          <div className="p-4 rounded-4" style={{ background: 'rgba(255, 107, 0, 0.08)', border: '1px solid rgba(255, 107, 0, 0.12)' }}>
            <h5 className="fw-bold mb-3">Our approach</h5>
            <p className="theme-muted mb-0">Simple ideas, thoughtful execution, and polished results.</p>
          </div>
        </div>

        <div className="col-lg-4 mb-4">
          <div className="p-4 rounded-4" style={{ background: 'rgba(31, 31, 31, 0.03)', border: '1px solid rgba(31, 31, 31, 0.06)' }}>
            <h5 className="fw-bold mb-3">Our focus</h5>
            <p className="theme-muted mb-0">A calm user experience, refined typography, and strong visual hierarchy.</p>
          </div>
        </div>

        <div className="col-lg-4 mb-4">
          <div className="p-4 rounded-4" style={{ background: 'rgba(255, 255, 255, 0.85)', border: '1px solid rgba(31, 31, 31, 0.06)' }}>
            <h5 className="fw-bold mb-3">Our promise</h5>
            <p className="theme-muted mb-0">An elegant, uncluttered aesthetic that supports your story without noise.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero; 