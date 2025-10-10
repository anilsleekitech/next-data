import React, { useState } from "react";
import FAQAccordionItem from "./FAQAccordionItem";
import faqData from "../data/faqData";
import { getImagePath } from "../utils/imageUtils";

const FAQAccordion = ({ page }) => {
  const faqs = faqData[page] || [];
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  if (faqs.length === 0) return null;

  const isHome = page === "home";

  return (
    <section
      className={`accrordian-sec ${!isHome ? "bg-img" : ""}`}
      style={!isHome ? { backgroundImage: `url(${getImagePath("testimonil-bg.png")})` } : {}}
    >
      <div className="container">
        <h2 className="f-40 f-600 pb-2 black wow fadeInUp text-center">FAQs</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12 wow fadeInUp">
            <div className="accordion" id="accordionExample">
              {faqs.map((item, index) => (
                <FAQAccordionItem
                  key={index}
                  index={index}
                  activeIndex={activeIndex}
                  toggle={toggleAccordion}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
