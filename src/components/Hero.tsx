import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "This will be the hero image carousel with captions",
      subtitle: "“Seamless Health Solutions. Crafted in Europe. Centered on You!”",
      description: "Slide 1 description will go here",
      image: "https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080"
    },
    {
      title: "This will be the hero image carousel with captions",
      subtitle: "Comprehensive medical treatments and care",
      description: "Slide 2 description will go here",
      image: "https://images.pexels.com/photos/7088529/pexels-photo-7088529.jpeg"
    },
    {
      title: "This will be the hero image carousel with captions",
      subtitle: "International healthcare excellence",
      description: "Slide 3 description will go here",
      image: "https://images.pexels.com/photos/8376173/pexels-photo-8376173.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080"
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

  return (
    <div className="relative h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background image from slide */}
      <img
        src={slides[currentSlide].image}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      />

      {/* Background overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-slate-900/20 z-10"></div>

      {/* Carousel content */}
      <div className="relative h-full w-full flex items-center justify-center z-20">
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
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200 z-30"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200 z-30"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;