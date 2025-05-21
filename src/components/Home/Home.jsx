import React from 'react';
import './Home.css';
import flower from "../../assets/text-flower.png";
import propic from "../../assets/propic.png";

const Home = ({ id }) => {
  const handleScroll = (sectionId) => {
  const element = document.getElementById(sectionId);
  
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
  return (
    <>
      <section id={id}>
        {/* Modern Navbar */}
        <nav className="bg-[#B6B855] w-full py-4 px-6 shadow-md">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="text-white font-['ClashDisplay'] text-xl font-medium">
              Priti R Gogoi
            </div>
            
            <div className="hidden md:flex space-x-8" >
              <a className="text-white font-['Satoshi'] font-medium hover:text-[#F8F8F8] transition-colors duration-300 relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a  onClick={() => handleScroll('about')}  href="/" className="text-white font-['Satoshi'] font-medium hover:text-[#F8F8F8] transition-colors duration-300 relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <section id={id}>
              <a href="#resume" className="text-white font-['Satoshi'] font-medium hover:text-[#F8F8F8] transition-colors duration-300 relative group">
                Portfolio
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              </section>
              <a href="#resume" className="text-white font-['Satoshi'] font-medium hover:text-[#F8F8F8] transition-colors duration-300 relative group">
                Skills
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-white font-['Satoshi'] font-medium hover:text-[#F8F8F8] transition-colors duration-300 relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <div className="bg-[#EED4C5] min-h-screen flex flex-col items-center w-full px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full max-w-6xl mx-auto px-4">
            {/* Profile Picture */}
            <div className="relative">
              <img
                src={propic}
                alt="Portfolio"
                className="w-[400px] md:w-[523px] h-[400px] md:h-[504px] object-cover rounded-full border-8 border-white shadow-xl"
              />
            </div>

            {/* Text Section */}
            <div className="text-center md:text-left">
              <h1 className="font-['ClashDisplay'] text-[#B6B855] font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="inline-block align-middle">Priti R</span>
                <img 
                  src={flower} 
                  alt="flower" 
                  className="inline-block align-middle h-[60px] md:h-[80px] lg:h-[100px] ml-2"
                />
                <br />
                <span className="tracking-tight">Gogoi</span>
              </h1>
              <p className="font-['Satoshi'] text-[#B6B855] mt-6 text-xl md:text-2xl text-center md:text-left">
                Graphic Designer & Visual Storyteller
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;