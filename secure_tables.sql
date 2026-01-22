-- Run this in your Supabase SQL Editor to secure your database.

-- 1. Enable RLS on your main tables
ALTER TABLE issues ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- 2. Allow the public to READ data (Issues)
CREATE POLICY "Public Read Issues" 
ON issues FOR SELECT 
TO anon, authenticated 
USING (true);

-- 3. Allow the public to READ data (Articles)
-- Optional: You can restrict this to "is_published = true" if you want to hide drafts from API scanners
CREATE POLICY "Public Read Articles" 
ON articles FOR SELECT 
TO anon, authenticated 
USING (true);

-- Note: No "INSERT/UPDATE/DELETE" policies are created for 'anon'.
-- This means NO ONE can write to your DB from the browser.
-- Your Admin Dashboard works effectively because it uses the secure Service Role key.
