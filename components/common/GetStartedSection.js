import React from 'react';
import { Link } from 'react-router-dom';
import StatsSection from './StatsSection';
import { stats } from '../../data/stats';

const GetStartedSection = ({
  title = "If Your Message Crosses Borders, So Does Your Business",
  buttonText = "Start Now",
  buttonLink = "https://account.devnagri.com/register",
  showStats = true
}) => {
  return (
    <section className="get-strated bg-img">
      <div className="container">
        <h2 className="text-center f-40 f-600 white pe-4 ps-4 pb-3 pt-3 wow fadeInUp">
          {title}
        </h2>
        {showStats && <StatsSection stats={stats} />}
        <div className="text-center wow fadeInUp mt-5">
          <Link href={buttonLink} className="white">
            <button type="btn" className="devnagri-btn">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
