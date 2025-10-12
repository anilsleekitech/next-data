import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Slider from "react-slick";
import { getImagePath } from "../utils/imageUtils";

const brandSettings = {
  speed: 5000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  pauseOnHover: false,
  pauseOnFocus: false,
  swipe: false,
  draggable: false,
  variableWidth: true,
};

const BrandsSection = () => {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  useEffect(() => {
    const counters = document.querySelectorAll(".counter");
    const counterSection = document.querySelector(".stats-box");

    if (counters.length && counterSection) {
      let hasCounted = false;

      function animateCounter(counter) {
        const target = parseFloat(counter.getAttribute("data-target"));
        const isDecimal = counter.getAttribute("data-decimal") === "true";
        const suffix = counter.getAttribute("data-suffix") || "";
        const duration = 2000;
        const frameRate = 60;
        const totalFrames = Math.round((duration / 1000) * frameRate);
        let frame = 0;

        const count = () => {
          frame++;
          const progress = frame / totalFrames;
          const current = target * progress;
          counter.innerText = isDecimal
            ? current.toFixed(1) + suffix
            : Math.floor(current) + suffix;

          if (frame < totalFrames) {
            requestAnimationFrame(count);
          } else {
            counter.innerText = isDecimal
              ? target.toFixed(1) + suffix
              : target + suffix;
          }
        };

        requestAnimationFrame(count);
      }

      function onScroll() {
        const rect = counterSection.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isVisible && !hasCounted) {
          counters.forEach((counter) => animateCounter(counter));
          hasCounted = true;
          window.removeEventListener("scroll", onScroll);
        }
      }

      window.addEventListener("scroll", onScroll);
      onScroll();

      return () => window.removeEventListener("scroll", onScroll);
    }
  }, []);

  return (
    <section className="brand-stats-section-home brand-stats-section bg-img mb-5">
      <div className="container">
        <Slider {...brandSettings}>
          {[
            "brand-meesho.png",
            "brand-icici-bank.png",
            "brand-idfc.png",
            "brand-yes-bank.png",
            "brand-sbi-mutual.png",
            "brand-tataia.png",
            "brand-nestle.png",
            "brand-my-gov.png",
            "brand-nitiayog.png",
          ].map((img, i) => (
            <div className="brand-item-slide" key={i}>
              <img src={getImagePath(img)} alt={`Brand ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </Slider>

        {/* ✅ Only show this section on Home Page */}
        {isHomePage && (
          <div className="stats-box mt-4">
            <p className="m-0 f-28 f-600 black wow fadeInUp text-center">
              Digitizing Multilingual{" "}
              <span className="blue">Business Communications</span>
            </p>
            <div className="row py-3">
              <div className="col-lg-4 col-md-6 col-12 mb-4 mb-md-0">
                <div className="stat">
                  <h3 className="f-34 f-600 black pb-2 wow fadeInUp">
                    <span
                      className="counter f-600 black"
                      data-target={40}
                      data-suffix="+"
                    >
                      0
                    </span>
                  </h3>
                  <div className="d-flex align-items-center gap-3">
                    <div className="icon-box wow fadeInUp">
                      <img src={getImagePath("menu-icon/language.png")} alt="Languages" />
                    </div>
                    <div className="counter-text">
                      <p className="f-18 black f-500 m-0 wow fadeInUp">
                        Languages
                        <br />
                        (Indian &amp; International)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12 mb-4 mb-md-0 ">
                <div className="stat">
                  <h3 className="f-34 f-600 black pb-2 wow fadeInUp">
                    <span
                      className="counter f-600 black"
                      data-target={200}
                      data-suffix="+"
                    >
                      0
                    </span>
                  </h3>
                  <div className="d-flex align-items-center gap-3">
                    <div className="icon-box wow fadeInUp">
                      <img src={getImagePath("menu-icon/customer.png")} alt="Customers" />
                    </div>
                    <div className="counter-text">
                      <p className="f-18 black f-500 m-0 wow fadeInUp">
                        Customers
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 col-12">
                <div className="">
                  <h3 className="f-34 f-600 black pb-2 wow fadeInUp">
                    <span
                      className="counter f-600 black"
                      data-target={500}
                      data-suffix="M+"
                    >
                      0
                    </span>
                  </h3>
                  <div className="d-flex align-items-center gap-3">
                    <div className="icon-box wow fadeInUp">
                      <img src={getImagePath("menu-icon/words.png")} alt="Words" />
                    </div>
                    <div className="counter-text">
                      <p className="f-18 black f-500 m-0 wow fadeInUp">
                        Words localized
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BrandsSection;
