import React from 'react';
import { brands } from '../../data/brands';
import { getImagePath } from '../../utils/imageUtils';

const BrandSlider = () => {
  return (
    <div className="brand-slider brand-slider-whitestrip">
      <div className="brand-slider-wrapper">
        {brands.map((brand) => (
          <div key={brand.id} className="brand-item-slide">
            <img
              src={getImagePath(brand.image)}
              alt={brand.alt}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;
