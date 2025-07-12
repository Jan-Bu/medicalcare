import React from 'react';
import { FileText, Shield, AlertTriangle } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            This page will display our Terms and Conditions for using our medical services.
          </p>
        </div>
      </div>

      {/* Terms Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-slate max-w-none">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <h2 className="text-lg font-semibold text-red-900 m-0">Important Notice</h2>
            </div>
            <p className="text-red-800 mt-2 m-0">
              This page will contain our complete Terms and Conditions. Please read them carefully before using our services.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="h-6 w-6 text-red-600" />
                <h2 className="text-2xl font-bold text-slate-900">1. General Terms</h2>
              </div>
              <p className="text-gray-600 mb-4">
                This section will outline the general terms and conditions for using our medical services.
              </p>
              <p className="text-gray-600">
                This will include information about service availability, user responsibilities, and general guidelines.
              </p>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-6 w-6 text-red-600" />
                <h2 className="text-2xl font-bold text-slate-900">2. Medical Services</h2>
              </div>
              <p className="text-gray-600 mb-4">
                This section will describe the terms specific to our medical services and treatments.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>This will describe medical service terms</li>
                <li>This will describe treatment protocols</li>
                <li>This will describe patient responsibilities</li>
                <li>This will describe emergency procedures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Payment and Billing</h2>
              <p className="text-gray-600 mb-4">
                This section will outline our payment terms and billing procedures.
              </p>
              <p className="text-gray-600">
                This will include information about payment methods, billing cycles, and refund policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Liability and Insurance</h2>
              <p className="text-gray-600 mb-4">
                This section will describe our liability policies and insurance requirements.
              </p>
              <p className="text-gray-600">
                This will include information about medical malpractice insurance and patient protection.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Termination</h2>
              <p className="text-gray-600 mb-4">
                This section will describe how services can be terminated by either party.
              </p>
              <p className="text-gray-600">
                This will include information about notice periods and termination procedures.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For questions about these terms and conditions, please contact us at:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">This will include our contact information for legal inquiries</p>
              </div>
            </section>

            <div className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500">
                Last updated: This will show the date when terms were last updated
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;