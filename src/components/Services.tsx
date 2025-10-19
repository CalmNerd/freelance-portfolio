import { motion } from 'framer-motion';

function Services() {
  const services = [
    'Website',
    'Landing Page', 
    'Android App',
    'IOS App',
    'Logo',
    'UI/UX Design',
    'CMS Setup',
    'SEO',
    'Domain Setup',
    'Web Hosting',
    '+ more'
  ];

  return (
    <>
      <h1 className="text-[clamp(2rem,4vw,4rem)] tracking-[-0.2rem] font-extrabold text-[#2D2A32]">Your all-in-one builder</h1>
      
      <div className="flex flex-wrap gap-4 md:gap-8 mt-8 w-full md:w-1/2 px-4 md:px-0 justify-center">
        {services.map((service, index) => (
          <motion.span 
            key={index}
            className={`rounded-[2rem] px-8 md:px-12 py-4 md:py-8 text-center text-lg md:text-xl text-[#2D2A32] font-semibold cursor-grab active:cursor-grabbing ${
              index === services.length - 1 
                ? 'bg-[#2D2A32] text-[#EFF0EF]' 
                : 'bg-white text-[#2D2A32]'
            }`}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            whileDrag={{ 
              scale: 1.1,
              zIndex: 10,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: [0.2, 0.4, 0.6][Math.floor(Math.random() * 3)] }}
          >
            {service}
          </motion.span>
        ))}
      </div>
    </>
  )
}

export default Services