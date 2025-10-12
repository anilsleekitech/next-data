import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { getImagePath } from "../../utils/imageUtils";
import FAQAccordion from "../../components/FAQAccordion";
import { initializeSliders as initializePageSliders } from "../../utils/initScripts";
import Head from "next/head";
import BrandsSection from "@/components/BrandsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CaseStudySection from "@/components/CaseStudySection";
import ResourceHubSection from "@/components/ResourceHubSection";

const MachineTranslationApi = () => {

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    // Skip every 2s
    const interval = setInterval(() => {
      if (!video.paused && video.currentTime + 0.1 < video.duration) {
        video.currentTime += 0.1;
      } else if (!video.paused) {
        video.currentTime = 0;
      }
    }, 2000);

    // Pause on scroll out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {}); // resume if in view
        } else {
          video.pause(); // pause if out of view
        }
      },
      {
        threshold: 0.3, // pause if less than 30% visible
      }
    );

    observer.observe(video);

    // Clean up
    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    initializePageSliders();
    initializePageSliders();
  }, []);

  useEffect(() => {
    const initCarousel = () => {
      const carouselElement = document.getElementById(
        "carouselExampleAutoplaying"
      );
      if (carouselElement) {
        // Initialize Bootstrap carousel
        const carousel = new window.bootstrap.Carousel(carouselElement, {
          interval: 2000,
          wrap: true,
          ride: "carousel",
        });
      }
    };

    // Check if Bootstrap is available
    if (typeof window !== "undefined" && window.bootstrap) {
      initCarousel();
    }
  }, []);

  useEffect(() => {
    const counters = document.querySelectorAll(".custom-counter");
    const counterSection = document.querySelector(".custom-stats-row");

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
          let progress = frame / totalFrames;
          let current = target * progress;

          if (isDecimal) {
            counter.innerText = current.toFixed(1) + suffix;
          } else {
            counter.innerText = Math.floor(current) + suffix;
          }

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
        if (counterSection) {
          const rect = counterSection.getBoundingClientRect();
          const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

          if (isVisible && !hasCounted) {
            counters.forEach((counter) => animateCounter(counter));
            hasCounted = true;
            window.removeEventListener("scroll", onScroll);
          }
        }
      }

      window.addEventListener("scroll", onScroll);
      onScroll(); // initial check

      // cleanup on unmount
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, []);

  const ogImage = "/assets/images/products-images/translation-api/Translation-API-Fast-Scalable-Translation-for-Any-Platform.png";

  return (
    <>
       <Head>
        {/* Title & Description */}
        <title>Machine Translation API - Devnagri</title>
        <meta
          name="description"
          content="Translate your bulk content fast into Indian languages with Devnagri machine translation API. Try Devnagri today."
        />
        <meta name="keywords" content="Machine Translation API" />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="P0GXIC42VCPtzhJ0U1AMg6_AV8z5s3IYdZ0-nzjtsH4"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Machine Translation API - Devnagri" />
        <meta
          property="og:description"
          content="Translate your bulk content fast into Indian languages with Devnagri machine translation API. Try Devnagri today."
        />
        <meta property="og:image" content={`https://devnagri.com${ogImage}`} />
        <meta property="og:url" content="https://devnagri.com/translation-api" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Devnagri AI" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DevnagriAI" />
        <meta name="twitter:title" content="Machine Translation API - Devnagri" />
        <meta
          name="twitter:description"
          content="Translate your bulk content fast into Indian languages with Devnagri machine translation API. Try Devnagri today."
        />
        <meta name="twitter:image" content={`https://devnagri.com${ogImage}`} />

        {/* Canonical URL */}
        <link rel="canonical" href="https://devnagri.com/translation-api" />
      </Head>
      {/* Hero Section */}
      <section
        className="hero-section bg-img"
        style={{
          backgroundImage: `url(${getImagePath(
            "simple-banner-background.png"
          )})`,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="f-40 f-700 black pb-2 wow fadeIn">
                Localize 5x Faster with{" "}
                <span className="blue">Machine Translation API</span>
              </h1>
              <p className="f-400 pb-2 pe-3 wow fadeIn">
                Designed for organizations handling high volumes of content, our
                API enables fast and accurate translation into 40+ languages at
                scale.
              </p>
              <div className="d-flex flex-wrap align-items-center justify-content-start gap-3 wow fadeIn">
                <Link href="/book-a-demo" className="white">
                  <button type="btn" className="devnagri-btn mt-3">
                    <img
                      src={getImagePath("video-play-btn.png")}
                      className="pe-1"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />{" "}
                    Book a Demo{" "}
                  </button>
                </Link>
                <Link href="/contact-us" className="">
                  <button
                    type="btn"
                    className="devnagri-btn devnagri-white-btn mt-3 blue"
                  >
                    {" "}
                    Talk to Experts{" "}
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-md-5 mt-lg-0">
              <div className="position-relative wow fadeIn">
                <video
                  autoPlay
                  ref={videoRef}
                  // loop
                  // playsInline
                  className="rounded-4"
                  style={{ width: "100%", height: "100%" }}
                  // muted = "'muted'"
                >
                  <source
                    src={getImagePath(
                      "product-pages-viedos/Translation-API.mp4"
                    )}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*our major brand*/}
      <BrandsSection />
      {/*Stats section*/}
      <section className="pb-4 pt-5 pt-md-5 pt-lg-0">
        <div className="container">
          <div className="trusted-partner pb-4">
            <div className="row justify-content-between">
              <div className="col-lg-4 col-md-6">
                <div className="d-flex gap-3 wow fadeInUp">
                  <div className="">
                    <img
                      src={getImagePath("products-images/organisation.png")}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="">
                    <h6 className="f-18 f-500 black">
                      <span className="f-20 f-600 blue">200+</span>{" "}
                      organizations onboarded across 12 sectors
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="d-flex gap-3 wow fadeInUp">
                  <div className="">
                    <img
                      src={getImagePath("products-images/time.png")}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="">
                    <h6 className="f-18 f-500 black">
                      <span className="f-20 f-600 blue">85%</span> reduction in
                      turnaround time
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 m-0 mt-md-4 mt-lg-0">
                <div className="d-flex gap-3 wow fadeInUp">
                  <div className="">
                    <img
                      src={getImagePath("products-images/multiuser.png")}
                      style={{ filter: "none !important" }}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="">
                    <h6 className="f-18 f-500 black">
                      <span className="f-20 f-600 blue">500 M+</span> words
                      translated for regional markets
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*product data*/}
      <section
        className="py-5 bg-img"
        style={{ backgroundImage: `url(${getImagePath("testimonil-bg.png")})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src={getImagePath(
                  "products-images/translation-api/Translation-API-Fast-Scalable-Translation-for-Any-Platform.png"
                )}
                className="w-100 wow fadeInUp"
              />
            </div>
            <div className="col-lg-6 mt-2 mt-md-5 mt-lg-0">
              <h2 className="f-40 f-600 pb-3 m-0 black wow fadeInUp">
                <span className="blue">Fast, Scalable Translation </span>for Any
                Platform
              </h2>
              <p className="f-400 para-color m-0 wow fadeInUp">
                Whether you're translating thousands or millions of words, our
                API handles it all in seconds. Translate content on the fly
                without slowing things down.
              </p>
              <div className="wow fadeInUp">
                <Link href="/book-a-demo" className="white">
                  <button type="btn" className="devnagri-btn mt-3">
                    <img
                      src={getImagePath("video-play-btn.png")}
                      className="pe-1"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />{" "}
                    Book a Demo{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*product data*/}
      <section className="py-5" style={{ backgroundColor: "#EEF5FF" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="f-40 f-600 pb-3 m-0 black wow fadeInUp">
                Supports 40+ Global{" "}
                <span className="blue">and Regional Languages</span>
              </h2>
              <p className="f-400 para-color m-0 wow fadeInUp">
                More than word-for-word translation, it captures tone, grammar,
                and local nuances to ensure every message makes sense in its
                cultural context. Perfect for businesses targeting multilingual
                markets or diverse user bases.
              </p>
              <div className="wow fadeInUp">
                <Link
                  href="https://account.devnagri.com/register"
                  className="white"
                >
                  <button type="btn" className="devnagri-btn mt-3">
                    {" "}
                    Try Free{" "}
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 mt-2 mt-md-5 mt-lg-0">
              <img
                src={getImagePath(
                  "products-images/translation-api/Translation-API-Supports-40+Global-and-Regional-Languages.png"
                )}
                className="w-100 wow fadeInUp"
              />
            </div>
          </div>
        </div>
      </section>
      {/*product data*/}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src={getImagePath(
                  "products-images/translation-api/Translation-API-Easy-to-Use.png"
                )}
                className="w-100 wow fadeInUp"
              />
            </div>
            <div className="col-lg-6 mt-4 mt-md-5 mt-lg-0">
              <h2 className="f-40 f-600 pb-3 m-0 black wow fadeInUp">
                Easy to <span className="blue">Use</span>
              </h2>
              <p className="f-400 para-color m-0 wow fadeInUp">
                We provide clean documentation, sample calls, and flexible
                output formats to help you with easy go to process. Our API is
                designed to make localization frictionless.
              </p>
              <div className="wow fadeInUp">
                <Link
                  href="https://account.devnagri.com/register"
                  className="white"
                >
                  <button type="btn" className="devnagri-btn mt-3">
                    {" "}
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*key feature*/}
      <section
        className="problem-we-solve py-5 bg-img"
        style={{ backgroundImage: `url(${getImagePath("testimonil-bg.png")})` }}
      >
        <div className="container">
          <h2 className="text-center f-40 f-600 pb-4 black wow fadeInUp">
            Why Choose <span className="blue">Devnagri?</span>
          </h2>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="key-feature mb-2 wow fadeInUp">
                <ul className="check-list p-0">
                  <li className="f-400 black mb-3 d-flex gap-3 gap-lg-1">
                    <div
                      className="width-5"
                      style={{ position: "relative", top: 5 }}
                    >
                      <img
                        src={getImagePath("tick-circle.png")}
                        width={26}
                        height={26}
                      />
                    </div>
                    <div>
                      <p className="f-400 m-0 pb-1">
                        <b className="f-22 f-600">
                          Instant, Scalable Translations
                        </b>
                      </p>
                      <p className="f-400 m-0">
                        Our API processes large-scale content without delays,
                        enabling operations in multiple languages
                        simultaneously.
                      </p>
                    </div>
                  </li>
                  <li className="f-400 black mb-3 d-flex gap-3 gap-lg-1">
                    <div
                      className="width-5"
                      style={{ position: "relative", top: 5 }}
                    >
                      <img
                        src={getImagePath("tick-circle.png")}
                        width={26}
                        height={26}
                      />
                    </div>
                    <div>
                      <p className="f-400 m-0 pb-1">
                        <b className="f-22 f-600">Context-Driven Accuracy</b>
                      </p>
                      <p className="f-400 m-0">
                        Our model understands tone, domain context, and cultural
                        nuance, especially in regulated industries like law,
                        finance, and governance.
                      </p>
                    </div>
                  </li>
                  <li className="f-400 black mb-3 d-flex gap-3 gap-lg-1">
                    <div
                      className="width-5"
                      style={{ position: "relative", top: 5 }}
                    >
                      <img
                        src={getImagePath("tick-circle.png")}
                        width={26}
                        height={26}
                      />
                    </div>
                    <div>
                      <p className="f-400 m-0 pb-1">
                        <b className="f-22 f-600">Easy Developer Integration</b>
                      </p>
                      <p className="f-400 m-0">
                        Built for speed and simplicity. RESTful API with
                        complete documentation and SDKs lets your developers
                        plug in and go live fast.
                      </p>
                    </div>
                  </li>
                  <li className="f-400 black mb-3 d-flex gap-3 gap-lg-1">
                    <div
                      className="width-5"
                      style={{ position: "relative", top: 5 }}
                    >
                      <img
                        src={getImagePath("tick-circle.png")}
                        width={26}
                        height={26}
                      />
                    </div>
                    <div>
                      <p className="f-400 m-0 pb-1">
                        <b className="f-22 f-600">
                          Language Coverage You Can Count On
                        </b>
                        <br />
                      </p>
                      <p className="f-400 m-0">
                        Translate into 20+ Indian languages and 20+
                        international ones, supporting your local and global
                        communication needs in every script.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="d-flex flex-wrap align-items-center justify-content-start gap-3 wow fadeInUp">
                  <Link href="/book-a-demo" className="white">
                    <button type="btn" className="devnagri-btn mt-3">
                      <img
                        src={getImagePath("video-play-btn.png")}
                        className="pe-1"
                        style={{ filter: "brightness(0) invert(1)" }}
                      />{" "}
                      Book a Demo{" "}
                    </button>
                  </Link>
                  <Link href="https://account.devnagri.com/register" className="">
                    <button
                      type="btn"
                      className="devnagri-btn devnagri-white-btn mt-3 blue"
                    >
                      {" "}
                      Get Strated{" "}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-2 mt-md-5 mt-lg-0">
              <img
                src={getImagePath(
                  "products-images/translation-api/Translation-API-Key-Features.png"
                )}
                className="w-100 wow fadeInUp"
              />
            </div>
          </div>
        </div>
      </section>
      {/*CTA section for product pages*/}
      <section className="cta-sec-products-inner">
        <div className="container">
          <div className="bg-products-inner wow fadeInUp py-5 px-4 px-lg-0 py-md-5 py-lg-0">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h4 className="f-34 f-600 black m-0 ps-0 ps-lg-5">
                  Translate at Scale Without{" "}
                  <span className="blue">Quality Compromise.</span>
                </h4>
                <p className="f-400 para-color m-0 ps-0 ps-lg-5">
                  Monitor usage, performance, and accuracy in one place
                </p>
                <div className="d-flex align-items-center justify-content-start gap-3 ps-0 ps-lg-5">
                  <Link
                    href="https://account.devnagri.com/register"
                    className="white"
                  >
                    <button type="btn" className="devnagri-btn mt-3">
                      {" "}
                      Get Started{" "}
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 mt-2 mt-md-5 mt-lg-0">
                <img
                  src={getImagePath(
                    "products-images/translation-api/Translation-cta.png"
                  )}
                  alt="cta-bg"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*testimonial section*/}
      <TestimonialsSection />
      {/*case study section*/}
      <CaseStudySection />
      {/*Resources section*/}
      <ResourceHubSection />
      {/*FAQ's Section*/}
      <FAQAccordion page="machineTranslationApi" />
      {/*get started section*/}
      <section className="get-strated bg-img">
        <div className="container">
          <h2 className="text-center f-40 f-600 white pe-4 ps-4 pb-3 pt-3 wow fadeInUp">
            If Your Message Crosses Borders, So Does Your Business
          </h2>
          {/* Stats */}
          <div className="row mt-5 text-center custom-stats-row">
            <div className="col-6 col-md-4 custom-stats-col wow fadeInUp">
              <div
                className="custom-counter f-48 f-600 pb-3"
                data-target={4}
                data-decimal="true"
                data-suffix="x"
              >
                x
              </div>
              <p className="custom-label f-400 m-0">
                Boosts Local Language Search Visibility
              </p>
            </div>
            <div className="col-6 col-md-4 custom-stats-col wow fadeInUp">
              <div
                className="custom-counter f-48 f-600 pb-3"
                data-target={70}
                data-suffix="%"
              >
                0%
              </div>
              <p className="custom-label f-400 m-0">Cuts Manual Typing Time</p>
            </div>
            <div className="col-6 col-md-4 custom-stats-col wow fadeInUp">
              <div
                className="custom-counter f-48 f-600 pb-3"
                data-target={50}
                data-suffix="%"
              >
                0%
              </div>
              <p className="custom-label f-400 m-0">
                Higher User Onboarding Rates
              </p>
            </div>
          </div>
          <div className="text-center mt-5 wow fadeInUp mt-5">
            <Link href="https://account.devnagri.com/register" className="white">
              <button type="btn" className="devnagri-btn">
                {" "}
                Start now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MachineTranslationApi;
