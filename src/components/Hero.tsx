
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-zeroprint-cream/20 pt-16 pb-20 md:pb-32">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h1 className="heading-xl text-zeroprint-green mb-6">
              Offset Your Carbon Footprint — Empower Indian Farms
            </h1>
            <p className="paragraph text-gray-600 mb-8 max-w-2xl">
              Join the movement to remove 750,000 tonnes of CO₂ by 2030 using Enhanced Rock Weathering (ERW) in India's farmlands.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#join-waitlist" className="btn-primary">
                Join The Waitlist
              </a>
              <a href="#solutions" className="btn-secondary">
                Explore Projects
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#business" className="btn-tertiary">
                <span>For Businesses</span>
                <ArrowRight size={16} />
              </a>
              <a href="#individual" className="btn-tertiary">
                <span>For Individuals</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-2xl animate-fade-in [animation-delay:300ms]">
            <img
              src="https://images.unsplash.com/photo-1565457210787-eef50b93b812?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Indian farmland"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute -z-10 top-0 left-0 right-0 h-full bg-gradient-to-br from-zeroprint-green/5 to-zeroprint-green/10"></div>
    </section>
  );
};

export default Hero;
