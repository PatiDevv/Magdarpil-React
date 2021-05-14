import React from "react";
import logoZKwPFci from "../../images/zkwp-fci-logo.png";
import "./LogoZKwPFCI.css";

export default function LogoZKwPFci() {
  return (
    <a href="http://www.zkwp.pl/main.polish/index.html" target="_blank">
      <img className="logo-zkwpfci-img" src={logoZKwPFci} alt="Zkwp Fci logo" />
    </a>
  );
}
