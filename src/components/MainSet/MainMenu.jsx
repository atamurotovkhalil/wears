import React from "react";
import image from "../../assets/shopping2.jpg";
import image1 from "../../assets/shopping3.jpg";
import image2 from "../../assets/shopping4.jpg";
import Slider from "react-slick";
import { Products } from "../Products/Products";
import TopProducts from "../TopProducts/TopProducts";
import { Subscribe } from "../Subscribe/Subscribe";
import { Testimonial } from "../Testimonial/Testimonial";
import { Banner } from "../Banner/Banner";

const ImageList = [
  {
    id: 1,
    img: image,
    title: "Up to 50% off on all Women`s Wear",
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
       Natus voluptatum minima numquam necessitatibus 
       aspernatur ducimus aliquid qui accusantium 
      recusandae delectus, error dicta maiores id officiis
       quas autem, nam dolor commodi.`,
  },
  {
    id: 2,
    img: image1,
    title: "Up to 50% off on all Women`s Wear",
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
       Natus voluptatum minima numquam necessitatibus 
       aspernatur ducimus aliquid qui accusantium 
      recusandae delectus, error dicta maiores id officiis
       quas autem, nam dolor commodi.`,
  },
  {
    id: 3,
    img: image2,
    title: "Up to 50% off on all Women`s Wear",
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
       Natus voluptatum minima numquam necessitatibus 
       aspernatur ducimus aliquid qui accusantium 
      recusandae delectus, error dicta maiores id officiis
       quas autem, nam dolor commodi.`,
  },
];

export const MainMenu = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div>
    <div
      className="relative overflow-hidden min-h-[550px] sm:min-h-[650p] bg-gray-100
    flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
    >
      <div
        className="h-[700px] w-[700px] bg-orange-500 absolute -top-1/3 right-0 rounded-3xl
      rotate-45 -z-9"
      ></div>
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList?.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div
                  className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center
                    sm:text-left order-2 sm:order-1 relative z-10"
                >
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold dark:text-white"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-xl dark:text-white"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                  >
                    <button
                      className="bg-gradient-to-r from-orange-600 to bg-orange-400
                            hover:scale-105 duration-200 text-white py-2 px-4
                            rounded-full"
                      onClick={handleOrderPopup}
                    >
                      Order now
                    </button>
                  </div>
                </div>
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px]
                            sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    <Products></Products>
    <TopProducts></TopProducts>
    <Subscribe></Subscribe>
    <Banner></Banner>
    <Testimonial></Testimonial>
    </div>
  );
};
