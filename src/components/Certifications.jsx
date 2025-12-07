import React from "react";

export default function Certifications(){
  return (
    <div className="container mx-auto px-4">
    <section id="certifications" className="section container">
      <h3>Certifications & Achievements</h3>
      <p className="lead">Professional certifications and notable accomplishments</p>

      <div className="cert-row">
        <div className="card">
          <h4>Certifications</h4>
          <div style={{marginTop:12,display:"flex",flexDirection:"column",gap:12}}>
            <div className="card" style={{padding:14, background:"transparent"}}>
              <div style={{fontWeight:700}}>Introduction to Career Skills to Data Analytics</div>
              <div style={{color:"var(--muted)"}}>Microsoft</div>
            </div>
            <div className="card" style={{padding:14, background:"transparent"}}>
              <div style={{fontWeight:700}}>AWS Cloud Practitioner <span className="badge-pill" style={{marginLeft:10}}>Global Certification</span></div>
              <div style={{color:"var(--muted)"}}>Amazon Web Services</div>
            </div>
            <div className="card" style={{padding:14, background:"transparent"}}>
              <div style={{fontWeight:700}}>Gen AI Webinar Completion</div>
              <div style={{color:"var(--muted)"}}>GUVI</div>
            </div>
          </div>
        </div>

        <div className="card">
          <h4>Achievements</h4>
          <ul style={{marginTop:12, color:"var(--muted)"}}>
            <li>Completed Hindi 4 Level of exams</li>
            <li>Completed Hindi 4 level spoken exam</li>
            <li>Completed Type writing exam of lower level</li>
          </ul>

          <h4 style={{marginTop:18}}>Paper Presentation</h4>
          <div className="card" style={{marginTop:10, padding:12, background:"transparent"}}>
            <div style={{fontWeight:700}}>Artificial Neural Network Classification of Arrhythmia using Deep Learning</div>
            <div style={{color:"var(--muted)", marginTop:6}}>Research Paper</div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
