-- ==========================================================================
-- Modern Guideways — Supabase Database Schema & Storage Configuration
-- Run this script in the Supabase Dashboard SQL Editor
-- ==========================================================================

-- 1. Table: site_content (Stores CMS content, hero copy, products, specs)
CREATE TABLE IF NOT EXISTS public.site_content (
    key TEXT PRIMARY KEY,
    data JSONB NOT NULL DEFAULT '{}'::jsonb,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;

-- Allow public read access to site_content so the frontend can display it
DROP POLICY IF EXISTS "Allow public read on site_content" ON public.site_content;
CREATE POLICY "Allow public read on site_content"
    ON public.site_content FOR SELECT
    USING (true);

-- Allow service role / backend to update site_content
DROP POLICY IF EXISTS "Allow service role full access on site_content" ON public.site_content;
CREATE POLICY "Allow service role full access on site_content"
    ON public.site_content FOR ALL
    USING (auth.role() = 'service_role' OR auth.role() = 'anon');

-- --------------------------------------------------------------------------
-- 2. Table: enquiries (Stores customer lead forms, quotation requests)
CREATE TABLE IF NOT EXISTS public.enquiries (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    company TEXT DEFAULT '',
    phone TEXT DEFAULT '',
    email TEXT DEFAULT '',
    machine_type TEXT DEFAULT '',
    protection_type TEXT DEFAULT '',
    stroke TEXT DEFAULT '',
    notes TEXT DEFAULT '',
    status TEXT DEFAULT 'NEW',
    raw_payload JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON public.enquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enquiries_status ON public.enquiries (status);

-- Enable Row Level Security (RLS)
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- Allow backend / anon to insert new customer enquiries
DROP POLICY IF EXISTS "Allow insert enquiries" ON public.enquiries;
CREATE POLICY "Allow insert enquiries"
    ON public.enquiries FOR INSERT
    WITH CHECK (true);

-- Allow service role / anon read access for enquiries admin
DROP POLICY IF EXISTS "Allow read enquiries" ON public.enquiries;
CREATE POLICY "Allow read enquiries"
    ON public.enquiries FOR SELECT
    USING (true);

-- --------------------------------------------------------------------------
-- 3. Storage Bucket: media (Stores logos, product gallery images, videos)
INSERT INTO storage.buckets (id, name, public)
VALUES ('media', 'media', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Allow public read on media storage bucket
DROP POLICY IF EXISTS "Public Access for media" ON storage.objects;
CREATE POLICY "Public Access for media"
    ON storage.objects FOR SELECT
    USING (bucket_id = 'media');

-- Allow uploads into media storage bucket
DROP POLICY IF EXISTS "Allow upload to media" ON storage.objects;
CREATE POLICY "Allow upload to media"
    ON storage.objects FOR INSERT
    WITH CHECK (bucket_id = 'media');

DROP POLICY IF EXISTS "Allow update on media" ON storage.objects;
CREATE POLICY "Allow update on media"
    ON storage.objects FOR UPDATE
    USING (bucket_id = 'media');
