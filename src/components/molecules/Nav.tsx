import React from "react";
import { ListOutline } from "react-ionicons";
import ImageAssets from "../../constants/ImageAssets";
import LinkButton from "../atoms/LinkButton";
import "./Nav.css";

export const Nav = ({ isNavSticky }: { isNavSticky: boolean }) => {
  return (
    <nav className={isNavSticky ? "sticky" : ""}>

      <img className={ImageAssets.logo} alt="Magdarpil-logo" />
      <ul className="main-nav">
        <LinkButton variant="header" href="#ajra" name="Ajra" />
        <LinkButton variant="header" href="#about-us" name="O nas" />
        <LinkButton variant="header" href="#before-buy" name="Zanim kupisz" />
        <LinkButton variant="header" href="#photos" name="Nasze szczeniaki" />
        <LinkButton variant="header" href="#contact" name="Kontakt" />
      </ul>

      <ListOutline
        color={isNavSticky ? '#000' : "#fff"}
        cssClasses="listOutline"
        height="40px"
        width="40px"
      />

    </nav>
  );
};
