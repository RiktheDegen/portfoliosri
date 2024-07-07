import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Rive from '@rive-app/react-canvas';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);  // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="relative w-[32rem] h-[32rem] mob-s:p-8">
      <Rive
    src="eyerl.riv"
    stateMachines="State Machine 1"
  />
      </div>
    </div>
  );
};

export default SplashScreen;