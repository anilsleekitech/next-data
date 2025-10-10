import React from "react";
import { getImagePath } from "../../utils/imageUtils";
import SEO from "../../components/SEO";
import Head from "next/head";

export default function RefundPolicy() {
  return (
    <div>
      <>
      <Head>
        {/* Title & Description */}
        <title>Refund Policy | Devnagri</title>
        <meta
          name="description"
          content="Our refund and cancellation policy for Devnagri translation services and subscriptions."
        />
        <meta
          name="keywords"
          content="refund policy, cancellation policy, money back guarantee, service refund"
        />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="P0GXIC42VCPtzhJ0U1AMg6_AV8z5s3IYdZ0-nzjtsH4"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Refund Policy | Devnagri" />
        <meta
          property="og:description"
          content="Our refund and cancellation policy for Devnagri translation services and subscriptions."
        />
        <meta
          property="og:image"
          content="https://devnagri.com/assets/images/refund-and-cancellation-policy.png"
        />
        <meta
          property="og:url"
          content="https://devnagri.com/refund-and-cancellation-policy"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Devnagri AI" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DevnagriAI" />
        <meta name="twitter:title" content="Refund Policy | Devnagri" />
        <meta
          name="twitter:description"
          content="Our refund and cancellation policy for Devnagri translation services and subscriptions."
        />
        <meta
          name="twitter:image"
          content="https://devnagri.com/assets/images/refund-and-cancellation-policy.png"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://devnagri.com/refund-and-cancellation-policy"
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
            <div className="row align-items-center justify-content-center">
              <div className="col-md-12 col-lg-8 text-center">
                <h1 className="f-40 f-700 black m-0 wow fadeInUp">
                  Refund and <span className="blue">Cancellation Policy</span>
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-4">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p className="para-color f-400 wow fadeInUp">
                  Our focus is complete customer satisfaction. In the event, if
                  you are displeased with the services provided, Devnagri will
                  refund back the money, provided the reasons are genuine and
                  proved after investigation. Please read the fine prints of
                  each deal before buying it, it provides all the details about
                  the services or the product you purchase.
                </p>
                <p className="para-color f-400 wow fadeInUp m-0">
                  In case of dissatisfaction from our services, clients have the
                  liberty to cancel their projects and request a refund from us.
                  Our Policy for the cancellation and refund will be as follows:
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="pb-2 f-34 f-600 m-0 black wow fadeInUp">
                  Cancellation <span className="blue">Policy</span>
                </h2>
                <p className="f-400 para-color wow fadeInUp m-0">
                  For Cancellations please contact the us via contact us link.
                  <br />
                  Requests received later than 5 business days prior to the end
                  of the current service period will be treated as cancellation
                  of services for the next service period.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="pb-2 f-34 f-600 m-0 black wow fadeInUp">
                  Refund <span className="blue">Policy</span>
                </h2>
                <p className="f-400 para-color wow fadeInUp m-0">
                  We will try our best to create the suitable design concepts
                  for our clients.
                  <br />
                  In case any client is not completely satisfied with our
                  products we can provide a refund.
                  <br />
                  If paid by credit card, refunds will be issued to the original
                  credit card provided at the time of purchase and in case of
                  payment gateway name payments refund will be made to the same
                  account.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}
