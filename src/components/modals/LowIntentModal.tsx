"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { trackLeadCapture } from "@/lib/analytics";
import { submitLowIntentLead } from "@/actions/leads";

interface LowIntentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LowIntentModal({ isOpen, onClose }: LowIntentModalProps) {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");
    const modalRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Focus input when modal opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    // Close on backdrop click
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    // Email validation
    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Sanitize input to prevent XSS
    const sanitizeInput = (input: string): string => {
        return input.replace(/[<>"'&]/g, "").trim().slice(0, 254);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError("");

        const sanitizedEmail = sanitizeInput(email);

        if (!validateEmail(sanitizedEmail)) {
            setError("Please enter a valid email address.");
            return;
        }

        setIsSubmitting(true);

        try {
            // Track the lead capture event
            trackLeadCapture(sanitizedEmail, "low");

            // Submit to Supabase via server action
            const result = await submitLowIntentLead(sanitizedEmail);

            if (!result.success) {
                setError(result.error || "Something went wrong.");
                return;
            }

            setIsSubmitted(true);
            setEmail("");

            // Auto close after success
            setTimeout(() => {
                onClose();
                setIsSubmitted(false);
            }, 2000);
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div
                ref={modalRef}
                className="w-full max-w-md bg-white border border-[#E5E5E5] animate-fade-in"
                style={{ borderRadius: 0 }}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-[#E5E5E5]">
                    <h2
                        id="modal-title"
                        className="font-mono text-sm uppercase tracking-[0.05em] text-[#0A0A0A]"
                    >
                        ACCESS PROTOCOL
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-2xl text-[#525252] hover:text-[#0A0A0A] transition-colors"
                        aria-label="Close modal"
                    >
                        ×
                    </button>
                </div>

                {/* Body */}
                <div className="p-6">
                    {isSubmitted ? (
                        <div className="text-center py-8">
                            <div className="text-4xl mb-4">✓</div>
                            <p className="text-[#0A0A0A] font-medium">You&apos;re on the list!</p>
                            <p className="text-sm text-[#525252] mt-2">
                                We&apos;ll notify you when access opens.
                            </p>
                        </div>
                    ) : (
                        <>
                            <p className="text-[#525252] mb-6 leading-relaxed">
                                The VocoWeb Sandbox is currently at capacity. Enter your email for
                                priority access when spots open.
                            </p>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <input
                                        ref={inputRef}
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="your@email.com"
                                        className="w-full h-12 px-4 border border-[#E5E5E5] text-[#0A0A0A] placeholder-[#525252] focus:border-black focus:outline-none transition-colors"
                                        style={{ borderRadius: 0 }}
                                        disabled={isSubmitting}
                                        aria-describedby={error ? "email-error" : undefined}
                                    />
                                    {error && (
                                        <p id="email-error" className="mt-2 text-sm text-red-600">
                                            {error}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-12 bg-black text-white font-mono text-sm uppercase tracking-[0.05em] hover:opacity-90 transition-opacity disabled:opacity-50"
                                    style={{ borderRadius: 0 }}
                                >
                                    {isSubmitting ? "SUBMITTING..." : "REQUEST ACCESS"}
                                </button>
                            </form>

                            <p className="mt-4 text-center text-xs text-[#525252] font-mono tracking-[0.05em]">
                                NO SPAM // UNSUBSCRIBE ANYTIME
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
