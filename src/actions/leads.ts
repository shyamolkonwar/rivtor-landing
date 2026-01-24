"use server";

import { supabaseAdmin } from "@/lib/supabase";

/**
 * Server action result type
 */
interface ActionResult {
    success: boolean;
    error?: string;
}

/**
 * Sanitize input to prevent XSS and SQL injection
 */
function sanitizeInput(input: string, maxLength: number = 100): string {
    return input
        .replace(/[<>"'&;]/g, "")
        .trim()
        .slice(0, maxLength);
}

/**
 * Validate email format
 */
function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Submit a low intent lead (email only)
 * Triggered by "Start Building" button
 */
export async function submitLowIntentLead(email: string): Promise<ActionResult> {
    try {
        const sanitizedEmail = sanitizeInput(email, 254);

        if (!isValidEmail(sanitizedEmail)) {
            return { success: false, error: "Invalid email address" };
        }

        const { error } = await supabaseAdmin.from("leads").insert({
            email: sanitizedEmail,
            intent_type: "low",
            source: "landing_page_cta",
        });

        if (error) {
            console.error("[Lead Capture Error]", error);
            return { success: false, error: "Failed to save. Please try again." };
        }

        return { success: true };
    } catch (err) {
        console.error("[Lead Capture Exception]", err);
        return { success: false, error: "An unexpected error occurred." };
    }
}

/**
 * Submit a high intent lead (business info + email)
 * Triggered by "Start Business" button on Founder plan
 */
export async function submitHighIntentLead(
    email: string,
    businessName: string,
    category: string
): Promise<ActionResult> {
    try {
        const sanitizedEmail = sanitizeInput(email, 254);
        const sanitizedBusinessName = sanitizeInput(businessName, 100);
        const sanitizedCategory = sanitizeInput(category, 50);

        if (!isValidEmail(sanitizedEmail)) {
            return { success: false, error: "Invalid email address" };
        }

        if (sanitizedBusinessName.length < 2) {
            return { success: false, error: "Business name is required" };
        }

        if (!sanitizedCategory) {
            return { success: false, error: "Business category is required" };
        }

        const { error } = await supabaseAdmin.from("leads").insert({
            email: sanitizedEmail,
            intent_type: "high",
            business_name: sanitizedBusinessName,
            category: sanitizedCategory,
            source: "landing_page_founder",
        });

        if (error) {
            console.error("[Lead Capture Error]", error);
            return { success: false, error: "Failed to save. Please try again." };
        }

        return { success: true };
    } catch (err) {
        console.error("[Lead Capture Exception]", err);
        return { success: false, error: "An unexpected error occurred." };
    }
}
