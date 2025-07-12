import React from 'react';
import { Stethoscope, Heart, Brain, Eye, Bone, Pill, ArrowRight } from 'lucide-react';
import ServiceExcellence from '../components/ServiceExcellence';
import PartneredCentres from '../components/PartneredCentres';

const Services = () => {
  const services = [
    {
      icon: <Stethoscope className="h-12 w-12 text-red-600" />,
      title: "Service 1",
      description: "This will describe our comprehensive Service 1 offerings and treatments with detailed information about procedures, benefits, and patient care approach.",
      image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Advanced diagnostics", "Expert consultation", "24/7 support", "Personalized care"]
    },
    {
      icon: <Heart className="h-12 w-12 text-red-600" />,
      title: "Service 2",
      description: "This will describe our specialized Service 2 offerings and treatments with comprehensive details about our advanced medical procedures and patient outcomes.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["State-of-the-art equipment", "Minimally invasive procedures", "Quick recovery", "Follow-up care"]
    },
    {
      icon: <Brain className="h-12 w-12 text-red-600" />,
      title: "Service 3",
      description: "This will describe our innovative Service 3 offerings and treatments including cutting-edge technology and specialized care protocols for optimal results.",
      image: "https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Neurological expertise", "Advanced imaging", "Precision treatment", "Rehabilitation support"]
    },
    {
      icon: <Eye className="h-12 w-12 text-red-600" />,
      title: "Service 4",
      description: "This will describe our comprehensive Service 4 offerings and treatments with focus on precision, safety, and exceptional patient experience throughout the process.",
      image: "https://images.pexels.com/photos/4386465/pexels-photo-4386465.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Vision correction", "Laser technology", "Outpatient procedures", "Rapid healing"]
    },
    {
      icon: <Bone className="h-12 w-12 text-red-600" />,
      title: "Service 5",
      description: "This will describe our advanced Service 5 offerings and treatments including specialized procedures and comprehensive rehabilitation programs.",
      image: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Joint replacement", "Sports medicine", "Physical therapy", "Pain management"]
    },
    {
      icon: <Pill className="h-12 w-12 text-red-600" />,
      title: "Service 6",
      description: "This will describe our comprehensive Service 6 offerings and treatments with detailed medication management and pharmaceutical care services.",
      image: "https://images.pexels.com/photos/4386463/pexels-photo-4386463.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Medication management", "Drug interactions", "Dosage optimization", "Patient education"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive medical services designed for international patients seeking world-class healthcare.
          </p>
        </div>
      </div>

      {/* Service Excellence Section - Moved after hero */}
      <ServiceExcellence />

      {/* Services Grid */}
      <div className="w-full">
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
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 lg:mb-6">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 lg:space-y-4">
                    <h4 className="text-lg lg:text-xl font-semibold text-slate-800">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-3 h-3 bg-red-600 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium text-sm sm:text-base lg:text-lg">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 lg:pt-6">
                    <button className="inline-flex items-center space-x-2 lg:space-x-3 bg-red-600 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300 text-base lg:text-lg">
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
      <PartneredCentres isRehabilitation={false} />
    </div>
  );
};

export default Services;