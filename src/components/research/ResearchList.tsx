import React from 'react';
import { FileText, Users, Calendar } from 'lucide-react';

const demoResearch = [
  {
    id: '1',
    title: 'Advanced Perception Systems for Autonomous Vehicles',
    abstract: 'A comprehensive study on integrating multiple sensor data for robust environmental perception in autonomous vehicles.',
    authors: ['Dr. Sarah Johnson', 'Prof. Michael Chen', 'Dr. Emily Williams'],
    publication_date: '2024-02-15',
    image_url: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80',
    document_url: '#'
  },
  {
    id: '2',
    title: 'Machine Learning in Real-time Decision Making',
    abstract: 'Novel approaches to implementing efficient machine learning models for real-time decision making in autonomous systems.',
    authors: ['Dr. Robert Brown', 'Dr. Lisa Anderson'],
    publication_date: '2024-01-20',
    image_url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80',
    document_url: '#'
  }
];

export default function ResearchList() {
  return (
    <div className="space-y-8">
      {demoResearch.map((research) => (
        <div key={research.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src={research.image_url} 
                alt={research.title}
                className="w-full h-48 md:h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-2/3">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{research.title}</h3>
              <p className="text-gray-600 mb-4">{research.abstract}</p>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2" />
                  <div className="text-sm">Authors: {research.authors.join(', ')}</div>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span className="text-sm">
                    Published: {new Date(research.publication_date).toLocaleDateString()}
                  </span>
                </div>
                
                <a 
                  href={research.document_url}
                  className="inline-flex items-center text-blue-600 hover:text-blue-500"
                >
                  <FileText className="h-5 w-5 mr-2" />
                  <span>Read Full Paper</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}