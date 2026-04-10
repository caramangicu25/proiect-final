import Link from 'next/link';

const AnchorIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="3" />
    <line x1="12" y1="22" x2="12" y2="8" />
    <path d="M5 15H2a10 10 0 0 0 20 0h-3" />
  </svg>
);

const platformLinks = ['Features', 'Pricing', 'Security', 'Roadmap', 'Changelog'];
const companyLinks = ['About Us', 'Blog', 'Careers', 'Press', 'Contact'];

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 text-[#2563EB] mb-4">
              <AnchorIcon />
              <span className="text-white font-bold text-xl tracking-tight">FleetCore</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm text-gray-400">
              The modern fleet management platform helping businesses of all sizes track, manage,
              and optimize their vehicle operations — from one truck to a thousand.
            </p>
            <div className="flex gap-4 mt-6">
              {/* X/Twitter */}
              <a href="#" className="w-9 h-9 bg-[#1B2E4B] rounded-lg flex items-center justify-center hover:bg-[#2563EB] transition-colors">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-9 h-9 bg-[#1B2E4B] rounded-lg flex items-center justify-center hover:bg-[#2563EB] transition-colors">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Platform</h4>
            <ul className="space-y-3">
              {platformLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm hover:text-white transition-colors duration-200">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm hover:text-white transition-colors duration-200">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1B2E4B] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© 2025 FleetCore, Inc. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
