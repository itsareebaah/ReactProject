// src/components/common/TestimonialSection.jsx
import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const testimonials = [
  {
    id: 1,
    rating: 5,
    comment:
      "Codeware Digital transformed our website!",
    user: "Sarah Johnson",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 2,
    rating: 4,
    comment: "Great team, they really understand business needs.",
    user: "Michael Smith",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    rating: 5,
    comment: "Loved working with them, would recommend 100%.",
    user: "Aisha Khan",
    img: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    id: 4,
    rating: 5,
    comment: "Amazing service and very supportive team!",
    user: "David Lee",
    img: "https://randomuser.me/api/portraits/men/40.jpg",
  },
];

const TestimonialSection = () => {
  const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "15px", // space on mobile
      },
    },
  ],
  };

  return (
    <section className="testimonial-section py-5 bg-light mb-5">
      <div className="container text-center">
        <span className="text-primary">Testimonials</span>
        <h2 className="mb-4">What People Say About Us</h2>
        

        <Slider {...settings}>
          {testimonials.map((item) => (
            <div key={item.id} className="p-3">
              <div className="card p-4 shadow-sm h-100">
                {/* Rating */}
                <div className="stars mb-3">
                  {Array(item.rating)
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} color="gold" />
                    ))}
                </div>
                {/* Comment */}
                <p className="mb-3">{item.comment}</p>
                <hr />
                {/* User Info */}
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    src={item.img}
                    alt={item.user}
                    className="rounded-circle me-3"
                    width="50"
                    height="50"
                  />
                  <h6 className="mb-0">{item.user}</h6>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
