import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import ProjectList from '../components/projects/ProjectList';
import ProjectForm from '../components/projects/ProjectForm';

export default function Projects() {
  const { user } = useAuth();
  const isAdmin = user?.user_metadata?.role === 'admin';
  const isCoreTeam = user?.user_metadata?.role === 'core';

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
        {(isAdmin || isCoreTeam) && (
          <ProjectForm />
        )}
      </div>
      <ProjectList />
    </div>
  );
}