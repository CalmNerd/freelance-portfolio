import ProjectLoop from './Loops/ProjectLoop';
import test from '../assets/test.png';

const Work = () => {
  
  const projectline1 = [
    { src: test, href: "https://bento-gen.vercel.app/", alt: "Test" },
    { src: test, href: "https://bento-gen.vercel.app/", alt: "Test" }
  ];

  const projectline2 = [
    { src: test, href: "https://bento-gen.vercel.app/", alt: "Test" },
    { src: test, href: "https://bento-gen.vercel.app/", alt: "Test" }
  ];


  return (
    <div className="w-full h-full">
      <div className="">
        <div className="relative overflow-hidden">
          <ProjectLoop
            logos={projectline1}
            speed={60}
            direction="right"
            logoHeight={220}
            gap={30}
            scaleOnHover
            ariaLabel="projects"
          />
          <ProjectLoop
            logos={projectline2}
            speed={60}
            direction="left"
            logoHeight={220}
            gap={30}
            scaleOnHover
            ariaLabel="projects"
          />
        </div>
      </div>
    </div>
  );
}

export default Work;