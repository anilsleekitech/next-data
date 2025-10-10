import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ResourceHubSection = ({ 
  title = "Resource Hub",
  data = [],
  className = "blog-section mt-4"
}) => {
  const navigate = useNavigate();

  const handleResourceClick = (item) => {
    if (item.translation === true || item.type === "translation") {
      const fromLang = item.fromLanguage || "english";
      const toLang = item.toLanguage || "hindi";
      navigate(`/${fromLang}-to-${toLang}-translation`);
      return;
    }

    const link = (
      item.link ||
      item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
    ).replace(/^\/+|\/+$/g, "");
    navigate(`/${link}`, {
      state: { item: { ...item, link } },
    });
  };

  const getResourceType = (type) => {
    if (type === "case-studies") return "Case Studies";
    if (type === "success-stories") return "Success Stories";
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  // ✅ Initialize Slick here
  useEffect(() => {
    if (window.$ && window.$.fn.slick) {
      const $slider = $(".resources-blogs-slider");
      if ($slider.length > 0) {
        $slider.slick({
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          prevArrow:
            '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
          nextArrow:
            '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
          responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768.99, settings: { slidesToShow: 1 } },
          ],
        });
      }
    }

    // Cleanup on unmount
    return () => {
      if (window.$ && window.$.fn.slick) {
        $(".resources-blogs-slider").slick("unslick");
      }
    };
  }, [data]);

  return (
    <section className={className}>
      <div className="container">
        <h2 className="f-40 f-600 pb-2 black text-center wow fadeInUp">
          {title} <span className="blue">Hub</span>
        </h2>

        {/* Desktop Grid */}
        <div className="d-none d-lg-block">
          <div className="row pt-4">
            {data.map((item, index) => (
              <div
                className="col-md-4 fadeInUp"
                key={item.id}
                onClick={() => handleResourceClick(item)}
                style={{ cursor: "pointer" }}
              >
                <div className="resource-card wow fadeInUp">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="resource-img"
                  />
                  <div className="p-4">
                    <span className="resource-tag tag-blog f-400">
                      {getResourceType(item.type)}
                    </span>
                    <h3 className="f-20 f-600 black mb-2">{item.title}</h3>
                    <p className="f-16 f-400 para-color mb-0">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Slick Slider */}
        <div className="mobile-blogs-section d-block d-lg-none">
          <div className="resources-blogs-slider">
            {data.map((item) => (
              <div
                className="resource-card"
                key={item.id}
                onClick={() => handleResourceClick(item)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="resource-img"
                />
                <div className="p-4">
                  <span className="resource-tag tag-blog f-400">
                    {getResourceType(item.type)}
                  </span>
                  <h3 className="f-20 f-600 black mb-2">{item.title}</h3>
                  <p className="f-16 f-400 para-color mb-0">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceHubSection;
