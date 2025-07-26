import React from 'react';
import { Stethoscope, Heart, Brain, Eye, HeartPulse, Pill, Flower2, Hotel, NotepadText, HandHeart, ArrowRight } from 'lucide-react';
import ServiceExcellence from '../components/ServiceExcellence';
import PartneredCentres from '../components/PartneredCentres';

const Services = () => {
  const services = [
    {
      icon: <Stethoscope className="h-12 w-12 text-red-600" />,
      title: "Medical Treatments & Surgeries",
      description:
        "Comprehensive medical plans and specialized surgeries across European clinics tailored to each patient's health condition and goals.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Treatment planning", "Specialist consultations", "Pre-operative prep", "Post-operative care"]
    },
    {
      icon: <HeartPulse className="h-12 w-12 text-red-600" />,
      title: "Rehabilitation & Physiotherapy",
      description:
        "Dedicated rehabilitation and physiotherapy programs designed to support recovery, mobility, and long-term strength for patients.",
      image: "https://images.pexels.com/photos/3943882/pexels-photo-3943882.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Physical therapy", "Rehab planning", "Mobility training", "Pain management"]
    },
    {
      icon: <Flower2 className="h-12 w-12 text-red-600" />,
      title: "Wellness & Spa Programs",
      description:
        "European wellness experiences with holistic spa treatments, thermal healing, and therapeutic environments supporting full-body renewal.",
      image: "https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Thermal spas", "Stress relief", "Mineral therapy", "Holistic wellness"]
    },
    {
      icon: <Hotel className="h-12 w-12 text-red-600" />,
      title: "Travel & Accommodation",
      description:
        "Complete logistics support for patient stays including hotel arrangements, transportation, and personal assistance during treatment journey.",
      image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Hotel bookings", "Airport pickup", "Local transfers", "Concierge support"]
    },
    {
      icon: <NotepadText className="h-12 w-12 text-red-600" />,
      title: "Preventative Screenings",
      description:
        "Early detection services to prevent and manage chronic conditions through diagnostics, check-ups and patient education.",
      image: "https://images.pexels.com/photos/8460151/pexels-photo-8460151.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Full-body checkups", "Cancer screenings", "Cardiac monitoring", "Nutrition guidance"]
    },
    {
      icon: <Brain className="h-12 w-12 text-red-600" />,
      title: "Neurology & Mental Health",
      description:
        "Cutting-edge neurological diagnostics and care including dementia, Alzheimer’s and mental health services across specialized European centres.",
      image: "https://images.pexels.com/photos/6749774/pexels-photo-6749774.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Alzheimer’s therapy", "Neuro-surgery", "Psychiatric care", "Brain imaging"]
    },
    {
      icon: <HandHeart className="h-12 w-12 text-red-600" />,
      title: "Fertility & IVF",
      description:
        "Advanced reproductive treatments and IVF programs designed to support families on their fertility journey in top Czech and EU clinics.",
      image: "https://images.pexels.com/photos/7594089/pexels-photo-7594089.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Fertility assessments", "Hormonal therapy", "In-vitro fertilization", "Donor coordination"]
    },
    {
      icon: <Eye className="h-12 w-12 text-red-600" />,
      title: "Ophthalmology",
      description:
        "Precision laser vision correction, diagnostics and surgical procedures for optimal eye health and quality of sight.",
      image: "https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Laser correction", "Eye diagnostics", "Minimally invasive surgery", "Vision therapy"]
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

      <ServiceExcellence />

      <div className="w-full bg-white py-16">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch max-w-7xl mx-auto rounded-3xl shadow-2xl hover:shadow-[0_12px_24px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out transform hover:-translate-y-1 bg-white`}
            >
              {/* Image */}
              <div
                className={`w-full lg:w-1/2 h-[300px] lg:h-auto overflow-hidden ${index % 2 !== 0 ? 'rounded-r-3xl' : 'rounded-l-3xl'}`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div
                className={`w-full lg:w-1/2 bg-white p-8 sm:p-12 flex flex-col justify-center ${index % 2 !== 0 ? 'rounded-l-3xl' : 'rounded-r-3xl'}`}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gray-200 rounded-xl p-3 w-14 h-14 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">{service.title}</h3>
                </div>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">{service.description}</p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full" />
                      <span className="text-gray-800 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PartneredCentres isRehabilitation={false} />
    </div>
  );
};

export default Services;
