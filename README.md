# 🎨 Diggin UI System

A modern, accessible, and customizable React component library built with TypeScript, featuring comprehensive design tokens and extensive testing.

## ✨ Features

- 🎯 **TypeScript First**: Full type safety and excellent developer experience
- ♿ **Accessibility**: WCAG AA compliant components with comprehensive a11y testing
- 🎨 **Design Tokens**: Consistent design system with CSS custom properties
- 📱 **Responsive**: Mobile-first approach with flexible breakpoints
- 🧪 **Well Tested**: Unit tests, visual regression tests, and accessibility tests
- 📖 **Storybook**: Interactive component documentation and playground
- 🚀 **Modern Tooling**: Built with Vite, tested with Vitest, and deployed automatically

## 🚀 Quick Start

```bash
# Install the package
npm install @diggin/ui-system
# or
pnpm add @diggin/ui-system
# or
yarn add @diggin/ui-system
```

```tsx
import { Button, ThemeProvider } from '@diggin/ui-system';
import '@diggin/ui-system/dist/style.css';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary" size="medium">
        Get Started
      </Button>
    </ThemeProvider>
  );
}
```

## 📚 Documentation

Visit our [Storybook documentation](https://your-username.github.io/diggin-ui-system) to explore all components and their variants.

## 🛠️ Development

```bash
# Clone the repository
git clone https://github.com/your-username/diggin-ui-system.git
cd diggin-ui-system

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Start Storybook
pnpm storybook

# Run tests
pnpm test

# Build for production
pnpm build
```

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Run tests with coverage
pnpm test:coverage

# Run accessibility tests
pnpm test:a11y

# Run visual regression tests
pnpm chromatic
```

## 📦 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm storybook` - Start Storybook
- `pnpm build-storybook` - Build Storybook for production
- `pnpm test` - Run unit tests
- `pnpm test:coverage` - Run tests with coverage
- `pnpm test:a11y` - Run accessibility tests
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm type-check` - Run TypeScript compiler check

## 🎨 Design Tokens

The design system includes comprehensive design tokens for:

- Colors (semantic and primitive)
- Typography (font sizes, weights, line heights)
- Spacing (margins, paddings, gaps)
- Shadows and effects
- Border radius and borders
- Z-index values

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Alexander's Studio** - UX Engineer

If you have any questions or suggestions, feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/alexandersstudio/).

---

Made with ❤️ by Alexander's Studio
