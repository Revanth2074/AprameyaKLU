export interface User {
  id: string;
  name: string;
  role: 'admin' | 'core' | 'member';
  email: string;
  avatar?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  status: 'ongoing' | 'completed';
  team: string[];
  technologies: string[];
  createdAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: User;
  image: string;
  tags: string[];
  createdAt: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  capacity: number;
  registeredUsers: string[];
  image: string;
}