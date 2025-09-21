import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { 
  SaveIcon, 
  AddIcon, 
  ClipIcon, 
  LinkExternalIcon, 
  Icon6, 
  HashIcon1, 
  HashIcon2, 
  LoaderIcon,
  ICON_COMPONENTS,
  getIconComponent 
} from './Icons';
import { getIconSelectOptions, AVAILABLE_COLORS, getColorVariable } from '../../../utils/iconLoader';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Button

## Button Component

A versatile button component that follows the design system tokens and WCAG AA accessibility standards.

## Features

- **Three variants**: Primary (main action), Secondary (secondary action), Text (subtle action)
- **Three sizes**: Small (32px), Medium (40px), Large (52px)  
- **Interactive states**: Default, Hover, Active, Disabled, Loading
- **Icon support**: Left or right icon placement with real SVG icons from design system
- **Accessibility**: WCAG AA compliant with proper ARIA attributes
- **Responsive**: Minimum 44px touch target on mobile devices

## Design Tokens Used

- **Colors**: #1D4ED8 (Corporate/blue/main) extracted directly from Figma
- **Typography**: Poppins font family - Regular 400, 18px, line-height 1.32
- **Spacing**: Exact Figma measurements - 12px vertical, 52px horizontal padding, 8px gap
- **Shadows**: Elevation levels for depth and visual hierarchy
- **Border Radius**: 4px exact from Figma specifications

## Real SVG Icons

This component uses real SVG icons extracted from the design system:
- **SaveIcon**: Diskette icon for save actions
- **AddIcon**: Plus symbol for add/create actions  
- **LoaderIcon**: Animated spinning dots for loading states

All icons are 18x18px and optimized for accessibility with proper color contrast.

## Implementation

Button component follows atomic design principles and uses exact specifications from Figma:
- Primary buttons use #1D4ED8 background with #FFFFFF text
- All measurements match Figma precisely (4px radius, 12px/52px padding)
- Real SVG icons from /icons folder instead of placeholder icons
- Proper TypeScript interfaces for type safety
- Full accessibility compliance with ARIA attributes

## Correct Usage

### Icons with Design Tokens

