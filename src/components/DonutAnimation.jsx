import React, { useEffect, useRef, useState } from 'react';

const DonutAnimation = () => {
  const preRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    let A = 0, B = 0;
    let animationId;
    
    const render = () => {
      const width = 80;
      const height = 40;
      
      const zbuffer = new Array(width * height).fill(0);
      const output = new Array(width * height).fill(' ');
      
      // Donut rendering algorithm
      for (let theta = 0; theta < 6.28; theta += 0.07) {
        const cosTheta = Math.cos(theta);
        const sinTheta = Math.sin(theta);
        
        for (let phi = 0; phi < 6.28; phi += 0.02) {
          const cosPhi = Math.cos(phi);
          const sinPhi = Math.sin(phi);
          
          const circleX = 2 + cosTheta;
          const circleY = sinTheta;
          
          const x = circleX * (Math.cos(B) * cosPhi + Math.sin(A) * Math.sin(B) * sinPhi)
            - circleY * Math.cos(A) * Math.sin(B);
          const y = circleX * (Math.sin(B) * cosPhi - Math.sin(A) * Math.cos(B) * sinPhi)
            + circleY * Math.cos(A) * Math.cos(B);
          const z = 5 + Math.cos(A) * circleX * sinPhi + circleY * Math.sin(A);
          const ooz = 1 / z;
          
          const xp = Math.floor(width / 2 + 30 * ooz * x);
          const yp = Math.floor(height / 2 - 15 * ooz * y);
          
          const L = cosPhi * cosTheta * Math.sin(B) - Math.cos(A) * cosTheta * sinPhi
            - Math.sin(A) * sinTheta + Math.cos(B) * (Math.cos(A) * sinTheta - cosTheta * Math.sin(A) * sinPhi);
          
          if (L > 0) {
            const idx = xp + yp * width;
            if (xp >= 0 && xp < width && yp >= 0 && yp < height && ooz > zbuffer[idx]) {
              zbuffer[idx] = ooz;
              const luminance = Math.floor(L * 8);
              const chars = '.,-~:;=!*#$@';
              output[idx] = chars[Math.max(0, Math.min(chars.length - 1, luminance))];
            }
          }
        }
      }
      
      // Convert to string
      let result = '';
      for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
          result += output[j + i * width];
        }
        result += '\n';
      }
      
      if (preRef.current) {
        preRef.current.textContent = result;
      }
      
      A += 0.04;
      B += 0.02;
      animationId = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);
  
  const getFontSize = () => {
    if (windowWidth <= 480) return '8px';
    if (windowWidth <= 768) return '10px';
    return '14px';
  };

  const getScale = () => {
    if (windowWidth <= 480) return 'scale(0.7)';
    if (windowWidth <= 768) return 'scale(0.9)';
    return 'scale(1)';
  };

  return (
    <pre 
      ref={preRef}
      style={{
        fontFamily: 'monospace',
        fontSize: getFontSize(),
        lineHeight: '1',
        color: '#ffffff',
        whiteSpace: 'pre',
        margin: 0,
        padding: 0,
        transform: getScale(),
        transformOrigin: 'center'
      }}
    />
  );
};

export default DonutAnimation;