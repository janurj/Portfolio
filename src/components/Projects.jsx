import React from "react";

const projects = [
  { title:"Mini Voice Assistant", tags:["Python","Speech Recognition","Audio Processing"], desc:"Developed a real-time voice recognition system detect voice commands. Mapped commands to applications like Calculator and Notepad, with features like audio preprocessing and condence-based validation, implemented in Python" },
  { title:"Mess Bill Management System", tags:["Python","SQL"], desc:"This project is a meal billing system for a mess, where fingerprint IDs are used to track students' meal consumption and update their bills dynamically. It calculates meal costs based on the day and time, updates the database, and provides real-time tracking", date:"2023" },
  { title:"Object Motion Detection", tags:["Python","OpenCV"], desc:"This real-time motion detection project uses OpenCV to capture video, detect movement by comparing frames, and highlight moving objects, making it useful for security and surveillance applications.", date:"2023" },
];

export default function Projects(){
  return (
    <div className="container mx-auto px-4">
    <section id="projects" className="section container">
      <h3>Projects</h3>
      <p className="lead">Showcasing my technical work and problem-solving abilities</p>

      <div className="projects-grid">
        {projects.filter(p=>p.featured).map((p,i)=>(
          <div key={"f"+i} className="card featured">
            <div style={{display:"flex",flexDirection:"column",gap:8,flex:1}}>
              <div className="meta-tags">
                {p.tags.map((t,ix)=>(<div className="tag" key={ix}>{t}</div>))}
              </div>
              <h4 style={{margin:0, fontSize:22}}>{p.title} <span style={{marginLeft:8, background:"var(--accent)", color:"#00112a", padding:"4px 8px", borderRadius:8, fontSize:12}}>Featured</span></h4>
              <p style={{color:"var(--muted)", marginTop:6}}>{p.desc}</p>
            </div>
            <div style={{color:"var(--muted)"}}>{p.date}</div>
          </div>
        ))}

        <div className="projects-row">
          {projects.filter(p=>!p.featured).map((p,i)=>(
            <div key={i} className="card">
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div style={{display:"flex",flexDirection:"column",gap:10}}>
                  <div style={{display:"flex",gap:8,alignItems:"center"}}>
                    {p.tags.map((t,ix)=>(<div className="tag" key={ix}>{t}</div>))}
                  </div>
                  <h4 style={{margin:0}}>{p.title}</h4>
                  <div style={{color:"var(--muted)", marginTop:6}}>{p.desc}</div>
                </div>
                <div style={{color:"var(--muted)"}}>{p.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
