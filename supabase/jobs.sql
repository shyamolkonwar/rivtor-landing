-- Create the table for storing job postings
create table public.jobs (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),
  title text not null,
  department text not null,
  location text not null,
  type text not null, -- 'Full-time', 'Part-time', 'Contract', 'Internship'
  experience_level text, -- 'Entry', 'Mid', 'Senior', 'Lead'
  description text not null,
  requirements text,
  external_url text not null, -- Link to job portal (Internshala, LinkedIn, etc.)
  portal_name text not null, -- e.g., 'Internshala', 'LinkedIn', 'Wellfound'
  is_active boolean not null default true,
  posted_date timestamp with time zone not null default now(),
  constraint jobs_pkey primary key (id)
) tablespace pg_default;

-- Enable Row Level Security (RLS)
alter table public.jobs enable row level security;

-- Create a policy that allows the service role (API) to insert/update/delete data
create policy "Enable insert for service role only"
  on public.jobs
  for insert
  to service_role
  with check (true);

create policy "Enable update for service role only"
  on public.jobs
  for update
  to service_role
  using (true)
  with check (true);

create policy "Enable delete for service role only"
  on public.jobs
  for delete
  to service_role
  using (true);

-- Create a policy that allows everyone to view active jobs
create policy "Enable select for all (active jobs only)"
  on public.jobs
  for select
  to anon, authenticated
  using (is_active = true);

-- Create an index on is_active for faster queries
create index idx_jobs_is_active on public.jobs(is_active);

-- Create an index on posted_date for sorting
create index idx_jobs_posted_date on public.jobs(posted_date desc);

-- Create an index on department for filtering
create index idx_jobs_department on public.jobs(department);

-- Create an index on location for filtering
create index idx_jobs_location on public.jobs(location);

-- Create an index on type for filtering
create index idx_jobs_type on public.jobs(type);
