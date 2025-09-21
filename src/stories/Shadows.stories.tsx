import type { Meta } from '@storybook/react';

const meta: Meta = {
  title: '🎨 Design Tokens/Shadows',
  tags: ['autodocs'],
};

export default meta;

/**
 * # 🌑 Shadow System
 * 
 * Our shadow system creates depth and hierarchy through consistent elevation patterns.
 * 
 * ## 🎯 Shadow Principles
 * 
 * - **Elevation**: Clear visual hierarchy through depth
 * - **Consistency**: Unified shadow language across components
 * - **Subtlety**: Shadows enhance, never dominate
 * - **Accessibility**: Works across different contrast preferences
 * 
 * ## 🏔️ Elevation Levels
 * 
 * ### Level 0: None
 * Flat elements, no elevation
 * 
 * ### Level 1: Small (2px)
 * Subtle depth for cards and buttons
 * 
 * ### Level 2: Medium (4px)
 * Modal content, raised buttons
 * 
 * ### Level 3: Large (8px)
 * Dropdown menus, tooltips
 * 
 * ### Level 4: Extra Large (16px)
 * Overlays, modal backdrops
 * 
 * ### Level 5: Huge (24px)
 * Major floating elements
 * 
 * ## 🎨 Shadow Types
 * 
 * ### Standard Shadows
 * General purpose elevation shadows
 * 
 * ### Focus Shadows
 * Interactive focus indicators
 * 
 * ### Colored Shadows
 * Brand-specific accent shadows
 * 
 * ## 💡 Usage Guidelines
 * 
 * ### Cards and Surfaces
 * - Use `--shadow-sm` for subtle card elevation
 * - Use `--shadow-md` for interactive cards
 * - Use `--shadow-lg` for floating panels
 * 
 * ### Interactive Elements
 * - Use `--shadow-focus-primary` for focus states
 * - Use `--shadow-focus-danger` for error focus
 * - Use `--shadow-button-hover` for button hover
 * 
 * ### Overlays and Modals
 * - Use `--shadow-xl` for modal content
 * - Use `--shadow-2xl` for major overlays
 * 
 * ## 🔧 Implementation
 * 
 * Use shadow tokens in your CSS:
 * 
 * ```css
 * .card {
 *   box-shadow: var(--shadow-md);
 * }
 * 
 * .button:hover {
 *   box-shadow: var(--shadow-button-hover);
 * }
 * 
 * .modal {
 *   box-shadow: var(--shadow-xl);
 * }
 * ```
 * 
 * ## 🌙 Theme Support
 * 
 * Shadows automatically adapt to light and dark themes
 */

