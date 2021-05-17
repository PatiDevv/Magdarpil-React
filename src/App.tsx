import React from "react";
import "./App.css";
import "./styles/grid.css";
import "./styles/normalize.css";
import "./styles/queries.css";
import "./styles/style.css";

import { LogoFacebook, ChatbubbleEllipsesOutline, CallOutline, MapOutline, PawOutline, TimeOutline, HandLeftOutline, HeartOutline } from "react-ionicons";
import { Header } from "./components/molecules/Header";
import { Footer } from "./components/molecules/Footer";
import { Ajra } from "./pages/Branding/Ajra";
import { AboutUs } from "./pages/Branding/AboutUs";
import { BeforeBuy } from "./pages/Branding/BeforeBuy";
import { Puppies } from "./pages/Branding/Puppies";

function App() {
  return (
    <div>
      <Header />
      <Ajra />
      <AboutUs />
      <BeforeBuy />
      <Puppies />
      <Section5 />
      <Footer />
    </div>
  );
}

const Section5 = () => {
  return (
    <section className="section-kontakt" id="kontakt">
      <div className="row">
        <h2>Kontakt</h2>
      </div>

      <div className="row row_m">
        <div className="col span-1-of-2 kontakt-box">
          <img src="resources/css/img/iza_square.jpg" alt="Izabela - breeder" className="photo-iza" />

          <div className="kontakt-steps">
            <div>
              <ChatbubbleEllipsesOutline cssClasses="map-icon" />
            </div>
            <p>
              Cześć, Nazywam się Iza. W naszej hodowli odpowiadam za kontakt z Tobą. Odpowiem na każde Twoje pytanie. Szczerze, z form kontaktu najbardziej lubię rozmowę. Dzwoń,
              śmiało!
            </p>
          </div>
          <div className="kontakt-steps">
            <div>
              <CallOutline cssClasses="map-icon" />
            </div>
            <p>
              Numer telefonu:{" "}
              <a className="link" href="tel:+511327345">
                {" "}
                <strong>511-327-345</strong>{" "}
              </a>
            </p>
          </div>
        </div>

        <div className="col span-1-of-2 kontakt-box">
          <div className="kontakt-steps">
            <div>
              <a href="https://www.facebook.com/Hodowla-Malta%C5%84czyk%C3%B3w-ZKWP-FCI-Izabela-Kubi%C5%84ska-Magdarpil-192004064917870/?ref=page_internal" target="_blank">
                <LogoFacebook cssClasses="map-icon_third" />
              </a>
            </div>
            <p>
              <a className="link" href="https://www.facebook.com/Hodowla-Malta%C5%84czyk%C3%B3w-ZKWP-FCI-Izabela-Kubi%C5%84ska-Magdarpil-192004064917870/?ref=page_internal">
                Nasz funpage na fb
              </a>
            </p>
          </div>

          <div className="kontakt-steps">
            <div>
              <a href="https://www.google.pl/maps/place/Mazowiecka,+84-230+Rumia/@54.5625225,18.4181231,17z/data=!3m1!4b1!4m5!3m4!1s0x46fda456b7b434ef:0x9813ee41a457684a!8m2!3d54.5625225!4d18.4203118">
                <MapOutline cssClasses="map-icon" />
              </a>
            </div>
            <p>Jesteśmy z nad morza, a dokładnie z Rumi :)</p>
          </div>

          <a
            className="mapa"
            href="https://www.google.pl/maps/place/Mazowiecka,+84-230+Rumia/@54.5625225,18.4181231,17z/data=!3m1!4b1!4m5!3m4!1s0x46fda456b7b434ef:0x9813ee41a457684a!8m2!3d54.5625225!4d18.4203118"
          >
            <img className="mapa" src="resources/css/img/mapa.png" alt="Mapa" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default App;
