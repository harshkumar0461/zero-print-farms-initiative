
import React from "react";
import { Leaf, Sprout, TreeDeciduous } from "lucide-react";

const ErwSection: React.FC = () => {
  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zeroprint-green/5 to-zeroprint-green/10 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-48 h-48 bg-zeroprint-green/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-zeroprint-green/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zeroprint-green mb-4">
            Why Enhanced Rock Weathering (ERW)?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-zeroprint-green/30 to-zeroprint-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enhanced Rock Weathering (ERW) is a proven method where crushed basalt is applied to 
            farmland, absorbing CO₂ and rejuvenating soil. A solution where climate meets agriculture.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 group">
            <div className="rounded-xl overflow-hidden shadow-xl transform transition-transform duration-500 group-hover:scale-[1.02] relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Crushed basalt being applied to soil"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <span className="bg-zeroprint-green/90 text-white px-4 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                  Natural Climate Solution
                </span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="bg-zeroprint-green/10 p-3 rounded-full">
                    <Leaf className="w-6 h-6 text-zeroprint-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Carbon Capture</h3>
                    <p className="text-gray-600">
                      Crushed basalt naturally absorbs CO₂ from the air through chemical reactions, storing it securely for thousands of years.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="bg-zeroprint-green/10 p-3 rounded-full">
                    <Sprout className="w-6 h-6 text-zeroprint-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Soil Health</h3>
                    <p className="text-gray-600">
                      Basalt enriches soil with vital nutrients like phosphorus, potassium, and calcium, increasing fertility and crop yield.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="bg-zeroprint-green/10 p-3 rounded-full">
                    <TreeDeciduous className="w-6 h-6 text-zeroprint-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Science-Backed</h3>
                    <p className="text-gray-600">
                      ERW is supported by extensive scientific research and real-world field trials, providing measurable climate benefits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <a 
                href="#how-it-works" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zeroprint-green to-zeroprint-green/80 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Learn How It Works
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErwSection;
