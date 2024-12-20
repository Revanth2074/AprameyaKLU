import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import EventList from '../components/events/EventList';
import EventForm from '../components/events/EventForm';

export default function Events() {
  const { user } = useAuth();
  const isAdmin = user?.user_metadata?.role === 'admin';
  const isCoreTeam = user?.user_metadata?.role === 'core';

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Events</h1>
        {(isAdmin || isCoreTeam) && (
          <EventForm />
        )}
      </div>
      <EventList />
    </div>
  );
}