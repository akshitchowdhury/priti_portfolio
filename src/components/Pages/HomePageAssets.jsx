import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Desktop banners
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

// Mobile banners
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
import ControlledOpenSpeedDial from "../../MainPage/SpeedDia";

const desktopBanners = [h1, h3, h5, h6, h8, h10, h13, h16, h18, h19];
const mobileBanners = [m1, m3, m5, m6, m8, m10, m13, m15, m17, m20];

const bannerTitles = [
  "Adventurer Collection",
  "Go Getter Campaign",
  "Palak Handbags",
  "Luxury Handbags",
  "LC Handbags & Shoes",
  "Nurturer Series",
  "Resilient Collection",
  "Trendsetter Line",
  "Vacation Shop",
  "W-Day Special"
];

const toolsUsed = [
  { name: "Photoshop", icon: "Ps" },
  { name: "Illustrator", icon: "Ai" },
  { name: "Figma", icon: "Fg" },
  { name: "Adobe Firefly", icon: "AF" }
];

const HomePageAssets = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % desktopBanners.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + desktopBanners.length) % desktopBanners.length);
  };

  const goToSlide = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="bg-gradient-to-b from-[#d7cab2] to-[#f3eee7] min-h-screen text-gray-800 font-sans">
      {/* Hero Section */}
      

      {/* Main Carousel */}
      <div className="relative w-full overflow-hidden h-[90vh] max-h-[700px]">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={desktopBanners[current]}
              alt="carousel-banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end justify-center pb-8">
              <motion.h2 
                className="text-3xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {bannerTitles[current]}
              </motion.h2>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {desktopBanners.map((_, i) => (
            <motion.button
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? "bg-[#7E5C3A]" : "bg-white/80"
              }`}
              onClick={() => goToSlide(i)}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>  
      <ControlledOpenSpeedDial/>
      <motion.div 
        className="text-center px-6 py-16 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-[#7E5C3A]">
          Responsive Banner Designs
        </h1>
        <p className="text-lg lg:text-xl text-gray-700 mb-8">
          Professionally crafted banners optimized for all devices, created with industry-leading tools
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 ">
          {toolsUsed.map((tool, index) => (
            <motion.div
              key={index}
              className="px-4 py-2 bg-white rounded-full shadow-md flex items-center gap-2"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <span className="bg-[#7E5C3A] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                {tool.icon}
              </span>
              <span>{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Device Preview Section */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-20 py-16 items-center justify-items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {/* Desktop Preview */}
        <motion.div 
          className="relative w-full max-w-[800px]"
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative w-full h-[450px] bg-gray-100 rounded-[12px] overflow-hidden shadow-2xl border-4 border-[#555]">
            <AnimatePresence mode="wait">
              <motion.img
                key={`desktop-${current}`}
                src={desktopBanners[current]}
                alt="Desktop View"
                className="w-full h-full object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>
          <motion.p 
            className="absolute bottom-4 left-4 bg-[#7E5C3A] text-white px-4 py-1 rounded-full text-sm shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            Desktop Version
          </motion.p>
        </motion.div>

        {/* Mobile Preview */}
        <motion.div 
          className="flex flex-col items-center justify-center"
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative w-[300px] h-[600px] bg-gray-100 rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-black">
            <div className="absolute top-0 w-full h-[20px] bg-black z-10 rounded-t-[1rem]"></div>
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-[60px] h-[6px] bg-gray-400 rounded-full z-10"></div>
            <AnimatePresence mode="wait">
              <motion.img
                key={`mobile-${current}`}
                src={mobileBanners[current]}
                alt="Mobile View"
                className="w-full h-full object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>
          <motion.p 
            className="mt-4 bg-[#C5BC59] text-white px-4 py-1 rounded-full text-sm shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            Mobile Version
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Controls and Info */}
      <motion.div 
        className="flex flex-col items-center gap-8 pb-16 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex justify-center gap-6">
          <motion.button
            onClick={prevSlide}
            className="flex items-center gap-2 bg-[#7E5C3A] hover:bg-[#5a3f29] text-white px-6 py-3 rounded-full shadow-lg transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Previous
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="flex items-center gap-2 bg-[#C5BC59] hover:bg-[#a7a146] text-white px-6 py-3 rounded-full shadow-lg transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Next
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </div>

        <motion.div 
          className="max-w-2xl text-center bg-white/80 p-6 rounded-xl shadow-md"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-xl font-bold text-[#7E5C3A] mb-3">Design Process</h3>
          <p className="text-gray-700">
            Each banner is meticulously crafted in Photoshop for pixel-perfect visuals, 
            enhanced with vector elements from Illustrator, prototyped in Figma for responsive layouts, 
            and sometimes augmented with AI-generated assets from Adobe Firefly for unique textures and patterns.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePageAssets;