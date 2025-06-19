
import React from 'react';
import RippleEffect from './RippleEffect';

interface RippleCardProps {
  children: React.ReactNode;
  rippleColor?: string;
  className?: string;
  onClick?: () => void;
}

const RippleCard: React.FC<RippleCardProps> = ({
  children,
  rippleColor = 'rgba(59, 130, 246, 0.3)',
  className = '',
  onClick,
}) => {
  return (
    <RippleEffect
      rippleColor={rippleColor}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${className}`}
    >
      <div onClick={onClick} className="p-6">
        {children}
      </div>
    </RippleEffect>
  );
};

export default RippleCard;
