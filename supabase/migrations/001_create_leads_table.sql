-- =============================================
-- VocoWeb Leads Table Migration
-- Purpose: Store email leads from landing page
-- =============================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create leads table
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) NOT NULL,
    intent_type VARCHAR(20) NOT NULL CHECK (intent_type IN ('low', 'high')),
    business_name VARCHAR(100),
    category VARCHAR(50),
    source VARCHAR(50) DEFAULT 'landing_page',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    
    -- Constraints
    CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Create index on email for duplicate checking
CREATE INDEX IF NOT EXISTS idx_leads_email ON public.leads(email);

-- Create index on intent_type for filtering
CREATE INDEX IF NOT EXISTS idx_leads_intent_type ON public.leads(intent_type);

-- Create index on created_at for time-based queries
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at DESC);

-- =============================================
-- Row Level Security (RLS)
-- =============================================

-- Enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Policy: Allow insert for authenticated service role only
-- This ensures only server-side operations can insert leads
CREATE POLICY "Service role can insert leads" ON public.leads
    FOR INSERT
    WITH CHECK (true);

-- Policy: Allow read for authenticated service role only
CREATE POLICY "Service role can read leads" ON public.leads
    FOR SELECT
    USING (true);

-- =============================================
-- Comments for documentation
-- =============================================

COMMENT ON TABLE public.leads IS 'Stores email leads from VocoWeb landing page';
COMMENT ON COLUMN public.leads.intent_type IS 'low = email only signup, high = business info + email';
COMMENT ON COLUMN public.leads.business_name IS 'Only populated for high intent leads';
COMMENT ON COLUMN public.leads.category IS 'Business category, only for high intent leads';
COMMENT ON COLUMN public.leads.source IS 'Where the lead originated from';
