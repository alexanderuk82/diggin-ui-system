# 📚 Design System: Figma → Storybook Instructions

## 🎯 Objetivo
Construir un Design System completo desde Figma a Storybook usando React, TypeScript, CSS, siguiendo Atomic Design y cumpliendo WCAG AA.

---

## 📋 Tabla de Contenidos
1. [Setup Inicial](#setup-inicial)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Workflow de Componentes](#workflow-de-componentes)
4. [Clasificación Atomic Design](#clasificación-atomic-design)
5. [Pipeline de Automatización](#pipeline-de-automatización)
6. [Testing y Accesibilidad](#testing-y-accesibilidad)
7. [Documentación en Storybook](#documentación-en-storybook)
8. [Deployment](#deployment)

---

## 🚀 Setup Inicial

### 1. Inicializar Proyecto

```bash
# Crear proyecto React con TypeScript
npx create-react-app design-system --template typescript
cd design-system

# Instalar Storybook
npx storybook@latest init

# Instalar dependencias esenciales
npm install --save-dev \
  @storybook/addon-a11y \
  @storybook/addon-docs \
  @storybook/addon-essentials \
  @storybook/addon-links \
  @storybook/addon-interactions \
  @storybook/testing-library \
  @testing-library/react \
  @testing-library/jest-dom \
  @testing-library/user-event \
  axe-core \
  jest-axe \
  chromatic
```

### 2. Configurar Storybook (.storybook/main.ts)

```typescript
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
```

### 3. Configurar Testing (jest.config.js)

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
```

---

## 📁 Estructura del Proyecto

```
design-system/
├── .github/
│   └── workflows/
│       ├── chromatic.yml
│       ├── tests.yml
│       └── deploy.yml
├── .storybook/
│   ├── main.ts
│   ├── preview.ts
│   └── theme.ts
├── src/
│   ├── tokens/
│   │   ├── colors.css
│   │   ├── typography.css
│   │   ├── spacing.css
│   │   ├── breakpoints.css
│   │   └── shadows.css
│   ├── components/
│   │   ├── atoms/
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.css
│   │   │   │   ├── Button.stories.tsx
│   │   │   │   ├── Button.test.tsx
│   │   │   │   ├── Button.a11y.test.tsx
│   │   │   │   └── README.md
│   │   │   ├── Typography/
│   │   │   └── ...
│   │   ├── molecules/
│   │   │   ├── SearchBar/
│   │   │   ├── FormField/
│   │   │   └── ...
│   │   ├── organisms/
│   │   │   ├── Header/
│   │   │   ├── NavigationBar/
│   │   │   └── ...
│   │   ├── templates/
│   │   │   └── PageLayout/
│   │   └── pages/
│   │       └── HomePage/
│   ├── utils/
│   │   ├── accessibility/
│   │   └── responsive/
│   └── stories/
│       └── Introduction.stories.mdx
├── docs/
│   ├── ACCESSIBILITY.md
│   ├── CONTRIBUTING.md
│   └── TESTING.md
└── package.json
```

---

## 🔄 Workflow de Componentes

### Proceso Paso a Paso:

#### 1️⃣ **Recepción de Diseño (Tú proporcionas)**
- Capturas de pantalla: Desktop, Tablet, Mobile
- Especificaciones de valores
- Estados del componente

#### 2️⃣ **Clasificación (Yo clasifico)**
- Determinar nivel Atomic: Atom, Molecule, Organism, Template, Page
- Identificar dependencias

#### 3️⃣ **Implementación (Yo desarrollo)**

##### A. Crear estructura del componente:
```typescript
// Button.tsx (Ejemplo de ATOM)
import React from 'react';
import './Button.css';

export interface ButtonProps {
  /** Texto del botón */
  children: React.ReactNode;
  /** Variante visual */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /** Tamaño del botón */
  size?: 'small' | 'medium' | 'large';
  /** Estado deshabilitado */
  disabled?: boolean;
  /** Función al hacer click */
  onClick?: () => void;
  /** Tipo de botón HTML */
  type?: 'button' | 'submit' | 'reset';
  /** Atributos ARIA para accesibilidad */
  ariaLabel?: string;
  ariaPressed?: boolean;
  ariaExpanded?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  type = 'button',
  ariaLabel,
  ariaPressed,
  ariaExpanded,
  ...props
}) => {
  return (
    <button
      className={`btn btn--${variant} btn--${size}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      aria-expanded={ariaExpanded}
      {...props}
    >
      {children}
    </button>
  );
};
```

##### B. Estilos responsivos:
```css
/* Button.css */
.btn {
  /* Base styles */
  font-family: var(--font-primary);
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
  cursor: pointer;
  
  /* Focus visible for keyboard navigation */
  &:focus-visible {
    outline: 3px solid var(--color-focus);
    outline-offset: 2px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .btn--medium {
    padding: 12px 24px;
    font-size: 16px;
  }
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
  .btn--medium {
    padding: 10px 20px;
    font-size: 15px;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .btn--medium {
    padding: 8px 16px;
    font-size: 14px;
    width: 100%; /* Full width on mobile */
  }
}
```

##### C. Story con documentación:
```typescript
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `
## 🎨 Button Component

### Descripción
Componente botón base del sistema de diseño, cumple con WCAG AA.

### Accesibilidad (WCAG AA)
- ✅ Color contrast ratio: 4.5:1 minimum
- ✅ Focus indicator visible
- ✅ Keyboard navigable
- ✅ Screen reader support con aria-labels
- ✅ Touch target: minimum 44x44px

### Responsive Behavior
- **Desktop (≥1024px)**: Tamaño estándar
- **Tablet (768px-1023px)**: Tamaño reducido
- **Mobile (<768px)**: Full width, tamaño táctil optimizado
        `
      }
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true
          }
        ]
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Estilo visual del botón'
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del botón'
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
    </div>
  ),
};
```

##### D. Tests de funcionalidad:
```typescript
// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  test('renders with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('can be disabled', () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByText('Click me')).toBeDisabled();
  });
});
```

##### E. Tests de accesibilidad:
```typescript
// Button.a11y.test.tsx
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from './Button';

expect.extend(toHaveNoViolations);

describe('Button Accessibility', () => {
  test('should not have basic accessibility violations', async () => {
    const { container } = render(<Button>Click me</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('should have proper ARIA attributes', () => {
    const { getByRole } = render(
      <Button ariaLabel="Submit form" ariaPressed={true}>
        Submit
      </Button>
    );
    const button = getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Submit form');
    expect(button).toHaveAttribute('aria-pressed', 'true');
  });

  test('focus should be visible', () => {
    const { getByRole } = render(<Button>Click me</Button>);
    const button = getByRole('button');
    button.focus();
    expect(button).toHaveFocus();
  });
});
```

---

## 🎯 Clasificación Atomic Design

### Tu Lista de Componentes Clasificados:

#### ⚛️ **ATOMS** (Elementos indivisibles)
- **Typography** ✅
- **Colors** ✅
- **Button** ✅
- **Input** ✅
- **Checkbox** ✅
- **RadioButton** ✅
- **Toggler** ✅
- **Icons** ✅
- **Logo** ✅
- **Image** ✅
- **Avatar** ✅
- **Badge** ✅
- **Tag** ✅
- **Divider** ✅
- **Tooltip** ✅

#### 🧬 **MOLECULES** (Combinación simple de atoms)
- **Dropdown** (Input + List)
- **Date picker** (Input + Calendar)
- **Time picker** (Input + Clock)
- **Range Slider** (Input + Track)
- **Upload** (Button + Input)
- **Rate** (Icons group)
- **Progress** (Bar + Label)
- **Search** (Input + Icon)
- **Step** (Number + Label)

#### 🦠 **ORGANISMS** (Componentes complejos)
- **Header** (Logo + Navigation + Actions)
- **Navigation bar** (Links + Dropdowns)
- **Footer** (Links + Info + Social)
- **Sidebar** (Navigation + User info)
- **Calendar** (Grid + Controls)
- **Table** (Headers + Rows + Actions)
- **Tabs** (Tab list + Panels)
- **Collapse** (Header + Content)
- **Tree** (Hierarchical list)
- **Timeline** (Events + Connector)
- **Breadcrumbs** (Link trail)
- **Pagination** (Page controls)
- **Filter** (Multiple inputs)
- **Slider/Carousel** (Images + Controls)
- **Comment** (Avatar + Text + Actions)
- **Modal** (Overlay + Content)
- **Notification** (Alert + Actions)

#### 📄 **TEMPLATES** (Estructuras de página)
- **Grid** (Layout system)
- **Layout** (Page structure)
- **Empty** (Empty state)
- **Error Pages** (404, 500, etc.)

#### 📱 **PAGES** (Instancias específicas)
- **User** (Profile page)
- **Screens** (Complete app screens)

### Componentes Especiales:
- **Loader** → Atom (visual feedback)
- **Cookies** → Molecule (notification + actions)
- **Arrow Back to Top** → Atom (single action)
- **Corner Radius** → Token (design token)
- **Shadow** → Token (design token)
- **Scroll** → Utility (behavior)

---

## 🔧 Pipeline de Automatización

### GitHub Actions (.github/workflows/tests.yml)

```yaml
name: Tests and A11y

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run unit tests
      run: npm test -- --coverage
      
    - name: Run accessibility tests
      run: npm run test:a11y
      
    - name: Build Storybook
      run: npm run build-storybook
      
    - name: Run Storybook tests
      run: npm run test-storybook
      
    - name: Upload coverage
      uses: codecov/codecov-action@v3
```

### Chromatic Integration (.github/workflows/chromatic.yml)

```yaml
name: Chromatic

on:
  push:
    branches: [main]

jobs:
  chromatic:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
      with:
        fetch-depth: 0
        
    - name: Install dependencies
      run: npm ci
      
    - name: Publish to Chromatic
      uses: chromaui/action@v1
      with:
        projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
        exitZeroOnChanges: true
```

### Deploy to Netlify/Vercel (.github/workflows/deploy.yml)

```yaml
name: Deploy Storybook

on:
  push:
    branches: [main]

jobs:
  deploy-netlify:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Install and Build
      run: |
        npm ci
        npm run build-storybook
        
    - name: Deploy to Netlify
      uses: netlify/actions/cli@master
      with:
        args: deploy --prod --dir=storybook-static
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        
  deploy-vercel:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Install and Build
      run: |
        npm ci
        npm run build-storybook
        
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID}}
        vercel-project-id: ${{ secrets.PROJECT_ID}}
        working-directory: ./storybook-static
```

---

## ✅ Testing y Accesibilidad

### Checklist WCAG AA para cada componente:

#### 1. **Perceivable**
- [ ] Color contrast ratio ≥ 4.5:1 (texto normal)
- [ ] Color contrast ratio ≥ 3:1 (texto grande)
- [ ] No depender solo del color
- [ ] Texto alternativo para imágenes

#### 2. **Operable**
- [ ] Navegable por teclado
- [ ] Focus visible
- [ ] Skip links disponibles
- [ ] Touch targets ≥ 44x44px

#### 3. **Understandable**
- [ ] Labels descriptivos
- [ ] Mensajes de error claros
- [ ] Instrucciones claras
- [ ] Idioma definido

#### 4. **Robust**
- [ ] HTML válido
- [ ] ARIA roles correctos
- [ ] Compatible con screen readers

### Scripts de Testing (package.json)

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:a11y": "jest --testMatch='**/*.a11y.test.{ts,tsx}'",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "test-storybook": "test-storybook",
    "chromatic": "chromatic --project-token=$CHROMATIC_PROJECT_TOKEN",
    "lint": "eslint src --ext .ts,.tsx",
    "format": "prettier --write 'src/**/*.{ts,tsx,css}'"
  }
}
```

---

## 📖 Documentación en Storybook

### Template de Documentación por Componente:

```markdown
# Component Name

## Overview
Brief description of the component and its purpose.

## Usage
\```jsx
import { Button } from '@design-system/components';

<Button variant="primary" size="medium">
  Click me
</Button>
\```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'primary' \| 'secondary' | 'primary' | Visual style |
| size | 'small' \| 'medium' \| 'large' | 'medium' | Component size |

## Accessibility
- WCAG AA compliant
- Keyboard navigation support
- Screen reader tested with NVDA/JAWS
- Focus management implemented

## Responsive Behavior
- **Mobile (<768px)**: Full width, touch optimized
- **Tablet (768px-1023px)**: Adjusted padding
- **Desktop (≥1024px)**: Standard size

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Testing
- Unit tests: ✅ 100% coverage
- A11y tests: ✅ No violations
- Visual tests: ✅ Chromatic approved

## Migration Guide
Instructions for migrating from previous versions.

## Related Components
- [Link to related component]
- [Link to related component]
```

---

## 🚀 Deployment

### 1. Configurar Netlify

```toml
# netlify.toml
[build]
  command = "npm run build-storybook"
  publish = "storybook-static"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
```

### 2. Configurar Vercel

```json
// vercel.json
{
  "buildCommand": "npm run build-storybook",
  "outputDirectory": "storybook-static",
  "framework": null
}
```

### 3. URLs de Producción
- **Storybook Production**: https://your-design-system.netlify.app
- **Storybook Preview**: https://your-design-system.vercel.app
- **Chromatic**: https://www.chromatic.com/library?appId=YOUR_APP_ID

---

## 🔄 Flujo de Trabajo Continuo

### Para cada nuevo componente:

1. **Tú envías** → Capturas (Desktop/Tablet/Mobile) + Especificaciones
2. **Yo clasifico** → Atomic level + Dependencies
3. **Yo implemento** → Component + Styles + Story + Tests
4. **GitHub Actions** → Run tests automatically
5. **Review** → Tú revisas en Storybook preview
6. **Merge** → Auto-deploy to production
7. **Monitor** → Chromatic visual regression

### Comandos Rápidos:

```bash
# Desarrollo local
npm run storybook

# Crear nuevo componente
npm run generate:component [name] [atomic-level]

# Verificar accesibilidad
npm run test:a11y

# Build para producción
npm run build-storybook

# Deploy manual
npm run deploy
```

---

## 📝 Notas Importantes

1. **Orden de implementación**:
   - Tokens → Atoms → Molecules → Organisms → Templates → Pages

2. **Cada componente DEBE tener**:
   - Component file (.tsx)
   - Styles (.css with responsive)
   - Story (.stories.tsx)
   - Unit tests (.test.tsx)
   - A11y tests (.a11y.test.tsx)
   - Documentation (README.md)

3. **Design Tokens primero**:
   - Colors
   - Typography (scales, families)
   - Spacing (scale system)
   - Breakpoints
   - Shadows
   - Border radius

4. **Sincronización Figma-Code**:
   - Mantener nombres consistentes
   - Documentar variaciones
   - Capturar todos los estados

---

## 🎯 Próximos Pasos

1. **Espero que me envíes**:
   - Primera captura: Typography (Desktop/Tablet/Mobile)
   - Valores específicos (font-size, line-height, weight)
   - Escala tipográfica completa

2. **Yo te entregaré**:
   - Clasificación Atomic
   - Implementación completa
   - Tests funcionando
   - Storybook documentado

3. **Repetimos el proceso** para cada componente de tu lista

---

## 📞 Contacto y Soporte

Para cualquier duda durante el proceso, pregunta sobre:
- Clasificación de componentes
- Mejores prácticas de accesibilidad
- Optimización de performance
- Estrategias de testing
- Documentación adicional

---

**¡Listo para comenzar! Envíame las capturas de Typography cuando estés listo.** 🚀
