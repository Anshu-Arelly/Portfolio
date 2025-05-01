import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  primary?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const Button = ({ 
  children, 
  type = 'button', 
  primary = false, 
  disabled = false, 
  fullWidth = false, 
  className = '', 
  href, 
  onClick 
}: ButtonProps) => {
  
  const baseClasses = "px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const primaryClasses = "bg-[#ff6100] text-white hover:bg-[#e05600] focus:ring-[#ff6100]";
  const secondaryClasses = "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400";
  const disabledClasses = "opacity-60 cursor-not-allowed";
  const fullWidthClass = "w-full";
  
  const buttonClasses = [
    baseClasses,
    primary ? primaryClasses : secondaryClasses,
    disabled ? disabledClasses : '',
    fullWidth ? fullWidthClass : '',
    className
  ].join(' ');
  
  if (href) {
    return (
      <a 
        href={href}
        className={buttonClasses}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button 
      type={type} 
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;