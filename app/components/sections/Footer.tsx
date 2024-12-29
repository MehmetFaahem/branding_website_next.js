import React from "react";
import "@/app/styles/footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="company-info">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f2ff59ccbbdd23582538a5ee3d395f7e4937b1f844ccb0351ae238349761092?placeholderIfAbsent=true&apiKey=e0c976e114714085b127626d74cac481"
          className="company-logo"
          alt="Softograph company logo"
        />
        <div className="company-address">
          Address: House # 52 Road-04, Dhaka 1230
        </div>
        <div className="company-phone">Phone: +88 01911-082908</div>
        <div className="copyright-text">Copyright © 2024 Softograph</div>
      </div>
      <div className="offerings-section">
        <div className="section-title">Offerings</div>
        <div className="offerings-list">
          <div className="list-item">Code that Knows You</div>
          <div className="list-item">Unlocking Frontier Tech</div>
          <div className="list-item">Strategies that do Wonders</div>
          <div className="list-item">Decisions Made Easy</div>
        </div>
      </div>
      <div className="solutions-section">
        <div className="section-title">Solutions</div>
        <div className="solutions-list">
          <div className="list-item">Link Item Name</div>
          <div className="list-item">Link Item Name</div>
          <div className="list-item">Link Item Name</div>
          <div className="list-item">Link Item Name</div>
        </div>
      </div>
      <div className="company-section">
        <div className="section-title">Company</div>
        <div className="company-links">
          <div className="list-item">About US</div>
          <div className="list-item">Career</div>
          <div className="list-item">Contact Us</div>
        </div>
      </div>
      <div className="social-section">
        <div className="section-title">Follow Us</div>
        <div className="social-links">
          <div className="social-link">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b461684c44f7179b612a20f9ae23b92b88200e0e5637967a3283b420e85d813?placeholderIfAbsent=true&apiKey=e0c976e114714085b127626d74cac481"
              className="social-icon"
              alt="Facebook icon"
            />
            <div className="social-text">Facebook</div>
          </div>
          <div className="social-link list-item">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/874727929640736e5887b0ef70f88392d4ed6417aabb53d2a525ba340a9c028b?placeholderIfAbsent=true&apiKey=e0c976e114714085b127626d74cac481"
              className="social-icon"
              alt="LinkedIn icon"
            />
            <div className="social-text">Linked In</div>
          </div>
          <div className="social-link list-item">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd345773f8e8177341c3b8909d8a3c5f0e315b1943a6874c3da961661f032725?placeholderIfAbsent=true&apiKey=e0c976e114714085b127626d74cac481"
              className="social-icon"
              alt="Twitter icon"
            />
            <div className="social-text">Twitter</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
