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
      name: 'Corporate Colors',
      colors: [
        { name: 'Azure', value: 'var(--color-azure-500)', token: '--color-azure-500' },
        { name: 'Secondary', value: 'var(--color-secondary-500)', token: '--color-secondary-500' },
      ]
    },
    {
      name: 'Emerald Shades',
      colors: [
        { name: 'Emerald.50', value: 'var(--color-emerald-50)', token: '--color-emerald-50' },
        { name: 'Emerald.100', value: 'var(--color-emerald-100)', token: '--color-emerald-100' },
        { name: 'Emerald.200', value: 'var(--color-emerald-200)', token: '--color-emerald-200' },
        { name: 'Emerald.300', value: 'var(--color-emerald-300)', token: '--color-emerald-300' },
        { name: 'Emerald.400', value: 'var(--color-emerald-400)', token: '--color-emerald-400' },
        { name: 'Emerald.500', value: 'var(--color-emerald-500)', token: '--color-emerald-500' },
        { name: 'Emerald.600', value: 'var(--color-emerald-600)', token: '--color-emerald-600' },
        { name: 'Emerald.700', value: 'var(--color-emerald-700)', token: '--color-emerald-700' },
        { name: 'Emerald.800', value: 'var(--color-emerald-800)', token: '--color-emerald-800' },
        { name: 'Emerald.900', value: 'var(--color-emerald-900)', token: '--color-emerald-900' },
      ]
    },
    {
      name: 'Azure Shades',
      colors: [
        { name: 'Azure.50', value: 'var(--color-azure-50)', token: '--color-azure-50' },
        { name: 'Azure.100', value: 'var(--color-azure-100)', token: '--color-azure-100' },
        { name: 'Azure.200', value: 'var(--color-azure-200)', token: '--color-azure-200' },
        { name: 'Azure.300', value: 'var(--color-azure-300)', token: '--color-azure-300' },
        { name: 'Azure.400', value: 'var(--color-azure-400)', token: '--color-azure-400' },
        { name: 'Azure.500', value: 'var(--color-azure-500)', token: '--color-azure-500' },
        { name: 'Azure.600', value: 'var(--color-azure-600)', token: '--color-azure-600' },
        { name: 'Azure.700', value: 'var(--color-azure-700)', token: '--color-azure-700' },
        { name: 'Azure.800', value: 'var(--color-azure-800)', token: '--color-azure-800' },
        { name: 'Azure.900', value: 'var(--color-azure-900)', token: '--color-azure-900' },
      ]
    },
    {
      name: 'Semantic Colors',
      colors: [
        { name: 'Success', value: 'var(--color-success-500)', token: '--color-success-500' },
        { name: 'Warning', value: 'var(--color-warning-500)', token: '--color-warning-500' },
        { name: 'Error', value: 'var(--color-error-500)', token: '--color-error-500' },
        { name: 'Info', value: 'var(--color-info-500)', token: '--color-info-500' },
      ]
    },
  ];

  const backgroundColors = [
    { name: 'Primary', value: 'var(--color-background-primary)', token: '--color-background-primary' },
    { name: 'Secondary', value: 'var(--color-background-secondary)', token: '--color-background-secondary' },
    { name: 'Tertiary', value: 'var(--color-background-tertiary)', token: '--color-background-tertiary' },
    { name: 'Inverse', value: 'var(--color-background-inverse)', token: '--color-background-inverse' },
  ];

  const textColors = [
    { name: 'Primary', value: 'var(--color-text-primary)', token: '--color-text-primary' },
    { name: 'Secondary', value: 'var(--color-text-secondary)', token: '--color-text-secondary' },
    { name: 'Tertiary', value: 'var(--color-text-tertiary)', token: '--color-text-tertiary' },
    { name: 'Inverse', value: 'var(--color-text-inverse)', token: '--color-text-inverse' },
  ];

  const borderColors = [
    { name: 'Primary', value: 'var(--color-border-primary)', token: '--color-border-primary' },
    { name: 'Secondary', value: 'var(--color-border-secondary)', token: '--color-border-secondary' },
    { name: 'Tertiary', value: 'var(--color-border-tertiary)', token: '--color-border-tertiary' },
    { name: 'Focus', value: 'var(--color-border-focus)', token: '--color-border-focus' },
  ];

  return (
    <div style={{ fontFamily: 'var(--font-family-primary)' }}>
      {/* Color Palettes */}
      {colorPalettes.map((palette) => (
        <div key={palette.name} style={{ marginBottom: 'var(--spacing-8)' }}>
          <h3 style={{ 
            fontSize: 'var(--font-size-lg)', 
            fontWeight: 'var(--font-weight-semibold)',
            marginBottom: 'var(--spacing-4)',
            color: 'var(--color-text-primary)'
          }}>
            {palette.name}
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
            gap: 'var(--spacing-2)' 
          }}>
            {palette.colors.map((color) => (
              <div key={color.name} style={{
                backgroundColor: color.value,
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--spacing-6)',
                textAlign: 'center',
                border: '1px solid var(--color-border-secondary)',
                minHeight: 'var(--spacing-20)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: color.name.includes('50') || color.name.includes('100') || color.name.includes('200') || color.name === 'Success' || color.name === 'Warning' || color.name === 'Info' ? '#000' : '#fff',
                  marginBottom: 'var(--spacing-1)'
                }}>
                  {color.name}
                </div>
                <div style={{
                  fontSize: 'var(--font-size-xs)',
                  color: color.name.includes('50') || color.name.includes('100') || color.name.includes('200') || color.name === 'Success' || color.name === 'Warning' || color.name === 'Info' ? '#666' : '#ccc',
                  fontFamily: 'var(--font-family-mono)'
                }}>
                  {color.token}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Background Colors */}
      <div style={{ marginBottom: 'var(--spacing-8)' }}>
        <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-4)' }}>Background Colors</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-4)' }}>
          {backgroundColors.map((bg) => (
            <div key={bg.name} style={{
              backgroundColor: bg.value,
              border: '2px solid var(--color-border-secondary)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-6)',
              textAlign: 'center',
              minHeight: '100px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-1)' }}>
                {bg.name} Background
              </div>
              <code style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-family-mono)' }}>
                {bg.token}
              </code>
            </div>
          ))}
        </div>
      </div>

      {/* Text Colors */}
      <div style={{ marginBottom: 'var(--spacing-8)' }}>
        <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-4)' }}>Text Colors</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-4)' }}>
          {textColors.map((text) => (
            <div key={text.name} style={{
              backgroundColor: 'var(--color-background-secondary)',
              border: '1px solid var(--color-border-secondary)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-6)',
              textAlign: 'center'
            }}>
              <div style={{ color: text.value, fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-medium)', marginBottom: 'var(--spacing-2)' }}>
                {text.name} Text
              </div>
              <div style={{ fontSize: 'var(--font-size-sm)', color: text.value, marginBottom: 'var(--spacing-2)' }}>
                The quick brown fox jumps over the lazy dog
              </div>
              <code style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-family-mono)' }}>
                {text.token}
              </code>
            </div>
          ))}
        </div>
      </div>

      {/* Border Colors */}
      <div style={{ marginBottom: 'var(--spacing-8)' }}>
        <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-4)' }}>Border Colors</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-4)' }}>
          {borderColors.map((border) => (
            <div key={border.name} style={{
              backgroundColor: 'var(--color-background-secondary)',
              border: `2px solid ${border.value}`,
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-6)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-1)' }}>
                {border.name} Border
              </div>
              <code style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-family-mono)' }}>
                {border.token}
              </code>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
