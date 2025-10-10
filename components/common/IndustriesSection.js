import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { getImagePath } from "../../utils/imageUtils";

const IndustriesSection = ({ data }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateNavigationState = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className="py-5 howwe-help">
      <div className="container">
        <h2 className="text-center pb-4 f-40 f-600 black wow fadeInUp">
          {(data.title).split(/(Industries)/).map((part, index) =>
            part === "Industries" ? (
              <span key={index} className="blue">
                {part}
              </span>
            ) : (
              part
            )
          )}
        </h2>
        <div className="row">
          <div className="col-md-12">
            <div className="howwe-help position-relative">
              <div className="navigation-wrapper d-flex gap-2 justify-content-end">
                <button
                  className="slider-button-prev rounded-circle d-flex align-items-center justify-content-center"
                  disabled={isBeginning}
                >
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  className="slider-button-next rounded-circle d-flex align-items-center justify-content-center"
                  disabled={isEnd}
                >
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 6L15 12L9 18"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <Swiper
                modules={[Navigation]}
                slidesPerView="auto"
                spaceBetween={24}
                grabCursor={true}
                navigation={{
                  nextEl: ".slider-button-next",
                  prevEl: ".slider-button-prev",
                }}
                breakpoints={{
                  0: { slidesPerView: 1.2 },
                  576: { slidesPerView: 2.2 },
                  992: { slidesPerView: 3 },
                  1200: { slidesPerView: 3 },
                  1281: { slidesPerView: 4 },
                }}
                onInit={(swiper) => updateNavigationState(swiper)}
                onSlideChange={(swiper) => updateNavigationState(swiper)}
              >
                {data.industries.map((industry, index) => (
                  <SwiperSlide key={index}>
                    <div className="how-help-card">
                      <div className="how-help-card-primary">
                        <div className="how-help-card-head">
                          <h3 className="f-24 f-600 white">{industry.title}</h3>
                          <p className="f-400 white">{industry.description}</p>
                          <Link href={industry.link} className="learn-more-btn mt-3">
                            Learn More
                          </Link>
                        </div>
                      </div>
                      <div className="how-help-card-secondary">
                        <img
                          src={getImagePath(industry.image)}
                          alt={industry.title}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
