import Microwave from '../assets/microwave.webp';
import Bulb from '../assets/bulb.webp';
import Web from '../assets/web.webp';

const Idea = () => {
  return (
    <div className="w-full h-full mt-32 px-8 py-52 md:py-44 md:px-32 flex flex-col md:flex-row justify-center items-center">
      <div className="flex items-start justify-start text-left w-full h-full">
        <div className="relative">
          <h2 className="text-[clamp(3.5rem,6vw,8rem)] leading-[clamp(3rem,6vw,7rem)] font-semibold text-[#EFF0EF] uppercase">
            If you've<br/> got the<br/> idea
          </h2>
          <img 
            src={Bulb} 
            alt="Bulb" 
            className="absolute -bottom-6 right-12 md:right-16 rotate-12 w-24 h-24 md:w-40 md:h-40"
          />
        </div>
      </div>

      <div className="flex flex-col items-end justify-end text-right w-full h-full">
        <div className="relative">
          <img 
            src={Microwave} 
            alt="Microwave" 
            className="absolute -top-28 md:-top-36 right-16 md:right-32 w-36 h-36 md:w-48 md:h-48 -rotate-[2deg]"
          />
          <img 
            src={Web} 
            alt="Rotating Website" 
            className="absolute -top-[60px] md:-top-[72px] right-[136px] md:right-[224px] w-[42px] h-[42px] md:w-[52px] md:h-[52px] webrotate"
          />
          <h2 className="text-[clamp(3.5rem,6vw,8rem)] leading-[clamp(3rem,6vw,7rem)] font-semibold text-[#EFF0EF] uppercase">
            leave the<br/> rest to me
          </h2>
          <p className="uppercase text-[clamp(1rem,3vw,1.2rem)] text-[#bcbabd]">"I will cook"</p>
        </div>
      </div>
    </div>
  );
};

export default Idea;
