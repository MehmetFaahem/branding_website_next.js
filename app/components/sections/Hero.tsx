"use client";
import React, { useEffect, useState } from "react";
import "@/app/styles/index.css";
import { initAnimation } from "@/app/lib/animations";

const Hero = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    initAnimation();
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="main-hero-container">
      <div id="heroCanvas" className="content--canvas" />
      <div className="main-hero-wrapper">
        <div className="main-hero-content">
          <header className="header">
            <nav className="nav-container">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d65188df316aea5f83a840668bb3467cb65a581b62a013f7d343f0838e25cb4?apiKey=b01c7e4bd84f4d2cb00889f4e5559d20&"
                className="logo"
                alt="Softograph Logo"
              />
              <div className="nav-links" role="navigation">
                <div className="nav-item dropdown">
                  <a href="#offerings" tabIndex={0}>
                    Offerings
                  </a>
                  <div className="dropdown-content">
                    <a href="#code">Code that Knows You</a>
                    <a href="#tech">Unlocking Frontier Tech</a>
                    <a href="#strategies">Strategies that do Wonders</a>
                    <a href="#decisions">Decisions Made Easy</a>
                  </div>
                </div>
                <a href="#solutions" tabIndex={0}>
                  Solutions
                </a>
                <a href="#partners" tabIndex={0}>
                  Partners
                </a>
                <a href="#insights" tabIndex={0}>
                  Insights
                </a>
                <a href="#career" tabIndex={0}>
                  Career
                </a>
              </div>
            </nav>
            <button
              className="menu-toggle"
              aria-label="Toggle menu"
              onClick={toggleDrawer}
            >
              <span />
              <span />
              <span />
            </button>
            <button className="cta-button" tabIndex={0}>
              Get Started
            </button>
          </header>
          <div
            className={`drawer-menu ${isDrawerOpen ? "active" : ""}`}
            id="drawerMenu"
          >
            <div className="drawer-content">
              <div className="drawer-header">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d65188df316aea5f83a840668bb3467cb65a581b62a013f7d343f0838e25cb4?apiKey=b01c7e4bd84f4d2cb00889f4e5559d20&"
                  className="logo"
                  alt="Softograph Logo"
                />
                <button
                  className="drawer-close"
                  aria-label="Close menu"
                  onClick={toggleDrawer}
                >
                  ×
                </button>
              </div>
              <div className="drawer-links">
                <div className="drawer-item">
                  <a href="#offerings">Offerings</a>
                  <div className="drawer-submenu">
                    <a href="#code">Code that Knows You</a>
                    <a href="#tech">Unlocking Frontier Tech</a>
                    <a href="#strategies">Strategies that do Wonders</a>
                    <a href="#decisions">Decisions Made Easy</a>
                  </div>
                </div>
                <a href="#solutions">Solutions</a>
                <a href="#partners">Partners</a>
                <a href="#insights">Insights</a>
                <a href="#career">Career</a>
              </div>
            </div>
          </div>
          <div className="main-hero-content-wrapper">
            <div className="hero-text">
              <h2 className="hero-subtitle">We Are Softograph</h2>
              <h1 className="hero-title">
                Innovation through Intelligent Solutions
              </h1>
            </div>
            <div className="clients-section">
              <p className="clients-text">
                Trusted by data teams at world&apos;s leading companies
              </p>
              <div className="client-logos">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/461300f7fbfc781b76f642038d8f4419014f169af12c8f282c32ee57b26d0544?apiKey=b01c7e4bd84f4d2cb00889f4e5559d20&"
                  className="client-logo-1"
                  alt="Client Company Logo 1"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6ec02fde2c1af1247eb4df6c1100fc7f34fad65d41675b6ae505a687a96ef60?apiKey=b01c7e4bd84f4d2cb00889f4e5559d20&"
                  className="client-logo-2"
                  alt="Client Company Logo 2"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/732cba8095413da47c2a8057a5ad7c657ac519bb4589ec7c26680edace6fed27?apiKey=b01c7e4bd84f4d2cb00889f4e5559d20&"
                  className="client-logo-3"
                  alt="Client Company Logo 3"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a91a3db02d9d3cdb9f21255c436c35a4c10e70e9dbdd7bfb7a0e5aa0d301dbc?apiKey=b01c7e4bd84f4d2cb00889f4e5559d20&"
                  className="client-logo-4"
                  alt="Client Company Logo 4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
