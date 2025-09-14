import type { Meta } from '@storybook/react';

const meta: Meta = {
  title: '🎨 Design Tokens/Colors',
  tags: ['autodocs'],
};

export default meta;

/**
 * # 🎨 Color System
 * 
 * Our color system provides a comprehensive palette designed for accessibility and consistency.
 * 
 * ## 🎯 Color Principles
 * 
 * - **Accessibility First**: All colors meet WCAG AA contrast requirements
 * - **Semantic Meaning**: Colors convey meaning and state
 * - **Theme Support**: Light, dark, and high contrast themes
 * - **Scalable**: Consistent naming and usage patterns
 * 
 * ## 🎨 Color Palettes
 * 
 * ### Primary Colors (Blue Scale)
 * Our brand colors for primary actions and branding.
 * 
 * ### Secondary Colors (Slate Scale)  
 * Supporting colors for secondary actions and backgrounds.
 * 
 * ### Neutral Colors (Gray Scale)
 * Text, borders, and background variations.
 * 
 * ### Semantic Colors
 * Status and feedback colors with clear meaning.
 * 
 * ## 💡 Usage Guidelines
 * 
 * ### Primary Colors
 * Use for main CTAs, links, and brand elements:
 * - `--color-primary-500` - Default primary color
 * - `--color-primary-600` - Hover states
 * - `--color-primary-700` - Active states
 * 
 * ### Semantic Colors
 * Communicate status and feedback:
 * - `--color-success-500` - Success states
 * - `--color-warning-500` - Warning states  
 * - `--color-error-500` - Error states
 * - `--color-info-500` - Information states
 * 
 * ### Background Colors
 * Layer your interface:
 * - `--color-background-primary` - Main background
 * - `--color-background-secondary` - Card backgrounds
 * - `--color-background-tertiary` - Input backgrounds
 * 
 * ### Text Colors
 * Hierarchy and readability:
 * - `--color-text-primary` - Main text content
 * - `--color-text-secondary` - Supporting text
 * - `--color-text-tertiary` - Placeholder text
 * 
 * ## 🌙 Theme Support
 * 
 * Colors automatically adapt to user preferences:
 * 
 * ```css
 * [data-theme="dark"] {
 *   --color-background-primary: var(--color-background-primary-dark);
 * }
 * 
 * [data-theme="high-contrast"] {
 *   --color-text-primary: var(--color-text-primary-high-contrast);
 * }
 * ```
 * 
 * ## 🔧 Implementation
 * 
 * Use CSS custom properties in your components:
 * 
 * ```css
 * .button-primary {
 *   background-color: var(--color-primary-500);
 *   color: var(--color-primary-contrast);
 * }
 * 
 * .button-primary:hover {
 *   background-color: var(--color-primary-600);
 * }
 * ```
 * 
 * ## ♿ Accessibility Notes
 * 
 * - All color combinations meet **WCAG AA** contrast requirements (4.5:1)
 * - High contrast theme provides enhanced contrast ratios
 * - Never rely on color alone to convey information
 * - Always provide alternative indicators (icons, text, patterns)
 */

// Color Showcase Component
export const ColorShowcase = () => {
  const colorPalettes = [
    {
      name: 'Primary (Blue)',
      colors: [
        { name: '50', value: 'var(--color-primary-50)', hex: '#eff6ff' },
        { name: '100', value: 'var(--color-primary-100)', hex: '#dbeafe' },
        { name: '200', value: 'var(--color-primary-200)', hex: '#bfdbfe' },
        { name: '300', value: 'var(--color-primary-300)', hex: '#93c5fd' },
        { name: '400', value: 'var(--color-primary-400)', hex: '#60a5fa' },
        { name: '500', value: 'var(--color-primary-500)', hex: '#3b82f6' },
        { name: '600', value: 'var(--color-primary-600)', hex: '#2563eb' },
        { name: '700', value: 'var(--color-primary-700)', hex: '#1d4ed8' },
        { name: '800', value: 'var(--color-primary-800)', hex: '#1e40af' },
        { name: '900', value: 'var(--color-primary-900)', hex: '#1e3a8a' },
        { name: '950', value: 'var(--color-primary-950)', hex: '#172554' },
      ]
    },
    {
      name: 'Secondary (Slate)',
      colors: [
        { name: '50', value: 'var(--color-secondary-50)', hex: '#f8fafc' },
        { name: '100', value: 'var(--color-secondary-100)', hex: '#f1f5f9' },
        { name: '200', value: 'var(--color-secondary-200)', hex: '#e2e8f0' },
        { name: '300', value: 'var(--color-secondary-300)', hex: '#cbd5e1' },
        { name: '400', value: 'var(--color-secondary-400)', hex: '#94a3b8' },
        { name: '500', value: 'var(--color-secondary-500)', hex: '#64748b' },
        { name: '600', value: 'var(--color-secondary-600)', hex: '#475569' },
        { name: '700', value: 'var(--color-secondary-700)', hex: '#334155' },
        { name: '800', value: 'var(--color-secondary-800)', hex: '#1e293b' },
        { name: '900', value: 'var(--color-secondary-900)', hex: '#0f172a' },
        { name: '950', value: 'var(--color-secondary-950)', hex: '#020617' },
      ]
    },
    {
      name: 'Semantic Colors',
      colors: [
        { name: 'Success', value: 'var(--color-success-500)', hex: '#22c55e' },
        { name: 'Warning', value: 'var(--color-warning-500)', hex: '#f59e0b' },
        { name: 'Error', value: 'var(--color-error-500)', hex: '#ef4444' },
        { name: 'Info', value: 'var(--color-info-500)', hex: '#06b6d4' },
      ]
    },
  ];

  return (
    <div style={{ fontFamily: 'var(--font-family-primary)' }}>
      {colorPalettes.map((palette) => (
        <div key={palette.name} style={{ marginBottom: '2rem' }}>
          <h3 style={{ 
            fontSize: 'var(--font-size-lg)', 
            fontWeight: 'var(--font-weight-semibold)',
            marginBottom: '1rem',
            color: 'var(--color-text-primary)'
          }}>
            {palette.name}
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
            gap: '0.5rem' 
          }}>
            {palette.colors.map((color) => (
              <div key={color.name} style={{
                backgroundColor: color.value,
                borderRadius: 'var(--radius-lg)',
                padding: '1rem',
                textAlign: 'center',
                border: '1px solid var(--color-border-secondary)',
                minHeight: '80px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end'
              }}>
                <div style={{
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: color.name.includes('50') || color.name.includes('100') || color.name.includes('200') || color.name === 'Success' || color.name === 'Warning' || color.name === 'Info' ? '#000' : '#fff',
                  marginBottom: '0.25rem'
                }}>
                  {color.name}
                </div>
                <div style={{
                  fontSize: 'var(--font-size-xs)',
                  color: color.name.includes('50') || color.name.includes('100') || color.name.includes('200') || color.name === 'Success' || color.name === 'Warning' || color.name === 'Info' ? '#666' : '#ccc',
                  fontFamily: 'var(--font-family-mono)'
                }}>
                  {color.hex}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
