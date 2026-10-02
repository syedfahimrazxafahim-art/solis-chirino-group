import React, { useState } from 'react';

interface CornerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'champagne' | 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  asAnchor?: boolean;
  href?: string;
  className?: string;
}

export const CornerButton: React.FC<CornerButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  asAnchor = false,
  href,
  className = '',
  onClick,
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Variant color setups
  const variantStyles = {
    primary: 'border border-[#0B1726] bg-[#0B1726] text-[#FFFFFF] hover:bg-[#13263A] hover:text-[#FFFFFF]',
    secondary: 'border border-[#13263A] bg-[#13263A] text-[#F5F2EC] hover:bg-[#0B1726]',
    outline: 'border border-[#DDD8D0] bg-transparent text-[#0B1726] hover:border-[#0B1726] hover:bg-[#FFFFFF]',
    champagne: 'border border-[#D8C7AE] bg-[#D8C7AE] text-[#0B1726] hover:bg-[#B39A78] hover:text-[#FFFFFF]',
    dark: 'border border-[#13263A] bg-[#0B1726] text-[#F5F2EC] hover:border-[#D8C7AE]',
    light: 'border border-[#DDD8D0] bg-[#FFFFFF] text-[#0B1726] hover:border-[#D8C7AE] hover:bg-[#F5F2EC]',
  };

  const cornerColor = {
    primary: 'border-[#D8C7AE]',
    secondary: 'border-[#D8C7AE]',
    outline: 'border-[#0B1726]',
    champagne: 'border-[#0B1726]',
    dark: 'border-[#D8C7AE]',
    light: 'border-[#0B1726]',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs tracking-wider uppercase',
    md: 'px-6 py-3 text-xs tracking-widest uppercase font-semibold',
    lg: 'px-8 py-4 text-sm tracking-widest uppercase font-semibold',
  };

  const cornerSize = size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-2.5 h-2.5' : 'w-3 h-3';

  const baseContent = (
    <div
      className={`relative inline-flex items-center justify-center font-medium transition-all duration-300 select-none cursor-pointer group ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Left Corner */}
      <span
        className={`absolute top-0 left-0 ${cornerSize} border-t-2 border-l-2 ${cornerColor[variant]} transition-all duration-300 ease-out ${
          isHovered ? '-translate-x-1 -translate-y-1 scale-110 opacity-100' : 'translate-x-0.5 translate-y-0.5 opacity-60'
        }`}
      />
      {/* Top Right Corner */}
      <span
        className={`absolute top-0 right-0 ${cornerSize} border-t-2 border-r-2 ${cornerColor[variant]} transition-all duration-300 ease-out ${
          isHovered ? 'translate-x-1 -translate-y-1 scale-110 opacity-100' : '-translate-x-0.5 translate-y-0.5 opacity-60'
        }`}
      />
      {/* Bottom Left Corner */}
      <span
        className={`absolute bottom-0 left-0 ${cornerSize} border-b-2 border-l-2 ${cornerColor[variant]} transition-all duration-300 ease-out ${
          isHovered ? '-translate-x-1 translate-y-1 scale-110 opacity-100' : 'translate-x-0.5 -translate-y-0.5 opacity-60'
        }`}
      />
      {/* Bottom Right Corner */}
      <span
        className={`absolute bottom-0 right-0 ${cornerSize} border-b-2 border-r-2 ${cornerColor[variant]} transition-all duration-300 ease-out ${
          isHovered ? 'translate-x-1 translate-y-1 scale-110 opacity-100' : '-translate-x-0.5 -translate-y-0.5 opacity-60'
        }`}
      />

      {/* Button Body with Text & Icon */}
      <span className="relative z-10 flex items-center gap-2.5 whitespace-nowrap">
        {children}
        {icon && <span className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}>{icon}</span>}
      </span>
    </div>
  );

  if (asAnchor && href) {
    return (
      <a href={href} className="inline-block text-decoration-none" onClick={onClick as any}>
        {baseContent}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-block outline-none" {...rest}>
      {baseContent}
    </button>
  );
};
