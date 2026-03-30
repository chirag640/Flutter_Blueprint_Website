"use client";

export function trackFunnelEvent(
  event: string,
  payload: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") return;

  const body = JSON.stringify({
    event,
    payload,
    path: window.location.pathname,
    ts: new Date().toISOString(),
  });

  try {
    if (navigator.sendBeacon) {
      const blob = new Blob([body], { type: "application/json" });
      navigator.sendBeacon("/api/funnel", blob);
      return;
    }

    fetch("/api/funnel", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => {
      // Intentionally ignore telemetry errors.
    });
  } catch {
    // Intentionally ignore telemetry errors.
  }
}
