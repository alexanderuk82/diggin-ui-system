import React, { forwardRef } from 'react';
import './Button.css';
import { LoaderIcon, IconProps } from './Icons.js';
import { ColorToken } from '../../../utils/iconLoader';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variants based on visual hierarchy
   */
  variant?: 'primary' | 'secondary' | 'text';
  
  /**
   * Size variants
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Loading state
   */
  loading?: boolean;
  
  /**
   * Icon position
   */
  iconPosition?: 'left' | 'right';
  
  /**
   * Icon to display - can be any React element
   */
  icon?: React.ReactNode;
  
  /**
   * Icon color from design tokens
   */
  iconColor?: ColorToken | string;
  
  /**
   * Icon size in pixels
   */
  iconSize?: number;
  
  /**
   * Full width button
   */
  fullWidth?: boolean;
  
  /**
   * Button content
   */
  children?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 * 
 * Follows WCAG AA accessibility standards with:
 * - Minimum 44px touch target (large size)
 * - High contrast ratios
 * - Keyboard navigation support
 * - Screen reader compatibility
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'medium',
  loading = false,
  iconPosition = 'left',
  icon,
  iconColor,
  iconSize = 18,
  fullWidth = false,
  disabled,
  className = '',
  children,
  ...props
}, ref) => {
  const baseClass = 'btn';
  const variantClass = `btn--${variant}`;
  const sizeClass = `btn--${size}`;
  const loadingClass = loading ? 'btn--loading' : '';
  const fullWidthClass = fullWidth ? 'btn--full-width' : '';
  const disabledClass = disabled ? 'btn--disabled' : '';

  const classNames = [
    baseClass,
    variantClass,
    sizeClass,
    loadingClass,
    fullWidthClass,
    disabledClass,
    className
  ].filter(Boolean).join(' ');

  const hasIcon = icon || loading;
  const showLeftIcon = hasIcon && iconPosition === 'left';
  const showRightIcon = hasIcon && iconPosition === 'right';

  // Render icon with custom props if it supports them
  const renderIcon = (iconElement: React.ReactNode) => {
    if (loading) {
      return <LoaderIcon size={iconSize} color={iconColor} />;
    }
    
    if (!iconElement) return null;
    
    // If icon is a React element that accepts props, clone it with our props
    if (React.isValidElement(iconElement) && typeof iconElement.type !== 'string') {
      const iconProps: Partial<IconProps> = {};
      if (iconSize !== undefined) iconProps.size = iconSize;
      if (iconColor !== undefined) iconProps.color = iconColor;
      
      // Only add props if the element supports them
      try {
        return React.cloneElement(iconElement, iconProps);
      } catch {
        // If cloning fails, return the original element
        return iconElement;
      }
    }
    
    return iconElement;
  };

  return (
    <button
      ref={ref}
      className={classNames}
      disabled={disabled || loading}
      {...(disabled || loading ? { 'aria-disabled': 'true' } : {})}
      {...(loading ? { 'aria-busy': 'true' } : {})}
      {...props}
    >
      {showLeftIcon && (
        <span className="btn-icon-left" aria-hidden="true">
          {renderIcon(icon)}
        </span>
      )}
      
      {children && (
        <span className="btn__content">
          {children}
        </span>
      )}
      
      {showRightIcon && (
        <span className="btn-icon-right" aria-hidden="true">
          {renderIcon(icon)}
        </span>
      )}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;