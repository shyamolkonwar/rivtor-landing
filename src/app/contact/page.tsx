'use client';
import { sendGTMEvent, ANALYTICS_EVENTS } from '@/lib/analytics';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

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

            sendGTMEvent({
                action: ANALYTICS_EVENTS.SUBMIT_CONTACT_FORM,
                category: ANALYTICS_EVENTS.CATEGORY_CONVERSION,
                label: formData.type,
            });

            setStatus('success');
            setFormData({ name: '', email: '', type: 'sales', message: '' });
        } catch (error) {
            console.error(error);
            setStatus('error');
            setErrorMessage('Something went wrong. Please try again later.');
        }
    };

    return (
        <main className="min-h-screen bg-[#070707] text-[#F3F4F6]">
            <Navbar />

            <div className="container pt-32 pb-20 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                    {/* Left Column: Info */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="font-mono text-xs text-[#E54826] uppercase tracking-wider mb-4">
                                Global Operations
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#F3F4F6] mb-6 leading-tight">
                                Initiate <br />
                                Communication
                            </h1>
                            <p className="font-mono text-sm text-[#9CA3AF] leading-relaxed max-w-sm mb-12">
                                Deploying enterprise-grade AI infrastructure requires direct coordination. Our team is ready to architect your solution.
                            </p>

                            <div className="space-y-8">
                                <div className="p-6 bg-[#141414] border border-[#262626] rounded-lg">
                                    <h3 className="font-mono text-sm text-[#F3F4F6] uppercase tracking-wider mb-2">Direct Channel</h3>
                                    <a href="mailto:office@rivtor.com" className="text-2xl font-bold text-[#9CA3AF] hover:text-[#E54826] transition-colors">
                                        office@rivtor.com
                                    </a>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-6 bg-[#070707] border border-[#262626] rounded-lg">
                                        <h4 className="font-mono text-xs text-[#9CA3AF] uppercase mb-1">Support</h4>
                                        <p className="text-[#F3F4F6]">24/7 Monitoring</p>
                                    </div>
                                    <div className="p-6 bg-[#070707] border border-[#262626] rounded-lg">
                                        <h4 className="font-mono text-xs text-[#9CA3AF] uppercase mb-1">Sales</h4>
                                        <p className="text-[#F3F4F6]">Enterprise Only</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#E54826] to-purple-600 opacity-10 blur-2xl rounded-lg pointer-events-none" />

                        <motion.form
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            onSubmit={handleSubmit}
                            className="relative bg-[#070707] border border-[#262626] p-8 md:p-10 rounded-xl shadow-2xl"
                        >
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block font-mono text-xs text-[#9CA3AF] uppercase tracking-wider mb-2">
                                        Identity / Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-[#141414] border border-[#262626] text-[#F3F4F6] p-3 focus:outline-none focus:border-[#E54826] transition-colors rounded-none placeholder-[#666666]"
                                        placeholder="ENTER FULL NAME"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block font-mono text-xs text-[#9CA3AF] uppercase tracking-wider mb-2">
                                        Communication / Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-[#141414] border border-[#262626] text-[#F3F4F6] p-3 focus:outline-none focus:border-[#E54826] transition-colors rounded-none placeholder-[#666666]"
                                        placeholder="NAME@COMPANY.COM"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="type" className="block font-mono text-xs text-[#9CA3AF] uppercase tracking-wider mb-2">
                                        Inquiry Type
                                    </label>
                                    <select
                                        id="type"
                                        value={formData.type}
                                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                        className="w-full bg-[#141414] border border-[#262626] text-[#F3F4F6] p-3 focus:outline-none focus:border-[#E54826] transition-colors rounded-none appearance-none"
                                    >
                                        <option value="sales">Enterprise Sales</option>
                                        <option value="support">Technical Support</option>
                                        <option value="partnership">Partnership</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block font-mono text-xs text-[#9CA3AF] uppercase tracking-wider mb-2">
                                        Transmission / Message
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-[#141414] border border-[#262626] text-[#F3F4F6] p-3 focus:outline-none focus:border-[#E54826] transition-colors rounded-none placeholder-[#666666] resize-none"
                                        placeholder="DETAILS OF YOUR REQUEST..."
                                    />
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full bg-[#F3F4F6] text-[#070707] font-mono text-sm uppercase tracking-wider py-4 hover:bg-[#E54826] hover:text-[#070707] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {status === 'submitting' ? 'Transmitting...' : 'Send Message'}
                                    </button>
                                </div>

                                {status === 'success' && (
                                    <div className="p-4 bg-[rgba(0,255,100,0.1)] border border-green-900 text-green-400 text-sm font-mono text-center">
                                        TRANSMISSION RECEIVED. WE WILL RESPOND SHORTLY.
                                    </div>
                                )}
                                {status === 'error' && (
                                    <div className="p-4 bg-[rgba(255,0,0,0.1)] border border-red-900 text-red-400 text-sm font-mono text-center">
                                        {errorMessage}
                                    </div>
                                )}
                            </div>
                        </motion.form>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
