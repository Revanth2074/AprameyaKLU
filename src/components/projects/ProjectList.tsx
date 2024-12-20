import React from 'react';
import { Code, Users, Calendar } from 'lucide-react';

const demoProjects = [
  {
    id: '1',
    title: 'Autonomous Navigation System',
    description: 'Development of a robust navigation system using LiDAR and computer vision for autonomous vehicles.',
    image_url: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80',
    status: 'ongoing',
    team_members: ['Team Lead: Dr. Smith', 'Core Members: 4', 'Contributors: 8'],
    technologies: ['ROS', 'Python', 'Computer Vision', 'TensorFlow'],
    created_at: '2024-03-15'
  },
  {
    id: '2',
    title: 'Smart Traffic Management',
    description: 'AI-powered traffic management system for optimizing traffic flow and reducing congestion.',
    image_url: 'https://images.unsplash.com/photo-1597762117709-859f744b84c3?auto=format&fit=crop&q=80',
    status: 'completed',
    team_members: ['Team Lead: Dr. Johnson', 'Core Members: 3', 'Contributors: 6'],
    technologies: ['IoT', 'Machine Learning', 'Edge Computing'],
    created_at: '2024-02-20'
  }
];

export default function ProjectList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {demoProjects.map((project) => (
        <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <img 
            src={project.image_url} 
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                project.status === 'ongoing' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
              }`}>
                {project.status}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{project.description}</p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <Users className="h-5 w-5 mr-2" />
                <div className="text-sm">{project.team_members.join(' • ')}</div>
              </div>
              
              <div className="flex items-center text-gray-600">
                <Code className="h-5 w-5 mr-2" />
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-100 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center text-gray-600">
                <Calendar className="h-5 w-5 mr-2" />
                <span className="text-sm">
                  Started: {new Date(project.created_at).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}