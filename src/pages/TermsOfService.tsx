import { FileText, Shield, AlertCircle } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black pt-20 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full mb-4">
            <FileText className="text-white" size={32} />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-gray-400">Last updated: November 16, 2025</p>
        </div>

        {/* Content */}
        <div className="bg-neutral-900 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl space-y-8">
          
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#4ECDC4]">1.</span> Introduction
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Welcome to SmartRent. These Terms of Service govern your use of our platform and services. 
              By accessing or using SmartRent, you agree to be bound by these terms. If you do not agree 
              with any part of these terms, please do not use our service.
            </p>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#4ECDC4]">2.</span> Eligibility
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              To use SmartRent, you must:
            </p>
            <ul className="text-gray-300 space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span>Be at least 18 years of age or have parental consent</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span>Provide accurate and complete registration information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span>Maintain the security of your account credentials</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span>Comply with all applicable laws and regulations</span>
              </li>
            </ul>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#4ECDC4]">3.</span> User Responsibilities
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              As a user of SmartRent, you agree to:
            </p>
            <ul className="text-gray-300 space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span>Provide accurate descriptions and images of rental items</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span>Honor rental agreements and return items in good condition</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span>Not list prohibited, illegal, or dangerous items</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span>Respect intellectual property rights</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span>Communicate respectfully with other users</span>
              </li>
            </ul>
          </section>

          {/* Rental Transactions */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#4ECDC4]">4.</span> Rental Transactions
            </h2>
            <p className="text-gray-300 leading-relaxed">
              SmartRent facilitates connections between renters and item owners but is not a party to 
              rental agreements. Users are responsible for negotiating terms, payment, pickup/delivery, 
              and return arrangements. We recommend documenting item condition and maintaining clear 
              communication throughout the rental period.
            </p>
          </section>

          {/* Payments and Fees */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#4ECDC4]">5.</span> Payments and Fees
            </h2>
            <p className="text-gray-300 leading-relaxed">
              SmartRent may charge service fees for listings and transactions. All fees will be clearly 
              disclosed before you complete a transaction. Payment processing is handled through secure 
              third-party providers. Renters are responsible for paying rental fees on time, and owners 
              must honor agreed-upon pricing.
            </p>
          </section>

          {/* Liability and Disputes */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#4ECDC4]">6.</span> Liability and Disputes
            </h2>
            <p className="text-gray-300 leading-relaxed">
              SmartRent is not responsible for the quality, safety, or legality of items listed, the 
              accuracy of listings, or the ability of users to complete transactions. Users engage in 
              rental transactions at their own risk. Disputes should be resolved directly between parties, 
              though we may provide assistance at our discretion.
            </p>
          </section>

          {/* Prohibited Activities */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#4ECDC4]">7.</span> Prohibited Activities
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Users may not:
            </p>
            <ul className="text-gray-300 space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span>Violate any laws or regulations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span>Engage in fraudulent or deceptive practices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span>Interfere with platform operations or security</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span>Harass, threaten, or abuse other users</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span>Use automated systems to access the platform</span>
              </li>
            </ul>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#4ECDC4]">8.</span> Termination
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to suspend or terminate accounts that violate these terms or engage 
              in harmful behavior. Users may close their accounts at any time, subject to completing 
              outstanding rental obligations.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#4ECDC4]">9.</span> Changes to Terms
            </h2>
            <p className="text-gray-300 leading-relaxed">
              SmartRent may update these Terms of Service from time to time. We will notify users of 
              significant changes via email or platform notification. Continued use of the service after 
              changes constitute acceptance of the updated terms.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#4ECDC4]">10.</span> Contact Us
            </h2>
            <p className="text-gray-300 leading-relaxed">
              If you have questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:legal@smartrent.com" className="text-[#4ECDC4] hover:text-[#4ECDC4]/80 transition">
                legal@smartrent.com
              </a>
            </p>
          </section>

          {/* Notice Box */}
          <div className="bg-gradient-to-r from-[#a7ebe6]/10 to-[#73f5ec]/10 border border-[#4ECDC4]/30  rounded-xl p-6 mt-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="text-[#4ECDC4] flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-white font-semibold mb-2">Important Notice</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  By using SmartRent, you acknowledge that you have read, understood, and agree to be 
                  bound by these Terms of Service. Please review them carefully and contact us if you 
                  have any questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;