import React, { useState, useEffect } from 'react';
import { Activity, Heart, Users, Clock, Target, Zap, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import RehabilitationExcellence from '../components/RehabilitationExcellence';
import PartneredCentres from '../components/PartneredCentres';

const Rehabilitation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Advanced Medical Manufacturing in the Heart of Europe",
      subtitle: "Innovative health care technology exported globally",
      description: "Slide 1 description will go here"
    },
    {
      title: "Rehabilitation and Assistive Devices",
      subtitle: "Restoring independence with advanced technology",
      description: "Slide 2 description will go here"
    },
    {
      title: "Czech Engineering Meets Global Health",
      subtitle: "Medical equipment built on precision and reliability",
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
      title: "Surgical Instruments",
      description:
        "The Czech Republic produces highly durable and precise surgical instruments used across medical specialties. Ergonomic design and high-quality materials ensure safety and performance.",
      image:
        "https://images.pexels.com/photos/11722768/pexels-photo-11722768.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Ergonomic design",
        "High-grade materials",
        "Precision manufacturing",
        "Wide clinical applications"
      ]
    },
    {
      icon: <Heart className="h-12 w-12 text-green-800" />,
      title: "Rehabilitation & Assistive Devices",
      description:
        "Czech manufacturers lead in creating rehabilitation tools supporting patient mobility and independence. Equipment is often tailored to individual needs for optimal outcomes.",
      image:
        "https://images.pexels.com/photos/11722768/pexels-photo-11722768.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Therapy beds and chairs",
        "Prosthetics & orthotics",
        "Personalized equipment",
        "Enhanced recovery support"
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-green-800" />,
      title: "Medical Furniture",
      description:
        "From adjustable hospital beds to ergonomic patient chairs, Czech-made medical furniture blends functionality with hygiene and patient comfort.",
      image:
        "https://images.pexels.com/photos/11722768/pexels-photo-11722768.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Adjustable beds",
        "Ergonomic designs",
        "Durable & hygienic",
        "Workflow-optimized layouts"
      ]
    },
    {
      icon: <Zap className="h-12 w-12 text-green-800" />,
      title: "Research & Innovation",
      description:
        "Collaboration between Czech universities, research institutes and manufacturers fuels medical innovations, ensuring global-standard equipment production.",
      image:
        "https://images.pexels.com/photos/11722768/pexels-photo-11722768.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Collaborative R&D",
        "International compliance",
        "Innovative designs",
        "Technology integration"
      ]
    },
    {
      icon: <Target className="h-12 w-12 text-green-800" />,
      title: "Global Export & Partnerships",
      description:
        "Czech medical equipment is exported worldwide, renowned for its reliability, affordability and compliance with international medical standards.",
      image:
        "https://images.pexels.com/photos/11722768/pexels-photo-11722768.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Global market presence",
        "Trade fair participation",
        "Affordable quality",
        "Long-term partnerships"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO – statický jako u Services */}
      <div className="bg-green-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Medical Equipment & Rehabilitation</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative, high-quality Czech-made medical equipment designed for global excellence and patient recovery.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Medical Equipment & Manufacturing
            </h2>
            <div className="w-24 h-1 bg-green-800 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Innovative, high-quality Czech-made medical equipment designed for global excellence.
            </p>
          </div>
        </div>

        <div className="pb-28">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch max-w-7xl mx-auto rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(0,0,0,0.25)]`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2 h-[300px] lg:h-auto">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 bg-white p-8 sm:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-gray-200 rounded-xl p-3">{service.icon}</div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">{service.title}</h3>
                  </div>

                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">{service.description}</p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-800 rounded-full" />
                        <span className="text-gray-800 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="inline-flex items-center space-x-2 bg-green-800 text-white px-6 py-3 rounded-xl hover:bg-green-900 transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnered Centres */}
      <PartneredCentres isRehabilitation={true} />
    </div>
  );
};

export default Rehabilitation;
