
import React, { useState, useCallback } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
  color: string;
}

interface RippleEffectProps {
  children: React.ReactNode;
  rippleColor?: string;
  rippleDuration?: number;
  className?: string;
  disabled?: boolean;
}

const RippleEffect: React.FC<RippleEffectProps> = ({
  children,
  rippleColor = 'rgba(255, 255, 255, 0.6)',
  rippleDuration = 600,
  className = '',
  disabled = false,
}) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const addRipple = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple: Ripple = {
      id: Date.now(),
      x,
      y,
      color: rippleColor,
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, rippleDuration);
  }, [rippleColor, rippleDuration, disabled]);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseDown={addRipple}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full pointer-events-none animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: '100px',
            height: '100px',
            backgroundColor: ripple.color,
            transform: 'scale(0)',
            animation: `ripple ${rippleDuration}ms ease-out`,
          }}
        />
      ))}
    </div>
  );
};

export default RippleEffect;
