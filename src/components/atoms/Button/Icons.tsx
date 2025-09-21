import React from 'react';
import { IconName, getColorVariable, ColorToken } from '../../../utils/iconLoader';

export interface IconProps {
  className?: string;
  size?: number;
  color?: ColorToken | string;
}

// Base Icon Component con soporte de colores
const BaseIcon: React.FC<IconProps & { children: React.ReactNode }> = ({ 
  className, 
  size = 18, 
  color = 'currentColor',
  children 
}) => {
  // Para currentColor, usamos la clase CSS normal
  if (color === 'currentColor') {
    return (
      <span className={`btn-icon-wrapper ${className || ''}`}>
        {children}
      </span>
    );
  }

  // Para otros colores, creamos una clase CSS dinámica
  const iconColor = color.startsWith('var(') ? color : getColorVariable(color);
  
  // Crear un ID único para la clase CSS
  const colorClass = `icon-color-${Math.random().toString(36).substr(2, 9)}`;
  
  // Inyectar CSS dinámico
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `.${colorClass} { color: ${iconColor} !important; }`;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, [colorClass, iconColor]);

  return (
    <span className={`btn-icon-wrapper ${colorClass} ${className || ''}`}>
      {children}
    </span>
  );
};

// Save Icon
export const SaveIcon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    <svg 
      width={props.size || 18} 
      height={props.size || 18} 
      viewBox="0 0 18 18" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1619_4802)">
        <path d="M12.75 2.25H2.25V15.75H15.75V5.25L12.75 2.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.75 15.75V9.75H5.25V15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.25 2.25V6H10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_1619_4802">
          <rect width="18" height="18" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  </BaseIcon>
);

// Add Icon
export const AddIcon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    <svg 
      width={props.size || 18} 
      height={props.size || 18} 
      viewBox="0 0 18 18" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.75" y="0.75" width="16.5" height="16.5" rx="1.25" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 6V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 9H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </BaseIcon>
);

// Clip Icon
export const ClipIcon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    <svg 
      width={props.size || 18} 
      height={props.size || 18} 
      viewBox="0 0 18 18" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M4.84842 10.0746L11.166 3.60388C11.2337 3.53455 11.7752 2.97991 12.6325 2.67948C13.8284 2.28662 15.0467 2.61015 16.0169 3.60388C17.0097 4.5976 17.303 5.82242 16.9194 7.04724C16.6487 7.92542 16.0846 8.52627 16.0169 8.5956L9.22558 15.5517C8.05232 16.7534 5.11917 18.3017 2.41165 15.5517C-0.273305 12.8016 1.26096 9.7742 2.41165 8.5956L9.6994 1.10801C9.97015 0.830695 10.3988 0.830695 10.6696 1.10801C10.9403 1.38533 10.9403 1.82442 10.6696 2.10174L3.40441 9.58933C3.2916 9.68177 1.01277 12.1083 3.40441 14.5579C5.72836 16.9383 8.00719 14.8122 8.25538 14.5579L15.0467 7.57877C15.0467 7.57877 15.4303 7.1859 15.6108 6.63127C15.8364 5.89175 15.6785 5.24468 15.0467 4.5976C13.693 3.21101 12.3844 4.3665 12.1362 4.5976L5.81862 11.0452C5.59299 11.2763 5.43505 11.6692 5.81862 12.0621C6.20218 12.4549 6.56318 12.2701 6.78881 12.0621L11.166 7.57877C11.4367 7.32456 11.888 7.32456 12.1362 7.57877C12.4069 7.85609 12.4069 8.31828 12.1362 8.5956L7.75901 13.0558C7.14981 13.6567 5.90887 14.142 4.84842 13.0558C3.76541 11.9696 4.23923 10.6755 4.84842 10.0746Z" 
        fill="currentColor"
      />
    </svg>
  </BaseIcon>
);

// External Link Icon
export const LinkExternalIcon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    <svg 
      width={props.size || 18} 
      height={props.size || 18} 
      viewBox="0 0 18 18" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M12 3V4.5H14.25L8.625 10.125L9.75 11.25L15.375 5.625V8.25H16.875V3H12ZM3.375 4.5C2.7586 4.5 2.25 5.0086 2.25 5.625V14.625C2.25 15.2414 2.7586 15.75 3.375 15.75H12.375C12.9914 15.75 13.5 15.2414 13.5 14.625V9.75H12V14.25H3.75V6H8.25V4.5H3.375Z" 
        fill="currentColor"
      />
    </svg>
  </BaseIcon>
);

