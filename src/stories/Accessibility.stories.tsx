import type { Meta } from '@storybook/react';

const meta: Meta = {
  title: '♿ Accessibility/Guidelines',
  tags: ['autodocs'],
};

export default meta;

/**
 * # ♿ Accessibility Guidelines
 * 
 * Accessibility is a core principle of the Diggin UI System. Every component is designed and tested to ensure inclusive experiences for all users.
 * 
 * ## 🎯 Our Commitment
 * 
 * - **WCAG AA Compliance**: All components meet or exceed WCAG 2.1 AA standards
 * - **Screen Reader Support**: Full compatibility with assistive technologies
 * - **Keyboard Navigation**: Complete keyboard accessibility for all interactions
 * - **Color Independence**: Information never conveyed by color alone
 * - **Flexible Typography**: Readable at all standard zoom levels
 * 
 * ## 🔧 Implementation Standards
 * 
 * ### Color and Contrast
 * - **Text Contrast**: Minimum 4.5:1 ratio for normal text
 * - **Large Text**: Minimum 3:1 ratio for text 18px+ or 14px+ bold
 * - **UI Elements**: Minimum 3:1 ratio for interactive elements
 * - **High Contrast**: Enhanced ratios available in high contrast theme
 * 
 * ### Typography
 * - **Scalable Text**: All text scales with browser settings
 * - **Readable Fonts**: High-legibility font families
 * - **Line Height**: Minimum 1.5 for body text
 * - **Line Length**: 45-75 characters for optimal readability
 * 
 * ### Focus Management
 * - **Visible Focus**: Clear focus indicators on all interactive elements
 * - **Focus Order**: Logical tab sequence following visual order
 * - **Focus Trapping**: Proper focus management in modals and dialogs
 * - **Skip Links**: Available for keyboard users to bypass navigation
 * 
 * ### Semantic Markup
 * - **HTML5 Elements**: Proper semantic elements for structure
 * - **ARIA Labels**: Descriptive labels for screen readers
 * - **Roles and States**: Appropriate ARIA roles and state management
 * - **Landmarks**: Clear page structure with landmark roles
 * 
 * ## 🧪 Testing Approach
 * 
 * ### Automated Testing
 * ```javascript
 * // Every component includes accessibility tests
 * import { axe, toHaveNoViolations } from 'jest-axe';
 * 
 * test('Button should be accessible', async () => {
 *   const { container } = render(<Button>Click me</Button>);
 *   const results = await axe(container);
 *   expect(results).toHaveNoViolations();
 * });
 * ```
 * 
 * ### Manual Testing
 * - **Screen Reader Testing**: VoiceOver, NVDA, JAWS compatibility
 * - **Keyboard Testing**: Complete functionality without mouse
 * - **Zoom Testing**: Usability at 200% zoom
 * - **Color Testing**: Functionality without color perception
 * 
 * ## ⌨️ Keyboard Support
 * 
 * All interactive components support standard keyboard patterns:
 * 
 * | Element | Keys | Behavior |
 * |---------|------|----------|
 * | Button | `Space`, `Enter` | Activates button |
 * | Link | `Enter` | Follows link |
 * | Input | `Tab`, arrow keys | Navigation and editing |
 * | Modal | `Esc` | Closes modal |
 * | Menu | `Arrow keys`, `Enter`, `Esc` | Navigate and select |
 * | Tabs | `Arrow keys`, `Home`, `End` | Switch between tabs |
 * 
 * ## 🎨 Visual Considerations
 * 
 * ### Reduced Motion
 * Respects user motion preferences:
 * 
 * ```css
 * @media (prefers-reduced-motion: reduce) {
 *   * {
 *     animation-duration: 0.01ms !important;
 *     transition-duration: 0.01ms !important;
 *   }
 * }
 * ```
 * 
 * ### Theme Support
 * Multiple themes for different needs:
 * - **Light Theme**: Default, optimized for bright environments
 * - **Dark Theme**: Reduced eye strain in low-light conditions  
 * - **High Contrast**: Enhanced contrast for visual impairments
 * 
 * ## 📝 Content Guidelines
 * 
 * ### Writing for Accessibility
 * - **Clear Language**: Use simple, direct language
 * - **Descriptive Links**: Link text describes destination
 * - **Error Messages**: Specific, actionable error descriptions
 * - **Instructions**: Clear, step-by-step guidance
 * 
 * ### Alternative Text
 * - **Informative Images**: Describe the image content
 * - **Functional Images**: Describe the image function
 * - **Decorative Images**: Use empty alt text (alt="")
 * - **Complex Images**: Provide detailed descriptions
 * 

 * ## 🤝 Contributing to Accessibility
 * 
 * When contributing to the design system:
 * 
 * 1. **Test with Screen Readers**: Verify component behavior
 * 2. **Check Keyboard Navigation**: Ensure full keyboard access
 * 3. **Validate Contrast**: Meet minimum contrast requirements
 * 4. **Write Tests**: Include accessibility tests with components
 * 5. **Document Patterns**: Explain usage and best practices
 * 
 * ## 📚 Additional Resources
 * 
 * - [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
 * - [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
 * - [WebAIM Resources](https://webaim.org/resources/)
 * - [Inclusive Design Principles](https://inclusivedesignprinciples.org/)
 * 
 * ---
 * 
 * *Accessibility is not an afterthought – it's integral to great design.*
 */
