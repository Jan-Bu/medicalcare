import React from 'react';
import { Award, Globe, Heart, Stethoscope, ShieldCheck, RefreshCcw, Map, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Seamless Health Solutions. Crafted in Europe. Centered on You.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Based in the heart of Europe, we specialize in personalized medical and wellness services for clients from around the world. Our mission is to make European excellence in healthcare accessible to international patients by offering tailor-made programs across the Czech Republic, Germany, France, Switzerland, Poland, and more.
            </p>
            <p className="text-gray-600 mb-6">
              Our strength lies in combining advanced medical procedures with comfort, hospitality, and seamless coordination of logistics such as travel, accommodation, and aftercare. We work closely with leading hospitals, doctors, and wellness centers to ensure world-class care.
            </p>
            <p className="text-gray-600">
              Each treatment plan is crafted with precision by top European experts to meet individual needs, ensuring the highest standards of safety, compassion, and innovation.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Our Values</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Heart className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Patient-Centered Care</h4>
                  <p className="text-gray-600">We believe every client deserves attention, dignity, and a solution crafted just for them.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Excellence & Innovation</h4>
                  <p className="text-gray-600">We bring together Europe's best medical minds and facilities using the latest research and technology.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Globe className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Global Accessibility</h4>
                  <p className="text-gray-600">We bridge borders to make quality European healthcare accessible to patients worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <Stethoscope className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-slate-900 mb-2">Comprehensive Care</h4>
            <p className="text-gray-600">From diagnostics to rehabilitation and wellness, we cover every stage of the patient journey.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <ShieldCheck className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-slate-900 mb-2">Safety & Compliance</h4>
            <p className="text-gray-600">Our partners and procedures meet the highest standards of EU medical safety and ethics.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <RefreshCcw className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-slate-900 mb-2">Continuum of Care</h4>
            <p className="text-gray-600">We ensure a seamless experience with ongoing follow-up before, during, and after treatment.</p>
          </div>
        </div>

        {/* Geographic Presence */}
        <div className="bg-gray-100 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Our European Reach</h3>
          <p className="text-gray-600 mb-4">
            We operate across Europe, with a strong focus on the Czech Republic, Germany, Hungary, France, Switzerland, Poland, and the UK. Our medical tourism network includes top hospitals and clinics in each region.
          </p>
          <div className="flex items-start space-x-3">
            <Map className="h-6 w-6 text-red-600 mt-1" />
            <p className="text-gray-700">We are able to accomodate all the needs for you. We provide dedicated care and coordination tailored to each group.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
