'use client';

export function isMobileDevice() {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent || navigator.vendor || '';
  return /android|iphone|ipad|ipod|iemobile|wpdesktop/i.test(ua);
}

export function buildWhatsAppUrls(phoneE164NoPlus, text) {
  const encodedText = text ? encodeURIComponent(text) : undefined;
  const baseQuery = encodedText ? `?text=${encodedText}` : '';

  return {
    // Using wa.me universally; mobile will hand off to the app, desktop to WhatsApp Web
    web: `https://wa.me/${phoneE164NoPlus}${baseQuery}`,
  };
}

export function openWhatsApp(phoneE164NoPlus, text) {
  const { web } = buildWhatsAppUrls(phoneE164NoPlus, text);
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const anchor = document.createElement('a');
  anchor.href = web;
  anchor.target = '_blank';
  anchor.rel = 'noopener noreferrer';
  // Append to DOM to ensure some browsers allow programmatic click
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}


