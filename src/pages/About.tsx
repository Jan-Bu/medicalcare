import React from 'react';
import { Users, Award, Globe, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            This is the About Us page. It will describe our mission, vision, and background.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              This will describe the founding of our organization, our journey, and how we became a leading provider of healthcare services for international patients.
            </p>
            <p className="text-gray-600 mb-6">
              This will detail our commitment to excellence, our growth over the years, and our dedication to serving patients from around the world.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Our Values</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Heart className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Compassionate Care</h4>
                  <p className="text-gray-600">This will describe our commitment to compassionate patient care</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Excellence</h4>
                  <p className="text-gray-600">This will describe our pursuit of medical excellence</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Globe className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Global Accessibility</h4>
                  <p className="text-gray-600">This will describe our commitment to accessible healthcare</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Team</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            This will introduce our medical team and healthcare professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-gray-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                This will be team member {index + 1} name
              </h3>
              <p className="text-red-600 font-medium mb-3">This will be their title</p>
              <p className="text-gray-600">
                This will describe their background and expertise
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;