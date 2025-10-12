import React, { useEffect } from "react";
import Link from "next/link";
import { getImagePath } from "../../utils/imageUtils";
import Head from "next/head";

const Contact = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "46866158",
          formId: "021295de-0a03-4c25-9c5b-2acd7b1db8f7",
          region: "na1",
          target: "#hubspotForm",
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        {/* Title & Description */}
        <title>Contact | Devnagri</title>
        <meta
          name="description"
          content="Get in touch with Devnagri for AI-powered translation solutions. Contact our experts for multilingual localization services."
        />
        <meta
          name="keywords"
          content="Contact Devnagri, translation services, multilingual support, AI translation contact"
        />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="P0GXIC42VCPtzhJ0U1AMg6_AV8z5s3IYdZ0-nzjtsH4"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Contact | Devnagri" />
        <meta
          property="og:description"
          content="Get in touch with Devnagri for AI-powered translation solutions. Contact our experts for multilingual localization services."
        />
        <meta
          property="og:image"
          content="https://devnagri.com/assets/images/products-images/Contact us .jpg"
        />
        <meta property="og:url" content="https://devnagri.com/contact-us" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Devnagri AI" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DevnagriAI" />
        <meta name="twitter:title" content="Contact | Devnagri" />
        <meta
          name="twitter:description"
          content="Get in touch with Devnagri for AI-powered translation solutions. Contact our experts for multilingual localization services."
        />
        <meta
          name="twitter:image"
          content="https://devnagri.com/assets/images/products-images/Contact us .jpg"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://devnagri.com/contact-us" />
      </Head>
      {/* Hero Banner with Breadcrumbs */}
      <section
        className="hero bg-img overflow-hidden"
        style={{
          backgroundImage: `url(${getImagePath(
            "simple-banner-background.png"
          )})`,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="f-42 f-600 black pb-3 wow fadeIn">
                Let's Start a <span className="blue">Conversation</span>
              </h1>
              <p className="f-400 para-color pb-4 wow fadeIn">
                Have questions about our services? We're here to help you
                transform your business through our industry-leading
                multilingual solutions.
              </p>
              <Link href="/book-a-demo" className="white">
                <button type="btn" className="devnagri-btn mt-3 mb-3">
                  Book a Demo
                </button>
              </Link>
            </div>
            <div className="col-lg-4">
              <img
                src={getImagePath("products-images/Contact us .jpg")}
                alt="contat us banner"
                className="w-100 wow fadeIn"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form Section */}
      <section className="py-5">
        <div className="container">
          <div className="row main-contact-info">
            <div className="col-md-6">
              <div className="contact-info-wrapper p-2">
                <h2 className="f-30 f-600 black mb-3 wow fadeInUp">
                  Need fast, <span className="blue">accurate translation?</span>
                </h2>
                <p className="f-16 f-400 black mb-4 wow fadeInUp">
                  Have questions about our services? We'd love to hear from you.
                  Send us a message and we'll respond as soon as possible.
                </p>
                {/* Contact Information Items */}
                <div className="contact-info-item wow fadeInUp mb-3">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt fa-lg" />
                  </div>
                  <div className="contact-info-content">
                    {/* <h4 class="f-20 f-600 black">Visit Us</h4> */}
                    <p className="f-16 f-400 black">
                      BGR Building Plot No. 1, 2nd Floor,
                      <br />
                      Film City, Sector 16A, Noida
                    </p>
                  </div>
                </div>
                <div
                  className="contact-info-item wow fadeInUp mb-3"
                  data-wow-delay="0.2s"
                >
                  <div className="contact-icon">
                    <i className="fas fa-phone-alt fa-lg" />
                  </div>
                  <div className="contact-info-content">
                    {/* <h4 class="f-20 f-600 black">Call Us</h4> */}
                    <p className="f-16 f-400 black">
                      <Link href="tel:+917302020284" className="black f-400">
                        +91-7302020284
                      </Link>
                      <br />
                      <small className=" black f-400">Mon-Fri, 9am — 7pm</small>
                    </p>
                  </div>
                </div>
                <div
                  className="contact-info-item wow fadeInUp mb-3"
                  data-wow-delay="0.4s"
                >
                  <div className="contact-icon">
                    <i className="fas fa-envelope fa-lg" />
                  </div>
                  <div className="contact-info-content">
                    <p className="f-16 f-400 black">
                      <Link
                        href="mailto:sales@devnagri.com"
                        className="black f-400"
                      >
                        sales@devnagri.com
                      </Link>
                      <br />
                      <Link
                        href="mailto:demo@devnagri.com"
                        className="black f-400"
                      >
                        demo@devnagri.com
                      </Link>
                    </p>
                  </div>
                </div>
                <h2 className="f-24 f-600">Need translation immediately? </h2>
                <Link href="/contact-us" className="white">
                  <button type="btn" className="devnagri-btn mt-3">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-2">
                <div className="">
                  <h2 className="f-30 f-600 black mb-3 wow fadeInUp">
                    Reach out <span className="blue">to us today!</span>
                  </h2>
                  <div id="hubspotForm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d530.9803473210912!2d77.31609998543777!3d28.565528509319655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce546814ade89%3A0x1dd3f62f8d7e5481!2sDevnagri%20-%20India's%20First%20AI-Powered%20Translation%20Engine!5e1!3m2!1sen!2sin!4v1751356461861!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
