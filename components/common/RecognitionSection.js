import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { getImagePath } from '../../utils/imageUtils';
import 'swiper/css';
import 'swiper/css/pagination';

const RecognitionSection = ({ 
  title = "Recognitions",
  recognitions = [
    { src: "shark-tank-india.png", alt: "Shark Tank India" },
    { src: "google-clod-partner.png", alt: "Google Cloud Partner" },
    { src: "aegisbell.png", alt: "Aegis Bell" },
    { src: "Emerge.jpeg", alt: "Emerge Award" },
    { src: "google-for-startup.png", alt: "Google for Startups" },
  ]
}) => {
  return (
    <section className="brand-stats-section-home">
      <div className="container">
        <h2 className="f-40 f-600 pb-2 black text-center">{title}</h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 4 },
          }}
          className="brand-slider recognition-slider"
        >
          {recognitions.map((award, i) => (
            <SwiperSlide key={i}>
              <div className="recognition-card">
                <img
                  src={getImagePath(award.src)}
                  alt={award.alt}
                  loading="lazy"
                  className="recognition-img"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RecognitionSection;
