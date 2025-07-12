import React from 'react';
import { Users, Globe, Heart } from 'lucide-react';

const OverlappingCards = () => {
  const cards = [
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: "Trusted Medical Network",
      description: "We connect you with top European clinics and specialists, carefully selected for their expertise and results."
    },
    {
      icon: <Globe className="h-8 w-8 text-red-600" />,
      title: "Seamless Journey",
      description: "From planning to recovery, we manage your entire medical trip—clearly, smoothly, and with care."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Personal Support",
      description: "Every case is unique. We listen, guide, and stay by your side every step of the way."
    }
  ];

  return (
    <div className="relative -mt-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-xl mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverlappingCards;