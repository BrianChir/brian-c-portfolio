type EventName = 'page_view' | 'case_study_expand' | 'cta_click' | 'external_link_click';

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: Record<string, string> }) => void;
  }
}

export function analyticsAttributes(event: EventName, label: string) {
  return {
    'data-analytics-event': event,
    'data-analytics-label': label,
  };
}

export function trackEvent(eventName: EventName, label: string) {
  if (typeof window === 'undefined') {
    return;
  }

  window.plausible?.(eventName, { props: { label } });
  window.dispatchEvent(
    new CustomEvent('portfolio:tracked', {
      detail: { eventName, label },
    })
  );
}
