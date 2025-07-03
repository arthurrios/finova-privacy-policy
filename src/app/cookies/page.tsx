import Link from 'next/link';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            FinFlow Cookie Policy
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
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Use of Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                FinFlow (&quot;App&quot;) primarily operates as a native iOS application and uses minimal web technologies. However, when we do utilize web components (such as authentication through Firebase or Google Sign-In), cookies may be used to enhance user experience and ensure secure authentication. By using our App, you consent to the limited use of cookies as described below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Types of Cookies We Use</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may use the following types of cookies:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Authentication Cookies</strong>: Used by Firebase and Google Sign-In for secure user authentication and session management.
                </li>
                <li>
                  <strong>Security Cookies</strong>: Essential for protecting your financial data and preventing unauthorized access.
                </li>
                <li>
                  <strong>Performance Cookies</strong>: Anonymous analytics to help us improve app performance and user experience.
                </li>
                <li>
                  <strong>Session Cookies</strong>: Temporary cookies that expire when you close the app, used for maintaining your login session.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Managing Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can manage cookies by adjusting your browser settings. Please be aware that disabling cookies may affect the functionality of the App.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Changes to This Cookie Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Cookie Policy from time to time. Changes will be posted on this page, and the &quot;Last updated&quot; date will be revised.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For any questions regarding this Cookie Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 font-medium">FinFlow Development Team</p>
                <p className="text-gray-700">Arthur Rios - Lead Developer</p>
                <p className="text-gray-700">[Your Address]</p>
                <p className="text-gray-700">[City, State, ZIP Code]</p>
                <p className="text-gray-700">[Country]</p>
                <p className="text-gray-700">Email: support@finflow-app.com</p>
                <p className="text-gray-700">Cookies: cookies@finflow-app.com</p>
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
                href="/terms" 
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
