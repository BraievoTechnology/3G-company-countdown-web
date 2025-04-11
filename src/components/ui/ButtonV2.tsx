import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}
const ButtonV2 = ({
  children,
  to,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) => {
  // Base styles that apply to all variants
  const baseClasses = 'relative inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden';
  // Variant-specific styles
  const variantClasses = {
    primary: 'bg-gradient-to-r from-yellow-500 to-yellow-400 text-blue-900 shadow-lg hover:shadow-yellow-500/25',
    secondary: 'bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg hover:shadow-blue-900/25',
    outline: 'border-2 border-blue-800 text-blue-800 hover:text-white hover:bg-blue-800 shadow-lg hover:shadow-blue-900/25'
  };
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;
  const buttonContent = <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <motion.div className="absolute inset-0 bg-white" initial={{
      scale: 0,
      opacity: 0
    }} whileHover={{
      scale: 1,
      opacity: 0.15
    }} transition={{
      duration: 0.3
    }} />
      <motion.div className="absolute inset-0 rounded-lg" initial={{
      opacity: 0
    }} whileHover={{
      opacity: 1
    }} transition={{
      duration: 0.3
    }} style={{
      background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${variant === 'primary' ? 'rgba(234, 179, 8, 0.3)' : 'rgba(30, 58, 138, 0.3)'} 0%, transparent 100%)`
    }} />
    </>;
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width * 100;
    const y = (e.clientY - rect.top) / rect.height * 100;
    e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
  };
  if (to) {
    return <Link to={to} className={allClasses} onMouseMove={handleMouseMove} role="button" aria-disabled={disabled}>
        {buttonContent}
      </Link>;
  }
  return <motion.button type={type} onClick={onClick} className={allClasses} onMouseMove={handleMouseMove} disabled={disabled} whileTap={{
    scale: 0.98
  }}>
      {buttonContent}
    </motion.button>;
};
export default ButtonV2;