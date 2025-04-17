
import { Zap, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const SupplyMainPowerSection = () => {
  return (
    <section id="supply-power" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-green/90 dark:to-teal-900/70">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900/50 rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left side: Technical visualization */}
            <div className="bg-gray-900 dark:bg-teal-900/50 p-8 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="circuit-pattern" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
                    <path d="M 0,5 H 10 M 5,0 V 10" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                  <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
                </svg>
              </div>
              <div className="relative text-center">
                <div className="h-40 w-40 mx-auto relative">
                  <div className="absolute inset-0 bg-teal-500/20 rounded-full animate-pulse-slow"></div>
                  <div className="absolute inset-2 bg-teal-500/30 rounded-full animate-pulse-slow animation-delay-300"></div>
                  <div className="absolute inset-4 bg-teal-600/20 rounded-full animate-pulse-slow animation-delay-600"></div>
                  <div className="h-full w-full flex items-center justify-center">
                    <Zap size={80} className="text-teal-400 animate-float" />
                  </div>
                </div>
                <div className="mt-4 text-white space-y-2">
                  <div className="inline-block px-3 py-1 bg-teal-900/70 text-teal-300 text-xs rounded-full">ADVANCED SYSTEM</div>
                  <div className="text-sm text-gray-300">Power Module v2.1</div>
                </div>
              </div>
            </div>
            
            {/* Right side: Content */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <div className="w-1 h-8 bg-teal-500 mr-4"></div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200">Supply Main Power</h2>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <button className="ml-2 text-gray-400 hover:text-teal-500">
                      <Info size={18} />
                    </button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="font-medium">Technical Specifications</h4>
                      <p className="text-sm text-muted-foreground">
                        Input: 90-240V AC<br />
                        Output: 24V DC / 10A<br />
                        Protection: Short circuit, overload<br />
                        Efficiency: ≥92%
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 my-4 lg:text-lg">
                The primary electrical power source engineered to deliver consistent, reliable energy to all critical system components.
              </p>
              
              <ul className="space-y-2 mb-6 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                  </div>
                  <span>Automatic voltage regulation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                  </div>
                  <span>Surge protection capacity</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                  </div>
                  <span>Continuous power monitoring</span>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                  Learn More 
                  <ArrowRight size={16} className="ml-2" />
                </Button>
                
                <Button variant="outline" className="border-teal-200 dark:border-teal-800 hover:bg-teal-50 dark:hover:bg-teal-900/30">
                  Technical Documentation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplyMainPowerSection;
