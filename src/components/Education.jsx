import React from "react";
import education from "../data/education";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h3>Education</h3>
        <p className="lead">My academic journey and achievements</p>

        <div className="timeline-grid">
          {/* center vertical line element — visually placed by CSS */}
          <div className="timeline-line" aria-hidden="true"></div>

          {education.map((item, idx) => {
            const isLeft = item.side === "left";
            return (
              <React.Fragment key={idx}>
                {/* Left column card (if left) */}
                <div
                  className={`timeline-card left ${
                    isLeft ? "visible" : "hidden-on-desktop"
                  }`}
                >
                  <div className="card educ-card">
                    <div className="flex-between">
                      <div style={{ fontWeight: 800 }}>{item.title}</div>
                      <div className="badge-pill" style={{ fontSize: 13 }}>
                        {item.year}
                      </div>
                    </div>
                    <div style={{ color: "var(--muted)", marginTop: 10 }}>
                      {item.sub}
                    </div>
                    <div
                      style={{ marginTop: 14, color: "var(--accent)", fontWeight: 800 }}
                    >
                      {item.extra}
                    </div>
                  </div>
                </div>

                {/* center marker column */}
                <div className="timeline-marker-col">
                  <div className="marker-row">
                    <div className="marker" />
                  </div>

                  {/* show year pill near marker on small screens */}
                  <div className="year-pill-mobile">{item.year}</div>
                </div>

                {/* Right column card (if right) */}
                <div
                  className={`timeline-card right ${
                    !isLeft ? "visible" : "hidden-on-desktop"
                  }`}
                >
                  <div className="card educ-card">
                    <div className="flex-between">
                      <div style={{ fontWeight: 800 }}>{item.title}</div>
                      <div className="badge-pill" style={{ fontSize: 13 }}>
                        {item.year}
                      </div>
                    </div>
                    <div style={{ color: "var(--muted)", marginTop: 10 }}>
                      {item.sub}
                    </div>
                    <div
                      style={{ marginTop: 14, color: "var(--accent)", fontWeight: 800 }}
                    >
                      {item.extra}
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
