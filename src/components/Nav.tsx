import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { AnimatePresence, motion } from 'framer-motion';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      const sections = ['work', 'benefits', 'services', 'contact'];
      let currentSection = '';

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 100;
          
          if (rect.top <= offset && rect.bottom >= offset) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalOverflow || '';
    }
    return () => {
      document.body.style.overflow = originalOverflow || '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const getNavLinkClass = (section: string) => {
    const baseClass = "transition-all duration-200 cursor-pointer";
    const isActive = activeSection === section;
    
    if (isActive) {
      return `${baseClass} text-[#2D2A32] underline underline-offset-2 font-medium`;
    }
    
    return `${baseClass} text-[#2D2A32] hover:underline hover:underline-offset-1`;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-200">
      <div className={`transition-all duration-200 ease-in-out ${
        isScrolled ? 'w-[calc(100%-2rem)] md:w-2/3 rounded-full bg-white/40 md:backdrop-blur-md mx-4 my-4' : 'w-full'
      } h-16 flex flex-row px-6 md:px-8 items-center justify-between gap-8 md:gap-12`}>
        <div className='text-base md:text-lg cursor-pointer whitespace-nowrap basis-[150px] md:basis-[200px] flex items-center gap-2'>
          <a href='https://www.mohitsingh.space/' className='flex justify-center items-center gap-1 text-[#2D2A32] text-base md:text-lg'>
          MohitSingh.space
          </a>
        </div>
        
        <div className="hidden md:flex items-center gap-6 md:gap-8 text-base">
          <a href="#work" className={getNavLinkClass('work')}>
            Work
          </a>
          <a href="#benefits" className={getNavLinkClass('benefits')}>
            Benefits
          </a>
          <a href="#services" className={getNavLinkClass('services')}>
            Services
          </a>
          <a href="#contact" className={getNavLinkClass('contact')}>
            Contact
          </a>
        </div>

        <div className="md:hidden relative">
          <button
            onClick={toggleMobileMenu}
            className="text-[#2D2A32] p-2 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <HiMenu className="w-6 h-6" />
          </button>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
                className="fixed inset-0 z-[60] bg-[#EFF0EF]"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between px-6 py-3 border-b border-black/5">
                    <a href="https://www.mohitsingh.space/" className="text-[#2D2A32] text-lg font-medium">MohitSingh.space</a>
                    <button
                      onClick={closeMobileMenu}
                      aria-label="Close mobile menu"
                      className="text-[#2D2A32] p-2"
                    >
                      <HiX className="w-7 h-7" />
                    </button>
                  </div>

                  <nav className="flex-1 px-6 py-6">
                    <div className="flex flex-col space-y-6 text-lg">
                      <a
                        href="#work"
                        className={`${activeSection === 'work' ? 'text-[#2D2A32] underline underline-offset-4 font-medium' : 'text-[#2D2A32] hover:underline hover:underline-offset-2'}`}
                        onClick={closeMobileMenu}
                      >
                        Work
                      </a>
                      <a
                        href="#benefits"
                        className={`${activeSection === 'benefits' ? 'text-[#2D2A32] underline underline-offset-4 font-medium' : 'text-[#2D2A32] hover:underline hover:underline-offset-2'}`}
                        onClick={closeMobileMenu}
                      >
                        Benefits
                      </a>
                      <a
                        href="#services"
                        className={`${activeSection === 'services' ? 'text-[#2D2A32] underline underline-offset-4 font-medium' : 'text-[#2D2A32] hover:underline hover:underline-offset-2'}`}
                        onClick={closeMobileMenu}
                      >
                        Services
                      </a>
                      <a
                        href="#contact"
                        className={`${activeSection === 'contact' ? 'text-[#2D2A32] underline underline-offset-4 font-medium' : 'text-[#2D2A32] hover:underline hover:underline-offset-2'}`}
                        onClick={closeMobileMenu}
                      >
                        Contact
                      </a>
                    </div>
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Nav;