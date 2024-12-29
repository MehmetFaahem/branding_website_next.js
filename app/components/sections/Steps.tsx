"use client";
import React, { useEffect, useState } from "react";
import "@/app/styles/steps.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface Step {
  id: number;
  number: string;
  title: string;
  description: string;
  iconUrl: string;
}

const Steps = () => {
  const [steps, setSteps] = useState<Step[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSteps = async () => {
      try {
        const response = await fetch("/api/steps");
        const data = await response.json();
        setSteps(data);
      } catch (error) {
        console.error("Error fetching steps:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSteps();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="vertical-line-container">
      <div className="narratives-content-header">
        <div className="section-heading">
          Blueprint to
          <br />
          Success
        </div>
        <div className="navigation-controls">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a334cefe6e5d7fc550770831145c355f5be7cb4bf73962144f3b7d475ebf59cf"
            className="nav-arrow swiper-button-prev"
            alt="Previous slide"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c0cbc8cbcd355b701706156ffd94cf064f11ca49bae522f953586e5530b06b6"
            className="nav-arrow swiper-button-next"
            alt="Next slide"
          />
        </div>
      </div>
      <div className="process-steps">
        <Swiper
          modules={[Navigation]}
          slidesPerView="auto"
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {steps.map((step) => (
            <SwiperSlide key={step.id}>
              <div className="step-card">
                <div className="step-header">
                  <img
                    src={step.iconUrl}
                    alt={`${step.title} Icon`}
                    className="step-icon"
                  />
                  <span>{step.number}</span>
                </div>
                <div className="step-content">
                  <h2 className="step-title">{step.title}</h2>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Steps;
