
import React from "react";

const Mission: React.FC = () => {
  return (
    <section id="mission" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="heading-lg text-zeroprint-green mb-6">Our Mission</h2>
        <p className="paragraph mb-6">
          ZeroPrint's mission is simple and bold: remove 750,000 tonnes of CO₂ by 2030 using rocks, soil, 
          and science-backed partnerships. We empower farmers with healthier soils and income, while 
          helping businesses and individuals offset emissions transparently.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-zeroprint-green/5 p-8 rounded-lg">
            <div className="bg-zeroprint-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-zeroprint-green">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
              </svg>
            </div>
            <h3 className="heading-sm mb-2">Climate Impact</h3>
            <p className="text-gray-600">
              We target removing 750,000 tonnes of CO₂ by 2030 through verified carbon capture.
            </p>
          </div>
          
          <div className="bg-zeroprint-green/5 p-8 rounded-lg">
            <div className="bg-zeroprint-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-zeroprint-green">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 12.75V16.5h9v-3.75m-9 0V4.5h9v8.25m0 0H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25z" />
              </svg>
            </div>
            <h3 className="heading-sm mb-2">Transparency</h3>
            <p className="text-gray-600">
              Full data tracking and monitoring ensures every tonne of CO₂ capture is verified.
            </p>
          </div>
          
          <div className="bg-zeroprint-green/5 p-8 rounded-lg">
            <div className="bg-zeroprint-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-zeroprint-green">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            </div>
            <h3 className="heading-sm mb-2">Economic Growth</h3>
            <p className="text-gray-600">
              Our projects create new income streams and improve soil health for Indian farmers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
