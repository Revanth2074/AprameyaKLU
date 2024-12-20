import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import ResearchList from '../components/research/ResearchList';
import ResearchForm from '../components/research/ResearchForm';

export default function Research() {
  const { user } = useAuth();
  const isAdmin = user?.user_metadata?.role === 'admin';
  const isCoreTeam = user?.user_metadata?.role === 'core';

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Research</h1>
        {(isAdmin || isCoreTeam) && (
          <ResearchForm />
        )}
      </div>
      <ResearchList />
    </div>
  );
}