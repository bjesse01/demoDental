import React from "react";
// import dent1 from "../assets/doc1.png";
import dent2 from "../assets/doc2.png";
import dent3 from "../assets/doc3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Testimony = () => {
  const testimonials = [
    {
      id: 1,
      image: dent2,
      name: "Arron Ramsey",
      review:
        "I'd been avoiding the dentist for years due to bad experiences. A reminder SMS is sent the working day beforehand. I also had a call confirming appointment. I have been a patient ever since. My dentistis very reassuring and very helpful. Excellent treatment and advise.",
    },
    {
      id: 2,
      image: dent3,
      name: "Mary Samantha",
      review:
        "I'd been avoiding the dentist for years due to bad experiences. A reminder SMS is sent the working day beforehand. I also had a call confirming appointment. I have been a patient ever since. My dentistis very reassuring and very helpful. Excellent treatment and advise.",
    },
    {
      id: 3,
      image: dent2,
      name: "John Deo",
      review:
        "I'd been avoiding the dentist for years due to bad experiences. A reminder SMS is sent the working day beforehand. I also had a call confirming appointment. I have been a patient ever since. My dentistis very reassuring and very helpful. Excellent treatment and advise.",
    },
    {
      id: 4,
      image: dent3,
      name: "Jessica Brown",
      review:
        "I'd been avoiding the dentist for years due to bad experiences. A reminder SMS is sent the working day beforehand. I also had a call confirming appointment. I have been a patient ever since. My dentistis very reassuring and very helpful. Excellent treatment and advise.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="bg-gray-800 py-12 px-10 border-b-4 border-white">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="w-full px-5 mb-5">
            <div className="sm:flex justify-center items-center gap-10">
              <img
                className="w-[200px] h-[200px] rounded-full bg-white"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div className="sm:w-[400px] text-white sm:pt-0 pt-6">
                <p className="italic text-lg">"{testimonial.review}"</p>
                <h5 className="text-xl font-semibold mt-4">
                  {testimonial.name}
                </h5>
                <p>Dental Patient</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
