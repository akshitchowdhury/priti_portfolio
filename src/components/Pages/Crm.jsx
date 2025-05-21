import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";

// Import your images (add more as needed)
import crmImg from "../../assets/porfolio/crm/whatsapp.png";
import pmaxImg from "../../assets/porfolio/crm/productpmax.png";
import mailerImg from "../../assets/porfolio/crm/mailer.png";
import crmHero from "../../assets/porfolio/crm/crmhero.png";
import crmHero2 from "../../assets/porfolio/crm/mailer.png";
import crmHero3 from "../../assets/porfolio/crm/whatsapp.png";
import gallery1 from "../../assets/porfolio/crm/1.jpg";
import gallery2 from "../../assets/porfolio/crm/2.jpg";
import gallery3 from "../../assets/porfolio/crm/3.jpg";
import gallery4 from "../../assets/porfolio/crm/4.jpg";
import gallery5 from "../../assets/porfolio/crm/5.jpg";
import gallery6 from "../../assets/porfolio/crm/6.jpg";
import gallery7 from "../../assets/porfolio/crm/7.jpg";
import gallery8 from "../../assets/porfolio/crm/8.jpg";
import ControlledOpenSpeedDial from "../../MainPage/SpeedDia";

// Gallery images data
const galleryImages = [
  { id: 1, src: gallery1, category: "pmax", aspect: "vertical" },
  { id: 2, src: gallery2, category: "crm", aspect: "horizontal" },
  { id: 3, src: gallery3, category: "mailer", aspect: "vertical" },
  { id: 4, src: gallery4, category: "pmax", aspect: "horizontal" },
  { id: 5, src: gallery5, category: "crm", aspect: "vertical" },
  { id: 6, src: gallery6, category: "mailer", aspect: "horizontal" },
  { id: 7, src: gallery7, category: "pmax", aspect: "vertical" },
  { id: 8, src: gallery8, category: "crm", aspect: "horizontal" },
];

// Carousel settings
const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  pauseOnHover: false,
  arrows: false,
  cssEase: 'linear',
  appendDots: dots => (
    <div className="absolute bottom-8">
      <ul className="m-0 p-0">{dots}</ul>
    </div>
  ),
  customPaging: i => (
    <div className="w-3 h-3 rounded-full bg-white opacity-50 transition-all duration-300 hover:opacity-100" />
  )
};

const AccordionSection = ({ image, title, description, isActive, onClick }) => {
  return (
    <>
    <motion.div 
      className={`relative overflow-hidden rounded-2xl shadow-lg cursor-pointer ${isActive ? 'flex-1' : 'flex-[0.5]'}`}
      initial={false}
      animate={{ flex: isActive ? 1 : 0.5 }}
      transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
      onClick={onClick}
    >
      <motion.img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        layout
        transition={{ duration: 0.5 }}
      />
      
      <motion.div 
        className="absolute inset-0 bg-black/40 flex items-end p-6"
        initial={false}
        animate={{ backgroundColor: isActive ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.4)' }}
      >
        <div className="text-white">
          <motion.h3 
            className="text-2xl font-bold mb-2"
            initial={false}
            animate={{ fontSize: isActive ? '1.75rem' : '1.25rem' }}
          >
            {title}
          </motion.h3>
          <AnimatePresence>
            {isActive && (
              <motion.p
                className="text-lg"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
    </>
  );
};

const Crm = () => {
  const heroImages = [crmHero, crmHero2, crmHero3];
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const sections = [
    {
      image: pmaxImg,
      title: "PMax Assets",
      description: "Performance Max banners curated with clarity and consistency across all ad platforms — from Google Ads to social media. Designed for conversion, tested for impact.",
      category: "pmax"
    },
    {
      image: crmImg,
      title: "CRM Campaign Creatives",
      description: "Visuals tailored for targeted CRM outreach. Designed to work seamlessly across platforms, maintaining aesthetic integrity and ensuring high open and click-through rates.",
      category: "crm",
      reverse: true
    },
    {
      image: mailerImg,
      title: "Mailers & Newsletters",
      description: "Modern and responsive mailer designs aligned with brand tone and seasonal campaigns. Clean layouts optimized for both desktop and mobile inboxes.",
      category: "mailer"
    }
  ];

  const filteredImages = activeFilter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="bg-[#f9f5ef] text-gray-900 font-['Inter'] min-h-screen">
      <ControlledOpenSpeedDial/>
      {/* Hero Carousel Section */}
      <motion.div 
        className="relative h-[60vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 backdrop-blur-sm bg-black/30 z-10" />
        
        <Slider {...carouselSettings}>
          {heroImages.map((image, index) => (
            <div key={index} className="relative h-[60vh] w-full">
              <motion.img
                src={image}
                alt={`Hero Slide ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover scale-105"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 10, ease: "linear" }}
              />
              <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
            </div>
          ))}
        </Slider>
        
        {/* Hero Content */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center z-20 text-center px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              PMax, CRM & Mailer Campaigns
            </motion.h1>
            <motion.div 
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="absolute inset-0 rounded-lg -z-10" />
              <p className="relative text-lg md:text-xl text-white/90 px-6 py-4">
                A collection of responsive, visually consistent marketing assets
                built to drive engagement across all platforms.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Accordion Sections */}
      <motion.div 
        className="px-6 md:px-16 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#7E5C3A] mb-12 text-center">
          Our Creative Solutions
        </h2>
        
        <div className="flex flex-col lg:flex-row h-[500px] gap-4 mb-16">
          {sections.map((section, index) => (
            <AccordionSection
              key={index}
              image={section.image}
              title={section.title}
              description={section.description}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-6">
          {sections.map((section, index) => (
            <motion.div 
              key={index}
              className="rounded-2xl shadow-lg overflow-hidden"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="relative h-64"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                </div>
              </motion.div>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 bg-white"
                  >
                    <p className="text-gray-700">{section.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Masonry Gallery Section */}
        <motion.section 
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#7E5C3A] mb-6 text-center">
              Campaign Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl text-center mb-8">
              Explore our collection of high-performing marketing assets across all platforms
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === "all" ? 'bg-[#7E5C3A] text-white' : 'bg-white text-[#7E5C3A]'}`}
                onClick={() => setActiveFilter("all")}
              >
                All Work
              </motion.button>
              {sections.map((section) => (
                <motion.button
                  key={section.category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === section.category ? 'bg-[#7E5C3A] text-white' : 'bg-white text-[#7E5C3A]'}`}
                  onClick={() => setActiveFilter(section.category)}
                >
                  {section.title}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((image) => (
              <motion.div 
                key={image.id}
                className="relative group break-inside-avoid overflow-hidden rounded-xl shadow-lg"
                whileHover={{ scale: 1.02 }}
                layout
              >
                <motion.img
                  src={image.src}
                  alt={`Gallery image ${image.id}`}
                  className="w-full h-auto object-cover cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">
                    {image.category === "pmax" && "PMax Campaign"}
                    {image.category === "crm" && "CRM Creative"}
                    {image.category === "mailer" && "Email Design"}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="relative max-w-6xl max-h-[90vh]"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt="Enlarged gallery image"
                className="max-w-full max-h-[80vh] object-contain"
              />
              <motion.button
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-2 text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Crm;