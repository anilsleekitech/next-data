import React from "react";
import { getImagePath } from "../../utils/imageUtils";

const TestimonialsSection = ({ data }) => {
  return (
    <section className="testimonial-section bg-img wow fadeInUp">
      <div className="container">
        <div className="testimonial-heading">
          <h2 className="f-600 f-40 pb-3 black text-center black wow fadeInUp black">
          {(data?.title || "").split(/(Customers Say\?)/).map((part, index) =>
  part === "Customers Say?" ? (
    <span key={index} className="blue">
      {part}
    </span>
  ) : (
    part
  )
)}

          </h2>
        </div>
        <div className="testimonial-slider1 position-relative">
          {data?.testimonials?.map((testimonial, index) => (
            <div key={index}>
              <div className="testimonial-card p-4 rounded-4">
                <div className="testimonial-content d-flex justify-content-between mb-4 gap-3">
                  <div className="testimonial-avatar position-relative">
                    <img
                      src={getImagePath(testimonial.avatar)}
                      alt="Client Avatar"
                      className="rounded-circle testimonial-avatar-img"
                    />
                    <span className="icon-quote">
                      <i className="bi bi-quote" />
                    </span>
                  </div>
                  <p className="testimonial-text f-16 f-400 text-black mb-0">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="d-flex align-items-center justify-content-between rating-section">
                  <div>
                    <h6 className="f-16 f-600 text-black mb-1">{testimonial.name}</h6>
                    <p className="f-14 f-400 text-muted m-0 blue">{testimonial.company}</p>
                  </div>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star text-warning" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
