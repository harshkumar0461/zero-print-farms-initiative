
import React, { useState } from "react";
import ComingSoonDialog from "./ComingSoonDialog";

const Footer: React.FC = () => {
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
  const [socialFeatureName, setSocialFeatureName] = useState("Social Media");

  const handleSocialClick = (name: string) => {
    setSocialFeatureName(name);
    setIsComingSoonOpen(true);
  };

  return (
    <footer id="contact" className="bg-gray-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <a href="#" className="text-2xl font-bold text-zeroprint-green">ZeroPrint</a>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              ZeroPrint combines science & soil to deliver real climate action rooted in India. We empower farmers and fight climate change with every acre of basalt.
            </p>
            <div className="flex space-x-4">
              <button onClick={() => handleSocialClick("LinkedIn")} className="text-gray-500 hover:text-zeroprint-green transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </button>
              <button onClick={() => handleSocialClick("Twitter")} className="text-gray-500 hover:text-zeroprint-green transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </button>
              <button onClick={() => handleSocialClick("Instagram")} className="text-gray-500 hover:text-zeroprint-green transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-zeroprint-green transition-colors">Home</a>
              </li>
              <li>
                <a href="#mission" className="text-gray-600 hover:text-zeroprint-green transition-colors">About</a>
              </li>
              <li>
                <button onClick={() => handleSocialClick("Our Solutions")} className="text-gray-600 hover:text-zeroprint-green transition-colors text-left">Our Solutions</button>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-600 hover:text-zeroprint-green transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#join-waitlist" className="text-gray-600 hover:text-zeroprint-green transition-colors">Join Waitlist</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-zeroprint-green mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className="text-gray-600">info@zeroprint.co</span>
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-zeroprint-green mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-gray-600">Mumbai, India</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-4">Partners</h3>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
                  <div className="w-16 h-8 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-500">Partner</div>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
                  <div className="w-16 h-8 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-500">Partner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ZeroPrint. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <button onClick={() => handleSocialClick("Privacy Policy")} className="text-sm text-gray-500 hover:text-zeroprint-green transition-colors">Privacy Policy</button>
              <button onClick={() => handleSocialClick("Terms of Service")} className="text-sm text-gray-500 hover:text-zeroprint-green transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>

      <ComingSoonDialog
        open={isComingSoonOpen}
        onOpenChange={setIsComingSoonOpen}
        featureName={socialFeatureName}
      />
    </footer>
  );
};

export default Footer;
