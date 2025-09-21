import type { Meta } from '@storybook/react';

const meta: Meta = {
  title: '🎨 Design Tokens/Animations',
  tags: ['autodocs'],
};

export default meta;

/**
 * # 🎬 Animation System
 * 
 * Our animation system provides consistent motion and transitions throughout the interface.
 * 
 * ## 🎯 Animation Principles
 * 
 * - **Purposeful**: Every animation serves a clear purpose
 * - **Consistent**: Unified timing and easing across components
 * - **Accessible**: Respects user motion preferences
 * - **Performant**: Optimized for smooth 60fps animations
 * 
 * ## ⏱️ Duration Scale
 * 
 * ### Instant (0ms)
 * No animation, immediate changes
 * 
 * ### Fast (150ms)
 * Quick feedback, hover states
 * 
 * ### Normal (250ms)
 * Standard interactions, transitions
 * 
 * ### Slow (350ms)
 * Complex state changes
 * 
 * ### Slower (500ms)
 * Modal entrances, major transitions
 * 
 * ### Slowest (750ms)
 * Loading states, onboarding
 * 
 * ## 📈 Easing Curves
 * 
 * ### Linear
 * Constant speed, mechanical feeling
 * 
 * ### Ease In
 * Slow start, natural acceleration
 * 
 * ### Ease Out
 * Fast start, natural deceleration
 * 
 * ### Ease In Out
 * Smooth acceleration and deceleration
 * 
 * ## 🎨 Animation Types
 * 
 * ### Micro-interactions
 * Button hovers, focus states
 * 
 * ### Transitions
 * Page changes, state updates
 * 
 * ### Loading States
 * Progress indicators, skeleton screens
 * 
 * ### Entrance/Exit
 * Modal dialogs, dropdown menus
 * 
 * ## ♿ Accessibility
 * 
 * Respects `prefers-reduced-motion` for accessibility
 */

