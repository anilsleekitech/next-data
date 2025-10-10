import React from "react";
import { Link } from "react-router-dom";
import { getImagePath } from "../../utils/imageUtils";

const HeroSection = ({ data }) => {
  return (
    <section className="hero-home bg-img overflow-hidden">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="f-40 f-700 black pb-2 wow fadeIn">
              {data.title.split(/(Local\.|Global\.)/).map((part, index) =>
                part === "Local." || part === "Global." ? (
                  <span key={index} className="blue">
                    {part}
                  </span>
                ) : (
                  part
                )
              )}
            </h1>
            <p className="f-400 f-18 para-color m-0 pb-4 wow fadeIn">{data.subtitle}</p>
            <Link href={data.buttonLink} className="white">
              <button type="btn" className="devnagri-btn wow fadeIn animated">
                {data.buttonText}
              </button>
            </Link>
          </div>
          <div className="col-lg-6 mt-md-5 mt-lg-0 mt-4">
            <div className="swiper campaignSwiper wow fadeIn">
              <div className="swiper-wrapper">
                {data.campaigns.map((campaign, index) => (
                  <div key={index} className="swiper-slide">
                    <div className="campaign-card">
                      <img
                        src={getImagePath(campaign.image)}
                        alt={campaign.alt}
                        className="w-100 rounded-4"
                      />
                      <div className="campaign-content text-center">
                        <Link href={campaign.link} className="white">
                          <button type="btn" className="devnagri-btn wow fadeIn animated">
                            Learn More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="swiper-pagination" style={{ bottom: 0 }} />
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
