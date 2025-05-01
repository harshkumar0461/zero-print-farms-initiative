
import React, { useState } from "react";
import ComingSoonDialog from "./ComingSoonDialog";
import { ExternalLink, Heart, MapPin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
  const [socialFeatureName, setSocialFeatureName] = useState("Social Media");

  const handleSocialClick = (name: string) => {
    setSocialFeatureName(name);
    setIsComingSoonOpen(true);
  };

  return (
    <footer id="contact" className="bg-gradient-to-t from-gray-50 to-white pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <a href="#" className="text-2xl font-bold text-zeroprint-green group transition-all duration-300 flex items-center">
                <span className="group-hover:translate-x-[2px] transition-all">ZeroPrint</span>
                <span className="text-xs align-top bg-zeroprint-green/10 text-zeroprint-green px-2 py-0.5 rounded-full ml-2">beta</span>
              </a>
            </div>
            <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
              ZeroPrint combines science & soil to deliver real climate action rooted in India. We empower farmers and fight climate change with every acre of basalt.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocialClick("LinkedIn")} 
                className="text-gray-500 hover:text-zeroprint-green transition-colors p-2 rounded-full hover:bg-zeroprint-green/5" 
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </button>
              <button 
                onClick={() => handleSocialClick("Twitter")} 
                className="text-gray-500 hover:text-zeroprint-green transition-colors p-2 rounded-full hover:bg-zeroprint-green/5" 
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </button>
              <button 
                onClick={() => handleSocialClick("Instagram")} 
                className="text-gray-500 hover:text-zeroprint-green transition-colors p-2 rounded-full hover:bg-zeroprint-green/5" 
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-zeroprint-green">Quick Links</h3>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="text-gray-600 hover:text-zeroprint-green transition-colors flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-zeroprint-green/30 group-hover:bg-zeroprint-green transition-colors"></span>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#mission" className="text-gray-600 hover:text-zeroprint-green transition-colors flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-zeroprint-green/30 group-hover:bg-zeroprint-green transition-colors"></span>
                  <span>About</span>
                </a>
              </li>
              <li>
                <button onClick={() => handleSocialClick("Our Solutions")} className="text-gray-600 hover:text-zeroprint-green transition-colors text-left flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-zeroprint-green/30 group-hover:bg-zeroprint-green transition-colors"></span>
                  <span>Our Solutions</span>
                </button>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-600 hover:text-zeroprint-green transition-colors flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-zeroprint-green/30 group-hover:bg-zeroprint-green transition-colors"></span>
                  <span>How It Works</span>
                </a>
              </li>
              <li>
                <a href="#join-waitlist" className="text-gray-600 hover:text-zeroprint-green transition-colors flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-zeroprint-green/30 group-hover:bg-zeroprint-green transition-colors"></span>
                  <span>Join Waitlist</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-zeroprint-green">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-zeroprint-green" />
                <a href="mailto:info@zeroprint.co" className="text-gray-600 hover:text-zeroprint-green transition-colors">
                  info@zeroprint.co
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-zeroprint-green" />
                <span className="text-gray-600">Mumbai, India</span>
              </li>
              <li className="flex items-center gap-3 pt-3">
                <Heart className="w-5 h-5 text-zeroprint-green" />
                <span className="text-gray-600">Carbon neutral since 2023</span>
              </li>
              <li className="flex items-center gap-3 pt-3">
                <ExternalLink className="w-5 h-5 text-zeroprint-green" />
                <a 
                  onClick={() => handleSocialClick("Blog")} 
                  className="text-gray-600 hover:text-zeroprint-green transition-colors cursor-pointer"
                >
                  Our Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 mt-4">
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
