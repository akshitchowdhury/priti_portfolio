import React from 'react';
import flower from "../../assets/contactFlower.png";
import phone from "../../assets/phone.png";
import behance from "../../assets/behance.png";
import linkedin from "../../assets/linkedin.png";
import map from "../../assets/map.png";
import mail from "../../assets/mail.png";

const Contact = ({id}) => {
  return (
    <section id={id}>
    <div className="bg-[#beb95c] w-full py-10 px-4">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">Contact</h2>
      <div className="flex flex-col lg:flex-row justify-start items-start max-w-6xl mx-auto gap-10">
        {/* Flower Image */}
        <div className="flex-shrink-0 -ml-6 mt-2 lg:-ml-10 lg:mt-0 w-[234px] h-[237px]">
          <img src={flower} alt="flower" className="w-full h-full object-contain" />
        </div>

        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 text-white text-lg md:text-xl w-full">
          {/* Row 1 */}
          <div className="flex items-center gap-4">
            <img src={phone} alt="phone" className="w-12 h-12" />
            <span>6001993925</span>
          </div>
          <div className="flex items-center gap-4">
            <img src={linkedin} alt="linkedin" className="w-12 h-12" />
            <span className="break-words">www.linkedin.com/in/p-r-g</span>
          </div>

          {/* Row 2 */}
          <div className="flex items-center gap-4">
            <img src={mail} alt="mail" className="w-12 h-12" />
            <a href="mailto:pritirego@gmail.com" className="underline">pritirego@gmail.com</a>
          </div>
          <div className="flex items-center gap-4">
            <img src={behance} alt="behance" className="w-12 h-12" />
            <span className="break-words">www.behance.net/prett</span>
          </div>

          {/* Row 3 */}
          <div className="flex items-center gap-4 col-span-full md:col-span-1">
            <img src={map} alt="map" className="w-12 h-12" />
            <span>BTM 2nd Stage, Bengaluru</span>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
