import React from 'react';
import Slider from 'react-slick';
import { getImagePath } from "../utils/imageUtils";

const testimonials = [
  {
    id: 1,
    img: "2.svg",
    text: "“The platform helped us translate regulatory documents into seven Indian languages while preserving complex tables and data, without a single compliance issue.”",
    name: "Head of Operations",
    company: "NBFC",
  },
  {
    id: 2,
    img: "1.svg",
    text: "We needed our website to be available in multiple Indian languages for better customer reach. Devnagri's team got it done smoothly their APIs are too good. The translations were accurate, and its very easy like a tap, we went live without any technical issues.",
    name: "Marketing Lead",
    company: "FMCG Brand",
  },
  {
    id: 3,
    img: "2.svg",
    text: "We had a lot of documents and brochures that needed to be translated and formatted correctly in the local languages. Devnagri did a great job with the translation. Everything came out clean and ready to go. It saved us a lot of time and effort.",
    name: "Communications Head",
    company: "Insurance Company",
  },
  {
    id: 4,
    img: "3.svg",
    text: "Our department had a huge load of reports and files to be translated into regional languages. Devnagri handled it all without fuss. They kept everything accurate and on time. Without any back and forth confusion.",
    name: "General Manager",
    company: "Govt Division",
  },
];

const PrevArrow = (props) => (
  <button {...props} type="button" className="slick-prev">
    <i className="fas fa-chevron-left"></i>
  </button>
);

const NextArrow = (props) => (
  <button {...props} type="button" className="slick-next">
    <i className="fas fa-chevron-right"></i>
  </button>
);

const testimonialSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

const TestimonialsSection = () => {
  return (
    <section className="testimonial-section py-5">
      <div className="container">
        <div className="testimonial-heading text-center mb-5">
          <h2 className="f-600 f-40 pb-3 black wow fadeInUp">
            What Our <span className="blue">Customers Say?</span>
          </h2>
        </div>
        <div className="testimonial-slider1 position-relative border-box">
          <Slider {...testimonialSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <div className="testimonial-card p-4 rounded-4">
                  <div className="testimonial-content d-flex justify-content-between mb-4 gap-3">
                    <div className="testimonial-avatar position-relative">
                      <img
                        src={getImagePath(testimonial.img)}
                        alt="Client Avatar"
                        className="rounded-circle testimonial-avatar-img"
                      />
                      <span className="icon-quote">
                        <i className="bi bi-quote" />
                      </span>
                    </div>
                    <p className="testimonial-text f-16 f-400 text-black mb-0">
                      {testimonial.text}
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between rating-section">
                    <div>
                      <h6 className="f-16 f-600 text-black mb-1">
                        {testimonial.name}
                      </h6>
                      <p className="f-14 f-400 text-muted m-0 blue">{testimonial.company}</p>
                    </div>
                    <div className="rating">
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
