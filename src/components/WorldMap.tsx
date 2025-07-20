import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  description: string;
  features: string[];
  x: number;
  y: number;
}

const svgWidth = 2000;
const svgHeight = 857;

function getPopupPosition(location: Location) {
  const percentX = location.x / svgWidth;
  const percentY = location.y / svgHeight;
  const popupWidth = 320;

  const container = document.querySelector('.map-container') as HTMLElement;
  const containerWidth = container?.offsetWidth || 1000;

  const absoluteX = (location.x / svgWidth) * containerWidth;

  // Přidej rezervu, např. +16px
  const openLeft = absoluteX + popupWidth + 16 > containerWidth;

  const left = openLeft
    ? `calc(${(location.x / svgWidth) * 100}% - ${popupWidth + 16}px)`
    : `calc(${(location.x / svgWidth) * 100}% + 16px)`;

  const top = percentY > 0.7
    ? `calc(${percentY * 100}% - 180px)`
    : `calc(${percentY * 100}%)`;

  const transform = percentY > 0.7 ? undefined : 'translateY(-50%)';

  return { left, top, transform };
}


const locations: Location[] = [
  {
    id: 'cz',
    name: 'Czech Republic',
    description: 'Central hub for medical excellence, wellness, and innovation in Europe.',
    features: [
      "Rehabilitation and wellness programs",
      "Cardiology, orthopedics, IVF, neurosurgery, ophthalmology",
      "Esthetic/plastic surgery and advanced diagnostics",
      "Multilingual staff and affordable high-standard care"
    ],
    x: 1000,
    y: 300
  },
  {
    id: 'hu',
    name: 'Hungary',
    description: 'Regional center for complex rehabilitation and medical tourism.',
    features: [
      "Physiotherapy and recovery programs",
      "Wide access to quality and affordable care",
      "Focus on long-term treatment support"
    ],
    x: 1100,
    y: 345
  },
  {
    id: 'eg',
    name: 'Egypt',
    description: 'Provider of high-quality medical services for clients from the Middle East.',
    features: [
      "Advanced medical procedures and specialist care",
      "Growing network of modern clinics and hospitals",
      "Attractive regional option for diagnostics and treatment"
    ],
    x: 1450,
    y: 620
  },
  {
    id: 'de',
    name: 'Germany',
    description: 'Major treatment destination with advanced hospital infrastructure.',
    features: [
      "Highly specialized care and modern procedures",
      "Diagnostic excellence and surgical innovation",
      "Key partner in European medical network"
    ],
    x: 965,
    y: 260
  },
  {
    id: 'fr',
    name: 'France',
    description: 'Strong Western European node for treatment and wellness services.',
    features: [
      "Cardiology and internal medicine",
      "Wellness and rehabilitation offerings",
      "World-class specialists and clinics"
    ],
    x: 720,
    y: 320
  },
  {
    id: 'pl',
    name: 'Poland',
    description: 'Focused expertise in neurology and elderly care.',
    features: [
      "Neurosurgeries and neurodegenerative conditions",
      "Dementia and Alzheimer’s care",
      "Efficient and cost-effective medical solutions"
    ],
    x: 1140,
    y: 265
  },
  {
    id: 'ch',
    name: 'Switzerland',
    description: 'Premium location for private and specialized medical care.',
    features: [
      "Urology and breast surgery specialization",
      "High discretion and service quality",
      "Personalized private programs"
    ],
    x: 840,
    y: 350
  },
  {
    id: 'it',
    name: 'Italy',
    description: 'Key partner for medical exports and device manufacturing.',
    features: [
      "Medical supplies and export of devices",
      "Advanced medical manufacturing capabilities",
      "Integration with European medical logistics"
    ],
    x: 980,
    y: 420
  },
  {
    id: 'gb',
    name: 'United Kingdom',
    description: 'Recognized for expertise in orthopedic and surgical care.',
    features: [
      "Orthopedics and complex surgeries",
      "Rehabilitation support services",
      "Part of pan-European medical cooperation"
    ],
    x: 640,
    y: 260
  }
];

const InteractiveMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const handleMapClick = (e: React.MouseEvent) => {
    if (
      (e.target as HTMLElement).closest('.popup-content') === null &&
      (e.target as HTMLElement).closest('.location-pin') === null
    ) {
      setSelectedLocation(null);
    }
  };

  return (
    <section className="py-16 bg-blue-900 text-white" onClick={handleMapClick}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Medical Locations</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We operate in multiple locations across Europe and Middle-east to provide you with accessible and high-quality healthcare services.
          </p>
        </div>

        <div className="relative w-full">
          <div className="relative w-full bg-white rounded-xl overflow-hidden shadow-2xl map-container">
            <div className="w-full" style={{ maxWidth: '100%', height: 'auto' }}>
              <img
                src="/map.svg"
                alt="Europe and North Africa Map"
                className="w-full h-auto"
              />

              <div className="absolute inset-0 pointer-events-none max-[700px]:hidden">
                {locations.map((location) => (
                  <div
                    key={location.id}
                    className="absolute location-pin"
                    style={{
                      left: `${(location.x / svgWidth) * 100}%`,
                      top: `${(location.y / svgHeight) * 100}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedLocation(location);
                    }}
                  >
                    <div className="relative pointer-events-auto cursor-pointer group">
                      <div className="absolute -top-1 -left-1 w-8 h-8"
                        style={{
                          backgroundColor: "rgb(220,38,38)", opacity: 0.22,
                          borderRadius: "9999px",
                          animation: "ping 1.2s cubic-bezier(0,0,.2,1) infinite"
                        }} />
                      <div className="relative z-10">
                        <MapPin className="h-7 w-7" style={{ color: "rgb(220, 38, 38)" }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {selectedLocation && (() => {
                const { left, top, transform } = getPopupPosition(selectedLocation);
                return (
                  <div
                    className="popup-content animate-popup-open absolute z-20 bg-white text-slate-900 p-6 rounded-2xl shadow-2xl w-80 max-[700px]:hidden"
                    style={{ left, top, transform }}
                    onClick={e => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setSelectedLocation(null)}
                      className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-colors"
                      aria-label="Close"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    <div className="flex items-center mb-3 space-x-2">
                      <MapPin className="h-6 w-6" style={{ color: "rgb(220,38,38)" }} />
                      <h3 className="font-bold text-lg">{selectedLocation.name}</h3>
                    </div>
                    <div className="text-base text-gray-700 mb-3">
                      {selectedLocation.description}
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 font-medium">
                      {selectedLocation.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8 bg-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Our European & African Network</h3>

            {/* Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-[700px]:hidden">
              {locations.map((location) => (
                <div
                  key={location.id}
                  className="flex items-start space-x-3 p-3 rounded-md hover:bg-gray-200 transition-colors cursor-pointer"
                  onClick={() => setSelectedLocation(location)}
                >
                  <MapPin className="h-5 w-5" style={{ color: "rgb(220,38,38)" }} />
                  <div>
                    <h4 className="font-medium text-slate-900">{location.name}</h4>
                    <p className="text-sm text-slate-700">{location.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile */}
            <div className="flex flex-col space-y-4 max-[700px]:block hidden">
              {locations.map((location) => (
                <div key={location.id} className="border p-4 rounded-xl shadow text-slate-900 bg-white">
                  <div className="flex items-center mb-2 space-x-2">
                    <MapPin className="h-5 w-5" style={{ color: "rgb(220,38,38)" }} />
                    <h4 className="font-semibold text-lg">{location.name}</h4>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{location.description}</p>
                  <ul className="list-disc list-inside text-sm text-gray-800 space-y-1 font-medium">
                    {location.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animace */}
      <style>{`
        @keyframes popup-open {
          from {
            transform: scale(0.75) translateY(20px);
            opacity: 0;
          }
          to {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }
        .animate-popup-open {
          animation: popup-open 0.32s cubic-bezier(.42,1.7,.5,1.07) both;
        }
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.22; }
          80%, 100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default InteractiveMap;
