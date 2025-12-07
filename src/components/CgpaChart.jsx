import React from "react";
import "./CgpaChart.css";

export default function CgpaChart() {
  const cgpa = 8.3;
  const max = 10;
  const percentage = (cgpa / max) * 100;

  // circle math
  const radius = 72; // inner circle radius (px)
  const stroke = 12; // stroke width
  const normalizedRadius = radius;
  const circumference = 2 * Math.PI * normalizedRadius;
  const dashOffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="cgpa-wrapper">
      <div className="cgpa-circle"> 
        {/* SVG uses viewBox so it will always center inside the parent */}
        <svg
          className="progress-ring"
          viewBox={`0 0 ${radius * 2 + stroke} ${radius * 2 + stroke}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* background ring */}
          
          {/* progress ring */}
          <circle
            className="ring-progress"
            cx={(radius + stroke / 2)}
            cy={(radius + stroke / 2)}
            r={normalizedRadius}
            strokeWidth={stroke}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            style={{ transition: "stroke-dashoffset 1s ease-out" }}
          />
        </svg>

        <div className="cgpa-value">
          <span className="value">{cgpa}
          <span className="suffix" style={{fontSize:15}}>/10</span>
          </span>
          <div className="label">CGPA</div>
          <div className="degree">B.Tech IT</div>
        </div>
      </div>
    </div>
  );
}
