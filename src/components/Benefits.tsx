function Benefits() {
  return (
    <>
      <h1 className="text-[clamp(2rem,4vw,4rem)] tracking-tighter font-extrabold text-[#2D2A32]">Ready when you are</h1>
      <p className="text-[clamp(0.8rem,3vw,1.3rem)] tracking-tight font-light text-[#2D2A32] mb-8">The instant alternative to hiring a developer.</p>
      
      <div className="w-full px-4 md:px-0 md:w-1/2 flex flex-col md:flex-row gap-3 md:gap-6">

        <div className="bg-[#2D2A32] rounded-[2rem] p-8 text-[#EFF0EF] md:w-1/2 flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-4 text-[#EFF0EF]">An Awesome Developer</h3>
          <p className="text-base md:text-lg leading-relaxed text-[#bcbabd]">With 4+ years of experience, you’ll always work directly with the same awesome developer on every project. No hand-offs. No middlemen. Just quality work.</p>
        </div>
        
        <div className="flex flex-col gap-3 md:gap-6 md:w-1/2">
          <div className="bg-white rounded-[2rem] p-8">
            <h3 className="text-xl font-semibold mb-4 text-[#2D2A32]">Project-based pricing</h3>
            <p className="text-base md:text-lg leading-relaxed text-[#6c696f]">No monthly retainers or hidden costs. Get transparent, fair pricing for each project with no surprises.</p>
          </div>
          
          <div className="bg-white rounded-[2rem] p-8">
            <h3 className="text-xl font-semibold mb-4 text-[#2D2A32]">Pause anytime</h3>
            <p className="text-base md:text-lg leading-relaxed text-[#6c696f]">Short of work this month? Put your project on hold and resume when you're ready. No pressure, no commitments.</p>
          </div>
        </div>

      </div>

      <div className="w-full px-4 md:px-0 md:w-1/2 flex flex-col mt-3 md:mt-6 md:flex-row gap-3 md:gap-6">
              
        <div className="flex flex-col gap-3 md:gap-6 md:w-1/2">
          <div className="bg-white rounded-[2rem] p-8">
            <h3 className="text-xl font-semibold mb-4 text-[#2D2A32]">No hiring hassle</h3>
            <p className="text-base md:text-lg leading-relaxed text-[#6c696f]">Skip the CV reviews, interviews, and onboarding. I'm ready to start coding immediately on your project.</p>
          </div>
          
          <div className="bg-white rounded-[2rem] p-8">
            <h3 className="text-xl font-semibold mb-4 text-[#2D2A32]">Start this week</h3>
            <p className="text-base md:text-lg leading-relaxed text-[#6c696f]">No waiting for availability or scheduling conflicts. Get your project started immediately, not weeks from now.</p>
          </div>
        </div>

        <div className="bg-[#DAD9DA] rounded-[2rem] p-8 text-[#EFF0EF] md:w-1/2 flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-4 text-[#2D2A32]">Always available</h3>
          <p className="text-base md:text-lg leading-relaxed text-[#615e64]">As a dedicated freelancer, I'm flexible and available when you need me <span className="italic text-[#615e64]">(maybe not on holidays)</span>. No waiting for team schedules or availability slots.</p>
        </div>

      </div>
      
    </>
  )
}

export default Benefits