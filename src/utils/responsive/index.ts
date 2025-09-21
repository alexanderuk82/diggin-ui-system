// ================================
// 📱 RESPONSIVE UTILITIES
// ================================

/**
 * Breakpoint system based on design tokens
 */
export const BREAKPOINTS = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  wide: 1440
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

/**
 * Media query utilities
 */
export const mediaQuery = {
  mobile: `(min-width: ${BREAKPOINTS.mobile}px)`,
  tablet: `(min-width: ${BREAKPOINTS.tablet}px)`,
  desktop: `(min-width: ${BREAKPOINTS.desktop}px)`,
  wide: `(min-width: ${BREAKPOINTS.wide}px)`,
  mobileOnly: `(max-width: ${BREAKPOINTS.tablet - 1}px)`,
  tabletOnly: `(min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.desktop - 1}px)`,
  desktopOnly: `(min-width: ${BREAKPOINTS.desktop}px) and (max-width: ${BREAKPOINTS.wide - 1}px)`,
  wideOnly: `(min-width: ${BREAKPOINTS.wide}px)`
} as const;

/**
 * Hook for detecting current breakpoint
 */
export const useBreakpoint = (): Breakpoint => {
  if (typeof window === 'undefined') {
    return 'mobile'; // Default for SSR
  }

  const width = window.innerWidth;

  if (width >= BREAKPOINTS.wide) return 'wide';
  if (width >= BREAKPOINTS.desktop) return 'desktop';
  if (width >= BREAKPOINTS.tablet) return 'tablet';
  return 'mobile';
};

/**
 * Responsive value utilities
 */
export type ResponsiveValue<T> = {
  mobile?: T;
  tablet?: T;
  desktop?: T;
  wide?: T;
};

export const getResponsiveValue = <T>(
  responsiveValue: ResponsiveValue<T> | T,
  currentBreakpoint: Breakpoint
): T | undefined => {
  if (typeof responsiveValue !== 'object' || responsiveValue === null) {
    return responsiveValue as T;
  }

  const responsive = responsiveValue as ResponsiveValue<T>;
  
  // Priority order: current breakpoint -> fallback to smaller breakpoints
  switch (currentBreakpoint) {
    case 'wide':
      return responsive.wide ?? responsive.desktop ?? responsive.tablet ?? responsive.mobile;
    case 'desktop':
      return responsive.desktop ?? responsive.tablet ?? responsive.mobile;
    case 'tablet':
      return responsive.tablet ?? responsive.mobile;
    case 'mobile':
    default:
      return responsive.mobile;
  }
};

/**
 * CSS Grid utilities
 */
export const gridColumns = (columns: ResponsiveValue<number> | number): string => {
  if (typeof columns === 'number') {
    return `repeat(${columns}, 1fr)`;
  }

  const { mobile = 1, tablet = 2, desktop = 3, wide = 4 } = columns;
  
  return `
    grid-template-columns: repeat(${mobile}, 1fr);
    
    @media ${mediaQuery.tablet} {
      grid-template-columns: repeat(${tablet}, 1fr);
    }
    
    @media ${mediaQuery.desktop} {
      grid-template-columns: repeat(${desktop}, 1fr);
    }
    
    @media ${mediaQuery.wide} {
      grid-template-columns: repeat(${wide}, 1fr);
    }
  `;
};

/**
 * Spacing utilities
 */
export const responsiveSpacing = (spacing: ResponsiveValue<string> | string): string => {
  if (typeof spacing === 'string') {
    return spacing;
  }

  const { mobile, tablet, desktop, wide } = spacing;
  
  return `
    ${mobile ? `margin: ${mobile};` : ''}
    
    @media ${mediaQuery.tablet} {
      ${tablet ? `margin: ${tablet};` : ''}
    }
    
    @media ${mediaQuery.desktop} {
      ${desktop ? `margin: ${desktop};` : ''}
    }
    
    @media ${mediaQuery.wide} {
      ${wide ? `margin: ${wide};` : ''}
    }
  `;
};

/**
 * Font size utilities
 */
export const responsiveFontSize = (fontSize: ResponsiveValue<string> | string): string => {
  if (typeof fontSize === 'string') {
    return `font-size: ${fontSize};`;
  }

  const { mobile, tablet, desktop, wide } = fontSize;
  
  return `
    ${mobile ? `font-size: ${mobile};` : ''}
    
    @media ${mediaQuery.tablet} {
      ${tablet ? `font-size: ${tablet};` : ''}
    }
    
    @media ${mediaQuery.desktop} {
      ${desktop ? `font-size: ${desktop};` : ''}
    }
    
    @media ${mediaQuery.wide} {
      ${wide ? `font-size: ${wide};` : ''}
    }
  `;
};

/**
 * Container utilities
 */
export const containerStyles = `
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  
  @media ${mediaQuery.tablet} {
    padding: 0 var(--spacing-lg);
  }
  
  @media ${mediaQuery.desktop} {
    max-width: ${BREAKPOINTS.desktop}px;
    padding: 0 var(--spacing-xl);
  }
  
  @media ${mediaQuery.wide} {
    max-width: ${BREAKPOINTS.wide}px;
    padding: 0 var(--spacing-2xl);
  }
`;

/**
 * Viewport utilities
 */
export const getViewportSize = (): { width: number; height: number } => {
  if (typeof window === 'undefined') {
    return { width: 0, height: 0 };
  }

  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
};

/**
 * Orientation detection
 */
export const getOrientation = (): 'portrait' | 'landscape' => {
  if (typeof window === 'undefined') {
    return 'portrait';
  }

  return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
};

/**
 * Touch device detection
 */
export const isTouchDevice = (): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }

  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

/**
 * Responsive utilities for CSS-in-JS
 */
export const responsive = {
  mobile: (styles: string) => `@media ${mediaQuery.mobile} { ${styles} }`,
  tablet: (styles: string) => `@media ${mediaQuery.tablet} { ${styles} }`,
  desktop: (styles: string) => `@media ${mediaQuery.desktop} { ${styles} }`,
  wide: (styles: string) => `@media ${mediaQuery.wide} { ${styles} }`,
  mobileOnly: (styles: string) => `@media ${mediaQuery.mobileOnly} { ${styles} }`,
  tabletOnly: (styles: string) => `@media ${mediaQuery.tabletOnly} { ${styles} }`,
  desktopOnly: (styles: string) => `@media ${mediaQuery.desktopOnly} { ${styles} }`,
  wideOnly: (styles: string) => `@media ${mediaQuery.wideOnly} { ${styles} }`
};
