import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import howWeHelpData from '../data/howWeHelpData.json';
import 'swiper/css';
import 'swiper/css/navigation';

const HowWeHelp = () => {
  const swiperRef = useRef(null);
  const location = useLocation();

  const getCurrentPage = () => {
    const path = location.pathname.toLowerCase();
    if (path.includes('machine-translation-api')) return 'machine-translation-api';
    if (path.includes('ocr')) return 'ocr';
    if (path.includes('dota-app')) return 'dota-app';
    return 'default';
  };

  const getCardContent = (card) => {
    const currentPage = getCurrentPage();
    if (currentPage === 'default' || !card.variations) {
      return {
        title: card.title,
        description: card.description
      };
    }

    const variation = card.variations.find(v => v.page === currentPage);
    return variation || {
      title: card.title,
      description: card.description
    };
  };

  useEffect(() => {
    if (!swiperRef.current) {
      swiperRef.current = new Swiper("#howwe-help-swiper", {
        modules: [Navigation],
        slidesPerView: 'auto',
        spaceBetween: 24,
        loop: false,
        grabCursor: true,
        speed: 800,
        navigation: {
          nextEl: '.slider-button-next',
          prevEl: '.slider-button-prev',
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 24
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 24
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 24
          }
        },
        on: {
          init: function() {
            updateNavigationState(this);
            this.slides.forEach((slide) => {
              slide.style.width = '306px';
              
              // Add hover event listeners
              slide.addEventListener('mouseenter', () => {
                this.slides.forEach(s => s.classList.remove('swiper-slide-active'));
                slide.classList.add('swiper-slide-active');
              });
              
              slide.addEventListener('mouseleave', () => {
                // Only keep active class on the current slide
                this.slides.forEach((s, i) => {
                  if (i === this.activeIndex) {
                    s.classList.add('swiper-slide-active');
                  } else {
                    s.classList.remove('swiper-slide-active');
                  }
                });
              });
            });
          },
          slideChange: function() {
            updateNavigationState(this);
          }
        }
      });
    }

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
        swiperRef.current = null;
      }
    };
  }, []);

  const updateNavigationState = (swiper) => {
    const prevButton = document.querySelector('.slider-button-prev');
    const nextButton = document.querySelector('.slider-button-next');
    
    if (prevButton) {
      prevButton.disabled = swiper.isBeginning;
    }
    if (nextButton) {
      nextButton.disabled = swiper.isEnd;
    }
  };

  return (
    <section className="py-5 howwe-help">
      <div className="container">
        <h2 className="text-center pb-4 f-40 f-600 black wow fadeInUp">
          How can <span className="blue">we help?</span>
        </h2>
        <div className="row">
          <div className="col-md-12">
            <div className="howwe-help position-relative">
              <div
                className="navigation-wrapper d-flex gap-2 position-absolute d-md-none"
                style={{ top: "-60px", right: 0, zIndex: 10 }}
              >
                <button
                  className="slider-button-prev rounded-circle d-flex align-items-center justify-content-center"
                  disabled
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
                <button className="slider-button-next rounded-circle d-flex align-items-center justify-content-center">
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
              <div className="swiper" id="howwe-help-swiper">
                <div className="swiper-wrapper">
                  {howWeHelpData.howWeHelpCards.map((card, index) => {
                    const content = getCardContent(card);
                    return (
                      <div key={`${card.id}-${index}`} className="swiper-slide">
                        <div className="how-help-card">
                          <div className="how-help-card-primary">
                            <div className="how-help-card-head">
                              <h3 className="f-24 f-600 white">{content.title}</h3>
                              <p className="f-400 white">{content.description}</p>
                              <Link href={card.link} className="learn-more-btn mt-3">
                                Learn More
                              </Link>
                            </div>
                          </div>
                          <div className="how-help-card-secondary">
                            <img
                              alt={content.title}
                              src={card.image || null}
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp; 