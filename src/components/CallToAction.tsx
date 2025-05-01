
import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section id="join-waitlist" className="section-padding bg-zeroprint-green/5">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="heading-lg text-zeroprint-green mb-6">
          Ready to Take Real Climate Action?
        </h2>
        <p className="paragraph mb-8">
          Join ZeroPrint's waitlist and be part of verified carbon removal.
        </p>
        
        {/* Waitlist form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-zeroprint-green focus:border-zeroprint-green"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-zeroprint-green focus:border-zeroprint-green"
                  placeholder="Your last name"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-zeroprint-green focus:border-zeroprint-green"
                placeholder="you@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                I'm interested as a:
              </label>
              <select
                id="interest"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-zeroprint-green focus:border-zeroprint-green"
              >
                <option value="">Please select</option>
                <option value="business">Business</option>
                <option value="individual">Individual</option>
                <option value="farmer">Farmer</option>
                <option value="partner">Potential Partner</option>
              </select>
            </div>
            
            <button
              type="submit"
              className="w-full btn-primary py-3"
            >
              Join the Waitlist
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
