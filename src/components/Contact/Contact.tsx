import { Mail, MapPin, Phone } from 'lucide-react';
import SocialIcons from '../UI/SocialIcons';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} className="text-[#ff6100]" />,
      title: "Email",
      value: "anshu.arelly17@gmail.com",
      link: "mailto:anshu.arelly17@gmail.com"
    },
    {
      icon: <MapPin size={24} className="text-[#ff6100]" />,
      title: "Location",
      value: "Hyderabad, India",
      link: "#"
    },
    {
      icon: <Phone size={24} className="text-[#ff6100]" />,
      title: "Social",
      value: "Connect With Me",
      link: "#",
      isSocial: true
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get In <span className="text-[#ff6100]">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-[#ff6100] mx-auto mt-4 mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Have a question or want to work together? Reach out to me directly or through social media.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-[#fffff1] rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 mr-4">{info.icon}</div>
                    <div>
                      <h4 className="font-medium text-gray-800">{info.title}</h4>
                      {info.isSocial ? (
                        <div className="mt-2">
                          <SocialIcons />
                        </div>
                      ) : (
                        <a 
                          href={info.link} 
                          className="text-gray-600 hover:text-[#ff6100] transition-colors"
                        >
                          {info.value}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <p className="text-gray-700 font-medium mb-2">Let's build something amazing together!</p>
                <p className="text-gray-600">
                  Whether you're looking for a software developer for your project or need help with your LinkedIn brand, I'm here to assist you in achieving your goals.
                </p>
              </div>
            </div>
            
            <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg')" }}>
              <div className="h-full w-full bg-[#ff6100] bg-opacity-20 flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-4 drop-shadow-lg">Available for Opportunities</h3>
                  <p className="mb-6 drop-shadow-md">Open to collaborate on innovative projects and provide LinkedIn branding services</p>
                  <a 
                    href="mailto:anshu.arelly17@gmail.com" 
                    className="inline-block px-6 py-3 bg-white text-[#ff6100] font-medium rounded-full hover:bg-gray-100 transition-colors shadow-md"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;