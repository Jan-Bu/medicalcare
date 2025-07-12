import React from 'react';
import { Shield, Lock, Eye, Database } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy & GDPR</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            This page will contain our privacy policy and GDPR statement for protecting patient data.
          </p>
        </div>
      </div>

      {/* Privacy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-slate max-w-none">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-center space-x-3">
              <Shield className="h-6 w-6 text-blue-600" />
              <h2 className="text-lg font-semibold text-blue-900 m-0">Privacy Commitment</h2>
            </div>
            <p className="text-blue-800 mt-2 m-0">
              This page will outline our commitment to protecting your personal and medical information in compliance with GDPR and other privacy regulations.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Database className="h-6 w-6 text-red-600" />
                <h2 className="text-2xl font-bold text-slate-900">1. Data Collection</h2>
              </div>
              <p className="text-gray-600 mb-4">
                This section will describe what personal and medical data we collect and why.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>This will describe personal information collection</li>
                <li>This will describe medical information collection</li>
                <li>This will describe contact information collection</li>
                <li>This will describe payment information collection</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="h-6 w-6 text-red-600" />
                <h2 className="text-2xl font-bold text-slate-900">2. Data Security</h2>
              </div>
              <p className="text-gray-600 mb-4">
                This section will describe how we protect your data with industry-standard security measures.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">
                  This will include information about encryption, secure storage, and access controls.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="h-6 w-6 text-red-600" />
                <h2 className="text-2xl font-bold text-slate-900">3. Data Usage</h2>
              </div>
              <p className="text-gray-600 mb-4">
                This section will explain how we use your data for medical care and administrative purposes.
              </p>
              <p className="text-gray-600">
                This will include information about data sharing with medical professionals and insurance providers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. GDPR Rights</h2>
              <p className="text-gray-600 mb-4">
                Under GDPR, you have the following rights regarding your personal data:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-slate-900 mb-2">Right to Access</h3>
                  <p className="text-sm text-gray-600">This will describe your right to access your data</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-slate-900 mb-2">Right to Rectification</h3>
                  <p className="text-sm text-gray-600">This will describe your right to correct your data</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-slate-900 mb-2">Right to Erasure</h3>
                  <p className="text-sm text-gray-600">This will describe your right to delete your data</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-slate-900 mb-2">Right to Portability</h3>
                  <p className="text-sm text-gray-600">This will describe your right to transfer your data</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Cookies and Tracking</h2>
              <p className="text-gray-600 mb-4">
                This section will describe our use of cookies and tracking technologies.
              </p>
              <p className="text-gray-600">
                This will include information about essential cookies, analytics, and user preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Contact for Privacy Matters</h2>
              <p className="text-gray-600 mb-4">
                For privacy-related questions or to exercise your GDPR rights, please contact our Data Protection Officer:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">This will include our Data Protection Officer contact information</p>
              </div>
            </section>

            <div className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500">
                Last updated: This will show the date when privacy policy was last updated
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;