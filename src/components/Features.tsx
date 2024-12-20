import React from 'react';
import { Car, Cpu, Brain, Navigation, Shield, Users, Code, Zap } from 'lucide-react';

export default function Features() {
  const features = [
    {
      name: 'Advanced Perception',
      description: 'State-of-the-art computer vision and sensor fusion for real-time environmental understanding.',
      icon: Car,
      color: 'bg-blue-500',
    },
    {
      name: 'Neural Networks',
      description: 'Deep learning models trained on vast datasets for intelligent decision-making.',
      icon: Brain,
      color: 'bg-indigo-500',
    },
    {
      name: 'Sensor Integration',
      description: 'Multi-sensor fusion combining LiDAR, radar, and camera data for 360° awareness.',
      icon: Cpu,
      color: 'bg-purple-500',
    },
    {
      name: 'Smart Navigation',
      description: 'AI-powered path planning and real-time route optimization systems.',
      icon: Navigation,
      color: 'bg-green-500',
    },
    {
      name: 'Safety Systems',
      description: 'Redundant safety protocols and fail-safe mechanisms for reliable operation.',
      icon: Shield,
      color: 'bg-red-500',
    },
    {
      name: 'Collaborative Research',
      description: 'Partnership with industry leaders and academic institutions worldwide.',
      icon: Users,
      color: 'bg-yellow-500',
    },
    {
      name: 'Open Source',
      description: 'Contributing to and leveraging open-source autonomous driving technologies.',
      icon: Code,
      color: 'bg-teal-500',
    },
    {
      name: 'Real-time Processing',
      description: 'High-performance computing for instantaneous decision-making.',
      icon: Zap,
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Core Technologies
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Driving Innovation Forward
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our comprehensive approach to autonomous vehicle development combines cutting-edge technologies with rigorous safety standards.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                <div className={`absolute h-10 w-10 flex items-center justify-center rounded-md ${feature.color} text-white`}>
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg font-medium text-gray-900">
                  {feature.name}
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}