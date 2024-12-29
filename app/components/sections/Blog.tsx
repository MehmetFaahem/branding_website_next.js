"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "@/app/styles/blog.css";
import "swiper/css";
import "swiper/css/navigation";

interface BlogPost {
  id: number;
  date: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/blog-posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="vertical-line-container">
      <div className="narratives-content-header">
        <div className="section-heading">
          Latest
          <br />
          Insights
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
        className="blog-posts-container"
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id}>
            <article className="blog-post-card">
              <img
                loading="lazy"
                src={post.imageUrl}
                className="blog-post-image"
                alt={post.imageAlt}
              />
              <div className="blog-post-content">
                <time className="blog-post-date">{post.date}</time>
                <h2 className="blog-post-title">{post.title}</h2>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;
