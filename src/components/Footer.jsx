import React from "react";

export default function Footer(){
  return (
    <div className="container mx-auto px-4">
    <footer>
      <div className="container">
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:20,flexWrap:"wrap"}}>
          <div style={{fontWeight:800}}>Janani<span style={{color:"var(--accent)"}}>.</span></div>
          <div style={{color:"var(--muted)"}}>© {new Date().getFullYear()} Janani R — Built with React</div>
          <div style={{display:"flex",gap:12}}>
            <a href="https://github.com/janurj" style={{color:"var(--muted)", textDecoration:"none"}}>GitHub</a>
            <a href="https://www.linkedin.com/in/janani-rajasekar-a12906285/" style={{color:"var(--muted)", textDecoration:"none"}}>LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}
