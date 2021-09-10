import React from "react";
import ImageAssets from "../../constants/ImageAssets";
import Breeder from "../../components/atoms/Breeder";
import "./AboutUs.css";

export const AboutUs = () => {
  return (
    <section className="section-about-us" id="about-us">
      <div className="row">
        <h2>O nas</h2>
        <p className="long-copy">
          Nasz zespół to rodzina, której fundamentem jest miłość. Miłość do bliźniego i do psa jego. Początek hodowli to rok 2018, miłość do maltańczyków to zdecydowanie rok 2016.
        </p>
      </div>
      <div className="row about-us">
        <Breeder
          src={ImageAssets.ONas1}
          breederName="Dariusz"
          breederDescription="Szkolenie i posłuszeństwo psów to jego broszka. Wycenia wartość psa i to z nim podpisujesz umowę, jeżeli zdecydujesz się na zakup szczeniaczka."
        />

        <Breeder
          src={ImageAssets.ONas2}
          breederName="Magdalena"
          breederDescription="Ekspert w sprawie pielęgnacji i żywienia.
          Co robić aby futerko było lśniące i naprawdę przyjemne w dotyku? Ona to wie i chętnie dzieli się swoją wiedzą."
        />

        <Breeder
          href="https://www.facebook.com/izabela.kubinska.1"
          src={ImageAssets.ONas3}
          breederName="Izabela"
          breederDescription="Spec od wystaw, oceny psów, social mediów. Człowiek psia encyklopedia. To właśnie ona odbierze telefon, gdy do nas zadzwonisz."
        />
      </div>
      <div className="row">
        <img className="certificate" src={ImageAssets.certificate} alt="Hodowca" />
      </div>
    </section>
  );
};
