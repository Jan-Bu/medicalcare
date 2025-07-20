import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

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
      setCurrentSlide(prev => {
        let next = direction === "forward" ? prev + 1 : prev - 1;

        if (next >= slides.length) {
          setDirection("backward");
          next = slides.length - 2;
        } else if (next < 0) {
          setDirection("forward");
          next = 1;
        }

        return next;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [direction, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (index === 0) setDirection("forward");
    else if (index === slides.length - 1) setDirection("backward");
  };

  const nextSlide = () => {
    if (currentSlide === slides.length - 1) {
      setDirection("backward");
      setCurrentSlide(currentSlide - 1);
    } else {
      setDirection("forward");
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setDirection("forward");
      setCurrentSlide(currentSlide + 1);
    } else {
      setDirection("backward");
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Sliding container */}
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{
          transform: `translateX(-${currentSlide * 100}vw)`,
          width: `${slides.length * 100}vw`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative h-full w-screen flex-shrink-0">
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-slate-900/20 z-10" />
            <div className="relative h-full w-full flex items-center justify-center z-20">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 transition-all duration-500">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-4 text-gray-200 transition-all duration-500">
                  {slide.subtitle}
                </p>
                <p className="text-lg text-gray-300 transition-all duration-500">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
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

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
