import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-900 to-blue-800">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617704548623-340376564e68?auto=format&fit=crop&q=80"
          alt="Autonomous vehicle sensors"
          className="h-full w-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Pioneering the Future of</span>
                <span className="block text-blue-400">Autonomous Mobility</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Join Aprameya KLU's cutting-edge research club in autonomous vehicle technology. We're developing next-generation self-driving systems through advanced AI, computer vision, and robotics.
              </p>
              <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start space-x-4">
                <a
                  href="/projects"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all duration-200 transform hover:scale-105"
                >
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="/signup"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all duration-200"
                >
                  Join Our Team
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}