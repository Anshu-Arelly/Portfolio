import { ArrowDown } from 'lucide-react';
import SocialIcons from '../UI/SocialIcons';
import Button from '../UI/Button';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="pt-24 md:pt-32 pb-16 md:pb-24 bg-[#fffff1] relative min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-[#ff6100]">Anshu Arelly</span> 
            <span className="block mt-2">Aspiring Software Developer &</span>
            <span className="block">LinkedIn Branding Strategist</span>
          </h1>
          
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Helping founders, agency owners, and students grow on LinkedIn
            while building innovative tech projects
          </p>
          
          <motion.div 
            className="mt-8 flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button href="#services" primary>
                Work with me
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button href="#projects">
                View projects
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-10 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div>
              <p className="text-gray-600 mb-2">Connect with me:</p>
              <SocialIcons size={28} />
            </div>
          </motion.div>
        </motion.div>
        
        <motion.a 
          href="#about" 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          aria-label="Scroll to About section"
        >
          <ArrowDown size={32} className="text-[#ff6100]" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;