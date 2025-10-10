import React, { useEffect, useState } from 'react';
import { getImagePath } from '../../utils/imageUtils';
import SEO from '../../components/SEO';
import Head from 'next/head';

const BookDemo = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        {/* Title & Description */}
        <title>Book a Demo | Devnagri</title>
        <meta name="description" content="Book your free demo" />
        <meta name="keywords" content="Book a Demo" />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="P0GXIC42VCPtzhJ0U1AMg6_AV8z5s3IYdZ0-nzjtsH4"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Book a Demo | Devnagri" />
        <meta property="og:description" content="Book your free demo" />
        <meta
          property="og:image"
          content="https://devnagri.com/assets/images/products-images/book-a-demo.png"
        />
        <meta
          property="og:url"
          content="https://devnagri.com/book-a-demo"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Devnagri AI" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DevnagriAI" />
        <meta name="twitter:title" content="Book a Demo | Devnagri" />
        <meta name="twitter:description" content="Book your free demo" />
        <meta
          name="twitter:image"
          content="https://devnagri.com/assets/images/products-images/book-a-demo.png"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://devnagri.com/book-a-demo" />
      </Head>
      <section className="book-demo-section">
        <div className="container">
          <div className="row main-contact-info py-5">
            <h2 className="f-40 f-600 pb-5 m-0 text-center black wow fadeInUp">
              Book Your <span className="blue">Free Demo</span>
            </h2>

            {/* Left Side - Image */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src={getImagePath("products-images/book-a-demo.png")}
                alt="Book a Demo"
                className="img-fluid rounded shadow"
              />
            </div>

            {/* Right Side - Form */}
            <div className="col-lg-6">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/devnagri-sales/30min"
                style={{ minWidth: "320px", height: "700px" }}
              />
            </div>
          </div>
        </div>

        {/* Popup Modal */}
        {showSuccessPopup && (
          <div className="demo-popup">
            <div className="popup-content shadow rounded p-4 text-center bg-white">
              <h4 className="f-600 mb-2 text-success">✅ Demo Booked!</h4>
              <p className="mb-0 f-400 black">Thank you for scheduling. We'll get back to you shortly.</p>
            </div>
          </div>
        )}
      </section>

      {/* Optional CSS for popup */}
      <style>{`
        .demo-popup {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 9999;
          padding: 15px;
        }
      `}</style>
    </>
  );
};

export default BookDemo;
