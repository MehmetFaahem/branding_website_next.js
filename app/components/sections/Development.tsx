import React from "react";
import "@/app/styles/development.css";
import devBg from "../../../public/assets/dev-bg.png";
import devImg from "../../../public/assets/dev-img.png";

const Development = () => {
  return (
    <section className="software-development">
      <div className="shadow-box" />
      <div className="dev-hero-container">
        <img
          loading="lazy"
          src={devBg.src}
          className="dev-hero-background"
          alt="Software development background image"
        />
        <div className="dev-content-wrapper">
          <div className="content-container">
            <div className="narratives-content-header">
              <div className="section-heading">
                Code That
                <br />
                Knows You
              </div>
            </div>
            <h2 className="subtitle">Intelligent Code, Seamless Integration</h2>
            <p className="description">
              Experience the synergy of bespoke software solutions and seamless
              integration. Intelligent code crafted to adapt to unique needs,
              ensuring efficiency and innovation at every turn.
            </p>
          </div>
          <img
            loading="lazy"
            src={devImg.src}
            className="dev-image"
            alt="Software development hero image"
          />
        </div>
      </div>
    </section>
  );
};

export default Development;
