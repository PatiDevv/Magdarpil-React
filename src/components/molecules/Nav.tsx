import React from "react";
import LinkButton from "../atoms/LinkButton";
import Logo from "../atoms/Logo";
import "./Nav.css";

export const Nav = () => {
  return (
    <nav>
      <div className="row">
        <Logo />
        <ul className="main-nav hide">
          <LinkButton variant="header" href="#ajra" name="Ajra" />
          <LinkButton variant="header" href="#about-us" name="O nas" />
          <LinkButton variant="header" href="#before-buy" name="Zanim kupisz" />
          <LinkButton variant="header" href="#photos" name="Nasze szczeniaki" />
          <LinkButton variant="header" href="#contact" name="Kontakt" />
        </ul>
      </div>
    </nav>
  );
};
