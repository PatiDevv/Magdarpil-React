import { LogoFacebook } from "react-ionicons";
import LinkButton from "../atoms/LinkButton";
import SocialLink from "../atoms/SocialLink";
import "../atoms/SocialLink.css";
import "./Footer.css";

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
            <SocialLink
              icon={<LogoFacebook height="50px" width="50px" color="#324b80" />}
              href="https://www.facebook.com/Hodowla-Malta%C5%84czyk%C3%B3w-ZKWP-FCI-Izabela-Kubi%C5%84ska-Magdarpil-192004064917870/?ref=page_internal"
            />
          </ul>
        </div>
      </div>

      <div className="row">
        <p className="p-footer">2021 For my family and for study - Patrycja</p>
      </div>
    </footer>
  );
};
