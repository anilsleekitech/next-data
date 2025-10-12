import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Import your full dataset (410 items)
import fullDataset from "../../data/howWeHelpData.json";
import Head from "next/head";

// Define content types and categories
const contentTypes = {
  blogs: {
    name: "Blogs",
    categories: ["all", "technology", "business", "localization"],
  },
  "case-studies": {
    name: "Case Studies",
    categories: ["all", "success-stories", "public-sector"],
  },
  // 'webinars': { name: 'Webinars', categories: ['all', 'strategy', 'technology', 'innovation'] },
  // 'podcasts': { name: 'Podcasts', categories: ['all', 'trends', 'startups', 'expert-talks'] },
  announcements: {
    name: "Announcements",
    categories: ["all", "product-update", "partnership"],
  },
  // 'developer-hub': { name: 'Developer Hub', categories: ['all', 'api', 'documentation'] }
};

const categoryNames = {
  all: "All",
  technology: "Technology",
  business: "Business",
  localization: "Localization",
  "success-stories": "Success Stories",
  "public-sector": "Public Sector",
  strategy: "Strategy",
  innovation: "Innovation",
  trends: "Trends",
  startups: "Startups",
  "expert-talks": "Expert Talks",
  "product-update": "Product Updates",
  partnership: "Partnerships",
  api: "API",
  documentation: "Documentation",
  "language-pairs": "Language Pairs",
  tools: "Tools",
  services: "Services",
};

const ITEMS_PER_PAGE = 9;

