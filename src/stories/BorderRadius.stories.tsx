import type { Meta } from '@storybook/react';

const meta: Meta = {
  title: '🎨 Design Tokens/Border Radius',
  tags: ['autodocs'],
};

export default meta;

/**
 * # 🔘 Border Radius System
 * 
 * Our border radius system provides consistent rounded corners throughout the interface.
 * 
 * ## 🎯 Border Radius Principles
 * 
 * - **Consistent**: Unified corner radius values
 * - **Semantic**: Clear meaning for different radius sizes
 * - **Scalable**: Works at any component size
 * - **Purposeful**: Each radius serves a specific design intent
 * 
 * ## 📐 Radius Scale
 * 
 * ### None (0px)
 * Sharp, angular edges for geometric designs
 * 
 * ### Small (2px)
 * Subtle rounding for tags and badges
 * 
 * ### Base (4px)
 * Standard rounding for buttons and inputs
 * 
 * ### Medium (6px)
 * Cards and panels
 * 
 * ### Large (8px)
 * Modal dialogs and major containers
 * 
 * ### Extra Large (12px)
 * Hero sections and feature cards
 * 
 * ### Full (9999px)
 * Perfect circles and pills
 * 
 * ## 🎨 Usage Guidelines
 * 
 * ### Buttons and Inputs
 * - Use `--radius-base` for standard buttons
 * - Use `--radius-sm` for compact controls
 * - Use `--radius-full` for pill buttons
 * 
 * ### Cards and Containers
 * - Use `--radius-md` for standard cards
 * - Use `--radius-lg` for major containers
 * - Use `--radius-xl` for hero sections
 * 
 * ### Small Elements
 * - Use `--radius-sm` for badges and tags
 * - Use `--radius-base` for tooltips
 * - Use `--radius-none` for dividers
 * 
 * ## 🔧 Implementation
 * 
 * Use border radius tokens in your CSS:
 * 
 * ```css
 * .button {
 *   border-radius: var(--radius-base);
 * }
 * 
 * .card {
 *   border-radius: var(--radius-md);
 * }
 * 
 * .pill-button {
 *   border-radius: var(--radius-full);
 * }
 * ```
 */

