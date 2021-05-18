import React from "react";
import "./Puppies.css";
import "../../components/atoms/PuppyShowcase";
import PuppyShowcase from "../../components/atoms/PuppyShowcase";
import ImageAssets from "../../constants/ImageAssets";

export const Puppies = () => {
  return (
    <section className="section-photos" id="photos">
      <h2>Nasze szczeniaczki</h2>
      <div className="puppy-showcase">
        <PuppyShowcase photo={ImageAssets.L1} deccriptionPicture="Miot L" />
        <PuppyShowcase photo={ImageAssets.L2} deccriptionPicture="Miot L" />
        <PuppyShowcase photo={ImageAssets.L3} deccriptionPicture="Miot L" />
        <PuppyShowcase photo={ImageAssets.L4} deccriptionPicture="Miot L" />

        <PuppyShowcase photo={ImageAssets.B1} deccriptionPicture="Miot B" />
        <PuppyShowcase photo={ImageAssets.B2} deccriptionPicture="Miot B" />
        <PuppyShowcase photo={ImageAssets.B3} deccriptionPicture="Miot B" />
        <PuppyShowcase photo={ImageAssets.B4} deccriptionPicture="Miot B" />

        <PuppyShowcase photo={ImageAssets.M1} deccriptionPicture="Miot M" />
        <PuppyShowcase photo={ImageAssets.M2} deccriptionPicture="Miot M" />
        <PuppyShowcase photo={ImageAssets.M3} deccriptionPicture="Miot M" />
        <PuppyShowcase photo={ImageAssets.M4} deccriptionPicture="Miot M" />
      </div>
    </section>
  );
};
