import React from "react";
import { LogoFacebook, ChatbubbleEllipsesOutline, CallOutline, MapOutline } from "react-ionicons";
import ImageAssets from "../../constants/ImageAssets";
import "./Contact.css";
import ContactSteps from "../../components/atoms/ContactSteps";

export const Contact = () => {
  return (
    <section className="section-contact" id="contact">
      <div className="row">
        <h2>Kontakt</h2>
      </div>

      <div className="row">
        <div className="col span-1-of-2 contact-box">
          <img src={ImageAssets.IzaSquere} alt="Izabela-Hodowca" className="photo-iza" />

          <ContactSteps
            icon={<ChatbubbleEllipsesOutline color="#a471c1" height="45px" width="45px" />}
            text="Cześć, Nazywam się Iza. W naszej hodowli odpowiadam za kontakt z Tobą. Odpowiem na każde Twoje pytanie. Szczerze, z form contactu najbardziej lubię rozmowę. Dzwoń,
              śmiało!"
          />

          <ContactSteps
            icon={<CallOutline color="#a471c1" height="45px" width="45px" />}
            text="Numer telefonu:"
            href="tel:+511327345"
            hrefIcon="tel:+511327345"
            phone=" 511-327-345"
          />
        </div>

        <div className="col span-1-of-2 contact-box">
          <ContactSteps
            icon={<LogoFacebook color="#a471c1" height="45px" width="45px" />}
            text="Nasz fanpage na fb"
            hrefIcon="https://www.facebook.com/Hodowla-Malta%C5%84czyk%C3%B3w-ZKWP-FCI-Izabela-Kubi%C5%84ska-Magdarpil-192004064917870/?ref=page_internal"
          />

          <ContactSteps
            icon={<MapOutline color="#a471c1" height="45px" width="45px" />}
            text="Jesteśmy z nad morza, a dokładnie z Rumi :)"
            hrefIcon="https://www.google.pl/maps/place/Mazowiecka,+84-230+Rumia/@54.5625225,18.4181231,17z/data=!3m1!4b1!4m5!3m4!1s0x46fda456b7b434ef:0x9813ee41a457684a!8m2!3d54.5625225!4d18.4203118"
          />

          <a
            href="https://www.google.pl/maps/place/Mazowiecka,+84-230+Rumia/@54.5625225,18.4181231,17z/data=!3m1!4b1!4m5!3m4!1s0x46fda456b7b434ef:0x9813ee41a457684a!8m2!3d54.5625225!4d18.4203118"
            target="_blank"
          >
            <img className="map" src={ImageAssets.map} alt="map" />
          </a>
        </div>
      </div>
    </section>
  );
};