const Resources = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(
    router.query.tab || "blogs"
  );
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredContent, setFilteredContent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const tabParam = router.query.tab;
    if (tabParam && Object.keys(contentTypes).includes(tabParam)) {
      setActiveTab(tabParam);
      setActiveCategory("all");
    }
  }, [router.query.tab]);

  // Filter content based on active tab and category
  useEffect(() => {
    let filtered = [...fullDataset.howWeHelpCards];

    // Filter by content type (tab)
    filtered = filtered.filter((item) => item.type === activeTab);

    // Filter by category if not "all"
    if (activeCategory !== "all") {
      filtered = filtered.filter((item) => item.category === activeCategory);
    }

    // Sort by date (newest first)
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    setFilteredContent(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [activeTab, activeCategory]);

  // Calculate total pages whenever filtered content changes
  useEffect(() => {
    const pages = Math.ceil(filteredContent.length / ITEMS_PER_PAGE);
    setTotalPages(pages > 0 ? pages : 1);
  }, [filteredContent]);

  // Get current page items
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredContent.slice(startIndex, endIndex);
  };

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Generate pagination buttons
  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    pages.push(
      <li
        key="prev"
        className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
      >
        <button
          className="page-link"
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          aria-label="Previous"
        >
          <i className="fas fa-chevron-left" />
        </button>
      </li>
    );

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? "active" : ""}`}
        >
          <button className="page-link" onClick={() => setCurrentPage(i)}>
            {i}
          </button>
        </li>
      );
    }

    pages.push(
      <li
        key="next"
        className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
      >
        <button
          className="page-link"
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          aria-label="Next"
        >
          <i className="fas fa-chevron-right" />
        </button>
      </li>
    );

    // Add total pages display (visible on medium screens and up)
    pages.push(
      <li key="total" className="page-item disabled d-none d-md-block">
        <span className="page-link page-count">
          Page {currentPage} of {totalPages}
        </span>
      </li>
    );

    return pages;
  };
  // Handle tab changes
  const handleTabChange = (type) => {
    setActiveTab(type);
    setActiveCategory("all");
    // Update URL without page reload
    router.push(`/blogs?tab=${type}`, undefined, { shallow: true });
  };

  return (
    <>
      <Head>
        {/* Title & Description */}
        <title>Resources - Devnagri</title>
        <meta
          name="description"
          content="Why language translation is important for business growth? Browse Devnagri blog now."
        />
        <meta
          name="keywords"
          content="resources, case studies, translation insights, localization guides"
        />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="P0GXIC42VCPtzhJ0U1AMg6_AV8z5s3IYdZ0-nzjtsH4"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Resources - Devnagri" />
        <meta
          property="og:description"
          content="Why language translation is important for business growth? Browse Devnagri blog now."
        />
        <meta
          property="og:image"
          content={`https://devnagri.com${getCurrentPageItems()[0]?.image || "https://devnagri.com/assets/images/images/career-images/team-1.jpg"}`}
        />
        <meta
          property="og:url"
          content="https://devnagri.com/blogs"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Devnagri AI" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DevnagriAI" />
        <meta name="twitter:title" content="Resources - Devnagri" />
        <meta
          name="twitter:description"
          content="Why language translation is important for business growth? Browse Devnagri blog now."
        />
        <meta
          name="twitter:image"
          content={`https://devnagri.com${getCurrentPageItems()[0]?.image || "https://devnagri.com/assets/images/career-images/team-1.jpg"}`}
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://devnagri.com/blogs" />
      </Head>
      {/* Hero Banner */}
      <section className="resources-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h1 className="f-42 f-600 text-center black wow fadeIn pb-3">
                Resource <span className="blue">Library</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Tabs */}
      <section className="resource-tabs">
        <div className="container">
          {/* Tabs Navigation */}
          <div className="d-flex justify-content-center align-items-center resource-tabs-inner-nav">
            <ul className="nav nav-tabs" id="resourceTab" role="tablist">
              {Object.entries(contentTypes).map(([type, data]) => (
                <li className="nav-item" role="presentation" key={type}>
                  <button
                    className={`nav-link f-20 f-500 ${
                      activeTab === type ? "active" : ""
                    }`}
                    onClick={() => handleTabChange(type)} // Updated handler
                  >
                    {data.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Category Filter */}
          <div className="blog-categories mb-3">
            <div className="d-flex flex-wrap gap-2 justify-content-center">
              {contentTypes[activeTab].categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn f-18 f-500 ${
                    activeCategory === category ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {categoryNames[category]}
                </button>
              ))}
            </div>
          </div>

          <div className="tab-content mt-5" id="resourceTabContent">
            <div className="tab-pane fade show active">
              <div className="row g-4">
                {getCurrentPageItems().length > 0 ? (
                  getCurrentPageItems().map((item) => (
                    <div className="col-md-4" key={item.id}>
                      <Link
                        href={
                          item.translation || item.type === "translation"
                            ? `/${item.fromLanguage || "english"}-to-${
                                item.toLanguage || "hindi"
                              }-translation`
                            : `/${(
                                item.link ||
                                item.title
                                  .toLowerCase()
                                  .replace(/[^a-z0-9]+/g, "-")
                              ).replace(/^\/+|\/+$/g, "")}`
                        }
                        state={{ item }}
                        className="resource-card-link"
                        target="_blank" // optional: opens in new tab by default if user ctrl+clicks
                        rel="noopener noreferrer"
                      >
                        <div className="resource-card wow fadeInUp">
                          <img
                            src={item.image || null}
                            alt={item.title}
                            className="resource-img"
                          />
                          <div className="p-4">
                            <span
                              className={`f-500 resource-tag tag-${item.type}`}
                            >
                              {contentTypes[item.type].name}
                            </span>
                            <h3 className="f-20 f-600 black mb-2">
                              {item.title}
                            </h3>
                            <p className="f-16 f-400 para-color mb-0">
                              {item.description}
                            </p>
                            <div className="resource-meta">
                              <span className="f-400">
                                <i className="far fa-calendar" />{" "}
                                {formatDate(item.date)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
                ) : (
                  <div className="col-12 text-center">
                    <p>No content found for this category.</p>
                  </div>
                )}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <nav className="d-flex justify-content-center mt-5">
                  <ul className="pagination f-500">{renderPagination()}</ul>
                </nav>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resources;
