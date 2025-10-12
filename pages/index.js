import React, { useEffect, useState } from "react";
import {
  initializeCounters,
  initializeFAQs,
} from "../utils/homeUtils";
import { initializeWow } from "../utils/initializeAnimations";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRouter } from "next/router";
import Link from "next/link";
import BrandsSection from "../components/BrandsSection";
import CaseStudySection from "../components/CaseStudySection";
import TestimonialsSection from "../components/TestimonialsSection";
import ResourceHubSection from "../components/ResourceHubSection";
import { getImagePath } from "../utils/imageUtils";
import FAQAccordion from "../components/FAQAccordion";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Head from "next/head";

const Home = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeTab, setActiveTab] = useState("ocr-workflow");

  const router = useRouter();
  const location = { pathname: router.pathname };

  useEffect(() => {
    const handleVideoAutoplay = () => {
      const videos = document.querySelectorAll("video");

      videos.forEach((video) => {
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
              video.play().catch(() => {});
            } else {
              video.pause();
            }
          },
          { threshold: 0.3 }
        );

        observer.observe(video);

        // Cleanup per video
        return () => {
          clearInterval(interval);
          observer.disconnect();
        };
      });
    };

    handleVideoAutoplay();
  }, []);

  // Removed forced reloads which caused slow page loads

  useEffect(() => {
    // Initialize features after the browser is idle for faster first paint
    const runInit = () => {
      initializeWow();
      initializeCounters();
      initializeFAQs();
    };
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      window.requestIdleCallback(runInit);
    } else {
      setTimeout(runInit, 0);
    }

    // Cleanup function
    return () => {
      // Remove event listeners
      const accordionButtons = document.querySelectorAll(".accordion-button");
      accordionButtons.forEach((button) => {
        button.removeEventListener("click", () => {});
      });
    };
  }, []);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.on("slideChange", () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      });
    }
  }, [swiperInstance]);

  const updateNavigationState = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const leftTabs = [
    {
      id: "identity-verification",
      title: "Identity & Verification",
      img: "menu-icon/Identity & Verification.png",
      contentImage: "products-images/ocr/Identity & Verification.jpg",
      description: "",
      link: "/ocr",
      features: [
        "KYC Documents",
        "Onboarding Forms (Customer/Employee)",
        "Government-issued Certificates",
        "Business Licenses & Permits",
      ],
    },
    {
      id: "financial-tax",
      title: "Financial & Tax",
      img: "menu-icon/Financial & Tax.png",
      contentImage: "products-images/ocr/Financial & Tax.jpg",
      description: "",
      link: "/ocr",
      features: [
        "Bank Statements",
        "Salary Slips / Pay Stubs",
        "Tax Forms (ITR, GST)",
        "Audit & Financial Reports",
      ],
    },
    {
      id: "legal-compliance",
      title: "Legal & Compliance",
      img: "menu-icon/Legal & Compliance.png",
      contentImage: "products-images/ocr/Legal & Compliance.jpg",
      description: "",
      link: "/ocr",
      features: [
        "Legal Agreements / Contracts",
        "Compliance & Regulatory Docs",
        "Mortgage Documents",
        "Insurance Claims & Policies",
      ],
    },
    {
      id: "operational-transactional",
      title: "Operational & Transactional",
      img: "menu-icon/Operational & Transactional.png",
      contentImage: "products-images/ocr/Operational & Transactional.png",
      description: "",
      link: "/ocr",
      features: [
        "Invoices",
        "Purchase Orders",
        "Shipping Labels",
        "Product Labels & Tags",
      ],
    },
  ];

  // OCR content (video)
  const ocrContent = {
    id: "ocr-workflow",
    title: "OCR Workflow",
    icon: "menu-icon/ocr-workflow-icon.png",
    media: "video",
    src: "product-offering/ocr-product.mp4",
    description: "Extract & translate text from images in a go.",
    link: "/ocr",
    features: [],
    // testimonial:
    //     "Reputed commercial bank attained 98% accuracy across service requests.",
  };

  // Combine all content
  // const contentTabs = [ocrContent];
  const contentTabs = [ocrContent, ...leftTabs];
  const contentTabs2 = [ocrContent];

  const activeContent = contentTabs.find((tab) => tab.id === activeTab);

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
        <title>Devnagri -India's 1st AI-Powered Translation Engine For Indian Languages</title>
        <meta name="description" content="Devnagri, India's #1 AI-powered translation engine, helps brands to localize their content 5x faster and more accurately." />
        <meta name="keywords" content="Devnagri, Devnagri AI" />
        <link rel="canonical" href="https://devnagri.com" />
        <meta name="google-site-verification" content="P0GXIC42VCPtzhJ0U1AMg6_AV8z5s3IYdZ0-nzjtsH4" />
        <meta property="og:title" content="Devnagri -India's 1st AI-Powered Translation Engine For Indian Languages" />
        <meta property="og:description" content="Devnagri, India's #1 AI-powered translation engine, helps brands to localize their content 5x faster and more accurately." />
        <meta property="og:image" content="https://devnagri.com/assets/images/campaigns/Case-Study-EdTech.png" />
        <meta property="og:url" content="https://devnagri.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Devnagri AI" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Devnagri -India's 1st AI-Powered Translation Engine For Indian Languages" />
        <meta name="twitter:description" content="Devnagri, India's #1 AI-powered translation engine, helps brands to localize their content 5x faster and more accurately." />
        <meta name="twitter:image" content="https://devnagri.com/assets/images/campaigns/Case-Study-EdTech.png" />
        <meta name="twitter:site" content="@DevnagriAI" />
      </Head>
      {/* Hero Section */}
      <section className="hero-home bg-img overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="f-40 f-700 black pb-2 wow fadeIn">
                Language is <span className="blue">Local.</span> Impact is{" "}
                <span className="blue">Global.</span>
              </h1>
              <p className="f-400 f-18 para-color m-0 pb-4 wow fadeIn">
                Devnagri helps banks, insurance companies, retail companies, and
                government agencies expand their reach, enhance engagement, and
                build trust through its industry-leading AI-powered multilingual
                technology solutions.
              </p>
              <Link
                href="https://account.devnagri.com/register"
                className="white"
              >
                <button
                  type="btn"
                  className="devnagri-btn wow fadeIn animated"
                  style={{ visibility: "visible" }}
                >
                  Get Started
                </button>
              </Link>
            </div>
            <div className="col-lg-6 mt-md-5 mt-lg-0 mt-4">
              <div className="swiper campaignSwiper wow fadeIn">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="campaign-card">
                      <img
                        src={getImagePath("campaigns/Case-Study-EdTech.png")}
                        alt="New Feature Launch"
                        className="w-100 rounded-4"
                      />
                      <div className="campaign-content text-center">
                        <Link
                          href="/prestigious-tech-institute-of-india-delivers-video-lectures-4x-faster-in-multiple-languages"
                          className="white"
                        >
                          <button
                            type="btn"
                            className="devnagri-btn wow fadeIn animated"
                            style={{ visibility: "visible" }}
                          >
                            Learn More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="campaign-card">
                      <img
                        src={getImagePath("campaigns/Case-Study-BFSI.png")}
                        alt="Insurance Success Story"
                        className="w-100 rounded-4"
                      />
                      <div className="campaign-content text-center">
                        <Link
                          href="/leading-indian-bank-transforms-document-translation-workflow-with-ocr-and-automation"
                          className="white"
                        >
                          <button
                            type="btn"
                            className="devnagri-btn wow fadeIn animated"
                            style={{ visibility: "visible" }}
                          >
                            Learn More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="campaign-card">
                      <img
                        src={getImagePath("campaigns/Devnagri-AI-News.png")}
                        alt="Upcoming Event"
                        className="w-100 rounded-4"
                      />
                      <div className="campaign-content text-center">
                        <Link
                          href="/devnagri-ai-named-top-3-finalist-in-government-of-indias-indiaai-innovation-challenge"
                          className="white"
                        >
                          <button
                            type="btn"
                            className="devnagri-btn wow fadeIn animated"
                            style={{ visibility: "visible" }}
                          >
                            Learn More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="campaign-card">
                      <img
                        src={getImagePath("campaigns/AI-AGENT_2.png")}
                        alt="Language Solutions"
                        className="w-100 rounded-4"
                      />
                      <div className="campaign-content text-center">
                        <Link href="/voice-bot" className="white">
                          <button
                            type="btn"
                            className="devnagri-btn wow fadeIn animated"
                            style={{ visibility: "visible" }}
                          >
                            Learn More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination" style={{ bottom: 0 }} />
                <div className="swiper-button-next" />
                <div className="swiper-button-prev" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <BrandsSection />
        {/*--devnagri offer-*/}
        <section
        id="services_section"
        className="explore-our-product devnagri-offer"
      >
        <div className="container wow fadeInUp">
          <div className="services_heading">
            <h2 className="text-center f-40 f-600 pb-4 black wow fadeInUp">
              Our <span className="blue">Products</span>
            </h2>
            <div className="">
              <ul
                className="nav nav-pills justify-content-center align-items-center mb-4 wow fadeInUp gap-3"
                id="offerTabs"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active f-20 f-500 white"
                    id="tts-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#tts"
                    type="button"
                    role="tab"
                  >
                    Text-to-Text Translation
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link f-20 f-500 white"
                    id="stt-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#stt"
                    type="button"
                    role="tab"
                  >
                    Multilingual Conversational Bots
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link f-20 f-500 white"
                    id="ttt-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#ttt"
                    type="button"
                    role="tab"
                  >
                    OCR Workflow
                  </button>
                </li>
              </ul>
              <div className="tab-content tab-card">
                <div
                  className="tab-pane fade show active"
                  id="tts"
                  role="tabpanel"
                >
                  <div className="services_content">
                    <div className="services_title_main">
                      <div className="services_title">
                        <ul
                          className="nav nav-pills flex-column"
                          id="pills-tab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link services-nav-link active"
                              id="pills-dota-web-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#dota-web"
                              role="tab"
                              aria-controls="dota_web"
                              aria-selected="true"
                            >
                              <div className="tab_innerimg_icon">
                                <img
                                  src={getImagePath(
                                    "menu-icon/dota-web-icon.png"
                                  )}
                                  alt="dota-web"
                                />
                              </div>
                              <div className="nav_btncontent f-20 f-600">
                                DOTA Web
                              </div>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link services-nav-link"
                              id="pills-dota-app-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#dota_app"
                              role="tab"
                              aria-controls="dota_app"
                              aria-selected="false"
                            >
                              <div className="tab_innerimg_icon">
                                <img
                                  src={getImagePath(
                                    "menu-icon/dota-app-icon.png"
                                  )}
                                  alt="dota-app"
                                />
                              </div>
                              <div className="nav_btncontent f-20 f-600">
                                DOTA App
                              </div>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link services-nav-link"
                              id="pills-worklowtrans-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#workflowtrans"
                              role="tab"
                              aria-controls="workflowtrans"
                              aria-selected="false"
                            >
                              <div className="tab_innerimg_icon">
                                <img
                                  src={getImagePath(
                                    "menu-icon/document-translation-icon.png"
                                  )}
                                  alt="workflowtrans"
                                />
                              </div>
                              <div className="nav_btncontent f-20 f-600">
                                Document Engine
                              </div>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link services-nav-link"
                              id="pills-translation-api-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#translation-api"
                              role="tab"
                              aria-controls="translation-api"
                              aria-selected="false"
                            >
                              <div className="tab_innerimg_icon">
                                <img
                                  src={getImagePath(
                                    "menu-icon/translation-api.png"
                                  )}
                                  alt="translation-api"
                                  style={{ width: 40 }}
                                />
                              </div>
                              <div className="nav_btncontent f-20 f-600">
                                Translation API
                              </div>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link services-nav-link"
                              id="pills-transliteration-api-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#transliteration-api"
                              role="tab"
                              aria-controls="transliteration-api"
                              aria-selected="false"
                            >
                              <div className="tab_innerimg_icon">
                                <img
                                  src={getImagePath(
                                    "menu-icon/transliteration-api-icon.png"
                                  )}
                                  alt="transliteration-api"
                                />
                              </div>
                              <div className="nav_btncontent f-20 f-600">
                                Transliteration API
                              </div>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="home_services_inners">
                      <div className="tab-content" id="pills-tabContent">
                        <div
                          className="tab-pane show active"
                          id="dota-web"
                          role="tabpanel"
                          aria-labelledby="pills-dota-web-tab"
                        >
                          <div className="inner_tab_content">
                            <div className="main_tab_content">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="product-viedo-box">
                                    <video
                                      autoPlay
                                      // loop
                                      // playsInline
                                      className="rounded-4"
                                      style={{ width: "100%", height: "100%" }}
                                    >
                                      <source
                                        src={getImagePath(
                                          "product-offering/dota-web-products.mp4"
                                        )}
                                        type="video/mp4"
                                      />
                                      Your browser does not support the video
                                      tag.
                                    </video>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="m-0 f-400 para-color pt-3 pb-3">
                                    Translate your website in minutes
                                  </p>
                                  <ul className="check-list p-0 product-showcase-feature">
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src={getImagePath("tick-circle.png")}
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Plug-n-Play</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src={getImagePath("tick-circle.png")}
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Real-time Translation</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src={getImagePath("tick-circle.png")}
                                          className="w-100"
                                        />
                                      </div>
                                      <div>International SEO</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src={getImagePath("tick-circle.png")}
                                          className="w-100"
                                        />
                                      </div>
                                      <div>
                                        Dashboard Analytics &amp; Insights
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="pt-2">
                                <h6 className="f-600 f-20 black">
                                  A govt website increased its traffic by 200%.
                                </h6>
                                <div className="register-btn">
                                  <Link
                                    href="/website-translation"
                                    className="white"
                                  >
                                    <button
                                      type="btn"
                                      className="devnagri-btn mt-3"
                                    >
                                      Learn More
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane"
                          id="dota_app"
                          role="tabpanel"
                          aria-labelledby="pills-dota-app-tab"
                        >
                          <div className="inner_tab_content">
                            <div className="main_tab_content ">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="product-viedo-box">
                                    <video
                                      autoPlay
                                      // loop
                                      // playsInline
                                      className="rounded-4"
                                      style={{ width: "100%", height: "100%" }}
                                    >
                                      <source
                                        src={getImagePath(
                                          "product-offering/dota-app-product.mp4"
                                        )}
                                        type="video/mp4"
                                      />
                                      Your browser does not support the video
                                      tag.
                                    </video>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="m-0 f-400 para-color pt-3 pb-3">
                                    Localize your mobile app with SDK
                                  </p>
                                  <ul className="check-list p-0 product-showcase-feature">
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src={getImagePath("tick-circle.png")}
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Plug-n-Play SDK</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src={getImagePath("tick-circle.png")}
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Real-Time Translation</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src={getImagePath("tick-circle.png")}
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Translation Analytics</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src={getImagePath("tick-circle.png")}
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Multilingual CX</div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="pt-2">
                                <h6 className="f-600 f-20 black">
                                  Top Indian Bank increased Regional User
                                  Satisfaction by 63%
                                </h6>
                                <div className="register-btn">
                                  <Link
                                    href="/app-localization"
                                    className="white"
                                  >
                                    <button
                                      type="btn"
                                      className="devnagri-btn mt-3"
                                    >
                                      Learn More
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane"
                          id="workflowtrans"
                          role="tabpanel"
                          aria-labelledby="pills-worklowtrans-tab"
                        >
                          <div className="inner_tab_content">
                            <div className="main_tab_content">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="product-viedo-box">
                                    <video
                                      autoPlay
                                      // loop
                                      // playsInline
                                      className="rounded-4"
                                      style={{ width: "100%", height: "100%" }}
                                    >
                                      <source
                                        src={getImagePath(
                                          "product-offering/document-tranlation-product.mp4"
                                        )}
                                        type="video/mp4"
                                      />
                                      Your browser does not support the video
                                      tag.
                                    </video>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="m-0 f-400 para-color pt-3 pb-3">
                                    Translate multiple documents using an
                                    AI-driven engine.
                                  </p>
                                  <ul className="check-list p-0 product-showcase-feature">
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src={getImagePath("tick-circle.png")}
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Contextual Translation</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src={getImagePath("tick-circle.png")}
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Format Retention</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src={getImagePath("tick-circle.png")}
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Multi-File Support</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src={getImagePath("tick-circle.png")}
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Secure Processing</div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="pt-2">
                                <h6 className="f-600 f-20 black">
                                  Housing Finance Company Support Tickets drop
                                  by 41%.
                                </h6>
                                <div className="register-btn">
                                  <Link
                                    href="/document-translation"
                                    className="white"
                                  >
                                    <button
                                      type="btn"
                                      className="devnagri-btn mt-3"
                                    >
                                      Learn More
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane"
                          id="translation-api"
                          role="tabpanel"
                          aria-labelledby="pills-translation-api-tab"
                        >
                          <div className="inner_tab_content">
                            <div className="main_tab_content">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="product-viedo-box">
                                    <video
                                      autoPlay
                                      // loop
                                      // playsInline
                                      className="rounded-4"
                                      style={{ width: "100%", height: "100%" }}
                                    >
                                      <source
                                        src={getImagePath(
                                          "product-offering/Translation-API-product.mp4"
                                        )}
                                        type="video/mp4"
                                      />
                                      Your browser does not support the video
                                      tag.
                                    </video>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="m-0 f-400 para-color pt-3 pb-3">
                                    Perform context-aware translations with a
                                    robust API.
                                  </p>
                                  <ul className="check-list p-0 product-showcase-feature">
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src={getImagePath("tick-circle.png")}
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Contextual Translation</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src={getImagePath("tick-circle.png")}
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Custom Glossary</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src={getImagePath("tick-circle.png")}
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Post-Editing Support</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src={getImagePath("tick-circle.png")}
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Data Privacy Controls</div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="pt-2">
                                <h6 className="f-600 f-20 black">
                                  Fund Management Division Got 50% More
                                  Investors with the Right Translation.
                                </h6>
                                <div className="register-btn">
                                  <Link href="/translation-api" className="white">
                                    <button
                                      type="btn"
                                      className="devnagri-btn mt-3"
                                    >
                                      Learn More
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane"
                          id="transliteration-api"
                          role="tabpanel"
                          aria-labelledby="pills-transliteration-api-tab"
                        >
                          <div className="inner_tab_content">
                            <div className="main_tab_content">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="product-viedo-box">
                                    <video
                                      autoPlay
                                      // loop
                                      // playsInline
                                      className="rounded-4"
                                      style={{ width: "100%", height: "100%" }}
                                    >
                                      <source
                                        src={getImagePath(
                                          "product-offering/Transliteration-API-product.mp4"
                                        )}
                                        type="video/mp4"
                                      />
                                      Your browser does not support the video
                                      tag.
                                    </video>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="m-0 f-400 para-color pt-3 pb-2">
                                    Convert text phonetically between scripts.
                                  </p>
                                  <ul className="check-list p-0 product-showcase-feature">
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src={getImagePath("tick-circle.png")}
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Real-Time Transliteration</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src={getImagePath("tick-circle.png")}
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Custom Glossary</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src={getImagePath("tick-circle.png")}
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Multiple Script Support</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src={getImagePath("tick-circle.png")}
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Data Privacy Controls</div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="pt-2">
                                <h6 className="f-600 f-20 black">
                                  A Leading Finance Academy Received 2X Course
                                  Signups.
                                </h6>
                                <div className="register-btn">
                                  <Link
                                    href="/transliteration-api"
                                    className="white"
                                  >
                                    <button
                                      type="btn"
                                      className="devnagri-btn mt-3"
                                    >
                                      Learn More
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="stt" role="tabpanel">
                  <div className="services_content">
                    <div className="services_title_main">
                      <div className="services_title">
                        <ul
                          className="nav nav-pills flex-column"
                          id="pills-tab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link services-nav-link active"
                              id="pills-aibot-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#aibot"
                              role="tab"
                              aria-controls="aibot"
                              aria-selected="false"
                            >
                              <div className="tab_innerimg_icon">
                                <img
                                  src={getImagePath(
                                    "menu-icon/conversational-ai-bot-icon.png"
                                  )}
                                  alt="aibot"
                                />
                              </div>
                              <div className="nav_btncontent f-20 f-600">
                                Conversational Bot
                              </div>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link services-nav-link"
                              id="pills-smartbot-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#smartbot"
                              role="tab"
                              aria-controls="smartaibot"
                              aria-selected="false"
                            >
                              <div className="tab_innerimg_icon">
                                <img
                                  src={getImagePath(
                                    "menu-icon/chat-bot-icon.png"
                                  )}
                                  alt="smartbot"
                                />
                              </div>
                              <div className="nav_btncontent f-20 f-600">
                                Chat Bot
                              </div>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="home_services_inners">
                      <div className="tab-content" id="pills-tabContent">
                        <div
                          className="tab-pane show active"
                          id="aibot"
                          role="tabpanel"
                        >
                          <div className="inner_tab_content">
                            <div className="main_tab_content">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="product-viedo-box">
                                    <video
                                      autoPlay
                                      // loop
                                      // playsInline
                                      className="rounded-4"
                                      style={{ width: "100%", height: "100%" }}
                                    >
                                      <source
                                        src={getImagePath(
                                          "product-offering/voice-bot-product.mp4"
                                        )}
                                        type="video/mp4"
                                      />
                                      Your browser does not support the video
                                      tag.
                                    </video>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="m-0 f-400 para-color pt-3 pb-3">
                                    Implement Devnagri's bot to scale your
                                    outbound and inbound communications.
                                  </p>
                                  <ul className="check-list p-0 product-showcase-feature">
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src={getImagePath("tick-circle.png")}
                                          className="w-100"
                                        />
                                      </div>
                                      <div>
                                        Emotion &amp; Sentiment Detection
                                      </div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src={getImagePath("tick-circle.png")}
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Multi-Turn Conversations</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src={getImagePath("tick-circle.png")}
                                          className="w-100"
                                        />
                                      </div>
                                      <div>
                                        AI Training &amp; Continous Learning
                                      </div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src={getImagePath("tick-circle.png")}
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Security &amp; Compliance</div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="pt-2">
                                <h6 className="f-600 f-20 black">
                                  NBFC institutions received 3X Loan
                                  Applications.
                                </h6>
                                <div className="register-btn">
                                  <Link href="/voice-bot" className="white">
                                    <button
                                      type="btn"
                                      className="devnagri-btn mt-3"
                                    >
                                      Learn More
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="smartbot" role="tabpanel">
                          <div className="inner_tab_content">
                            <div className="main_tab_content">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="product-viedo-box">
                                    <video
                                      autoPlay
                                      // loop
                                      // playsInline
                                      className="rounded-4"
                                      style={{ width: "100%", height: "100%" }}
                                    >
                                      <source
                                        src={getImagePath(
                                          "product-offering/chat-bot-product.mp4"
                                        )}
                                        type="video/mp4"
                                      />
                                      Your browser does not support the video
                                      tag.
                                    </video>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="m-0 f-400 para-color pt-3 pb-3">
                                    Handle multilingual conversations at scale.
                                  </p>
                                  <ul className="check-list p-0 product-showcase-feature">
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src={getImagePath("tick-circle.png")}
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Auto Language Detection</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src={getImagePath("tick-circle.png")}
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Smooth Language Switching</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src={getImagePath("tick-circle.png")}
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Culturally localized replies</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src={getImagePath("tick-circle.png")}
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Multilingual NLP Support</div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="pt-2">
                                <h6 className="f-600 f-20 black">
                                  Leading Government Division Trained Model with
                                  5+ Mn Sentences
                                </h6>
                                <div className="register-btn">
                                  <Link href="/chatbot" className="white">
                                    <button
                                      type="btn"
                                      className="devnagri-btn mt-3"
                                    >
                                      Learn More
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ocr tab start */}
                <div className="tab-pane fade" id="ttt" role="tabpanel">
                  <div className="services_content">
                    <div className="services_title_main">
                      <div className="services_title">
                        <ul
                          className="nav nav-pills flex-column"
                          id="pills-tab"
                          role="tablist"
                        >
                          {leftTabs.map((tab) => (
                            <li
                              className="nav-item"
                              role="presentation"
                              key={tab.id}
                            >
                              <button
                                className={`nav-link services-nav-link ${
                                  activeTab === tab.id ? "active" : ""
                                }`}
                                onClick={() => setActiveTab(tab.id)}
                              >
                                <div className="tab_innerimg_icon">
                                  <img
                                    src={getImagePath(tab.img)}
                                    alt={tab.title}
                                  />
                                </div>
                                <div className="nav_btncontent f-20 f-600">
                                  {tab.title}
                                </div>
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="home_services_inners">
                      <div className="tab-content" id="pills-tabContent">
                        <div className="inner_tab_content">
                          <div className="main_tab_content">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="product-viedo-box">
                                  {activeContent.media === "video" ? (
                                    <video
                                      autoPlay
                                      // loop
                                      // playsInline
                                      className="rounded-4"
                                      style={{ width: "100%", height: "100%" }}
                                    >
                                      <source
                                        src={getImagePath(activeContent.src)}
                                        type="video/mp4"
                                      />
                                      Your browser does not support the video
                                      tag.
                                    </video>
                                  ) : (
                                    <img
                                      src={getImagePath(
                                        activeContent.contentImage
                                      )}
                                      alt={activeContent.title}
                                      className="rounded-4"
                                      style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                      }}
                                    />
                                  )}
                                </div>
                              </div>
                              <div className="col-md-12">
                                <p className="m-0 f-400 para-color pt-3 pb-3"></p>
                                {/* Feature list for all tabs */}
                                {activeContent.features &&
                                  activeContent.features.length > 0 && (
                                    <ul className="check-list p-0 product-showcase-feature">
                                      {activeContent.features.map(
                                        (feature, index) => (
                                          <li
                                            key={index}
                                            className="f-400 para-color mb-2 d-flex gap-2"
                                          >
                                            <div className="width-8">
                                              <img
                                                src={getImagePath(
                                                  "tick-circle.png"
                                                )}
                                                className="w-100"
                                                alt="tick"
                                              />
                                            </div>
                                            <div>{feature}</div>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  )}

                                <p className="m-0 f-400 para-color pt-3 pb-3">
                                  {activeContent.description}
                                </p>
                              </div>
                            </div>
                            <div className="pt-2">
                              <div className="register-btn">
                                <Link href={activeContent.link} className="white">
                                  <button
                                    type="btn"
                                    className="devnagri-btn mt-3"
                                  >
                                    Learn More
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
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
      {/*experience product mobile section*/}
      <section id="services_section_mobile" className="explore-our-product">
        <div className="container wow fadeInUp">
          <div className="services_heading">
            <h2 className="text-center pb-4 f-40 f-600 black wow fadeInUp">
              Our <span className="blue">Products</span>
            </h2>
          </div>
          <div className="services_content">
            <div className="services_title_main">
              <div className="services_title">
                <div className="accordion" id="accordionExample">
                  {/* Text-to-Text Translation Products */}
                  <h4 className="f-20 f-700 black pb-2 wow fadeIn mb-3">
                    Text-to-Text Translation
                  </h4>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading_dotaweb">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsedotaweb"
                        aria-expanded="true"
                        aria-controls="collapsedotaweb"
                      >
                        <div className="tab_innerimg_icon">
                          <img
                            src={getImagePath("menu-icon/dota-web-icon.png")}
                            alt="dota-web"
                          />
                        </div>
                        <div className="nav_btncontent f-20 f-600">
                          DOTA Web
                        </div>
                      </button>
                    </h2>
                    <div
                      id="collapsedotaweb"
                      className="accordion-collapse collapse show"
                      aria-labelledby="heading_dotaweb"
                    >
                      <div className="accordion-body">
                        <div className="inner_tab_content">
                          <div className="main_mobile_tab_content">
                            <div className="row">
                              <div className="col-md-12">
                                <video
                                  autoPlay
                                  loop
                                  // playsInline
                                  className="rounded-4"
                                  style={{ width: "100%", height: "100%" }}
                                >
                                  <source
                                    src={getImagePath(
                                      "product-offering/dota-web-products.mp4"
                                    )}
                                    type="video/mp4"
                                  />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                              <div className="col-md-12">
                                <p className="m-0 f-400 para-color pt-3 pb-3">
                                  Translate your website in minutes
                                </p>
                                <ul className="check-list p-0">
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src={getImagePath("tick-circle.png")}
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Plug-n-Play</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src={getImagePath("tick-circle.png")}
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Real-time Translation</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src={getImagePath("tick-circle.png")}
                                        className="w-100"
                                      />
                                    </div>
                                    <div>International SEO</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src={getImagePath("tick-circle.png")}
                                        className="w-100"
                                      />
                                    </div>
                                    <div>
                                      Dashboard Analytics &amp; Insights
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="pt-2">
                              <h6 className="f-600 f-20 black">
                                A govt website increased its traffic by 200%.
                              </h6>
                              <div className="register-btn">
                                <Link
                                  href="/website-translation"
                                  className="white"
                                >
                                  <button
                                    type="btn"
                                    className="devnagri-btn mt-3"
                                  >
                                    Learn More
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading_dotaapp">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsedotaapp"
                        aria-expanded="false"
                        aria-controls="collapsedotaapp"
                      >
                        <div className="tab_innerimg_icon">
                          <img
                            src={getImagePath("menu-icon/dota-app-icon.png")}
                            alt="dota-app"
                          />
                        </div>
                        <div className="nav_btncontent f-20 f-600">
                          DOTA App
                        </div>
                      </button>
                    </h2>
                    <div
                      id="collapsedotaapp"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading_dotaapp"
                    >
                      <div className="accordion-body">
                        <div className="inner_tab_content">
                          <div className="main_mobile_tab_content ">
                            <div className="row">
                              <div className="col-md-12">
                                <video
                                  autoPlay
                                  loop
                                  // playsInline
                                  className="rounded-4"
                                  style={{ width: "100%", height: "100%" }}
                                >
                                  <source
                                    src={getImagePath(
                                      "product-offering/dota-app-product.mp4"
                                    )}
                                    type="video/mp4"
                                  />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                              <div className="col-md-12">
                                <p className="m-0 f-400 para-color pt-3 pb-3">
                                  Localize your mobile app with SDK
                                </p>
                                <ul className="check-list p-0">
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src={getImagePath("tick-circle.png")}
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Instant Access</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src={getImagePath("tick-circle.png")}
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Notification Translation</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src={getImagePath("tick-circle.png")}
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Easy Plugin</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src={getImagePath("tick-circle.png")}
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Multilingual CX</div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="pt-2">
                              <h6 className="f-600 f-20 black">
                                Top Indian Bank increased Regional User
                                Satisfaction by 63%
                              </h6>
                              <div className="register-btn">
                                <Link href="/app-localization" className="white">
                                  <button
                                    type="btn"
                                    className="devnagri-btn mt-3"
                                  >
                                    Learn More
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="heading_document_translation"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsdocumenttranslation"
                        aria-expanded="false"
                        aria-controls="collapsdocumenttranslation"
                      >
                        <div className="tab_innerimg_icon">
                          <img
                            src={getImagePath(
                              "menu-icon/document-translation-icon.png"
                            )}
                            alt="workflowtrans"
                          />
                        </div>
                        <div className="nav_btncontent f-20 f-600">
                          Document Engine
                        </div>
                      </button>
                    </h2>
                    <div
                      id="collapsdocumenttranslation"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading_document_translation"
                    >
                      <div className="accordion-body">
                        <div className="inner_tab_content">
                          <div className="main_mobile_tab_content">
                            <div className="row">
                              <div className="col-md-12">
                                <video
                                  autoPlay
                                  loop
                                  // playsInline
                                  className="rounded-4"
                                  style={{ width: "100%", height: "100%" }}
                                >
                                  <source
                                    src={getImagePath(
                                      "product-offering/document-tranlation-product.mp4"
                                    )}
                                    type="video/mp4"
                                  />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                              <div className="col-md-12">
                                <p className="m-0 f-400 para-color pt-3 pb-3">
                                  Translate multiple documents using an
                                  AI-driven engine.
                                </p>
                                <ul className="check-list p-0">
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src={getImagePath("tick-circle.png")}
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Contextual Translation</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src={getImagePath("tick-circle.png")}
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Format Retention</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src={getImagePath("tick-circle.png")}
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Multi-File Support</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src={getImagePath("tick-circle.png")}
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Secure Processing</div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="pt-2">
                              <h6 className="f-600 f-20 black">
                                Housing Finance Company Support Tickets drop by
                                41%.
                              </h6>
                              <div className="register-btn">
                                <Link
                                  href="/document-translation"
                                  className="white"
                                >
                                  <button
                                    type="btn"
                                    className="devnagri-btn mt-3"
                                  >
                                    Learn More
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="heading_translation_api"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsetranslationapi"
                        aria-expanded="false"
                        aria-controls="collapsetranslationapi"
                      >
                        <div className="tab_innerimg_icon">
                          <img
                            src={getImagePath("menu-icon/translation-api.png")}
                            alt="translation-api"
                          />
                        </div>
                        <div className="nav_btncontent f-20 f-600">
                          Translation API
                        </div>
                      </button>
                    </h2>
                    <div
                      id="collapsetranslationapi"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading_translation_api"
                    >
                      <div className="accordion-body">
                        <div className="inner_tab_content">
                          <div className="main_mobile_tab_content">
                            <div className="row">
                              <div className="col-md-12">
                                <video
                                  autoPlay
                                  loop
                                  // playsInline
                                  className="rounded-4"
                                  style={{ width: "100%", height: "100%" }}
                                >
                                  <source
                                    src={getImagePath(
                                      "product-offering/Translation-API-product.mp4"
                                    )}
                                    type="video/mp4"
                                  />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                              <div className="col-md-12">
                                <p className="m-0 f-400 para-color pt-3 pb-3">
                                  Perform context-aware translations with a
                                  robust API.
                                </p>
                                <ul className="check-list p-0">
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src={getImagePath("tick-circle.png")}
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Contextual Translation</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src={getImagePath("tick-circle.png")}
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Custom Glossary</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src={getImagePath("tick-circle.png")}
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Post-Editing Support</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src={getImagePath("tick-circle.png")}
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Data Privacy Controls</div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="pt-2">
                              <h6 className="f-600 f-20 black">
                                Fund Management Division Got 50% More Investors
                                with the Right Translation.
                              </h6>
                              <div className="register-btn">
                                <Link href="/translation-api" className="white">
                                  <button
                                    type="btn"
                                    className="devnagri-btn mt-3"
                                  >
                                    Learn More
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="heading_transliteration_api"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsetransliterationapi"
                        aria-expanded="false"
                        aria-controls="collapsetransliterationapi"
                      >
                        <div className="tab_innerimg_icon">
                          <img
                            src={getImagePath(
                              "menu-icon/transliteration-api-icon.png"
                            )}
                            alt="transliteration-api"
                          />
                        </div>
                        <div className="nav_btncontent f-20 f-600">
                          Transliteration API
                        </div>
                      </button>
                    </h2>
                    <div
                      id="collapsetransliterationapi"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading_transliteration_api"
                    >
                      <div className="accordion-body">
                        <div className="inner_tab_content">
                          <div className="main_mobile_tab_content">
                            <div className="row">
                              <div className="col-md-12">
                                <video
                                  autoPlay
                                  loop
                                  // playsInline
                                  className="rounded-4"
                                  style={{ width: "100%", height: "100%" }}
                                >
                                  <source
                                    src={getImagePath(
                                      "product-offering/Transliteration-API-product.mp4"
                                    )}
                                    type="video/mp4"
                                  />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                              <div className="col-md-12">
                                <p className="m-0 f-400 para-color pt-3 pb-2">
                                  Convert text phonetically between scripts.
                                </p>
                                <ul className="check-list p-0">
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src={getImagePath("tick-circle.png")}
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Script Conversion</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src={getImagePath("tick-circle.png")}
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Real-time Output</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src={getImagePath("tick-circle.png")}
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Phonetic Matching</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src={getImagePath("tick-circle.png")}
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Easy Typing</div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="pt-2">
                              <h6 className="f-600 f-20 black">
                                A Leading Finance Academy Received 2X Course
                                Signups.
                              </h6>
                              <div className="register-btn">
                                <Link
                                  href="/transliteration-api"
                                  className="white"
                                >
                                  <button
                                    type="btn"
                                    className="devnagri-btn mt-3"
                                  >
                                    Learn More
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Multilingual Conversational Bots */}
                  <h4 className="f-20 f-700 black pb-2 wow fadeIn mb-3 mt-4">
                    Multilingual Conversational Bots
                  </h4>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="heading_conversational_aibot"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseconversationalaibot"
                        aria-expanded="false"
                        aria-controls="collapseconversationalaibot"
                      >
                        <div className="tab_innerimg_icon">
                          <img
                            src={getImagePath(
                              "menu-icon/conversational-ai-bot-icon.png"
                            )}
                            alt="aibot"
                          />
                        </div>
                        <div className="nav_btncontent f-20 f-600">
                          Conversational Bot
                        </div>
                      </button>
                    </h2>
                    <div
                      id="collapseconversationalaibot"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading_conversational_aibot"
                    >
                      <div className="accordion-body">
                        <div className="inner_tab_content">
                          <div className="main_mobile_tab_content">
                            <div className="row">
                              <div className="col-md-12">
                                <video
                                  autoPlay
                                  loop
                                  // playsInline
                                  className="rounded-4"
                                  style={{ width: "100%", height: "100%" }}
                                >
                                  <source
                                    src={getImagePath(
                                      "product-offering/voice-bot-product.mp4"
                                    )}
                                    type="video/mp4"
                                  />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                              <div className="col-md-12">
                                <p className="m-0 f-400 para-color pt-3 pb-3">
                                  Implement Devnagri's bot to scale your
                                  outbound and inbound communications.
                                </p>
                                <ul className="check-list p-0">
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src={getImagePath("tick-circle.png")}
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Emotion &amp; Sentiment Detection</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src={getImagePath("tick-circle.png")}
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Multi-Turn Conversations</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src={getImagePath("tick-circle.png")}
                                        className="w-100"
                                      />
                                    </div>
                                    <div>
                                      AI Training &amp; Continous Learning
                                    </div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src={getImagePath("tick-circle.png")}
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Security &amp; Compliance</div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="pt-2">
                              <h6 className="f-600 f-20 black">
                                NBFC institutions received 3X Loan Applications.
                              </h6>
                              <div className="register-btn">
                                <Link href="/voice-bot" className="white">
                                  <button
                                    type="btn"
                                    className="devnagri-btn mt-3"
                                  >
                                    Learn More
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading_chatbot">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsechatbot"
                        aria-expanded="false"
                        aria-controls="collapsechatbot"
                      >
                        <div className="tab_innerimg_icon">
                          <img
                            src={getImagePath("menu-icon/chat-bot-icon.png")}
                            alt="smartbot"
                          />
                        </div>
                        <div className="nav_btncontent f-20 f-600">
                          Chat Bot
                        </div>
                      </button>
                    </h2>
                    <div
                      id="collapsechatbot"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading_chatbot"
                    >
                      <div className="accordion-body">
                        <div className="inner_tab_content">
                          <div className="main_mobile_tab_content">
                            <div className="row">
                              <div className="col-md-12">
                                <video
                                  autoPlay
                                  loop
                                  // playsInline
                                  className="rounded-4"
                                  style={{ width: "100%", height: "100%" }}
                                >
                                  <source
                                    src={getImagePath(
                                      "product-offering/chat-bot-product.mp4"
                                    )}
                                    type="video/mp4"
                                  />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                              <div className="col-md-12">
                                <p className="m-0 f-400 para-color pt-3 pb-3">
                                  Handle multilingual conversations at scale.
                                </p>
                                <ul className="check-list p-0">
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src={getImagePath("tick-circle.png")}
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Auto Language Detection</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src={getImagePath("tick-circle.png")}
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Smooth Language Switching</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src={getImagePath("tick-circle.png")}
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Culturally localized replies</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src={getImagePath("tick-circle.png")}
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Multilingual NLP Support</div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="pt-2">
                              <h6 className="f-600 f-20 black">
                                Leading Government Division Trained Model with
                                5+ Mn Sentences
                              </h6>
                              <div className="register-btn">
                                <Link href="/chatbot" className="white">
                                  <button
                                    type="btn"
                                    className="devnagri-btn mt-3"
                                  >
                                    Learn More
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* OCR WorkFlow Products */}
                  <h4 className="f-20 f-700 black pb-2 wow fadeIn mb-3">
                    OCR Workflow
                  </h4>
                  <div className="accordion" id="servicesAccordion">
                    {contentTabs2.map((tab) => (
                      <div className="accordion-item" key={tab.id}>
                        <h2
                          className="accordion-header"
                          id={`heading_${tab.id}`}
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse_${tab.id}`}
                            aria-expanded="false"
                            aria-controls={`collapse_${tab.id}`}
                          >
                            <div className="tab_innerimg_icon">
                              <img
                                src={getImagePath(tab.img || tab.icon)}
                                alt={tab.title}
                              />
                            </div>
                            <div className="nav_btncontent f-20 f-600">
                              {tab.title}
                            </div>
                          </button>
                        </h2>

                        <div
                          id={`collapse_${tab.id}`}
                          className="accordion-collapse collapse"
                          aria-labelledby={`heading_${tab.id}`}
                          data-bs-parent="#servicesAccordion"
                        >
                          <div className="accordion-body">
                            <div className="inner_tab_content">
                              <div className="main_mobile_tab_content">
                                <div className="row">
                                  <div className="col-12">
                                    {tab.media === "video" ? (
                                      <video
                                        autoPlay
                                        loop
                                        className="rounded-4"
                                        style={{
                                          width: "100%",
                                          height: "100%",
                                        }}
                                      >
                                        <source
                                          src={getImagePath(tab.src)}
                                          type="video/mp4"
                                        />
                                        Your browser does not support the video
                                        tag.
                                      </video>
                                    ) : (
                                      <img
                                        src={getImagePath(
                                          tab.contentImage || tab.mediaSrc
                                        )}
                                        alt={tab.title}
                                        className="rounded-4"
                                        style={{
                                          width: "100%",
                                          height: "100%",
                                          objectFit: "cover",
                                        }}
                                      />
                                    )}
                                  </div>

                                  <div className="col-12">
                                    <p className="m-0 f-400 para-color pt-3 pb-3">
                                      {tab.description}
                                    </p>

                                    {tab.features &&
                                      tab.features.length > 0 && (
                                        <ul className="check-list p-0">
                                          {tab.features.map(
                                            (feature, index) => (
                                              <li
                                                key={index}
                                                className="f-400 para-color mb-2 d-flex gap-2"
                                              >
                                                <div className="width-3">
                                                  <img
                                                    src={getImagePath(
                                                      "tick-circle.png"
                                                    )}
                                                    className="w-100"
                                                    alt="tick"
                                                  />
                                                </div>
                                                <div>{feature}</div>
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      )}
                                  </div>
                                </div>

                                <div className="pt-2">
                                  {tab.testimonial && (
                                    <h6 className="f-600 f-20 black">
                                      {tab.testimonial}
                                    </h6>
                                  )}
                                  <div className="register-btn">
                                    <Link href={tab.link} className="white">
                                      <button
                                        type="btn"
                                        className="devnagri-btn mt-3"
                                      >
                                        Learn More
                                      </button>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
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
      {/*How we can help*/}
      <section className="py-5 howwe-help">
        <div className="container">
          <h2 className="text-center pb-4 f-40 f-600 black wow fadeInUp">
            Serving Diverse <span className="blue">Industries</span>
          </h2>
          <div className="row">
            <div className="col-md-12">
              <div className="howwe-help position-relative">
                <div className="navigation-wrapper d-flex gap-2 justify-content-end">
                  <button
                    className="slider-button-prev rounded-circle d-flex align-items-center justify-content-center"
                    disabled={isBeginning}
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
                  <button
                    className="slider-button-next rounded-circle d-flex align-items-center justify-content-center"
                    disabled={isEnd}
                  >
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
                <Swiper
                  modules={[Navigation]}
                  slidesPerView="auto"
                  spaceBetween={24}
                  grabCursor={true}
                  navigation={{
                    nextEl: ".slider-button-next",
                    prevEl: ".slider-button-prev",
                  }}
                  breakpoints={{
                    0: { slidesPerView: 1.2 },
                    576: { slidesPerView: 2.2 },
                    992: { slidesPerView: 3 },
                    1200: { slidesPerView: 3 },
                    1281: { slidesPerView: 4 },
                  }}
                  onSwiper={(swiper) => {
                    setSwiperInstance(swiper);
                    updateNavigationState(swiper);
                  }}
                  onInit={(swiper) => updateNavigationState(swiper)}
                  onSlideChange={(swiper) => updateNavigationState(swiper)}
                >
                  <SwiperSlide>
                    <div className="how-help-card">
                      <div className="how-help-card-primary">
                        <div className="how-help-card-head">
                          <h3 className="f-24 f-600 white">BFSI</h3>
                          <p className="f-400 white">
                            Make it possible for banking apps to work in more
                            than one language, translate compliance docs, &amp;
                            more.
                          </p>
                          <Link
                            href="/banking-finance-translation"
                            className="learn-more-btn mt-3"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                      <div className="how-help-card-secondary">
                        <img
                          src={getImagePath("BFSI.jpg")}
                          alt="BFSI"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="how-help-card">
                      <div className="how-help-card-primary">
                        <div className="how-help-card-head">
                          <h3 className="f-24 f-600 white">
                            Government &amp; Public Sector
                          </h3>
                          <p className="f-400 white">
                            Translate RTI documents, government programs, and
                            service portals into the local languages.
                          </p>
                          <Link
                            href="/government-translation"
                            className="learn-more-btn mt-3"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                      <div className="how-help-card-secondary">
                        <img
                          alt="Government"
                          src={getImagePath("Government-Public.jpg")}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="how-help-card">
                      <div className="how-help-card-primary">
                        <div className="how-help-card-head">
                          <h3 className="f-24 f-600 white">eCommerce</h3>
                          <p className="f-400 white">
                            Translate product listings, reviews, and
                            notifications so that people can shop in their own
                            language.
                          </p>
                          <Link
                            href="/ecommerce-translation"
                            className="learn-more-btn mt-3"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                      <div className="how-help-card-secondary">
                        <img
                          alt="eCommerce"
                          src={getImagePath("eCommerce.jpg")}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="how-help-card">
                      <div className="how-help-card-primary">
                        <div className="how-help-card-head">
                          <h3 className="f-24 f-600 white">D2C</h3>
                          <p className="f-400 white">
                            Expand globally &amp; boost sales through culturally
                            tailored, multilingual customer experiences.
                          </p>
                          <Link
                            href="/direct-to-consumer-translation"
                            className="learn-more-btn mt-3"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                      <div className="how-help-card-secondary">
                        <img
                          alt="Education"
                          src={getImagePath("Legal-Compliance.jpg")}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*How we do it*/}
      <section className="">
        <div className="container">
          <h2 className="text-center pb-4 f-40 f-600 black wow fadeInUp">
            Capability <span className="blue">Framework</span>
          </h2>
          <section className="cpblts-sec">
            <div className="container">
              <div className="row">
                <div className="col-md-12 coidi-wrap">
                  <div className="outer-linesimg">
                    <img
                      className="img-fluid"
                      src={getImagePath("outer-lines.svg")}
                      alt=""
                    />
                  </div>

                  <div className="content-box">
                    {/* Box 1 - Capabilities */}
                    <div className="coidi-box first">
                      <div className="coidi-box-cntnt">
                        <div className="text-center pt-3 mb-3">
                          <img
                            style={{ maxHeight: "84px" }}
                            src={getImagePath("menu-icon/capabilties-icon.png")}
                            alt=""
                          />
                        </div>
                        <h4 className="text-center">CAPABILITES</h4>
                        <div className="text-center">
                          <img
                            src={getImagePath("arrow-down-big.svg")}
                            alt=""
                          />
                        </div>
                        <div className="text-start px-5">
                          <ul className="ps-0">
                            <li>Multilingual Translation</li>
                            <li>Multilingual Conversational Bot</li>
                            <li>Workflow Integration</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Box 2 - Offerings */}
                    <div className="coidi-box second white">
                      <div className="coidi-box-cntnt ps-4 pe-4 pt-0">
                        <div className="text-center pt-3 mb-3">
                          <img
                            style={{ maxHeight: "84px" }}
                            src={getImagePath("menu-icon/offerings-icon.png")}
                            alt=""
                          />
                        </div>
                        <h4 className="text-center">OFFERINGS</h4>
                        <div className="text-center">
                          <img
                            src={getImagePath("arrow-down-big.svg")}
                            alt=""
                          />
                        </div>

                        <ul className="ps-4 pe-1">
                          <li className="mb-0">Text to Text</li>
                          {/* <li className="mb-0">Text to Speech (TTS)</li>
                    <li className="mb-0">Speech to Text (STT)</li> */}
                          <li className="mb-0">Text to Speech</li>
                          <li className="mb-0">Speech to Text</li>
                        </ul>
                        <ul className="ps-4 pe-1">
                          <li className="mb-0">
                            Conversational Voice & Chatbots
                          </li>
                          <li className="mb-0">IVR Automation</li>
                          <li className="mb-0">Inbound & Outbound Process</li>
                        </ul>
                        <ul className="ps-4 pe-1">
                          <li className="mb-0">OCR Vision Model</li>
                          <li className="mb-0">Customer Onboarding Journeys</li>
                          <li className="mb-0">KYC & Document Verification</li>
                        </ul>
                      </div>
                    </div>

                    {/* Box 3 - Industries */}
                    <div className="coidi-box third">
                      <div className="coidi-box-cntnt">
                        <div className="text-center pt-3 mb-3">
                          <img
                            style={{ maxHeight: "84px" }}
                            src={getImagePath("menu-icon/industry-icon.png")}
                            alt=""
                          />
                        </div>
                        <h4 className="text-center">INDUSTRIES </h4>
                        <div className="text-center">
                          <img
                            src={getImagePath("arrow-down-big.svg")}
                            alt=""
                          />
                        </div>
                        <div className="text-start ps-5">
                          <ul className="ps-0">
                            <li>BFSI</li>
                            <li>D2C</li>
                            <li>Legal</li>
                            <li>E-Commerce</li>
                            <li>Government Tech</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Box 4 - Platform */}
                    <div className="coidi-box fourth white">
                      <div className="coidi-box-cntnt">
                        <div className="text-center pt-3 mb-3">
                          <img
                            style={{ maxHeight: "84px" }}
                            src={getImagePath(
                              "menu-icon/devnagri-platform.png"
                            )}
                            alt=""
                          />
                        </div>
                        <h4 className="text-center">DEVNAGRI’S PLATFORM</h4>
                        <div className="text-center">
                          <img
                            src={getImagePath("arrow-down-big.svg")}
                            alt=""
                          />
                        </div>
                        <ul className="ps-4 pe-2">
                          <li>Core Translation Engine (NLP & ML)</li>
                          <li>LLM & SLM Models</li>
                          <li>BRAIN</li>
                          <li>Agents</li>
                        </ul>
                      </div>
                    </div>

                    {/* Box 5 - Infra & Delivery */}
                    <div className="coidi-box fifth">
                      <div className="coidi-box-cntnt">
                        <div className="text-center pt-3 mb-3">
                          <img
                            style={{ maxHeight: "84px" }}
                            src={getImagePath("menu-icon/infra-delivery.png")}
                            alt=""
                          />
                        </div>
                        <h4 className="text-center">INFRA & DELIVERY</h4>
                        <div className="text-center">
                          <img
                            src={getImagePath("arrow-down-big.svg")}
                            alt=""
                          />
                        </div>
                        <ul className="ps-4 pe-2 pb-2 mb-2">
                          <li>Enterprise-grade security</li>
                          <li>On Prem & Cloud Delivery</li>
                          <li>Integrations CRM, CMS</li>
                          <li>APIs & Hooks</li>
                          <li>Operational Dashboard</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      {/*case study section*/}
      <CaseStudySection />
      <TestimonialsSection />
      {/*our awards section*/}
      <section className="brand-stats-section-home">
        <div className="container">
          <h2 className="f-40 f-600 pb-2 black text-center">Recognitions</h2>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30} // space between slides
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 2 }, // mobile
              768: { slidesPerView: 2 }, // tablet
              992: { slidesPerView: 4 }, // large screens
            }}
            className="brand-slider recognition-slider"
          >
            {[
              { src: "shark-tank-india.png", alt: "Shark Tank India" },
              { src: "google-clod-partner.png", alt: "Google Cloud Partner" },
              { src: "aegisbell.png", alt: "Aegis Bell" },
              { src: "Emerge.jpeg", alt: "Emerge Award" },
              { src: "google-for-startup.png", alt: "Google for Startups" },
            ].map((award, i) => (
              <SwiperSlide key={i}>
                <div className="recognition-card">
                  <img
                    src={getImagePath(award.src)}
                    alt={award.alt}
                    loading="lazy"
                    className="recognition-img"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <ResourceHubSection />
      {/*accordian section*/}
      <FAQAccordion page="home" />
      {/*get started section*/}
      <section className="get-strated bg-img">
        <div className="container">
          <h2 className="text-center f-40 f-600 white pe-4 ps-4 pb-3 pt-3 wow fadeInUp">
            If Your Message Crosses Borders, So Does Your Business
          </h2>
          <div className="row mt-5 text-center custom-stats-row">
            <div className="col-6 col-md-3 custom-stats-col wow fadeInUp">
              <div
                className="custom-counter f-48 f-600 pb-3"
                data-target={60}
                data-suffix="%"
              >
                0%
              </div>
              <p className="custom-label f-400 m-0">Improvement in sales</p>
            </div>
            <div className="col-6 col-md-3 custom-stats-col wow fadeInUp">
              <div
                className="custom-counter f-48 f-600 pb-3"
                data-target={5}
                data-decimal="true"
                data-suffix="x"
              >
                0x
              </div>
              <p className="custom-label f-400 m-0">Faster Operations</p>
            </div>
            <div className="col-6 col-md-3 custom-stats-col wow fadeInUp">
              <div
                className="custom-counter f-48 f-600 pb-3"
                data-target={45}
                data-suffix="%"
              >
                0%
              </div>
              <p className="custom-label f-400 m-0">
                Reduction In Operational Costs
              </p>
            </div>
            <div className="col-6 col-md-3 custom-stats-col wow fadeInUp">
              <div
                className="custom-counter f-48 f-600 pb-3"
                data-target={75}
                data-suffix="%"
              >
                0%
              </div>
              <p className="custom-label f-400 m-0">Increase in CSAT</p>
            </div>
          </div>
          <div className="text-center wow fadeInUp mt-5">
            <Link href="https://account.devnagri.com/register" className="white">
              <button type="btn" className="devnagri-btn">
                {" "}
                Start Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
