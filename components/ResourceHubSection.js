import React, { useEffect } from 'react';
import Link from "next/link";
import fullDataset from "../data/howWeHelpData.json";
import { getImagePath } from "../utils/imageUtils";

const ResourceHubSection = () => {
  const data = fullDataset?.howWeHelpCards.slice(0, 3);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.$) {
      $(document).ready(function () {
        $(".resources-blogs-slider").slick({
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
            {
              breakpoint: 1024,
              settings: { slidesToShow: 2 },
            },
            {
              breakpoint: 768.99,
              settings: { slidesToShow: 1 },
            },
          ],
        });
      });
    }
  }, []);

  return (
    <section className="blog-section mt-4">
      <div className="container">
        <h2 className="f-40 f-600 pb-2 black text-center wow fadeInUp">
          Resource <span className="blue">Hub</span>
        </h2>
        {/* Desktop View */}
        <div className="d-none d-lg-block">
          <div className="row pt-4">
            {data?.map((item) => {
              let targetLink = "";
              if (item?.translation === true || item.type === "translation") {
                const fromLang = item.fromLanguage || "english";
                const toLang = item.toLanguage || "hindi";
                targetLink = `/${fromLang}-to-${toLang}-translation`;
              } else {
                const link = (
                  item.link ||
                  item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
                ).replace(/^\/+|\/+$/g, "");
                targetLink = `/${link}`;
              }
              return (
                <div className="col-md-4 fadeInUp">
                  <div className="resource-card wow fadeInUp" key={item.id}>
                    <Link
                      href={targetLink}
                      state={{ item: { ...item, link: targetLink } }}
                    >
                      <img
                        src={item.image}
                        alt={item?.title}
                        className="resource-img"
                      />
                      <div className="p-4">
                        <span className="resource-tag tag-blog f-400">
                          {item.type === "case-studies"
                            ? "Case Studies"
                            : item.type === "success-stories"
                            ? "Success Stories"
                            : item.type.charAt(0).toUpperCase() +
                              item.type.slice(1)}
                        </span>
                        <h3 className="f-20 f-600 black mb-2">
                          {" "}
                          {typeof item.title === "string"
                            ? item.title
                            : item.title.text}
                        </h3>
                        <p className="f-16 f-400 para-color mb-0">
                          {typeof item.description === "string"
                            ? item.description
                            : item.description.text}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Mobile View */}
        <div className="mobile-blogs-section d-block d-lg-none">
          <div className="resources-blogs-slider">
            {data?.map((item) => {
              let targetLink = "";
              if (item?.translation === true || item.type === "translation") {
                const fromLang = item.fromLanguage || "english";
                const toLang = item.toLanguage || "hindi";
                targetLink = `/${fromLang}-to-${toLang}-translation`;
              } else {
                const link = (
                  item.link ||
                  item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
                ).replace(/^\/+|\/+$/g, "");
                targetLink = `/${link}`;
              }
              return (
                <Link
                  key={item.id}
                  href={targetLink}
                  state={{ item: { ...item, link: targetLink } }}
                >
                  <div className="resource-card">
                    <img
                      src={item.image}
                      alt={item?.title}
                      className="resource-img"
                    />
                    <div className="p-4">
                      <span className="resource-tag tag-blog f-400">
                        {item.type === "case-studies"
                          ? "Case Studies"
                          : item.type === "success-stories"
                          ? "Success Stories"
                          : item.type.charAt(0).toUpperCase() +
                            item.type.slice(1)}
                      </span>
                      <h3 className="f-20 f-600 black mb-2">
                        {" "}
                        {typeof item.title === "string"
                          ? item.title
                          : item.title.text}
                      </h3>
                      <p className="f-16 f-400 para-color mb-0">
                        {typeof item.description === "string"
                          ? item.description
                          : item.description.text}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceHubSection;
