import React from "react";
import "./Breeder.css";

interface BreederProps {
  href?: string;
  src: string;
  breederName: string;
  breederDescription: string;
}

export default function Breeder({ href, src, breederName, breederDescription }: BreederProps) {
  return (
    <div className="col span-1-of-3">
      <a href={href} target="_blank">
        <img className="breeder" src={src} alt="Hodowca" />
      </a>

      <h3>{breederName}</h3>
      <p>{breederDescription}</p>
    </div>
  );
}
