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

// Nastav podle rozměrů SVG mapy!
const svgWidth = 2000;
const svgHeight = 857;

// Funkce pro „chytré“ pozicování popupu
function getPopupPosition(location: Location) {
  const percentX = location.x / svgWidth;
  const percentY = location.y / svgHeight;
  let left, top, transform;

  if (percentX > 0.66) {
    left = `calc(${(location.x / svgWidth) * 100}% - 340px)`;
    transform = "translateY(-50%)";
  } else {
    left = `calc(${(location.x / svgWidth) * 100}% + 32px)`;
    transform = "translateY(-50%)";
  }

  if (percentY > 0.70) {
    top = `calc(${(location.y / svgHeight) * 100}% - 180px)`;
    transform = "none";
  } else {
    top = `${(location.y / svgHeight) * 100}%`;
  }

  return { left, top, transform };
}

const locations: Location[] = [
  {
    id: 'cz',
    name: 'Czech Republic',
    description: 'Key medical and wellness hub with full-spectrum services.',
    features: [
      "Rehabilitation and wellness programs",
      "Cardiology, orthopedics, IVF, neurosurgery",
      "Advanced diagnostics and modern clinics",
      "Popular destination for medical tourism"
    ],
    x: 990,
    y: 330
  },
  {
    id: 'hu',
    name: 'Hungary',
    description: 'Trusted regional center for complex rehabilitation.',
    features: [
      "Recovery and physiotherapy services",
      "Affordable high-quality treatments",
      "Experienced multilingual staff"
    ],
    x: 1040,
    y: 365
  },
  {
    id: 'eg',
    name: 'Egypt',
    description: 'Client origin region and coordination point for medical travel to Europe.',
    features: [
      "Tailored care planning and export support",
      "Pre-travel guidance and case preparation",
      "Strong demand for European treatment programs"
    ],
    x: 1189,
    y: 609
  },
  {
    id: 'de',
    name: 'Germany',
    description: 'Leading European destination for high-standard medical procedures.',
    features: [
      "Advanced diagnostics and surgeries",
      "Strong hospital infrastructure",
      "Highly specialized care"
    ],
    x: 935,
    y: 310
  },
  {
    id: 'fr',
    name: 'France',
    description: 'Top-tier hospitals and wellness facilities in Western Europe.',
    features: [
      "Cardiology and internal medicine",
      "Rehabilitation and wellness",
      "World-class specialists"
    ],
    x: 870,
    y: 340
  },
  {
    id: 'pl',
    name: 'Poland',
    description: 'Strong in neurological and elderly care services.',
    features: [
      "Neurosurgery expertise",
      "Alzheimer and dementia care",
      "Modern, cost-effective treatment"
    ],
    x: 1020,
    y: 290
  },
  {
    id: 'ch',
    name: 'Switzerland',
    description: 'Premium destination for specialized private care.',
    features: [
      "Urology and breast surgeries",
      "High privacy and quality standards",
      "Personalized programs"
    ],
    x: 930,
    y: 365
  }
];

const InteractiveMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  // Zavře popup klikem mimo něj a mimo pin
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
          {/* Map Container */}
          <div
            className="relative w-full bg-white rounded-xl overflow-hidden shadow-2xl"
          >
            {/* SVG Map */}
            <div className="w-full" style={{ maxWidth: '100%', height: 'auto' }}>
              <img
                src="/map.svg"
                alt="Europe and North Africa Map"
                className="w-full h-auto"
              />

              {/* Location Pins */}
              <div className="absolute inset-0 pointer-events-none">
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
                      {/* Ripple effect */}
                      <div className="absolute -top-1 -left-1 w-8 h-8"
                        style={{
                          backgroundColor: "rgb(220,38,38)", opacity: 0.22,
                          borderRadius: "9999px",
                          animation: "ping 1.2s cubic-bezier(0,0,.2,1) infinite"
                        }} />
                      {/* Pin icon */}
                      <div className="relative z-10">
                        <MapPin className="h-7 w-7" style={{ color: "rgb(220, 38, 38)" }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Popup */}
              {selectedLocation && (() => {
                const { left, top, transform } = getPopupPosition(selectedLocation);
                return (
                  <div
                    className="popup-content animate-popup-open absolute z-20 bg-white text-slate-900 p-6 rounded-2xl shadow-2xl w-80"
                    style={{
                      left, top, transform,
                    }}
                    onClick={e => e.stopPropagation()}
                  >
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>
        </div>
      </div>

      {/* Popup Animation + Ripple */}
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
