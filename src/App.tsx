import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Work from './components/Work';
import Benefits from './components/Benefits';
import Services from './components/Services';
import Wave from './assets/wave.svg';
import Idea from './components/Idea';
import Contact from './components/Contact';
import LogoLoop from './components/Loops/LogoLoop';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      smoothWheel: true,
      wheelMultiplier: 1.0, 
      touchMultiplier: 2.0,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }   

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const skills = [
    { src: "https://skillicons.dev/icons?i=react", href: "https://react.dev/", alt: "ReactJs" },
    { src: "https://skillicons.dev/icons?i=next", href: "https://nextjs.org/", alt: "NextJs" },
    { src: "https://skillicons.dev/icons?i=express", href: "https://expressjs.com/", alt: "ExpressJs" },
    { src: "https://skillicons.dev/icons?i=nodejs", href: "https://nodejs.org/en/", alt: "NodeJs" },
    { src: "https://skillicons.dev/icons?i=firebase", href: "https://firebase.google.com/", alt: "Firebase" },
    { src: "https://skillicons.dev/icons?i=threejs", href: "https://threejs.org/", alt: "ThreeJs" },
    { src: "https://skillicons.dev/icons?i=html", href: "https://developer.mozilla.org/docs/Web/HTML", alt: "HTML" },
    { src: "https://skillicons.dev/icons?i=css", href: "https://developer.mozilla.org/docs/Web/CSS", alt: "CSS" },
    { src: "https://skillicons.dev/icons?i=js", href: "https://developer.mozilla.org/docs/Web/JavaScript", alt: "Javascript" },
    { src: "https://skillicons.dev/icons?i=ts", href: "https://www.typescriptlang.org/", alt: "Typescript" },
    { src: "https://skillicons.dev/icons?i=tailwind", href: "https://tailwindcss.com/", alt: "TailwindCSS" },
    { src: "https://skillicons.dev/icons?i=mysql", href: "https://www.mysql.com/", alt: "MySQL" },
    { src: "https://skillicons.dev/icons?i=kotlin", href: "https://kotlinlang.org/", alt: "Kotlin" },
    { src: "https://skillicons.dev/icons?i=flutter", href: "https://flutter.dev/", alt: "Flutter" },
    { src: "https://skillicons.dev/icons?i=mongodb", href: "https://www.mongodb.com/", alt: "MongoDB" },
    { src: "https://skillicons.dev/icons?i=aws", href: "https://aws.amazon.com/", alt: "AWS" },
    { src: "https://skillicons.dev/icons?i=kubernetes", href: "https://kubernetes.io/", alt: "Kubernetes" },
    { src: "https://skillicons.dev/icons?i=azure", href: "https://azure.microsoft.com/en-in", alt: "Azure" },
    { src: "https://skillicons.dev/icons?i=python", href: "https://www.python.org/", alt: "Python" },
    { src: "https://skillicons.dev/icons?i=cpp", href: "https://isocpp.org/", alt: "C++" },
    { src: "https://skillicons.dev/icons?i=java", href: "https://www.java.com/", alt: "Java" },
    { src: "https://skillicons.dev/icons?i=latex", href: "https://www.latex-project.org/", alt: "Latex" },
    { src: "https://skillicons.dev/icons?i=solidity", href: "https://docs.soliditylang.org/", alt: "Solidity" },
    { src: "https://skillicons.dev/icons?i=figma", href: "https://www.figma.com/", alt: "Figma" },
    { src: "https://skillicons.dev/icons?i=ps", href: "https://www.adobe.com/products/photoshop.html", alt: "Photoshop" },
    { src: "https://skillicons.dev/icons?i=ai", href: "https://www.adobe.com/products/illustrator.html", alt: "Illustrator" },
    { src: "https://skillicons.dev/icons?i=blender", href: "https://www.blender.org/", alt: "Blender" }
  ];

  return (
    <>
    <Nav/>
    <Hero/>
    <div id='skills' className='bg-[#EFF0EF] w-full h-full'>
    <LogoLoop
      logos={skills}
      speed={100}
      direction="left"
      logoHeight="clamp(70px, 8vw, 80px)"
      gap={30}
      scaleOnHover
      ariaLabel="skills"
    />
    </div>
    <section id='work' className='w-full h-fit pt-20 md:pt-40 bg-[#EFF0EF]'>
      <Work/>
    </section>
    <section id='benefits' className='w-full min-h-screen bg-[#EFF0EF] pt-20 pb-6 md:pb-16 flex flex-col items-center'>
      <Benefits/>
    </section>
    <section id='services' className='w-full h-fit md:h-screen bg-[#EFF0EF] py-16 flex flex-col justify-center items-center'>
      <Services/>
    </section>
    <section id="idea" className="relative w-full h-screen bg-[#2D2A32] overflow-hidden">
      <div className='w-full h-32 bg-[#EFF0EF] block md:hidden'></div>
      <img src={Wave} alt="wave" className="relative w-full h-auto object-cover z-0"/>
      <img src={Wave} alt="wave flipped" className="absolute bottom-0 left-0 w-full h-auto object-cover rotate-180 z-0 md:-mb-28"/>
      <div className='absolute inset-0 z-10 flex items-center justify-center'><Idea /></div>
    </section>
    <section id='contact' className='w-full h-screen bg-[#EFF0EF] overflow-hidden'>
      <Contact/>
    </section>
    </>
  );
}

export default App;