import React, { useState } from "react";
import h1 from "../../assets/porfolio/ADVENTURER-DSKTOP.jpg";
import h3 from "../../assets/porfolio/GOGETTER-DSKTOP.jpg";
import h5 from "../../assets/porfolio/HAND_BAGS_BANNER_PALAK-DSKTOP.jpg";
import h6 from "../../assets/porfolio/HANDBAGS_DESKTOP.jpg";
import h8 from "../../assets/porfolio/LCHANDBAGS_SHOES_BANNERDesktop.jpg";
import h10 from "../../assets/porfolio/NURTURER-DSKTOP.jpg";
import h13 from "../../assets/porfolio/RESILIENT-DSKTOP.jpg";
import h16 from "../../assets/porfolio/TRENDSETTER- DSKTOP.jpg";
import h18 from "../../assets/porfolio/VACATION_SHOP DESKTOP BANNER.jpg";
import h19 from "../../assets/porfolio/W-DAY_DESKTOP.jpg";

import m1 from "../../assets/porfolio/ADVENTURER-MOBILE.jpg";
import m3 from "../../assets/porfolio/GOGETTER-MOBILE.jpg";
import m5 from "../../assets/porfolio/PALAK HANDBAGS-MOBILE NEW.jpg";
import m6 from "../../assets/porfolio/HANDBAGS_MOBILE.jpg";
import m8 from "../../assets/porfolio/LCHANDBAGS_SHOES_MBANNER.jpg";
import m10 from "../../assets/porfolio/NURTURER-MOBILE.jpg";
import m13 from "../../assets/porfolio/RESILIENT-MOBILE.jpg";
import m15 from "../../assets/porfolio/THETRENDSETTER -MOBILE.jpg";
import m17 from "../../assets/porfolio/VACATION_SHOP_MOBILE BANNER.jpg";
import m20 from "../../assets/porfolio/W-DAY_MOBILE.jpg";

const desktopBanners = [h1, h3, h5, h6, h8, h10, h13, h16, h18, h19];
const mobileBanners = [m1, m3, m5, m6, m8, m10, m13, m15, m17, m20];

const HomePageAssets = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % desktopBanners.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + desktopBanners.length) % desktopBanners.length);
  };

  return (
    <div className="bg-gradient-to-b from-[#d7cab2] to-[#f3eee7] min-h-screen text-gray-800 font-sans">
      {/* Intro Section */}
      {/* <div className="text-center px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-[#7E5C3A]">
          Home Page Banner Showcase
        </h1>
        <p className="text-lg lg:text-xl text-gray-700">
          A curated selection of responsive homepage banners designed to elevate brand presence across all screen sizes. These visuals reflect storytelling through design, crafted with attention to composition, hierarchy, and adaptability.
        </p>
      </div> */}

      {/* Top full-width carousel */}
      <div className="relative w-full overflow-hidden max-h-[80vh]">
        <img
          src={desktopBanners[current]}
          alt="carousel-banner"
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {desktopBanners.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? "bg-[#7E5C3A] w-5" : "bg-[#d7cab2]"
              }`}
              onClick={() => setCurrent(i)}
            ></button>
          ))}
        </div>
      </div>

      {/* Dual Tiled Preview Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-20 py-12 items-center justify-items-center">
        {/* Desktop View Styled as Monitor */}
        <div className="relative w-full max-w-[800px] h-[450px] bg-gray-100 rounded-[12px] overflow-hidden shadow-xl border-4 border-[#555]">
          <img
            src={desktopBanners[current]}
            alt="Desktop View"
            className="w-full h-full object-contain transition-all duration-700 ease-in-out"
          />
          <p className="absolute bottom-2 left-4 bg-[#7E5C3A] text-white px-3 py-1 rounded-full text-sm shadow">
            Desktop View
          </p>
        </div>

        {/* Mobile View Styled as Smartphone */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[300px] h-[600px] bg-gray-100 rounded-[2rem] overflow-hidden shadow-xl border-[10px] border-black">
            <div className="absolute top-0 w-full h-[18px] bg-black z-10"></div>
            <img
              src={mobileBanners[current]}
              alt="Mobile View"
              className="w-full h-full object-contain transition-all duration-700 ease-in-out"
            />
            <p className="absolute bottom-2 left-4 bg-[#C5BC59] text-white px-3 py-1 rounded-full text-sm shadow">
              Mobile View
            </p>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="flex justify-center gap-6 pb-12">
        <button
          onClick={prevSlide}
          className="bg-[#7E5C3A] hover:bg-[#5a3f29] text-white px-6 py-2 rounded-full shadow-md transition"
        >
          Previous
        </button>
        <button
          onClick={nextSlide}
          className="bg-[#C5BC59] hover:bg-[#a7a146] text-white px-6 py-2 rounded-full shadow-md transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePageAssets;
