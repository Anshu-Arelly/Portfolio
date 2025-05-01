import SocialIcons from '../UI/SocialIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-[#ff6100] mb-4">Anshu Arelly</h3>
            <p className="text-gray-300 max-w-md">
              Software Developer & LinkedIn Branding Strategist helping
              professionals & students grow their online presence.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="mb-4">
              <SocialIcons color="white" />
            </div>
            <p className="text-gray-400">
              <a href="mailto:anshu.arelly17@gmail.com" className="hover:text-[#ff6100] transition-colors">
                anshu.arelly17@gmail.com
              </a>
            </p>
            <p className="text-gray-400 mt-2">
              &copy; {currentYear} Anshu Arelly. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            Let's build something amazing together!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;