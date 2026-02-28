'use client';
import { sendGTMEvent, ANALYTICS_EVENTS } from '@/lib/analytics';
import { useState } from 'react';
import Navbar from '@/components/v3/Navbar';
import Footer from '@/components/v3/Footer';

export default function ReportPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        severity: 'low',
        description: '',
        steps_to_reproduce: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        try {
            const res = await fetch('/api/report', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                throw new Error('Failed to send report');
            }

            sendGTMEvent({
                action: ANALYTICS_EVENTS.SUBMIT_CONTACT_FORM,
                category: ANALYTICS_EVENTS.CATEGORY_CONVERSION,
                label: 'bug_report',
            });

            setStatus('success');
            setFormData({ name: '', email: '', severity: 'low', description: '', steps_to_reproduce: '' });
        } catch (error) {
            console.error(error);
            setStatus('error');
            setErrorMessage('Something went wrong. Please try again later.');
        }
    };

    return (
        <main className="min-h-screen bg-[#060608] text-[#F4F6FB]">
            <Navbar />

            <div className="max-w-3xl mx-auto pt-32 pb-20 px-6 relative z-10">
                <div className="text-center mb-12">
                    <div className="text-[#C8D8F0] text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                        Bug Reporting System
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#F4F6FB] mb-6" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                        Report an Issue
                    </h1>
                    <p className="text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                        Found a bug? Help us improve Rivtor by submitting a detailed report.
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute -inset-4 bg-[#C8D8F0]/5 blur-2xl rounded-lg pointer-events-none" />

                    <form onSubmit={handleSubmit} className="relative bg-[#060608] border border-[#1C1E26] p-8 md:p-10 rounded-xl">
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-xs text-[#8892A4] uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-[#0E0F12] border border-[#1C1E26] text-[#F4F6FB] p-3 focus:outline-none focus:border-[#C8D8F0] transition-colors placeholder-[#8892A4]"
                                    placeholder="Your name"
                                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-xs text-[#8892A4] uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-[#0E0F12] border border-[#1C1E26] text-[#F4F6FB] p-3 focus:outline-none focus:border-[#C8D8F0] transition-colors placeholder-[#8892A4]"
                                    placeholder="your@email.com"
                                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                                />
                            </div>

                            <div>
                                <label htmlFor="severity" className="block text-xs text-[#8892A4] uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                                    Severity
                                </label>
                                <select
                                    id="severity"
                                    value={formData.severity}
                                    onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
                                    className="w-full bg-[#0E0F12] border border-[#1C1E26] text-[#F4F6FB] p-3 focus:outline-none focus:border-[#C8D8F0] transition-colors appearance-none"
                                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                                >
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                    <option value="critical">Critical</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-xs text-[#8892A4] uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    required
                                    rows={4}
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="w-full bg-[#0E0F12] border border-[#1C1E26] text-[#F4F6FB] p-3 focus:outline-none focus:border-[#C8D8F0] transition-colors placeholder-[#8892A4] resize-none"
                                    placeholder="Describe the issue..."
                                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                                />
                            </div>

                            <div>
                                <label htmlFor="steps" className="block text-xs text-[#8892A4] uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                                    Steps to Reproduce
                                </label>
                                <textarea
                                    id="steps"
                                    rows={3}
                                    value={formData.steps_to_reproduce}
                                    onChange={(e) => setFormData({ ...formData, steps_to_reproduce: e.target.value })}
                                    className="w-full bg-[#0E0F12] border border-[#1C1E26] text-[#F4F6FB] p-3 focus:outline-none focus:border-[#C8D8F0] transition-colors placeholder-[#8892A4] resize-none"
                                    placeholder="1. Step one&#10;2. Step two&#10;3. etc."
                                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                                />
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full bg-[#C8D8F0] text-[#060608] text-sm font-bold uppercase tracking-widest py-4 hover:bg-[#C8D8F0]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded"
                                    style={{ fontFamily: "var(--font-geist-mono), monospace" }}
                                >
                                    {status === 'submitting' ? 'Submitting...' : 'Submit Report'}
                                </button>
                            </div>

                            {status === 'success' && (
                                <div className="p-4 bg-[#C8D8F0]/10 border border-[#C8D8F0]/30 text-[#C8D8F0] text-sm text-center" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                                    Report received. We&apos;ll investigate and get back to you.
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center">
                                    {errorMessage}
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </main>
    );
}
