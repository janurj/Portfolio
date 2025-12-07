import React from "react";


export default function About(){
  return (
    <div className="container mx-auto px-4">
    <section id="about" className="section container">
      <h3>About Me</h3>
      <p className="lead">A dedicated IT student with a passion for building innovative solutions</p>

      <div className="about-grid">
        <div className="card obj">
          <div className="title">Career Objective</div>
          <p>
            Seeking to leverage my skills in software development, contributing to innovative solutions,
            optimizing processes, and growing in a dynamic environment that values excellence, learning,
            and technical ingenuity.
          </p>

          <div style={{marginTop:16, color:"var(--muted)", fontWeight:700}}>AREAS OF INTEREST</div>
          <div className="badges">
            <div className="badge-pill">DBMS</div>
            <div className="badge-pill">Data Structures</div>
          </div>
        </div>

        <div className="card">
          <div className="title">Languages</div>
          <div className="lang-list">
            <div className="lang-item"><span>English</span><span style={{background:"var(--accent)",padding:"6px 10px",borderRadius:10}}>Fluent</span></div>
            <div className="lang-item"><span>Tamil</span><span style={{background:"var(--accent)",padding:"6px 10px",borderRadius:10}}>Fluent</span></div>
            <div className="lang-item"><span>Telugu</span><span style={{background:"var(--accent)",padding:"6px 10px",borderRadius:10}}>Fluent</span></div>
            <div className="lang-item"><span>Hindi</span><span style={{background:"rgba(255,255,255,0.06)",padding:"6px 10px",borderRadius:10}}>Intermediate</span></div>
            <div className="lang-item"><span>German</span><span style={{background:"rgba(255,255,255,0.04)",padding:"6px 10px",borderRadius:10}}>Basics</span></div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
