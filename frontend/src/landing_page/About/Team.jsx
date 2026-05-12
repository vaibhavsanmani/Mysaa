import React from "react";

function Team() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        <h4 className="text-center mb-5">People</h4>

        {/* LEFT SPACE */}
        <div className="col-lg-1"></div>

        {/* IMAGE SECTION */}
        <div className="col-12 col-lg-5 text-center mb-5 mb-lg-0">
          <img
            src="./images/Owner.png"
            alt="Owner"
            className="img-fluid"
            style={{
              width: "260px",
              height: "260px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />

          <h4 className="mt-4">Asmita Bagade</h4>

          <p className="text-muted mt-2">Founder, CEO</p>
        </div>

        {/* TEXT SECTION */}
        <div className="col-12 col-lg-5 text-center text-lg-start">
          <p className="mb-4" style={{ lineHeight: "1.8" }}>
            We started Mysa Arts with a vision to express creativity without
            limits, turning ideas into visually compelling stories through
            design and art. Today, Mysa Arts is steadily building its identity
            in the modern creative space.
          </p>

          <p className="mb-4" style={{ lineHeight: "1.8" }}>
            We actively engage with the creative community and stay aligned with
            evolving design trends and modern visual culture, constantly
            refining our approach to stay relevant and impactful.
          </p>

          <p className="mb-4">Creating art is our zen.</p>

          <p className="mb-0">
            Connect on&nbsp;
            <a href="/" style={{ textDecoration: "none" }}>
              Instagram
            </a>
            {" / "}
            <a href="/" style={{ textDecoration: "none" }}>
              Trading QnA
            </a>
            {" / "}
            <a href="/" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>

        {/* RIGHT SPACE */}
        <div className="col-lg-1"></div>

      </div>
    </div>
  );
}

export default Team;
