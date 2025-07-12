# Invoify UI Component Library

## Design System Overview

### Color Palette

#### Primary Colors
- **Primary 500**: `#0EA5E9` - Main brand color
- **Primary 600**: `#0284C7` - Hover states
- **Primary 50**: `#F0F9FF` - Light backgrounds

#### Neutral Colors
- **Neutral 900**: `#171717` - Primary text
- **Neutral 500**: `#737373` - Secondary text
- **Neutral 100**: `#F5F5F5` - Light backgrounds

#### Status Colors
- **Success**: `#22C55E` - Success states
- **Warning**: `#F59E0B` - Warning states
- **Error**: `#EF4444` - Error states

### Typography Scale

#### Display Text
- **Display 2XL**: 48px, Bold, Line height 1.1
- **Display XL**: 36px, Bold, Line height 1.2
- **Display LG**: 30px, Bold, Line height 1.2
- **Display MD**: 24px, Semibold, Line height 1.3
- **Display SM**: 20px, Semibold, Line height 1.4

#### Body Text
- **Body LG**: 18px, Regular, Line height 1.6
- **Body MD**: 16px, Regular, Line height 1.6
- **Body SM**: 14px, Regular, Line height 1.6
- **Caption**: 12px, Regular, Muted color

### Spacing System

Based on 8px grid system:
- **XS**: 4px
- **SM**: 8px
- **MD**: 16px
- **LG**: 24px
- **XL**: 32px
- **2XL**: 48px
- **3XL**: 64px

### Border Radius

- **SM**: 6px
- **MD**: 10px
- **LG**: 12px
- **XL**: 16px
- **2XL**: 20px

## Component Library

### Buttons

#### Primary Button
```tsx
<button className="btn-primary">
  Primary Action
</button>
```

#### Secondary Button
```tsx
<button className="btn-secondary">
  Secondary Action
</button>
```

#### Ghost Button
```tsx
<button className="btn-ghost">
  Ghost Action
</button>
```

#### Icon Button
```tsx
<button className="btn-icon">
  <Icon className="h-4 w-4" />
</button>
```

### Cards

#### Basic Card
```tsx
<div className="card">
  <div className="card-header">
    <h3 className="text-display-sm">Card Title</h3>
    <p className="text-body-sm text-muted-foreground">Card description</p>
  </div>
  <div className="card-content">
    Card content goes here
  </div>
</div>
```

#### Card with Footer
```tsx
<div className="card">
  <div className="card-header">...</div>
  <div className="card-content">...</div>
  <div className="card-footer">
    <button className="btn-primary">Action</button>
  </div>
</div>
```

### Form Elements

#### Input Field
```tsx
<div className="form-group">
  <label className="form-label">Label</label>
  <input className="form-input" placeholder="Placeholder" />
</div>
```

#### Textarea
```tsx
<div className="form-group">
  <label className="form-label">Label</label>
  <textarea className="form-textarea" placeholder="Placeholder"></textarea>
</div>
```

#### Select
```tsx
<div className="form-group">
  <label className="form-label">Label</label>
  <select className="form-select">
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
</div>
```

### Status Components

#### Success Status
```tsx
<div className="status-success">
  <CheckCircle className="h-3 w-3" />
  Success message
</div>
```

#### Warning Status
```tsx
<div className="status-warning">
  <AlertTriangle className="h-3 w-3" />
  Warning message
</div>
```

#### Error Status
```tsx
<div className="status-error">
  <XCircle className="h-3 w-3" />
  Error message
</div>
```

### Navigation

#### Navigation Link
```tsx
<a className="nav-link">
  <Icon className="h-4 w-4" />
  Link Text
</a>
```

#### Active Navigation Link
```tsx
<a className="nav-link active">
  <Icon className="h-4 w-4" />
  Active Link
</a>
```

### Progress

#### Progress Bar
```tsx
<div className="progress-bar">
  <div className="progress-fill" style={{ width: '60%' }}></div>
</div>
```

## Responsive Design

### Breakpoints
- **XS**: 475px
- **SM**: 640px
- **MD**: 768px
- **LG**: 1024px
- **XL**: 1280px
- **2XL**: 1536px

### Responsive Utilities

#### Container
```tsx
<div className="container-responsive">
  Content with responsive padding
</div>
```

#### Responsive Grid
```tsx
<div className="grid-responsive">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

#### Responsive Flex
```tsx
<div className="flex-responsive">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

## Animations & Micro-interactions

### Entrance Animations
- `animate-fade-in`: Fade in effect
- `animate-slide-up`: Slide up from bottom
- `animate-scale-in`: Scale in from center

### Hover Effects
- `hover-lift`: Subtle lift on hover
- `button-press`: Scale down on press

### Focus States
- `focus-ring`: Consistent focus ring

## Accessibility Features

### WCAG 2.1 Compliance
- Color contrast ratios meet AA standards
- Focus indicators are clearly visible
- Touch targets are minimum 44px
- Screen reader friendly markup

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Logical tab order
- Skip links for main content

### Reduced Motion
- Respects `prefers-reduced-motion` setting
- Animations can be disabled

## Usage Guidelines

### Do's
- Use consistent spacing from the 8px grid
- Follow the established color palette
- Maintain proper contrast ratios
- Use semantic HTML elements

### Don'ts
- Don't create custom colors outside the palette
- Don't use arbitrary spacing values
- Don't ignore focus states
- Don't use color alone to convey information

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Considerations

- CSS is optimized for minimal bundle size
- Animations use transform and opacity for better performance
- Critical CSS is inlined
- Non-critical styles are loaded asynchronously