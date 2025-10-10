import React, { useEffect } from 'react';
import { team } from '../../data/team';
import { getImagePath } from '../../utils/imageUtils';
import Link from 'next/link';

const TeamSlider = () => {
  useEffect(() => {
    const $ = window.$;
    if ($ && $('.team-slider').length && !$('.team-slider').hasClass('slick-initialized')) {
      $('.team-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
          {
            breakpoint: 1399.99,
            settings: { slidesToShow: 3 },
          },
          {
            breakpoint: 1080,
            settings: { slidesToShow: 2 },
          },
          {
            breakpoint: 768.99,
            settings: { slidesToShow: 1 },
          },
        ],
      });
    }

    return () => {
      if ($ && $('.team-slider').hasClass('slick-initialized')) {
        $('.team-slider').slick('unslick');
      }
    };
  }, []);

  return (
    <div className="team-slider position-relative wow fadeInUp">
      {team.map((member) => (
        <div key={member.id}>
          <div className="team-card rounded-4">
            <div className="team-card-img">
              <img
                src={getImagePath(member.image)}
                alt="team"
                className="w-100 rounded-4"
              />
            </div>
            <div className="team-card-detils">
              <div className="team-car-detils-left">
                <h6 className="f-18 f-600 black m-0">{member.name}</h6>
                <p className="m-0 para-color f-400">{member.role}</p>
              </div>
              <div className="team-car-detils-right">
                <span className="follow-icon">
                  <Link href={member.linkedin}>
                    <i className="bi bi-linkedin" />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamSlider;
