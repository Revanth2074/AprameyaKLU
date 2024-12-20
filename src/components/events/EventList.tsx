import React from 'react';
import { MapPin, Calendar, Users, ArrowRight } from 'lucide-react';

const demoEvents = [
  {
    id: '1',
    title: 'Autonomous Vehicle Workshop 2024',
    description: 'Hands-on workshop covering the latest developments in autonomous vehicle technology, including sensor fusion, path planning, and control systems.',
    date: '2024-04-15T09:00:00',
    location: 'Engineering Building, Room 301',
    capacity: 50,
    registered_users: 32,
    image_url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    title: 'AI in Transportation Symposium',
    description: 'A one-day symposium featuring leading experts discussing the future of AI in transportation systems.',
    date: '2024-05-20T10:00:00',
    location: 'Main Auditorium',
    capacity: 200,
    registered_users: 145,
    image_url: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&q=80'
  }
];

export default function EventList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {demoEvents.map((event) => (
        <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <img 
            src={event.image_url} 
            alt={event.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
            <p className="text-gray-600 mb-4">{event.description}</p>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center text-gray-600">
                <Calendar className="h-5 w-5 mr-2" />
                <span className="text-sm">
                  {new Date(event.date).toLocaleDateString()} at{' '}
                  {new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-sm">{event.location}</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <Users className="h-5 w-5 mr-2" />
                <span className="text-sm">
                  {event.registered_users} / {event.capacity} registered
                </span>
              </div>
            </div>
            
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center">
              Register Now
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}