✅ **CORRECT** - Use icons without hardcoded colors:
\`\`\`jsx
<Button variant="primary" icon={<SaveIcon />}>Save</Button>
<Button variant="secondary" icon={<AddIcon />}>Add</Button>
\`\`\`

❌ **INCORRECT** - Don't use hardcoded hex colors:
\`\`\`jsx
<Button icon={<SaveIcon color="#FFFFFF" />}>Save</Button>
<Button icon={<AddIcon color="#1D4ED8" />}>Add</Button>
\`\`\`

### Icon Positioning

Icons can be positioned left or right:
\`\`\`jsx
<Button icon={<SaveIcon />} iconPosition="left">Save Document</Button>
<Button icon={<AddIcon />} iconPosition="right">Add Item</Button>
\`\`\`

Icons automatically inherit the correct color from design tokens based on the button variant.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'text'],
      description: 'Button variant based on visual hierarchy',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Loading state with spinner icon',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Icon position relative to text',
    },
    icon: {
      control: { type: 'select' },
      options: Object.keys(getIconSelectOptions()),
      description: 'Select an icon from our icon library, or choose "custom" to use any React element',
    },
    iconColor: {
      control: { type: 'select' },
      options: Object.keys(AVAILABLE_COLORS),
      description: 'Icon color using design tokens',
    },
    iconSize: {
      control: { type: 'range', min: 12, max: 32, step: 2 },
      description: 'Icon size in pixels',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Full width button',
    },
    children: {
      control: { type: 'text' },
      description: 'Button content/text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Primary button stories
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Button',
    iconPosition: 'left',
    icon: 'none',
    iconColor: 'currentColor',
    iconSize: 18,
    loading: false,
    disabled: false,
    fullWidth: false,
  },
  render: (args) => {
    // Map icon string to actual icon component
    const getIcon = (iconType: string) => {
      if (iconType === 'none' || !iconType) return undefined;
      if (iconType === 'custom') return <SaveIcon />; // Default custom icon
      
      // Get component from our icon library
      const IconComponent = getIconComponent(iconType as any);
      if (IconComponent) {
        return <IconComponent color={args.iconColor} size={args.iconSize} />;
      }
      
      return undefined;
    };

    return (
      <Button
        {...args}
        icon={getIcon(args.icon as string)}
      />
    );
  },
};

export const PrimaryWithSaveIcon: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Save Document',
    icon: <SaveIcon color="currentColor" />,
    iconPosition: 'left',
  },
};

export const PrimaryWithAddIcon: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Add Item',
    icon: <AddIcon color="currentColor" />,
    iconPosition: 'left',
  },
};

export const PrimaryWithClipIcon: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Attach File',
    icon: <ClipIcon color="currentColor" />,
    iconPosition: 'left',
  },
};

export const PrimaryWithCustomColors: Story = {
  args: {
    variant: 'secondary',
    size: 'large',
    children: 'Custom Colors',
    icon: <SaveIcon color="success-500" size={20} />,
    iconPosition: 'left',
  },
};

export const FlexibilityShowcase: Story = {
  name: 'Complete Icon System Demo',
  render: () => (
    <div className="storybook-demo-container">
      <div className="storybook-demo-row">
        <Button variant="primary" icon={<SaveIcon />}>Save</Button>
        <Button variant="secondary" icon={<AddIcon />}>Add</Button>
        <Button variant="text" icon={<ClipIcon />}>Attach</Button>
        <Button variant="primary" icon={<LinkExternalIcon />}>Link</Button>
      </div>
      
      <div className="storybook-demo-row">
        <Button variant="primary" icon={<SaveIcon color="success-500" />}>Success Green</Button>
        <Button variant="primary" icon={<AddIcon color="warning-500" />}>Warning Orange</Button>
        <Button variant="primary" icon={<ClipIcon color="error-500" />}>Error Red</Button>
        <Button variant="primary" icon={<HashIcon1 color="info-500" />}>Info Blue</Button>
      </div>
      
      <div className="storybook-demo-row">
        <Button variant="secondary" icon={<SaveIcon size={12} />} size="small">Small Icon</Button>
        <Button variant="secondary" icon={<AddIcon size={18} />} size="medium">Medium Icon</Button>
        <Button variant="secondary" icon={<ClipIcon size={24} />} size="large">Large Icon</Button>
      </div>
      
      <div className="storybook-demo-row">
        <Button variant="primary" icon={<Icon6 />} iconPosition="left">Icon Left</Button>
        <Button variant="primary" icon={<HashIcon2 />} iconPosition="right">Icon Right</Button>
        <Button variant="primary" loading iconPosition="left">Loading</Button>
      </div>
    </div>
  ),
};

export const PrimaryLoading: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Loading...',
    loading: true,
    icon: <SaveIcon />,
    iconPosition: 'left',
  },
};

// Secondary button stories
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'large',
    children: 'Button',
  },
};

export const SecondaryWithIcon: Story = {
  args: {
    variant: 'secondary',
    size: 'large',
    children: 'Add Item',
    icon: <AddIcon />,
    iconPosition: 'left',
  },
};

// Text button stories
export const Text: Story = {
  args: {
    variant: 'text',
    size: 'large',
    children: 'Button',
  },
};

export const TextWithIcon: Story = {
  args: {
    variant: 'text',
    size: 'large',
    children: 'Save',
    icon: <SaveIcon />,
    iconPosition: 'right',
  },
};

// Size variations
export const SizeSmall: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Small',
    icon: <AddIcon />,
    iconPosition: 'left',
  },
};

export const SizeMedium: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Medium',
    icon: <AddIcon />,
    iconPosition: 'left',
  },
};

export const SizeLarge: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Large',
    icon: <AddIcon />,
    iconPosition: 'left',
  },
};

// Disabled states
export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Disabled',
    disabled: true,
    icon: <SaveIcon />,
    iconPosition: 'left',
  },
};

// Icon only buttons
export const IconOnly: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    icon: <AddIcon />,
    iconPosition: 'left',
  },
};

// Icon positions
export const IconLeft: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Save Document',
    icon: <SaveIcon />,
    iconPosition: 'left',
  },
};

export const IconRight: Story = {
  args: {
    variant: 'secondary',
    size: 'large',
    children: 'Add New Item',
    icon: <AddIcon />,
    iconPosition: 'right',
  },
};