import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';

// Import images
import i1 from "../../assets/porfolio/ai/1.jpg";
import i2 from "../../assets/porfolio/ai/2.jpg";
import i3 from "../../assets/porfolio/ai/3.jpg";
import i4 from "../../assets/porfolio/ai/4.jpg";
import i5 from "../../assets/porfolio/ai/5.jpg";
import i6 from "../../assets/porfolio/ai/6.jpg";
import i7 from "../../assets/porfolio/ai/7.jpg";
import i8 from "../../assets/porfolio/ai/8.jpg";
import i9 from "../../assets/porfolio/ai/9.jpg";
import hero1 from "../../assets/porfolio/ai/hero1.png";
import hero2 from "../../assets/porfolio/ai/hero2.png";
import hero3 from "../../assets/porfolio/ai/hero3.png";
import ControlledOpenSpeedDial from '../../MainPage/SpeedDia';

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

const AICard = ({ tool, description, icon, isActive, onClick }) => {
  return (
    <motion.div 
      className={`relative overflow-hidden rounded-2xl p-6 cursor-pointer ${isActive ? 'bg-gradient-to-br from-purple-500/10 to-blue-500/20' : 'bg-white/5'}`}
      onClick={onClick}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="flex items-start gap-4"
        animate={{ 
          opacity: isActive ? 1 : 0.8,
          paddingBottom: isActive ? '1.5rem' : '0.5rem'
        }}
      >
        <div className={`p-3 rounded-lg ${isActive ? 'bg-white text-purple-600' : 'bg-white/10 text-white'}`}>
          {icon}
        </div>
        <div>
          <h3 className={`text-xl font-bold ${isActive ? 'text-white' : 'text-white/90'}`}>{tool}</h3>
          <AnimatePresence>
            {isActive && (
              <motion.p
                className="text-white/80 mt-2"
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
      {isActive && (
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-blue-400"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </motion.div>
  );
};

const AIGridItem = ({ image, tool, prompt }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="relative overflow-hidden rounded-xl shadow-2xl"
      whileHover="hover"
      initial="rest"
      animate="rest"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.img
        src={image}
        alt={`AI generated image - ${tool}`}
        className="w-full h-full object-cover"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.05 }
        }}
        transition={{ duration: 0.4 }}
      />
      
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4"
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 }
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          variants={{
            rest: { y: 20 },
            hover: { y: 0 }
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="inline-block px-2 py-1 bg-purple-600 text-xs font-medium rounded mb-2">
            {tool}
          </span>
          <p className="text-white font-medium">{prompt}</p>
        </motion.div>
      </motion.div>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            className="absolute top-4 right-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-black/50 backdrop-blur-sm rounded-full p-2 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const PerformanceAds = () => {
  const heroImages = [hero1, hero2, hero3];
  const [activeTool, setActiveTool] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const tools = [
    {
      name: "Adobe Firefly",
      description: "Generative AI that creates stunning visuals from text prompts with photorealistic quality and artistic styles.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      name: "Midjourney",
      description: "Cutting-edge AI that transforms imaginative concepts into breathtaking digital artwork with surreal aesthetics.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      name: "Copilot",
      description: "AI-powered design assistant that enhances creativity and accelerates the graphic design workflow.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  const aiGallery = [
    { id: 1, image: i1, tool: "Midjourney", prompt: "Cyberpunk cityscape with neon lights and flying cars" },
    { id: 2, image: i2, tool: "Adobe Firefly", prompt: "Hyperrealistic product shot for luxury watch" },
    { id: 3, image: i3, tool: "Copilot", prompt: "Minimalist geometric patterns for brand identity" },
    { id: 4, image: i4, tool: "Midjourney", prompt: "Surreal portrait with liquid metal effects" },
    { id: 5, image: i5, tool: "Adobe Firefly", prompt: "Futuristic interface elements for HUD design" },
    { id: 6, image: i6, tool: "Copilot", prompt: "3D typography with glowing edges" },
    { id: 7, image: i7, tool: "Midjourney", prompt: "Fantasy landscape with floating islands" },
    { id: 8, image: i8, tool: "Adobe Firefly", prompt: "Product mockup with realistic materials" },
    { id: 9, image: i9, tool: "Copilot", prompt: "Abstract fluid shapes for background design" }
  ];

  const filteredGallery = activeTool === 'all' 
    ? aiGallery 
    : aiGallery.filter(item => item.tool.toLowerCase().includes(activeTool.toLowerCase()));

  return (
    <div id='top-section' className="min-h-screen text-white bg-gradient-to-br from-[#1a0f1f] via-[#8e2d6b] to-[#2b0a2f]">
      {/* Hero Carousel Section */}
      <motion.div 
        className="relative h-[60vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 backdrop-blur-sm bg-black/50 z-10" />
        
        <Slider {...carouselSettings}>
          {heroImages.map((image, index) => (
            <div key={index} className="relative h-[60vh] w-full">
              <motion.img
                src={image}
                alt={`AI Hero Slide ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover scale-105"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 10, ease: "linear" }}
              />
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
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
              AI-Powered Visual Design
            </motion.h1>
            <motion.div 
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-lg -z-10 blur-md" />
              <p className="relative text-lg md:text-xl text-white/90 px-6 py-4">
                Cutting-edge graphics created with Adobe Firefly, Midjourney and Copilot
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

          <ControlledOpenSpeedDial/>
      {/* AI Tools Section */}
      <motion.section 
        className="px-6 md:px-16 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
              AI Design Tools We Master
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Leveraging the most advanced generative AI platforms to create visuals that push creative boundaries
            </p>
          </motion.div>

          {/* AI Tools Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {tools.map((tool, index) => (
              <AICard
                key={index}
                tool={tool.name}
                description={tool.description}
                icon={tool.icon}
                isActive={activeTool === tool.name.toLowerCase()}
                onClick={() => setActiveTool(activeTool === tool.name.toLowerCase() ? 'all' : tool.name.toLowerCase())}
              />
            ))}
          </div>

          {/* AI Gallery */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold">
                {activeTool === 'all' ? 'All AI Creations' : `${tools.find(t => t.name.toLowerCase() === activeTool)?.name} Gallery`}
              </h3>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTool === 'all' ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}
                  onClick={() => setActiveTool('all')}
                >
                  Show All
                </motion.button>
              </div>
            </div>

            {/* Masonry Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.map((item) => (
                <AIGridItem
                  key={item.id}
                  image={item.image}
                  tool={item.tool}
                  prompt={item.prompt}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="relative max-w-6xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt="Enlarged AI creation"
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="mt-4 p-4 bg-gray-900/80 rounded-lg">
                <h3 className="text-xl font-bold text-white">{selectedImage.tool}</h3>
                <p className="text-gray-300">{selectedImage.prompt}</p>
              </div>
              <motion.button
                className="absolute -top-12 right-0 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-2 text-white"
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

export default PerformanceAds;