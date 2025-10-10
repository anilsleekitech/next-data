import React from 'react';
import { getImagePath } from '../../utils/imageUtils';

const StatsSection = ({ stats, className = "custom-stats-row", variant = "default" }) => {
  // Function to process the label text
  const renderLabel = (label) => {
    // Check if the label contains parentheses using a more robust approach
    const openParenIndex = label.indexOf('(');
    const closeParenIndex = label.indexOf(')');
    
    if (openParenIndex !== -1 && closeParenIndex !== -1 && closeParenIndex > openParenIndex) {
      // If parentheses found, split into parts
      const beforeParens = label.substring(0, openParenIndex).trim();
      const inParens = label.substring(openParenIndex, closeParenIndex + 1).trim();
      
      return (
        <>
          {beforeParens}
          <br />
          {inParens}
        </>
      );
    }
    
    // If no parentheses, return the original label
    return label;
  };

  if (variant === "brand") {
    return (
      <div className={`row py-3 ${className}`}>
        {stats.map((stat) => (
          <div key={stat.id} className="col-lg-4 col-md-6 col-12 mb-4 mb-md-0">
            <div className="stat">
              <h3 className="f-34 f-600 black pb-2 wow fadeInUp">
                <span
                  className="counter f-600 black"
                  data-target={stat.value}
                  data-suffix={stat.suffix}
                >
                  0
                </span>
              </h3>
              <div className="d-flex align-items-center gap-3">
                <div className="icon-box wow fadeInUp">
                  <img src={getImagePath(`menu-icon/${stat.icon || 'language.png'}`)} alt="" />
                </div>
                <div className="counter-text">
                  <p className="f-18 black f-500 m-0 wow fadeInUp">
                    {renderLabel(stat.label)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`row mt-5 text-center ${className}`}>
      {stats.map((stat) => (
        <div key={stat.id} className="col-6 col-md-4 custom-stats-col wow fadeInUp">
          <div
            className="custom-counter f-48 f-600 pb-3"
            data-target={stat.value}
            data-suffix={stat.suffix}
          >
            0{stat.suffix}
          </div>
          <p className="custom-label f-400 m-0">
            {renderLabel(stat.label)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;