// Icon 6 - Placeholder icon
export const Icon6: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    <svg 
      width={props.size || 18} 
      height={props.size || 18} 
      viewBox="0 0 18 18" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect 
        x="3" 
        y="3" 
        width="12" 
        height="12" 
        rx="2" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        fill="none"
      />
      <text 
        x="9" 
        y="11" 
        textAnchor="middle" 
        fill="currentColor" 
        fontSize="8" 
        fontFamily="Arial, sans-serif"
      >
        6
      </text>
    </svg>
  </BaseIcon>
);

// Hash Icons - placeholders
export const HashIcon1: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    <svg 
      width={props.size || 18} 
      height={props.size || 18} 
      viewBox="0 0 18 18" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M6.75 3L5.25 15M12.75 3L11.25 15M3.75 6.75H14.25M3 11.25H13.5" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  </BaseIcon>
);

export const HashIcon2: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    <svg 
      width={props.size || 18} 
      height={props.size || 18} 
      viewBox="0 0 18 18" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M7.5 2.25L6 15.75M12 2.25L10.5 15.75M2.25 6H15.75M1.5 12H15" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  </BaseIcon>
);

// Loader Icon con animación
export const LoaderIcon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    <svg 
      className="icon-spinner"
      width={props.size || 18} 
      height={props.size || 18} 
      viewBox="0 0 18 18" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1619_4832)">
        <ellipse cx="8.99999" cy="1.33333" rx="1.33333" ry="1.33333" fill="currentColor"/>
        <ellipse cx="13.3333" cy="2.66665" rx="1.33333" ry="1.33333" fill="currentColor" fillOpacity="0.9"/>
        <ellipse cx="16.3333" cy="6.66665" rx="1.33333" ry="1.33333" fill="currentColor" fillOpacity="0.8"/>
        <ellipse cx="16.3333" cy="11.3333" rx="1.33333" ry="1.33333" fill="currentColor" fillOpacity="0.7"/>
        <circle cx="13.3333" cy="15" r="1.33333" fill="currentColor" fillOpacity="0.6"/>
        <ellipse cx="8.99999" cy="16.6666" rx="1.33333" ry="1.33333" fill="currentColor" fillOpacity="0.5"/>
        <ellipse cx="4.66665" cy="15" rx="1.33333" ry="1.33333" fill="currentColor" fillOpacity="0.4"/>
        <ellipse cx="1.66665" cy="11.3333" rx="1.33333" ry="1.33333" fill="currentColor" fillOpacity="0.3"/>
        <ellipse cx="1.66665" cy="6.66665" rx="1.33333" ry="1.33333" fill="currentColor" fillOpacity="0.2"/>
        <ellipse cx="4.66665" cy="2.66665" rx="1.33333" ry="1.33333" fill="currentColor" fillOpacity="0.1"/>
        <ellipse cx="8.99999" cy="8.99998" rx="1.33333" ry="1.33333" fill="currentColor" fillOpacity="0"/>
      </g>
      <defs>
        <clipPath id="clip0_1619_4832">
          <rect width="18" height="18" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  </BaseIcon>
);

// Mapa de iconos para fácil acceso
export const ICON_COMPONENTS = {
  'Save': SaveIcon,
  'Add': AddIcon,
  'Clip': ClipIcon,
  'linkExternakl': LinkExternalIcon,
  'icon6': Icon6,
  '5372e21ad0423bd311cc879aaab4d81b2844a4cb': HashIcon1,
  'd3c8a10d50893ae60f6c10f500772109d6a7cf22': HashIcon2,
  'Loader': LoaderIcon,
} as const;

export type IconComponentName = keyof typeof ICON_COMPONENTS;

/**
 * Función helper para obtener el componente de icono por nombre
 */
export const getIconComponent = (iconName: IconName): React.ComponentType<IconProps> | null => {
  return ICON_COMPONENTS[iconName as IconComponentName] || null;
};