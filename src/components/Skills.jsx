import React from "react";

const skills = {
  programming: ["C","Java","Python"],
  web: ["React","HTML/CSS","JavaScript"],
  db: ["MySQL","Oracle","MongoDB"],
  tools: ["Git","OpenCV","Flutter"]
};

export default function Skills(){
  return (
    <div className="container mx-auto px-4">
    <section id="skills" className="section container">
      <h3>Skills</h3>
      <p className="lead">Technical expertise and proficiencies developed through academics and projects</p>

      <div className="skills-grid">
        <div className="card skill-box">
          <h4>Programming Languages</h4>
          <div>
            {skills.programming.map((s,i)=>(<div key={i} style={{display:"flex",justifyContent:"space-between",padding:"8px 0"}}><span>{s}</span><span className="badge-pill">Advanced</span></div>))}
          </div>
        </div>
        <div className="card skill-box">
          <h4>Web Technologies</h4>
          <div>
            {skills.web.map((s,i)=>(<div key={i} style={{display:"flex",justifyContent:"space-between",padding:"8px 0"}}><span>{s}</span><span className="badge-pill">Intermediate</span></div>))}
          </div>
        </div>
        <div className="card skill-box">
          <h4>Databases</h4>
          <div>
            {skills.db.map((s,i)=>(<div key={i} style={{display:"flex",justifyContent:"space-between",padding:"8px 0"}}><span>{s}</span><span className="badge-pill">Intermediate</span></div>))}
          </div>
        </div>
        <div className="card skill-box">
          <h4>Tools & Others</h4>
          <div>
            {skills.tools.map((s,i)=>(<div key={i} style={{display:"flex",justifyContent:"space-between",padding:"8px 0"}}><span>{s}</span><span className="badge-pill">Intermediate</span></div>))}
          </div>
        </div>
      </div>

      <div style={{marginTop:18}} className="card">
        <h4>All Technologies</h4>
        <div className="tech-row">
          {["C","Java","Python","React","HTML/CSS","JavaScript","MySQL","Oracle","MongoDB","Git","OpenCV","Flutter"].map((t,i)=>(
            <div key={i} className="tag">{t}</div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
