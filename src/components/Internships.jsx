import React from "react";

const interns = [
  { company:"Codsoft", title:"Android Development Intern", domain:"Flutter Development", projects:["Alarm App","Quotes of the Day App"], tags:["Flutter","Dart","Android"] },
  { company:"Codsoft", title:"Machine Learning Intern", domain:"ML Development", projects:["Movie Genre Classification System","SMS Spam Detection"], tags:["Python","Machine Learning","NLP"] }
];

export default function Internships(){
  return (
    <div className="container mx-auto px-4">
    <section id="internships" className="section container">
      <h3>Internships</h3>
      <p className="lead">Professional experience and hands-on industry exposure</p>

      <div className="intern-grid">
        {interns.map((it, i)=>(
          <div key={i} className="card intern-card">
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div style={{fontSize:18, fontWeight:800}}>{it.title}</div>
              <div className="badge-pill">{it.company}</div>
            </div>
            <div style={{color:"var(--muted)", marginTop:8}}>{it.domain}</div>

            <div style={{marginTop:12}}>
              <div style={{fontWeight:700,color:"var(--muted)",marginBottom:8}}>PROJECTS COMPLETED</div>
              <ul style={{color:"var(--muted)"}}>
                {it.projects.map((p,ii)=>(<li key={ii}>{p}</li>))}
              </ul>
            </div>

            <div style={{marginTop:12}} className="tech-row">
              {it.tags.map((t,ii)=>(<div key={ii} className="tag">{t}</div>))}
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
