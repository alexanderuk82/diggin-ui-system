// ================================
// 🎨 DIGGIN UI SYSTEM - MAIN ENTRY
// ================================

// Design Tokens
import './tokens/index.css';

// Utils
export * from './utils/accessibility';
export * from './utils/responsive';

// Components will be exported here as we create them
// export * from './components/atoms';
// export * from './components/molecules';
// export * from './components/organisms';
// export * from './components/templates';
// export * from './components/pages';

// Version
export const version = '1.0.0';

// Theme utilities
export const setTheme = (theme: 'light' | 'dark' | 'high-contrast') => {
  document.documentElement.setAttribute('data-theme', theme);
};

export const getTheme = (): string => {
  return document.documentElement.getAttribute('data-theme') || 'light';
};

export const toggleTheme = () => {
  const currentTheme = getTheme();
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  return newTheme;
};
