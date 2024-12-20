/*
  # Content Management Tables

  1. New Tables
    - projects
    - research
    - events
  
  2. Security
    - Enable RLS on all tables
    - Add policies for CRUD operations
*/

-- Projects table
CREATE TABLE projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text,
  status text NOT NULL CHECK (status IN ('ongoing', 'completed')),
  team_members uuid[] NOT NULL,
  technologies text[] NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Research table
CREATE TABLE research (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  abstract text NOT NULL,
  content text NOT NULL,
  authors uuid[] NOT NULL,
  publication_date timestamptz,
  image_url text,
  document_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Events table
CREATE TABLE events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  date timestamptz NOT NULL,
  location text NOT NULL,
  capacity integer NOT NULL,
  registered_users uuid[] DEFAULT '{}',
  image_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE research ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Projects policies
CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Admin and core team can create projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (
    auth.uid() IN (
      SELECT id FROM auth.users
      WHERE raw_user_meta_data->>'role' IN ('admin', 'core')
    )
  );

CREATE POLICY "Admin and core team can update projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (
    auth.uid() IN (
      SELECT id FROM auth.users
      WHERE raw_user_meta_data->>'role' IN ('admin', 'core')
    )
  );

-- Research policies
CREATE POLICY "Anyone can view research"
  ON research FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Admin and core team can create research"
  ON research FOR INSERT
  TO authenticated
  WITH CHECK (
    auth.uid() IN (
      SELECT id FROM auth.users
      WHERE raw_user_meta_data->>'role' IN ('admin', 'core')
    )
  );

CREATE POLICY "Admin and core team can update research"
  ON research FOR UPDATE
  TO authenticated
  USING (
    auth.uid() IN (
      SELECT id FROM auth.users
      WHERE raw_user_meta_data->>'role' IN ('admin', 'core')
    )
  );

-- Events policies
CREATE POLICY "Anyone can view events"
  ON events FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Admin and core team can create events"
  ON events FOR INSERT
  TO authenticated
  WITH CHECK (
    auth.uid() IN (
      SELECT id FROM auth.users
      WHERE raw_user_meta_data->>'role' IN ('admin', 'core')
    )
  );

CREATE POLICY "Admin and core team can update events"
  ON events FOR UPDATE
  TO authenticated
  USING (
    auth.uid() IN (
      SELECT id FROM auth.users
      WHERE raw_user_meta_data->>'role' IN ('admin', 'core')
    )
  );

-- Update user_metadata function
CREATE OR REPLACE FUNCTION update_user_role(
  user_id uuid,
  new_role text
)
RETURNS void AS $$
BEGIN
  IF new_role NOT IN ('admin', 'core', 'member') THEN
    RAISE EXCEPTION 'Invalid role: %', new_role;
  END IF;
  
  UPDATE auth.users
  SET raw_user_meta_data = 
    CASE 
      WHEN raw_user_meta_data IS NULL THEN 
        jsonb_build_object('role', new_role)
      ELSE
        raw_user_meta_data || jsonb_build_object('role', new_role)
    END
  WHERE id = user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;