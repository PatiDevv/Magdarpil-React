import React from "react";
import { Medal, Heart, Paw } from "react-ionicons";
import "./Ajra.css";
import ajra from "../../images/aj.jpg";
import IconBig from "../atoms/IconBig";
import LogoZKwPFci from "../atoms/LogoZKwPFci";

export const Ajra = () => {
  return (
    <section className="section-ajra" id="ajra">
      <div className="row">
        <h2>Ajra &mdash; Super pies</h2>
      </div>

      <div className="row superpies-box">
        <div className="col span-1-of-2">
          <img src={ajra} alt="Tu powinna się wyświetlić nasza wspaniała Ajra." className="ajra" />
        </div>

        <div className="col span-1-of-2 steps-box">
          <IconBig
            icon={<Medal height="50px" width="50px" color="rgba(100, 58, 124, 0.7)" />}
            text="Ajra-White is beautiful (FCI) jest hodowlanym maltańczykiem z rodowodem po III wystawach z satysfakcjonującymi wynikami."
          />

          <IconBig
            icon={<Heart height="50px" width="50px" color="rgba(100, 58, 124, 0.7)" />}
            text="Nasza ukochana sunia. Tam gdzie człowiek tam i ona. Ajrulka to bardzo towarzyski pies. Uwielbia przebywać z ludźmi, jest 100% pieszczochem."
          />

          <IconBig
            icon={<Paw height="50px" width="50px" color="rgba(100, 58, 124, 0.7)" />}
            text='"Kocham człowieków nad życie, tak mocno jak jedzenie. Uwielbiam komendę daj głos, mogę wtedy legalnie szczekać i jeszcze czasem dostaję smaczek."'
          />

          <LogoZKwPFci />
        </div>
      </div>
    </section>
  );
};
