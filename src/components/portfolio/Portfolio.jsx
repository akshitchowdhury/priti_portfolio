import { Link } from 'react-router-dom';
import i1 from "../../assets/homepagassets.png";
import i2 from "../../assets/performance.png";
import i3 from "../../assets/crm.png";
import i4 from "../../assets/apparelgraphics.png";
import i5 from "../../assets/pacagingdesign.png";
import i6 from "../../assets/art.png";

const cards = [
  {
    img: i1,
    label: "Homepage Assets",
    link: "/homepage-assets",
    color: "#D97643",
  },
  
    {
    img: i5,
    label: "AI generation & Integration",
    link: "/performance-ads",
    color: "#E3BB88",
  },
  {
    img: i3,
    label: "CRM",
    link: "/crm",
    color: "#F0D8CC",
  },
  {
    img: i4,
    label: "Branding",
    link: "/apparel-graphics",
    color: "#D97643",
  },
  {
    img: i2,
    label: "Performance ADs",
    link: "/packaging-design",
    
    color: "#E3BB88",
  },

  {
    img: i6,
    label: "Art",
    link: "/art",
    color: "#F0D8CC",
  },
];

const Portfolio = () => {
  return (
    <div className="bg-[#BEB95C] min-h-screen flex items-center justify-center px-4 sm:px-10 py-[100px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 sm:gap-[100px] w-full max-w-6xl">
        {cards.map((card, idx) => (
          <Link
            to={card.link}
            key={idx}
            className="group relative w-full transition-transform duration-500 hover:scale-105"
          >
            {/* Animated border container */}
            <div className="relative rounded-xl p-[2px] overflow-hidden h-full">
              {/* Animated gradient border */}
              <div className={`
                absolute inset-0 rounded-xl
                bg-gradient-to-r from-transparent via-[${card.color}] to-transparent
                opacity-0 group-hover:opacity-100
                transition-opacity duration-700
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent
                before:animate-[shine_3s_linear_infinite]
              `}></div>
              
              {/* Content container */}
              <div className={`
                relative rounded-xl h-full w-full overflow-hidden
              `}>
                {/* Image with glassy effect */}
                <div className="relative h-full w-full">
                  <img
                    src={card.img}
                    alt={card.label}
                    className={`
                      rounded-xl w-full aspect-square object-cover
                      brightness-90 saturate-80
                      group-hover:brightness-100 group-hover:saturate-100
                      transition-all duration-500
                    `}
                  />
                  
                  {/* Title overlay */}
                  <div className={`
                    absolute inset-0 flex items-center justify-center
                    bg-black/30 backdrop-blur-sm
                    group-hover:opacity-0
                    transition-opacity duration-500
                    rounded-xl
                  `}>
                    <h3 className={`
                      text-white text-2xl font-bold text-center px-4
                      transform group-hover:-translate-y-4
                      transition-transform duration-500
                    `}>
                      {card.label}
                      <span className="block text-lg font-normal mt-2 opacity-80">View Project →</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Glow effect */}
            <div className={`
              absolute inset-0 rounded-xl -z-10
              opacity-0 group-hover:opacity-70
              transition-opacity duration-700
              bg-[${card.color}]
              group-hover:shadow-[0_0_40px_15px_${card.color}]
            `}></div>
          </Link>
        ))}
      </div>
      
      {/* Add the shine animation to your global styles or Tailwind config */}
      <style jsx global>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) rotate(45deg);
        }
      `}</style>
    </div>
  );
};

export default Portfolio;