export const AnimationShowcase = () => {
  const durations = [
    { name: 'Instant', token: '--duration-instant', value: '0ms', usage: 'No animation' },
    { name: 'Fast', token: '--duration-fast', value: '150ms', usage: 'Hover states, quick feedback' },
    { name: 'Normal', token: '--duration-normal', value: '250ms', usage: 'Standard transitions' },
    { name: 'Slow', token: '--duration-slow', value: '350ms', usage: 'Complex state changes' },
    { name: 'Slower', token: '--duration-slower', value: '500ms', usage: 'Modal entrances' },
    { name: 'Slowest', token: '--duration-slowest', value: '750ms', usage: 'Loading states' },
  ];

  const easingCurves = [
    { 
      name: 'Linear', 
      token: '--ease-linear', 
      value: 'cubic-bezier(0, 0, 1, 1)', 
      usage: 'Constant speed, mechanical' 
    },
    { 
      name: 'Ease In', 
      token: '--ease-in', 
      value: 'cubic-bezier(0.4, 0, 1, 1)', 
      usage: 'Slow start, acceleration' 
    },
    { 
      name: 'Ease Out', 
      token: '--ease-out', 
      value: 'cubic-bezier(0, 0, 0.2, 1)', 
      usage: 'Fast start, deceleration' 
    },
    { 
      name: 'Ease In Out', 
      token: '--ease-in-out', 
      value: 'cubic-bezier(0.4, 0, 0.2, 1)', 
      usage: 'Smooth acceleration/deceleration' 
    },
    { 
      name: 'Bounce', 
      token: '--ease-bounce', 
      value: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', 
      usage: 'Playful bounce effect' 
    },
    { 
      name: 'Elastic', 
      token: '--ease-elastic', 
      value: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
      usage: 'Spring-like motion' 
    },
  ];

  const semanticTransitions = [
    { 
      name: 'Hover', 
      token: '--transition-hover', 
      value: 'all var(--duration-fast) var(--ease-out)', 
      usage: 'General hover states' 
    },
    { 
      name: 'Focus', 
      token: '--transition-focus', 
      value: 'box-shadow var(--duration-fast) var(--ease-out)', 
      usage: 'Focus ring transitions' 
    },
    { 
      name: 'Button Hover', 
      token: '--transition-button-hover', 
      value: 'transform var(--duration-fast) var(--ease-out)', 
      usage: 'Button interaction feedback' 
    },
    { 
      name: 'Modal', 
      token: '--transition-modal-enter', 
      value: 'all var(--duration-normal) var(--ease-out)', 
      usage: 'Modal entrance animation' 
    },
    { 
      name: 'Dropdown', 
      token: '--transition-dropdown', 
      value: 'all var(--duration-normal) var(--ease-out)', 
      usage: 'Menu and dropdown animations' 
    },
    { 
      name: 'Loading', 
      token: '--transition-loading', 
      value: 'opacity var(--duration-normal) var(--ease-in-out)', 
      usage: 'Loading state transitions' 
    },
  ];

  const keyframeAnimations = [
    { 
      name: 'Fade In', 
      token: '--keyframes-fade-in', 
      usage: 'Element entrance',
      className: 'animate-fade-in'
    },
    { 
      name: 'Slide In Down', 
      token: '--keyframes-slide-in-down', 
      usage: 'Dropdown menus, notifications',
      className: 'animate-slide-in-down'
    },
    { 
      name: 'Pulse', 
      token: '--keyframes-pulse', 
      usage: 'Loading indicators, attention',
      className: 'animate-pulse'
    },
    { 
      name: 'Bounce', 
      token: '--keyframes-bounce', 
      usage: 'Playful interactions',
      className: 'animate-bounce'
    },
    { 
      name: 'Spin', 
      token: '--keyframes-spin', 
      usage: 'Loading spinners',
      className: 'animate-spin'
    },
  ];

  return (
    <div className="animation-showcase">
      
      {/* Duration Scale */}
      <div className="section">
        <h3 className="section-title">Duration Scale</h3>
        <p className="section-description">
          Consistent timing values for different interaction speeds
        </p>
        <div className="duration-grid">
          {durations.map((duration) => (
            <div key={duration.name} className="duration-card">
              <div className="duration-demo">
                <div 
                  className="duration-bar"
                  style={{
                    width: '60px',
                    height: '6px',
                    backgroundColor: 'var(--color-azure-500)',
                    borderRadius: 'var(--radius-sm)',
                    animation: `expandBar ${duration.value} var(--ease-out) infinite alternate`
                  }}
                />
              </div>
              <div className="duration-info">
                <div className="duration-name">{duration.name}</div>
                <code className="duration-token">{duration.token}</code>
                <div className="duration-value">{duration.value}</div>
                <p className="duration-usage">{duration.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Easing Curves */}
      <div className="section">
        <h3 className="section-title">Easing Curves</h3>
        <p className="section-description">
          Timing functions that define the feel of animations
        </p>
        <div className="easing-grid">
          {easingCurves.map((easing) => (
            <div key={easing.name} className="easing-card">
              <div className="easing-demo">
                <div 
                  className="easing-ball"
                  style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: 'var(--color-azure-500)',
                    borderRadius: '50%',
                    animation: `moveBall 2s ${easing.value} infinite alternate`
                  }}
                />
              </div>
              <div className="easing-info">
                <div className="easing-name">{easing.name}</div>
                <code className="easing-token">{easing.token}</code>
                <p className="easing-usage">{easing.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Semantic Transitions */}
      <div className="section">
        <h3 className="section-title">Semantic Transitions</h3>
        <p className="section-description">
          Pre-defined transition combinations for common use cases
        </p>
        <div className="transition-grid">
          {semanticTransitions.map((transition) => (
            <div key={transition.name} className="transition-card">
              <div 
                className="transition-demo"
                style={{
                  transition: `var(${transition.token})`,
                  padding: 'var(--spacing-4)',
                  backgroundColor: 'var(--color-background-secondary)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border-secondary)',
                  cursor: 'pointer',
                  textAlign: 'center'
                }}
                onMouseEnter={(e) => {
                  if (transition.name === 'Hover') {
                    e.currentTarget.style.backgroundColor = 'var(--color-azure-100)';
                  } else if (transition.name === 'Focus') {
                    e.currentTarget.style.boxShadow = 'var(--shadow-focus-primary)';
                  } else if (transition.name === 'Button Hover') {
                    e.currentTarget.style.transform = 'var(--scale-hover)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (transition.name === 'Hover') {
                    e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                  } else if (transition.name === 'Focus') {
                    e.currentTarget.style.boxShadow = 'none';
                  } else if (transition.name === 'Button Hover') {
                    e.currentTarget.style.transform = 'none';
                  }
                }}
              >
                <div className="transition-name">{transition.name}</div>
                <div className="transition-hint">Hover me</div>
              </div>
              <div className="transition-details">
                <code className="transition-token">{transition.token}</code>
                <p className="transition-usage">{transition.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe Animations */}
      <div className="section">
        <h3 className="section-title">Keyframe Animations</h3>
        <p className="section-description">
          Complex animations for entrance, loading, and attention
        </p>
        <div className="keyframe-grid">
          {keyframeAnimations.map((keyframe) => (
            <div key={keyframe.name} className="keyframe-card">
              <div className="keyframe-demo">
                <div 
                  className={`keyframe-element ${keyframe.className}`}
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: 'var(--color-azure-500)',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: 'var(--font-size-lg)',
                    fontWeight: 'var(--font-weight-bold)'
                  }}
                >
                  {keyframe.name === 'Spin' ? '↻' : '✨'}
                </div>
              </div>
              <div className="keyframe-info">
                <div className="keyframe-name">{keyframe.name}</div>
                <code className="keyframe-token">{keyframe.token}</code>
                <p className="keyframe-usage">{keyframe.usage}</p>
                <code className="keyframe-class">.{keyframe.className}</code>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Examples */}
      <div className="section">
        <h3 className="section-title">Interactive Examples</h3>
        <div className="examples-grid">
          
          {/* Button Animation */}
          <div className="example-card">
            <h4 className="example-title">Animated Button</h4>
            <div className="example-demo">
              <button 
                className="animated-button"
                style={{
                  padding: 'var(--spacing-3) var(--spacing-6)',
                  backgroundColor: 'var(--color-azure-500)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  cursor: 'pointer',
                  transition: 'var(--transition-button-hover)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'var(--scale-button-hover)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-button-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = 'var(--scale-button-active)';
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = 'var(--scale-button-hover)';
                }}
              >
                Hover & Click Me
              </button>
            </div>
            <p className="example-description">
              Combines scale transform with shadow animation
            </p>
          </div>

          {/* Loading Animation */}
          <div className="example-card">
            <h4 className="example-title">Loading States</h4>
            <div className="example-demo">
              <div className="loading-examples">
                <div 
                  className="spinner"
                  style={{
                    width: '24px',
                    height: '24px',
                    border: '2px solid var(--color-border-secondary)',
                    borderTop: '2px solid var(--color-azure-500)',
                    borderRadius: '50%',
                    animation: 'var(--keyframes-spin)'
                  }}
                />
                <div 
                  className="pulse-dot"
                  style={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: 'var(--color-azure-500)',
                    borderRadius: '50%',
                    animation: 'var(--keyframes-pulse)'
                  }}
                />
                <div className="skeleton" style={{
                  width: '120px',
                  height: '16px',
                  backgroundColor: 'var(--color-background-tertiary)',
                  borderRadius: 'var(--radius-sm)',
                  animation: 'var(--keyframes-pulse)'
                }} />
              </div>
            </div>
            <p className="example-description">
              Spin, pulse, and skeleton loading animations
            </p>
          </div>

          {/* Modal Animation */}
          <div className="example-card">
            <h4 className="example-title">Modal Entrance</h4>
            <div className="example-demo">
              <button 
                className="modal-trigger"
                style={{
                  padding: 'var(--spacing-2) var(--spacing-4)',
                  backgroundColor: 'var(--color-secondary-500)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--font-size-sm)',
                  cursor: 'pointer',
                  transition: 'var(--transition-hover)'
                }}
                onClick={(e) => {
                  const modal = e.currentTarget.nextElementSibling as HTMLElement;
                  if (modal.style.display === 'none' || !modal.style.display) {
                    modal.style.display = 'flex';
                    modal.style.animation = 'var(--keyframes-fade-in)';
                    const content = modal.querySelector('.modal-content') as HTMLElement;
                    content.style.animation = 'var(--keyframes-slide-in-down)';
                  } else {
                    modal.style.animation = 'var(--keyframes-fade-out)';
                    setTimeout(() => {
                      modal.style.display = 'none';
                    }, 250);
                  }
                }}
              >
                Show Modal
              </button>
              <div 
                className="demo-modal"
                style={{
                  display: 'none',
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 9999
                }}
                onClick={(e) => {
                  if (e.target === e.currentTarget) {
                    e.currentTarget.style.animation = 'var(--keyframes-fade-out)';
                    setTimeout(() => {
                      e.currentTarget.style.display = 'none';
                    }, 250);
                  }
                }}
              >
                <div 
                  className="modal-content"
                  style={{
                    padding: 'var(--spacing-6)',
                    backgroundColor: 'var(--color-background-primary)',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-xl)',
                    maxWidth: '300px',
                    textAlign: 'center'
                  }}
                >
                  <h5 style={{
                    fontSize: 'var(--font-size-lg)',
                    fontWeight: 'var(--font-weight-semibold)',
                    marginBottom: 'var(--spacing-3)',
                    color: 'var(--color-text-primary)'
                  }}>
                    Animated Modal
                  </h5>
                  <p style={{
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-text-secondary)',
                    marginBottom: 'var(--spacing-4)',
                    lineHeight: 'var(--line-height-relaxed)'
                  }}>
                    This modal uses fade and slide animations for entrance.
                  </p>
                  <button 
                    style={{
                      padding: 'var(--spacing-2) var(--spacing-4)',
                      backgroundColor: 'var(--color-azure-500)',
                      color: 'white',
                      border: 'none',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--font-size-sm)',
                      cursor: 'pointer'
                    }}
                    onClick={(e) => {
                      const modal = e.currentTarget.closest('.demo-modal') as HTMLElement;
                      modal.style.animation = 'var(--keyframes-fade-out)';
                      setTimeout(() => {
                        modal.style.display = 'none';
                      }, 250);
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
            <p className="example-description">
              Click to see modal entrance animation
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .animation-showcase {
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

        .duration-grid,
        .easing-grid,
        .transition-grid,
        .keyframe-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-4);
        }

        .duration-card,
        .easing-card,
        .transition-card,
        .keyframe-card {
          padding: var(--spacing-4);
          border: 1px solid var(--color-border-secondary);
          border-radius: var(--radius-md);
          background-color: var(--color-background-secondary);
          text-align: center;
        }

        .duration-demo,
        .easing-demo,
        .keyframe-demo {
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--spacing-3);
        }

        .duration-name,
        .easing-name,
        .transition-name,
        .keyframe-name {
          font-size: var(--font-size-sm);
          font-weight: var(--font-weight-medium);
          color: var(--color-text-primary);
          margin-bottom: var(--spacing-1);
        }

        .duration-token,
        .easing-token,
        .transition-token,
        .keyframe-token,
        .keyframe-class {
          font-family: var(--font-family-mono);
          font-size: var(--font-size-xs);
          color: var(--color-text-tertiary);
          background-color: var(--color-background-tertiary);
          padding: var(--spacing-0.5) var(--spacing-1);
          border-radius: var(--radius-sm);
          display: block;
          margin-bottom: var(--spacing-1);
        }

        .duration-value {
          font-size: var(--font-size-xs);
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-1);
        }

        .duration-usage,
        .easing-usage,
        .transition-usage,
        .keyframe-usage {
          font-size: var(--font-size-xs);
          color: var(--color-text-secondary);
          margin: 0;
          line-height: var(--line-height-snug);
        }

        .transition-hint {
          font-size: var(--font-size-xs);
          color: var(--color-text-tertiary);
          font-style: italic;
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
          display: flex;
          justify-content: center;
          align-items: center;
          padding: var(--spacing-4);
          background-color: var(--color-background-primary);
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border-tertiary);
          margin-bottom: var(--spacing-2);
          min-height: 80px;
        }

        .example-description {
          font-size: var(--font-size-xs);
          color: var(--color-text-secondary);
          margin: 0;
          text-align: center;
          line-height: var(--line-height-relaxed);
        }

        .loading-examples {
          display: flex;
          align-items: center;
          gap: var(--spacing-4);
        }

        /* Keyframes */
        @keyframes expandBar {
          0% { width: 10px; opacity: 0.5; }
          100% { width: 100px; opacity: 1; }
        }

        @keyframes moveBall {
          0% { transform: translateX(0); }
          100% { transform: translateX(80px); }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};
