import React, { useRef } from 'react';
import { useParticles } from '../hooks';

const Particles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useParticles(canvasRef);

  return <canvas id="particles-canvas" ref={canvasRef} />;
};

export default Particles;
