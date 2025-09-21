import type { Meta } from '@storybook/react';

const meta: Meta = {
  title: '🎨 Design Tokens/Spacing',
  tags: ['autodocs'],
};

export default meta;

/**
 * # 📏 Spacing System
 * 
 * Our spacing system provides consistent spatial relationships throughout the interface.
 * 
 * ## 🎯 Spacing Principles
 * 
 * - **Consistent**: Predictable spacing relationships
 * - **Scalable**: Modular scale that works at any size
 * - **Semantic**: Clear meaning for different spacing needs
 * - **Responsive**: Adapts gracefully across breakpoints
 * 
 * ## 📐 Spacing Scale
 * 
 * Based on a 4px base unit with exponential scaling
 * 
 * ## 🎨 Spacing Categories
 * 
 * ### Micro Spacing (0-8px)
 * For tight relationships and internal component spacing
 * 
 * ### Standard Spacing (12-32px)
 * For general layout and component separation
 * 
 * ### Macro Spacing (40px+)
 * For major layout sections and page structure
 * 
 * ## 💡 Usage Guidelines
 * 
 * ### Internal Component Spacing
 * Use smaller values for tight relationships:
 * - `--spacing-1` (4px) - Icon to text spacing
 * - `--spacing-2` (8px) - Button padding
 * - `--spacing-3` (12px) - Form field padding
 * 
 * ### Component Separation
 * Use medium values for related elements:
 * - `--spacing-4` (16px) - Related components
 * - `--spacing-6` (24px) - Section spacing
 * - `--spacing-8` (32px) - Card spacing
 * 
 * ### Layout Spacing
 * Use larger values for major sections:
 * - `--spacing-12` (48px) - Page sections
 * - `--spacing-16` (64px) - Major content areas
 * - `--spacing-20` (80px) - Hero sections
 * 
 * ## 🔧 Implementation
 * 
 * Use spacing tokens in your CSS:
 * 
 * ```css
 * .card {
 *   padding: var(--spacing-6);
 *   margin-bottom: var(--spacing-4);
 * }
 * 
 * .button {
 *   padding: var(--spacing-2) var(--spacing-4);
 *   gap: var(--spacing-1);
 * }
 * ```
 * 
 * ## 📱 Responsive Spacing
 * 
 * Spacing scales appropriately across breakpoints using relative units
 */

