import React, { useEffect } from "react";
import Link from "next/link";
import { getImagePath } from "../../utils/imageUtils";
import { initializeSliders as initializePageSliders } from "../../utils/initScripts";
import Head from "next/head";
import BrandsSection from "@/components/BrandsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CaseStudySection from "@/components/CaseStudySection";
import ResourceHubSection from "@/components/ResourceHubSection";

const Govt = () => {
  
  useEffect(() => {
    if (typeof window === "undefined") return;
    const initCarousel = () => {
      const carouselElement = typeof document !== "undefined" && document.getElementById(
        "carouselExampleAutoplaying"
      );
      if (carouselElement) {
        // Initialize Bootstrap carousel
        if (window?.bootstrap) {
          const carousel = new window.bootstrap.Carousel(carouselElement, {
          interval: 2000,
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
    initializePageSliders();
  }, []);

  return (
    <>
      <Head>
        {/* Title & Description */}
        <title>Government Translation Solution | Devnagri</title>
        <meta
          name="description"
          content="Secure and accurate translation solutions for government agencies and public sector organizations."
        />
        <meta
          name="keywords"
          content="government translation, public sector, official documents, secure translation"
        />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="P0GXIC42VCPtzhJ0U1AMg6_AV8z5s3IYdZ0-nzjtsH4"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Government Translation Solution | Devnagri"
        />
        <meta
          property="og:description"
          content="Secure and accurate translation solutions for government agencies and public sector organizations."
        />
        <meta
          property="og:image"
          content="https://devnagri.com/assets/images/industry-icons/gov/GOV.png"
        />
        <meta
          property="og:url"
          content="https://devnagri.com/government-translation"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Devnagri AI" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DevnagriAI" />
        <meta
          name="twitter:title"
          content="Government Translation Solution | Devnagri"
        />
        <meta
          name="twitter:description"
          content="Secure and accurate translation solutions for government agencies and public sector organizations."
        />
        <meta
          name="twitter:image"
          content="https://devnagri.com/assets/images/industry-icons/gov/GOV.png"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://devnagri.com/government-translation"
        />
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
                Localize Communication,{" "}
                <span className="blue">Accelerate Awareness,</span> and Multiply
                Impact.
              </h1>
              <p className="f-400 pb-2 wow fadeIn">
                Multilingual Public Communication Solutions for Government
                Divisions
              </p>
              <div className="d-flex align-items-center justify-content-start gap-3 wow fadeIn">
                <Link href="/contact-us" className="white">
                  <button type="btn" className="devnagri-btn mt-3">
                    Get in touch
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-md-5 mt-lg-0">
              <div className="position-relative wow fadeIn">
                <img
                  src={getImagePath("industry-icons/gov/GOV.png")}
                  className="w-100 rounded-4"
                  alt="industry-specific"
                />
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
                  <div>
                    <img
                      src={getImagePath("industry-icons/gov/speed.png")}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="">
                    <h6 className="f-18 f-500 black">
                      <span className="f-20 f-600 blue">85%</span>
                      <br />
                      Faster Document Localization
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="d-flex gap-3 wow fadeInUp">
                  <div>
                    <img
                      src={getImagePath("industry-icons/gov/increase.png")}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="">
                    <h6 className="f-18 f-500 black">
                      <span className="f-20 f-600 blue">70%</span>
                      <br />
                      Increase in Citizen Reach
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 m-0 mt-md-4 mt-lg-0">
                <div className="d-flex gap-3 wow fadeInUp">
                  <div>
                    <img
                      src={getImagePath("industry-icons/gov/reduce.png")}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="">
                    <h6 className="f-18 f-500 black">
                      <span className="blue">50%</span>
                      <br />
                      Reduction in Support Queries
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Industry data*/}
      <section
        className="industry-page-calltoaction bg-img position-relative py-5"
        style={{ backgroundImage: `url(${getImagePath("testimonil-bg.png")})` }}
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 z-1">
              <img
                src={getImagePath(
                  "industry-icons/gov/Unified-Public-Engagement-at-Scale.png"
                )}
                alt="bfsi"
                className="w-100 rounded-4 wow fadeInUp"
              />
            </div>
            <div className="col-lg-7 px-3 px-lg-5 z-1 mt-4 mt-md-5 mt-lg-0">
              <h2 className="f-40 m-0 f-600 black pb-3 wow fadeInUp">
                Unified Public <span className="blue">Engagement at Scale</span>
              </h2>
              <p className="f-400 para-color m-0 wow fadeInUp">
                Public communication is about encouraging people to act. From
                vaccination drives to civic awareness, we help convert official
                content into regional languages with care for the culture, tone,
                and local context. People engage more when they’re spoken to in
                a way that feels familiar.
              </p>
              <div className="wow fadeInUp">
                <Link href="/contact-us" className="white">
                  <button type="btn" className="devnagri-btn mt-3">
                    Talk to a Strategist{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Industry data*/}
      <section
        className="industry-page-calltoaction position-relative py-5"
        style={{ backgroundColor: "#EEF5FF" }}
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-7 px-3 px-lg-5 z-1">
              <h2 className="f-40 m-0 f-600 black pb-3 wow fadeInUp">
                Domain-Specific Expertise for{" "}
                <span className="blue">Every Bureau and Division</span>
              </h2>
              <p className="f-400 para-color m-0 wow fadeInUp">
                In government, accuracy and trust are a must, our solutions are
                designed to meet both. All output goes through quality checks
                that match MeitY and CERT-In frameworks, so you can be confident
                that your public documents, notices, and service content are
                secure, accessible, and reliable.
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
            <div className="col-lg-5 z-1 mt-4 mt-md-5 mt-lg-0">
              <img
                src={getImagePath(
                  "industry-icons/gov/Domain-Specific-Expertise- Every-Bureau.png"
                )}
                alt="bfsi"
                className="w-100 rounded-3 wow fadeInUp"
              />
            </div>
          </div>
        </div>
      </section>
      {/*Industry data*/}
      <section className="industry-page-calltoaction py-5 position-relative">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 z-1">
              <img
                src={getImagePath(
                  "industry-icons/gov/Automate-Localization-Across-Communication.png"
                )}
                alt="bfsi"
                className="w-100 rounded-4 wow fadeInUp"
              />
            </div>
            <div className="col-lg-7 px-3 px-lg-5 z-1 mt-4 mt-md-5 mt-lg-0">
              <h2 className="f-40 m-0 f-600 black pb-3 wow fadeInUp">
                Automate Localization Across{" "}
                <span className="blue">Communication Pipelines</span>
              </h2>
              <p className="f-400 para-color m-0 wow fadeInUp">
                Your department has more important things to do than wrangle
                translations line by line. We offer full-fledged, highly
                scalable automation that blends right into your digital
                infrastructure, like helpdesks, citizen portals, and internal
                workflows. Updates sync in real time and monitor progress,
                accelerating the process.
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
      {/*Explore devnagri bfsi*/}
      <section
        className="explore-devnagri-bfsi bg-img py-5"
        style={{ backgroundImage: `url(${getImagePath("testimonil-bg.png")})` }}
      >
        <div className="container">
          <h2 className="f-40 f-600 black m-0 pb-5 text-center wow fadeInUp">
            Explore Government<span className="blue">-Specific Use Cases</span>
          </h2>
          <div className="row pt-3">
            <div className="col-lg-3 col-md-6">
              <div className="explore-industy-product text-center mb-4 mb-lg-0 wow fadeInUp">
                <div className="explore-industy-icon pb-3">
                  <img
                    src={getImagePath("industry-icons/documents.png")}
                    alt="icon"
                    className=""
                  />
                </div>
                <div className="explore-industry-content">
                  <p className="f-400 para-color m-0">
                    Power multilingual helplines through AI-driven voice and
                    chatbots
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="explore-industy-product text-center mb-4 mb-lg-0 wow fadeInUp">
                <div className="explore-industy-icon pb-3">
                  <img
                    src={getImagePath("industry-icons/language.png")}
                    alt="icon"
                    className=""
                  />
                </div>
                <div className="explore-industry-content">
                  <p className="f-400 para-color m-0">
                    {" "}
                    Transliterate beneficiary names in land, tax, and pension
                    records
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="explore-industy-product text-center mb-4 mb-lg-0 wow fadeInUp">
                <div className="explore-industy-icon pb-3">
                  <img
                    src={getImagePath(
                      "industry-icons/artificial-intelligence.png"
                    )}
                    alt="icon"
                    className=""
                  />
                </div>
                <div className="explore-industry-content">
                  <p className="f-400 para-color m-0">
                    Translate bids, RTI responses, tenders, legal notices, and
                    policy framework docs
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="explore-industy-product text-center mb-4 mb-lg-0 wow fadeInUp">
                <div className="explore-industy-icon pb-3">
                  <img
                    src={getImagePath("industry-icons/ocr.png")}
                    alt="icon"
                    className=""
                  />
                </div>
                <div className="explore-industry-content">
                  <p className="f-400 para-color m-0">
                    Localize citizen services portals and public grievance
                    platforms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Cta call action section*/}
      <section className="cta-sec-products-inner mb-5">
        <div className="container">
          <div className="bg-products-inner wow fadeInUp py-5 px-4 px-lg-0 py-md-5 py-lg-0">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <p className="f-500 f-22 para-color m-0 pb-3 ps-0 ps-lg-5">
                  Equip your department with a localization platform built for
                  <span className="blue">government communication.</span> Bring
                  transparency, trust, and inclusivity to every interaction with
                  every citizen.
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
              <div className="col-lg-6 mt-4 mt-md-5 mt-lg-0">
                <img
                  src={getImagePath(
                    "industry-icons/gov/GOV-Equip-your-department-with-a-localization.png"
                  )}
                  alt="cta-bg"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Key Challeges*/}
      <section
        className="key-challanges-industry py-5"
        style={{ backgroundColor: "#EEF5FF" }}
      >
        <div className="container">
          <h2 className="f-40 f-600 black m-0 pb-5 text-center wow fadeInUp">
            Benefits Will Sort Your{" "}
            <span className="blue">Communication Hurdles</span>
          </h2>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="challenges-inner mb-4 text-center wow fadeInUp">
                  <div className="challenges-inner-iconbox">
                    <img
                      src={getImagePath("industry-icons/wider-reach.png")}
                      alt="icons"
                      width={50}
                    />
                  </div>
                  <div className="challenges-inner-heading py-2">
                    <h5 className="f-18 black f-600 m-0 ">
                      Wider Reach, Instantly{" "}
                    </h5>
                  </div>
                  <div className="challenges-inner-para">
                    <p className="f-400 para-color m-0">
                      Publish content in over 40 Indian and international
                      languages.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="challenges-inner mb-4 text-center wow fadeInUp">
                  <div className="challenges-inner-iconbox">
                    <img
                      src={getImagePath("industry-icons/earn-and-build.png")}
                      alt="icons"
                      width={50}
                    />
                  </div>
                  <div className="challenges-inner-heading py-2">
                    <h5 className="f-18 black f-600 m-0 ">
                      Earn and Build Public Confidence
                    </h5>
                  </div>
                  <div className="challenges-inner-para">
                    <p className="f-400 para-color m-0">
                      Nuanced context, people think, speak, and understand every
                      day.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="challenges-inner mb-4 text-center wow fadeInUp">
                  <div className="challenges-inner-iconbox">
                    <img
                      src={getImagePath("industry-icons/quick-turnaround.png")}
                      alt="icons"
                      width={50}
                    />
                  </div>
                  <div className="challenges-inner-heading py-2">
                    <h5 className="f-18 black f-600 m-0 ">
                      Faster Turnaround{" "}
                    </h5>
                  </div>
                  <div className="challenges-inner-para">
                    <p className="f-400 para-color m-0">
                      Reach more citizens in a faster manner.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="challenges-inner mb-4 text-center wow fadeInUp">
                  <div className="challenges-inner-iconbox">
                    <img
                      src={getImagePath("industry-icons/misunderstandings.png")}
                      alt="icons"
                      width={50}
                    />
                  </div>
                  <div className="challenges-inner-heading py-2">
                    <h5 className="f-18 black f-600 m-0 ">
                      Avoid Misunderstandings
                    </h5>
                  </div>
                  <div className="challenges-inner-para">
                    <p className="f-400 para-color m-0">
                      Get clear, uniform messaging out across every region.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="challenges-inner mb-4 text-center wow fadeInUp">
                  <div className="challenges-inner-iconbox">
                    <img
                      src={getImagePath("industry-icons/less-manual-work.png")}
                      alt="icons"
                      width={50}
                    />
                  </div>
                  <div className="challenges-inner-heading py-2">
                    <h5 className="f-18 black f-600 m-0 ">Less Manual Work</h5>
                  </div>
                  <div className="challenges-inner-para">
                    <p className="f-400 para-color m-0">
                      AI-powered automation handles workflows.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="challenges-inner mb-4 text-center wow fadeInUp">
                  <div className="challenges-inner-iconbox">
                    <img
                      src={getImagePath("industry-icons/compliance.png")}
                      alt="icons"
                      width={50}
                    />
                  </div>
                  <div className="challenges-inner-heading py-2">
                    <h5 className="f-18 black f-600 m-0 ">
                      Compliance, Covered
                    </h5>
                  </div>
                  <div className="challenges-inner-para">
                    <p className="f-400 para-color m-0">
                      Align with all major regulatory and accessibility
                      benchmarks.
                    </p>
                  </div>
                </div>
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
      {/*Get Started section*/}
      <section className="get-strated bg-img">
        <div className="container">
          <h2 className="text-center f-40 f-600 white pe-4 ps-4 pb-3 pt-3 wow fadeInUp">
            If Your Message Crosses Borders, So Does Your Business
          </h2>
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

export default Govt;
