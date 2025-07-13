import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="relative py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-vividblue mb-6">
            About Us
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT – Who We Are */}
          <div className="bg-gray-200 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Who We Are</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We are a European-based provider of premium medical and wellness services, committed to delivering seamless, personalized care for international patients. With a foundation rooted in medical excellence, we specialize in tailored treatment programs, advanced surgeries, and holistic wellness, ensuring each individual receives the best care Europe has to offer.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span className="text-gray-700">We connect patients with world-class European specialists and facilities</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span className="text-gray-700">We manage the entire medical journey, from consultation to recovery</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span className="text-gray-700">We deliver quality, comfort, and innovation at every step</span>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* RIGHT – Vision & Mission */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading regional provider of comprehensive medical services, fostering innovation, accessibility,
                and excellence in health care, while improving lives through world-class treatment, wellness programs, and
                high-quality medical supplies.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver exceptional health care solutions tailored to diverse needs, including advanced medical
                treatments, specialized surgeries, and holistic wellness services. We aim to bridge geographic boundaries
                by connecting individuals to renowned medical facilities in Europe and to support health care providers with
                reliable, top-tier medical supplies. Through dedication to quality, compassion, and collaboration, we strive
                to empower healthier communities and enhance overall patient experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
