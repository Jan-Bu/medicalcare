import React, { useState, useEffect } from 'react';
import { Activity, Heart, Users, Clock, Target, Zap, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import RehabilitationExcellence from '../components/RehabilitationExcellence';
import PartneredCentres from '../components/PartneredCentres';

const Rehabilitation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "This will be the rehabilitation hero image carousel with captions",
      subtitle: "Professional rehabilitation services for recovery and wellness",
      description: "Slide 1 description will go here"
    },
    {
      title: "This will be the rehabilitation hero image carousel with captions",
      subtitle: "Comprehensive therapy and recovery programs",
      description: "Slide 2 description will go here"
    },
    {
      title: "This will be the rehabilitation hero image carousel with captions",
      subtitle: "Personalized rehabilitation excellence",
      description: "Slide 3 description will go here"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const services = [
    {
      icon: <Activity className="h-12 w-12 text-green-800" />,
      title: "Service 1",
      description: "This will describe our comprehensive Service 1 rehabilitation offerings including advanced therapy techniques, personalized treatment plans, and state-of-the-art equipment for optimal recovery outcomes.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Physical therapy", "Movement analysis", "Recovery tracking", "Pain management"]
    },
    {
      icon: <Heart className="h-12 w-12 text-green-800" />,
      title: "Service 2",
      description: "This will describe our specialized Service 2 rehabilitation offerings focusing on cardiovascular recovery, endurance building, and comprehensive cardiac rehabilitation programs.",
      image: "https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Cardiac rehabilitation", "Exercise therapy", "Lifestyle coaching", "Monitoring systems"]
    },
    {
      icon: <Target className="h-12 w-12 text-green-800" />,
      title: "Service 3",
      description: "This will describe our targeted Service 3 rehabilitation offerings including precision therapy, goal-oriented treatment plans, and measurable recovery milestones.",
      image: "https://images.pexels.com/photos/4386465/pexels-photo-4386465.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Goal setting", "Progress tracking", "Outcome measurement", "Adaptive techniques"]
    },
    {
      icon: <Zap className="h-12 w-12 text-green-800" />,
      title: "Service 4",
      description: "This will describe our innovative Service 4 rehabilitation offerings utilizing cutting-edge technology, electrical stimulation, and advanced recovery modalities.",
      image: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Electrical stimulation", "Neuromuscular training", "Technology integration", "Rapid recovery"]
    },
    {
      icon: <Users className="h-12 w-12 text-green-800" />,
      title: "Service 5",
      description: "This will describe our collaborative Service 5 rehabilitation offerings including team-based care, family involvement, and comprehensive support systems.",
      image: "https://images.pexels.com/photos/4386463/pexels-photo-4386463.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Team approach", "Family support", "Group therapy", "Peer counseling"]
    },
    {
      icon: <Clock className="h-12 w-12 text-green-800" />,
      title: "Service 6",
      description: "This will describe our time-efficient Service 6 rehabilitation offerings with flexible scheduling, intensive programs, and accelerated recovery protocols.",
      image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Flexible scheduling", "Intensive programs", "Time optimization", "Efficient protocols"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Carousel */}
      <div className="relative h-screen w-full bg-gradient-to-br from-green-900 via-green-800 to-green-900 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-green-800/20"></div>
        
        {/* Carousel content */}
        <div className="relative h-full w-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 transition-all duration-500">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-200 transition-all duration-500">
              {slides[currentSlide].subtitle}
            </p>
            <p className="text-lg text-gray-300 transition-all duration-500">
              {slides[currentSlide].description}
            </p>
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Rehabilitation Excellence Section - Moved after hero */}
      <RehabilitationExcellence />

      {/* Services Grid */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Comprehensive Rehabilitation Services
            </h2>
            <div className="w-24 h-1 bg-green-800 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced rehabilitation programs designed to restore function, improve quality of life, and accelerate recovery for international patients.
            </p>
          </div>
        </div>

        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative overflow-hidden flex flex-col lg:flex-row ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
              }`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2 relative overflow-hidden">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover block"
                    style={{ 
                      display: 'block',
                      verticalAlign: 'top'
                    }}
                  />
                </div>
                {/* Floating Icon */}
                <div className="absolute top-4 left-4 lg:top-8 lg:left-8 bg-white/95 backdrop-blur-sm rounded-xl p-3 lg:p-4 shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-16 flex flex-col justify-center">
                <div className="space-y-6 lg:space-y-8">
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 lg:mb-6">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 lg:space-y-4">
                    <h4 className="text-lg lg:text-xl font-semibold text-gray-800">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-3 h-3 bg-green-800 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium text-sm sm:text-base lg:text-lg">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 lg:pt-6">
                    <button className="inline-flex items-center space-x-2 lg:space-x-3 bg-green-800 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl font-semibold hover:bg-green-900 transition-colors duration-300 text-base lg:text-lg">
                      <span>Learn More</span>
                      <ArrowRight className="h-5 w-5 lg:h-6 lg:w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partnered Medical Centres Section - Replaces the bottom section */}
      <PartneredCentres isRehabilitation={true} />
    </div>
  );
};

export default Rehabilitation;