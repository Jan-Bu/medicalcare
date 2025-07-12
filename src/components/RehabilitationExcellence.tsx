import React from 'react';
import { Users, Target } from 'lucide-react';

const RehabilitationExcellence = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Our Rehabilitation Services?</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="bg-green-600 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Expert Rehabilitation Team</h3>
                  <p className="text-gray-600">Our certified rehabilitation specialists and therapists provide personalized care with proven recovery methods.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <div className="bg-green-600 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Personalized Treatment Plans</h3>
                  <p className="text-gray-600">Individualized rehabilitation programs tailored to each patient's specific needs and recovery goals.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Rehabilitation Excellence</h3>
            <div className="space-y-4">
              {[
                "Evidence-based treatment protocols",
                "Advanced rehabilitation technology",
                "Multidisciplinary care approach",
                "Comprehensive progress monitoring"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="w-3 h-3 bg-green-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-700 group-hover:text-slate-900 transition-colors duration-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RehabilitationExcellence;