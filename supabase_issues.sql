-- Create Issues table
create table public.issues (
  slug text not null primary key,   -- e.g. '23f'
  semester text not null unique,    -- e.g. 'Fall 2023', unique constraint to prevent duplicates
  theme text,                       -- e.g. 'Word'
  volume integer,                   -- e.g. 1
  issue_number integer,             -- e.g. 1
  cover_image_url text,             -- e.g. from storage
  letter_from_eic text,             -- markdown content
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Add foreign key reference to articles (optional, ensures data integrity)
-- Note: existing articles with issue_slugs that don't exist in the issues table will cause this to fail if enforced immediately.
-- We will add the constraint but allow it to be deferred or null for now if simpler, 
-- but strictly speaking, we just want the table for now. 
