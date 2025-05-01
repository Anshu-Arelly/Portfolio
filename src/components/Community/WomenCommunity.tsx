import JoinForm from './JoinForm';
import { Users, Award, BookOpen, Coffee } from 'lucide-react';

const WomenCommunity = () => {
  const communityFeatures = [
    {
      icon: <Users size={24} className="text-[#ff6100]" />,
      title: "Supportive Network",
      description: "Connect with like-minded women in tech from diverse backgrounds"
    },
    {
      icon: <Award size={24} className="text-[#ff6100]" />,
      title: "Skill Development",
      description: "Access to workshops, resources, and learning opportunities"
    },
    {
      icon: <BookOpen size={24} className="text-[#ff6100]" />,
      title: "Mentorship Program",
      description: "Guidance from experienced professionals in the industry"
    },
    {
      icon: <Coffee size={24} className="text-[#ff6100]" />,
      title: "Virtual Meetups",
      description: "Regular online gatherings to share experiences and knowledge"
    }
  ];

  return (
    <section id="community" className="py-16 md:py-24 bg-[#fffff1]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Women in <span className="text-[#ff6100]">Tech Community</span>
          </h2>
          <div className="w-20 h-1 bg-[#ff6100] mx-auto mt-4 mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Join our growing community of women in technology, where we empower each other through knowledge sharing, mentorship, and collaboration.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg" 
                  alt="Women in tech" 
                  className="rounded-tl-lg shadow-lg"
                />
                <img 
                  src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg" 
                  alt="Tech meetup" 
                  className="rounded-tr-lg shadow-lg"
                />
                <img 
                  src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg" 
                  alt="Coding workshop" 
                  className="rounded-bl-lg shadow-lg"
                />
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg" 
                  alt="Women collaboration" 
                  className="rounded-br-lg shadow-lg"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#ff6100] opacity-10 rounded-lg"></div>
            </div>
            
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {communityFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-4 rounded-lg shadow-md flex items-start space-x-4"
                >
                  <div className="mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  Join Our Community
                </h3>
                <p className="text-gray-600 mb-6">
                  Be part of an inclusive community that's dedicated to supporting women in their tech journey. Whether you're just starting out or are experienced in the field, we welcome you!
                </p>
                
                <JoinForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WomenCommunity;