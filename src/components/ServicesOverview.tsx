import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Pill, Heart, Brain, Eye, Bone, ArrowRight } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: <Stethoscope className="h-8 w-8 text-red-600" />,
      title: "Medical Treatments",
      description: "Advanced procedures and surgeries in top European clinics tailored to each patient's needs"
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Rehabilitation & Recovery",
      description: "Personalized physiotherapy and post-surgery care in world-renowned rehab centers"
    },
    {
      icon: <Brain className="h-8 w-8 text-red-600" />,
      title: "Wellness & Spa Programs",
      description: "Therapeutic stays, spa treatments, and holistic wellness in Europe’s best natural resorts"
    },
    {
      icon: <Eye className="h-8 w-8 text-red-600" />,
      title: "Full Medical Travel Support",
      description: "We handle flights, transfers, accommodation, and coordination for a seamless trip"
    },
    {
      icon: <Bone className="h-8 w-8 text-red-600" />,
      title: "Medical Planning & Consultation",
      description: "We assess your case, match you with experts, and design your individual treatment path"
    },
    {
      icon: <Pill className="h-8 w-8 text-red-600" />,
      title: "Medical Supplies & Exports",
      description: "We provide and ship trusted European medical devices and equipment internationally"
    }
  ];

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-vividblue mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            This will provide an overview of the comprehensive medical services we offer to international patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-xl mb-6 mx-auto">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 text-lg"
          >
            <span>View All Services</span>
            <ArrowRight className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
