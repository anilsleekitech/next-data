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

const Voicebot = () => {
  const videoRef = useRef(null);
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
  const ogImage = "/assets/images/products-images/ai-voice-bot/Switch-to-any-language-effortlessly.png";

  return (
    <>
      <Head>
        {/* Title & Description */}
        <title>Conversational AI | Voice Bots | AI Voice Bots for Support - Devnagri</title>
        <meta
          name="description"
          content="Unlock the future of communication with conversational AI and AI voice bots. Automate support and create natural, human-like interactions."
        />
        <meta name="keywords" content="conversational ai, voice bots, ai voice bots" />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="P0GXIC42VCPtzhJ0U1AMg6_AV8z5s3IYdZ0-nzjtsH4"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Conversational AI | Voice Bots | AI Voice Bots for Support - Devnagri" />
        <meta
          property="og:description"
          content="Unlock the future of communication with conversational AI and AI voice bots. Automate support and create natural, human-like interactions."
        />
        <meta property="og:image" content={`https://devnagri.com${ogImage}`} />
        <meta property="og:url" content="https://devnagri.com/voice-bot" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Devnagri AI" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DevnagriAI" />
        <meta name="twitter:title" content="Conversational AI | Voice Bots | AI Voice Bots for Support - Devnagri" />
        <meta
          name="twitter:description"
          content="Unlock the future of communication with conversational AI and AI voice bots. Automate support and create natural, human-like interactions."
        />
        <meta name="twitter:image" content={`https://devnagri.com${ogImage}`} />

        {/* Canonical URL */}
        <link rel="canonical" href="https://devnagri.com/voice-bot" />
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
                Emotionally Intelligent{" "}
                <span className="blue">Multilingual Conversational Bot</span>
              </h1>
              <p className="f-400 pb-2 pe-3 wow fadeIn">
                Our bot understands and responds just as a trained human, in the
                language customers speak or switch to mid-conversation.
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
                    src={getImagePath(
                      "product-pages-viedos/agent-voicebot.mp4"
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
          <div className="trusted-partner pb-4 px-4">
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
                      <span className="f-20 f-600 blue">200+ </span>
                      organizations automating communications
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="d-flex gap-3 wow fadeInUp">
                  <div className="">
                    <img
                      src={getImagePath("products-images/languages.png")}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="">
                    <h6 className="f-18 f-500 black">
                      Live in{" "}
                      <span className="f-20 f-600 blue">20+ Indian</span> and{" "}
                      <span className="f-20 f-600 blue">20+ international</span>{" "}
                      languages
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 m-0 mt-md-4 mt-lg-0">
                <div className="d-flex gap-3 wow fadeInUp">
                  <div className="">
                    <img
                      src={getImagePath(
                        "products-images/customer-supports.png"
                      )}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="">
                    <h6 className="f-18 f-500 black">
                      Assisting multiple industries with customer support
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
                  "products-images/ai-voice-bot/Conversational-AI-That-Builds-Trust-in-Every-Language.png"
                )}
                className="w-100 wow fadeInUp"
              />
            </div>
            <div className="col-lg-6 mt-3 mt-md-3 mt-lg-0">
              <h2 className="f-40 f-600 pb-3 m-0 black wow fadeInUp">
                Conversational AI That Builds{" "}
                <span className="blue">Trust in Every Language</span>
              </h2>
              <p className="f-400 para-color m-0 wow fadeInUp">
                Connect with customers in their language, building confidence
                from the very first message. Our AI understands cultural tone
                and context, so every conversation feels human and local.
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
          </div>
        </div>
      </section>
      {/*product data*/}
      <section className="py-5" style={{ backgroundColor: "#EEF5FF" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="f-40 f-600 pb-3 m-0 black wow fadeInUp">
                Switch to any{" "}
                <span className="blue">language effortlessly</span>
              </h2>
              <p className="f-400 para-color m-0 wow fadeInUp">
                Let users switch languages mid-conversation without starting
                over or losing the flow. It’s a seamless multilingual
                experience, no delays, no confusion.
              </p>
              <div className="wow fadeInUp">
                <Link href="/contact-us" className="white">
                  <button type="btn" className="devnagri-btn mt-3">
                    {" "}
                    Contact Now{" "}
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 mt-3 mt-md-3 mt-lg-0">
              <img
                src={getImagePath(
                  "products-images/ai-voice-bot/Switch-to-any-language-effortlessly.png"
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
                  "products-images/ai-voice-bot/No-menu-resets.png"
                )}
                className="w-100 wow fadeInUp"
              />
            </div>
            <div className="col-lg-6 mt-3 mt-md-3 mt-lg-0">
              <h2 className="f-40 f-600 pb-3 m-0 black wow fadeInUp">
                No menu <span className="blue">resets</span>
              </h2>
              <p className="f-400 para-color m-0 wow fadeInUp">
                Your customers don’t have to repeat themselves. Even after
                switching languages, the conversation picks up right where it
                left off. Ask any question at any point, no IVR-style menus.
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
      {/*key feature*/}
      <section
        className="problem-we-solve py-5 bg-img"
        style={{ backgroundImage: `url(${getImagePath("testimonil-bg.png")})` }}
      >
        <div className="container">
          <h2 className="text-center f-40 f-600 pb-4 black wow fadeInUp">
            Why are businesses switching to Devnagri's Emotionally
            <span className="blue"> Intelligent Voice Agent?</span>
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
                          Real-Time Language Switching
                        </b>
                      </p>
                      <p className="f-400 m-0">
                        Your customers shouldn't have to restart a conversation
                        when they switch languages.
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
                          Emotionally Intelligent Responses
                        </b>
                      </p>
                      <p className="f-400 m-0">
                        Our AI understands tone and intent, adjusting its
                        responses with empathy.
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
                          Industry-Trained Voice Models
                        </b>
                      </p>
                      <p className="f-400 m-0">
                        Whether you're in BFSI, governance, or legal-tech, AI
                        Agent is trained to understand domain-specific queries,
                        terms, and compliance nuances.
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
                          Natural-Sounding Conversations
                        </b>
                        <br />
                      </p>
                      <p className="f-400 m-0">
                        AI Agent speaks like your best human agent would, no
                        robotic pauses, no mispronunciations. Just fluent,
                        locally tuned speech.
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
                src={getImagePath(
                  "products-images/ai-voice-bot/Why-are-businesses-switching-to-Devnagri-Emotionally-Intelligent-Voice-Agent.png"
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
                  Conversational AI, That Feels Human,{" "}
                  <span className="blue">In Any Language.</span>
                </h4>
                <p className="f-400 para-color m-0 pb-3 ps-0 ps-lg-5">
                  More than 200 teams across banking, governance, and public
                  services already use Devnagri AI Agent to deliver smoother,
                  smarter, multilingual conversations. Why wait?
                </p>
                <div className="d-flex align-items-center justify-content-start gap-3 ps-0 ps-lg-5">
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
                  src={getImagePath(
                    "products-images/ai-voice-bot/Voice-bot-cta.png"
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
      <FAQAccordion page="voicebot" />
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
                data-target={95}
                data-suffix="%"
              >
                0%
              </div>
              <p className="custom-label f-400 m-0">
                Intent Recognition Accuracy
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
              <p className="custom-label f-400 m-0">Improved Resolution Time</p>
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
                Reduction in Call Center Load
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

export default Voicebot;
