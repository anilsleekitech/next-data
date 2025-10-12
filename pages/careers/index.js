import React, { useEffect } from "react";
import { getImagePath } from "../../utils/imageUtils";
import { initializeSliders as initializePageSliders } from "../../utils/initScripts";
import Head from "next/head";

const Careers = () => {
 

  useEffect(() => {
    if (typeof window === "undefined") return;
    const initCarousel = () => {
      const carouselElement = typeof document !== "undefined" && document.getElementById("fadeCarousel");
      if (carouselElement) {
        // Initialize Bootstrap carousel
        if (window?.bootstrap) {
          const carousel = new window.bootstrap.Carousel(carouselElement, {
          interval: 3000,
          wrap: true,
          ride: "carousel",
        });
        }
      }
    };

    // Check if Bootstrap is available
    if (typeof window !== "undefined" && window?.bootstrap) {
      initCarousel();
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    initializePageSliders();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    (function (e, t, a) {
      var s = e.head || e.getElementsByTagName("head")[0],
        i = e.createElement("script");
      i.type = "text/javascript";
      i.id = "peoplehum-hire-jobs-script";
      i.defer = true;
      i.async = false;
      i.src =
        t +
        "/static/js/external-job-list.js?base_url=" +
        t +
        "&config=" +
        JSON.stringify(a);
      s.appendChild(i);
    })(document, "https://hris.peoplehum.com/ehire", {
      env: "prod",
      short_name: "2cf831e9-02a4-4b5d-b1a9-69625bad5bd7", // ✅ your org ID
      container_id: "peopelhum-jobs-container",
      locale: "en-US",
      version: 2,
    });
  }, []);
  

  return (
    <>
     <Head>
        {/* Title & Description */}
        <title>Career | Devnagri</title>
        <meta
          name="description"
          content="Join the Devnagri team and help build the future of AI-powered translation technology."
        />
        <meta
          name="keywords"
          content="careers, jobs, devnagri jobs, AI translation careers, tech jobs"
        />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="P0GXIC42VCPtzhJ0U1AMg6_AV8z5s3IYdZ0-nzjtsH4"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Career | Devnagri" />
        <meta
          property="og:description"
          content="Join the Devnagri team and help build the future of AI-powered translation technology."
        />
        <meta
          property="og:image"
          content="https://devnagri.com/assets/images/career-images/team-1.jpg"
        />
        <meta
          property="og:url"
          content="https://devnagri.com/careers"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Devnagri AI" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DevnagriAI" />
        <meta name="twitter:title" content="Career | Devnagri" />
        <meta
          name="twitter:description"
          content="Join the Devnagri team and help build the future of AI-powered translation technology."
        />
        <meta
          name="twitter:image"
          content="https://devnagri.com/assets/images/career-images/team-1.jpg"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://devnagri.com/careers" />
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
              <h6 className="f-22 f-600 pb-3 black">
                <span className="blue">Here Passion Meets Purpose, </span>Join
                the Journey at Devnagri
              </h6>
              <h1 className="f-40 f-700 black pb-2 wow fadeIn">
                Bring Your Energy and Ideas.{" "}
                <span className="blue">Shape the Future With Us.</span>
              </h1>
              <p className="f-400 pb-2 pe-3 wow fadeIn">
                At Devnagri AI, we're reimagining how businesses, governments,
                and communities connect across languages. If solving real-world
                communication challenges excites you, join us on our journey.
              </p>
              <div className="d-flex align-items-center justify-content-start gap-3 wow fadeIn">
                <button
                  type="button"
                  className="devnagri-btn mt-3"
                  onClick={() => {
                    const section = typeof document !== "undefined" && document.getElementById("our-open-roles");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Explore Open Roles
                </button>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-md-5 mt-lg-0">
              <div
                id="fadeCarousel"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
                data-bs-interval="3000" // 3 seconds per slide
                data-bs-touch="true" // ✅ enable swipe on mobile
                data-bs-pause="false"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={getImagePath("career-images/team-1.jpg")}
                      className="d-block w-100 rounded-4"
                      alt="Slide 1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={getImagePath("career-images/team-2.jpg")}
                      className="d-block w-100 rounded-4"
                      alt="Slide 2"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={getImagePath("career-images/team-3.jpg")}
                      className="d-block w-100 rounded-4"
                      alt="Slide 3"
                    />
                  </div>
                </div>
                {/* Indicators */}
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#fadeCarousel"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#fadeCarousel"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  />
                  <button
                    type="button"
                    data-bs-target="#fadeCarousel"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*life at devnagri*/}
      <section
        className="py-5 bg-img"
        style={{ backgroundImage: `url(${getImagePath("testimonil-bg.png")})` }}
      >
        <div className="container">
          <h2 className="f-40 f-600 m-0 pb-5 text-center black wow fadeInUp">
            Life at <span className="blue">DEVNAGRI AI</span>
          </h2>
          <div className="row justify-content-between">
            <div className="col-lg-8">
              <div className="about-value-content wow fadeInUp">
                <p className="f-400 para-color f-18">
                  <span className="">D</span>
                  <strong className="f-700 black">Dedication:</strong> We’re
                  committed to driving collective success.
                </p>
                <p className="f-400 para-color f-18">
                  <span className="">E</span>
                  <strong className="f-700 black">Empathy:</strong> We
                  understand before we act.
                </p>
                <p className="f-400 para-color f-18">
                  <span className="">V</span>
                  <strong className="f-700 black">Vision:</strong> Every
                  milestone is driven by a clear purpose.
                </p>
                <p className="f-400 para-color f-18">
                  <span className="">N</span>
                  <strong className="f-700 black">Novelty:</strong> We embrace
                  innovation and challenge.
                </p>
                <p className="f-400 para-color f-18">
                  <span className="">A</span>
                  <strong className="f-700 black">Accountability:</strong>{" "}
                  Ownership isn’t assigned here, it’s instinctive.
                </p>
                <p className="f-400 para-color f-18">
                  <span className="">G</span>
                  <strong className="f-700 black">Growth:</strong> Everyone
                  learns, evolves, and levels up.
                </p>
                <p className="f-400 para-color f-18">
                  <span className="">R</span>
                  <strong className="f-700 black">Respect:</strong> We value
                  ideas over titles.
                </p>
                <p className="f-400 para-color f-18">
                  <span className="">I</span>
                  <strong className="f-700 black">Impact:</strong> We create
                  meaningful change.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="video-container mt-3 wow fadeInUp">
                <iframe
                  src="https://www.youtube.com/embed/kqYyV0QjV4s"
                  width="100%"
                  height={510}
                  className="rounded-4"
                  title="YouTube Shorts Embed"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Our hiring timeline*/}
      <section
        className="timeline-section py-5"
        style={{ backgroundColor: "#EEF5FF" }}
      >
        <div className="container">
          <div className="timeline-title">
            <h2 className="f-40 f-600 m-0 pb-3 text-center black wow fadeInUp">
              Hiring <span className="blue">Process</span>
            </h2>
            <p className="f-500 f-20 para-color m-0 pb-3 text-center wow fadeInUp">
              What to Expect
            </p>
          </div>
          <div className="row jus">
            <div className="col-lg-6">
              <div className="timeline-step mt-4 wow fadeInUp">
                <div className="timeline-icon">
                  <i className="bi bi-person-lines-fill" />
                </div>
                <div className="timeline-content">
                  <h5 className="f-24 black f-600">Application Review</h5>
                  <p className=" f-400 para-color m-0">
                    We screen every profile with care.
                  </p>
                </div>
              </div>
              <div className="timeline-step wow fadeInUp" data-wow-delay=".2s">
                <div className="timeline-icon">
                  <i className="bi bi-chat-dots" />
                </div>
                <div className="timeline-content">
                  <h5 className="f-24 black f-600">Intro Call</h5>
                  <p className=" f-400 para-color m-0">
                    A quick chat to get to know each other.
                  </p>
                </div>
              </div>
              <div className="timeline-step wow fadeInUp" data-wow-delay=".3s">
                <div className="timeline-icon">
                  <i className="bi bi-pencil-square" />
                </div>
                <div className="timeline-content">
                  <h5 className="f-24 black f-600">Technical Task</h5>
                  <p className=" f-400 para-color m-0">
                    Role-based exercise to understand your thinking.
                  </p>
                </div>
              </div>
              <div className="timeline-step wow fadeInUp" data-wow-delay=".2s">
                <div className="timeline-icon">
                  <i className="bi bi-people" />
                </div>
                <div className="timeline-content">
                  <h5 className="f-24 black f-600">Panel Interviews</h5>
                  <p className=" f-400 para-color m-0">
                    Meet your future teammates and decision-makers.
                  </p>
                </div>
              </div>
              <div className="timeline-step wow fadeInUp" data-wow-delay=".3s">
                <div className="timeline-icon">
                  <i className="bi bi-send-check" />
                </div>
                <div className="timeline-content">
                  <h5 className="f-24 black f-600">Offer &amp; Onboarding</h5>
                  <p className=" f-400 para-color m-0">
                    We move fast and value your time.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 px-5 mt-4 mt-md-5 mt-lg-0">
              <div className="sticky-block wow fadeInUp">
                <img
                  src={getImagePath("career-images/hiring-timeline-1.jpg")}
                  alt="hiring-timeline"
                  className="w-100 mt-4 rounded-4"
                />
                <div className="row mt-3">
                  <div className="col-md-6 d-none d-md-block">
                    <img
                      src={getImagePath("career-images/hiring-timeline-2.jpg")}
                      alt="hiring-timeline"
                      className="w-100 rounded-4"
                    />
                  </div>
                  <div className="col-md-6 d-none d-md-block">
                    <img
                      src={getImagePath("career-images/hiring-timeline-3.jpg")}
                      alt="hiring-timeline"
                      className="w-100 rounded-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*our befinifts*/}
      <section
        className="problem-we-solve py-5 bg-img"
        style={{ backgroundImage: `url(${getImagePath("testimonil-bg.png")})` }}
      >
        <div className="container">
          <h2 className="text-center f-40 f-600 pb-4 black wow fadeInUp">
            Our <span className="blue">Benefits</span>
          </h2>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src={getImagePath("our-benifits.jpg")}
                className="w-100 rounded-4 wow fadeInUp"
              />
            </div>
            <div className="col-lg-6 px-3 mt-4 mt-md-5 mt-lg-0">
              <div className="key-feature mb-2 wow fadeInUp">
                <ul className="check-list p-0">
                  <li className="f-400 para-color mb-2 d-flex gap-3 gap-md-1">
                    <div
                      className="width-5"
                      style={{ position: "relative", top: 0 }}
                    >
                      <img
                        src={getImagePath("tick-circle.png")}
                        width={26}
                        height={26}
                      />
                    </div>
                    <div>
                      <p className="m-0 pb-1 f-20 f-400">
                        Healthy, collaborative work environment
                      </p>
                    </div>
                  </li>
                  <li className="f-400 para-color mb-2 d-flex gap-3 gap-md-1">
                    <div
                      className="width-5"
                      style={{ position: "relative", top: 0 }}
                    >
                      <img
                        src={getImagePath("tick-circle.png")}
                        width={26}
                        height={26}
                      />
                    </div>
                    <div>
                      <p className="m-0 pb-1 f-20 f-400">
                        Direct access to leadership and cross-functional teams
                      </p>
                    </div>
                  </li>
                  <li className="f-400 para-color mb-2 d-flex gap-3 gap-md-1">
                    <div
                      className="width-5"
                      style={{ position: "relative", top: 0 }}
                    >
                      <img
                        src={getImagePath("tick-circle.png")}
                        width={26}
                        height={26}
                      />
                    </div>
                    <div>
                      <p className="m-0 pb-1 f-20 f-400">
                        Projects with visible, real-world impact
                      </p>
                    </div>
                  </li>
                  <li className="f-400 para-color mb-2 d-flex gap-3 gap-md-1">
                    <div
                      className="width-5"
                      style={{ position: "relative", top: 0 }}
                    >
                      <img
                        src={getImagePath("tick-circle.png")}
                        width={26}
                        height={26}
                      />
                    </div>
                    <div>
                      <p className="m-0 pb-1 f-20 f-400">
                        Flexible work model as per profile and location
                      </p>
                    </div>
                  </li>
                  <li className="f-400 para-color mb-2 d-flex gap-3 gap-md-1">
                    <div
                      className="width-5"
                      style={{ position: "relative", top: 0 }}
                    >
                      <img
                        src={getImagePath("tick-circle.png")}
                        width={26}
                        height={26}
                      />
                    </div>
                    <div>
                      <p className="m-0 pb-1 f-20 f-400">
                        Transparent career growth paths
                      </p>
                    </div>
                  </li>
                  <li className="f-400 para-color mb-2 d-flex gap-3 gap-md-1">
                    <div
                      className="width-5"
                      style={{ position: "relative", top: 0 }}
                    >
                      <img
                        src={getImagePath("tick-circle.png")}
                        width={26}
                        height={26}
                      />
                    </div>
                    <div>
                      <p className="m-0 pb-1 f-20 f-400">
                        Competitive salary opportunities
                      </p>
                    </div>
                  </li>
                  <li className="f-400 para-color mb-2 d-flex gap-3 gap-md-1">
                    <div
                      className="width-5"
                      style={{ position: "relative", top: 0 }}
                    >
                      <img
                        src={getImagePath("tick-circle.png")}
                        width={26}
                        height={26}
                      />
                    </div>
                    <div>
                      <p className="m-0 pb-1 f-20 f-400">
                        A mission-driven company building the future of Indian
                        and global communicational AI
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*our Gallery*/}
      <section className="py-5">
        <div className="container">
          <h2 className="f-600 f-40 m-0 black pb-5 text-center wow fadeInUp">
            Behind The <span className="blue">Hustle</span>
          </h2>
          <div className="row g-3">
            <div className="col-sm-6 col-lg-4 mb-3">
              <div className="gallery-item">
                <img
                  src={getImagePath("aboutus-image/Our-Story.jpg")}
                  alt="Gallery 1"
                />
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mb-3">
              <div className="gallery-item">
                <img
                  src={getImagePath("career-images/team-1.jpg")}
                  alt="Gallery 2"
                />
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mb-3">
              <div className="gallery-item">
                <img
                  src={getImagePath("career-images/team-2.jpg")}
                  alt="Gallery 3"
                />
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mb-3">
              <div className="gallery-item">
                <img
                  src={getImagePath("career-images/team-3.jpg")}
                  alt="Gallery 4"
                />
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mb-3">
              <div className="gallery-item">
                <img
                  src={getImagePath("career-images/team-4.jpg")}
                  alt="Gallery 5"
                />
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mb-3">
              <div className="gallery-item">
                <img
                  src={getImagePath("career-images/team-5.jpg")}
                  alt="Gallery 6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Open role section*/}
      <section id="our-open-roles" className="open-roles py-5">
        <div className="container">
          <h4 className="text-center f-40 black m-0 pb-5 f-600 wow fadeInUp">
            Current <span className="blue">Openings</span>
          </h4>
          {/* PeopleHum jobs container */}
          <div id="peopelhum-jobs-container"></div>
        </div>
      </section>
     
    </>
  );
};

export default Careers;
