"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "@/app/styles/case_studies.css";
import "swiper/css";
import "swiper/css/navigation";

interface CaseStudy {
  id: number;
  title: string;
  backgroundImage: string;
  logoImage: string;
}

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const response = await fetch("/api/case-studies");
        const data = await response.json();
        setCaseStudies(data);
      } catch (error) {
        console.error("Error fetching case studies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="vertical-line-container">
      <div className="narratives-content-header">
        <div className="section-heading">
          Success
          <br />
          Stories
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
        className="case-studies-grid"
      >
        {caseStudies.map((study) => (
          <SwiperSlide key={study.id}>
            <div className="case-study-card">
              <div className="card-content">
                <img
                  loading="lazy"
                  src={study.backgroundImage}
                  className="card-background"
                  alt="Case study background"
                />
                <img
                  loading="lazy"
                  src={study.logoImage}
                  className="card-logo"
                  alt="Company logo"
                />
                <div className="card-title">{study.title}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CaseStudies;
