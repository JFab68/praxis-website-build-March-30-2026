'use client';

import { useEffect, useRef, useState } from 'react';

interface FeathrDonationWidgetProps {
  orgId?: string;
  className?: string;
}

export default function FeathrDonationWidget({
  orgId = process.env.NEXT_PUBLIC_FEATHR_ORG_ID,
  className = '',
}: FeathrDonationWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!orgId) {
      setHasError(true);
      return;
    }

    // Load the Feathr embed script
    const script = document.createElement('script');
    script.src = `https://cdn.feathr.co/js/fundraising-embed.js`;
    script.async = true;
    script.setAttribute('data-feathr-org-id', orgId);

    script.onload = () => {
      setIsLoaded(true);
    };

    script.onerror = () => {
      // If the CDN script doesn't load, fall back to iframe approach
      setHasError(true);
    };

    document.head.appendChild(script);

    return () => {
      // Clean up script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [orgId]);

  if (!orgId) {
    return (
      <div className={`rounded-xl border border-dashed border-electric/30 bg-[rgba(0,0,128,0.1)] p-12 text-center ${className}`}>
        <p className="text-sm text-[#8080A0]" style={{ fontFamily: 'var(--font-body)' }}>
          Feathr donation widget — configure NEXT_PUBLIC_FEATHR_ORG_ID to activate
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      {/* Feathr embed container */}
      <div
        ref={containerRef}
        data-feathr-org-id={orgId}
        data-feathr-type="fundraising"
        className="feathr-fundraising-embed"
      />

      {/* Fallback iframe if script-based embed doesn't load */}
      {hasError && (
        <iframe
          src={`https://fundraising.feathr.co/${orgId}/donate`}
          title="Donate to Praxis Initiative via Feathr"
          className="h-[600px] w-full rounded-xl border-0"
          loading="lazy"
          allow="payment"
        />
      )}

      {/* Loading state */}
      {!isLoaded && !hasError && (
        <div className="flex h-48 items-center justify-center rounded-xl border border-dashed border-electric/30 bg-[rgba(0,0,128,0.1)]">
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-electric border-t-transparent" />
            <p className="text-sm text-[#8080A0]" style={{ fontFamily: 'var(--font-body)' }}>
              Loading donation form...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
