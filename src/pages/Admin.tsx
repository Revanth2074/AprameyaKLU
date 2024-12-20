import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import UserManagement from '../components/admin/UserManagement';
import AccessDenied from '../components/common/AccessDenied';

export default function Admin() {
  const { user } = useAuth();
  const isAdmin = user?.user_metadata?.role === 'admin';

  if (!isAdmin) {
    return <AccessDenied />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
      <UserManagement />
    </div>
  );
}