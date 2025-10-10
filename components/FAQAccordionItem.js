// src/components/FAQ/FAQAccordionItem.jsx

import React from "react";

const FAQAccordionItem = ({ index, activeIndex, toggle, question, answer }) => {
  const isOpen = activeIndex === index;

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className={`accordion-button f-500 ${isOpen ? "" : "collapsed"}`}
          type="button"
          onClick={() => toggle(index)}
          aria-expanded={isOpen}
          aria-controls={`collapse${index}`}
        >
          {question}
        </button>
      </h2>
      <div
        id={`collapse${index}`}
        className={`accordion-collapse collapse fade ${isOpen ? "show" : ""}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body f-400 para-color">{answer}</div>
      </div>
    </div>
  );
};

export default FAQAccordionItem;
