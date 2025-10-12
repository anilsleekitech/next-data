import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getImagePath } from "../../utils/imageUtils";
import FAQAccordion from "../../components/FAQAccordion";
import { initializeSliders } from "../../utils/initializeAnimations";
import { initializeSliders as initializeSlickSliders } from "../../utils/initScripts";
import BrandsSection from "@/components/BrandsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CaseStudySection from "@/components/CaseStudySection";
import ResourceHubSection from "@/components/ResourceHubSection";

const DotaApp = () => {
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
        <meta property="og:image" content="https://devnagri.com/assets/images/products-images/dota-app/Why-Get-the-DOTA-App-by-Devnagri.png" />
        <meta property="og:url" content="https://devnagri.com/app-localization" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DevnagriAI" />
        <meta name="twitter:title" content="Mobile App Translation | App Translation | Localization - Devnagri" />
        <meta name="twitter:description" content="Devnagri is the ideal choice for mobile app translation solutions. Translate your mobile app into regional languages with ultra-high accuracy. Try Devnagri today" />
        <meta name="twitter:image" content="https://devnagri.com/assets/images/products-images/dota-app/Why-Get-the-DOTA-App-by-Devnagri.png" />

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
      <BrandsSection />

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
      <TestimonialsSection />

      {/*case study section*/}
     <CaseStudySection />
      {/*Resources section*/}
      <ResourceHubSection />

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