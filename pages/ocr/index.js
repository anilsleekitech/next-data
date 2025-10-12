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

const Ocr = () => {

  const videoRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
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
    if (typeof window === "undefined") return;
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

  return (
    <>
     <Head>
        {/* Title & Description */}
        <title>Image To Text, Word Converter Online, OCR Translation - Devnagri</title>
        <meta
          name="description"
          content="The Devnagri OCR translation automation tool allows one to upload files, pdf of the documents, images and convert into text or word easily."
        />
        <meta name="keywords" content="OCR, OCR Solution" />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="P0GXIC42VCPtzhJ0U1AMg6_AV8z5s3IYdZ0-nzjtsH4"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Image To Text, Word Converter Online, OCR Translation - Devnagri"
        />
        <meta
          property="og:description"
          content="The Devnagri OCR translation automation tool allows one to upload files, pdf of the documents, images and convert into text or word easily."
        />
        <meta
          property="og:image"
          content="https://devnagri.com/assets/images/products-images/ocr/OCR-Turn-Scanned-Docs-into-Multilingual-Text.png"
        />
        <meta property="og:url" content="https://devnagri.com/ocr" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Devnagri AI" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DevnagriAI" />
        <meta
          name="twitter:title"
          content="Image To Text, Word Converter Online, OCR Translation - Devnagri"
        />
        <meta
          name="twitter:description"
          content="The Devnagri OCR translation automation tool allows one to upload files, pdf of the documents, images and convert into text or word easily."
        />
        <meta
          name="twitter:image"
          content="https://devnagri.com/assets/images/products-images/ocr/OCR-Turn-Scanned-Docs-into-Multilingual-Text.png"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://devnagri.com/ocr" />
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
                Translate Visuals into{" "}
                <span className="blue">Multilingual Formats</span>
              </h1>
              <p className="f-400 pb-2 pe-3 wow fadeIn">
                Extract and translate printed or handwritten content reliably in
                40+ languages. No manual retyping or copy-paste, just upload and
                go.
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
                <Link href="https://account.devnagri.com/register" className="">
                  <button
                    type="btn"
                    className="devnagri-btn devnagri-white-btn blue mt-3"
                  >
                    {" "}
                    Get Now{" "}
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
                    src={getImagePath("product-pages-viedos/OCR.mp4")}
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
                      src={getImagePath("products-images/accuracy.png")}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="">
                    <h6 className="f-18 f-500 black">
                      <span className="f-20 f-600 blue">Industry-grade</span>{" "}
                      text extraction accuracy across scripts
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="d-flex gap-3 wow fadeInUp">
                  <div className="">
                    <img
                      src={getImagePath("products-images/reduce.png")}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="">
                    <h6 className="f-18 f-500 black">
                      <span className="f-20 f-600 blue">70%</span> Reduced
                      document processing time
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 m-0 mt-md-4 mt-lg-0">
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
                      <span className="f-20 f-600 blue">Trusted by 200+</span>{" "}
                      teams in BFSI, logistics, and governance
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
                  "products-images/ocr/OCR-Turn-Scanned-Docs-into-Multilingual-Text.png"
                )}
                className="w-100 wow fadeInUp"
              />
            </div>
            <div className="col-lg-6 mt-3 mt-md-3 mt-lg-0">
              <h2 className="f-40 f-600 pb-3 m-0 black wow fadeInUp">
                Turn Scanned Docs{" "}
                <span className="blue">into Multilingual Text</span>
              </h2>
              <p className="f-400 para-color m-0 wow fadeInUp">
                Whether you're handling government forms, legal affidavits, ID
                proofs, or forms, our system reads the text accurately and
                converts it into a fully translatable format. No more manual
                retyping or risk of skipping crucial details, just fast,
                reliable results.
              </p>
              <div className="wow fadeInUp">
                <Link
                  href="https://account.devnagri.com/register"
                  className="white"
                >
                  <button type="btn" className="devnagri-btn mt-3">
                    {" "}
                    Start Now
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
                Preserve Original Layout{" "}
                <span className="blue">and Document Integrity</span>
              </h2>
              <p className="f-400 para-color m-0 wow fadeInUp">
                Unlike basic OCR tools that break formatting, our solution
                ensures that the visual structure of your documents stays intact
                after translation. Your translated output remains clean,
                readable, and ready to use without additional formatting work.
              </p>
              <div className="wow fadeInUp">
                <Link href="/contact-us" className="white">
                  <button type="btn" className="devnagri-btn mt-3">
                    {" "}
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 mt-3 mt-md-3 mt-lg-0">
              <img
                src={getImagePath(
                  "products-images/ocr/OCR-Preserve-Original-Layout-and-Document-Integrity.png"
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
                  "products-images/ocr/OCR-Save-Time-on-Bulk-Translation-Workflows.png"
                )}
                className="w-100 wow fadeInUp"
              />
            </div>
            <div className="col-lg-6 mt-3 mt-md-3 mt-lg-0">
              <h2 className="f-40 f-600 pb-3 m-0 black wow fadeInUp">
                Save Time on Bulk{" "}
                <span className="blue">Translation Workflows</span>
              </h2>
              <p className="f-400 para-color m-0 wow fadeInUp">
                Devnagri’s OCR Translation automates the entire process,
                reducing turnaround time from hours to minutes. Teams working
                with bulk documentation in finance, legal, healthcare, and
                public sector domains report up to 80% time savings when
                switching to our solution.
              </p>
              <div className="wow fadeInUp">
                <Link
                  href="https://account.devnagri.com/register"
                  className="white"
                >
                  <button type="btn" className="devnagri-btn mt-3">
                    Try Today
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
            Key <span className="blue">Features</span>
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
                          Instant Text Recognition from Any File
                        </b>
                      </p>
                      <p className="f-400 m-0">
                        Upload scanned PDFs, forms, or image files.
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
                          Multilingual Translation in 40+ Languages
                        </b>
                      </p>
                      <p className="f-400 m-0">
                        Once text is extracted, it's instantly translated into
                        your preferred language
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
                        <b className="f-22 f-600">Fully Automated Processing</b>
                      </p>
                      <p className="f-400 m-0">
                        The platform handles everything. No back-and-forth, no
                        editing needed.
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
                          Enterprise-Grade Accuracy and Security
                        </b>
                        <br />
                      </p>
                      <p className="f-400 m-0">
                        OCR Translation Solution supports sensitive workflows
                        with encrypted handling and consistent output.
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
            <div className="col-lg-6 mt-3 mt-md-3 mt-lg-0">
              <img
                src={getImagePath("products-images/ocr/OCR-Key-Features.png")}
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
                  Automated, Accurate,{" "}
                  <span className="blue">
                    Multilingual Document Translation
                  </span>{" "}
                  - Now Within Reach
                </h4>
                <p className="f-400 para-color m-0 pb-3 ps-0 ps-lg-5">
                  Leading institutions in governance, finance, and logistics
                  rely on Devnagri's OCR Translation Solution to save time,
                  reduce errors, and streamline communication across languages.
                </p>
                <div className="d-flex align-items-center justify-content-start gap-3 ps-0 ps-lg-5 wow fadeInUp">
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
              <div className="col-lg-6 mt-4 mt-md-4 mt-lg-0">
                <img
                  src={getImagePath("products-images/ocr/ocr-cta.jpg")}
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
      <FAQAccordion page="ocr" />
      {/*get started section*/}
      <section className="get-strated bg-img" style={{ padding: "60px 0px" }}>
        <div className="container">
          <h2 className="text-center f-40 f-600 white pe-4 ps-4 pb-3 pt-3 wow fadeInUp">
            If Your Message Crosses Borders, So Does Your Business
          </h2>
          {/* Stats */}
          <div className="row mt-5 text-center custom-stats-row">
            <div className="col-6 col-md-4 custom-stats-col wow fadeInUp">
              <div
                className="custom-counter f-48 f-600 pb-3"
                data-target="85%"
                data-suffix="%"
              >
                0%
              </div>
              <p className="custom-label f-400 m-0">
                Increased Document Accessibility of Non-English-Speaking Users
              </p>
            </div>
            <div className="col-6 col-md-4 custom-stats-col wow fadeInUp">
              <div
                className="custom-counter f-48 f-600 pb-3"
                data-target={100}
                data-decimal="false"
                data-suffix="+"
              />
              <p className="custom-label f-400 m-0">
                District Offices Enabled with Faster Citizen Services.
              </p>
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
                Helped Banks Clear Backlogs During Audits
              </p>
            </div>
          </div>
          <div className="text-center mt-5 wow fadeInUp">
            <Link href="https://account.devnagri.com/register" className="white">
              <button type="btn" className="devnagri-btn">
                Start Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ocr;
