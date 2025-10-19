import Socials from './Socials';

const Contact = () => {
  return (
    <div className="mt-16 w-full h-full flex flex-col justify-center items-center">
      <div className='w-full h-fit z-40'><Socials/></div>
      <h1 className="w-full px-4 md:px-0 md:w-[80%] text-[clamp(4rem,8vw,8rem)] leading-[clamp(3.5rem,8vw,7rem)] tracking-tighter font-bold text-center text-[#2D2A32]">Think less.</h1>
      <h1 className="w-full px-4 md:px-0 md:w-[80%] text-[clamp(4rem,8vw,8rem)] leading-[clamp(3.5rem,8vw,7rem)] tracking-tighter font-bold text-center text-[#2D2A32]">Wait less.</h1>
      <h1 className="w-full px-4 md:px-0 md:w-[80%] text-[clamp(4rem,8vw,8rem)] leading-[clamp(3.5rem,8vw,7rem)] tracking-tighter font-bold text-center text-[#2D2A32]">
        Click {" "}
        <a href='mailto:calmnrd@gmail.com?subject=I clicked Yes 😎'><span className="relative inline-block px-6 py-2 z-0 cursor-pointer hover:scale-95 transition-all duration-200">
          <span className="relative inline-block z-10 -rotate-12 text-[#EFF0EF]">Yes</span>
          <span className="pointer-events-none absolute -inset-1 -rotate-12 bg-[#2D2A32] border-2 border-[#EFF0EF] rounded-[1rem] md:rounded-[2rem] -z-10" />
        </span></a>
      </h1>
      <p className="w-full px-6 md:px-0 md:w-[40vw] text-[clamp(2rem,3vw,3rem)] leading-[clamp(2rem,3vw,3rem)] tracking-tight font-semibold text-right text-[#2D2A32]">to work <br/> with me.</p>
    </div>
  )
}

export default Contact