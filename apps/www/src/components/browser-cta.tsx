'use client';

import { useEffect, useState } from 'react';
import { SiGooglechrome, SiFirefoxbrowser } from "@icons-pack/react-simple-icons";

type BrowserType = 'chrome' | 'firefox';

interface BrowserInfo {
  type: BrowserType;
  icon: typeof SiGooglechrome;
  text: string;
  url: string;
}

const BROWSER_INFO: Record<BrowserType, BrowserInfo> = {
  chrome: {
    type: 'chrome',
    icon: SiGooglechrome,
    text: 'Add to Chrome',
    url: 'https://chromewebstore.google.com/detail/promptcache-your-personal/noncjdenienejpdlakheodnglfdcifoe'
  },
  firefox: {
    type: 'firefox',
    icon: SiFirefoxbrowser,
    text: 'Add to Firefox',
    url: 'https://addons.mozilla.org/en-US/firefox/addon/promptcache-ai/'
  }
};

function detectBrowser(): BrowserType {
  if (typeof window === 'undefined') return 'chrome'; // SSR fallback

  const userAgent = window.navigator.userAgent.toLowerCase();
  
  if (
    userAgent.includes('firefox') || 
    userAgent.includes('fxios') ||
    userAgent.includes('zen/') || // Zen Browser
    userAgent.includes('waterfox') ||
    userAgent.includes('palemoon') ||
    // Check for Firefox in vendor info
    (window.navigator.vendor && window.navigator.vendor.toLowerCase().includes('mozilla'))
  ) {
    return 'firefox';
  }
  
  // Default to Chrome for everything else
  return 'chrome';
}

export function BrowserCTA() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Always show Chrome during SSR and initial render to avoid hydration mismatch
  const browserType = mounted ? detectBrowser() : 'chrome';
  const { icon: Icon, text, url } = BROWSER_INFO[browserType];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded font-bold bg-radial-[at_50%_110%] from-foreground/80 to-[#000] transition-transform hover:scale-[1.05] text-background px-5 py-3 flex items-center shadow-sm hover:shadow-lg transition-shadow"
    >
      <Icon className="mr-2 size-5" />
      <span>{text}</span>
    </a>
  );
} 