/**
 * Icon Loader Utility
 * Automatically loads and processes all SVG icons from the icons folder
 */

// Lista de todos los archivos SVG disponibles en el folder icons
export const AVAILABLE_ICONS = [
  '5372e21ad0423bd311cc879aaab4d81b2844a4cb',
  'd3c8a10d50893ae60f6c10f500772109d6a7cf22',
  'Add',
  'Clip',
  'icon6',
  'linkExternakl',
  'Loader',
  'Save'
] as const;

export type IconName = typeof AVAILABLE_ICONS[number];

/**
 * Genera un nombre más legible para mostrar en el selector
 */
export const getIconDisplayName = (iconName: string): string => {
  // Maneja casos especiales
  const specialCases: Record<string, string> = {
    '5372e21ad0423bd311cc879aaab4d81b2844a4cb': 'Hash Icon',
    'd3c8a10d50893ae60f6c10f500772109d6a7cf22': 'Hash Icon 2',
    'icon6': 'Icon 6',
    'linkExternakl': 'External Link'
  };

  if (specialCases[iconName]) {
    return specialCases[iconName];
  }

  // Convierte nombres como "Add" a "Add Icon"
  return `${iconName} Icon`;
};

/**
 * Obtiene la lista de opciones para el selector de Storybook
 */
export const getIconSelectOptions = () => {
  const options: Record<string, string> = {
    none: 'None'
  };

  AVAILABLE_ICONS.forEach(iconName => {
    options[iconName] = getIconDisplayName(iconName);
  });

  // Añade opción para custom icon
  options.custom = 'Custom Icon';

  return options;
};

/**
 * Lista de colores disponibles de nuestros design tokens
 */
export const AVAILABLE_COLORS = {
  // Brand Colors
  'azure-500': 'Azure (Primary)',
  'secondary-500': 'Secondary (Teal)',
  
  // Semantic Colors
  'success-500': 'Success Green',
  'warning-500': 'Warning Orange', 
  'error-500': 'Error Red',
  'info-500': 'Info Blue',
  
  // Neutral Colors
  'neutral-900': 'Dark',
  'neutral-700': 'Medium Dark',
  'neutral-500': 'Medium',
  'neutral-300': 'Light',
  'neutral-0': 'White',
  
  // Interactive Colors
  'interactive-primary': 'Interactive Primary',
  'interactive-secondary': 'Interactive Secondary',
  
  // Text Colors
  'text-primary': 'Text Primary',
  'text-secondary': 'Text Secondary',
  'text-tertiary': 'Text Tertiary',
  
  // Special
  'currentColor': 'Current Color (Inherit)',
} as const;

export type ColorToken = keyof typeof AVAILABLE_COLORS;

/**
 * Convierte el token de color a variable CSS
 */
export const getColorVariable = (colorToken: string): string => {
  if (colorToken === 'currentColor') {
    return 'currentColor';
  }
  return `var(--color-${colorToken})`;
};