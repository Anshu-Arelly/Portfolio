import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GrowthMetrics = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const metrics = [
    {
      id: 1,
      title: "LinkedIn Growth",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
      description: "Increased client's LinkedIn reach by 300% in 3 months",
    },
    {
      id: 2,
      title: "Community Engagement",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      description: "Built a tech community of 500+ women in 6 months",
    },
    // {
    //   id: 3,
    //   title: "Post Engagement",
    //   image: "https://images.pexels.com/photos/7473932/pexels-photo-7473932.jpeg",
    //   description: "Achieved 200% increase in post engagement for clients",
    // },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === metrics.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? metrics.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 md:py-24 bg-[#fffff1]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Growth <span className="text-[#ff6100]">Metrics</span>
          </h2>
          <div className="w-20 h-1 bg-[#ff6100] mx-auto mt-4 mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Results-driven approach with proven success metrics across client campaigns and community initiatives.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {metrics.map((metric) => (
                <div key={metric.id} className="min-w-full">
                  <div className="flex flex-col md:flex-row bg-white">
                    <div className="md:w-1/2">
                      <img 
                        src={metric.image} 
                        alt={metric.title} 
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{metric.title}</h3>
                      <p className="text-gray-600 text-lg mb-6">{metric.description}</p>
                      <div className="flex items-center justify-center md:justify-start">
                        <div className="h-1 bg-[#ff6100] w-16 mr-2"></div>
                        <span className="text-[#ff6100] font-semibold">Success Metric</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none transition-all duration-300"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} className="text-gray-800" />
          </button>
          
          <button 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none transition-all duration-300"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight size={24} className="text-gray-800" />
          </button>

          <div className="flex justify-center mt-6">
            {metrics.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-[#ff6100] w-6' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthMetrics;