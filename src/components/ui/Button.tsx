import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  size?: 'default' | 'lg';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'default',
  className,
  children,
  href,
  onClick,
  ...props
}) => {
  const baseStyles = clsx(
    'inline-flex items-center justify-center rounded-lg font-medium transition-colors',
    {
      'bg-orange-600 text-white hover:bg-orange-700': variant === 'default',
      'border-2 border-orange-600 text-orange-600 hover:bg-orange-50': variant === 'outline',
      'px-4 py-2 text-sm': size === 'default',
      'px-6 py-3 text-base': size === 'lg'
    },
    className
  );

  if (href) {
    return (
      <a href={href} className={baseStyles} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={baseStyles} onClick={onClick} {...props}>
      {children}
    </button>
  );
};