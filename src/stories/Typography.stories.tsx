import type { Meta } from '@storybook/react';

const meta: Meta = {
  title: '🎨 Design Tokens/Typography',
  tags: ['autodocs'],
};

export default meta;

/**
 * # ✏️ Typography System
 * 
 * Our typography system provides a comprehensive type scale designed for readability and hierarchy.
 * 
 * ## 🎯 Typography Principles
 * 
 * - **Readable**: Optimized for legibility across all devices
 * - **Hierarchical**: Clear content hierarchy through scale and weight
 * - **Accessible**: Meets WCAG AA readability standards
 * - **Consistent**: Unified type system across all components
 * 
 * ## 📚 Font Families
 * 
 * ### Primary Font: Poppins
 * Clean, modern sans-serif for UI and content
 * 
 * ### Monospace Font: JetBrains Mono
 * For code blocks and technical content
 * 
 * ## 📏 Type Scale
 * 
 * Based on a modular scale for consistent proportions
 * 
 * ## 🎨 Typography Styles
 * 
 * Pre-defined combinations of size, weight, and line height
 * 
 * ## 💡 Usage Guidelines
 * 
 * ### Headings
 * - Use semantic heading levels (h1-h6)
 * - Don't skip heading levels for SEO and accessibility
 * - Limit to 1 h1 per page
 * 
 * ### Body Text
 * - Use appropriate line heights for readability
 * - Consider text length for optimal reading experience
 * - Use proper contrast ratios
 * 
 * ### Labels and UI Text
 * - Keep concise and actionable
 * - Use appropriate font weights for emphasis
 * 
 * ## ♿ Accessibility Notes
 * 
 * - All typography meets WCAG AA contrast requirements
 * - Line heights optimized for readability
 * - Font sizes scale appropriately for zoom levels up to 200%
 * - Support for user font preferences
 */

