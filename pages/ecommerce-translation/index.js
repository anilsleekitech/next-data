import React, { useEffect } from "react";
import Link from "next/link";
import { getImagePath } from "../../utils/imageUtils";
import { initializeSliders as initializePageSliders } from "../../utils/initScripts";
import Head from "next/head";
import BrandsSection from "@/components/BrandsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CaseStudySection from "@/components/CaseStudySection";
import ResourceHubSection from "@/components/ResourceHubSection";

const EcommerceTranslation = () => {
  
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
        <title>eCommerce Translation Solution | Devnagri</title>
        <meta
          name="description"
          content="Devnagri offers eCommerce translation solutions for retailers of any size. Translate product descriptions and user reviews in a single click."
        />
        <meta name="keywords" content="eCommerce Translation" />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="P0GXIC42VCPtzhJ0U1AMg6_AV8z5s3IYdZ0-nzjtsH4"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="eCommerce Translation Solution | Devnagri"
        />
        <meta
          property="og:description"
          content="Devnagri offers eCommerce translation solutions for retailers of any size. Translate product descriptions and user reviews in a single click."
        />
        <meta
          property="og:image"
          content="https://devnagri.com/assets/images/industry-icons/ecommerce/e-commerce.png"
        />
        <meta
          property="og:url"
          content="https://devnagri.com/ecommerce-translation"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Devnagri AI" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DevnagriAI" />
        <meta
          name="twitter:title"
          content="eCommerce Translation Solution | Devnagri"
        />
        <meta
          name="twitter:description"
          content="Devnagri offers eCommerce translation solutions for retailers of any size. Translate product descriptions and user reviews in a single click."
        />
        <meta
          name="twitter:image"
          content="https://devnagri.com/assets/images/industry-icons/ecommerce/e-commerce.png"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://devnagri.com/ecommerce-translation"
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
                Turn Multilingual Communication into{" "}
                <span className="blue">Cross-market Conversion.</span>
              </h1>
              <p className="f-400 pb-2 wow fadeIn">
                Witness the Real Impact in Consumer Service Communication
              </p>
              <div className="d-flex align-items-center justify-content-start gap-3 wow fadeIn">
                <Link
                  href="https://account.devnagri.com/register"
                  className="white"
                >
                  <button type="btn" className="devnagri-btn mt-3">
                    Localize Smarter
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-md-5 mt-lg-0">
              <div className="position-relative wow fadeIn">
                <img
                  src={getImagePath("industry-icons/ecommerce/e-commerce.png")}
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
                      src={getImagePath(
                        "industry-icons/ecommerce/reduction.png"
                      )}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="">
                    <h6 className="f-18 f-500 black">
                      <span className="f-20 f-600 blue">70% reduction</span>
                      <br />
                      in cart abandonment from regional markets
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="d-flex gap-3 wow fadeInUp">
                  <div>
                    <img
                      src={getImagePath(
                        "industry-icons/ecommerce/4x-faster.png"
                      )}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="">
                    <h6 className="f-18 f-500 black">
                      <span className="f-20 f-600 blue">4x faster</span>
                      <br />
                      seller onboarding across multilingual categories
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 m-0 mt-md-4 mt-lg-0">
                <div className="d-flex gap-3 wow fadeInUp">
                  <div>
                    <img
                      src={getImagePath(
                        "industry-icons/ecommerce/increase.png"
                      )}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="">
                    <h6 className="f-18 f-500 black">
                      <span className="blue">60% increase</span>
                      <br />
                      in regional page engagement after localization
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
                  "industry-icons/ecommerce/Engagement-That-Drives-Promotion-Across-Borders.png"
                )}
                alt="bfsi"
                className="w-100 rounded-4 wow fadeInUp"
              />
            </div>
            <div className="col-lg-7 px-3 px-lg-5 z-1 mt-4 mt-md-5 mt-lg-0">
              <h2 className="f-40 m-0 f-600 black pb-3 wow fadeInUp">
                Engagement That Drives{" "}
                <span className="blue">Promotion Across Borders</span>
              </h2>
              <p className="f-400 para-color m-0 wow fadeInUp">
                eCommerce is as much about momentum as it is about visibility.
                Our solutions give you linguistic precision and cultural fluency
                so every discount, announcement, and campaign lands with the
                intended impact. From seasonal promotions to influencer-led
                marketing in local languages, we make sure your product speaks
                the language your market shops in.
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
      {/*Industry data*/}
      <section
        className="industry-page-calltoaction position-relative py-5"
        style={{ backgroundColor: "#EEF5FF" }}
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-7 px-3 px-lg-5 z-1">
              <h2 className="f-40 m-0 f-600 black pb-3 wow fadeInUp">
                Clear and Contextual Conversation{" "}
                <span className="blue">in Every Language</span>
              </h2>
              <p className="f-400 para-color m-0 wow fadeInUp">
                Your clients need to be able to trust the information you give
                them, especially when it comes to private information like
                payments, personal information, or product conditions. Devnagri
                makes sure that every word resonates as accurately and reliably
                as the industry standards. Your multilingual content makes
                clients feel safe, informed, and confident every step of the
                way.
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
            <div className="col-lg-5 z-1 mt-4 mt-md-5 mt-lg-0">
              <img
                src={getImagePath(
                  "industry-icons/ecommerce/Clear-and-Contextual-Conversation.png"
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
                  "industry-icons/ecommerce/Specialized-Translation-for-Experience-Retention.png"
                )}
                alt="bfsi"
                className="w-100 rounded-4 wow fadeInUp"
              />
            </div>
            <div className="col-lg-7 px-3 px-lg-5 z-1 mt-4 mt-md-5 mt-lg-0">
              <h2 className="f-40 m-0 f-600 black pb-3 wow fadeInUp">
                Specially Designed Journey for Consumer{" "}
                <span className="blue">Experience and Retention</span>
              </h2>
              <p className="f-400 para-color m-0 wow fadeInUp">
                The buyer's experience doesn't end at checkout. Each touchpoint
                is important, from product descriptions to delivery updates to
                requests for reviews to loyalty promotions. Devnagri lets your
                brand voice stay the same in every language, which helps with
                clarity after the sale, confidence in the product, and long-term
                engagement. That means fewer returns, improved customer
                satisfaction, and better brand memory in all of your markets.
              </p>
              <div className="wow fadeInUp">
                <Link
                  href="https://account.devnagri.com/register"
                  className="white"
                >
                  <button type="btn" className="devnagri-btn mt-3">
                    {" "}
                    Start Now{" "}
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
          <h2 className="f-40 f-600 black m-0 pb-3 text-center wow fadeInUp">
            Explore eCommerce <span className="blue">Specific Use Cases</span>
          </h2>
          <div className="row pt-3">
            <div className="col-lg-3 col-md-6">
              <div className="explore-industy-product mb-4 mb-lg-0 text-center wow fadeInUp">
                <div className="explore-industy-icon pb-3">
                  <img
                    src={getImagePath("industry-icons/language.png")}
                    alt="icon"
                    className=""
                  />
                </div>
                <div className="explore-industry-content">
                  <p className="f-400 para-color m-0">
                    Translate product listings, customer reviews, and seller
                    policies accurately
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="explore-industy-product mb-4 mb-lg-0 text-center wow fadeInUp">
                <div className="explore-industy-icon pb-3">
                  <img
                    src={getImagePath("industry-icons/documents.png")}
                    alt="icon"
                    className=""
                  />
                </div>
                <div className="explore-industry-content">
                  <p className="f-400 para-color m-0">
                    Localize checkout processes, shipping, and payment gateway
                    screens
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="explore-industy-product mb-4 mb-lg-0 text-center wow fadeInUp">
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
                    Enable multilingual bot support for order tracking and
                    assistance
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="explore-industy-product mb-4 mb-lg-0 text-center wow fadeInUp">
                <div className="explore-industy-icon pb-3">
                  <img
                    src={getImagePath("industry-icons/ocr.png")}
                    alt="icon"
                    className=""
                  />
                </div>
                <div className="explore-industry-content">
                  <p className="f-400 para-color m-0">
                    Bulk translate SKUs and metadata using scalable API
                    integration
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
                  <span className="blue">Your next 10,000 customers</span> may
                  not speak English, and they don’t need to. Let Devnagri help
                  you meet them where they are, in a language they trust.
                </p>
                <div className="d-flex align-items-center justify-content-start gap-3 ps-0 ps-lg-5">
                  <Link href="/contact-us" className="white">
                    <button type="btn" className="devnagri-btn mt-3">
                      {" "}
                      Schedule a Call{" "}
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 mt-4 mt-md-5 mt-lg-0">
                <img
                  src={getImagePath(
                    "industry-icons/ecommerce/E-commerce-Your-next-10,000-customers.png"
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
            Devnagri Advantages for{" "}
            <span className="blue">eCommerce Brands</span>
          </h2>
          <div className="container">
            <div className="row">
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
                      Faster Market Reach{" "}
                    </h5>
                  </div>
                  <div className="challenges-inner-para">
                    <p className="f-400 para-color m-0">
                      Use real-time localization, quickly launch in new markets.
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
                    <h5 className="f-18 black f-600 m-0 ">
                      Boosted Conversions
                    </h5>
                  </div>
                  <div className="challenges-inner-para">
                    <p className="f-400 para-color m-0">
                      Use product content in the local language to get more
                      sales.
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
                    <h5 className="f-18 black f-600 m-0 ">
                      Reduced Support Load{" "}
                    </h5>
                  </div>
                  <div className="challenges-inner-para">
                    <p className="f-400 para-color m-0">
                      Fewer inquiries with clear communication in the local
                      language.
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
                    <h5 className="f-18 black f-600 m-0 ">
                      SEO-Friendly Translations
                    </h5>
                  </div>
                  <div className="challenges-inner-para">
                    <p className="f-400 para-color m-0">
                      Make your platform accessible by optimizing it for search
                      engines.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="challenges-inner mb-4 text-center wow fadeInUp">
                  <div className="challenges-inner-iconbox">
                    <img
                      src={getImagePath(
                        "industry-icons/artificial-intelligence.png"
                      )}
                      alt="icons"
                      width={50}
                    />
                  </div>
                  <div className="challenges-inner-heading py-2">
                    <h5 className="f-18 black f-600 m-0 ">
                      Consistent Brand Voice
                    </h5>
                  </div>
                  <div className="challenges-inner-para">
                    <p className="f-400 para-color m-0">
                      Keep the same tone and accuracy in all languages.
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
                    <h5 className="f-18 black f-600 m-0 ">
                      Easy System Integration
                    </h5>
                  </div>
                  <div className="challenges-inner-para">
                    <p className="f-400 para-color m-0">
                      Connect to your CMS or platform without any trouble.
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

export default EcommerceTranslation;
