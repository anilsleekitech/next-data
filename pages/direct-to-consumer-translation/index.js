import React, { useEffect } from "react";
import Link from "next/link";
import { getImagePath } from "../../utils/imageUtils";
import { initializeSliders as initializePageSliders } from "../../utils/initScripts";
import Head from "next/head";
import BrandsSection from "@/components/BrandsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CaseStudySection from "@/components/CaseStudySection";
import ResourceHubSection from "@/components/ResourceHubSection";

const D2C = () => {
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

  return (
    <>
       <Head>
        {/* Title & Description */}
        <title>D2C Translation Solution | Devnagri</title>
        <meta
          name="description"
          content="Direct-to-consumer brands can expand globally with our specialized translation and localization services."
        />
        <meta
          name="keywords"
          content="D2C translation, direct to consumer, brand localization, global expansion"
        />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="P0GXIC42VCPtzhJ0U1AMg6_AV8z5s3IYdZ0-nzjtsH4"
        />

        {/* Open Graph */}
        <meta property="og:title" content="D2C Translation Solution | Devnagri" />
        <meta
          property="og:description"
          content="Direct-to-consumer brands can expand globally with our specialized translation and localization services."
        />
        <meta
          property="og:image"
          content="https://devnagri.com/assets/images/industry-icons/d2c/D2C.png"
        />
        <meta
          property="og:url"
          content="https://devnagri.com/direct-to-consumer-translation"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Devnagri AI" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DevnagriAI" />
        <meta name="twitter:title" content="D2C Translation Solution | Devnagri" />
        <meta
          name="twitter:description"
          content="Direct-to-consumer brands can expand globally with our specialized translation and localization services."
        />
        <meta
          name="twitter:image"
          content="https://devnagri.com/assets/images/industry-icons/d2c/D2C.png"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://devnagri.com/direct-to-consumer-translation"
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
                Turn First-Time Buyers into{" "}
                <span className="blue">Long-Term Customers</span>
              </h1>
              <p className="f-400 pb-2 wow fadeIn">
                Smart means of business communication for D2C Brands
              </p>
              <div className="d-flex align-items-center justify-content-start gap-3 wow fadeIn">
                <Link href="/contact-us" className="white">
                  <button type="btn" className="devnagri-btn mt-3">
                    Connect With Us
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-md-5 mt-lg-0">
              <div className="position-relative wow fadeIn">
                <img
                  src={getImagePath("industry-icons/d2c/D2C.png")}
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
                      src={getImagePath("industry-icons/d2c/increase.png")}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="">
                    <h6 className="f-18 f-500 black">
                      <span className="f-20 f-600 blue">45%</span>
                      <br />
                      Increase in Regional Traffic
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="d-flex gap-3 wow fadeInUp">
                  <div>
                    <img
                      src={getImagePath("industry-icons/d2c/boost.png")}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="">
                    <h6 className="f-18 f-500 black">
                      <span className="f-20 f-600 blue">35%</span>
                      <br />
                      Boost in Conversion Rates
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 m-0 mt-md-4 mt-lg-0">
                <div className="d-flex gap-3 wow fadeInUp">
                  <div>
                    <img
                      src={getImagePath("industry-icons/d2c/reduce.png")}
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
                  "industry-icons/d2c/Control-How-Customers.png"
                )}
                alt="bfsi"
                className="w-100 rounded-4 wow fadeInUp"
              />
            </div>
            <div className="col-lg-7 px-3 px-lg-5 z-1">
              <h2 className="f-40 m-0 f-600 black pb-3 wow fadeInUp">
                Control How Customers{" "}
                <span className="blue">Experience Your Brand</span>
              </h2>
              <p className="f-400 para-color m-0 wow fadeInUp">
                Localization is a part of how users think about your product. We
                help you connect in more ways than just language. Our tools make
                sure that the story you communicate in a market, from campaign
                messages to app flows and package text. That's the difference
                between promotion and customer connection in a D2C chain.
              </p>
              <div className="wow fadeInUp">
                <Link
                  href="https://account.devnagri.com/register"
                  className="white"
                >
                  <button type="btn" className="devnagri-btn mt-3">
                    Start Now
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
                <span className="blue">Compliant, Secure,</span> and Made for
                Scale
              </h2>
              <p className="f-400 para-color m-0 wow fadeInUp">
                When you work in different places, consistency is necessary. Our
                processes follow tight rules for data handling and security,
                such as ISO standards, MeitY alignment, and CERT-In protocols.
                That means your communication with customers grows safely, with
                compliance built in from the start.
              </p>
              <div className="wow fadeInUp">
                <Link href="/contact-us" className="white">
                  <button type="btn" className="devnagri-btn mt-3">
                    {" "}
                    Know More{" "}
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-5 z-1 mt-4 mt-md-5 mt-lg-0">
              <img
                src={getImagePath(
                  "industry-icons/d2c/Compliant-Secure-Made.png"
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
                  "industry-icons/d2c/Automated-Localization-That-Matches-Your-Speed.png"
                )}
                alt="bfsi"
                className="w-100 rounded-4 wow fadeInUp"
              />
            </div>
            <div className="col-lg-7 px-3 px-lg-5 z-1">
              <h2 className="f-40 m-0 f-600 black pb-3 wow fadeInUp">
                Automated Localization That{" "}
                <span className="blue">Matches Your Speed</span>
              </h2>
              <p className="f-400 para-color m-0 wow fadeInUp">
                Post-sale conversations shape brand loyalty. We help you keep
                those conversations going in the language your customer is most
                comfortable with. From support replies to user education,
                returns, and product recommendations, our systems help you
                retain attention where most brands lose it, after the checkout.
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
            Explore D2C Industry
            <span className="blue">-Specific Use Cases</span>
          </h2>
          <div className="row pt-3">
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
                    Localize product catalogs, invoices, and warranty cards
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="explore-industy-product text-center mb-4 mb-lg-0 wow fadeInUp">
                <div className="explore-industy-icon pb-3">
                  <img
                    src={getImagePath(
                      "industry-icons/product-first-platform.png"
                    )}
                    alt="icon"
                    className=""
                  />
                </div>
                <div className="explore-industry-content">
                  <p className="f-400 para-color m-0">
                    Translate mobile app interfaces and direct-to-consumer
                    websites
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
                    Integrate multilingual chatbots for returns, refunds, and
                    order support
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="explore-industy-product text-center mb-4 mb-lg-0 wow fadeInUp">
                <div className="explore-industy-icon pb-3">
                  <img
                    src={getImagePath("industry-icons/language-handbook.png")}
                    alt="icon"
                    className=""
                  />
                </div>
                <div className="explore-industry-content">
                  <p className="f-400 para-color m-0">
                    Automate discount, promo, and offer translation via API
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
                <h4 className="f-38 f-600 black m-0 pb-3 ps-0 ps-lg-5">
                  Your Brand Has Something to Say.{" "}
                  <span className="blue">Make Sure It’s Heard Right.</span>
                </h4>
                <p className="f-500 f-22 para-color m-0 pb-3 ps-0 ps-lg-5">
                  D2C is about being close to your customer.{" "}
                </p>
                <div className="d-flex align-items-center justify-content-start gap-3 ps-0 ps-lg-5">
                  <Link href="/contact-us" className="white">
                    <button type="btn" className="devnagri-btn mt-3">
                      {" "}
                      Book a Call{" "}
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 mt-4 mt-md-5 mt-lg-0">
                <img
                  src={getImagePath(
                    "industry-icons/d2c/D2C-Your-Brand-Has-Something-to-Say.png"
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
            Why D2C Brands <span className="blue">Prefer Devnagri?</span>
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
                      Deep Customer Relation{" "}
                    </h5>
                  </div>
                  <div className="challenges-inner-para">
                    <p className="f-400 para-color m-0">
                      Talk to your consumers in a language they trust.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="challenges-inner mb-4 text-center wow fadeInUp">
                  <div className="challenges-inner-iconbox">
                    <img
                      src={getImagePath("industry-icons/language-handbook.png")}
                      alt="icons"
                      width={50}
                    />
                  </div>
                  <div className="challenges-inner-heading py-2">
                    <h5 className="f-18 black f-600 m-0 ">Lower TTM</h5>
                  </div>
                  <div className="challenges-inner-para">
                    <p className="f-400 para-color m-0">
                      With an automated workflow, kick-start campaigns quickly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="challenges-inner mb-4 text-center wow fadeInUp">
                  <div className="challenges-inner-iconbox">
                    <img
                      src={getImagePath("industry-icons/flexible-payments.png")}
                      alt="icons"
                      width={50}
                    />
                  </div>
                  <div className="challenges-inner-heading py-2">
                    <h5 className="f-18 black f-600 m-0 ">Uniform messaging</h5>
                  </div>
                  <div className="challenges-inner-para">
                    <p className="f-400 para-color m-0">
                      Uniform Tone and language across languages.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="challenges-inner mb-4 text-center wow fadeInUp">
                  <div className="challenges-inner-iconbox">
                    <img
                      src={getImagePath("industry-icons/support.png")}
                      alt="icons"
                      width={50}
                    />
                  </div>
                  <div className="challenges-inner-heading py-2">
                    <h5 className="f-18 black f-600 m-0 ">
                      Ready for Compliance
                    </h5>
                  </div>
                  <div className="challenges-inner-para">
                    <p className="f-400 para-color m-0">
                      Stay safe and in line with ISO, MeitY, and CERT-In
                      standards.
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
                      Automating Workflows
                    </h5>
                  </div>
                  <div className="challenges-inner-para">
                    <p className="f-400 para-color m-0">
                      Smart workflows and pipelines developed for scale.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="challenges-inner mb-4 text-center wow fadeInUp">
                  <div className="challenges-inner-iconbox">
                    <img
                      src={getImagePath("industry-icons/safe.png")}
                      alt="icons"
                      width={50}
                    />
                  </div>
                  <div className="challenges-inner-heading py-2">
                    <h5 className="f-18 black f-600 m-0 ">No Menu resets</h5>
                  </div>
                  <div className="challenges-inner-para">
                    <p className="f-400 para-color m-0">
                      Help customers through every step of their journey.
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
      {/*get started section*/}
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

export default D2C;
