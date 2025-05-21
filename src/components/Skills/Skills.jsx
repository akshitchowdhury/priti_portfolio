import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';
import GalleryShow from './GalleryShow/GalleryShow';
// First Row Imports
import i1 from "/src/assets/skills/figma.png";
import i2 from "/src/assets/skills/photoshop.png";
import i3 from "/src/assets/skills/adobeillustrator.png";
import i4 from "/src/assets/skills/id.png";
import i5 from "/src/assets/skills/midjourney.png";
import i6 from "/src/assets/skills/xd.png";

// Second Row Imports
import i1_2 from "/src/assets/skills/adobe.png";
import i2_2 from "/src/assets/skills/pencil.png";
import i3_2 from "/src/assets/skills/word.png";
import i4_2 from "/src/assets/skills/ppt.png";

// Asymmetric container animation
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      staggerDirection: -1 // Stagger in reverse for some rows
    }
  }
};

// Unique floating effects for each icon
const getFloatingEffect = (index) => ({
  y: [0, -10 - Math.random() * 15, 0], // Random float height (10-25px)
  x: [0, (Math.random() - 0.5) * 10, 0], // Slight random horizontal drift
  rotate: [0, (Math.random() - 0.5) * 5, 0], // Subtle random rotation
  transition: {
    duration: 3 + Math.random() * 2, // Random duration (3-5s)
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
    delay: index * 0.2 // Stagger start times
  }
});

// Unique hover effects
const getHoverEffect = () => ({
  y: [0, -15 - Math.random() * 10, 0],
  rotate: (Math.random() - 0.5) * 20, // Random rotation between -10 and 10deg
  scale: 1.15,
  transition: {
    duration: 0.6,
    type: "spring",
    bounce: 0.5
  }
});

const Skills = ({id}) => {
const firstRowSkills = [
  { src: i1, alt: "Figma" },
  { src: i2, alt: "Photoshop" },
  { src: i3, alt: "Illustrator" },
  { src: i4, alt: "InDesign" },
  { src: i5, alt: "Midjourney" },
  { src: i6, alt: "Adobe XD" },
];

const secondRowSkills = [
  { src: i1_2, alt: "Adobe" },
  { src: i2_2, alt: "Pencil" },
  { src: i3_2, alt: "Word" },
  { src: i4_2, alt: "PowerPoint" },
];

  return (
    <section id={id}>
    <div className="bg-[#EED4C5] py-16 px-4 sm:px-6 flex flex-col items-center">
      {/* Title */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="gloock-regular text-[#8C4C2F] text-3xl sm:text-4xl mb-12 sm:mb-16 text-center"
      >
        Software Skills
      </motion.h2>
      
      {/* Icons Grid */}
      <div className="flex flex-col gap-y-12 items-center w-full max-w-7xl">
        {/* First Row - Floats upward */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 sm:gap-10 w-full px-4 sm:px-0"
        >
          {firstRowSkills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 80 + Math.random() * 40, // Random stiffness
                    damping: 8 + Math.random() * 4 // Random damping
                  }
                }
              }}
              className="flex flex-col items-center"
            >
              <motion.div
                animate={getFloatingEffect(index)}
                whileHover={getHoverEffect()}
                className="p-3 bg-white/30 rounded-full shadow-lg backdrop-blur-sm"
                style={{
                  rotate: Math.random() * 5 - 2.5 // Initial slight random tilt
                }}
              >
                <motion.img 
                  src={skill.src} 
                  alt={skill.alt} 
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
                  whileHover={{ filter: "grayscale(0%)" }}
                  initial={{ filter: "grayscale(20%)" }}
                />
              </motion.div>
              <motion.span 
                className="mt-3 text-[#8C4C2F] font-medium text-sm sm:text-base"
                initial={{ opacity: 0 }}
                whileHover={{ 
                  opacity: 1,
                  y: -5 // Slight lift on hover
                }}
                transition={{ duration: 0.3 }}
              >
                {skill.alt}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

        {/* Second Row - Floats downward */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10 w-full px-8 sm:px-12 md:px-24 lg:px-40"
        >
          {secondRowSkills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: -30 }, // Starts above instead of below
                show: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100 + Math.random() * 50,
                    damping: 10 + Math.random() * 5
                  }
                }
              }}
              className="flex flex-col items-center"
            >
              <motion.div
                animate={{
                  ...getFloatingEffect(index),
                  y: [0, 10 + Math.random() * 15, 0] // Floats downward instead
                }}
                whileHover={{
                  ...getHoverEffect(),
                  y: [0, 15 + Math.random() * 10, 0] // Hover bounces down
                }}
                className="p-3 bg-white/30 rounded-full shadow-lg backdrop-blur-sm"
                style={{
                  rotate: Math.random() * 5 - 2.5
                }}
              >
                <motion.img 
                  src={skill.src} 
                  alt={skill.alt} 
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
                  whileHover={{ filter: "grayscale(0%)" }}
                  initial={{ filter: "grayscale(20%)" }}
                />
              </motion.div>
              <motion.span 
                className="mt-3 text-[#8C4C2F] font-medium text-sm sm:text-base"
                initial={{ opacity: 0 }}
                whileHover={{ 
                  opacity: 1,
                  y: 5 // Slight drop on hover
                }}
                transition={{ duration: 0.3 }}
              >
                {skill.alt}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

        <GalleryShow />
      </div>
    </div>
    </section>
  );
};

export default Skills;