export const SpacingShowcase = () => {
  const spacingTokens = [
    { name: 'spacing-0', token: '--spacing-0', rem: '0', px: '0px', usage: 'No spacing' },
    { name: 'spacing-1', token: '--spacing-1', rem: '0.25rem', px: '4px', usage: 'Icon to text spacing' },
    { name: 'spacing-2', token: '--spacing-2', rem: '0.5rem', px: '8px', usage: 'Button padding, tight spacing' },
    { name: 'spacing-3', token: '--spacing-3', rem: '0.75rem', px: '12px', usage: 'Form field padding' },
    { name: 'spacing-4', token: '--spacing-4', rem: '1rem', px: '16px', usage: 'Related components' },
    { name: 'spacing-5', token: '--spacing-5', rem: '1.25rem', px: '20px', usage: 'Medium component spacing' },
    { name: 'spacing-6', token: '--spacing-6', rem: '1.5rem', px: '24px', usage: 'Section spacing' },
    { name: 'spacing-7', token: '--spacing-7', rem: '1.75rem', px: '28px', usage: 'Large component spacing' },
    { name: 'spacing-8', token: '--spacing-8', rem: '2rem', px: '32px', usage: 'Card spacing' },
    { name: 'spacing-10', token: '--spacing-10', rem: '2.5rem', px: '40px', usage: 'Component separation' },
    { name: 'spacing-12', token: '--spacing-12', rem: '3rem', px: '48px', usage: 'Page sections' },
    { name: 'spacing-16', token: '--spacing-16', rem: '4rem', px: '64px', usage: 'Major content areas' },
    { name: 'spacing-20', token: '--spacing-20', rem: '5rem', px: '80px', usage: 'Hero sections' },
  ];

  const semanticSpacing = [
    { 
      name: 'Component Internal', 
      description: 'Tight spacing within components',
      tokens: ['spacing-1', 'spacing-2', 'spacing-3'],
      color: '#E3F2FD'
    },
    { 
      name: 'Component Separation', 
      description: 'Spacing between related components',
      tokens: ['spacing-4', 'spacing-6', 'spacing-8'],
      color: '#F3E5F5'
    },
    { 
      name: 'Layout Sections', 
      description: 'Major layout and page structure',
      tokens: ['spacing-12', 'spacing-16', 'spacing-20'],
      color: '#E8F5E8'
    },
    { 
      name: 'Large Spacing', 
      description: 'Hero sections and major breaks',
      tokens: ['spacing-24', 'spacing-32', 'spacing-48'],
      color: '#FFF3E0'
    },
  ];

  return (
    <div className="spacing-showcase">
      {/* Spacing Scale */}
      <div className="section">
        <h3 className="section-title">Spacing Scale</h3>
        <div className="spacing-grid">
          {spacingTokens.map((token) => (
            <div key={token.name} className="spacing-item">
              <div className="spacing-label">
                <span className="token-name">--{token.name}</span>
                <div className="value-display">
                  <span className="rem-value">{token.rem}</span>
                  <span className="px-value">{token.px}</span>
                </div>
                <span className="usage-text">{token.usage}</span>
              </div>
              <div className="spacing-visual">
                <div 
                  className="spacing-bar"
                  style={{ 
                    width: `var(${token.token})`,
                    backgroundColor: 'var(--color-azure-500)',
                    height: '8px',
                    borderRadius: 'var(--radius-sm)'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Semantic Spacing Groups */}
      <div className="section">
        <h3 className="section-title">Semantic Spacing Groups</h3>
        <div className="semantic-grid">
          {semanticSpacing.map((group) => (
            <div key={group.name} className="semantic-group">
              <div className="group-header">
                <h4 className="group-name">{group.name}</h4>
                <p className="group-description">{group.description}</p>
              </div>
              <div className="token-examples">
                {group.tokens.map((tokenName) => {
                  const token = spacingTokens.find(t => t.name === tokenName);
                  return token ? (
                    <div key={tokenName} className="token-example">
                      <div 
                        className="example-box"
                        style={{ 
                          padding: `var(${token.token})`,
                          backgroundColor: group.color,
                          border: '1px solid var(--color-border-secondary)',
                          borderRadius: 'var(--radius-md)'
                        }}
                      >
                        <div 
                          className="inner-box"
                          style={{
                            backgroundColor: 'white',
                            borderRadius: 'var(--radius-sm)',
                            minHeight: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 'var(--font-size-xs)',
                            color: 'var(--color-text-secondary)',
                            flexDirection: 'column',
                            gap: 'var(--spacing-1)'
                          }}
                        >
                          <div>{token.rem}</div>
                          <div>{token.px}</div>
                        </div>
                      </div>
                      <code className="token-code">--{tokenName}</code>
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Practical Examples */}
      <div className="section">
        <h3 className="section-title">Practical Examples</h3>
        <div className="examples-grid">
          
          {/* Button Example */}
          <div className="example-card">
            <h4 className="example-title">Button Spacing</h4>
            <div className="example-demo">
              <button 
                className="demo-button"
                style={{
                  padding: 'var(--spacing-2) var(--spacing-4)',
                  gap: 'var(--spacing-1)',
                  backgroundColor: 'var(--color-azure-500)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <span>🚀</span>
                <span>Action Button</span>
              </button>
            </div>
            <code className="example-code">
              padding: var(--spacing-2) var(--spacing-4);<br/>
              gap: var(--spacing-1);
            </code>
          </div>

          {/* Card Example */}
          <div className="example-card">
            <h4 className="example-title">Card Spacing</h4>
            <div className="example-demo">
              <div 
                className="demo-card"
                style={{
                  padding: 'var(--spacing-6)',
                  backgroundColor: 'var(--color-background-secondary)',
                  border: '1px solid var(--color-border-secondary)',
                  borderRadius: 'var(--radius-lg)',
                  maxWidth: '300px'
                }}
              >
                <h5 style={{ 
                  fontSize: 'var(--font-size-lg)', 
                  fontWeight: 'var(--font-weight-semibold)',
                  marginBottom: 'var(--spacing-2)',
                  color: 'var(--color-text-primary)'
                }}>
                  Card Title
                </h5>
                <p style={{ 
                  fontSize: 'var(--font-size-sm)', 
                  color: 'var(--color-text-secondary)',
                  marginBottom: 'var(--spacing-4)',
                  lineHeight: 'var(--line-height-relaxed)'
                }}>
                  Card content with proper spacing between elements.
                </p>
                <button style={{
                  padding: 'var(--spacing-1.5) var(--spacing-3)',
                  backgroundColor: 'var(--color-azure-500)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: 'var(--font-size-xs)',
                  cursor: 'pointer'
                }}>
                  Learn More
                </button>
              </div>
            </div>
            <code className="example-code">
              padding: var(--spacing-6);<br/>
              margin-bottom: var(--spacing-4);
            </code>
          </div>

          {/* Form Example */}
          <div className="example-card">
            <h4 className="example-title">Form Spacing</h4>
            <div className="example-demo">
              <form 
                className="demo-form"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--spacing-4)',
                  maxWidth: '300px'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
                  <label style={{ 
                    fontSize: 'var(--font-size-sm)', 
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--color-text-primary)'
                  }}>
                    Email
                  </label>
                  <input 
                    type="email" 
                    placeholder="your@email.com"
                    style={{
                      padding: 'var(--spacing-3)',
                      border: '1px solid var(--color-border-secondary)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--font-size-sm)',
                      backgroundColor: 'var(--color-background-tertiary)'
                    }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
                  <label style={{ 
                    fontSize: 'var(--font-size-sm)', 
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--color-text-primary)'
                  }}>
                    Message
                  </label>
                  <textarea 
                    placeholder="Your message..."
                    rows={3}
                    style={{
                      padding: 'var(--spacing-3)',
                      border: '1px solid var(--color-border-secondary)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--font-size-sm)',
                      backgroundColor: 'var(--color-background-tertiary)',
                      resize: 'vertical'
                    }}
                  />
                </div>
              </form>
            </div>
            <code className="example-code">
              gap: var(--spacing-4);<br/>
              padding: var(--spacing-3);
            </code>
          </div>
        </div>
      </div>

      <style>{`
        .spacing-showcase {
          font-family: var(--font-family-primary);
          padding: var(--spacing-6);
        }

        .section {
          margin-bottom: var(--spacing-8);
        }

        .section-title {
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-semibold);
          margin-bottom: var(--spacing-4);
          color: var(--color-text-primary);
        }

        .spacing-grid {
          display: grid;
          gap: var(--spacing-2);
        }

        .spacing-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-4);
          padding: var(--spacing-2);
          border: 1px solid var(--color-border-secondary);
          border-radius: var(--radius-sm);
          background-color: var(--color-background-secondary);
        }

        .spacing-label {
          min-width: 160px;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-1);
        }

        .token-name {
          font-family: var(--font-family-mono);
          font-size: var(--font-size-xs);
          color: var(--color-text-secondary);
          font-weight: 600;
        }

        .value-display {
          display: flex;
          gap: var(--spacing-2);
          align-items: center;
        }

        .rem-value {
          font-size: var(--font-size-xs);
          color: var(--color-text-primary);
          font-weight: 500;
        }

        .px-value {
          font-size: var(--font-size-2xs);
          color: var(--color-text-tertiary);
        }

        .usage-text {
          font-size: var(--font-size-2xs);
          color: var(--color-text-secondary);
          font-style: italic;
        }

        .spacing-visual {
          flex: 1;
          max-width: 200px;
        }

        .semantic-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-6);
        }

        .semantic-group {
          padding: var(--spacing-4);
          border: 1px solid var(--color-border-secondary);
          border-radius: var(--radius-md);
          background-color: var(--color-background-secondary);
        }

        .group-header {
          margin-bottom: var(--spacing-4);
        }

        .group-name {
          font-size: var(--font-size-base);
          font-weight: var(--font-weight-semibold);
          margin-bottom: var(--spacing-1);
          color: var(--color-text-primary);
        }

        .group-description {
          font-size: var(--font-size-sm);
          color: var(--color-text-secondary);
          margin: 0;
        }

        .token-examples {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-2);
        }

        .token-example {
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
        }

        .token-code {
          font-family: var(--font-family-mono);
          font-size: var(--font-size-xs);
          color: var(--color-text-tertiary);
          background-color: var(--color-background-tertiary);
          padding: var(--spacing-1);
          border-radius: var(--radius-sm);
        }

        .examples-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: var(--spacing-6);
        }

        .example-card {
          padding: var(--spacing-4);
          border: 1px solid var(--color-border-secondary);
          border-radius: var(--radius-md);
          background-color: var(--color-background-secondary);
        }

        .example-title {
          font-size: var(--font-size-base);
          font-weight: var(--font-weight-semibold);
          margin-bottom: var(--spacing-3);
          color: var(--color-text-primary);
        }

        .example-demo {
          margin-bottom: var(--spacing-3);
          padding: var(--spacing-4);
          background-color: var(--color-background-primary);
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border-tertiary);
        }

        .example-code {
          font-family: var(--font-family-mono);
          font-size: var(--font-size-xs);
          color: var(--color-text-tertiary);
          background-color: var(--color-background-tertiary);
          padding: var(--spacing-2);
          border-radius: var(--radius-sm);
          display: block;
          line-height: var(--line-height-relaxed);
        }
      `}</style>
    </div>
  );
};
