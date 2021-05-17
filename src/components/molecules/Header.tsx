import React from "react";
import PrimaryButton from "../atoms/PrimaryButton";
import { Nav } from "./Nav";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <Nav />
      <div className="row">
        <div className="hero-text-box">
          <h1>
            Rodzinna hodowla z sercem. <br />
            100% miłości do psów.
          </h1>

          <PrimaryButton href="#o_nas" text="Poznaj nas" />
        </div>
      </div>
    </header>
  );
};
