import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import { getImagePath } from "../utils/imageUtils";

const teamMembers = [
  {
    id: "arpit-sharma",
    name: "Arpit Sharma",
    role: "SVP- Customer Acquisition",
    img: "aboutus-image/arpit.jpg",
    linkedin: "https://www.linkedin.com/in/arpit-sharma-51884b50/",
  },
  {
    id: "manmeet-kaur",
    name: "Manmeet Kaur",
    role: "SVP – Customer Success",
    img: "aboutus-image/manmeet-kaur.jpg",
    linkedin: "https://www.linkedin.com/in/manmeetka/",
  },
  {
    id: "michael-singh",
    name: "Michael Singh",
    role: "VP-CRM",
    img: "aboutus-image/Michael-Singh.jpg",
    linkedin: "#",
  },
  {
    id: "jaspreet-singh",
    name: "Jaspreet Singh",
    role: "Head of Engineering",
    img: "aboutus-image/jaspreet-oberoi.jpg",
    linkedin: "https://www.linkedin.com/in/jasoberoi/",
  },
  {
    id: "shima-kundra",
    name: "Shima M Kundra",
    role: "HR Head",
    img: "aboutus-image/shima-m-kundra.png",
    linkedin: "https://www.linkedin.com/in/shima-m-kundra-a113961aa/",
  },
];

const PrevArrow = (props) => (
  <button {...props} type="button" className="slick-prev">
    <i className="fas fa-chevron-left"></i>
  </button>
);

const NextArrow = (props) => (
  <button {...props} type="button" className="slick-next">
    <i className="fas fa-chevron-right"></i>
  </button>
);

const teamSliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

const OurTeamSection = () => {
  return (
    <section
      className="our-team py-5 bg-img"
      style={{ backgroundImage: `url(${getImagePath("testimonil-bg.png")})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="f-40 f-600 black pb-2 wow fadeInUp">
              Our <span className="blue">Team</span>
            </h2>
            <p className="f-400 para-color pb-4 wow fadeInUp">
              We are a diverse group of AI engineers, product designers,
              linguists, and strategists who all work together to make
              communication possible in every language.
            </p>
          </div>
        </div>

        <div className="team-slider position-relative wow fadeInUp">
          <Slider {...teamSliderSettings}>
            {teamMembers.map((member) => (
              <div key={member.id}>
                <div className="team-card rounded-4">
                  <div className="team-card-img">
                    <img
                      src={getImagePath(member.img)}
                      alt={member.name}
                      className="w-100 rounded-4"
                    />
                  </div>
                  <div className="team-card-detils d-flex justify-content-between align-items-center mt-3">
                    <div className="team-car-detils-left">
                      <h6 className="f-18 f-600 black m-0">{member.name}</h6>
                      <p className="m-0 para-color f-400">{member.role}</p>
                    </div>
                    {member.linkedin && (
                      <div className="team-car-detils-right">
                        <Link
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="follow-icon"
                        >
                          <i className="bi bi-linkedin" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
