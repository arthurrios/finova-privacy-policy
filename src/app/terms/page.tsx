import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            FinFlow Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Effective date:</strong> {new Date().toLocaleDateString()}
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By downloading, installing, or using FinFlow (&quot;App&quot;), your personal finance management application, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the App.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                FinFlow provides personal finance management services including transaction tracking, budget management, recurring transaction handling, installment tracking, and secure financial data storage. The service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. User Accounts</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To access certain features of the App, you may need to create an account. You are responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Providing accurate and current information</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Acceptable Use</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree not to use the App to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Interfere with the App&apos;s functionality or security</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use the App for commercial purposes without permission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The App and its content are protected by copyright, trademark, and other intellectual property laws. You may not:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Copy, modify, or distribute the App</li>
                <li>Reverse engineer or decompile the App</li>
                <li>Remove or alter any proprietary notices</li>
                <li>Use our trademarks without permission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                We may terminate or suspend your access to the App at any time, with or without cause, and with or without notice. Upon termination, your right to use the App will cease immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Disclaimer of Warranties</h2>
              <p className="text-gray-700 leading-relaxed">
                THE APP IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page. Your continued use of the App after such modifications constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 font-medium">FinFlow Development Team</p>
                <p className="text-gray-700">Arthur Rios - Lead Developer</p>
                <p className="text-gray-700">[Your Address]</p>
                <p className="text-gray-700">[City, State, ZIP Code]</p>
                <p className="text-gray-700">[Country]</p>
                <p className="text-gray-700">Email: support@finflow-app.com</p>
                <p className="text-gray-700">Legal: terms@finflow-app.com</p>
              </div>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex justify-center space-x-6">
              		<Link 
			href="/" 
			className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
		>
			Privacy Policy
		</Link>
		<Link 
			href="/cookies" 
			className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
		>
			Cookie Policy
		</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
