import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import fullDataset from "../data/howWeHelpData.json";
import { getImagePath } from "../utils/imageUtils";
import Script from "next/script";

const contentTypes = {
  blogs: { name: "Blogs" },
  "case-studies": { name: "Case Studies" },
  announcements: { name: "Announcements" },
};

const ResourcesDetail = () => {
  const router = useRouter();
  const { link } = router.query;
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [translatedContent, setTranslatedContent] = useState(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const [relatedPosts, setRelatedPosts] = useState([]);

  // Function to generate Schema.org structured data
  const generateSchema = (item) => {
    if (!item) return null;

    let schemaType = "Article";
    if (item.type === "case-studies") {
      schemaType = "Article";
    } else if (item.type === "announcements" || item.type === "news") {
      schemaType = "NewsArticle";
    } else if (item.type === "blogs") {
      schemaType = "BlogPosting";
    }

    return {
      "@context": "https://schema.org",
      "@type": schemaType,
      "headline": item.title,
      "description": item.description,
      "image": item.image,
      "datePublished": item.date,
      "author": {
        "@type": "Person",
        "name": item.author || "Gurpreet",
      },
      "publisher": {
        "@type": "Organization",
        "name": "Devnagri",
        "logo": "https://devnagri.com/assets/images/Devnagri-Logo.png",
      },
      "url": `https://devnagri.com${item.link}`,
    };
  };

  useEffect(() => {
    if (!router.isReady) return;

    setIsLoading(true);

    // Check if the URL matches a translation pattern
    const translationPattern = /^(.*?)-(to|2)-(.*?)-translation\/?$/i;
    const match = link?.match(translationPattern);

    if (match) {
      const [, fromLang, , toLang] = match;
      // Redirect to the text translation page
      router.push(`/${fromLang}-to-${toLang}-translation`);
      setIsLoading(false);
      return;
    }

    const findItem = () => {
      // Clean the incoming link by removing leading/trailing slashes
      const cleanLink = link?.replace(/^\/+|\/+$/g, "") || "";

      // If no state, try to find item by link
      const foundItem = fullDataset?.howWeHelpCards?.find((item) => {
        if (!item) return false;

        // Clean and compare the item's link
        if (item.link) {
          const itemLink = item.link.replace(/^\/+|\/+$/g, "");
          if (itemLink === cleanLink) {
            return true;
          }
        }

        // Try matching by title if link doesn't match
        const itemTitle = item.title || "";
        const titleAsLink = itemTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        const cleanTitleLink = titleAsLink.replace(/^\/+|\/+$/g, "");

        if (cleanTitleLink === cleanLink) {
          return true;
        }
        return false;
      });

      if (foundItem) {
        // Check if found item is a translation item
        if (
          foundItem.translation === true ||
          foundItem.type === "translation"
        ) {
          const fromLang = foundItem.fromLanguage || "english";
          let toLang = foundItem.toLanguage;

          // If toLanguage is not specified, try to extract it from the title
          if (!toLang && foundItem.title) {
            const titleMatch = foundItem.title
              .toLowerCase()
              .match(/english\s+to\s+(\w+)/i);
            if (titleMatch) {
              toLang = titleMatch[1];
            }
          }

          toLang = toLang || "hindi";

          setIsLoading(false);
          router.push(`/${fromLang}-to-${toLang}-translation`);
          return true;
        }
        setItem(foundItem);
        setIsLoading(false);
        return true;
      }
      // If item not found, redirect to 404
      setIsLoading(false);
      router.push("/404");
      return true;
    };

    try {
      findItem();
    } catch (err) {
      console.error("Error finding item:", err);
      setIsLoading(false);
      router.push("/404");
    }
  }, [link, router.isReady]);

  useEffect(() => {
    if (item && fullDataset?.howWeHelpCards) {
      // Filter related posts based on the current item's type
      const filtered = fullDataset.howWeHelpCards
        .filter((post) => post.type === item.type && post.id !== item.id)
        .slice(0, 3); // Get only 3 related posts
      setRelatedPosts(filtered);
    }
  }, [item]);

  const ShareButton = ({ platform, url }) => {
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}`,
    };

    return (
      <a
        href={shareUrls[platform]}
        target="_blank"
        rel="noopener noreferrer"
        className={`share-btn ${platform}`}
        onClick={(e) => {
          e.preventDefault();
          window.open(shareUrls[platform], "_blank", "width=600,height=400");
        }}
      >
        {platform === "twitter" ? (
          <i className="fab fa-x-twitter fa-lg"></i>
        ) : (
          <i className={`fab fa-${platform} fa-lg`}></i>
        )}
      </a>
    );
  };

  if (isLoading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!item && !isLoading) {
    return (
      <div className="container py-5 text-center">
        <h2>Resource not found</h2>
        <p>The requested resource could not be found.</p>
        <Link href="/blogs" className="btn btn-primary">
          Return to Resources
        </Link>
      </div>
    );
  }

  const displayContent = translatedContent || item;
  const schema = generateSchema(item);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : `https://devnagri.com${item.link}`;

  const handleRelatedItemClick = (relatedItem) => {
    if (
      relatedItem.translation === true ||
      relatedItem.type === "translation"
    ) {
      const fromLang = relatedItem.fromLanguage || "english";
      const toLang = relatedItem.toLanguage || "hindi";
      router.push(`/${fromLang}-to-${toLang}-translation`);
      return;
    }

    const link = (
      relatedItem.link ||
      relatedItem.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
    ).replace(/^\/+|\/+$/g, "");
    
    router.push(`/${link}`);
  };

  const imageUrl = item?.image
  ? item.image.startsWith("https")
    ? item.image
    : `https://devnagri.com${item.image}`
  : "https://devnagri.com/assets/images/blogs-new-images/life-insurance-leaders-translated-over-a-million-words-in-less-than-30-days.png";

  return (
    <>
      <Head>
        <title>{item.title}</title>
        <meta name="description" content={item.description} />
        <meta name="keywords" content={item.meta || "Blog Detail"} />

        {/* Open Graph */}
        <meta property="og:title" content={item.title} />
        <meta property="og:description" content={item.description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={`https://devnagri.com${item.link}`} />
        <meta property="og:type" content="article" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DevnagriAI" />
        <meta name="twitter:title" content={item.title} />
        <meta name="twitter:description" content={item.description} />
        <meta name="twitter:image" content={imageUrl} /> 

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="P0GXIC42VCPtzhJ0U1AMg6_AV8z5s3IYdZ0-nzjtsH4"
        />

        {/* Schema.org */}
        {schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )}
      </Head>

      {/* HubSpot Script */}
      <Script
        src="https://js.hsforms.net/forms/embed/46866158.js"
        strategy="afterInteractive"
      />

      {/* Hero Section */}
      <section
        className="post-hero bg-img"
        style={{
          backgroundImage: `url(${getImagePath(
            "simple-banner-background.png"
          )})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <span className="f-14 f-500 blue text-capitalize">
                {item?.type}
              </span>
              <h1 className="f-42 f-600 wow fadeIn">{displayContent?.title}</h1>
            </div>
            <div className="col-md-6">
              <div className="post-featured-image">
                <img
                  src={item?.image ?? "https://via.placeholder.com/600x400"}
                  alt={displayContent?.title}
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="blog-posts-content mt-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              {/* Sticky Tabs */}
              <div className="d-flex justify-content-center align-items-center resource-tabs-inner-nav resources-tab-details-page mb-4">
                <ul className="nav nav-tabs" id="resourceTab" role="tablist">
                  {Object?.entries(contentTypes)?.map(([type, data]) => (
                    <li className="nav-item" role="presentation" key={type}>
                      <Link
                        href={`/blogs?tab=${type}`}
                        className={`nav-link f-20 f-500 ${
                          item.type === type ? "active" : ""
                        }`}
                      >
                        {data.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Main Post Content */}
              <article className="post-content">
                {displayContent?.content?.map((htmlString, index) => (
                  <div
                    key={index}
                    dangerouslySetInnerHTML={{ __html: htmlString }}
                  />
                ))}

                {/* Share Buttons */}
                <div className="share-buttons mt-4">
                  <span className="f-16 f-500 me-2">Share:</span>
                  <ShareButton platform="facebook" url={currentUrl} />
                  <ShareButton platform="twitter" url={currentUrl} />
                  <ShareButton platform="linkedin" url={currentUrl} />
                </div>
                <div className="mt-4 p-4 md:p-6 bg-white">
                  <h3 className="sidebar-title text-lg md:text-xl font-semibold text-blue-600 mb-4">
                    Author Bio
                  </h3>

                  <div
                    className="latest-post-item flex flex-col sm:flex-row items-start sm:items-center gap-4 cursor-pointer"
                    role="button"
                    tabIndex={0}
                  >
                    <div className="latest-post-content flex-1">
                      <h4 className="text-md md:text-lg font-medium text-black mb-2">
                        Gurpreet
                      </h4>

                      <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                        Gurpreet is a technical content writer at Devnagri with
                        over 6 years of experience, blending analytical and
                        strategic expertise in technical writing. Holding a
                        Bachelor's in Science and a Master's in Marketing,
                        Gurpreet crafts impactful content across advanced
                        technology domains including language models, software
                        and web development, cloud computing, VAPT, artificial
                        intelligence, and machine learning. Their portfolio also
                        covers cybersecurity, SaaS solutions, IoT, API
                        integration, UI/UX, e-commerce platforms, edge
                        computing, and digital transformation trends — making
                        complex topics accessible to readers from all
                        backgrounds.
                      </p>
                      <div className="col-lg-3">
                        <a 
                          href="https://www.linkedin.com/in/gurpreet-singh-56955a1ab/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <div className="social-icons share-btn linkedin">
                            <i className="bi bi-linkedin f-18" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="subsribe-blogsection mb-4">
                  <h3 className="sidebar-title f-20 f-600 blue">
                    Subscribe to Our {contentTypes[item?.type]?.name || "Blog"}
                  </h3>
                  <div
                    className="hs-form-frame"
                    data-region="na1"
                    data-form-id="df3dce96-f106-4397-9c94-d2f46c95ceb7"
                    data-portal-id="46866158"
                  ></div>
                </div>

                <div className="latest-posts mt-4">
                  <h3 className="sidebar-title f-20 f-600 blue">
                    Latest {contentTypes[item?.type]?.name || "Posts"}
                  </h3>
                  {relatedPosts?.map((relatedItem, index) => (
                    <div
                      key={index}
                      className="latest-post-item mb-3 cursor-pointer"
                      role="button"
                      tabIndex={0}
                      onClick={() => handleRelatedItemClick(relatedItem)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handleRelatedItemClick(relatedItem);
                        }
                      }}
                    >
                      <img
                        src={relatedItem.image}
                        alt={relatedItem.title}
                        className="latest-post-img"
                        width={80}
                        height={80}
                      />
                      <div className="latest-post-content">
                        <h4 className="f-500 black">{relatedItem.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="our-latest-blog py-5">
        <div className="container">
          <h2 className="f-40 f-600 black pb-3 text-center wow fadeInUp">
            Related{" "}
            <span className="blue">
              {contentTypes[item?.type]?.name || "Resources"}
            </span>
          </h2>
          <div className="row pt-4">
            {relatedPosts?.map((relatedItem) => (
              <div
                className="col-md-4 fadeInUp cursor-pointer"
                key={relatedItem.id}
                role="button"
                tabIndex={0}
                onClick={() => handleRelatedItemClick(relatedItem)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleRelatedItemClick(relatedItem);
                  }
                }}
              >
                <div className="resource-card wow fadeInUp">
                  <img
                    src={relatedItem.image}
                    alt={relatedItem.title}
                    className="resource-img"
                    width={400}
                    height={250}
                  />
                  <div className="p-4">
                    <span className="resource-tag tag-blog f-400">
                      {contentTypes[relatedItem.type]?.name || relatedItem.type}
                    </span>
                    <h3 className="f-20 f-600 black mb-2">
                      {relatedItem.title}
                    </h3>
                    <p className="f-16 f-400 para-color mb-0">
                      {relatedItem.description}
                    </p>
                    <div className="resource-meta">
                      <span className="f-14 f-400 para-color">
                        {relatedItem.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ResourcesDetail;