export const ShadowShowcase = () => {
  const elevationLevels = [
    { 
      level: 0,
      name: 'None', 
      token: '--shadow-none', 
      usage: 'Flat elements, no elevation',
      description: 'No shadow - completely flat',
      blur: '0px',
      offset: '0px'
    },
    { 
      level: 1,
      name: 'Small', 
      token: '--shadow-sm', 
      usage: 'Cards, subtle depth',
      description: 'Very subtle shadow for minimal elevation',
      blur: '2px',
      offset: '1px'
    },
    { 
      level: 2,
      name: 'Medium', 
      token: '--shadow-md', 
      usage: 'Interactive cards, buttons',
      description: 'Light shadow for moderate elevation',
      blur: '4px',
      offset: '2px'
    },
    { 
      level: 3,
      name: 'Large', 
      token: '--shadow-lg', 
      usage: 'Dropdown menus, floating panels',
      description: 'Medium shadow for clear elevation',
      blur: '8px',
      offset: '4px'
    },
    { 
      level: 4,
      name: 'Extra Large', 
      token: '--shadow-xl', 
      usage: 'Modal content, overlays',
      description: 'Strong shadow for high elevation',
      blur: '16px',
      offset: '8px'
    },
    { 
      level: 5,
      name: 'Huge', 
      token: '--shadow-2xl', 
      usage: 'Major floating elements',
      description: 'Maximum shadow for highest elevation',
      blur: '24px',
      offset: '12px'
    },
  ];

  const focusShadows = [
    { 
      name: 'Primary Focus', 
      token: '--shadow-focus-primary', 
      usage: 'Primary button focus states',
      color: 'var(--color-azure-500)'
    },
    { 
      name: 'Secondary Focus', 
      token: '--shadow-focus-secondary', 
      usage: 'Secondary button focus states',
      color: 'var(--color-secondary-500)'
    },
    { 
      name: 'Success Focus', 
      token: '--shadow-focus-success', 
      usage: 'Success button focus states',
      color: 'var(--color-success-500)'
    },
    { 
      name: 'Warning Focus', 
      token: '--shadow-focus-warning', 
      usage: 'Warning button focus states',
      color: 'var(--color-warning-500)'
    },
    { 
      name: 'Danger Focus', 
      token: '--shadow-focus-danger', 
      usage: 'Danger button focus states',
      color: 'var(--color-error-500)'
    },
  ];

  const interactiveShadows = [
    { 
      name: 'Button Hover', 
      token: '--shadow-button-hover', 
      usage: 'Button hover states',
      context: 'Hover'
    },
    { 
      name: 'Button Active', 
      token: '--shadow-button-active', 
      usage: 'Button active/pressed states',
      context: 'Active'
    },
    { 
      name: 'Card Hover', 
      token: '--shadow-card-hover', 
      usage: 'Interactive card hover',
      context: 'Hover'
    },
  ];

  return (
    <div className="shadow-showcase">
      
      {/* Elevation Levels - Clear Visual Hierarchy */}
      <div className="section">
        <h3 className="section-title">Elevation Levels</h3>
        <p className="section-description">
          Visual hierarchy through shadow depth - each level represents a higher elevation
        </p>
        <div className="elevation-showcase">
          {elevationLevels.map((level) => (
            <div key={level.level} className="elevation-card">
              {/* Visual Box with Shadow */}
              <div className="elevation-visual">
                <div 
                  className="shadow-box"
                  style={{
                    width: '120px',
                    height: '80px',
                    backgroundColor: 'var(--color-background-secondary)',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `var(${level.token})`,
                    border: '1px solid var(--color-border-tertiary)',
                    position: 'relative',
                    margin: '20px auto'
                  }}
                >
                  <div style={{
                    fontSize: '24px',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-text-primary)',
                    marginBottom: '4px'
                  }}>
                    {level.level}
                  </div>
                  <div style={{
                    fontSize: '10px',
                    color: 'var(--color-text-secondary)',
                    textAlign: 'center'
                  }}>
                    Level {level.level}
                  </div>
                </div>
              </div>
              
              {/* Information Below */}
              <div className="elevation-info">
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--color-text-primary)',
                  marginBottom: '8px',
                  textAlign: 'center'
                }}>
                  {level.name}
                </h4>
                <code style={{
                  fontSize: '11px',
                  color: 'var(--color-text-tertiary)',
                  fontFamily: 'var(--font-family-mono)',
                  backgroundColor: 'var(--color-background-tertiary)',
                  padding: '4px 8px',
                  borderRadius: 'var(--radius-sm)',
                  display: 'block',
                  textAlign: 'center',
                  marginBottom: '12px'
                }}>
                  {level.token}
                </code>
                <p style={{
                  fontSize: '13px',
                  color: 'var(--color-text-secondary)',
                  textAlign: 'center',
                  marginBottom: '8px',
                  lineHeight: '1.4'
                }}>
                  {level.description}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '11px',
                  color: 'var(--color-text-tertiary)',
                  borderTop: '1px solid var(--color-border-tertiary)',
                  paddingTop: '8px',
                  marginTop: '12px'
                }}>
                  <span>Blur: {level.blur}</span>
                  <span>Offset: {level.offset}</span>
                </div>
                <p style={{
                  fontSize: '11px',
                  color: 'var(--color-text-secondary)',
                  textAlign: 'center',
                  marginTop: '8px',
                  fontStyle: 'italic'
                }}>
                  {level.usage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Focus Shadows */}
      <div className="section">
        <h3 className="section-title">Focus Shadows</h3>
        <p className="section-description">
          Colored shadows for focus states and accessibility
        </p>
        <div className="shadow-grid">
          {focusShadows.map((shadow) => (
            <div key={shadow.name} className="shadow-card">
              <div 
                className="shadow-demo focus-demo"
                style={{ 
                  boxShadow: `var(${shadow.token})`,
                  backgroundColor: 'var(--color-background-primary)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--spacing-6)',
                  minHeight: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid var(--color-border-secondary)',
                  outline: 'none'
                }}
                tabIndex={0}
              >
                <div className="shadow-info">
                  <div className="shadow-name">{shadow.name}</div>
                  <div 
                    className="color-indicator"
                    style={{ 
                      backgroundColor: shadow.color,
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      margin: '0 auto'
                    }}
                  />
                </div>
              </div>
              <div className="shadow-details">
                <code className="shadow-token">{shadow.token}</code>
                <p className="shadow-usage">{shadow.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Shadows */}
      <div className="section">
        <h3 className="section-title">Interactive Shadows</h3>
        <p className="section-description">
          Dynamic shadows for hover and active states
        </p>
        <div className="shadow-grid">
          {interactiveShadows.map((shadow) => (
            <div key={shadow.name} className="shadow-card">
              <div 
                className="shadow-demo interactive-demo"
                style={{ 
                  boxShadow: `var(${shadow.token})`,
                  backgroundColor: 'var(--color-background-primary)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--spacing-6)',
                  minHeight: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--color-border-secondary)',
                  cursor: 'pointer',
                  transition: 'var(--transition-hover)'
                }}
              >
                <div className="shadow-info">
                  <div className="shadow-name">{shadow.name}</div>
                  <div className="shadow-context">{shadow.context}</div>
                </div>
              </div>
              <div className="shadow-details">
                <code className="shadow-token">{shadow.token}</code>
                <p className="shadow-usage">{shadow.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Practical Examples */}
      <div className="section">
        <h3 className="section-title">Practical Examples</h3>
        <div className="examples-grid">
          
          {/* Button Examples */}
          <div className="example-group">
            <h4 className="example-title">Button States</h4>
            <div className="button-examples">
              <button 
                className="demo-button"
                style={{
                  padding: 'var(--spacing-2) var(--spacing-4)',
                  backgroundColor: 'var(--color-azure-500)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'var(--transition-hover)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-button-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-button-active)';
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-button-hover)';
                }}
                onFocus={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-focus-primary)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
              >
                Interactive Button
              </button>
              <p className="example-note">
                Hover, focus, and click to see shadow changes
              </p>
            </div>
          </div>

          {/* Card Examples */}
          <div className="example-group">
            <h4 className="example-title">Card Elevation</h4>
            <div className="card-examples">
              <div 
                className="demo-card"
                style={{
                  padding: 'var(--spacing-4)',
                  backgroundColor: 'var(--color-background-secondary)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-md)',
                  transition: 'var(--transition-hover)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <h5 style={{ 
                  fontSize: 'var(--font-size-base)', 
                  fontWeight: 'var(--font-weight-semibold)',
                  marginBottom: 'var(--spacing-2)',
                  color: 'var(--color-text-primary)'
                }}>
                  Interactive Card
                </h5>
                <p style={{ 
                  fontSize: 'var(--font-size-sm)', 
                  color: 'var(--color-text-secondary)',
                  margin: 0,
                  lineHeight: 'var(--line-height-relaxed)'
                }}>
                  Hover to see elevation change
                </p>
              </div>
            </div>
          </div>

          {/* Modal Example */}
          <div className="example-group">
            <h4 className="example-title">Modal Overlay</h4>
            <div className="modal-example">
              <div 
                className="demo-modal-backdrop"
                style={{
                  position: 'relative',
                  height: '200px',
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div 
                  className="demo-modal"
                  style={{
                    padding: 'var(--spacing-6)',
                    backgroundColor: 'var(--color-background-primary)',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-xl)',
                    maxWidth: '250px',
                    textAlign: 'center'
                  }}
                >
                  <h5 style={{ 
                    fontSize: 'var(--font-size-lg)', 
                    fontWeight: 'var(--font-weight-semibold)',
                    marginBottom: 'var(--spacing-2)',
                    color: 'var(--color-text-primary)'
                  }}>
                    Modal Dialog
                  </h5>
                  <p style={{ 
                    fontSize: 'var(--font-size-sm)', 
                    color: 'var(--color-text-secondary)',
                    margin: 0,
                    lineHeight: 'var(--line-height-relaxed)'
                  }}>
                    High elevation shadow for modals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .shadow-showcase {
          font-family: var(--font-family-primary);
          padding: var(--spacing-6);
        }

        .section {
          margin-bottom: var(--spacing-8);
        }

        .section-title {
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-semibold);
          margin-bottom: var(--spacing-2);
          color: var(--color-text-primary);
        }

        .section-description {
          font-size: var(--font-size-sm);
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-4);
          line-height: var(--line-height-relaxed);
        }

        .shadow-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--spacing-6);
        }

        .shadow-card {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-3);
        }

        .shadow-info {
          text-align: center;
        }

        .shadow-name {
          font-size: var(--font-size-base);
          font-weight: var(--font-weight-medium);
          color: var(--color-text-primary);
          margin-bottom: var(--spacing-1);
        }

        .shadow-level {
          font-size: var(--font-size-sm);
          color: var(--color-text-secondary);
        }

        .shadow-context {
          font-size: var(--font-size-sm);
          color: var(--color-text-secondary);
          font-style: italic;
        }

        /* Elevation Showcase Styles */
        .elevation-showcase {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-6);
          padding: var(--spacing-4);
          background-color: var(--color-background-primary);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border-secondary);
        }

        .elevation-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: var(--spacing-4);
          background-color: var(--color-background-secondary);
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-tertiary);
        }

        .elevation-visual {
          margin-bottom: var(--spacing-3);
        }

        .elevation-info {
          width: 100%;
          text-align: center;
        }

        .shadow-details {
          text-align: center;
        }

        .shadow-token {
          font-family: var(--font-family-mono);
          font-size: var(--font-size-xs);
          color: var(--color-text-tertiary);
          background-color: var(--color-background-tertiary);
          padding: var(--spacing-1);
          border-radius: var(--radius-sm);
          display: block;
          margin-bottom: var(--spacing-1);
        }

        .shadow-usage {
          font-size: var(--font-size-xs);
          color: var(--color-text-secondary);
          margin: 0;
          line-height: var(--line-height-snug);
        }

        .focus-demo:focus-visible {
          outline: none;
        }

        .interactive-demo:hover {
          transform: translateY(-1px);
        }

        .examples-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-6);
        }

        .example-group {
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

        .button-examples,
        .card-examples,
        .modal-example {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-2);
        }

        .example-note {
          font-size: var(--font-size-xs);
          color: var(--color-text-tertiary);
          text-align: center;
          margin: 0;
          font-style: italic;
        }
      `}</style>
    </div>
  );
};
