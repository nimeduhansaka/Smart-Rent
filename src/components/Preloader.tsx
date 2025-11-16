import React from 'react';

// Lightweight Lottie player via web component
// We will use the lottie-player web component by @lottiefiles via CDN in index.html.
// This component just wraps it for React usage.

type PreloaderProps = {
  visible: boolean;
};

const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(255,255,255,0.95)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
  transition: 'opacity 200ms ease',
};

export default function Preloader({ visible }: PreloaderProps) {
  if (!visible) return null;
  return (
    <div style={overlayStyle}>
      {/* eslint-disable react/no-unknown-property */}
      <lottie-player
        src="/assets/preloader.json"
        background="transparent"
        speed="1"
        style={{ width: '200px', height: '200px' }}
        loop
        autoplay
        aria-label="Loading"
      />
      {/* eslint-enable react/no-unknown-property */}
    </div>
  );
}