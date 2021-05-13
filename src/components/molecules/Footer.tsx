import React from "react";
import { LogoFacebook } from "react-ionicons";
import LinkButton from "../atoms/LinkButton";
import "./Footer.css";
import "./SocialLink.css";

export const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col span-1-of-2">
          <ul className="footer-nav">
            <LinkButton variant="footer" href="#ajra" name="Ajra" />
            <LinkButton variant="footer" href="#o_nas" name="O nas" />
            <LinkButton variant="footer" href="#zanim_kupisz" name="Zanm kupisz" />
            <LinkButton variant="footer" href="#photos" name="Nasze szczeniaki" />
            <LinkButton variant="footer" href="#kontakt" name="Kontakt" />
          </ul>
        </div>

        <div className="col span-1-of-2">
          <ul className="social-links">
            <li>
              <SocialLink
                icon={<LogoFacebook cssClasses="fb" />}
                href="https://www.facebook.com/Hodowla-Malta%C5%84czyk%C3%B3w-ZKWP-FCI-Izabela-Kubi%C5%84ska-Magdarpil-192004064917870/?ref=page_internal"
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <p className="p-footer">2021 For my family and for study - Patrycja</p>
      </div>
    </footer>
  );
};

interface ButtonProps {
  href: string;
  icon: React.ReactNode;
}

export default function SocialLink({ href, icon }: ButtonProps) {
  return (
    <li>
      <a href={href} target="_blank">
        {icon}
      </a>
    </li>
  );
}
