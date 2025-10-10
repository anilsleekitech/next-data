import React, { useEffect, useState } from "react";
import { getImagePath } from "../../utils/imageUtils";
import Link from "next/link";
import { initializeSliders as initializePageSliders } from "../../utils/initScripts";
import SEO from "../../components/SEO";
import Head from "next/head";

const Careers = () => {
  // Job data
  const [jobs] = useState([
    {
      id: 1,
      title: "Product Manager",
      experience: "5 - 10 years",
      location: "Gurgaon",
      function: "Product",
      description:
        "Join our Product team to lead product development, enhance customer experience, and drive success!",
      requirements: [
        "Product strategy",
        "User research",
        "Agile methodology",
        "Team leadership",
      ],
      responsibilities: [
        "Define product vision",
        "Lead cross-functional teams",
        "Drive product roadmap",
      ],
    },
    {
      id: 2,
      title: "Senior Brand Manager",
      experience: "5 - 10 years",
      location: "Gurgaon",
      function: "Marketing",
      description:
        "Lead brand strategy and marketing initiatives to enhance our market presence and customer engagement.",
      requirements: [
        "Brand strategy",
        "Digital marketing",
        "Campaign management",
        "Analytics",
      ],
      responsibilities: [
        "Develop brand strategy",
        "Manage marketing campaigns",
        "Analyze market trends",
      ],
    },
    {
      id: 3,
      title: "Area Sales Manager",
      experience: "3 - 7 years",
      location: "Mumbai",
      function: "Sales",
      description:
        "Drive sales growth in your assigned territory and build strong customer relationships.",
      requirements: [
        "Sales experience",
        "Customer relationship",
        "Territory management",
        "Negotiation",
      ],
      responsibilities: [
        "Achieve sales targets",
        "Build client relationships",
        "Market analysis",
      ],
    },
    {
      id: 4,
      title: "Frontend Developer",
      experience: "2 - 5 years",
      location: "Bangalore",
      function: "Engineering",
      description:
        "Build responsive and user-friendly web applications using modern frontend technologies.",
      requirements: ["React.js", "JavaScript", "CSS/HTML", "Git"],
      responsibilities: [
        "Develop UI components",
        "Optimize performance",
        "Code reviews",
      ],
    },
    {
      id: 5,
      title: "Data Scientist",
      experience: "3 - 6 years",
      location: "Remote",
      function: "Engineering",
      description:
        "Develop AI/ML models to enhance our translation and language processing capabilities.",
      requirements: ["Python", "Machine Learning", "NLP", "Statistics"],
      responsibilities: [
        "Build ML models",
        "Data analysis",
        "Model optimization",
      ],
    },
    {
      id: 6,
      title: "Customer Success Manager",
      experience: "2 - 5 years",
      location: "Gurgaon",
      function: "Customer Success",
      description:
        "Ensure customer satisfaction and drive product adoption through excellent support and guidance.",
      requirements: [
        "Customer service",
        "Product knowledge",
        "Communication",
        "Problem solving",
      ],
      responsibilities: [
        "Customer onboarding",
        "Support management",
        "Success metrics",
      ],
    },
  ]);

  // State for search and filter
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  // State for popup form
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationForm, setApplicationForm] = useState({
    name: "",
    email: "",
    phone: "",
    currentCompany: "",
    experience: "",
    resume: null,
    coverLetter: "",
    portfolio: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Filter jobs based on search and location
  useEffect(() => {
    if (typeof window === "undefined") return;
    let filtered = jobs;

    if (searchTerm) {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.function.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (locationFilter) {
      filtered = filtered.filter((job) =>
        job.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }

    setFilteredJobs(filtered);
  }, [searchTerm, locationFilter, jobs]);

  // Initialize filtered jobs
  useEffect(() => {
    if (typeof window === "undefined") return;
    setFilteredJobs(jobs);
  }, [jobs]);

  // Handle form input changes
  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    setApplicationForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // Handle job application
  const handleApplyNow = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  // Handle form submission
  const handleSubmitApplication = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Log all application data to console
    // console.log('=== Job Application Submission ===');
    // console.log('Job Details:', selectedJob);
    // console.log('Applicant Details:', applicationForm);
    // console.log('Submission Time:', new Date().toISOString());
    // console.log('==============================');

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowApplicationForm(false);
      setSelectedJob(null);
      setApplicationForm({
        name: "",
        email: "",
        phone: "",
        currentCompany: "",
        experience: "",
        resume: null,
        coverLetter: "",
        portfolio: "",
      });
      alert(
        "Thank you for your application! We will review and get back to you soon."
      );
    }, 2000);
  };

  // Close popup
  const closePopup = () => {
    setShowApplicationForm(false);
    setSelectedJob(null);
    setApplicationForm({
      name: "",
      email: "",
      phone: "",
      currentCompany: "",
      experience: "",
      resume: null,
      coverLetter: "",
      portfolio: "",
    });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const initCarousel = () => {
      const carouselElement = typeof document !== "undefined" && document.getElementById("fadeCarousel");
      if (carouselElement) {
        // Initialize Bootstrap carousel
        if (window?.bootstrap) {
          const carousel = new window.bootstrap.Carousel(carouselElement, {
          interval: 3000,
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
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    (function (e, t, a) {
      var s = e.head || e.getElementsByTagName("head")[0],
        i = e.createElement("script");
      i.type = "text/javascript";
      i.id = "peoplehum-hire-jobs-script";
      i.defer = true;
      i.async = false;
      i.src =
        t +
        "/static/js/external-job-list.js?base_url=" +
        t +
        "&config=" +
        JSON.stringify(a);
      s.appendChild(i);
    })(document, "https://hris.peoplehum.com/ehire", {
      env: "prod",
      short_name: "2cf831e9-02a4-4b5d-b1a9-69625bad5bd7", // ✅ your org ID
      container_id: "peopelhum-jobs-container",
      locale: "en-US",
      version: 2,
    });
  }, []);
  

  return (
    <>
     <Head>
        {/* Title & Description */}
        <title>Career | Devnagri</title>
        <meta
          name="description"
          content="Join the Devnagri team and help build the future of AI-powered translation technology."
        />
        <meta
          name="keywords"
          content="careers, jobs, devnagri jobs, AI translation careers, tech jobs"
        />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="P0GXIC42VCPtzhJ0U1AMg6_AV8z5s3IYdZ0-nzjtsH4"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Career | Devnagri" />
        <meta
          property="og:description"
          content="Join the Devnagri team and help build the future of AI-powered translation technology."
        />
        <meta
          property="og:image"
          content="https://devnagri.com/assets/images/career-images/team-1.jpg"
        />
        <meta
          property="og:url"
          content="https://devnagri.com/careers"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Devnagri AI" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DevnagriAI" />
        <meta name="twitter:title" content="Career | Devnagri" />
        <meta
          name="twitter:description"
          content="Join the Devnagri team and help build the future of AI-powered translation technology."
        />
        <meta
          name="twitter:image"
          content="https://devnagri.com/assets/images/career-images/team-1.jpg"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://devnagri.com/careers" />
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
              <h6 className="f-22 f-600 pb-3 black">
                <span className="blue">Here Passion Meets Purpose, </span>Join
                the Journey at Devnagri
              </h6>
              <h1 className="f-40 f-700 black pb-2 wow fadeIn">
                Bring Your Energy and Ideas.{" "}
                <span className="blue">Shape the Future With Us.</span>
              </h1>
              <p className="f-400 pb-2 pe-3 wow fadeIn">
                At Devnagri AI, we're reimagining how businesses, governments,
                and communities connect across languages. If solving real-world
                communication challenges excites you, join us on our journey.
              </p>
              <div className="d-flex align-items-center justify-content-start gap-3 wow fadeIn">
                <button
                  type="button"
                  className="devnagri-btn mt-3"
                  onClick={() => {
                    const section = typeof document !== "undefined" && document.getElementById("our-open-roles");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Explore Open Roles
                </button>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-md-5 mt-lg-0">
              <div
                id="fadeCarousel"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
                data-bs-interval="3000" // 3 seconds per slide
                data-bs-touch="true" // ✅ enable swipe on mobile
                data-bs-pause="false"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={getImagePath("career-images/team-1.jpg")}
                      className="d-block w-100 rounded-4"
                      alt="Slide 1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={getImagePath("career-images/team-2.jpg")}
                      className="d-block w-100 rounded-4"
                      alt="Slide 2"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={getImagePath("career-images/team-3.jpg")}
                      className="d-block w-100 rounded-4"
                      alt="Slide 3"
                    />
                  </div>
                </div>
                {/* Indicators */}
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#fadeCarousel"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#fadeCarousel"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  />
                  <button
                    type="button"
                    data-bs-target="#fadeCarousel"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*life at devnagri*/}
      <section
        className="py-5 bg-img"
        style={{ backgroundImage: `url(${getImagePath("testimonil-bg.png")})` }}
      >
        <div className="container">
          <h2 className="f-40 f-600 m-0 pb-5 text-center black wow fadeInUp">
            Life at <span className="blue">DEVNAGRI AI</span>
          </h2>
          <div className="row justify-content-between">
            <div className="col-lg-8">
              <div className="about-value-content wow fadeInUp">
                <p className="f-400 para-color f-18">
                  <span className="">D</span>
                  <strong className="f-700 black">Dedication:</strong> We’re
                  committed to driving collective success.
                </p>
                <p className="f-400 para-color f-18">
                  <span className="">E</span>
                  <strong className="f-700 black">Empathy:</strong> We
                  understand before we act.
                </p>
                <p className="f-400 para-color f-18">
                  <span className="">V</span>
                  <strong className="f-700 black">Vision:</strong> Every
                  milestone is driven by a clear purpose.
                </p>
                <p className="f-400 para-color f-18">
                  <span className="">N</span>
                  <strong className="f-700 black">Novelty:</strong> We embrace
                  innovation and challenge.
                </p>
                <p className="f-400 para-color f-18">
                  <span className="">A</span>
                  <strong className="f-700 black">Accountability:</strong>{" "}
                  Ownership isn’t assigned here, it’s instinctive.
                </p>
                <p className="f-400 para-color f-18">
                  <span className="">G</span>
                  <strong className="f-700 black">Growth:</strong> Everyone
                  learns, evolves, and levels up.
                </p>
                <p className="f-400 para-color f-18">
                  <span className="">R</span>
                  <strong className="f-700 black">Respect:</strong> We value
                  ideas over titles.
                </p>
                <p className="f-400 para-color f-18">
                  <span className="">I</span>
                  <strong className="f-700 black">Impact:</strong> We create
                  meaningful change.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="video-container mt-3 wow fadeInUp">
                <iframe
                  src="https://www.youtube.com/embed/kqYyV0QjV4s"
                  width="100%"
                  height={510}
                  className="rounded-4"
                  title="YouTube Shorts Embed"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Our hiring timeline*/}
      <section
        className="timeline-section py-5"
        style={{ backgroundColor: "#EEF5FF" }}
      >
        <div className="container">
          <div className="timeline-title">
            <h2 className="f-40 f-600 m-0 pb-3 text-center black wow fadeInUp">
              Hiring <span className="blue">Process</span>
            </h2>
            <p className="f-500 f-20 para-color m-0 pb-3 text-center wow fadeInUp">
              What to Expect
            </p>
          </div>
          <div className="row jus">
            <div className="col-lg-6">
              <div className="timeline-step mt-4 wow fadeInUp">
                <div className="timeline-icon">
                  <i className="bi bi-person-lines-fill" />
                </div>
                <div className="timeline-content">
                  <h5 className="f-24 black f-600">Application Review</h5>
                  <p className=" f-400 para-color m-0">
                    We screen every profile with care.
                  </p>
                </div>
              </div>
              <div className="timeline-step wow fadeInUp" data-wow-delay=".2s">
                <div className="timeline-icon">
                  <i className="bi bi-chat-dots" />
                </div>
                <div className="timeline-content">
                  <h5 className="f-24 black f-600">Intro Call</h5>
                  <p className=" f-400 para-color m-0">
                    A quick chat to get to know each other.
                  </p>
                </div>
              </div>
              <div className="timeline-step wow fadeInUp" data-wow-delay=".3s">
                <div className="timeline-icon">
                  <i className="bi bi-pencil-square" />
                </div>
                <div className="timeline-content">
                  <h5 className="f-24 black f-600">Technical Task</h5>
                  <p className=" f-400 para-color m-0">
                    Role-based exercise to understand your thinking.
                  </p>
                </div>
              </div>
              <div className="timeline-step wow fadeInUp" data-wow-delay=".2s">
                <div className="timeline-icon">
                  <i className="bi bi-people" />
                </div>
                <div className="timeline-content">
                  <h5 className="f-24 black f-600">Panel Interviews</h5>
                  <p className=" f-400 para-color m-0">
                    Meet your future teammates and decision-makers.
                  </p>
                </div>
              </div>
              <div className="timeline-step wow fadeInUp" data-wow-delay=".3s">
                <div className="timeline-icon">
                  <i className="bi bi-send-check" />
                </div>
                <div className="timeline-content">
                  <h5 className="f-24 black f-600">Offer &amp; Onboarding</h5>
                  <p className=" f-400 para-color m-0">
                    We move fast and value your time.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 px-5 mt-4 mt-md-5 mt-lg-0">
              <div className="sticky-block wow fadeInUp">
                <img
                  src={getImagePath("career-images/hiring-timeline-1.jpg")}
                  alt="hiring-timeline"
                  className="w-100 mt-4 rounded-4"
                />
                <div className="row mt-3">
                  <div className="col-md-6 d-none d-md-block">
                    <img
                      src={getImagePath("career-images/hiring-timeline-2.jpg")}
                      alt="hiring-timeline"
                      className="w-100 rounded-4"
                    />
                  </div>
                  <div className="col-md-6 d-none d-md-block">
                    <img
                      src={getImagePath("career-images/hiring-timeline-3.jpg")}
                      alt="hiring-timeline"
                      className="w-100 rounded-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*our befinifts*/}
      <section
        className="problem-we-solve py-5 bg-img"
        style={{ backgroundImage: `url(${getImagePath("testimonil-bg.png")})` }}
      >
        <div className="container">
          <h2 className="text-center f-40 f-600 pb-4 black wow fadeInUp">
            Our <span className="blue">Benefits</span>
          </h2>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src={getImagePath("our-benifits.jpg")}
                className="w-100 rounded-4 wow fadeInUp"
              />
            </div>
            <div className="col-lg-6 px-3 mt-4 mt-md-5 mt-lg-0">
              <div className="key-feature mb-2 wow fadeInUp">
                <ul className="check-list p-0">
                  <li className="f-400 para-color mb-2 d-flex gap-3 gap-md-1">
                    <div
                      className="width-5"
                      style={{ position: "relative", top: 0 }}
                    >
                      <img
                        src={getImagePath("tick-circle.png")}
                        width={26}
                        height={26}
                      />
                    </div>
                    <div>
                      <p className="m-0 pb-1 f-20 f-400">
                        Healthy, collaborative work environment
                      </p>
                    </div>
                  </li>
                  <li className="f-400 para-color mb-2 d-flex gap-3 gap-md-1">
                    <div
                      className="width-5"
                      style={{ position: "relative", top: 0 }}
                    >
                      <img
                        src={getImagePath("tick-circle.png")}
                        width={26}
                        height={26}
                      />
                    </div>
                    <div>
                      <p className="m-0 pb-1 f-20 f-400">
                        Direct access to leadership and cross-functional teams
                      </p>
                    </div>
                  </li>
                  <li className="f-400 para-color mb-2 d-flex gap-3 gap-md-1">
                    <div
                      className="width-5"
                      style={{ position: "relative", top: 0 }}
                    >
                      <img
                        src={getImagePath("tick-circle.png")}
                        width={26}
                        height={26}
                      />
                    </div>
                    <div>
                      <p className="m-0 pb-1 f-20 f-400">
                        Projects with visible, real-world impact
                      </p>
                    </div>
                  </li>
                  <li className="f-400 para-color mb-2 d-flex gap-3 gap-md-1">
                    <div
                      className="width-5"
                      style={{ position: "relative", top: 0 }}
                    >
                      <img
                        src={getImagePath("tick-circle.png")}
                        width={26}
                        height={26}
                      />
                    </div>
                    <div>
                      <p className="m-0 pb-1 f-20 f-400">
                        Flexible work model as per profile and location
                      </p>
                    </div>
                  </li>
                  <li className="f-400 para-color mb-2 d-flex gap-3 gap-md-1">
                    <div
                      className="width-5"
                      style={{ position: "relative", top: 0 }}
                    >
                      <img
                        src={getImagePath("tick-circle.png")}
                        width={26}
                        height={26}
                      />
                    </div>
                    <div>
                      <p className="m-0 pb-1 f-20 f-400">
                        Transparent career growth paths
                      </p>
                    </div>
                  </li>
                  <li className="f-400 para-color mb-2 d-flex gap-3 gap-md-1">
                    <div
                      className="width-5"
                      style={{ position: "relative", top: 0 }}
                    >
                      <img
                        src={getImagePath("tick-circle.png")}
                        width={26}
                        height={26}
                      />
                    </div>
                    <div>
                      <p className="m-0 pb-1 f-20 f-400">
                        Competitive salary opportunities
                      </p>
                    </div>
                  </li>
                  <li className="f-400 para-color mb-2 d-flex gap-3 gap-md-1">
                    <div
                      className="width-5"
                      style={{ position: "relative", top: 0 }}
                    >
                      <img
                        src={getImagePath("tick-circle.png")}
                        width={26}
                        height={26}
                      />
                    </div>
                    <div>
                      <p className="m-0 pb-1 f-20 f-400">
                        A mission-driven company building the future of Indian
                        and global communicational AI
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*our Gallery*/}
      <section className="py-5">
        <div className="container">
          <h2 className="f-600 f-40 m-0 black pb-5 text-center wow fadeInUp">
            Behind The <span className="blue">Hustle</span>
          </h2>
          <div className="row g-3">
            <div className="col-sm-6 col-lg-4 mb-3">
              <div className="gallery-item">
                <img
                  src={getImagePath("aboutus-image/Our-Story.jpg")}
                  alt="Gallery 1"
                />
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mb-3">
              <div className="gallery-item">
                <img
                  src={getImagePath("career-images/team-1.jpg")}
                  alt="Gallery 2"
                />
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mb-3">
              <div className="gallery-item">
                <img
                  src={getImagePath("career-images/team-2.jpg")}
                  alt="Gallery 3"
                />
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mb-3">
              <div className="gallery-item">
                <img
                  src={getImagePath("career-images/team-3.jpg")}
                  alt="Gallery 4"
                />
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mb-3">
              <div className="gallery-item">
                <img
                  src={getImagePath("career-images/team-4.jpg")}
                  alt="Gallery 5"
                />
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mb-3">
              <div className="gallery-item">
                <img
                  src={getImagePath("career-images/team-5.jpg")}
                  alt="Gallery 6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Open role section*/}
      <section id="our-open-roles" className="open-roles py-5">
        <div className="container">
          <h4 className="text-center f-40 black m-0 pb-5 f-600 wow fadeInUp">
            Current <span className="blue">Openings</span>
          </h4>
          {/* PeopleHum jobs container */}
          <div id="peopelhum-jobs-container"></div>
        </div>
      </section>
      {/* Application Form Popup */}
      {showApplicationForm && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "30px",
              maxWidth: "600px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="f-24 f-600 black m-0">
                Apply for {selectedJob?.title}
              </h3>
              <button
                onClick={closePopup}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "24px",
                  cursor: "pointer",
                  color: "#666",
                }}
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmitApplication}>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Full Name"
                      value={applicationForm.name}
                      onChange={handleFormChange}
                      required
                    />
                    <label htmlFor="name" className="f-400">
                      Full Name *
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={applicationForm.email}
                      onChange={handleFormChange}
                      required
                    />
                    <label htmlFor="email" className="f-400">
                      Email *
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="Phone"
                      value={applicationForm.phone}
                      onChange={handleFormChange}
                      required
                    />
                    <label htmlFor="phone" className="f-400">
                      Phone *
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="currentCompany"
                      name="currentCompany"
                      placeholder="Current Company"
                      value={applicationForm.currentCompany}
                      onChange={handleFormChange}
                    />
                    <label htmlFor="currentCompany" className="f-400">
                      Current Company
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="experience"
                      name="experience"
                      placeholder="Years of Experience"
                      value={applicationForm.experience}
                      onChange={handleFormChange}
                      required
                    />
                    <label htmlFor="experience" className="f-400">
                      Years of Experience *
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="url"
                      className="form-control"
                      id="portfolio"
                      name="portfolio"
                      placeholder="Portfolio URL"
                      value={applicationForm.portfolio}
                      onChange={handleFormChange}
                    />
                    <label htmlFor="portfolio" className="f-400">
                      Portfolio URL
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="file"
                      className="form-control"
                      id="resume"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFormChange}
                      required
                    />
                    <label htmlFor="resume" className="f-400">
                      Resume/CV * (PDF, DOC, DOCX)
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      id="coverLetter"
                      name="coverLetter"
                      style={{ height: 120 }}
                      placeholder="Cover Letter"
                      value={applicationForm.coverLetter}
                      onChange={handleFormChange}
                    />
                    <label htmlFor="coverLetter" className="f-400">
                      Cover Letter (Optional)
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="devnagri-btn w-100"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Submitting Application...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Careers;
