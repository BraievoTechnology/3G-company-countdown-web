import React from 'react'
import ButtonV2 from './ButtonV2'
import { useLocation } from 'react-router-dom'
interface ButtonProps {
  children: React.ReactNode
  to?: string
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}
const Button = ({
  children,
  to,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
    if (to && !isHome) {
      window.scrollTo(0, 0)
    }
  }
  return (
    <ButtonV2
      to={to}
      variant={variant}
      className={className}
      onClick={handleClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </ButtonV2>
  )
}
export default Button