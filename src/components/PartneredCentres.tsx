import React from 'react';
import { Building2, MapPin, Award, Users } from 'lucide-react';

interface PartneredCentresProps {
  isRehabilitation?: boolean;
}

const PartneredCentres: React.FC<PartneredCentresProps> = ({ isRehabilitation = false }) => {
  const centres = [
    {
      name: "Medical Centre 1",
      location: "This will be the location",
      specialties: ["Cardiology", "Neurology", "Orthopedics"],
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800",
      accreditation: "International Standards"
    },
    {
      name: "Medical Centre 2", 
      location: "This will be the location",
      specialties: ["Oncology", "Radiology", "Emergency Care"],
      image: "https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=800",
      accreditation: "JCI Accredited"
    },
    {
      name: "Medical Centre 3",
      location: "This will be the location", 
      specialties: ["Pediatrics", "Gynecology", "Dermatology"],
      image: "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=800",
      accreditation: "ISO Certified"
    },
    {
      name: "Medical Centre 4",
      location: "This will be the location",
      specialties: ["Ophthalmology", "ENT", "Plastic Surgery"], 
      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800",
      accreditation: "Quality Assured"
    }
  ];

  const accentColor = isRehabilitation ? 'green' : 'red';

  return (
    <section className={`py-16 ${isRehabilitation ? 'bg-gradient-to-br from-green-900 to-green-800' : 'bg-gradient-to-br from-slate-900 to-slate-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Partnered Medical Centres
          </h2>
          <div className={`w-24 h-1 ${isRehabilitation ? 'bg-green-400' : 'bg-red-600'} mx-auto mb-8`}></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We collaborate with leading medical institutions worldwide to provide exceptional healthcare services to our international patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {centres.map((centre, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={centre.image}
                  alt={centre.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {centre.name}
                    </h3>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{centre.location}</span>
                    </div>
                  </div>
                  <div className={`flex items-center space-x-1 ${isRehabilitation ? 'bg-green-600/20' : 'bg-red-600/20'} px-3 py-1 rounded-full`}>
                    <Award className={`h-4 w-4 ${isRehabilitation ? 'text-green-400' : 'text-red-400'}`} />
                    <span className={`text-xs ${isRehabilitation ? 'text-green-400' : 'text-red-400'} font-medium`}>{centre.accreditation}</span>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {centre.specialties.map((specialty, specIndex) => (
                      <span
                        key={specIndex}
                        className="bg-white/10 text-gray-200 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center space-x-2">
                    <Building2 className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-300">Partner Since 2020</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-300">500+ Patients</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Partnership Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className={`${isRehabilitation ? 'bg-green-600/20' : 'bg-red-600/20'} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Award className={`h-8 w-8 ${isRehabilitation ? 'text-green-400' : 'text-red-400'}`} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Quality Assurance</h4>
              <p className="text-gray-300 text-sm">All partner centres meet international healthcare standards and quality certifications.</p>
            </div>
            <div className="text-center">
              <div className={`${isRehabilitation ? 'bg-green-600/20' : 'bg-red-600/20'} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Users className={`h-8 w-8 ${isRehabilitation ? 'text-green-400' : 'text-red-400'}`} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Expert Teams</h4>
              <p className="text-gray-300 text-sm">Access to specialized medical professionals and multidisciplinary care teams.</p>
            </div>
            <div className="text-center">
              <div className={`${isRehabilitation ? 'bg-green-600/20' : 'bg-red-600/20'} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Building2 className={`h-8 w-8 ${isRehabilitation ? 'text-green-400' : 'text-red-400'}`} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Modern Facilities</h4>
              <p className="text-gray-300 text-sm">State-of-the-art medical equipment and comfortable patient environments.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartneredCentres;