"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { trackBusinessInfo } from "@/lib/analytics";
import { submitHighIntentLead } from "@/actions/leads";

interface HighIntentFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const businessCategories = [
    "SaaS / Software",
    "E-commerce",
    "Digital Products",
    "Consulting / Services",
    "Education / Courses",
    "Marketplace",
    "Subscription Box",
    "Agency",
    "Other",
];

export default function HighIntentForm({ isOpen, onClose }: HighIntentFormProps) {
    const [step, setStep] = useState(1);
    const [businessName, setBusinessName] = useState("");
    const [category, setCategory] = useState("");
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");
    const formRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Focus input when modal opens or step changes
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen, step]);

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
        if (formRef.current && !formRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    // Sanitize input
    const sanitizeInput = (input: string): string => {
        return input.replace(/[<>"'&]/g, "").trim().slice(0, 100);
    };

    // Email validation
    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleNext = () => {
        setError("");

        if (step === 1) {
            const sanitized = sanitizeInput(businessName);
            if (sanitized.length < 2) {
                setError("Please enter a valid business name.");
                return;
            }
            setBusinessName(sanitized);
            setStep(2);
        } else if (step === 2) {
            if (!category) {
                setError("Please select a category.");
                return;
            }
            setStep(3);
        }
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
            // Track high intent business info
            trackBusinessInfo(businessName, category);

            // Submit to Supabase via server action
            const result = await submitHighIntentLead(sanitizedEmail, businessName, category);

            if (!result.success) {
                setError(result.error || "Something went wrong.");
                return;
            }

            setIsSubmitted(true);

            // Reset and close after success
            setTimeout(() => {
                onClose();
                setStep(1);
                setBusinessName("");
                setCategory("");
                setEmail("");
                setIsSubmitted(false);
            }, 3000);
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black p-4"
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="form-title"
        >
            <div
                ref={formRef}
                className="w-full max-w-lg bg-white animate-fade-in"
                style={{ borderRadius: 0 }}
            >
                {/* Progress bar */}
                <div className="h-1 bg-[#E5E5E5]">
                    <div
                        className="h-full bg-black transition-all duration-300"
                        style={{ width: `${(step / 3) * 100}%` }}
                    />
                </div>

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-[#E5E5E5]">
                    <div className="flex items-center gap-4">
                        {step > 1 && !isSubmitted && (
                            <button
                                onClick={handleBack}
                                className="text-[#525252] hover:text-[#0A0A0A] transition-colors"
                            >
                                ←
                            </button>
                        )}
                        <h2
                            id="form-title"
                            className="font-mono text-sm uppercase tracking-[0.05em] text-[#0A0A0A]"
                        >
                            START YOUR BUSINESS
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-2xl text-[#525252] hover:text-[#0A0A0A] transition-colors"
                        aria-label="Close form"
                    >
                        ×
                    </button>
                </div>

                {/* Body */}
                <div className="p-8">
                    {isSubmitted ? (
                        <div className="text-center py-12">
                            <div className="text-5xl mb-6">🚀</div>
                            <h3 className="text-2xl font-bold text-[#0A0A0A] mb-4">
                                You&apos;re In!
                            </h3>
                            <p className="text-[#525252] max-w-sm mx-auto">
                                We&apos;re preparing your business setup. Check your email for next
                                steps to launch <strong className="text-[#0A0A0A]">{businessName}</strong>.
                            </p>
                        </div>
                    ) : (
                        <>
                            {/* Step 1: Business Name */}
                            {step === 1 && (
                                <div>
                                    <div className="mb-2 font-mono text-xs uppercase tracking-[0.05em] text-[#525252]">
                                        STEP 1 OF 3
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#0A0A0A] mb-2">
                                        What&apos;s your business called?
                                    </h3>
                                    <p className="text-[#525252] mb-6">
                                        Don&apos;t worry if you don&apos;t have a name yet, just describe your idea.
                                    </p>
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={businessName}
                                        onChange={(e) => setBusinessName(e.target.value)}
                                        placeholder="e.g., TaskMaster Pro"
                                        className="w-full h-14 px-4 border border-[#E5E5E5] text-lg text-[#0A0A0A] placeholder-[#525252] focus:border-black focus:outline-none transition-colors"
                                        style={{ borderRadius: 0 }}
                                        onKeyDown={(e) => e.key === "Enter" && handleNext()}
                                    />
                                    {error && (
                                        <p className="mt-2 text-sm text-red-600">{error}</p>
                                    )}
                                </div>
                            )}

                            {/* Step 2: Category */}
                            {step === 2 && (
                                <div>
                                    <div className="mb-2 font-mono text-xs uppercase tracking-[0.05em] text-[#525252]">
                                        STEP 2 OF 3
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#0A0A0A] mb-2">
                                        What type of business is {businessName}?
                                    </h3>
                                    <p className="text-[#525252] mb-6">
                                        This helps us configure the right tools and compliance settings.
                                    </p>
                                    <div className="grid grid-cols-2 gap-3">
                                        {businessCategories.map((cat) => (
                                            <button
                                                key={cat}
                                                onClick={() => setCategory(cat)}
                                                className={`p-4 text-left border transition-all ${category === cat
                                                    ? "border-black bg-[#FAFAFA]"
                                                    : "border-[#E5E5E5] hover:border-[#525252]"
                                                    }`}
                                                style={{ borderRadius: 0 }}
                                            >
                                                <span className="text-sm text-[#0A0A0A]">{cat}</span>
                                            </button>
                                        ))}
                                    </div>
                                    {error && (
                                        <p className="mt-4 text-sm text-red-600">{error}</p>
                                    )}
                                </div>
                            )}

                            {/* Step 3: Email */}
                            {step === 3 && (
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-2 font-mono text-xs uppercase tracking-[0.05em] text-[#525252]">
                                        STEP 3 OF 3
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#0A0A0A] mb-2">
                                        Where should we send your access?
                                    </h3>
                                    <p className="text-[#525252] mb-6">
                                        We&apos;ll send setup instructions and your dashboard link.
                                    </p>
                                    <input
                                        ref={inputRef}
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="founder@yourbusiness.com"
                                        className="w-full h-14 px-4 border border-[#E5E5E5] text-lg text-[#0A0A0A] placeholder-[#525252] focus:border-black focus:outline-none transition-colors"
                                        style={{ borderRadius: 0 }}
                                        disabled={isSubmitting}
                                    />
                                    {error && (
                                        <p className="mt-2 text-sm text-red-600">{error}</p>
                                    )}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full h-14 mt-6 bg-black text-white font-mono text-sm uppercase tracking-[0.05em] hover:opacity-90 transition-opacity disabled:opacity-50"
                                        style={{ borderRadius: 0 }}
                                    >
                                        {isSubmitting ? "LAUNCHING..." : "LAUNCH MY BUSINESS"}
                                    </button>
                                </form>
                            )}

                            {/* Next button for steps 1-2 */}
                            {step < 3 && (
                                <button
                                    onClick={handleNext}
                                    className="w-full h-14 mt-6 bg-black text-white font-mono text-sm uppercase tracking-[0.05em] hover:opacity-90 transition-opacity"
                                    style={{ borderRadius: 0 }}
                                >
                                    CONTINUE
                                </button>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
