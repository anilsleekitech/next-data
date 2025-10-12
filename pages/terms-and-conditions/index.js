import React from 'react'
import { getImagePath } from '../../utils/imageUtils';
import Link from 'next/link';
import Head from 'next/head';


export default function TermsandConditions() {
  const ogImage = "/assets/images/career-images/team-1.jpg";
  return (
    <div>
      <>
      <Head>
        {/* Title & Description */}
        <title>Terms and Conditions | Devnagri</title>
        <meta
          name="description"
          content="Terms and conditions for using Devnagri's AI translation platform and services."
        />
        <meta
          name="keywords"
          content="terms and conditions, terms of service, legal terms, service agreement"
        />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="P0GXIC42VCPtzhJ0U1AMg6_AV8z5s3IYdZ0-nzjtsH4"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Terms and Conditions | Devnagri" />
        <meta
          property="og:description"
          content="Terms and conditions for using Devnagri's AI translation platform and services."
        />
        <meta property="og:image" content={`https://devnagri.com${ogImage}`} />
        <meta
          property="og:url"
          content="https://devnagri.com/terms-and-conditions"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Devnagri AI" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DevnagriAI" />
        <meta name="twitter:title" content="Terms and Conditions | Devnagri" />
        <meta
          name="twitter:description"
          content="Terms and conditions for using Devnagri's AI translation platform and services."
        />
        <meta name="twitter:image" content={`https://devnagri.com${ogImage}`} />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://devnagri.com/terms-and-conditions"
        />
      </Head>
        {/* Hero Section */}
        <section
          className="hero-section bg-img"
          style={{
            backgroundImage: `url(${getImagePath("simple-banner-background.png")})`
          }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-12 col-lg-8 text-center">
                <h1 className="f-40 f-700 black m-0 wow fadeInUp">
                  Terms and <span className="blue">Conditions</span>
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
                  The page holds all the Terms and Conditions (“T&amp;Cs”) of using
                  Devnagri website. User is requested to read these before using any
                  service, part of the website. T&amp;Cs are the legal agreement
                  between the reader and Devnagri for all the services of the website.
                  User can consult a legal advisor if he/she has a doubt regarding any
                  point mentioned below. Once visiting the website either as a client,
                  reviewer or translator you shall abide by these T&amp;Cs, if you
                  wish to use the given services.
                </p>
                <p className="para-color f-400 m-0 wow fadeInUp">
                  The management team of Devnagri holds every right to change, amend,
                  delete or add any T&amp;C to the list given below without any prior
                  notice to user. User is advised to read these T&amp;Cs along with
                  Privacy Policies (recommended) on regular basis to remain up to
                  date. By accessing any part of this website you agree to follow the
                  terms and conditions given here, if you do not wish to follow the
                  T&amp;Cs then you must not utilize the services proposed on Devnagri
                  and should not access any part of this website. All the material,
                  content and references are protected by legal trademark and
                  copyright law thus one should not try to copy or use any part
                  without prior written permission for the same.
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
                  Usage of <span className="blue">Devnagri</span>
                </h2>
                <p className="f-400 para-color wow fadeInUp">
                  Devnagri is to be used by abiding international and national
                  (Indian) laws along with the below mentioned T&amp;Cs.
                </p>
                <p className="f-400 f-600 black wow fadeInUp">
                  User is forbidden to:
                </p>
                <p className="f-400 para-color wow fadeInUp"></p>
                <ul className="f-400 para-color wow fadeInUp">
                  <li style={{ listStyleType: "initial" }}>
                    Use this platform for selling personal or professional
                    product/service, until specified and approved by Devnagri
                  </li>
                  <li style={{ listStyleType: "initial" }}>
                    See this website (Or any of its part) as personal property until
                    approved by website owners
                  </li>
                  <li style={{ listStyleType: "initial" }}>
                    Copy, use or adopt any part of the website before prior written
                    consent from the website owners. If found guilty user will be
                    notified through proper channels and if no fitting action is
                    observed then the problem shall be dealt according to
                    jurisdictional directions.
                  </li>
                  <li style={{ listStyleType: "initial" }}>
                    Hack, reverse engineer, copy source code or use the website from
                    any illicit or government banned methods/interfaces.
                  </li>
                </ul>
                <p />
                <p className="f-400 para-color wow fadeInUp">
                  User found guilty will be penalised and strict action will be taken
                  according to the fitting channel for any of notified or non-notified
                  improper activity.
                </p>
                <p className="f-400 para-color m-0 wow fadeInUp">
                  Website services will work for a particular duration of time but
                  user will not have any intellectual property right on any portion or
                  complete service adhered.
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
                  Service <span className="blue">Quality</span>
                </h2>
                <p className="f-400 para-color wow fadeInUp">
                  Professional quality standard is the priority for Devnagri, any
                  quality related issues are taken seriously at our platform. If the
                  user is not satisfied with the quality of service (Translation)
                  provided by the website then such cases shall be notified within 30
                  working days from the delivery date. If the notified complaint is
                  accepted, then the user will get the revised content with
                  recommended or known pointers.
                </p>
                <p className="f-400 para-color m-0 wow fadeInUp">
                  Devnagri solely holds the rights to refuse the request for revision
                  without any explanation. Further to have discussion in this regard
                  user can contact at{" "}
                  <Link href="mailto:sales@devnagri.com" className="blue">
                    sales@devnagri.com
                  </Link>
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
                  Modifications and <span className="blue">changes</span>
                </h2>
                <p className="f-400 para-color wow fadeInUp">
                  Devnagri holds every right to change or modify any of its part or
                  its subsidiary’s part. Prices &amp; charges can be changed without
                  any advance notice to the user. For the orders already placed the
                  price will remain same but any change in order will automatically
                  fall under new price lines. User payment durations can change at any
                  moment of time and Devnagri is not bounded to provide intimations to
                  the affected users beforehand. If user disagree with any of the
                  change notified (or not) then he/she can discontinue his/her usage
                  of this website. If any part of the T&amp;Cs is not applicable on
                  the user type than also other impacting parts will remain constant.
                  Further, for any question or concern about terms, policies and
                  general discussion free to write at{" "}
                  <Link href="mailto:sales@devnagri.com" className="blue">
                    sales@devnagri.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </>

    </div>
  )
}
