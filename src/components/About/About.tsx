import { Code, Users, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import SocialIcons from '../UI/SocialIcons';

const About = () => {
  const featuredPoints = [
    {
      icon: <Code size={24} className="text-[#ff6100]" />,
      title: "Passionate Coder",
      description: "Developing innovative solutions through elegant code."
    },
    {
      icon: <Users size={24} className="text-[#ff6100]" />,
      title: "Community Builder",
      description: "Empowering women in tech through mentorship and resources."
    },
    {
      icon: <Rocket size={24} className="text-[#ff6100]" />,
      title: "Brand Strategist",
      description: "Helping professionals elevate their LinkedIn presence."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-[#ff6100]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[#ff6100] mx-auto mt-4 mb-6"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/5 flex flex-col items-center"
          >
            <motion.div 
              className="w-72 h-72 md:w-80 md:h-80 relative overflow-hidden mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/profile.jpg" 
                alt="Anshu Arelly" 
                className="w-full h-full object-cover border-4 border-[#ff6100] shadow-lg"
                style={{ borderRadius: '16px', objectPosition: 'center top' }}
              />
            </motion.div>
            <div className="text-center">
              <p className="text-gray-600 mb-3">Connect with me:</p>
              <div className="flex justify-center">
                <SocialIcons size={28} />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-3/5"
          >
            <h3 className="text-2xl font-semibold mb-4">
              B.Tech CSE Student & Brand Strategist
            </h3>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
            Hi, I'm Anshu Arelly, a B.Tech Computer Science student passionate about tech and problem-solving.
I share coding resources and content to help students learn better.
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
            I also guide people in building their LinkedIn personal brand.
            Through community work and mentorship, I support and uplift women in tech.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {featuredPoints.map((point, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-[#fffff1] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-3">{point.icon}</div>
                  <h4 className="text-lg font-semibold mb-2">{point.title}</h4>
                  <p className="text-gray-600 text-sm">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;