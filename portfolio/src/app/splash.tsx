import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Rive from '@rive-app/react-canvas';
import clsx from "clsx";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setTimeout(() => setFade(true), 2000);
    setTimeout(() => setLoading(false), 2200);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={clsx(
        "pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-black transition-all duration-200 ease-out",
        fade ? "-translate-y-4 opacity-0" : "opacity-1 translate-y-0",
      )}>
      <div className="relative w-[12rem] h-[12rem] p-8">
      <Rive
    src="eyerl.riv"
    stateMachines="State Machine 1"
  />
      </div>
    </div>
  );
};

export default SplashScreen;