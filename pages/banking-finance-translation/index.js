import React, { useEffect } from "react";
import Link from "next/link";
import { getImagePath } from "../../utils/imageUtils";
import { initializeSliders as initializePageSliders } from "../../utils/initScripts";
import Head from "next/head";
import BrandsSection from "@/components/BrandsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CaseStudySection from "@/components/CaseStudySection";
import ResourceHubSection from "@/components/ResourceHubSection";

const BankingFinanceTranslation = () => {
  
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
        <title>Banking Finance Translation Solution | Devnagri</title>
        <meta
          name="description"
          content="Devnagri provides professional banking and finance translations in Indian languages online. Localize your banking and finance websites and apps in real-time. Explore Devnagri now."
        />
        <meta name="keywords" content="Banking Finance Translation" />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="P0GXIC42VCPtzhJ0U1AMg6_AV8z5s3IYdZ0-nzjtsH4"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Banking Finance Translation Solution | Devnagri"
        />
        <meta
          property="og:description"
          content="Devnagri provides professional banking and finance translations in Indian languages online. Localize your banking and finance websites and apps in real-time. Explore Devnagri now."
        />
        <meta
          property="og:image"
          content="https://devnagri.com/assets/images/industry-icons/BFSI/BFSI.png"
        />
        <meta
          property="og:url"
          content="https://devnagri.com/banking-finance-translation"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Devnagri AI" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DevnagriAI" />
        <meta
          name="twitter:title"
          content="Banking Finance Translation Solution | Devnagri"
        />
        <meta
          name="twitter:description"
          content="Devnagri provides professional banking and finance translations in Indian languages online. Localize your banking and finance websites and apps in real-time. Explore Devnagri now."
        />
        <meta
          name="twitter:image"
          content="https://devnagri.com/assets/images/industry-icons/BFSI/BFSI.png"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://devnagri.com/banking-finance-translation"
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
                Localize your financial communications with{" "}
                <span className="blue">Multilingual Solution</span>
              </h1>
              <p className="f-400 pb-2 wow fadeIn">
                Reduce manual workload using AI-powered process automation in
                multilingual financial communication.
              </p>
              <div className="d-flex align-items-center justify-content-start gap-3 wow fadeIn">
                <Link href="/contact-us" className="white">
                  <button type="btn" className="devnagri-btn mt-3">
                    Schedule a Call
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-md-5 mt-lg-0">
              <div className="position-relative wow fadeIn">
                <img
                  src={getImagePath("industry-icons/BFSI/BFSI.png")}
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
                      src={getImagePath("industry-icons/BFSI/speed.png")}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="">
                    <h6 className="f-18 f-500 black">
                      <span className="f-20 f-600 blue">80%</span>
                      <br />
                      Faster Time-to-Market
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="d-flex gap-3 wow fadeInUp">
                  <div>
                    <img
                      src={getImagePath(
                        "industry-icons/BFSI/cost-reduction.png"
                      )}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="">
                    <h6 className="f-18 f-500 black">
                      <span className="f-20 f-600 blue">60%</span>
                      <br />
                      Cost Reduction
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 m-0 mt-md-4 mt-lg-0">
                <div className="d-flex gap-3 wow fadeInUp">
                  <div>
                    <img
                      src={getImagePath("industry-icons/BFSI/reliability.png")}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="">
                    <h6 className="f-18 f-500 black">
                      <span className="blue">95%</span>
                      <br />
                      Customer Satisfaction Rate
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
                  "industry-icons/BFSI/Diverse-and-Scalable-Multilingual-Fintech-Communication.png"
                )}
                alt="bfsi"
                className="w-100 rounded-4 wow fadeInUp"
              />
            </div>
            <div className="col-lg-7 px-3 px-lg-5 z-1">
              <h2 className="f-40 m-0 f-600 black pb-3 wow fadeInUp">
                Diverse and Scalable Multilingual{" "}
                <span className="blue">Fintech Communication</span>
              </h2>
              <p className="f-400 para-color m-0 wow fadeInUp">
                Specialized support for all your financial content needs,
                including banking documentation, insurance policies, investment
                materials, and regulatory compliance documents. Our AI-powered
                platform understands the nuances of financial terminology. We
                ensure consistent, accurate multilingual communication that
                builds up trust with your target audience while maintaining
                compliance requirements.
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
                Comprehensive{" "}
                <span className="blue">BFSI Localization Solutions</span>
              </h2>
              <p className="f-400 para-color m-0 wow fadeInUp">
                Ensure your financial documents, such as investment reports,
                bank statements, forms, insurance policies, or more, are
                accurate and contextual as per the target languages. Confidently
                grow your business around the world while keeping your clients'
                trust. Use cutting-edge AI technology, trained tools, and
                extensive industry knowledge to give customers unmatched value.
              </p>
              <div className="wow fadeInUp">
                <Link href="/contact-us" className="white">
                  <button type="btn" className="devnagri-btn mt-3">
                    {" "}
                    Let's Discuss{" "}
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-5 z-1 mt-4 mt-md-5 mt-lg-0">
              <img
                src={getImagePath(
                  "industry-icons/BFSI/Comprehensive-BFSI-Localization-Solutions.png"
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
                  "industry-icons/BFSI/Financial-Industry-Compliant-Encryption-Regulations.png"
                )}
                alt="bfsi"
                className="w-100 rounded-4 wow fadeInUp"
              />
            </div>
            <div className="col-lg-7 px-3 px-lg-5 z-1">
              <h2 className="f-40 m-0 f-600 black pb-3 wow fadeInUp">
                Financial Industry Compliant{" "}
                <span className="blue">Encryption and Regulations</span>
              </h2>
              <p className="f-400 para-color m-0 wow fadeInUp">
                Our robust security framework has earned the trust of leading
                financial institutions worldwide. We are ISO 9001:2015 certified
                and GDPR compliant, ensuring your sensitive financial data
                remains protected throughout the process. Our highly secure
                communication solutions are designed specifically for Finance,
                insurance, Fintech and more. Work with us to improve how you
                communicate about finance around the world.
              </p>
              <div className="wow fadeInUp">
                <Link href="/contact-us" className="white">
                  <button type="btn" className="devnagri-btn mt-3">
                    {" "}
                    Contact Us Today{" "}
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
            Explore BFSI-<span className="blue">Specific Solutions</span>
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
                    Translate compliance disclosures, audit reports, and
                    regulatory filings seamlessly
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
                    Localize KYC forms, credit reports, and customer onboarding
                    documents
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
                    Automate multilingual bank statements and transaction
                    summaries via API
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
                    Deploy multilingual chat and voice bot for loan, banking,
                    insurance and support
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
                  <span className="blue">Contact us today</span> to discover how
                  we can support your customer communication with compliance and
                  accuracy.
                </p>
                <div className="d-flex align-items-center justify-content-start gap-3 ps-0 ps-lg-5">
                  <Link
                    href="https://account.devnagri.com/register"
                    className="white"
                  >
                    <button type="btn" className="devnagri-btn mt-3">
                      {" "}
                      Get Started Today{" "}
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 mt-4 mt-md-5 mt-lg-0">
                <img
                  src={getImagePath(
                    "industry-icons/BFSI/BFSI-Contact-us-today-to-discover.png"
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
            Why Choose <span className="blue">Devnagri?</span>
          </h2>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="challenges-inner mb-4 text-center wow fadeInUp">
                  <div className="challenges-inner-iconbox">
                    <img
                      src={getImagePath(
                        "industry-icons/product-first-platform.png"
                      )}
                      alt="icons"
                      width={50}
                    />
                  </div>
                  <div className="challenges-inner-heading py-2">
                    <h5 className="f-18 black f-600 m-0 ">
                      Product-First Platform{" "}
                    </h5>
                  </div>
                  <div className="challenges-inner-para">
                    <p className="f-400 para-color m-0">
                      Made to make content more relevant to local areas.
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
                      Language Handbook on Demand
                    </h5>
                  </div>
                  <div className="challenges-inner-para">
                    <p className="f-400 para-color m-0">
                      Access the industry-specific glossary.
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
                      Flexible Payments{" "}
                    </h5>
                  </div>
                  <div className="challenges-inner-para">
                    <p className="f-400 para-color m-0">
                      Start small and pay as you go.
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
                    <h5 className="f-18 black f-600 m-0 ">24/7 Support</h5>
                  </div>
                  <div className="challenges-inner-para">
                    <p className="f-400 para-color m-0">
                      Dedicated customer support is available.
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
                      Quick Turnaround Times
                    </h5>
                  </div>
                  <div className="challenges-inner-para">
                    <p className="f-400 para-color m-0">
                      Fast shipping without hampering quality.
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
                      Safe and Compliant
                    </h5>
                  </div>
                  <div className="challenges-inner-para">
                    <p className="f-400 para-color m-0">
                      Data security and compliance with regulations.
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

export default BankingFinanceTranslation;
