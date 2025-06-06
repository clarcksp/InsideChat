import React from 'react';
import clsx from 'clsx';

interface BadgeProps {
  text: string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ text, className }) => {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        className
      )}
    >
      {text}
    </span>
  );
};