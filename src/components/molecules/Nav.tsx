import React from "react";
import LinkButton from "../atoms/LinkButton";
import "./Nav.css";

interface NavProps {
  isNavSticky: boolean,
}


export const Nav = ({ isNavSticky }: NavProps) => {
  return (
    <nav className={isNavSticky ? "sticky" : ""}>

      <ul className="main-nav">
        <LinkButton variant="header" href="#ajra" name="Ajra" />
        <LinkButton variant="header" href="#about-us" name="O nas" />
        <LinkButton variant="header" href="#before-buy" name="Zanim kupisz" />
        <LinkButton variant="header" href="#photos" name="Nasze szczeniaki" />
        <LinkButton variant="header" href="#contact" name="Kontakt" />
      </ul>


    </nav>
  );
};
