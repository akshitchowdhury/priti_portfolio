import React from 'react';
import './About.css'; // Import the CSS file for styling
import aboutLogo from "../../assets/aboutLogo.png"
import aboutFlower from "../../assets/aboutFlower.png"
const About = () => {
  return (
    
      <div className="flex flex-col md:flex-row bg-white max-w-full w-full shadow-md rounded-md overflow-hidden">

        {/* Left Section - Image */}
        <div className="bg-[#F5E6DA] flex flex-row  justify-start items-center p-20 w-full md:w-1/2 ">
          <img
            src={aboutLogo}
            alt="Decorative G with flower"
            className="max-h-[400px] object-contain"
          />
          <img src={aboutFlower} alt="flower" className="-mx-[140px] h-[150px] w-[150px] " />
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] md:h-auto md:w-[3px] bg-[#f8f5f3]" />

        {/* Right Section - Text */}
        <div className="judson-regular bg-[#F5E6DA] py-28 px-20 flex items-center w-full md:w-2/3 text-[#8c4c2f] text-base leading-relaxed">
          <p>
            Hi, I’m Priti, a graphic designer with <strong>2.7 years</strong> of experience creating graphics and prints.
            From brand promotions to marketing materials, I specialize in crafting designs that bring a brand’s identity to life.
            I collaborate closely with category managers and cross-functional teams to deliver impactful, on-brand designs that engage
            audiences and elevate visibility. Explore my work, and let’s create something amazing together!
          </p>
        </div>

      </div>

  );
};

export default About;
