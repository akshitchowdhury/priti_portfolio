import React from 'react';

const Pallette = () => {
  return (
    <div className="flex justify-center items-center h-[170px] md:h-[270px] bg-[#fdfaf4] gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 flex-wrap">
      {/* Color Circles */}
      <div className="w-14 h-14 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-full bg-[#D97643]"></div>
      <div className="w-14 h-14 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-full bg-[#E3BB88]"></div>
      <div className="w-14 h-14 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-full bg-[#C5BC59]"></div>
      <div className="w-14 h-14 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-full bg-[#F0D8CC]"></div>
      <div className="w-14 h-14 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-full bg-[#7E5C3A]"></div>
    </div>
  );
};

export default Pallette;