export const BorderRadiusShowcase = () => {
  const radiusTokens = [
    { 
      name: 'None', 
      token: '--radius-none', 
      rem: '0', 
      px: '0px', 
      usage: 'Sharp edges, dividers, geometric designs' 
    },
    { 
      name: 'Extra Small', 
      token: '--radius-xs', 
      rem: '0.125rem', 
      px: '2px', 
      usage: 'Very subtle rounding' 
    },
    { 
      name: 'Small', 
      token: '--radius-sm', 
      rem: '0.25rem', 
      px: '4px', 
      usage: 'Tags, badges, small controls' 
    },
    { 
      name: 'Base', 
      token: '--radius-base', 
      rem: '0.375rem', 
      px: '6px', 
      usage: 'Standard elements, inputs' 
    },
    { 
      name: 'Medium', 
      token: '--radius-md', 
      rem: '0.5rem', 
      px: '8px', 
      usage: 'Buttons, cards, panels' 
    },
    { 
      name: 'Large', 
      token: '--radius-lg', 
      rem: '0.75rem', 
      px: '12px', 
      usage: 'Modal dialogs, major containers' 
    },
    { 
      name: 'Extra Large', 
      token: '--radius-xl', 
      rem: '1rem', 
      px: '16px', 
      usage: 'Hero sections, feature cards' 
    },
    { 
      name: 'Double XL', 
      token: '--radius-2xl', 
      rem: '1.5rem', 
      px: '24px', 
      usage: 'Large feature elements' 
    },
    { 
      name: 'Triple XL', 
      token: '--radius-3xl', 
      rem: '2rem', 
      px: '32px', 
      usage: 'Very large rounded elements' 
    },
    { 
      name: 'Full', 
      token: '--radius-full', 
      rem: '9999px', 
      px: '9999px', 
      usage: 'Perfect circles, pill buttons' 
    },
  ];

  const semanticRadius = [
    {
      name: 'Button Styles',
      description: 'Different button border radius options',
      examples: [
        { style: 'Sharp', radius: '--radius-none', bg: 'var(--color-azure-500)' },
        { style: 'Standard', radius: '--radius-base', bg: 'var(--color-azure-500)' },
        { style: 'Rounded', radius: '--radius-lg', bg: 'var(--color-azure-500)' },
        { style: 'Pill', radius: '--radius-full', bg: 'var(--color-azure-500)' },
      ]
    },
    {
      name: 'Card Styles',
      description: 'Card container radius variations',
      examples: [
        { style: 'Flat', radius: '--radius-none', bg: 'var(--color-background-secondary)' },
        { style: 'Subtle', radius: '--radius-sm', bg: 'var(--color-background-secondary)' },
        { style: 'Standard', radius: '--radius-md', bg: 'var(--color-background-secondary)' },
        { style: 'Soft', radius: '--radius-xl', bg: 'var(--color-background-secondary)' },
      ]
    },
    {
      name: 'Badge Styles',
      description: 'Small element radius options',
      examples: [
        { style: 'Sharp', radius: '--radius-none', bg: 'var(--color-success-500)' },
        { style: 'Slight', radius: '--radius-sm', bg: 'var(--color-warning-500)' },
        { style: 'Rounded', radius: '--radius-base', bg: 'var(--color-error-500)' },
        { style: 'Pill', radius: '--radius-full', bg: 'var(--color-info-500)' },
      ]
    },
  ];

  return (
    <div className="radius-showcase">
      
      {/* Radius Scale */}
      <div className="section">
        <h3 className="section-title">Border Radius Scale</h3>
        <p className="section-description">
          Complete range of border radius values for consistent rounded corners
        </p>
        <div className="radius-grid">
          {radiusTokens.map((radius) => (
            <div key={radius.name} className="radius-card">
              <div className="radius-demo">
                <div 
                  className="radius-shape"
                  style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'var(--color-azure-500)',
                    borderRadius: `var(${radius.token})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 'var(--font-weight-bold)',
                    flexDirection: 'column',
                    gap: 'var(--spacing-1)',
                    textAlign: 'center'
                  }}
                >
                  <div>{radius.rem}</div>
                  <div>{radius.px}</div>
                </div>
              </div>
              <div className="radius-info">
                <div className="radius-name">{radius.name}</div>
                <code className="radius-token">{radius.token}</code>
                <div className="radius-values">
                  <span className="rem-value">{radius.rem}</span>
                  <span className="px-value">{radius.px}</span>
                </div>
                <p className="radius-usage">{radius.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Semantic Radius Groups */}
      <div className="section">
        <h3 className="section-title">Semantic Border Radius</h3>
        <p className="section-description">
          Common use cases and style variations using border radius
        </p>
        <div className="semantic-grid">
          {semanticRadius.map((group) => (
            <div key={group.name} className="semantic-group">
              <div className="group-header">
                <h4 className="group-name">{group.name}</h4>
                <p className="group-description">{group.description}</p>
              </div>
              <div className="group-examples">
                {group.examples.map((example) => (
                  <div key={example.style} className="example-item">
                    <div 
                      className="example-shape"
                      style={{
                        backgroundColor: example.bg,
                        borderRadius: `var(${example.radius})`,
                        padding: group.name === 'Badge Styles' ? 'var(--spacing-1) var(--spacing-2)' : 'var(--spacing-3) var(--spacing-4)',
                        color: example.bg.includes('background') ? 'var(--color-text-primary)' : 'white',
                        fontSize: group.name === 'Badge Styles' ? 'var(--font-size-xs)' : 'var(--font-size-sm)',
                        fontWeight: 'var(--font-weight-medium)',
                        textAlign: 'center',
                        border: example.bg.includes('background') ? '1px solid var(--color-border-secondary)' : 'none',
                        minWidth: group.name === 'Badge Styles' ? 'auto' : '80px',
                        display: 'inline-block'
                      }}
                    >
                      {example.style}
                    </div>
                    <code className="example-token">{example.radius}</code>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Practical Examples */}
      <div className="section">
        <h3 className="section-title">Practical Examples</h3>
        <div className="examples-grid">
          
          {/* Form Elements */}
          <div className="example-card">
            <h4 className="example-title">Form Elements</h4>
            <div className="example-demo">
              <div className="form-examples">
                <input 
                  type="text" 
                  placeholder="Standard input"
                  className="demo-input"
                  style={{
                    padding: 'var(--spacing-2) var(--spacing-3)',
                    border: '1px solid var(--color-border-secondary)',
                    borderRadius: 'var(--radius-base)',
                    fontSize: 'var(--font-size-sm)',
                    backgroundColor: 'var(--color-background-tertiary)',
                    width: '100%',
                    marginBottom: 'var(--spacing-2)'
                  }}
                />
                <button 
                  className="demo-button"
                  style={{
                    padding: 'var(--spacing-2) var(--spacing-4)',
                    backgroundColor: 'var(--color-azure-500)',
                    color: 'white',
                    border: 'none',
                    borderRadius: 'var(--radius-base)',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    cursor: 'pointer',
                    marginRight: 'var(--spacing-2)'
                  }}
                >
                  Standard
                </button>
                <button 
                  className="demo-button-pill"
                  style={{
                    padding: 'var(--spacing-2) var(--spacing-4)',
                    backgroundColor: 'var(--color-secondary-500)',
                    color: 'white',
                    border: 'none',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    cursor: 'pointer'
                  }}
                >
                  Pill Button
                </button>
              </div>
            </div>
            <p className="example-description">
              Form elements using --radius-base and --radius-full
            </p>
          </div>

          {/* Card Variations */}
          <div className="example-card">
            <h4 className="example-title">Card Variations</h4>
            <div className="example-demo">
              <div className="card-variations">
                <div 
                  className="sharp-card"
                  style={{
                    padding: 'var(--spacing-3)',
                    backgroundColor: 'var(--color-background-secondary)',
                    border: '1px solid var(--color-border-secondary)',
                    borderRadius: 'var(--radius-none)',
                    marginBottom: 'var(--spacing-2)',
                    fontSize: 'var(--font-size-xs)',
                    textAlign: 'center'
                  }}
                >
                  Sharp Card (none)
                </div>
                <div 
                  className="standard-card"
                  style={{
                    padding: 'var(--spacing-3)',
                    backgroundColor: 'var(--color-background-secondary)',
                    border: '1px solid var(--color-border-secondary)',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: 'var(--spacing-2)',
                    fontSize: 'var(--font-size-xs)',
                    textAlign: 'center'
                  }}
                >
                  Standard Card (md)
                </div>
                <div 
                  className="soft-card"
                  style={{
                    padding: 'var(--spacing-3)',
                    backgroundColor: 'var(--color-background-secondary)',
                    border: '1px solid var(--color-border-secondary)',
                    borderRadius: 'var(--radius-xl)',
                    fontSize: 'var(--font-size-xs)',
                    textAlign: 'center'
                  }}
                >
                  Soft Card (xl)
                </div>
              </div>
            </div>
            <p className="example-description">
              Different card styles using various radius values
            </p>
          </div>

          {/* Component Gallery */}
          <div className="example-card">
            <h4 className="example-title">Component Gallery</h4>
            <div className="example-demo">
              <div className="component-gallery">
                <div className="gallery-row">
                  <span 
                    className="badge"
                    style={{
                      padding: 'var(--spacing-0.5) var(--spacing-1.5)',
                      backgroundColor: 'var(--color-success-500)',
                      color: 'white',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: 'var(--font-size-xs)',
                      fontWeight: 'var(--font-weight-medium)'
                    }}
                  >
                    Badge
                  </span>
                  <span 
                    className="pill-badge"
                    style={{
                      padding: 'var(--spacing-0.5) var(--spacing-2)',
                      backgroundColor: 'var(--color-warning-500)',
                      color: 'white',
                      borderRadius: 'var(--radius-full)',
                      fontSize: 'var(--font-size-xs)',
                      fontWeight: 'var(--font-weight-medium)',
                      marginLeft: 'var(--spacing-2)'
                    }}
                  >
                    Pill Badge
                  </span>
                </div>
                <div 
                  className="notification"
                  style={{
                    padding: 'var(--spacing-2) var(--spacing-3)',
                    backgroundColor: 'var(--color-info-100)',
                    border: '1px solid var(--color-info-300)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--color-info-700)',
                    marginTop: 'var(--spacing-2)',
                    textAlign: 'center'
                  }}
                >
                  📢 Notification message
                </div>
                <div 
                  className="avatar"
                  style={{
                    width: '32px',
                    height: '32px',
                    backgroundColor: 'var(--color-azure-500)',
                    borderRadius: 'var(--radius-full)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 'var(--font-weight-bold)',
                    margin: 'var(--spacing-2) auto 0'
                  }}
                >
                  AV
                </div>
              </div>
            </div>
            <p className="example-description">
              Various UI components showcasing different radius values
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .radius-showcase {
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

        .radius-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: var(--spacing-4);
        }

        .radius-card {
          padding: var(--spacing-4);
          border: 1px solid var(--color-border-secondary);
          border-radius: var(--radius-md);
          background-color: var(--color-background-secondary);
          text-align: center;
        }

        .radius-demo {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: var(--spacing-3);
          min-height: 100px;
        }

        .radius-name {
          font-size: var(--font-size-sm);
          font-weight: var(--font-weight-medium);
          color: var(--color-text-primary);
          margin-bottom: var(--spacing-1);
        }

        .radius-token {
          font-family: var(--font-family-mono);
          font-size: var(--font-size-xs);
          color: var(--color-text-tertiary);
          background-color: var(--color-background-tertiary);
          padding: var(--spacing-0.5) var(--spacing-1);
          border-radius: var(--radius-sm);
          display: block;
          margin-bottom: var(--spacing-1);
        }

        .radius-values {
          display: flex;
          gap: var(--spacing-2);
          align-items: center;
          justify-content: center;
          margin-bottom: var(--spacing-1);
        }

        .rem-value {
          font-size: var(--font-size-xs);
          color: var(--color-text-primary);
          font-weight: var(--font-weight-medium);
        }

        .px-value {
          font-size: var(--font-size-2xs);
          color: var(--color-text-tertiary);
        }

        .radius-usage {
          font-size: var(--font-size-xs);
          color: var(--color-text-secondary);
          margin: 0;
          line-height: var(--line-height-snug);
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
          text-align: center;
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

        .group-examples {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--spacing-3);
        }

        .example-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-1);
        }

        .example-token {
          font-family: var(--font-family-mono);
          font-size: var(--font-size-2xs);
          color: var(--color-text-tertiary);
          background-color: var(--color-background-tertiary);
          padding: var(--spacing-0.5);
          border-radius: var(--radius-sm);
        }

        .examples-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
          padding: var(--spacing-4);
          background-color: var(--color-background-primary);
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border-tertiary);
          margin-bottom: var(--spacing-2);
        }

        .example-description {
          font-size: var(--font-size-xs);
          color: var(--color-text-secondary);
          margin: 0;
          text-align: center;
          line-height: var(--line-height-relaxed);
        }

        .form-examples,
        .card-variations,
        .component-gallery {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-2);
        }

        .gallery-row {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};
