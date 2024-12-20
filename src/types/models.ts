export interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  status: 'ongoing' | 'completed';
  team_members: string[];
  technologies: string[];
  created_at: string;
  updated_at: string;
}

export interface Research {
  id: string;
  title: string;
  abstract: string;
  content: string;
  authors: string[];
  publication_date: string;
  image_url: string;
  document_url: string;
  created_at: string;
  updated_at: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  capacity: number;
  registered_users: string[];
  image_url: string;
  created_at: string;
  updated_at: string;
}