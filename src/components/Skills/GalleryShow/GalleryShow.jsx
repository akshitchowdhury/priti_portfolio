import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './GalleryShow.css';
import ITransition from './ITransition';
// import GalleryCategories from '../GalleryCategories/GalleryCategories';

const GalleryShow = () => {


  return (
    <>
      {/* <GalleryCategories/> */}

      <div className="gallery-show-container w-full h-[150vh] lg:h-[1000px]  overflow-hidden  relative">
        <div className="slideshow">
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
        </div>

        {/* Absolute positioning of ITransition */}
        <div className="ITransition absolute inset-0">
          <ITransition />
        </div>
      </div>
    </>
  );
};

export default GalleryShow;
