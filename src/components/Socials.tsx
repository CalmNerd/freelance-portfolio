import linkedin from '../assets/LinkedinLogo.svg';
import twitter from '../assets/XLogo.svg';
import github from '../assets/GithubLogo.svg';
import email from '../assets/EnvelopeSimple.svg';

const Socials = () => {
  return (
    <div className="flex flex-row justify-center basis-[150px] md:basis-[200px]">
      <a 
        href="http://www.linkedin.com/in/calmnerd" 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-1 py-2 md:p-2 rounded-full transition-transform duration-200 hover:scale-110 color-white"
      >
        <img src={linkedin} alt="LinkedIn" className="h-8 w-8 md:h-10 md:w-10" />
      </a>
      
      <a 
        href="https://twitter.com/calmnrd" 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-1 py-2 md:p-2 rounded-full transition-transform duration-200 hover:scale-110"
      >
        <img src={twitter} alt="Twitter/X" className="h-8 w-8 md:h-10 md:w-10" />
      </a>
      
      <a 
        href="https://github.com/CalmNerd" 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-1 py-2 md:p-2 rounded-full transition-transform duration-200 hover:scale-110"
      >
        <img src={github} alt="GitHub" className="h-8 w-8 md:h-10 md:w-10" />
      </a>
      
      <a 
        href="mailto:calmnrd@gmail.com"
        className="px-1 py-2 md:p-2 rounded-full transition-transform duration-200 hover:scale-110"
      >
        <img src={email} alt="Email" className="h-8 w-8 md:h-10 md:w-10" />
      </a>
    </div>
  )
}

export default Socials
