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

const DotaWeb = () => {

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
    initializePageSliders();
    initializePageSliders();
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

  const ogImage = "/assets/images/products-images/dota-web/dota-web-cta.png";

  return (
    <>
       <Head>
        {/* Title & Description */}
        <title>Website Translation | Website Translator | Website Localization - Devnagri</title>
        <meta
          name="description"
          content="Expand globally with professional website translation and localization. Accurate translations by a trusted website translation company."
        />
        <meta
          name="keywords"
          content="website translator, website translation, website translation company, website localization"
        />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="P0GXIC42VCPtzhJ0U1AMg6_AV8z5s3IYdZ0-nzjtsH4"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Website Translation | Website Translator | Website Localization - Devnagri" />
        <meta
          property="og:description"
          content="Expand globally with professional website translation and localization. Accurate translations by a trusted website translation company."
        />
        <meta property="og:image" content={`https://devnagri.com${ogImage}`} />
        <meta property="og:url" content="https://devnagri.com/website-translation" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Devnagri AI" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DevnagriAI" />
        <meta name="twitter:title" content="Website Translation | Website Translator | Website Localization - Devnagri" />
        <meta
          name="twitter:description"
          content="Expand globally with professional website translation and localization. Accurate translations by a trusted website translation company."
        />
        <meta name="twitter:image" content={`https://devnagri.com${ogImage}`} />

        {/* Canonical URL */}
        <link rel="canonical" href="https://devnagri.com/website-translation" />
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
                Increase Global Reach with{" "}
                <span className="blue">AI-powered Website Translation</span>
              </h1>
              <p className="f-400 pb-2 pe-3 wow fadeIn">
                A lightweight plug-in translates your entire website into 40+
                languages in seconds, without any manual effort or content
                copy-paste.
              </p>
              <div className="d-flex flex-wrap align-items-center justify-content-start gap-3 wow fadeIn">
                <Link href="/book-a-demo" className="white">
                  <button type="btn" className="devnagri-btn mt-3">
                    <img
                      src={getImagePath("video-play-btn.png")}
                      className="pe-1"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />{" "}
                    Request Demo{" "}
                  </button>
                </Link>
                <Link href="https://account.devnagri.com/register" className="">
                  <button
                    type="btn"
                    className="devnagri-btn devnagri-white-btn mt-3 blue"
                  >
                    {" "}
                    Start Now{" "}
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
                >
                  <source
                    src={getImagePath("product-pages-viedos/DOTA-WEB.mp4")}
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
              <div className="col-lg-4 col-md-6 mb-3 mb-md-0 mb-lg-0">
                <div className="d-flex gap-3 wow fadeInUp">
                  <div className="">
                    <img
                      src={getImagePath("products-images/speed.png")}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="">
                    <h6 className="f-18 f-500 black">
                      <span className="f-20 f-600 blue">90%</span> faster
                      website localization
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-3 mb-md-0 mb-lg-0">
                <div className="d-flex gap-3 wow fadeInUp">
                  <div className="">
                    <img
                      src={getImagePath("products-images/trusted.png")}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="">
                    <h6 className="f-18 f-500 black">
                      <span className="f-20 f-600 blue">Trusted</span> by
                      Leading Brands
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 m-0 mt-md-4 mt-lg-0 mb-3 mb-md-0 mb-lg-0">
                <div className="d-flex gap-3 wow fadeInUp">
                  <div className="">
                    <img
                      src={getImagePath("products-images/accuracy.png")}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="">
                    <h6 className="f-18 f-500 black">
                      Accuracy across{" "}
                      <span className="f-20 f-600 blue">40+ languages</span>
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
                  "products-images/dota-web/Seamless-Website-Translation-Without-Code.png"
                )}
                className="w-100 wow fadeInUp"
              />
            </div>
            <div className="col-lg-6 mt-2 mt-md-5 mt-lg-0">
              <h2 className="f-40 f-600 pb-3 m-0 black wow fadeInUp">
                Seamless Website Translation{" "}
                <span className="blue">Without Code</span>
              </h2>
              <p className="f-400 para-color m-0 wow fadeInUp">
                With just one simple script, DOTA Web auto-detects and
                translates your content, live on your site. It’s fast, scalable,
                and designed to let you launch in multiple languages without
                disrupting your existing workflows.
              </p>
              <div className="wow fadeInUp">
                <Link
                  href="https://account.devnagri.com/register"
                  className="white"
                >
                  <button type="btn" className="devnagri-btn mt-3">
                    {" "}
                    Get Plugin{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*product data*/}
      <section className="py-5 bg-img" style={{ backgroundColor: "#EEF5FF" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="f-40 f-600 pb-3 m-0 black wow fadeInUp">
                Dynamic Content, <span className="blue">Fully Localized</span>
              </h2>
              <p className="f-400 para-color m-0 wow fadeInUp">
                Whether your content lives in a CMS, shows up via APIs, or
                changes based on user actions, translate everything instantly.
                DOTA Web intelligently captures and translates everything, from
                static text to real-time updates. Visitors get a fully
                localized, native-like experience every time they interact with
                your site.
              </p>
              <div className="wow fadeInUp">
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
                  "products-images/dota-web/Dynamic-Content-Fully-Localized.png"
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
                  "products-images/dota-web/One-Dashboard-to-Control-Every-Language.png"
                )}
                className="w-100 wow fadeInUp"
              />
            </div>
            <div className="col-lg-6 mt-2 mt-md-5 mt-lg-0">
              <h2 className="f-40 f-600 pb-3 m-0 black wow fadeInUp">
                One Dashboard to Control{" "}
                <span className="blue">Every Language</span>
              </h2>
              <p className="f-400 para-color m-0 wow fadeInUp">
                Handle all your translation needs from one powerful, easy-to-use
                dashboard. Add new languages, review translations, track
                performance, and push updates instantly, without juggling
                plugins or third-party tools. It’s a centralized command center
                for managing your global web presence with ease.
              </p>
              <div className="wow fadeInUp">
                <Link href="/book-a-demo" className="white">
                  <button type="btn" className="devnagri-btn mt-3">
                    <img
                      src={getImagePath("video-play-btn.png")}
                      className="pe-1"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />{" "}
                    Book a Demo
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
            What Makes <span className="blue">DOTA Web Different?</span>
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
                          Automatic Website Translation
                        </b>
                      </p>
                      <p className="f-400 m-0">
                        Add a small code snippet, and your website becomes
                        multilingual in real-time, no redesign or dev
                        involvement needed.
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
                        <b className="f-22 f-600">Full Language Coverage</b>
                      </p>
                      <p className="f-400 m-0">
                        Support for 20+ Indian and 20+ global languages. It
                        preserves your industry terms while adapting to new
                        content as you update your site.
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
                          Zero Maintenance, Real-Time Sync
                        </b>
                      </p>
                      <p className="f-400 m-0">
                        As your site grows, DOTA Web stays in sync. New pages or
                        edits are translated on the fly, without delays or
                        manual updates.
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
                          SEO-Friendly and Lightweight
                        </b>
                        <br />
                      </p>
                      <p className="f-400 m-0">
                        Your site speed stays fast. Multilingual pages are fully
                        indexable and optimized for local search performance.
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
                      Request Demo{" "}
                    </button>
                  </Link>
                  <Link
                    href="https://account.devnagri.com/register"
                    className="blue"
                  >
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
                  "products-images/dota-web/What-Makes-DOTA-Web-Different.png"
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
                <h4 className="f-34 f-600 black m-0 pb-3 ps-0 ps-lg-5">
                  Without Any Rebuild,{" "}
                  <span className="blue">
                    just faster &amp; smarter localization.
                  </span>
                </h4>
                <div className="d-flex align-items-center justify-content-start gap-3 ps-0 ps-lg-5">
                  <Link href="/book-a-demo" className="white">
                    <button type="btn" className="devnagri-btn mt-3">
                      {" "}
                      Book a Demo{" "}
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 mt-4 mt-md-5 mt-lg-0">
                <img
                  src={getImagePath(
                    "products-images/dota-web/dota-web-cta.png"
                  )}
                  alt="cta-bg"
                  className="w-100 rounded-4"
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
      <FAQAccordion page="dotaWeb" />
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
                data-target={90}
                data-suffix="%"
              >
                0%
              </div>
              <p className="custom-label f-400 m-0">Reduces Translation Time</p>
            </div>
            <div className="col-6 col-md-4 custom-stats-col wow fadeInUp">
              <div
                className="custom-counter f-48 f-600 pb-3"
                data-target={5}
                data-decimal="true"
                data-suffix="x"
              >
                x
              </div>
              <p className="custom-label f-400 m-0">Faster Go-to-Market</p>
            </div>
            <div className="col-6 col-md-4 custom-stats-col wow fadeInUp">
              <div
                className="custom-counter f-48 f-600 pb-3"
                data-target={60}
                data-suffix="%"
              >
                0%
              </div>
              <p className="custom-label f-400 m-0">
                Increased Localization Accuracy
              </p>
            </div>
          </div>
          <div className="text-center wow fadeInUp mt-5">
            <Link href="https://account.devnagri.com/register" className="white">
              <button type="btn" className="devnagri-btn">
                {" "}
                Get Started Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DotaWeb;
