import React from "react";
import "@/app/styles/design.css";

const Design = () => {
  return (
    <div className="design-hero-container">
      <div className="design-content-wrapper">
        <h1 className="design-heading">Designed for you to get more simple</h1>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3df01b09b2fc2dd57ac98584e727d1c0b3a324ff44771d2efb93bed02f51c328?placeholderIfAbsent=true&apiKey=e0c976e114714085b127626d74cac481"
          className="design-image"
          alt="Design simplification illustration"
        />
      </div>
    </div>
  );
};

export default Design;