export const TypographyShowcase = () => {
  const fontFamilies = [
    { 
      name: 'Primary (Poppins)', 
      value: 'var(--font-family-primary)', 
      token: '--font-family-primary',
      description: 'Main UI and content font'
    },
    { 
      name: 'Monospace (JetBrains Mono)', 
      value: 'var(--font-family-mono)', 
      token: '--font-family-mono',
      description: 'Code blocks and technical content'
    },
  ];

  const fontSizes = [
    { name: '2XS', token: '--font-size-2xs', rem: '0.625rem', px: '10px', usage: 'Tiny labels, badges' },
    { name: 'XS', token: '--font-size-xs', rem: '0.75rem', px: '12px', usage: 'Captions, small labels' },
    { name: 'SM', token: '--font-size-sm', rem: '0.875rem', px: '14px', usage: 'Secondary text, small buttons' },
    { name: 'Base', token: '--font-size-base', rem: '1rem', px: '16px', usage: 'Body text, default size' },
    { name: 'LG', token: '--font-size-lg', rem: '1.125rem', px: '18px', usage: 'Large body text, subheadings' },
    { name: 'XL', token: '--font-size-xl', rem: '1.25rem', px: '20px', usage: 'Small headings' },
    { name: '2XL', token: '--font-size-2xl', rem: '1.5rem', px: '24px', usage: 'Medium headings' },
    { name: '3XL', token: '--font-size-3xl', rem: '1.875rem', px: '30px', usage: 'Large headings' },
    { name: '4XL', token: '--font-size-4xl', rem: '2.25rem', px: '36px', usage: 'Display text' },
    { name: '5XL', token: '--font-size-5xl', rem: '3rem', px: '48px', usage: 'Hero headings' },
    { name: '6XL', token: '--font-size-6xl', rem: '3.75rem', px: '60px', usage: 'Large hero text' },
  ];

  const fontWeights = [
    { name: 'Light', value: 'var(--font-weight-light)', token: '--font-weight-light' },
    { name: 'Normal', value: 'var(--font-weight-normal)', token: '--font-weight-normal' },
    { name: 'Medium', value: 'var(--font-weight-medium)', token: '--font-weight-medium' },
    { name: 'Semibold', value: 'var(--font-weight-semibold)', token: '--font-weight-semibold' },
    { name: 'Bold', value: 'var(--font-weight-bold)', token: '--font-weight-bold' },
  ];

  const lineHeights = [
    { name: 'Tight', value: 'var(--line-height-tight)', token: '--line-height-tight' },
    { name: 'Snug', value: 'var(--line-height-snug)', token: '--line-height-snug' },
    { name: 'Normal', value: 'var(--line-height-normal)', token: '--line-height-normal' },
    { name: 'Relaxed', value: 'var(--line-height-relaxed)', token: '--line-height-relaxed' },
    { name: 'Loose', value: 'var(--line-height-loose)', token: '--line-height-loose' },
  ];

  const typographyStyles = [
    { 
      name: 'Display Large', 
      style: { font: 'var(--typography-display-large)' },
      token: '--typography-display-large',
      usage: 'Hero headlines, landing pages'
    },
    { 
      name: 'Display Medium', 
      style: { font: 'var(--typography-display-medium)' },
      token: '--typography-display-medium',
      usage: 'Section headlines, feature titles'
    },
    { 
      name: 'Display Small', 
      style: { font: 'var(--typography-display-small)' },
      token: '--typography-display-small',
      usage: 'Card titles, modal headers'
    },
    { 
      name: 'Heading 1', 
      style: { font: 'var(--typography-heading-1)' },
      token: '--typography-heading-1',
      usage: 'Page titles (h1)'
    },
    { 
      name: 'Heading 2', 
      style: { font: 'var(--typography-heading-2)' },
      token: '--typography-heading-2',
      usage: 'Section headings (h2)'
    },
    { 
      name: 'Heading 3', 
      style: { font: 'var(--typography-heading-3)' },
      token: '--typography-heading-3',
      usage: 'Subsection headings (h3)'
    },
    { 
      name: 'Heading 4', 
      style: { font: 'var(--typography-heading-4)' },
      token: '--typography-heading-4',
      usage: 'Content headings (h4)'
    },
    { 
      name: 'Heading 5', 
      style: { font: 'var(--typography-heading-5)' },
      token: '--typography-heading-5',
      usage: 'Minor headings (h5)'
    },
    { 
      name: 'Heading 6', 
      style: { font: 'var(--typography-heading-6)' },
      token: '--typography-heading-6',
      usage: 'Smallest headings (h6)'
    },
    { 
      name: 'Body Large', 
      style: { font: 'var(--typography-body-large)' },
      token: '--typography-body-large',
      usage: 'Lead paragraphs, introductions'
    },
    { 
      name: 'Body Medium', 
      style: { font: 'var(--typography-body-medium)' },
      token: '--typography-body-medium',
      usage: 'Standard body text'
    },
    { 
      name: 'Body Small', 
      style: { font: 'var(--typography-body-small)' },
      token: '--typography-body-small',
      usage: 'Secondary text, captions'
    },
    { 
      name: 'Label Large', 
      style: { font: 'var(--typography-label-large)' },
      token: '--typography-label-large',
      usage: 'Button text, form labels'
    },
    { 
      name: 'Label Medium', 
      style: { font: 'var(--typography-label-medium)' },
      token: '--typography-label-medium',
      usage: 'Small buttons, tabs'
    },
    { 
      name: 'Label Small', 
      style: { font: 'var(--typography-label-small)' },
      token: '--typography-label-small',
      usage: 'Tags, badges, tooltips'
    },
  ];

  return (
    <div style={{ fontFamily: 'var(--font-family-primary)', padding: 'var(--spacing-6)' }}>
      
      {/* Font Families */}
      <div style={{ marginBottom: 'var(--spacing-8)' }}>
        <h3 style={{ 
          fontSize: 'var(--font-size-lg)', 
          fontWeight: 'var(--font-weight-semibold)',
          marginBottom: 'var(--spacing-4)',
          color: 'var(--color-text-primary)'
        }}>
          Font Families
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
          {fontFamilies.map((family) => (
            <div key={family.name} style={{
              padding: 'var(--spacing-4)',
              border: '1px solid var(--color-border-secondary)',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--color-background-secondary)'
            }}>
              <div style={{
                fontFamily: family.value,
                fontSize: 'var(--font-size-xl)',
                marginBottom: 'var(--spacing-2)',
                color: 'var(--color-text-primary)'
              }}>
                The quick brown fox jumps over the lazy dog
              </div>
              <div style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--spacing-1)'
              }}>
                {family.name} • {family.description}
              </div>
              <code style={{
                fontSize: 'var(--font-size-xs)',
                fontFamily: 'var(--font-family-mono)',
                color: 'var(--color-text-tertiary)',
                backgroundColor: 'var(--color-background-tertiary)',
                padding: 'var(--spacing-1)',
                borderRadius: 'var(--radius-sm)'
              }}>
                {family.token}
              </code>
            </div>
          ))}
        </div>
      </div>

      {/* Typography Styles */}
      <div style={{ marginBottom: 'var(--spacing-8)' }}>
        <h3 style={{ 
          fontSize: 'var(--font-size-lg)', 
          fontWeight: 'var(--font-weight-semibold)',
          marginBottom: 'var(--spacing-4)',
          color: 'var(--color-text-primary)'
        }}>
          Typography Styles
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
          {typographyStyles.map((typo) => (
            <div key={typo.name} style={{
              padding: 'var(--spacing-4)',
              border: '1px solid var(--color-border-secondary)',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--color-background-secondary)'
            }}>
              <div style={{
                ...typo.style,
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--spacing-2)'
              }}>
                {typo.name}: The quick brown fox jumps over the lazy dog
              </div>
              <div style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--spacing-1)'
              }}>
                {typo.usage}
              </div>
              <code style={{
                fontSize: 'var(--font-size-xs)',
                fontFamily: 'var(--font-family-mono)',
                color: 'var(--color-text-tertiary)',
                backgroundColor: 'var(--color-background-tertiary)',
                padding: 'var(--spacing-1)',
                borderRadius: 'var(--radius-sm)'
              }}>
                {typo.token}
              </code>
            </div>
          ))}
        </div>
      </div>

      {/* Font Sizes */}
      <div style={{ marginBottom: 'var(--spacing-8)' }}>
        <h3 style={{ 
          fontSize: 'var(--font-size-lg)', 
          fontWeight: 'var(--font-weight-semibold)',
          marginBottom: 'var(--spacing-4)',
          color: 'var(--color-text-primary)'
        }}>
          Font Sizes
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
          {fontSizes.map((size) => (
            <div key={size.name} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-4)',
              padding: 'var(--spacing-3)',
              border: '1px solid var(--color-border-secondary)',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--color-background-secondary)'
            }}>
              <div style={{ width: '80px', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
                {size.name}
              </div>
              <div style={{ fontSize: `var(${size.token})`, color: 'var(--color-text-primary)', flex: 1 }}>
                Sample Text
              </div>
              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', textAlign: 'right' }}>
                <div>{size.rem}</div>
                <div>{size.px}</div>
              </div>
              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
                {size.usage}
              </div>
              <code style={{
                fontSize: 'var(--font-size-xs)',
                fontFamily: 'var(--font-family-mono)',
                color: 'var(--color-text-tertiary)',
                backgroundColor: 'var(--color-background-tertiary)',
                padding: 'var(--spacing-1)',
                borderRadius: 'var(--radius-sm)',
                marginLeft: 'auto'
              }}>
                {size.token}
              </code>
            </div>
          ))}
        </div>
      </div>

      {/* Font Weights */}
      <div style={{ marginBottom: 'var(--spacing-8)' }}>
        <h3 style={{ 
          fontSize: 'var(--font-size-lg)', 
          fontWeight: 'var(--font-weight-semibold)',
          marginBottom: 'var(--spacing-4)',
          color: 'var(--color-text-primary)'
        }}>
          Font Weights
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
          {fontWeights.map((weight) => (
            <div key={weight.name} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-4)',
              padding: 'var(--spacing-2)',
              border: '1px solid var(--color-border-secondary)',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--color-background-secondary)'
            }}>
              <div style={{ width: '80px', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                {weight.name}
              </div>
              <div style={{ 
                fontSize: 'var(--font-size-lg)', 
                fontWeight: weight.value, 
                color: 'var(--color-text-primary)' 
              }}>
                The quick brown fox jumps over the lazy dog
              </div>
              <code style={{
                fontSize: 'var(--font-size-xs)',
                fontFamily: 'var(--font-family-mono)',
                color: 'var(--color-text-tertiary)',
                backgroundColor: 'var(--color-background-tertiary)',
                padding: 'var(--spacing-1)',
                borderRadius: 'var(--radius-sm)',
                marginLeft: 'auto'
              }}>
                {weight.token}
              </code>
            </div>
          ))}
        </div>
      </div>

      {/* Line Heights */}
      <div style={{ marginBottom: 'var(--spacing-8)' }}>
        <h3 style={{ 
          fontSize: 'var(--font-size-lg)', 
          fontWeight: 'var(--font-weight-semibold)',
          marginBottom: 'var(--spacing-4)',
          color: 'var(--color-text-primary)'
        }}>
          Line Heights
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
          {lineHeights.map((lineHeight) => (
            <div key={lineHeight.name} style={{
              padding: 'var(--spacing-4)',
              border: '1px solid var(--color-border-secondary)',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--color-background-secondary)'
            }}>
              <div style={{
                fontSize: 'var(--font-size-base)',
                lineHeight: lineHeight.value,
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--spacing-2)'
              }}>
                {lineHeight.name}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </div>
              <code style={{
                fontSize: 'var(--font-size-xs)',
                fontFamily: 'var(--font-family-mono)',
                color: 'var(--color-text-tertiary)',
                backgroundColor: 'var(--color-background-tertiary)',
                padding: 'var(--spacing-1)',
                borderRadius: 'var(--radius-sm)'
              }}>
                {lineHeight.token}
              </code>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
