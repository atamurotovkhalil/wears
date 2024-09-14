import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    name: "Victor",
    id: 1,
    title: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            officiis sunt earum molestiae nam nostrum laborum, autem recusandae
            incidunt sequi voluptas sint exercitationem tempora,`,
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    name: "Satya Nadella",
    id: 2,
    title: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            officiis sunt earum molestiae nam nostrum laborum, autem recusandae
            incidunt sequi voluptas sint exercitationem tempora,`,
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
  {
    name: "Virat Kohli",
    id: 3,
    title: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            officiis sunt earum molestiae nam nostrum laborum, autem recusandae
            incidunt sequi voluptas sint exercitationem tempora,`,
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355",
  },
  {
    name: "Vrian Jhet",
    id: 4,
    title: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            officiis sunt earum molestiae nam nostrum laborum, autem recusandae
            incidunt sequi voluptas sint exercitationem tempora,`,
    url: "https://via.placeholder.com/600/d32776",
    thumbnailUrl: "https://via.placeholder.com/150/d32776",
  },
  {
    name: "Sachin Tendulkar",
    id: 5,
    title: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            officiis sunt earum molestiae nam nostrum laborum, autem recusandae
            incidunt sequi voluptas sint exercitationem tempora,`,
    url: "https://via.placeholder.com/600/f66b97",
    thumbnailUrl: "https://via.placeholder.com/150/f66b97",
  },
];

export const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slideToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-orange-700">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            officiis sunt earum molestiae nam nostrum laborum, autem recusandae
            incidunt sequi voluptas sint exercitationem tempora.
          </p>
        </div>
        <div 
        data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
              <div
                key={data.id}
                className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800
                bg-orange-100 relative"
              >
                <div className="mb-4">
                  <img
                    src={data.url}
                    alt=""
                    className="rounded-full w-20 h-20"
                  ></img>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="space-y-3">
                    <p className="text-xs text-gray-500">{data.title}</p>
                    <h1 className="text-xl font-bold text-black/80 dark:text-light">
                      {data.name}
                    </h1>
                  </div>
                </div>
                <p className="text-black/20 text-9xl font-serif absolute top-0 right-0 ">
                    ,,
                </p>
              </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
