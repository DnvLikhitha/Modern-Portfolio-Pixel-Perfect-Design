
import React from 'react';
import { Button } from '@/components/ui/button';
import RippleEffect from './RippleEffect';

interface RippleButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const RippleButton: React.FC<RippleButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = '',
}) => {
  const rippleColors = {
    primary: 'rgba(59, 130, 246, 0.6)',
    secondary: 'rgba(107, 114, 128, 0.6)',
    success: 'rgba(34, 197, 94, 0.6)',
    danger: 'rgba(239, 68, 68, 0.6)',
    warning: 'rgba(245, 158, 11, 0.6)',
    info: 'rgba(14, 165, 233, 0.6)',
  };

  const buttonStyles = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    success: 'bg-green-500 hover:bg-green-600 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
    warning: 'bg-yellow-500 hover:bg-yellow-600 text-white',
    info: 'bg-sky-500 hover:bg-sky-600 text-white',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <RippleEffect
      rippleColor={rippleColors[variant]}
      className="inline-block rounded-lg"
      disabled={disabled}
    >
      <Button
        onClick={onClick}
        disabled={disabled}
        className={`${buttonStyles[variant]} ${sizeStyles[size]} ${className} transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-opacity-50`}
      >
        {children}
      </Button>
    </RippleEffect>
  );
};

export default RippleButton;
