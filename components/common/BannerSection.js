import React from 'react';
import { Link } from 'react-router-dom';
import { getImagePath } from '../../utils/imageUtils';

const BannerSection = ({ 
  image = "Home page banner_.png",
  link = "/english-to-hindi-translation",
  className = "pb-5"
}) => {
  return (
    <section className={className}>
      <div className="container">
        <div className="row">
          <div className="col-12 wow fadeInUp">
            <Link href={link}>
              <img
                src={getImagePath(image)}
                className="w-100 rounded-4"
                alt="Banner"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
