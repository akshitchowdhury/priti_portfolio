import React from 'react'
import './Home.css' // Import your CSS file for styles
import flower from "../../assets/text-flower.png"
const Home = () => {
  return (
    <>
      <div className="bg-[#B6B855] rounded-sm h-[57px] w-full flex justify-center space-x-10 mb-0">
        <button className=" text-white font-semibold px-6 py-2 ">Home</button>
        <button className=" text-white font-semibold px-6 py-2 ">About me</button>
        <button className=" text-white font-semibold px-6 py-2 ">Resume</button>
        <button className=" text-white font-semibold px-6 py-2 ">Contact</button>
      </div>
      <div className="bg-[#EED4C5] min-h-screen flex flex-col items-center w-full px-4 py-8">
      
      {/* Navbar */}
    

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full max-w-6xl mx-auto px-4">

        
        {/* Profile Picture */}
        <img
          src="/src/assets/propic.png"
          alt="Portfolio"
          className="w-[523px] h-[504px] object-cover rounded-full"
        />

        {/* Text Section */}
        <div className="text-center md:text-left">
  <h1 className="title-gloock-regular text-[#B6B855] font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
    <span className="inline-block align-middle">Priti R</span>
    <img 
      src={flower} 
      alt="flower" 
      className="inline-block align-middle h-[100px] ml-2"
    />
    <br />
    Gogoi
  </h1>
  <p className="text-[#B6B855] mt-10 text-2xl text-center md:text-center">Graphic designer</p>
</div>

      </div>
    </div>
      
      </>
    
  )
}

export default Home
