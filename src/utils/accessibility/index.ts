// ================================
// 🎯 ACCESSIBILITY UTILITIES
// ================================

/**
 * Focus management utilities for better accessibility
 */

// Focus trap for modals and dialogs
export class FocusTrap {
  private element: HTMLElement;
  private focusableElements: HTMLElement[];
  private firstFocusable: HTMLElement | null = null;
  private lastFocusable: HTMLElement | null = null;

  constructor(element: HTMLElement) {
    this.element = element;
    this.focusableElements = this.getFocusableElements();
    this.updateFocusableElements();
    this.bindEvents();
  }

  private getFocusableElements(): HTMLElement[] {
    const selectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ].join(', ');

    return Array.from(this.element.querySelectorAll(selectors)) as HTMLElement[];
  }

  private updateFocusableElements(): void {
    this.focusableElements = this.getFocusableElements();
    this.firstFocusable = this.focusableElements[0] || null;
    this.lastFocusable = this.focusableElements[this.focusableElements.length - 1] || null;
  }

  private bindEvents(): void {
    this.element.addEventListener('keydown', this.handleKeydown.bind(this));
  }

  private handleKeydown(event: KeyboardEvent): void {
    if (event.key !== 'Tab') return;

    if (this.focusableElements.length === 0) {
      event.preventDefault();
      return;
    }

    if (event.shiftKey) {
      if (document.activeElement === this.firstFocusable) {
        event.preventDefault();
        this.lastFocusable?.focus();
      }
    } else {
      if (document.activeElement === this.lastFocusable) {
        event.preventDefault();
        this.firstFocusable?.focus();
      }
    }
  }

  public activate(): void {
    this.updateFocusableElements();
    this.firstFocusable?.focus();
  }

  public deactivate(): void {
    this.element.removeEventListener('keydown', this.handleKeydown.bind(this));
  }
}

/**
 * Screen reader announcements
 */
export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite'): void => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.setAttribute('class', 'sr-only');
  announcement.textContent = message;

  document.body.appendChild(announcement);

  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

/**
 * Skip link functionality
 */
export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLAnchorElement => {
  const skipLink = document.createElement('a');
  skipLink.href = `#${targetId}`;
  skipLink.textContent = text;
  skipLink.className = 'skip-link';
  
  // Add styles for skip link
  Object.assign(skipLink.style, {
    position: 'absolute',
    top: '-40px',
    left: '6px',
    background: 'var(--color-primary-500)',
    color: 'var(--color-neutral-white)',
    padding: 'var(--spacing-sm)',
    borderRadius: 'var(--border-radius-sm)',
    textDecoration: 'none',
    fontSize: 'var(--font-size-sm)',
    fontWeight: 'var(--font-weight-medium)',
    zIndex: '9999',
    transition: 'top 0.3s ease'
  });

  skipLink.addEventListener('focus', () => {
    skipLink.style.top = '6px';
  });

  skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
  });

  return skipLink;
};

/**
 * ARIA utilities
 */
export const setAriaExpanded = (element: HTMLElement, expanded: boolean): void => {
  element.setAttribute('aria-expanded', expanded.toString());
};

export const setAriaHidden = (element: HTMLElement, hidden: boolean): void => {
  element.setAttribute('aria-hidden', hidden.toString());
};

export const generateId = (prefix: string = 'diggin'): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Keyboard navigation helpers
 */
export const KEYS = {
  ENTER: 'Enter',
  SPACE: ' ',
  ESCAPE: 'Escape',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  TAB: 'Tab',
  HOME: 'Home',
  END: 'End'
} as const;

export type KeyboardKey = typeof KEYS[keyof typeof KEYS];

export const isKeyPressed = (event: KeyboardEvent, key: KeyboardKey): boolean => {
  return event.key === key;
};

/**
 * Color contrast utilities
 */
export const getContrastRatio = (color1: string, color2: string): number => {
  const getLuminance = (hex: string): number => {
    const rgb = hex.match(/\w\w/g)?.map(x => parseInt(x, 16) / 255) || [0, 0, 0];
    const [r, g, b] = rgb.map(c => c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const l1 = getLuminance(color1);
  const l2 = getLuminance(color2);
  const lightest = Math.max(l1, l2);
  const darkest = Math.min(l1, l2);

  return (lightest + 0.05) / (darkest + 0.05);
};

export const meetsWCAGRequirement = (
  color1: string, 
  color2: string, 
  level: 'AA' | 'AAA' = 'AA',
  size: 'normal' | 'large' = 'normal'
): boolean => {
  const ratio = getContrastRatio(color1, color2);
  
  if (level === 'AAA') {
    return size === 'large' ? ratio >= 4.5 : ratio >= 7;
  }
  
  return size === 'large' ? ratio >= 3 : ratio >= 4.5;
};
