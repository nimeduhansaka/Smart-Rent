import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/preloader.json';
import './Preloader.css';

type PreloaderProps = { visible: boolean };

export default function Preloader({ visible }: PreloaderProps) {
  if (!visible) return null;
  return (
    <div className="preloader-overlay">
      <Lottie animationData={animationData} loop autoplay className="preloader-player" />
    </div>
  );
}