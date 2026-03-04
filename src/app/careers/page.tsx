"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/v3/Navbar";
import Footer from "@/components/v3/Footer";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience_level?: string;
  description: string;
  requirements?: string;
  external_url: string;
  portal_name: string;
  posted_date: string;
}

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedType, setSelectedType] = useState("");

  // Unique values for filters
  const departments = Array.from(new Set(jobs.map((j) => j.department))).sort();
  const locations = Array.from(new Set(jobs.map((j) => j.location))).sort();
  const types = Array.from(new Set(jobs.map((j) => j.type))).sort();

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    filterJobs();
  }, [jobs, search, selectedDepartment, selectedLocation, selectedType]);

  const fetchJobs = async () => {
    try {
      const params = new URLSearchParams();
      if (search) params.append("search", search);
      if (selectedDepartment) params.append("department", selectedDepartment);
      if (selectedLocation) params.append("location", selectedLocation);
      if (selectedType) params.append("type", selectedType);

      const res = await fetch(`/api/jobs?${params.toString()}`);
      const data = await res.json();
      setJobs(data.jobs || []);
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterJobs = () => {
    let filtered = [...jobs];

    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(searchLower) ||
          job.description.toLowerCase().includes(searchLower) ||
          job.department.toLowerCase().includes(searchLower)
      );
    }

    if (selectedDepartment) {
      filtered = filtered.filter((job) => job.department === selectedDepartment);
    }

    if (selectedLocation) {
      filtered = filtered.filter((job) => job.location === selectedLocation);
    }

    if (selectedType) {
      filtered = filtered.filter((job) => job.type === selectedType);
    }

    setFilteredJobs(filtered);
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedDepartment("");
    setSelectedLocation("");
    setSelectedType("");
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <main className="min-h-screen bg-[#060608] text-[#F4F6FB]">
      <Navbar />

      <div className="max-w-6xl mx-auto pt-32 pb-20 px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#C8D8F0] text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
            Careers
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#F4F6FB] mb-6 leading-tight" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
            Join Our Mission
          </h1>
          <p className="text-[#8892A4] text-lg max-w-2xl mx-auto" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            Build the infrastructure for autonomous organizations. Work on problems that matter with people who care.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search jobs by title, department, or keyword..."
              className="w-full bg-[#0E0F12] border border-[#1C1E26] text-[#F4F6FB] p-4 pl-12 focus:outline-none focus:border-[#C8D8F0] transition-colors placeholder-[#8892A4] rounded-lg"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8892A4]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            {/* Department Filter */}
            <div className="flex-1 min-w-[200px]">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full bg-[#0E0F12] border border-[#1C1E26] text-[#F4F6FB] p-3 focus:outline-none focus:border-[#C8D8F0] transition-colors rounded-lg"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                <option value="">All Departments</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div className="flex-1 min-w-[200px]">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-[#0E0F12] border border-[#1C1E26] text-[#F4F6FB] p-3 focus:outline-none focus:border-[#C8D8F0] transition-colors rounded-lg"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                <option value="">All Locations</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div className="flex-1 min-w-[200px]">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-[#0E0F12] border border-[#1C1E26] text-[#F4F6FB] p-3 focus:outline-none focus:border-[#C8D8F0] transition-colors rounded-lg"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                <option value="">All Types</option>
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Clear Filters */}
            {(search || selectedDepartment || selectedLocation || selectedType) && (
              <button
                onClick={clearFilters}
                className="px-6 py-3 border border-[#1C1E26] text-[#8892A4] hover:text-[#C8D8F0] hover:border-[#C8D8F0] transition-colors rounded-lg"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            {loading
              ? "Loading jobs..."
              : `${filteredJobs.length} open position${filteredJobs.length !== 1 ? "s" : ""}`}
          </p>
        </div>

        {/* Job Listings */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C8D8F0]"></div>
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#8892A4] text-lg" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              No positions found matching your criteria.
            </p>
            {(search || selectedDepartment || selectedLocation || selectedType) && (
              <button
                onClick={clearFilters}
                className="mt-4 text-[#C8D8F0] hover:underline"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Clear all filters
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-[#0E0F12] border border-[#1C1E26] p-6 md:p-8 rounded-lg hover:border-[#C8D8F0]/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl md:text-2xl font-bold text-[#F4F6FB]" style={{ fontFamily: "var(--font-geist), sans-serif" }}>
                        {job.title}
                      </h3>
                      <span className="px-3 py-1 bg-[#C8D8F0]/10 text-[#C8D8F0] text-xs font-bold uppercase tracking-wider rounded-full" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                        {job.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-[#8892A4] text-sm mb-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {job.department}
                      </span>
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                      {job.experience_level && (
                        <span className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                          {job.experience_level}
                        </span>
                      )}
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Posted {formatDate(job.posted_date)}
                      </span>
                    </div>

                    <p className="text-[#8892A4] line-clamp-2 mb-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                      {job.description}
                    </p>
                  </div>

                  <div className="flex md:flex-col items-start md:items-end gap-3">
                    <span className="text-xs text-[#8892A4] uppercase tracking-wider" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                      Apply via {job.portal_name}
                    </span>
                    <a
                      href={job.external_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#C8D8F0] text-[#060608] px-6 py-3 rounded font-bold text-sm uppercase tracking-widest hover:bg-[#C8D8F0]/90 transition-colors"
                      style={{ fontFamily: "var(--font-geist-mono), monospace" }}
                    >
                      Apply Now
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No jobs available initially */}
        {!loading && jobs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#8892A4] text-lg mb-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              We don't have any open positions at the moment.
            </p>
            <p className="text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Check back soon or send your resume to{" "}
              <a href="mailto:careers@rivtor.com" className="text-[#C8D8F0] hover:underline">
                careers@rivtor.com
              </a>
            </p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
