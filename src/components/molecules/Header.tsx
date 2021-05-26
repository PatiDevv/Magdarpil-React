import React from "react";
import useStickyState from "../../hooks/useStickyState";
import PrimaryButton from "../atoms/PrimaryButton";
import "./Header.css";
import { Nav } from "./Nav";

export const Header = () => {
  const stickyState = useStickyState()

  return (
    <header ref={stickyState.componentRef} >
      <Nav isNavSticky={stickyState.isNavSticky} />

      <div className="hero-text-box">
        <h1>
          Rodzinna hodowla z sercem. <br />
            100% miłości do psów.
          </h1>

        <PrimaryButton href="#about-us" text="Poznaj nas" />
      </div>
    </header>
  );
};
