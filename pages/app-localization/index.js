import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import fullDataset from "../../data/howWeHelpData.json";
import { getImagePath } from "../../utils/imageUtils";
import FAQAccordion from "../../components/FAQAccordion";
import { initializeSliders } from "../../utils/initializeAnimations";
// import { initializeSliders1 as initializeSlickSliders } from "../../../utils/initScripts";
import { initializeSliders as initializeSlickSliders } from "../../utils/initScripts";

const DotaApp = () => {
  const data = fullDataset?.howWeHelpCards.slice(0, 3);
  const router = useRouter();

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
    initializeSliders();
    // initializeSliders1();
    initializeSlickSliders();
  }, []);

  const handleResourceClick = (item) => {
    // Check if this is a translation or transliteration resource
    if (item.translation === true || item.type === "translation") {
      // Get language pairs from item or use defaults
      const fromLang = item.fromLanguage || "english";
      const toLang = item.toLanguage || "hindi";
      // Regular translation URL
      router.push(`/${fromLang}-to-${toLang}-translation`);
      return;
    }

    // Handle regular resources
    const link = (
      item.link ||
      item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
    ).replace(/^\/+|\/+$/g, ""); // Remove leading/trailing slashes
    router.push(`/${link}`);
  };

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
        <title>Mobile App Translation | App Translation | Localization - Devnagri</title>
        <meta name="description" content="Devnagri is the ideal choice for mobile app translation solutions. Translate your mobile app into regional languages with ultra-high accuracy. Try Devnagri today" />
        <meta name="keywords" content="App Localization, Mobile App Localization" />
        
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="P0GXIC42VCPtzhJ0U1AMg6_AV8z5s3IYdZ0-nzjtsH4" />

        {/* Open Graph */}
        <meta property="og:title" content="Mobile App Translation | App Translation | Localization - Devnagri" />
        <meta property="og:description" content="Devnagri is the ideal choice for mobile app translation solutions. Translate your mobile app into regional languages with ultra-high accuracy. Try Devnagri today" />
        <meta property="og:image" content={`https://devnagri.com${getImagePath("products-images/dota-app/Why-Get-the-DOTA-App-by-Devnagri.png")}`} />
        <meta property="og:url" content="https://devnagri.com/app-localization" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DevnagriAI" />
        <meta name="twitter:title" content="Mobile App Translation | App Translation | Localization - Devnagri" />
        <meta name="twitter:description" content="Devnagri is the ideal choice for mobile app translation solutions. Translate your mobile app into regional languages with ultra-high accuracy. Try Devnagri today" />
        <meta name="twitter:image" content={`https://devnagri.com${getImagePath("products-images/dota-app/Why-Get-the-DOTA-App-by-Devnagri.png")}`} />

        {/* Canonical URL */}
        <link rel="canonical" href="https://devnagri.com/app-localization" />
      </Head>
      
      {/* Hero Section */}
      <section
        className="hero-section bg-img"
        style={{
          backgroundImage: `url(${getImagePath("simple-banner-background.png")})`,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="f-40 f-700 black pb-2 wow fadeIn">
                Boost App Downloads with{" "}
                <span className="blue">No-Code App Translation</span>
              </h1>
              <p className="f-400 pb-2 pe-3 wow fadeIn">
                Translate your Android, iOS, or hybrid app without source file
                access. Just one SDK and your app is available in 40+ languages.
              </p>
              <div className="d-flex flex-wrap align-items-center justify-content-start gap-3 wow fadeIn">
                <Link href="/book-a-demo" className="white">
                  <button type="button" className="devnagri-btn mt-3">
                    <Image
                      src={getImagePath("video-play-btn.png")}
                      alt="Play button"
                      width={20}
                      height={20}
                      className="pe-1"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />{" "}
                    Book a Demo{" "}
                  </button>
                </Link>
                <Link href="https://account.devnagri.com/register">
                  <button
                    type="button"
                    className="devnagri-btn devnagri-white-btn blue mt-3"
                  >
                    {" "}
                    Start Translating{" "}
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-md-5 mt-lg-0">
              <div className="position-relative wow fadeIn">
                <video
                  autoPlay
                  ref={videoRef}
                  className="rounded-4"
                  style={{ width: "100%", height: "100%" }}
                >
                  <source
                    src={getImagePath("product-pages-viedos/DOTA-App.mp4")}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our major brand */}
      <section className="brand-stats-section bg-img mb-5">
        <div className="container">
          <div className="">
            <div className="brand-slider brand-slider-whitestrip">
              <div className="brand-slider-wrapper">
                <div className="brand-item-slide">
                  <Image
                    src={getImagePath("brand-meesho.png")}
                    alt="Meesho"
                    width={120}
                    height={60}
                    loading="lazy"
                  />
                </div>
                <div className="brand-item-slide">
                  <Image
                    src={getImagePath("brand-icici-bank.png")}
                    alt="ICICI Bank"
                    width={120}
                    height={60}
                    loading="lazy"
                  />
                </div>
                <div className="brand-item-slide">
                  <Image
                    src={getImagePath("brand-idfc.png")}
                    alt="IDFC"
                    width={120}
                    height={60}
                    loading="lazy"
                  />
                </div>
                <div className="brand-item-slide">
                  <Image
                    src={getImagePath("brand-yes-bank.png")}
                    alt="Yes Bank"
                    width={120}
                    height={60}
                    loading="lazy"
                  />
                </div>
                <div className="brand-item-slide">
                  <Image
                    src={getImagePath("brand-sbi-mutual.png")}
                    alt="SBI Mutual"
                    width={120}
                    height={60}
                    loading="lazy"
                  />
                </div>
                <div className="brand-item-slide">
                  <Image
                    src={getImagePath("brand-tataia.png")}
                    alt="Tata AI"
                    width={120}
                    height={60}
                    loading="lazy"
                  />
                </div>
                <div className="brand-item-slide">
                  <Image
                    src={getImagePath("brand-nestle.png")}
                    alt="Nestle"
                    width={120}
                    height={60}
                    loading="lazy"
                  />
                </div>
                <div className="brand-item-slide">
                  <Image
                    src={getImagePath("brand-my-gov.png")}
                    alt="My Gov"
                    width={120}
                    height={60}
                    loading="lazy"
                  />
                </div>
                <div className="brand-item-slide">
                  <Image
                    src={getImagePath("brand-nitiayog.png")}
                    alt="Niti Aayog"
                    width={120}
                    height={60}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="pb-4 pt-5 pt-md-5 pt-lg-0">
        <div className="container">
          <div className="trusted-partner pb-4">
            <div className="row justify-content-between">
              <div className="col-lg-4 col-md-6">
                <div className="d-flex gap-3 wow fadeInUp">
                  <div>
                    <Image
                      src={getImagePath("products-images/languages.png")}
                      alt="Languages"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <h6 className="f-18 f-500 black">
                      Used by govt. and financial institutions to support{" "}
                      <span className="f-20 f-600 blue">40+ languages</span>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="d-flex gap-3 wow fadeInUp">
                  <div>
                    <Image
                      src={getImagePath("products-images/speed.png")}
                      alt="Speed"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <h6 className="f-18 f-500 black">
                      <span className="f-20 f-600 blue">60%</span> faster
                      time-to-market for multilingual app releases
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 m-0 mt-md-4 mt-lg-0">
                <div className="d-flex gap-3 wow fadeInUp">
                  <div>
                    <Image
                      src={getImagePath("products-images/increase.png")}
                      alt="Increase"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <h6 className="f-18 f-500 black">
                      <span className="f-20 f-600 blue">45%</span> increase in
                      non-English user retention post-integration
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product data */}
      <section
        className="py-5 bg-img"
        style={{ backgroundImage: `url(${getImagePath("testimonil-bg.png")})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Image
                src={getImagePath(
                  "products-images/dota-app/Manage-Translations-at-Scale-with-Enterprise-Level-App-Localization.png"
                )}
                alt="Manage Translations at Scale"
                width={600}
                height={400}
                className="w-100 wow fadeInUp"
              />
            </div>
            <div className="col-lg-6 mt-4 mt-md-5 mt-lg-0">
              <h2 className="f-40 f-600 pb-3 m-0 black wow fadeInUp">
                Manage Translations at Scale with{" "}
                <span className="blue">Enterprise-Level App Localization</span>
              </h2>
              <p className="f-400 para-color m-0 wow fadeInUp">
                Localize every screen, string, and update across 40+ languages,
                all in one place. Built for scale, our platform helps you
                deliver a consistent multilingual experience from beta to
                release.
              </p>
              <div className="wow fadeInUp">
                <Link href="https://account.devnagri.com/register" className="white">
                  <button type="button" className="devnagri-btn mt-3">
                    {" "}
                    Get SDK{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product data */}
      <section className="py-5 bg-img" style={{ backgroundColor: "#EEF5FF" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="f-40 f-600 pb-3 m-0 black wow fadeInUp">
                Skip the Complex Setup.{" "}
                <span className="blue">Start Translating in Minutes.</span>
              </h2>
              <p className="f-400 para-color m-0 wow fadeInUp">
                No lengthy onboarding, no dev bottlenecks. We use smart memory
                and style guides to keep everything aligned. Just plug in your
                app, upload your strings, and go live faster than ever.
              </p>
              <div className="wow fadeInUp">
                <Link href="/book-a-demo" className="white">
                  <button type="button" className="devnagri-btn mt-3">
                    <Image
                      src={getImagePath("video-play-btn.png")}
                      alt="Play button"
                      width={20}
                      height={20}
                      className="pe-1"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />{" "}
                    Book a Demo{" "}
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-md-5 mt-lg-0">
              <Image
                src={getImagePath(
                  "products-images/dota-app/Skip-the-Complex-Setup-Start-Translating-in-Minutes.png"
                )}
                alt="Skip Complex Setup"
                width={600}
                height={400}
                className="w-100 wow fadeInUp"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product data */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Image
                src={getImagePath(
                  "products-images/dota-app/Real-Time-Language-Sync.png"
                )}
                alt="Real-Time Language Sync"
                width={600}
                height={400}
                className="w-100 wow fadeInUp"
              />
            </div>
            <div className="col-lg-6 mt-2 mt-md-5 mt-lg-0">
              <h2 className="f-40 f-600 pb-3 m-0 black wow fadeInUp">
                Real-Time <span className="blue">Language Sync</span>
              </h2>
              <p className="f-400 para-color m-0 wow fadeInUp">
                Update your content in one place and watch it reflect
                everywhere. No more manual edits or last-minute language
                patch-ups. Let your team focus on building, while we handle the
                language layer. Your app speaks to users in their native
                language, without extra effort.
              </p>
              <div className="wow fadeInUp">
                <Link href="https://account.devnagri.com/register" className="white">
                  <button type="button" className="devnagri-btn mt-3">
                    Start Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key feature */}
      <section
        className="problem-we-solve py-5 bg-img"
        style={{ backgroundImage: `url(${getImagePath("testimonil-bg.png")})` }}
      >
        <div className="container">
          <h2 className="text-center f-40 f-600 pb-4 black wow fadeInUp">
            Why Get the <span className="blue">DOTA App by Devnagri?</span>
          </h2>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="key-feature mb-2 wow fadeInUp">
                <ul className="check-list p-0">
                  <li className="f-400 black mb-3 d-flex gap-3 gap-lg-1">
                    <div className="width-5" style={{ position: "relative", top: 5 }}>
                      <Image
                        src={getImagePath("tick-circle.png")}
                        alt="Tick"
                        width={26}
                        height={26}
                      />
                    </div>
                    <div>
                      <p className="f-400 m-0 pb-1">
                        <b className="f-22 f-600">Zero Code Edits</b>
                      </p>
                      <p className="f-400 m-0">
                        No need to rewrite your app. The SDK handles extraction,
                        translation, and context alignment automatically.
                      </p>
                    </div>
                  </li>
                  <li className="f-400 black mb-3 d-flex gap-3 gap-lg-1">
                    <div className="width-5" style={{ position: "relative", top: 5 }}>
                      <Image
                        src={getImagePath("tick-circle.png")}
                        alt="Tick"
                        width={26}
                        height={26}
                      />
                    </div>
                    <div>
                      <p className="f-400 m-0 pb-1">
                        <b className="f-22 f-600">Works Across All App Types</b>
                      </p>
                      <p className="f-400 m-0">
                        Supports Android, iOS, and hybrid frameworks. Regardless
                        of the platform, DOTA fits right in.
                      </p>
                    </div>
                  </li>
                  <li className="f-400 black mb-3 d-flex gap-3 gap-lg-1">
                    <div className="width-5" style={{ position: "relative", top: 5 }}>
                      <Image
                        src={getImagePath("tick-circle.png")}
                        alt="Tick"
                        width={26}
                        height={26}
                      />
                    </div>
                    <div>
                      <p className="f-400 m-0 pb-1">
                        <b className="f-22 f-600">Real-Time String Mapping</b>
                      </p>
                      <p className="f-400 m-0">
                        Menu labels, pop-ups, buttons, and settings, DOTA scans
                        your app and localizes them with full context.
                      </p>
                    </div>
                  </li>
                  <li className="f-400 black mb-3 d-flex gap-3 gap-lg-1">
                    <div className="width-5" style={{ position: "relative", top: 5 }}>
                      <Image
                        src={getImagePath("tick-circle.png")}
                        alt="Tick"
                        width={26}
                        height={26}
                      />
                    </div>
                    <div>
                      <p className="f-400 m-0 pb-1">
                        <b className="f-22 f-600">
                          Secure, Scalable, Enterprise-Ready
                        </b>
                        <br />
                      </p>
                      <p className="f-400 m-0">
                        Built with encryption and compliance standards for
                        regulated industries like finance, legal tech, and
                        government services.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="d-flex flex-wrap align-items-center justify-content-start gap-3 wow fadeInUp">
                  <Link href="/book-a-demo" className="white">
                    <button type="button" className="devnagri-btn mt-3">
                      <Image
                        src={getImagePath("video-play-btn.png")}
                        alt="Play button"
                        width={20}
                        height={20}
                        className="pe-1"
                        style={{ filter: "brightness(0) invert(1)" }}
                      />{" "}
                      Book a Demo{" "}
                    </button>
                  </Link>
                  <Link href="https://account.devnagri.com/register">
                    <button
                      type="button"
                      className="devnagri-btn devnagri-white-btn mt-3 blue"
                    >
                      {" "}
                      Get Started{" "}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-md-5 mt-lg-0">
              <Image
                src={getImagePath(
                  "products-images/dota-app/Why-Get-the-DOTA-App-by-Devnagri.png"
                )}
                alt="Why Get DOTA App"
                width={600}
                height={400}
                className="w-100 wow fadeInUp"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA section for product pages */}
      <section className="cta-sec-products-inner">
        <div className="container">
          <div className="bg-products-inner wow fadeInUp py-5 px-4 px-lg-0 py-md-5 py-lg-0">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h4 className="f-34 f-600 black m-0 pb-3 ps-0 ps-lg-5">
                  <span className="blue">Reach users in</span> Hindi, Tamil,
                  Marathi, Arabic, French, and more
                </h4>
                <div className="d-flex align-items-center justify-content-start gap-3 ps-0 ps-lg-5">
                  <button type="button" className="devnagri-btn mt-3">
                    <Link href="/contact-us" className="white">
                      {" "}
                      Contact Us{" "}
                    </Link>
                  </button>
                </div>
              </div>
              <div className="col-lg-6 mt-4 mt-md-5 mt-lg-0">
                <Image
                  src={getImagePath("products-images/dota-app/dota-app-cta.png")}
                  alt="DOTA App CTA"
                  width={600}
                  height={400}
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial section */}
      <section className="testimonial-section bg-img">
        <div className="container">
          <div className="testimonial-heading">
            <h2 className="f-600 f-40 pb-3 text-center black wow fadeInUp">
              {/* <img src=${getImagePath(testimonial-qutoe.gif" alt="testimonial-gif" class="testimonial-quote"> */}
              What Our <span className="blue">Customers Say?</span>
            </h2>
          </div>
          <div className="testimonial-slider1 position-relative">
            {/* Testimonial 1 */}
            <div>
              <div className="testimonial-card p-4 rounded-4">
                <div className="testimonial-content d-flex justify-content-between mb-4 gap-3">
                  <div className="testimonial-avatar position-relative">
                    <img
                      src={getImagePath("1.svg")}
                      alt="Client Avatar"
                      className="rounded-circle testimonial-avatar-img"
                    />
                    <span className="icon-quote">
                      <i className="bi bi-quote" />
                    </span>
                  </div>
                  <p className="testimonial-text f-16 f-400 text-black mb-0">
                    "We needed our website to be available in multiple Indian
                    languages for better customer reach. Devnagri's team got it
                    done smoothly their APIs are too good. The translations were
                    accurate, and its very easy like a tap, we went live without
                    any technical issues."
                  </p>
                </div>
                <div className="d-flex align-items-center justify-content-between rating-section">
                  <div>
                    <h6 className="f-16 f-600 text-black mb-1">
                      Marketing Lead
                    </h6>
                    <p className="f-14 f-400 text-muted m-0 blue">FMCG Brand</p>
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
            {/* Testimonial 2 */}
            <div>
              <div className="testimonial-card p-4 rounded-4">
                <div className="testimonial-content d-flex justify-content-between mb-4 gap-3">
                  <div className="testimonial-avatar position-relative">
                    <img
                      src={getImagePath("2.svg")}
                      alt="Client Avatar"
                      className="rounded-circle testimonial-avatar-img"
                    />
                    <span className="icon-quote">
                      <i className="bi bi-quote" />
                    </span>
                  </div>
                  <p className="testimonial-text f-16 f-400 text-black mb-0">
                    "We had a lot of documents and brochures that needed to be
                    translated and formatted correctly in the local languages.
                    Devnagri did a great job with the translation. Everything
                    came out clean and ready to go. It saved us a lot of time
                    and effort."
                  </p>
                </div>
                <div className="d-flex align-items-center justify-content-between rating-section">
                  <div>
                    <h6 className="f-16 f-600 text-black mb-1">
                      Communications Head
                    </h6>
                    <p className="f-14 f-400 text-muted m-0 blue">
                      Insurance Company
                    </p>
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
            {/* Testimonial 3 */}
            <div>
              <div className="testimonial-card p-4 rounded-4">
                <div className="testimonial-content d-flex justify-content-between mb-4 gap-3">
                  <div className="testimonial-avatar position-relative">
                    <img
                      src={getImagePath("3.svg")}
                      alt="Client Avatar"
                      className="rounded-circle testimonial-avatar-img"
                    />
                    <span className="icon-quote">
                      <i className="bi bi-quote" />
                    </span>
                  </div>
                  <p className="testimonial-text f-16 f-400 text-black mb-0">
                    Our department had a huge load of reports and files to be
                    translated into regional languages. Devnagri handled it all
                    without fuss. They kept everything accurate and on time.
                    Without any back and forth confusion.
                  </p>
                </div>
                <div className="d-flex align-items-center justify-content-between rating-section">
                  <div>
                    <h6 className="f-16 f-600 text-black mb-1">
                      General Manager
                    </h6>
                    <p className="f-14 f-400 text-muted m-0 blue">
                      Govt Division
                    </p>
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
          </div>
        </div>
      </section>

      {/*case study section*/}
      <section className="case-study bg-img">
        <div className="container">
          <h2 className="white text-center pb-5 f-40 f-600 wow fadeInUp">
            How Our Solutions
            <span className="blue"> Translate to Real-World ROI?</span>
          </h2>
          <div className="">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="row align-items-center justify-content-center m-0">
                <div className="col-lg-10 col-md-12 carousel-case-study wow fadeInUp">
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleAutoplaying"
                      data-bs-slide-to={0}
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    />
                    <button
                      type="button"
                      data-bs-target="#carouselExampleAutoplaying"
                      data-bs-slide-to={1}
                      aria-label="Slide 2"
                    />
                    <button
                      type="button"
                      data-bs-target="#carouselExampleAutoplaying"
                      data-bs-slide-to={2}
                      aria-label="Slide 3"
                    />
                    <button
                      type="button"
                      data-bs-target="#carouselExampleAutoplaying"
                      data-bs-slide-to={3}
                      aria-label="Slide 4"
                    />
                    <button
                      type="button"
                      data-bs-target="#carouselExampleAutoplaying"
                      data-bs-slide-to={4}
                      aria-label="Slide 5"
                    />
                    <button
                      type="button"
                      data-bs-target="#carouselExampleAutoplaying"
                      data-bs-slide-to={5}
                      aria-label="Slide 6"
                    />
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row">
                        <div className="col-lg-5">
                          <div className="description-case-study">
                            <p className="m-0 f-400 black pb-5">
                              A leading Indian bank partnered with Devnagri to
                              automate its multilingual document translation
                              using OCR and AI, streamlining service request
                              processing.
                            </p>
                          </div>
                          <div className="case-study-analytics d-flex gap-3">
                            <div className="analytics-1">
                              <h4 className="f-30 f-500 black">60%</h4>
                              <p className="f-400 m-0 black">
                                reduced processing time
                              </p>
                            </div>
                            <div className="analytics-2">
                              <h4 className="f-30 f-500 black">98%</h4>
                              <p className="f-400 m-0 black">
                                translation accuracy
                              </p>
                            </div>
                          </div>
                          <Link
                            href="/leading-indian-bank-transforms-document-translation-workflow-with-ocr-and-automation"
                            className="white"
                          >
                            <button type="btn" className="devnagri-btn mt-5">
                              View Case Studies
                            </button>
                          </Link>
                        </div>
                        <div className="col-lg-7">
                          <img
                            src="/assets/images/case-study/Case-Study-1.png"
                            className="d-block w-100 casestudy-project"
                            alt="case-study"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-lg-5">
                          <div className="description-case-study">
                            <p className="m-0 f-400 black pb-5">
                              A leading Indian tech institute used Devnagri's
                              AI-powered solution to quickly localize their
                              video lectures into multiple regional languages.
                              This improved student engagement.
                            </p>
                          </div>
                          <div className="case-study-analytics d-flex gap-3">
                            <div className="analytics-1">
                              <h4 className="f-30 f-500 black">62%</h4>
                              <p className="f-400 m-0 black">
                                higher Course completions
                              </p>
                            </div>
                            <div className="analytics-2">
                              <h4 className="f-30 f-500 black">75%</h4>
                              <p className="f-400 m-0 black">cost savings</p>
                            </div>
                          </div>
                          <Link
                            href="/prestigious-tech-institute-of-india-delivers-video-lectures-4x-faster-in-multiple-languages"
                            className="white"
                          >
                            <button type="btn" className="devnagri-btn mt-5">
                              View Case Studies
                            </button>
                          </Link>
                        </div>
                        <div className="col-lg-7">
                          <img
                            src="/assets/images/case-study/Case-Study-2.png"
                            className="d-block w-100 casestudy-project"
                            alt="case-study"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-lg-5">
                          <div className="description-case-study">
                            <p className="m-0 f-400 black pb-5">
                              An Indian insurer used Devnagri to translate
                              documents into regional languages, improving
                              customer clarity and speeding up policy closures.
                            </p>
                          </div>
                          <div className="case-study-analytics d-flex gap-3">
                            <div className="analytics-1">
                              <h4 className="f-30 f-500 black">35%</h4>
                              <p className="f-400 m-0 black">
                                drop in support calls
                              </p>
                            </div>
                            <div className="analytics-2">
                              <h4 className="f-30 f-500 black">4x</h4>
                              <p className="f-400 m-0 black">
                                higher customer engagement
                              </p>
                            </div>
                          </div>
                          <Link
                            href="/devnagri-ai-empowered-leading-nbfc-institution-with-ideal-document-translation-solutions"
                            className="white"
                          >
                            <button type="btn" className="devnagri-btn mt-5">
                              View Case Studies
                            </button>
                          </Link>
                        </div>
                        <div className="col-lg-7">
                          <img
                            src="/assets/images/case-study/Case-Study-3.png"
                            className="d-block w-100 casestudy-project"
                            alt="case-study"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-lg-5">
                          <div className="description-case-study">
                            <p className="m-0 f-400 black pb-5">
                              A mid-sized Indian B2C energy company used
                              Devnagri's multilingual translation to localize
                              brochures and manuals, boosting regional
                              engagement.
                            </p>
                          </div>
                          <div className="case-study-analytics d-flex gap-3">
                            <div className="analytics-1">
                              <h4 className="f-30 f-500 black">30%</h4>
                              <p className="f-400 m-0 black">
                                reduction in onboarding time
                              </p>
                            </div>
                            <div className="analytics-2">
                              <h4 className="f-30 f-500 black">25%</h4>
                              <p className="f-400 m-0 black">
                                decrease in service escalation
                              </p>
                            </div>
                          </div>
                          <Link
                            href="/a-midsized-indian-b2c-company-realizes-regional-growth-through-multilingual-collateral-translation"
                            className="white"
                          >
                            <button type="btn" className="devnagri-btn mt-5">
                              View Case Studies
                            </button>
                          </Link>
                        </div>
                        <div className="col-lg-7">
                          <img
                            src="/assets/images/case-study/Case-Study-4.png"
                            className="d-block w-100 casestudy-project"
                            alt="case-study"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-lg-5">
                          <div className="description-case-study">
                            <p className="m-0 f-400 black pb-5">
                              A government organization partnered with Devnagri
                              to create high-quality, domain-specific
                              Chinese-Hindi translation datasets for training
                              its AI language models.
                            </p>
                          </div>
                          <div className="case-study-analytics d-flex gap-3">
                            <div className="analytics-1">
                              <h4 className="f-30 f-500 black">35%</h4>
                              <p className="f-400 m-0 black">
                                Improved BLEU Score
                              </p>
                            </div>
                            <div className="analytics-2">
                              <h4 className="f-30 f-500 black">500K+</h4>
                              <p className="f-400 m-0 black">
                                sentences translated
                              </p>
                            </div>
                          </div>
                          <Link
                            href="/a-government-organization-trained-language-model-with-chinese-hindi-translation"
                            className="white"
                          >
                            <button type="btn" className="devnagri-btn mt-5">
                              View Case Studies
                            </button>
                          </Link>
                        </div>
                        <div className="col-lg-7">
                          <img
                            src="/assets/images/case-study/Case-Study-5.png"
                            className="d-block w-100 casestudy-project"
                            alt="case-study"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-lg-5">
                          <div className="description-case-study">
                            <p className="m-0 f-400 black pb-5">
                              India's largest public sector bank used Devnagri's
                              DOTA Web to translate its mutual fund platform
                              into regional languages, making it more accessible
                              to non-English speakers.
                            </p>
                          </div>
                          <div className="case-study-analytics d-flex gap-3">
                            <div className="analytics-1">
                              <h4 className="f-30 f-500 black">30%</h4>
                              <p className="f-400 m-0 black">
                                Support queries dropped
                              </p>
                            </div>
                            <div className="analytics-2">
                              <h4 className="f-30 f-500 black">50%</h4>
                              <p className="f-400 m-0 black">
                                Page traffic increased
                              </p>
                            </div>
                          </div>
                          <Link
                            href="/how-dota-is-revolutionizing-language-translation-in-the-digital-age"
                            className="white"
                          >
                            <button type="btn" className="devnagri-btn mt-5">
                              View Case Studies
                            </button>
                          </Link>
                        </div>
                        <div className="col-lg-7">
                          <img
                            src="/assets/images/case-study/Case-Study-6.png"
                            className="d-block w-100 casestudy-project"
                            alt="case-study"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Resources section*/}
      <section className="our-latest-blog py-5">
    <div className="container">
      <h2 className="f-40 f-600 black pb-3 text-center wow fadeInUp">
        Related <span className="blue">Resources</span>
      </h2>
      <div className="d-none d-lg-block">
      <div className="row pt-4">
        {data?.map((item, index) => (
          <div className="col-md-4 fadeInUp" key={item.id}
          onClick={() => {
            // Check if this is a translation or transliteration resource
            if (item.translation === true || item.type === 'translation') {
              // Get language pairs from item or use defaults
              const fromLang = item.fromLanguage || 'english';
              const toLang = item.toLanguage || 'hindi';
              
              // Regular translation URL
              router.push(`/${fromLang}-to-${toLang}-translation`);
              return;
            }
            
            // Handle regular resources
            const link = (item.link || item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'))
              .replace(/^\/+|\/+$/g, ''); // Remove leading/trailing slashes
            router.push(`/${link}`, { 
              state: { 
                item: {
                  ...item,
                  link // Ensure the generated link is included in the state
                }
              } 
            });
          }}
          >
            <div className="resource-card wow fadeInUp">
              <img
                src={item.image}
                alt={item.title}
                className="resource-img"
              />
              <div className="p-4">
                <span className="resource-tag tag-blog f-400">
                  {item.type === "case-studies" ? "Case Studies" : 
                   item.type === "success-stories" ? "Success Stories" : 
                   item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </span>
                <h3 className="f-20 f-600 black mb-2">
                  {item.title}
                </h3>
                <p className="f-16 f-400 para-color mb-0">
                  {item.description}
                </p>
                <div className="resource-meta">
                  <span className="f-14 f-400 para-color">
                    {item.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="mobile-blogs-section d-block d-lg-none">
      <div className="resources-blogs-slider">
        {data?.map((item) => (
          <div className="resource-card" key={item.id}
          onClick={() => {
            // Check if this is a translation or transliteration resource
            if (item.translation === true || item.type === 'translation') {
              // Get language pairs from item or use defaults
              const fromLang = item.fromLanguage || 'english';
              const toLang = item.toLanguage || 'hindi';
              
              // Regular translation URL
              router.push(`/${fromLang}-to-${toLang}-translation`);
              return;
            }
            
            // Handle regular resources
            const link = (item.link || item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'))
              .replace(/^\/+|\/+$/g, ''); // Remove leading/trailing slashes
            router.push(`/${link}`, { 
              state: { 
                item: {
                  ...item,
                  link // Ensure the generated link is included in the state
                }
              } 
            });
          }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="resource-img"
            />
            <div className="p-4">
              <span className="resource-tag tag-blog f-400">
                {item.type === "case-studies" ? "Case Studies" : 
                 item.type === "success-stories" ? "Success Stories" : 
                 item.type.charAt(0).toUpperCase() + item.type.slice(1)}
              </span>
              <h3 className="f-20 f-600 black mb-2">
                {item.title}
              </h3>
              <p className="f-16 f-400 para-color mb-0">
                {item.description}
              </p>
              <div className="resource-meta">
                  <span className="f-14 f-400 para-color">
                    {item.date}
                  </span>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  </section>

      {/* FAQ's Section */}
      <FAQAccordion page="dotaApp" />

      {/* Get started section */}
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
                data-target={70}
                data-suffix="%"
              >
                0%
              </div>
              <p className="custom-label f-400 m-0">
                Reduction in Localization Costs
              </p>
            </div>
            <div className="col-6 col-md-4 custom-stats-col wow fadeInUp">
              <div
                className="custom-counter f-48 f-600 pb-3"
                data-target={92}
                data-suffix="%"
              >
                0%
              </div>
              <p className="custom-label f-400 m-0">Faster Time-to-Market</p>
            </div>
            <div className="col-6 col-md-4 custom-stats-col wow fadeInUp">
              <div
                className="custom-counter f-48 f-600 pb-3"
                data-target={40}
                data-suffix="%"
              >
                x
              </div>
              <p className="custom-label f-400 m-0">
                Increase in App Engagement
              </p>
            </div>
          </div>
          <div className="text-center wow fadeInUp mt-5">
            <Link href="https://account.devnagri.com/register" className="white">
              <button type="button" className="devnagri-btn">
                {" "}
                Start Now{" "}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DotaApp;