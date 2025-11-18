import { Shield, Lock, Eye, Database, UserCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black pt-20 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full mb-4">
            <Shield className="text-white" size={32} />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: November 17, 2025</p>
        </div>

        {/* Content */}
        <div className="bg-neutral-900 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl space-y-8">
          
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Eye className="text-[#4ECDC4]" size={24} />
              Introduction
            </h2>
            <p className="text-gray-300 leading-relaxed">
              At SmartRent, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our platform. Please read this 
              policy carefully to understand our practices regarding your personal data.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Database className="text-[#4ECDC4]" size={24} />
              Information We Collect
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Personal Information</h3>
                <p className="text-gray-300 leading-relaxed mb-2">
                  When you register for an account or use our services, we may collect:
                </p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4ECDC4] mt-1">•</span>
                    <span>Name, email address, and phone number</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4ECDC4] mt-1">•</span>
                    <span>Profile information and photos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4ECDC4] mt-1">•</span>
                    <span>Payment and billing information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4ECDC4] mt-1">•</span>
                    <span>Location data (with your consent)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Usage Information</h3>
                <p className="text-gray-300 leading-relaxed mb-2">
                  We automatically collect certain information about your device and usage:
                </p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4ECDC4] mt-1">•</span>
                    <span>Browser type, device information, and IP address</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4ECDC4] mt-1">•</span>
                    <span>Pages visited and features used</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4ECDC4] mt-1">•</span>
                    <span>Search queries and interactions with listings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4ECDC4] mt-1">•</span>
                    <span>Cookies and similar tracking technologies</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <UserCheck className="text-[#4ECDC4]" size={24} />
              How We Use Your Information
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              We use the information we collect to:
            </p>
            <ul className="text-gray-300 space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span>Provide, maintain, and improve our services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span>Process transactions and send notifications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span>Personalize your experience and show relevant content</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span>Communicate with you about updates and promotions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span>Detect and prevent fraud and abuse</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span>Comply with legal obligations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span>Analyze usage patterns to improve our platform</span>
              </li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Information Sharing and Disclosure</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              We may share your information in the following circumstances:
            </p>
            <ul className="text-gray-300 space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span><strong className="text-white">With other users:</strong> Your profile and listing information is visible to other users</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span><strong className="text-white">Service providers:</strong> Third parties who help us operate our platform</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span><strong className="text-white">Legal requirements:</strong> When required by law or to protect our rights</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span><strong className="text-white">Business transfers:</strong> In connection with mergers or acquisitions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span><strong className="text-white">With your consent:</strong> When you explicitly agree to share information</span>
              </li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Lock className="text-[#4ECDC4]" size={24} />
              Data Security
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your 
              personal information from unauthorized access, disclosure, alteration, or destruction. 
              However, no method of transmission over the internet is 100% secure, and we cannot 
              guarantee absolute security.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Your Privacy Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              You have the right to:
            </p>
            <ul className="text-gray-300 space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span>Access and review your personal information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span>Correct inaccurate or incomplete data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span>Request deletion of your account and data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span>Opt-out of marketing communications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span>Export your data in a portable format</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span>Object to processing of your data</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              To exercise these rights, please contact us at{' '}
              <a href="mailto:privacy@smartrent.com" className="text-[#4ECDC4] hover:text-purple-300 transition">
                privacy@smartrent.com
              </a>
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              SmartRent is not intended for users under 18 years of age. We do not knowingly collect 
              personal information from children. If you believe we have collected information from a 
              child, please contact us immediately and we will take steps to delete such information.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Links</h2>
            <p className="text-gray-300 leading-relaxed">
              Our platform may contain links to third-party websites. We are not responsible for the 
              privacy practices of these external sites. We encourage you to review their privacy 
              policies before providing any personal information.
            </p>
          </section>

          {/* International Users */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">International Data Transfers</h2>
            <p className="text-gray-300 leading-relaxed">
              Your information may be transferred to and processed in countries other than your own. 
              We ensure appropriate safeguards are in place to protect your data in accordance with 
              this Privacy Policy and applicable laws.
            </p>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of significant 
              changes by posting the new policy on this page and updating the "Last updated" date. 
              We encourage you to review this policy periodically.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have questions or concerns about this Privacy Policy or our data practices, 
              please contact us at:
            </p>
            <div className="mt-4 text-gray-300 space-y-1">
              <p>Email: <a href="mailto:privacy@smartrent.com" className="text-[#4ECDC4] hover:text-purple-300 transition">privacy@smartrent.com</a></p>
              <p>Address: Walawwaththa Road, Pambahinna, Sri Lanka.</p>
            </div>
          </section>

          {/* Notice Box */}
          <div className="bg-gradient-to-r from-[#a7ebe6]/10 to-[#73f5ec]/10 border border-[#4ECDC4]/30  rounded-xl p-6 mt-8">
            <div className="flex items-start gap-4">
              <Shield className="text-[#4ECDC4] flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-white font-semibold mb-2">Your Privacy Matters</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We are committed to protecting your privacy and handling your data responsibly. 
                  If you have any questions about how we use your information, please don't hesitate 
                  to reach out to our privacy team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;