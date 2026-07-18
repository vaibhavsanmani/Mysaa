import React from "react";

function Team() {
  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "linear-gradient(to right, #f8f9fa, #ffffff)",
      }}
    >
      <div className="container">

        {/* HEADING */}
        <div className="text-center mb-5">
          <p
            style={{
              color: "#ff6b00",
              fontWeight: "600",
              letterSpacing: "2px",
            }}
          >
            OUR TEAM
          </p>

          <h1
            className="fw-bold"
            style={{
              fontSize: "clamp(2rem,5vw,3.5rem)",
            }}
          >
            Meet The Creative Mind
          </h1>
        </div>

        {/* CARD */}
        <div
          className="row align-items-center shadow-lg rounded-5 overflow-hidden"
          style={{
            backgroundColor: "#fff",
          }}
        >

          {/* IMAGE SECTION */}
          <div className="col-12 col-lg-5 text-center p-5">

            <div
              style={{
                width: "280px",
                height: "280px",
                margin: "auto",
                borderRadius: "50%",
                padding: "8px",
                background:
                  "linear-gradient(135deg, #ff6b00, #ffb347)",
              }}
            >
              <img
                src="/images/Owner.png"
                alt="Owner"
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: "6px solid white",
                }}
              />
            </div>

            <h2 className="mt-4 fw-bold">Asmita Bagade</h2>

            <p
              className="text-muted"
              style={{
                letterSpacing: "1px",
                fontWeight: "500",
              }}
            >
              Founder & CEO
            </p>

            {/* SOCIAL BUTTONS */}
            <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">

              <a
                href="/"
                className="btn rounded-pill px-4"
                style={{
                  backgroundColor: "#ff6b00",
                  color: "white",
                  fontWeight: "500",
                }}
              >
                Instagram
              </a>

              <a
                href="/"
                className="btn btn-outline-dark rounded-pill px-4"
              >
                Twitter
              </a>

              <a
                href="/"
                className="btn btn-outline-dark rounded-pill px-4"
              >
                Trading QnA
              </a>

            </div>
          </div>

          {/* CONTENT SECTION */}
          <div className="col-12 col-lg-7 p-4 p-lg-5">

            <h3
              className="fw-bold mb-4"
              style={{
                fontSize: "clamp(1.5rem,4vw,2.3rem)",
              }}
            >
              Bringing Creativity To Life ✨
            </h3>

            <p
              className="text-muted"
              style={{
                lineHeight: "2",
                fontSize: "1.05rem",
              }}
            >
              We started Mysa Arts with a vision to express creativity without
              limits, transforming ideas into visually compelling stories
              through modern design and artistic innovation.
            </p>

            <p
              className="text-muted"
              style={{
                lineHeight: "2",
                fontSize: "1.05rem",
              }}
            >
              Today, Mysa Arts is building a strong identity in the creative
              industry by blending aesthetics, storytelling, and modern visual
              culture into every project we create.
            </p>

            <p
              className="text-muted"
              style={{
                lineHeight: "2",
                fontSize: "1.05rem",
              }}
            >
              We continuously evolve with trends, engage with the creative
              community, and refine our work to create impactful experiences
              that inspire people.
            </p>

            {/* QUOTE BOX */}
            <div
              className="mt-4 p-4 rounded-4"
              style={{
                backgroundColor: "#fff5eb",
                borderLeft: "5px solid #ff6b00",
              }}
            >
              <h5
                style={{
                  color: "#ff6b00",
                  marginBottom: "0",
                }}
              >
                “Creating art is our zen.”
              </h5>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;