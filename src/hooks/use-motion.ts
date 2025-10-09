import { useState, useEffect } from 'react';

interface MotionData {
  x: number;
  y: number;
  intensity: number;
}

export const useMotion = (sensitivity = 10) => {
  const [motion, setMotion] = useState<MotionData>({ x: 0, y: 0, intensity: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device has motion sensors
    setIsMobile('DeviceOrientationEvent' in window);

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * sensitivity;
      const y = (e.clientY / window.innerHeight - 0.5) * sensitivity;
      const intensity = Math.sqrt(x * x + y * y);
      setMotion({ x, y, intensity });
    };

    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (e.beta && e.gamma) {
        // Normalize the values to a similar range as mouse movement
        const x = (e.gamma / 45) * sensitivity; // gamma is between -90 and 90
        const y = ((e.beta - 45) / 45) * sensitivity; // beta is between 0 and 180
        const intensity = Math.sqrt(x * x + y * y);
        setMotion({ x, y, intensity });
      }
    };

    if (isMobile) {
      window.addEventListener('deviceorientation', handleDeviceOrientation);
    } else {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (isMobile) {
        window.removeEventListener('deviceorientation', handleDeviceOrientation);
      } else {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [sensitivity, isMobile]);

  return motion;
};
