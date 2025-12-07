import React from "react";
import CgpaChart from "./CgpaChart";
import About from "./About";
export default function Hero(){
  const handleDownload=()=>{
    const link = document.createElement("a");
    link.href="resume.pdf";
    link.download = "Janani_R.pdf";
    link.click();
  };
  return (
    <div className="container mx-auto px-4">
    <section className="hero container">
      <div className="hero-left">
        <div className="badge">Open To Work</div>
        <h2>Janani R</h2>
        <div className="subtitle">Information Technology Student</div>
        <p className="lead">
          Passionate about software development, contributing to innovative solutions, and growing
          in a dynamic environment that values excellence and technical ingenuity.
        </p>
        
        <div className="hero-actions">
          <button onClick={handleDownload}className="btn-primary">Download Resume</button>
          <button className="btn-ghost learn-more-btn" onClick={()=>document.getElementById("about").scrollIntoView({behavior:"smooth"})}>More About Me!</button>
        </div>

        <div style={{marginTop:22, color:"var(--muted)", display:"flex", gap:12, alignItems:"center"}}>
          <span style={{display:"inline-flex",alignItems:"center",gap:8}}><svg width="18" height="14" fill="none" viewBox="0 0 24 24"><path d="M3 12h18" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round"/></svg> januraj4740@gmail.com</span>
        </div>
      </div>

      <div className="hero-right">
        <div className="education-circle card">
          {/* <div className="icon">{"</>"}</div> */}
          <div className="education-meta">
            <div className="hero-right">
  <CgpaChart />
</div>

          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
