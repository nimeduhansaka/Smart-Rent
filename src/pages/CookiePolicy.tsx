import { Cookie, Settings, BarChart3, Shield, Info } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-black pt-20 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full mb-4">
            <Cookie className="text-white" size={32} />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-gray-400">Last updated: November 17, 2025</p>
        </div>

        {/* Content */}
        <div className="bg-neutral-900 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl space-y-8">
          
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Info className="text-[#4ECDC4]" size={24} />
              What Are Cookies?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences, 
              analyzing how you use our platform, and improving our services. This Cookie Policy 
              explains what cookies we use and why.
            </p>
          </section>

          {/* Types of Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              {/* Essential Cookies */}
              <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Shield className="text-[#4ECDC4] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Essential Cookies</h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      These cookies are necessary for the website to function properly. They enable 
                      core functionality such as security, network management, and accessibility.
                    </p>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <p className="text-sm text-gray-400 mb-2 font-medium">Examples:</p>
                      <ul className="text-gray-300 text-sm space-y-1 ml-4">
                        <li className="flex items-start gap-2">
                          <span className="text-[#4ECDC4]">•</span>
                          <span>Authentication and session management</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#4ECDC4]">•</span>
                          <span>Security and fraud prevention</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#4ECDC4]">•</span>
                          <span>Load balancing</span>
                        </li>
                      </ul>
                      <p className="text-[#4ECDC4] text-sm mt-3 font-medium">
                        Duration: Session or up to 1 year
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Settings className="text-[#4ECDC4] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Functional Cookies</h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      These cookies allow us to remember your preferences and choices to provide 
                      you with a more personalized experience.
                    </p>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <p className="text-sm text-gray-400 mb-2 font-medium">Examples:</p>
                      <ul className="text-gray-300 text-sm space-y-1 ml-4">
                        <li className="flex items-start gap-2">
                          <span className="text-[#4ECDC4]">•</span>
                          <span>Language preferences</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#4ECDC4]">•</span>
                          <span>Display preferences (dark/light mode)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#4ECDC4]">•</span>
                          <span>Location settings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#4ECDC4]">•</span>
                          <span>Recently viewed items</span>
                        </li>
                      </ul>
                      <p className="text-[#4ECDC4] text-sm mt-3 font-medium">
                        Duration: Up to 2 years
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <BarChart3 className="text-[#4ECDC4] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Analytics Cookies</h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      These cookies help us understand how visitors interact with our website by 
                      collecting and reporting information anonymously.
                    </p>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <p className="text-sm text-gray-400 mb-2 font-medium">Examples:</p>
                      <ul className="text-gray-300 text-sm space-y-1 ml-4">
                        <li className="flex items-start gap-2">
                          <span className="text-[#4ECDC4]">•</span>
                          <span>Google Analytics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#4ECDC4]">•</span>
                          <span>Page views and navigation patterns</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#4ECDC4]">•</span>
                          <span>Time spent on pages</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#4ECDC4]">•</span>
                          <span>Traffic sources</span>
                        </li>
                      </ul>
                      <p className="text-[#4ECDC4] text-sm mt-3 font-medium">
                        Duration: Up to 2 years
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Cookie className="text-[#4ECDC4] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Marketing Cookies</h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      These cookies are used to track visitors across websites and display ads that 
                      are relevant and engaging for individual users.
                    </p>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <p className="text-sm text-gray-400 mb-2 font-medium">Examples:</p>
                      <ul className="text-gray-300 text-sm space-y-1 ml-4">
                        <li className="flex items-start gap-2">
                          <span className="text-[#4ECDC4]">•</span>
                          <span>Advertising networks (Google Ads, Facebook Pixel)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#4ECDC4]">•</span>
                          <span>Retargeting campaigns</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#4ECDC4]">•</span>
                          <span>Social media integrations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#4ECDC4]">•</span>
                          <span>Conversion tracking</span>
                        </li>
                      </ul>
                      <p className="text-[#4ECDC4] text-sm mt-3 font-medium">
                        Duration: Up to 1 year
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may use third-party services that set cookies on your device. These include:
            </p>
            <ul className="text-gray-300 space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span><strong className="text-white">Google Analytics:</strong> For website analytics and performance monitoring</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span><strong className="text-white">Social Media Platforms:</strong> For social sharing and login functionality</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span><strong className="text-white">Payment Processors:</strong> For secure payment processing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span><strong className="text-white">Advertising Networks:</strong> For targeted advertising</span>
              </li>
            </ul>
          </section>

          {/* Managing Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Managing Your Cookie Preferences</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You have several options to control or limit how we and our partners use cookies:
            </p>
            
            <div className="space-y-4">
              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">Browser Settings</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Most web browsers allow you to control cookies through their settings. You can 
                  typically block all cookies, accept only first-party cookies, or delete cookies 
                  after browsing. Note that blocking cookies may affect your experience on our site.
                </p>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">Opt-Out Tools</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  You can opt-out of interest-based advertising through the Digital Advertising 
                  Alliance (DAA) or Network Advertising Initiative (NAI) opt-out tools.
                </p>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">Cookie Consent Manager</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  When you first visit our website, you'll see a cookie banner allowing you to 
                  customize your cookie preferences. You can change these settings at any time 
                  through our cookie settings link in the footer.
                </p>
              </div>
            </div>
          </section>

          {/* Browser Instructions */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How to Disable Cookies in Your Browser</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Here are links to cookie management instructions for popular browsers:
            </p>
            <ul className="text-gray-300 space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span>
                  <strong className="text-white">Chrome:</strong>{' '}
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#4ECDC4] hover:text-purple-300 transition">
                    Manage cookies in Chrome
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span>
                  <strong className="text-white">Firefox:</strong>{' '}
                  <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-[#4ECDC4] hover:text-purple-300 transition">
                    Manage cookies in Firefox
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span>
                  <strong className="text-white">Safari:</strong>{' '}
                  <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#4ECDC4] hover:text-purple-300 transition">
                    Manage cookies in Safari
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] mt-1">•</span>
                <span>
                  <strong className="text-white">Edge:</strong>{' '}
                  <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#4ECDC4] hover:text-purple-300 transition">
                    Manage cookies in Edge
                  </a>
                </span>
              </li>
            </ul>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices 
              or for legal, operational, or regulatory reasons. Please check this page periodically 
              for updates.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Questions About Cookies?</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have questions about our use of cookies, please contact us at{' '}
              <a href="mailto:privacy@smartrent.com" className="text-[#4ECDC4] hover:text-purple-300 transition">
                privacy@smartrent.com
              </a>
            </p>
          </section>

          {/* Notice Box */}
          <div className="bg-gradient-to-r from-[#a7ebe6]/10 to-[#73f5ec]/10 border border-[#4ECDC4]/30  rounded-xl p-6 mt-8">
            <div className="flex items-start gap-4">
              <Cookie className="text-[#4ECDC4] flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-white font-semibold mb-2">Your Choice Matters</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We respect your right to control your data. While some cookies are essential for 
                  the website to function, you can choose to disable non-essential cookies at any time 
                  through your browser settings or our cookie consent tool.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;