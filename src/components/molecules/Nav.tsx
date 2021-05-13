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
          <LinkButton variant="header" href="#o_nas" name="O nas" />
          <LinkButton variant="header" href="#zanim_kupisz" name="Zanm kupisz" />
          <LinkButton variant="header" href="#photos" name="Nasze szczeniaki" />
          <LinkButton variant="header" href="#kontakt" name="Kontakt" />
        </ul>
      </div>
    </nav>
  );
};
