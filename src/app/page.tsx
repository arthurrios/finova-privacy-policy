import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#10141a] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white dark:bg-[#181f2a] rounded-lg shadow-lg p-8 transition-colors duration-300">
          <div className="flex flex-col items-center mb-8">
            <Image src="/globe.svg" alt="FinFlow Logo" width={64} height={64} className="mb-4 drop-shadow-lg dark:invert-0" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2 text-center">
              FinFlow Privacy Policy
            </h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="mb-6 p-4 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 dark:from-blue-900 dark:via-blue-800 dark:to-blue-700 border-l-4 border-blue-600 dark:border-blue-400 rounded-lg shadow">
              <p className="text-sm text-gray-700 dark:text-gray-200 mb-2">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-200">
                <strong>Effective date:</strong> {new Date().toLocaleDateString()}
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">1. Introduction</h2>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                Welcome to FinFlow (&quot;App&quot;), your personal finance management application. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application. We understand that financial data is highly sensitive, and we are committed to protecting your privacy and securing your personal financial information. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
              </p>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the &quot;Last updated&quot; date of this Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">2. Information We Collect</h2>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                FinFlow collects various types of information to provide you with our personal finance management services. The information we collect includes:
              </p>
              
              <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-3">Account and Authentication Information</h3>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-2 mb-4">
                <li><strong>Email Address</strong>: Used for account creation and authentication</li>
                <li><strong>Name</strong>: Display name for your account personalization</li>
                <li><strong>Authentication Data</strong>: Firebase authentication tokens and Google Sign-In credentials</li>
                <li><strong>Biometric Preferences</strong>: Face ID/Touch ID settings (stored locally on your device)</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-3">Financial Information</h3>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-2 mb-4">
                <li><strong>Transaction Data</strong>: Income and expense amounts, descriptions, dates, and categories</li>
                <li><strong>Budget Information</strong>: Monthly budget amounts and spending limits</li>
                <li><strong>Recurring Transactions</strong>: Recurring income and expense patterns</li>
                <li><strong>Installment Data</strong>: Payment plans and installment tracking information</li>
                <li><strong>Financial Categories</strong>: Spending categories like meals, transportation, salary, etc.</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-3">Device and Usage Information</h3>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-2 mb-4">
                <li><strong>Device Information</strong>: iOS device model, operating system version</li>
                <li><strong>App Usage Data</strong>: Features used, session duration, crash reports</li>
                <li><strong>Device Identifiers</strong>: Unique device identifiers for data isolation and security</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-3">Profile and Preferences</h3>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-2">
                <li><strong>Profile Images</strong>: Optional profile photos (stored securely on device)</li>
                <li><strong>App Preferences</strong>: Currency settings, notification preferences</li>
                <li><strong>Security Settings</strong>: Authentication preferences and security features</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                FinFlow uses your information solely to provide you with personal finance management services and improve your experience. We use your information for the following purposes:
              </p>
              
              <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-3">Core App Functionality</h3>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-2 mb-4">
                <li><strong>Account Management</strong>: Create, maintain, and secure your FinFlow account</li>
                <li><strong>Financial Tracking</strong>: Store and organize your income, expenses, and budget data</li>
                <li><strong>Transaction Processing</strong>: Handle recurring transactions and installment tracking</li>
                <li><strong>Data Synchronization</strong>: Sync your data securely across your devices</li>
                <li><strong>Budget Analysis</strong>: Calculate spending patterns and budget performance</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-3">Security and Authentication</h3>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-2 mb-4">
                <li><strong>User Authentication</strong>: Verify your identity through Firebase and Google Sign-In</li>
                <li><strong>Data Isolation</strong>: Ensure your financial data is accessible only to you</li>
                <li><strong>Biometric Security</strong>: Enable Face ID/Touch ID for enhanced security</li>
                <li><strong>Session Management</strong>: Maintain secure app sessions and automatic sign-out</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-3">App Improvement and Support</h3>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-2">
                <li><strong>Performance Monitoring</strong>: Analyze app performance and fix technical issues</li>
                <li><strong>Feature Development</strong>: Understand usage patterns to improve features</li>
                <li><strong>Customer Support</strong>: Provide technical assistance when needed</li>
                <li><strong>Security Monitoring</strong>: Detect and prevent unauthorized access attempts</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                <strong>FinFlow does NOT sell or rent your personal financial data to third parties.</strong> We only share your information in the following limited circumstances:
              </p>
              
              <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-3">Service Providers We Use</h3>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-2 mb-4">
                <li><strong>Firebase (Google)</strong>: Authentication services and secure cloud infrastructure</li>
                <li><strong>Google Sign-In</strong>: Optional authentication method</li>
                <li><strong>Apple iCloud</strong>: Device-level data synchronization (when enabled)</li>
                <li><strong>Crash Analytics</strong>: Anonymous crash reporting for app improvement</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-3">Legal Requirements</h3>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                We may disclose your information if required by law, court order, or government request, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
              </p>

              <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-3">Data Isolation and Privacy</h3>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                Your financial data is isolated using your unique Firebase UID. This means your transactions, budgets, and financial information are stored separately from other users and cannot be accessed by unauthorized parties, including other FinFlow users.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">5. Security of Your Financial Information</h2>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                FinFlow implements multiple layers of security to protect your sensitive financial data:
              </p>
              
              <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-3">Technical Security Measures</h3>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-2 mb-4">
                <li><strong>Data Encryption</strong>: All financial data is encrypted both in transit and at rest</li>
                <li><strong>Firebase Security</strong>: Utilizes Google Firebase&apos;s enterprise-grade security infrastructure</li>
                <li><strong>User Isolation</strong>: Each user&apos;s data is completely isolated using unique Firebase UIDs</li>
                <li><strong>Secure Authentication</strong>: Multi-factor authentication with Firebase and Google Sign-In</li>
                <li><strong>Local Device Security</strong>: Biometric authentication (Face ID/Touch ID) when available</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-3">Data Storage Security</h3>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-2 mb-4">
                <li><strong>Secure Local Storage</strong>: Financial data stored securely on your device using iOS security frameworks</li>
                <li><strong>No Cloud Financial Data</strong>: Your transaction details are not stored in third-party cloud services</li>
                <li><strong>Automatic Data Migration</strong>: Secure migration of data when switching devices</li>
                <li><strong>Session Management</strong>: Automatic logout and session timeout for security</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-3">Access Controls</h3>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                We implement strict access controls and monitoring to ensure that only you can access your financial data. Despite our security measures, no system is completely secure. We recommend using strong passwords and enabling biometric authentication for additional security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">6. Policy for Children</h2>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">7. Controls for Do-Not-Track Features</h2>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                Most web browsers and some mobile operating systems include a Do-Not-Track (&quot;DNT&quot;) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">8. Options Regarding Your Information</h2>
              <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-3">Account Information</h3>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                You may at any time review or change the information in your account or terminate your account by:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-2 mb-4">
                <li>Logging into your account settings and updating your account</li>
                <li>Contacting us using the contact information provided below</li>
              </ul>
              
              <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-3">Emails and Communications</h3>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                If you no longer wish to receive correspondence, emails, or other communications from us, you may opt-out by contacting us using the contact information provided below or by following the unsubscribe instructions included in each communication.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">9. California Privacy Rights</h2>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                California Civil Code Section 1798.83, also known as the &quot;Shine The Light&quot; law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">10. Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-4 rounded-lg border border-blue-200 dark:border-blue-700 shadow flex flex-col gap-1">
                <p className="text-gray-900 dark:text-gray-100 font-semibold">FinFlow Development Team</p>
                <p className="text-gray-800 dark:text-gray-200">Arthur Rios - Lead Developer</p>
                <p className="text-gray-800 dark:text-gray-200">Email: <a href="mailto:arthur.rios007@gmail.com" className="text-blue-700 dark:text-blue-300 underline">arthur.rios007@gmail.com</a></p>
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}
