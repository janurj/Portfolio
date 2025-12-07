import React from "react";

export default function Navbar(){
  return (
    <div className="container mx-auto px-4">
    <header className="navbar">
      <div className="brand container">
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <h1>Janani<span className="dot">.</span></h1>
        </div>
      </div>

      <nav className="container" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div className="nav-links" style={{display:"flex", gap: "35px", flexGrow: 1 }}>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#certifications">Certifications</a>
          <a href="#internships">Internships</a>
        </div>
       
      </nav>
       <button className="resume-btn" style={{marginLeft: "auto"}} onClick={()=>window.open("/resume.pdf","_blank")}>Resume</button>
    </header>
    </div>
  );
}
