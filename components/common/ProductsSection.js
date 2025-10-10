import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { getImagePath } from "../../utils/imageUtils";

const ProductsSection = ({ data }) => {
  const [activeTab, setActiveTab] = useState(() => data?.tabs?.[0]?.id ?? null);
  const [activeSubTab, setActiveSubTab] = useState(() => data?.tabs?.[0]?.subTabs?.[0]?.id ?? null);
  const videoRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    if (!data) return;
    const firstTab = data.tabs?.[0];
    if (firstTab) {
      setActiveTab((t) => t ?? firstTab.id);
      setActiveSubTab((s) => s ?? firstTab.subTabs?.[0]?.id);
    }
  }, [data]);

  const currentTab = data?.tabs?.find(tab => tab.id === activeTab) || { subTabs: [] };
  const currentSubTab = currentTab.subTabs?.find(subTab => subTab.id === activeSubTab) || {};

  // Handle video play/pause & loading when activeSubTab changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !currentSubTab.video) return;

    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    // Reset video and load new source
    video.src = getImagePath(currentSubTab.video);
    video.load();
    video.muted = true;

    // Set up new IntersectionObserver
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay might be blocked, that's okay
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );

    observerRef.current.observe(video);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [activeSubTab, currentSubTab.video]);

  return (
    <div className="services_heading">
      <h2 className="text-center f-40 f-600 pb-4 black wow fadeInUp">
        {(data?.title || "").split(/(Products)/).map((part, index) =>
          part === "Products" ? (
            <span key={index} className="blue">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </h2>

      <div>
        <ul className="nav nav-pills justify-content-center align-items-center mb-4 wow fadeInUp gap-3" id="offerTabs" role="tablist">
          {data?.tabs?.map(tab => (
            <li key={tab.id} className="nav-item" role="presentation">
              <button
                className={`nav-link f-20 f-500 white ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(tab.id);
                  setActiveSubTab(tab.subTabs?.[0]?.id ?? null);
                }}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>

        <div className="tab-content tab-card">
          <div className="tab-pane fade show active" id={activeTab} role="tabpanel">
            <div className="services_content">
              <div className="services_title_main">
                <div className="services_title">
                  <ul className="nav nav-pills flex-column" id="pills-tab" role="tablist">
                    {currentTab.subTabs?.map(subTab => (
                      <li key={subTab.id} className="nav-item" role="presentation">
                        <button
                          className={`nav-link services-nav-link ${activeSubTab === subTab.id ? 'active' : ''}`}
                          onClick={() => setActiveSubTab(subTab.id)}
                        >
                          <div className="tab_innerimg_icon">
                            <img src={getImagePath(subTab.icon)} alt={subTab.title} />
                          </div>
                          <div className="nav_btncontent f-20 f-600">{subTab.title}</div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="home_services_inners">
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane show active" role="tabpanel">
                    <div className="inner_tab_content">
                      <div className="main_tab_content">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="product-viedo-box">
                              {currentSubTab.video ? (
                                <video
                                  key={currentSubTab.id}
                                  ref={videoRef}
                                  autoPlay
                                  loop
                                  muted
                                  playsInline
                                  className="rounded-4"
                                  style={{ width: "100%", height: "100%" }}
                                >
                                  <source src={getImagePath(currentSubTab.video)} type="video/mp4" />
                                  Your browser does not support the video tag.
                                </video>
                              ) : currentSubTab.image ? (
                                <img
                                  src={getImagePath(currentSubTab.image)}
                                  alt={currentSubTab.title}
                                  className="rounded-4"
                                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                              ) : null}
                            </div>
                          </div>

                          <div className="col-md-12">
                            <p className="m-0 f-400 para-color pt-3 pb-3">{currentSubTab.description}</p>
                            {currentSubTab.features && currentSubTab.features.length > 0 && (
                              <ul className="check-list p-0 product-showcase-feature">
                                {currentSubTab.features.map((feature, index) => (
                                  <li key={index} className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-8">
                                      <img src={getImagePath("tick-circle.png")} className="w-100" alt="tick" />
                                    </div>
                                    <div>{feature}</div>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>

                        <div className="pt-2">
                          {currentSubTab.testimonial && (
                            <h6 className="f-600 f-20 black">{currentSubTab.testimonial}</h6>
                          )}
                          <div className="register-btn">
                            <Link href={currentSubTab.link || "#"} className="white">
                              <button type="btn" className="devnagri-btn mt-3">Learn More</button>
                            </Link>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductsSection;