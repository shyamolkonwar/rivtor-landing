'use client';

import { useState } from 'react';
import Navbar from '@/components/v3/Navbar';
import Footer from '@/components/v3/Footer';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        type: 'sales',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                throw new Error('Failed to send message');
            }

            setStatus('success');
            setFormData({ name: '', email: '', type: 'sales', message: '' });
        } catch (error) {
            console.error(error);
            setStatus('error');
            setErrorMessage('Something went wrong. Please try again later.');
        }
    };

    return (
        <main className="min-h-screen bg-[#060608] text-[#F4F6FB]">
            <Navbar />

            <div className="max-w-6xl mx-auto pt-32 pb-20 px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                    {/* Left Column: Info */}
                    <div>
                        <div className="text-[#C8D8F0] text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                            Global Operations
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#F4F6FB] mb-6 leading-tight" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                            Initiate <br />
                            Communication
                        </h1>
                        <p className="text-sm text-[#8892A4] leading-relaxed max-w-sm mb-12" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                            Deploying enterprise-grade AI infrastructure requires direct coordination. Our team is ready to architect your solution.
                        </p>

                        <div className="space-y-8">
                            <div className="p-6 bg-[#0E0F12] border border-[#1C1E26] rounded-lg">
                                <h3 className="text-sm font-bold uppercase tracking-widest mb-2 text-[#F4F6FB]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>Direct Channel</h3>
                                <a href="mailto:office@rivtor.com" className="text-2xl font-bold text-[#8892A4] hover:text-[#C8D8F0] transition-colors" style={{ fontFamily: "var(--font-geist), sans-serif" }}>
                                    office@rivtor.com
                                </a>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-6 bg-[#060608] border border-[#1C1E26] rounded-lg">
                                    <h4 className="text-xs text-[#8892A4] uppercase mb-1" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>Support</h4>
                                    <p className="text-[#F4F6FB]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>24/7 Monitoring</p>
                                </div>
                                <div className="p-6 bg-[#060608] border border-[#1C1E26] rounded-lg">
                                    <h4 className="text-xs text-[#8892A4] uppercase mb-1" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>Sales</h4>
                                    <p className="text-[#F4F6FB]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Enterprise Only</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-[#C8D8F0]/5 blur-2xl rounded-lg pointer-events-none" />

                        <form
                            onSubmit={handleSubmit}
                            className="relative bg-[#060608] border border-[#1C1E26] p-8 md:p-10 rounded-xl"
                        >
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-xs text-[#8892A4] uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                                        Identity / Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-[#0E0F12] border border-[#1C1E26] text-[#F4F6FB] p-3 focus:outline-none focus:border-[#C8D8F0] transition-colors placeholder-[#8892A4]"
                                        placeholder="ENTER FULL NAME"
                                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-xs text-[#8892A4] uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                                        Communication / Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-[#0E0F12] border border-[#1C1E26] text-[#F4F6FB] p-3 focus:outline-none focus:border-[#C8D8F0] transition-colors placeholder-[#8892A4]"
                                        placeholder="NAME@COMPANY.COM"
                                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="type" className="block text-xs text-[#8892A4] uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                                        Inquiry Type
                                    </label>
                                    <select
                                        id="type"
                                        value={formData.type}
                                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                        className="w-full bg-[#0E0F12] border border-[#1C1E26] text-[#F4F6FB] p-3 focus:outline-none focus:border-[#C8D8F0] transition-colors appearance-none"
                                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                                    >
                                        <option value="sales">Enterprise Sales</option>
                                        <option value="support">Technical Support</option>
                                        <option value="partnership">Partnership</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-xs text-[#8892A4] uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                                        Transmission / Message
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-[#0E0F12] border border-[#1C1E26] text-[#F4F6FB] p-3 focus:outline-none focus:border-[#C8D8F0] transition-colors placeholder-[#8892A4] resize-none"
                                        placeholder="DETAILS OF YOUR REQUEST..."
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
                                        {status === 'submitting' ? 'Transmitting...' : 'Send Message'}
                                    </button>
                                </div>

                                {status === 'success' && (
                                    <div className="p-4 bg-[#C8D8F0]/10 border border-[#C8D8F0]/30 text-[#C8D8F0] text-sm font-mono text-center">
                                        TRANSMISSION RECEIVED. WE WILL RESPOND SHORTLY.
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
            </div>

            <Footer />
        </main>
    );
}
