import BrandingForm from './BrandingForm';

const BrandingService = () => {
  const services = [
    {
      title: "Profile Optimization",
      description: "Transform your LinkedIn profile to attract the right audience and showcase your expertise effectively."
    },
    {
      title: "Content Strategy",
      description: "Develop a personalized content strategy that resonates with your target audience and drives engagement."
    },
    {
      title: "Growth Acceleration",
      description: "Implement proven strategies to increase your followers, connections, and overall LinkedIn presence."
    },
    {
      title: "Engagement Tactics",
      description: "Learn how to boost interaction through strategic commenting, messaging, and relationship building."
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            LinkedIn <span className="text-[#ff6100]">Branding Services</span>
          </h2>
          <div className="w-20 h-1 bg-[#ff6100] mx-auto mt-4 mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Elevate your LinkedIn presence with personalized strategies designed for founders, agency owners, and students.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="bg-[#fffff1] rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Let's Build Your LinkedIn Personal Brand
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  {services.map((service, index) => (
                    <div 
                      key={index} 
                      className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <h4 className="text-lg font-semibold mb-2 text-[#ff6100]">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gray-50 -mx-8 -mb-8 p-8 border-t border-gray-200">
                  <h4 className="text-lg font-semibold mb-4">
                    Who This Is For:
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-[#ff6100] bg-opacity-10 text-[#ff6100] px-4 py-2 rounded-full text-sm font-medium">
                      Founders
                    </div>
                    <div className="bg-[#ff6100] bg-opacity-10 text-[#ff6100] px-4 py-2 rounded-full text-sm font-medium">
                      Agency Owners
                    </div>
                    <div className="bg-[#ff6100] bg-opacity-10 text-[#ff6100] px-4 py-2 rounded-full text-sm font-medium">
                      Students
                    </div>
                    <div className="bg-[#ff6100] bg-opacity-10 text-[#ff6100] px-4 py-2 rounded-full text-sm font-medium">
                      Professionals
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <BrandingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingService;