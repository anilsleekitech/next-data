import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// import { getImagePath } from "../../utils/imageUtils";
import { getImagePath } from "../../utils/imageUtils";
import { initializeSliders } from "../../utils/initializeAnimations";
import { initializeSliders as initializeSlickSliders } from "../../utils/initScripts";
import Head from "next/head";

const About = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;
    initializeSliders();
    initializeSlickSliders();
  }, []);

  // Removed problematic reload effects that were causing infinite loops

  useEffect(() => {
    if (typeof window === "undefined") return;
    const initializeSlider = () => {
      // Check if all required libraries are loaded
      if (typeof window === 'undefined' || !window.$ || !window.$.fn.slick) {
        console.warn('jQuery or Slick slider not loaded');
        return false;
      }
  
      const $ = window.$;
  
      if (
        $(".team-slider").length > 0 &&
        !$(".team-slider").hasClass("slick-initialized")
      ) {
        $(".team-slider").slick({
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          prevArrow:
            '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
          nextArrow:
            '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
          responsive: [
            {
              breakpoint: 1399.99,
              settings: { slidesToShow: 3 },
            },
            {
              breakpoint: 1080,
              settings: { slidesToShow: 2 },
            },
            {
              breakpoint: 768.99,
              settings: { slidesToShow: 1 },
            },
          ],
        });
      }
      return true;
    };
  
    // Try to initialize immediately
    if (!initializeSlider()) {
      // If not successful, wait a bit and try again
      const timer = setTimeout(() => {
        initializeSlider();
      }, 500);
  
      return () => clearTimeout(timer);
    }
  
    // Cleanup
    return () => {
      const $ = window.$;
      if ($ && $(".team-slider").hasClass("slick-initialized")) {
        $(".team-slider").slick("unslick");
      }
    };
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
        <title>About - Devnagri</title>
        <meta name="description" content="Learn about Devnagri, India's leading AI-powered translation platform, and our mission to break language barriers for businesses." />
        <meta name="keywords" content="About Devnagri, Devnagri Mission" />
        <meta name="google-site-verification" content="P0GXIC42VCPtzhJ0U1AMg6_AV8z5s3IYdZ0-nzjtsH4" />
        <meta property="og:title" content="About - Devnagri" />
        <meta property="og:description" content="Learn about Devnagri, India's leading AI-powered translation platform, and our mission to break language barriers for businesses." />
        <meta property="og:image" content="/assets/images/aboutus-image/Our-Story.jpg" />
        <meta property="og:url" content="https://devnagri.com/about-devnagri" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About - Devnagri" />
        <meta name="twitter:description" content="Learn about Devnagri, India's leading AI-powered translation platform, and our mission to break language barriers for businesses." />
        <meta name="twitter:image" content="/assets/images/aboutus-image/Our-Story.jpg" />
        <meta name="twitter:site" content="@DevnagriAI" />
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
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12 col-lg-8 text-center">
              {/* <h6 className="f-14 f-500 black pb-3 m-0 wow fadeInUp">ABOUT</h6> */}
              <h1 className="f-40 f-700 black pb-3 m-0 wow fadeInUp">
                We Make Multilingual Communication{" "}
                <span className="blue">Smart and Local</span>
              </h1>
              <div className="d-flex align-items-center justify-content-center gap-3 wow fadeInUp">
                <Link href="/careers" className="white">
                  <button type="button" className="devnagri-btn mt-3">
                    {" "}
                    Join US{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*our major brand*/}
      <section
        className="brand-stats-section bg-img mb-5"
        // style={{ backgroundImage: "none" }}
      >
        <div className="container">
          <div className="">
            {/* product-brand-slider py-5, classes for white bg */}
            <div className="brand-slider brand-slider-whitestrip">
              <div className="brand-slider-wrapper">
                {/* Add logo images as slides */}
                <div className="brand-item-slide">
                  <img
                    src={getImagePath("brand-meesho.png")}
                    alt="Brand 1"
                    loading="lazy"
                  />
                </div>
                <div className="brand-item-slide">
                  <img
                    src={getImagePath("brand-icici-bank.png")}
                    alt="Brand 2"
                    loading="lazy"
                  />
                </div>
                <div className="brand-item-slide">
                  <img
                    src={getImagePath("brand-idfc.png")}
                    alt="Brand 3"
                    loading="lazy"
                  />
                </div>
                <div className="brand-item-slide">
                  <img
                    src={getImagePath("brand-yes-bank.png")}
                    alt="Brand 4"
                    loading="lazy"
                  />
                </div>
                <div className="brand-item-slide">
                  <img
                    src={getImagePath("brand-sbi-mutual.png")}
                    alt="Brand 5"
                    loading="lazy"
                  />
                </div>
                <div className="brand-item-slide">
                  <img
                    src={getImagePath("brand-tataia.png")}
                    alt="Brand 6"
                    loading="lazy"
                  />
                </div>
                <div className="brand-item-slide">
                  <img
                    src={getImagePath("brand-nestle.png")}
                    alt="Brand 7"
                    loading="lazy"
                  />
                </div>
                <div className="brand-item-slide">
                  <img
                    src={getImagePath("brand-my-gov.png")}
                    alt="Brand 8"
                    loading="lazy"
                  />
                </div>
                <div className="brand-item-slide">
                  <img
                    src={getImagePath("brand-nitiayog.png")}
                    alt="Brand 9"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Our Story*/}
      <section
        className="our-story py-5 position-relative bg-img"
        style={{ backgroundImage: `url(${getImagePath("testimonil-bg.png")})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow fadeInUp">
              <h2 className="f-40 f-600 black m-0 pb-4 text-start wow fadeInUp">
                Our <span className="blue">Story</span>
              </h2>
              <p className="f-400 m-0 pb-3 para-color">
                Nakul Kundra and Himanshu Sharma, our co-founders, thought that
                digital communication was a huge challenge. A lot of the stuff
                on the internet was in English, which meant that a lot of people
                who would have liked to read it in their language couldn't. They
                knew that businesses had problems trusting people and talking to
                those who lived outside of big cities. Businesses have trouble
                reaching Tier 2 and Tier 3 markets and talking to customers in
                diverse regions because of the language barrier.
              </p>
              <p className="f-400 m-0 para-color">
                Businesses that need to talk to each other well, both locally
                and on a broad scale, use our solutions. They might be anything
                from digital banking dashboards to regulatory advisories. We
                provide in-depth coverage with industry-level accuracy in over
                20 Indian languages and over 20 other languages from around the
                world.
              </p>
            </div>
            <div className="col-lg-6 z-1 mt-4 mt-md-5 mt-lg-0">
              <div className="row">
                <div className="col-md-12 pb-4 wow fadeInUp">
                  <img
                    src={getImagePath("aboutus-image/Our-Story.jpg")}
                    className="w-100 rounded-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*our values*/}
      <section className="What-we-do" style={{ backgroundColor: "#EEF5FF" }}>
        <div className="container">
          <h2 className="text-center pb-4 f-40 f-600 black wow fadeInUp">
            Devnagri is a movement,{" "}
            <span className="blue">fuelled by Innovation and AI Tech</span>
          </h2>
          <div className="">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-4 col-md-6 text-center wow fadeInUp">
                <div className="what-we-do-main">
                  <div className="what-we-do-inner">
                    <div className="icons">
                      <img
                        src={getImagePath("aboutus-image/Innovation.png")}
                        alt=""
                        style={{ maxWidth: "50%" }}
                      />
                    </div>
                    <h5 className="f-22 f-600 black pt-3">
                      Language Inclusion for All
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center wow fadeInUp">
                <div className="what-we-do-main">
                  <div className="what-we-do-inner">
                    <div className="icons">
                      <img
                        src={getImagePath("aboutus-image/integrity.png")}
                        alt=""
                        style={{ maxWidth: "50%" }}
                      />
                    </div>
                    <h5 className="f-22 f-600 black pt-3">
                      Bridge Digital Divides
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center wow fadeInUp">
                <div className="what-we-do-main">
                  <div className="what-we-do-inner">
                    <div className="icons">
                      <img
                        src={getImagePath("aboutus-image/simple-scable.png")}
                        alt=""
                        style={{ maxWidth: "50%" }}
                      />
                    </div>
                    <h5 className="f-22 f-600 black pt-3">
                      Empower Rural Voices
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center wow fadeInUp">
                <div className="what-we-do-main">
                  <div className="what-we-do-inner">
                    <div className="icons">
                      <img
                        src={getImagePath("aboutus-image/customer-approch.png")}
                        alt=""
                        style={{ maxWidth: "41%" }}
                      />
                    </div>
                    <h5 className="f-22 f-600 black pt-3">
                      Preserving Linguistic Diversity
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center wow fadeInUp">
                <div className="what-we-do-main">
                  <div className="what-we-do-inner">
                    <div className="icons">
                      <img
                        src={getImagePath(
                          "aboutus-image/Online-world-pana.png"
                        )}
                        alt=""
                        style={{ maxWidth: "63%" }}
                      />
                    </div>
                    <h5 className="f-22 f-600 black pt-3">
                      Accessible Public Information
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center wow fadeInUp">
                <div className="what-we-do-main">
                  <div className="what-we-do-inner">
                    <div className="icons">
                      <img
                        src={getImagePath(
                          "aboutus-image/Online-world-cuate.png"
                        )}
                        alt=""
                        style={{ maxWidth: "50%" }}
                      />
                    </div>
                    <h5 className="f-22 f-600 black pt-3">
                      Tech for Social Good
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Co-founders*/}
      <section className="our-cofounders py-5">
        <div className="container">
          <h2 className="f-40 f-600 black text-center pb-3 wow fadeInUp">
            Meet the <span className="blue">Founders</span>
          </h2>
          <div className="row">
            <div className="col-lg-6 col-md-6 wow fadeInUp">
              <div className="row co-founder-card align-items-center">
                <div className="col-xl-6 col-lg-12">
                  <div className="co-founder-section">
                    <div className="co-founder-img">
                      <img
                        src={getImagePath("aboutus-image/nakul-kundra.png")}
                        alt="co-founder"
                        className="w-100 rounded-5 pb-2"
                      />
                      <h6 className="f-18 f-600 black m-0 ps-0 ps-xl-3">
                        Nakul Kundra
                      </h6>
                      <p className="m-0 para-color f-400 ps-0 ps-xl-3">
                        Co-Founder
                      </p>
                      {/* <p class="m-0 para-color f-400 ps-3">Sales & Marketing</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12">
                  <p className="m-0 para-color f-400">
                    Nakul drives market strategy, collaborations, and client
                    growth across regulated areas since he knows a lot about
                    what businesses require. His experience in scaling B2B
                    platforms ensures that Devnagri AI stays in line with the
                    changing needs of both public and private organizations.
                  </p>
                  <span className="follow-icon">
                    <Link href="https://www.linkedin.com/in/kundra-nakul/" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-linkedin" />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 wow fadeInUp mt-4 mt-md-0 mt-lg-0">
              <div className="row co-founder-card align-items-center">
                <div className="col-xl-6 col-lg-12">
                  <div className="co-founder-section">
                    <div className="co-founder-img">
                      <img
                        src={getImagePath("aboutus-image/himanshu-sharma.png")}
                        alt="co-founder"
                        className="w-100 rounded-5 pb-2"
                      />
                      <h6 className="f-18 f-600 black m-0 ps-0 ps-xl-3">
                        Himanshu Sharma
                      </h6>
                      <p className="m-0 para-color f-400 ps-0 ps-xl-3">
                        Co-Founder
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12">
                  <p className="m-0 para-color f-400">
                    Himanshu is in charge of our product and technical teams. He
                    makes sure that every solution is strong, safe, and able to
                    work in the real world. Devnagri AI is reliable on a large
                    scale since it focuses on the integrity of tech
                    infrastructure and systems.
                  </p>
                  <span className="follow-icon">
                    <Link href="https://www.linkedin.com/in/ihimansh/" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-linkedin" />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*our team*/}
      <section
        className="our-team py-5 bg-img"
        style={{ backgroundImage: `url(${getImagePath("testimonil-bg.png")})` }}
      >
        <div className="container">
          <div className=" row justify-content-center">
            <div className="col-md-8">
              <h2 className="f-40 f-600 black text-center pb-2 wow fadeInUp">
                Our <span className="blue">Team</span>
              </h2>
              <p className="f-400 para-color m-0 pb-4 text-center wow fadeInUp">
                We are a diverse group of AI engineers, product designers,
                linguists, and strategists who all work together to make
                communication possible in every language.
              </p>
            </div>
          </div>
          <div className="team-slider position-relative wow fadeInUp">
            {/* Team Member 1 */}
            <div key="arpit-sharma">
              <div className="team-card rounded-4">
                <div className="team-card-img">
                  <img
                    src={getImagePath("aboutus-image/arpit.jpg")}
                    alt="team"
                    className="w-100 rounded-4"
                  />
                </div>
                <div className="team-card-detils">
                  <div className="team-car-detils-left">
                    <h6 className="f-18 f-600 black m-0">Arpit Sharma</h6>
                    <p className="m-0 para-color f-400">
                      SVP- Customer Acquisition
                    </p>
                  </div>
                  <div className="team-car-detils-right">
                    <span className="follow-icon">
                      <Link href="https://www.linkedin.com/in/arpit-sharma-51884b50/" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin" />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div key="manmeet-kaur">
              <div className="team-card rounded-4">
                <div className="team-card-img">
                  <img
                    src={getImagePath("aboutus-image/manmeet-kaur.jpg")}
                    alt="team"
                    className="w-100 rounded-4"
                  />
                </div>
                <div className="team-card-detils">
                  <div className="team-car-detils-left">
                    <h6 className="f-18 f-600 black m-0">Manmeet Kaur</h6>
                    <p className="m-0 para-color f-400">
                      SVP – Customer Success
                    </p>
                  </div>
                  <div className="team-car-detils-right">
                    <span className="follow-icon">
                      <Link href="https://www.linkedin.com/in/manmeetka/" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin" />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div key="michael-singh">
              <div className="team-card rounded-4">
                <div className="team-card-img">
                  <img
                    src={getImagePath("aboutus-image/Michael-Singh.jpg")}
                    alt="team"
                    className="w-100 rounded-4"
                  />
                </div>
                <div className="team-card-detils">
                  <div className="team-car-detils-left">
                    <h6 className="f-18 f-600 black m-0">Michael Singh</h6>
                    <p className="m-0 para-color f-400">VP-CRM</p>
                  </div>
                  <div className="team-car-detils-right">
                    <span className="follow-icon">
                      <Link href="#">
                        <i className="bi bi-linkedin" />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div key="jaspreet-singh">
              <div className="team-card rounded-4">
                <div className="team-card-img">
                  <img
                    src={getImagePath("aboutus-image/jaspreet-oberoi.jpg")}
                    alt="team"
                    className="w-100 rounded-4"
                  />
                </div>
                <div className="team-card-detils">
                  <div className="team-car-detils-left">
                    <h6 className="f-18 f-600 black m-0">Jaspreet Singh</h6>
                    <p className="m-0 para-color f-400">Head of Engineering</p>
                  </div>
                  <div className="team-car-detils-right">
                    <span className="follow-icon">
                      <Link href="https://www.linkedin.com/in/jasoberoi/" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin" />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div key="shima-kundra">
              <div className="team-card rounded-4">
                <div className="team-card-img">
                  <img
                    src={getImagePath("aboutus-image/shima-m-kundra.png")}
                    alt="team"
                    className="w-100 rounded-4"
                  />
                </div>
                <div className="team-card-detils">
                  <div className="team-car-detils-left">
                    <h6 className="f-18 f-600 black m-0">Shima M Kundra</h6>
                    <p className="m-0 para-color f-400">HR Head</p>
                  </div>
                  <div className="team-car-detils-right">
                    <span className="follow-icon">
                      <Link href="https://www.linkedin.com/in/shima-m-kundra-a113961aa/" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin" />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                data-target={60}
                data-suffix="%"
              >
                0%
              </div>
              <p className="custom-label f-400 m-0">Improvement in sales</p>
            </div>
            <div className="col-6 col-md-4 custom-stats-col wow fadeInUp">
              <div
                className="custom-counter f-48 f-600 pb-3"
                data-target={5}
                data-suffix="x"
              >
                0x
              </div>
              <p className="custom-label f-400 m-0">Faster Operations</p>
            </div>
            <div className="col-6 col-md-4 custom-stats-col wow fadeInUp">
              <div
                className="custom-counter f-48 f-600 pb-3"
                data-target={45}
                data-suffix="%"
              >
                0%
              </div>
              <p className="custom-label f-400 m-0">
                {" "}
                Reduction In Operational Costs
              </p>
            </div>
          </div>
          <div className="text-center wow fadeInUp mt-5">
            <Link href="https://account.devnagri.com/register" target="_blank" rel="noopener noreferrer" className="white">
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

export default About;
