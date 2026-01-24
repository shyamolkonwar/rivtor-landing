// Analytics utility for VocoWeb
// Tracks user intent signals for fake door validation

export type AnalyticsEvent =
    | 'LEAD_CAPTURE_LOW_INTENT'
    | 'PURCHASE_INTENT_HIGH'
    | 'PAGE_VIEW'
    | 'CTA_CLICK'
    | 'PRICING_TOGGLE'
    | 'FAQ_EXPAND';

interface EventData {
    event: AnalyticsEvent;
    timestamp: string;
    data?: Record<string, unknown>;
}

import { sendGAEvent } from "@next/third-parties/google";

/**
 * Track analytics events
 * Signal to Google Analytics using sendGAEvent
 */
export function trackEvent(event: AnalyticsEvent, data?: Record<string, unknown>): void {
    const eventData: EventData = {
        event,
        timestamp: new Date().toISOString(),
        data,
    };

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
        console.log('[Analytics]', eventData);
    }

    // Send to Google Analytics
    sendGAEvent('event', event, data || {});
}

/**
 * Track lead capture with email
 */
export function trackLeadCapture(email: string, intent: 'low' | 'high'): void {
    const event: AnalyticsEvent = intent === 'low'
        ? 'LEAD_CAPTURE_LOW_INTENT'
        : 'PURCHASE_INTENT_HIGH';

    trackEvent(event, {
        email: email.substring(0, 3) + '***', // Partial email for privacy
        intent
    });
}

/**
 * Track business info submission (high intent)
 */
export function trackBusinessInfo(businessName: string, category: string): void {
    trackEvent('PURCHASE_INTENT_HIGH', {
        businessName: businessName.substring(0, 3) + '***', // Partial for privacy
        category,
    });
}
