"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "@/app/styles/solutions.css";
import "swiper/css";
import "swiper/css/navigation";

interface Solution {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaIcon: string;
}

const Solutions = () => {
  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSolutions = async () => {
      try {
        const response = await fetch("/api/solutions");
        const data = await response.json();
        setSolutions(data);
      } catch (error) {
        console.error("Error fetching solutions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSolutions();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="vertical-line-container">
      <div className="narratives-content-header">
        <div className="section-heading">
          Solutions that
          <br />
          Scale
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
      <Swiper
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={30}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="solutions-wrapper"
      >
        {solutions.map((solution) => (
          <SwiperSlide key={solution.id}>
            <div className="solutions-card">
              <div
                className="solutions-image"
                role="img"
                aria-label={`${solution.title} platform preview`}
                style={{ backgroundImage: `url(${solution.imageUrl})` }}
              />
              <div className="solutions-content">
                <div className="solutions-text">
                  <h1 className="solutions-title">{solution.title}</h1>
                  <p className="solutions-description">
                    {solution.description}
                  </p>
                </div>
                <div
                  className="solutions-cta"
                  tabIndex={0}
                  role="button"
                  aria-label={`Learn more about ${solution.title}`}
                >
                  <span className="solutions-cta-text">{solution.ctaText}</span>
                  <img
                    loading="lazy"
                    src={solution.ctaIcon}
                    className="solutions-cta-icon"
                    alt="Learn more icon"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Solutions;