export const AccessibilityGuidelines = () => (
  <div style={{ fontFamily: 'var(--font-family-primary)', maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
    <h1>♿ Accessibility Guidelines</h1>
    <p>Accessibility is a core principle of the Diggin UI System. Every component is designed and tested to ensure inclusive experiences for all users.</p>
    <h2>🎯 Our Commitment</h2>
    <ul>
      <li><b>WCAG AA Compliance</b>: All components meet or exceed WCAG 2.1 AA standards</li>
      <li><b>Screen Reader Support</b>: Full compatibility with assistive technologies</li>
      <li><b>Keyboard Navigation</b>: Complete keyboard accessibility for all interactions</li>
      <li><b>Color Independence</b>: Information never conveyed by color alone</li>
      <li><b>Flexible Typography</b>: Readable at all standard zoom levels</li>
    </ul>
    <h2>🔧 Implementation Standards</h2>
    <h3>Color and Contrast</h3>
    <ul>
      <li><b>Text Contrast</b>: Minimum 4.5:1 ratio for normal text</li>
      <li><b>Large Text</b>: Minimum 3:1 ratio for text 18px+ or 14px+ bold</li>
      <li><b>UI Elements</b>: Minimum 3:1 ratio for interactive elements</li>
      <li><b>High Contrast</b>: Enhanced ratios available in high contrast theme</li>
    </ul>
    <h3>Typography</h3>
    <ul>
      <li><b>Scalable Text</b>: All text scales with browser settings</li>
      <li><b>Readable Fonts</b>: High-legibility font families</li>
      <li><b>Line Height</b>: Minimum 1.5 for body text</li>
      <li><b>Line Length</b>: 45-75 characters for optimal readability</li>
    </ul>
    <h3>Focus Management</h3>
    <ul>
      <li><b>Visible Focus</b>: Clear focus indicators on all interactive elements</li>
      <li><b>Focus Order</b>: Logical tab sequence following visual order</li>
      <li><b>Focus Trapping</b>: Proper focus management in modals and dialogs</li>
      <li><b>Skip Links</b>: Available for keyboard users to bypass navigation</li>
    </ul>
    <h3>Semantic Markup</h3>
    <ul>
      <li><b>HTML5 Elements</b>: Proper semantic elements for structure</li>
      <li><b>ARIA Labels</b>: Descriptive labels for screen readers</li>
      <li><b>Roles and States</b>: Appropriate ARIA roles and state management</li>
      <li><b>Landmarks</b>: Clear page structure with landmark roles</li>
    </ul>
    <h2>🧪 Testing Approach</h2>
    <h3>Automated Testing</h3>
    <pre style={{ background: '#f5f5f5', padding: '1em', borderRadius: 'var(--radius-md)' }}>
{`import { axe, toHaveNoViolations } from 'jest-axe';

test('Button should be accessible', async () => {
  const { container } = render(<Button>Click me</Button>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});`}
    </pre>
    <h3>Manual Testing</h3>
    <ul>
      <li><b>Screen Reader Testing</b>: VoiceOver, NVDA, JAWS compatibility</li>
      <li><b>Keyboard Testing</b>: Complete functionality without mouse</li>
      <li><b>Zoom Testing</b>: Usability at 200% zoom</li>
      <li><b>Color Testing</b>: Functionality without color perception</li>
    </ul>
    <h2>⌨️ Keyboard Support</h2>
    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1.5rem' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ccc', padding: 4 }}>Element</th>
          <th style={{ border: '1px solid #ccc', padding: 4 }}>Keys</th>
          <th style={{ border: '1px solid #ccc', padding: 4 }}>Behavior</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style={{ border: '1px solid #ccc', padding: 4 }}>Button</td><td style={{ border: '1px solid #ccc', padding: 4 }}><code>Space</code>, <code>Enter</code></td><td style={{ border: '1px solid #ccc', padding: 4 }}>Activates button</td></tr>
        <tr><td style={{ border: '1px solid #ccc', padding: 4 }}>Link</td><td style={{ border: '1px solid #ccc', padding: 4 }}><code>Enter</code></td><td style={{ border: '1px solid #ccc', padding: 4 }}>Follows link</td></tr>
        <tr><td style={{ border: '1px solid #ccc', padding: 4 }}>Input</td><td style={{ border: '1px solid #ccc', padding: 4 }}><code>Tab</code>, arrow keys</td><td style={{ border: '1px solid #ccc', padding: 4 }}>Navigation and editing</td></tr>
        <tr><td style={{ border: '1px solid #ccc', padding: 4 }}>Modal</td><td style={{ border: '1px solid #ccc', padding: 4 }}><code>Esc</code></td><td style={{ border: '1px solid #ccc', padding: 4 }}>Closes modal</td></tr>
        <tr><td style={{ border: '1px solid #ccc', padding: 4 }}>Menu</td><td style={{ border: '1px solid #ccc', padding: 4 }}><code>Arrow keys</code>, <code>Enter</code>, <code>Esc</code></td><td style={{ border: '1px solid #ccc', padding: 4 }}>Navigate and select</td></tr>
        <tr><td style={{ border: '1px solid #ccc', padding: 4 }}>Tabs</td><td style={{ border: '1px solid #ccc', padding: 4 }}><code>Arrow keys</code>, <code>Home</code>, <code>End</code></td><td style={{ border: '1px solid #ccc', padding: 4 }}>Switch between tabs</td></tr>
      </tbody>
    </table>
    <h2>🎨 Visual Considerations</h2>
    <h3>Reduced Motion</h3>
    <pre style={{ background: '#f5f5f5', padding: '1em', borderRadius: 'var(--radius-md)' }}>
{`@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}`}
    </pre>
    <h3>Theme Support</h3>
    <ul>
      <li><b>Light Theme</b>: Default, optimized for bright environments</li>
      <li><b>Dark Theme</b>: Reduced eye strain in low-light conditions</li>
      <li><b>High Contrast</b>: Enhanced contrast for visual impairments</li>
    </ul>
    <h2>📝 Content Guidelines</h2>
    <h3>Writing for Accessibility</h3>
    <ul>
      <li><b>Clear Language</b>: Use simple, direct language</li>
      <li><b>Descriptive Links</b>: Link text describes destination</li>
      <li><b>Error Messages</b>: Specific, actionable error descriptions</li>
      <li><b>Instructions</b>: Clear, step-by-step guidance</li>
    </ul>
    <h3>Alternative Text</h3>
    <ul>
      <li><b>Informative Images</b>: Describe the image content</li>
      <li><b>Functional Images</b>: Describe the image function</li>
      <li><b>Decorative Images</b>: Use empty alt text (alt="")</li>
      <li><b>Complex Images</b>: Provide detailed descriptions</li>
    </ul>
    <h2>🤝 Contributing to Accessibility</h2>
    <ol>
      <li><b>Test with Screen Readers</b>: Verify component behavior</li>
      <li><b>Check Keyboard Navigation</b>: Ensure full keyboard access</li>
      <li><b>Validate Contrast</b>: Meet minimum contrast requirements</li>
      <li><b>Write Tests</b>: Include accessibility tests with components</li>
      <li><b>Document Patterns</b>: Explain usage and best practices</li>
    </ol>
    <h2>📚 Additional Resources</h2>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer">WCAG 2.1 Guidelines</a></li>
      <li><a href="https://www.w3.org/WAI/ARIA/apg/" target="_blank" rel="noopener noreferrer">ARIA Authoring Practices</a></li>
      <li><a href="https://webaim.org/resources/" target="_blank" rel="noopener noreferrer">WebAIM Resources</a></li>
      <li><a href="https://inclusivedesignprinciples.org/" target="_blank" rel="noopener noreferrer">Inclusive Design Principles</a></li>
    </ul>
    <hr />
    <p><i>Accessibility is not an afterthought – it's integral to great design.</i></p>
  </div>
);
