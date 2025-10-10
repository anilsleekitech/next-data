import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getImagePath } from "../../utils/imageUtils";

const CaseStudiesSection = ({ data }) => {

  useEffect(() => {
    const initCarousels = () => {
      const ids = ['carouselExampleAutoplaying'];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.bootstrap && window.bootstrap.Carousel) {
          // eslint-disable-next-line no-new
          new window.bootstrap.Carousel(el, {
            interval: 2000,
            wrap: true,
            ride: 'carousel'
          });
        }
      });
    };

    if (typeof window !== 'undefined') {
      initCarousels();
    }
  }, []);

  return (
    <section className="case-study bg-img">
      <div className="container">
        <h2 className="white text-center pb-5 f-40 f-600 wow fadeInUp">
          {(data?.title || "").split(/(Translate to Real-World ROI\?)/).map((part, index) =>
            part === "Translate to Real-World ROI?" ? (
              <span key={index} className="blue">{part}</span>
            ) : (
              part
            )
          )}

        </h2>
        <div>
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="row align-items-center justify-content-center m-0">
              <div className="col-lg-10 col-md-12 carousel-case-study wow fadeInUp">
                <div className="carousel-indicators">
                  {data.caseStudies.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      data-bs-target="#carouselExampleAutoplaying"
                      data-bs-slide-to={index}
                      className={index === 0 ? "active" : ""}
                      aria-current={index === 0 ? "true" : undefined}
                      aria-label={`Slide ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="carousel-inner">
                  {data.caseStudies.map((caseStudy, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                      <div className="row">
                        <div className="col-lg-5">
                          <div className="description-case-study">
                            <p className="m-0 f-400 black pb-5">{caseStudy.description}</p>
                          </div>
                          <div className="case-study-analytics d-flex gap-3">
                            {caseStudy.analytics.map((analytic, idx) => (
                              <div key={idx} className="analytics-1">
                                <h4 className="f-30 f-500 black">{analytic.value}{analytic.suffix}</h4>
                                <p className="f-400 m-0 black">{analytic.label}</p>
                              </div>
                            ))}
                          </div>
                          <Link href={caseStudy.link} className="white">
                            <button type="btn" className="devnagri-btn mt-5">View Case Studies</button>
                          </Link>
                        </div>
                        <div className="col-lg-7">
                          <img
                            src={getImagePath(caseStudy.image)}
                            className="d-block w-100 casestudy-project"
                            alt="case-study"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
