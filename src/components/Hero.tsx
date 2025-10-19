import { CoolMode } from './magicui/cool-mode';

const Hero = () => {
  
  return (
    <div className='w-full min-h-screen bg-[#EFF0EF] flex flex-col justify-center items-center text-[#2D2A32]'>
      <CoolMode><div className="mb-2 mt-[10%] border border-[#dad9da] text-[#939195] rounded-full py-2 px-6 select-none cursor-crosshair z-20">5+ Happy Clients</div></CoolMode>
      <h1 className="w-full px-4 md:px-0 md:w-[80%] text-[clamp(4rem,8vw,8rem)] leading-[clamp(3.5rem,8vw,7rem)] tracking-[-0.075em] font-bold text-center">Onboard a kick-ass developer. Today.</h1>
      <p className="w-full px-4 md:px-0 py-8 text-center text-[clamp(1rem,3vw,1.5rem)] leading-snug tracking-tight font-normal">Replace weeks of recruiting with minutes.<br className="hidden md:block"/> Hire a cool freelance developer now.</p>
      <a href="mailto:calmnrd@gmail.com"><button className="-mt-4 bg-[#2d2a32] text-white text-[clamp(1rem,2.5vw,1.125rem)] font-semibold rounded-full px-8 md:px-10 py-4 md:py-6 hover:scale-105 transition-all duration-200">Start Today</button></a>
    </div>
  );
}

export default Hero;