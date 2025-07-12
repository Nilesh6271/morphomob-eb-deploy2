import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'orange' | 'white';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', color = 'blue' }) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  const colorClasses = {
    blue: 'border-blue-500',
    orange: 'border-orange-500',
    white: 'border-white'
  };

  return (
    <div className={`animate-spin rounded-full ${sizeClasses[size]} border-b-2 ${colorClasses[color]}`}></div>
  );
};

export default LoadingSpinner;