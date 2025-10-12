import React, { useEffect, useRef } from 'react'
import Link from 'next/link';
import { getImagePath } from '../../utils/imageUtils';
import FAQAccordion from '../../components/FAQAccordion';
import { initializeSliders as initializePageSliders } from '../../utils/initScripts';
import Head from 'next/head';
import BrandsSection from '@/components/BrandsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CaseStudySection from '@/components/CaseStudySection';
import ResourceHubSection from '@/components/ResourceHubSection';
 

const DocumentTranslationWorkflow = () => {

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
            video.play().catch(() => { }); // resume if in view
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
      },[])

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
        {/* Title & Description */}
        <title>Document Translation - Devnagri</title>
        <meta
          name="description"
          content="Document translation is very necessary for doing business globally. Translate your documents word to word according to your requirements."
        />
        <meta name="keywords" content="Document Translation" />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="P0GXIC42VCPtzhJ0U1AMg6_AV8z5s3IYdZ0-nzjtsH4"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Document Translation - Devnagri" />
        <meta
          property="og:description"
          content="Document translation is very necessary for doing business globally. Translate your documents word to word according to your requirements."
        />
        <meta
          property="og:image"
          content="https://devnagri.com/assets/images/products-images/document-translation/document-translation-cta.png"
        />
        <meta
          property="og:url"
          content="https://devnagri.com/document-translation"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Devnagri AI" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DevnagriAI" />
        <meta name="twitter:title" content="Document Translation - Devnagri" />
        <meta
          name="twitter:description"
          content="Document translation is very necessary for doing business globally. Translate your documents word to word according to your requirements."
        />
        <meta
          name="twitter:image"
          content="https://devnagri.com/assets/images/products-images/document-translation/document-translation-cta.png"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://devnagri.com/document-translation" />
      </Head>
  {/* Hero Section */}
  <section
    className="hero-section bg-img"
    style={{
      backgroundImage: `url(${getImagePath('simple-banner-background.png')})`
    }}
  >
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h1 className="f-40 f-700 black pb-2 wow fadeIn">
            Enterprise Grade Multilingual{" "}
            <span className="blue">Document Translation</span>
          </h1>
          <p className="f-400 pb-2 pe-3 wow fadeIn">
            Our Document Translation Engine gives your team a secure, automated,
            and review-friendly process powered by Devnagri's AI Technology.
          </p>
          <div className="d-flex flex-wrap align-items-center justify-content-start gap-3 wow fadeIn">
            <Link href="/book-a-demo" className="white"><button type="btn" className="devnagri-btn mt-3">
                {" "}
                Schedule Call{" "}
            </button></Link>
            <Link href="https://account.devnagri.com/register" className=""><button type="btn" className="devnagri-btn devnagri-white-btn mt-3 blue">
                {" "}
                Start Now{" "}
            </button></Link>
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
                src={getImagePath('product-pages-viedos/Document Translation_4.mp4')}
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
                  src={getImagePath('products-images/documents.png')}
                  width={50}
                  height={50}
                />
              </div>
              <div className="">
                <h6 className="f-18 f-500 black">
                  <span className="f-20 f-600 blue">2,000+</span> multilingual
                  documents processed weekly
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="d-flex gap-3 wow fadeInUp">
              <div>
                <img
                  src={getImagePath('products-images/speed.png')}
                  width={50}
                  height={50}
                />
              </div>
              <div className="">
                <h6 className="f-18 f-500 black">
                  Up to <span className="f-20 f-600 blue">70%</span> faster than
                  traditional translation
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 m-0 mt-md-4 mt-lg-0">
            <div className="d-flex gap-3 wow fadeInUp">
              <div>
                <img
                  src={getImagePath('products-images/trusted.png')}
                  width={50}
                  height={50}
                />
              </div>
              <div className="">
                <h6 className="f-18 f-500 black">
                  <span className="f-20 f-600 blue">Trusted by</span> brands for
                  speed, accuracy, and quality
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
    style={{ backgroundImage: `url(${getImagePath('testimonil-bg.png')})` }}
  >
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <img
            src={getImagePath('products-images/document-translation/No-Formatting-Loss.png')}
            className="w-100 wow fadeInUp"
          />
        </div>
        <div className="col-lg-6 mt-2 mt-md-5 mt-lg-0">
          <h2 className="f-40 f-600 pb-3 m-0 black wow fadeInUp">
            No Formatting <span className="blue">Loss</span>
          </h2>
          <p className="f-400 para-color m-0 wow fadeInUp">
            Your layout stays exactly how you designed it. Translate your files
            into 40+ languages, without losing meaning, tone, or nuance. Whether
            it’s a legal contract or marketing copy, we get every word
            accurately.
          </p>
          <div className="wow fadeInUp">
            <Link href="https://account.devnagri.com/register" className="white"><button
              type="btn"
              className="devnagri-btn wow fadeIn animated mt-3"
            >
                <i className="bi bi-upload" />
                &nbsp;&nbsp;Upload &amp; Try Now
                </button></Link>
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
            Industry-Ready <span className="blue">Precision</span>
          </h2>
          <p className="f-400 para-color m-0 wow fadeInUp">
            From legal and finance to government and e-commerce, our engine is
            trained for your domain. Localize in a go for compliance, clarity,
            and context.
          </p>
          <div className="wow fadeInUp">
            <Link href="https://account.devnagri.com/register" className="white"><button type="btn" className="devnagri-btn mt-3">
                {" "}
                Start Now
            </button></Link>
          </div>
        </div>
        <div className="col-lg-6 mt-2 mt-md-5 mt-lg-0">
          <img
            src={getImagePath('products-images/document-translation/Industry-Ready-Precision.png')}
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
            src={getImagePath('products-images/document-translation/Ready-for-Review-&-Delivery.png')}
            className="w-100 wow fadeInUp"
          />
        </div>
        <div className="col-lg-6 mt-2 mt-md-5 mt-lg-0">
          <h2 className="f-40 f-600 pb-3 m-0 black wow fadeInUp">
            Ready for Review <span className="blue">&amp; Delivery</span>
          </h2>
          <p className="f-400 para-color m-0 wow fadeInUp">
            We treat your data with the same care you do. Get translations that
            are not just machine-generated but QA-checked. Your documents are
            encrypted, processed securely, and never reused.
          </p>
          <div className="wow fadeInUp">
            <Link href="https://account.devnagri.com/register" className="white"><button type="btn" className="devnagri-btn mt-3">
                Experience Now
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*key feature*/}
  <section
    className="problem-we-solve py-5 bg-img"
    style={{ backgroundImage: `url(${getImagePath('testimonil-bg.png')})` }}
  >
    <div className="container">
      <h2 className="text-center f-40 f-600 pb-4 black wow fadeInUp">
        Why Choose Devnagri for{" "}
        <span className="blue">Document Translation?</span>
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
                    src={getImagePath('tick-circle.png')}
                    width={26}
                    height={26}
                  />
                </div>
                <div>
                  <p className="f-400 m-0 pb-1">
                    <b className="f-22 f-600">
                      Handles Sensitive Files with Care
                    </b>
                  </p>
                  <p className="f-400 m-0">
                    Meets enterprise-grade security standards and full
                    confidentiality protocols
                  </p>
                </div>
              </li>
              <li className="f-400 black mb-3 d-flex gap-3 gap-lg-1">
                <div
                  className="width-5"
                  style={{ position: "relative", top: 5 }}
                >
                  <img
                    src={getImagePath('tick-circle.png')}
                    width={26}
                    height={26}
                  />
                </div>
                <div>
                  <p className="f-400 m-0 pb-1">
                    <b className="f-22 f-600">Format-Friendly</b>
                  </p>
                  <p className="f-400 m-0">
                    Supports Word, PDF, Excel, images, and more, with layout
                    preservation
                  </p>
                </div>
              </li>
              <li className="f-400 black mb-3 d-flex gap-3 gap-lg-1">
                <div
                  className="width-5"
                  style={{ position: "relative", top: 5 }}
                >
                  <img
                    src={getImagePath('tick-circle.png')}
                    width={26}
                    height={26}
                  />
                </div>
                <div>
                  <p className="f-400 m-0 pb-1">
                    <b className="f-22 f-600">Built for Real-World Teams</b>
                  </p>
                  <p className="f-400 m-0">
                    You stay in control, monitor, review, and approve every
                    stage of the process
                  </p>
                </div>
              </li>
              <li className="f-400 black mb-3 d-flex gap-3 gap-lg-1">
                <div
                  className="width-5"
                  style={{ position: "relative", top: 5 }}
                >
                  <img
                    src={getImagePath('tick-circle.png')}
                    width={26}
                    height={26}
                  />
                </div>
                <div>
                  <p className="f-400 m-0 pb-1">
                    <b className="f-22 f-600">Enterprise-Grade Security</b>
                    <br />
                  </p>
                  <p className="f-400 m-0">
                    From legal affidavits to regulatory filings, your documents
                    are handled with the highest confidentiality.{" "}
                  </p>
                </div>
              </li>
              <li className="f-400 black mb-3 d-flex gap-3 gap-lg-1">
                <div
                  className="width-5"
                  style={{ position: "relative", top: 5 }}
                >
                  <img
                    src={getImagePath('tick-circle.png')}
                    width={26}
                    height={26}
                  />
                </div>
                <div>
                  <p className="f-400 m-0 pb-1">
                    <b className="f-22 f-600">Domain-Aware Translation</b>
                    <br />
                  </p>
                  <p className="f-400 m-0">
                    Our AI understands the difference between a financial
                    statement and a product brochure.{" "}
                  </p>
                </div>
              </li>
            </ul>
            <div className="d-flex flex-wrap align-items-center justify-content-start gap-3 wow fadeInUp">
              <Link href="/book-a-demo" className="white"><button type="btn" className="devnagri-btn mt-3">
                  <img
                    src={getImagePath('video-play-btn.png')}
                    className="pe-1"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />{" "}
                  Book a Demo{" "}
              </button></Link>
              <Link href="https://account.devnagri.com/register" className=""><button
                type="btn"
                className="devnagri-btn devnagri-white-btn mt-3 blue"
              >
                  {" "}
                  Get Strated{" "}
                </button></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-4 mt-md-5 mt-lg-0">
          <img
            src={getImagePath('products-images/document-translation/Why-Choose-Devnagri-for-Document-Translation.png')}
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
            <h4 className="f-38 f-600 black m-0 pb-3 ps-0 ps-lg-5">
              Smarter <span className="blue">Document Translation</span> Starts
              Here
            </h4>
            <p className="f-400 para-color m-0 pb-3 ps-0 ps-lg-5">
              Join hundreds of teams using Devnagri to turn static content into
              multilingual assets, accurately, securely, and at scale.
            </p>
            <div className="d-flex flex-wrap align-items-center justify-content-start gap-3 ps-0 ps-lg-5">
              <button
                type="btn"
                className="devnagri-btn mt-3"
              >
                <Link href="/contact-us" className="white">
                  {" "}
                  Talk to an Expert{" "}
                  </Link>
              </button>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-md-5 mt-lg-0">
            <img
              src={getImagePath('products-images/document-translation/document-translation-cta.png')}
              alt="cta-bg"
              className="w-100 rounded-4"
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
   <FAQAccordion page="documentTranslation" />
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
            data-target={70}
            data-suffix="%"
          >
            0%
          </div>
          <p className="custom-label f-400 m-0">Faster Turnaround Time</p>
        </div>
        <div className="col-6 col-md-4 custom-stats-col wow fadeInUp">
          <div
            className="custom-counter f-48 f-600 pb-3"
            data-target={2}
            data-decimal="true"
            data-suffix="x"
          >
            x
          </div>
          <p className="custom-label f-400 m-0">
            Improvement in Regional Accessibility
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
          <p className="custom-label f-400 m-0">Reduced Translation Costs</p>
        </div>
       
      </div>
      <div className="text-center wow fadeInUp mt-5">
        <Link href="https://account.devnagri.com/register" className="white"><button type="btn" className="devnagri-btn">
            {" "}
            Start Now
        </button></Link>
      </div>
    </div>
  </section>
</>

  )
}

export default DocumentTranslationWorkflow
